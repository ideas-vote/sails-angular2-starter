import {Injectable} from '@angular/core';
import {CHATS} from './mock-chats';

@Injectable()
export class ChatService {
    getChats() {
        return new Promise < Hero[] > (resolve =>
            setTimeout(() => resolve(CHATS))
        );
    }
    
    getChat(id: number) {
        return this.getChats()
             .then(chats => chats.find(chat => chat.id === id));
    }
}