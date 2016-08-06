import {Component, OnInit, Inject, ChangeDetectorRef} from '@angular/core';
import { Chat } from './chat';
import { ChatDetailComponent } from './chat-detail.component';
import { ChatService } from './chat.service';


@Component({
    selector: 'my-app',
    template: `
    <h2>Chats</h2>
    <ul>
      <li *ngFor="let chat of chats" (click)="onSelect(chat)">
        <span class="badge">{{chat.id}}</span> {{chat.name}}
      </li>
    </ul>
    <chat-detail [chat]="selectedChat"></chat-detail>
    `
    directives: [ChatDetailComponent]
    providers: [ChatService]
})

export class AppComponent implements OnInit {
  title = 'Chats';
  chats: Chat[];
  selectedChat: Chat;
  constructor(@Inject(ChatService) private chatService: ChatService,
          @Inject(ChangeDetectorRef) changeDetectorRef : ChangeDetectorRef) {
    this.changeDetectorRef = changeDetectorRef;
  }
  
  ngOnInit() {
    this.getChats();
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