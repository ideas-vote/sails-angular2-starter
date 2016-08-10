import { Inject, Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
import { ChatSearchService } from './chat-search.service';
import { Chat } from './chat';

@Component({
  selector: 'chat-search',
  templateUrl: 'templates/chat-search.component.html',
  providers: [ChatSearchService]
})
export class ChatSearchComponent implements OnInit {
  chats: Observable<Chat[]>;
  private searchTerms = new Subject<string>();
  
  constructor(
    @Inject(ChatSearchService) private chatSearchService: ChatSearchService,
    @Inject(Router) private router: Router) {}
  // Push a search term into the observable stream.
  search(term: string) {
      this.searchTerms.next(term);
  }
  ngOnInit() {
    this.chats = this.searchTerms
      .debounceTime(300)        // wait for 300ms pause in events
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time
        // return the http search observable
        ? this.chatSearchService.search(term)
        // or the observable of empty chats if no search term
        : Observable.of<Chat[]>([]))
      .catch(error => {
        // TODO: real error handling
        console.log(error);
        return Observable.of<Chat[]>([]);
      });
  }
  gotoDetail(chat: Chat) {
    let link = ['/detail', chat.id];
    this.router.navigate(link);
  }
}