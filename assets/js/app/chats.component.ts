import {Component, OnInit, Inject, ChangeDetectorRef} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Chat } from './chat';
import { ChatService } from './chat.service';


@Component({
    selector: 'my-chats',
    templateUrl: 'templates/chats.component.html',
})

export class ChatsComponent implements OnInit, OnDestroy {
  title = 'Chats';
  chats: Chat[];
  selectedChat: Chat;
  private sub: any;
  private router: Router;
  
  constructor(@Inject(ChatService) private chatService: ChatService,
          @Inject(ChangeDetectorRef) changeDetectorRef : ChangeDetectorRef,
          @Inject(ActivatedRoute) private route: ActivatedRoute,
          @Inject(Router) router : Router) {
    this.changeDetectorRef = changeDetectorRef;
    this.router = router;
    this.getChats();
   }
  
  ngOnInit() {
    // not working
  }
  
  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  onSelect(chat: Chat) { this.selectedChat = chat; }
  getChats() {
    this.chatService.getChats().then(function(chats){
      this.chats = chats;
      // for some reason Angular 2 RC4 does not detect the change...
      this.changeDetectorRef.detectChanges();
    }.bind(this));
  }
  gotoDetail() {
    let link = ['/detail', this.selectedChat.id];
    this.router.navigate(link);
  }
}