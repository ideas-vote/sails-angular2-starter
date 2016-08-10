import { Component, EventEmitter, Input, OnInit, OnDestroy, Inject, ChangeDetectorRef, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Chat } from './chat';
import { ChatService } from './chat.service';

@Component({
  selector: 'chat-detail',
  templateUrl: 'templates/chat-detail.component.html'
})
export class ChatDetailComponent implements OnInit, OnDestroy {
  @Input() chat: Chat;
  @Output() close = new EventEmitter();
  error: any;
  navigated = false; // true if navigated here
  private changeDetectorRef: ChangeDetectorRef;
  private sub: any;

  constructor(@Inject(ChatService) private chatService: ChatService,
          @Inject(ChangeDetectorRef) changeDetectorRef : ChangeDetectorRef,
          @Inject(ActivatedRoute) private route: ActivatedRoute) {
            this.changeDetectorRef = changeDetectorRef;
    this.sub = this.route.params.subscribe(params => {
      if (params['id'] !== undefined) {
        let id = +params['id']; // (+) converts string 'id' to a number
        this.navigated = true;
        this.chatService.getChat(id)
          .then(chat => {
            this.chat = chat;
            this.changeDetectorRef.detectChanges();
          });
      } else {
        this.navigated = false;
        this.chat = new Chat();
      }
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
  
  save() {
    this.chatService
        .save(this.chat)
        .then(chat => {
          this.chat = chat; // saved chat, w/ id if new
          this.goBack(chat);
        })
        .catch(error => this.error = error); // TODO: Display error message
  }
  
  goBack(savedChat: Chat = null) {
    this.close.emit(savedChat);
    if (this.navigated) {
      window.history.back();
    }
  }
}