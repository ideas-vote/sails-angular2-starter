import { Injectable, Inject }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Chat } from './chat';

@Injectable()
export class ChatService {
  private chatsUrl = 'api/chat';  // URL to web api
  
  constructor(@Inject(Http) private http: Http) { }
  getChats() {
    return this.http.get(this.chatsUrl)
               .toPromise()
               .then(response => response.json() as Chat[])
               .catch(this.handleError);
  }
  getChat(id: number) {
      let url = `${this.chatsUrl}/${id}`;
    return this.http.get(url)
               .toPromise()
               .then(response => response.json() as Chat[])
               .catch(this.handleError);
  }
  save(chat: Chat): Promise<Chat>  {
    if (chat.id) {
      return this.put(chat);
    }
    return this.post(chat);
  }
  delete(chat: Chat) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let url = `${this.chatsUrl}/${chat.id}`;
    return this.http
               .delete(url, {headers: headers})
               .toPromise()
               .catch(this.handleError);
  }
  // Add new Chat
  private post(chat: Chat): Promise<Hero> {
    let headers = new Headers({
      'Content-Type': 'application/json'});
    return this.http
               .post(this.chatsUrl, JSON.stringify(chat), {headers: headers})
               .toPromise()
               .then(res => res.json())
               .catch(this.handleError);
  }
  // Update existing Chat
  private put(chat: Chat) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let url = `${this.chatsUrl}/${chat.id}`;
    return this.http
               .put(url, JSON.stringify(chat), {headers: headers})
               .toPromise()
               .then(() => chat)
               .catch(this.handleError);
  }
  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}