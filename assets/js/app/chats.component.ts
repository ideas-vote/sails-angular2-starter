import {Component, OnInit, Inject, ChangeDetectorRef} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Chat } from './chat';
import { ChatDetailComponent } from './chat-detail.component';
import { ChatService } from './chat.service';


@Component({
    selector: 'my-chats',
    template: `
    <h2>Chats</h2>
    <ul>
      <li *ngFor="let chat of chats" (click)="onSelect(chat)">
        <span class="badge">{{chat.id}}</span> {{chat.name}}
      </li>
    </ul>
    <chat-detail [chat]="selectedChat"></chat-detail>
    `,
    directives: [ChatDetailComponent],
})

export class ChatsComponent implements OnInit {
  title = 'Chats';
  chats: Chat[];
  selectedChat: Chat;
  private sub: any;
  
  constructor(@Inject(ChatService) private chatService: ChatService,
          @Inject(ChangeDetectorRef) changeDetectorRef : ChangeDetectorRef,
          @Inject(ActivatedRoute) private route: ActivatedRoute) {
    this.changeDetectorRef = changeDetectorRef;
    this.sub = this.route.params.subscribe(params => {
      //let id = +params['id']; // (+) converts string 'id' to a number
      this.getChats();
    });
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
}