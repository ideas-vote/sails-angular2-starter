import { Inject, Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Hero }           from './hero';
@Injectable()
export class ChatSearchService {
  constructor(@Inject(Http) private http: Http) {}
  search(term: string) {
    return this.http
               .get(`api/chat/?name=${term}`)
               .map((r: Response) => r.json() as Chat[]);
  }
}