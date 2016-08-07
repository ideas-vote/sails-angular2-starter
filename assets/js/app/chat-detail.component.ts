import { Component, OnInit, OnDestroy, Inject, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Chat } from './chat';
import { ChatService } from './chat.service';

@Component({
  selector: 'chat-detail',
  templateUrl: 'templates/chat-detail.component.html'
})
export class ChatDetailComponent implements OnInit, OnDestroy {
  chat: Chat;
  private changeDetectorRef: ChangeDetectorRef;
  private sub: any;

  constructor(@Inject(ChatService) private chatService: ChatService,
          @Inject(ChangeDetectorRef) changeDetectorRef : ChangeDetectorRef,
          @Inject(ActivatedRoute) private route: ActivatedRoute) {
            this.changeDetectorRef = changeDetectorRef;
    this.sub = this.route.params.subscribe(params => {
      let id = +params['id']; // (+) converts string 'id' to a number
      this.chatService.getChat(id)
        .then(chat => {
          this.chat = chat;
          this.changeDetectorRef.detectChanges();
        });
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
  
  goBack() {
    window.history.back();
  }
}