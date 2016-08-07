import { Component, OnInit, Inject, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';

import { Chat } from './chat';
import { ChatService } from './chat.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: 'templates/dashboard.component.html',
})
export class DashboardComponent implements OnInit {

  chats: Chat[] = [];
  private changeDetectorRef: ChangeDetectorRef;
  private chatService: ChatService;
  private router: Router;
  
  constructor(@Inject(ChatService) private chatService: ChatService,
            @Inject(ChangeDetectorRef) changeDetectorRef : ChangeDetectorRef,
            @Inject(Router) router : Router) {
              this.changeDetectorRef = changeDetectorRef;
              this.router = router;
              this.chatService.getChats()
                .then(chats => {
                  this.chats = chats.slice(1, 5);
                  this.changeDetectorRef.detectChanges();
                });
  }
  ngOnInit() {
    // does not work
  }
  gotoDetail(chat: Chat) {
    let link = ['/detail', chat.id];
    this.router.navigate(link);
  }
}