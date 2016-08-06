import {Injectable} from '@angular/core';
import {CHATS} from './mock-chats';

@Injectable()
export class ChatService {
    getChats() {
        return new Promise < Hero[] > (resolve =>
            setTimeout(() => resolve(CHATS), 2000) // 2 seconds
        );
    }
}