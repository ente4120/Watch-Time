import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {Watch} from './watch';
import { Observable,of } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class WatchService {

  constructor( private http: HttpClient) { }

  watches: Watch[];

  private watchUrl = 'http://localhost:3000/watch/';

  getWatch(id: number): Observable<Watch[]>{
    return this.http.get<Watch[]>(this.watchUrl+id).pipe()
  }

  updateWatch (watch: Watch): Observable<any> {
    var address = this.watchUrl+watch.id+'/'+watch.start;
    console.log(address);
    return this.http.put(address, watch, httpOptions).pipe()
  }

  createWatch (watch: Watch): Observable<any> {
    var address = this.watchUrl+watch.id;
    return this.http.post(address, watch, httpOptions).pipe()
  }
}
