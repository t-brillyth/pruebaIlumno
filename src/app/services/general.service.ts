import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GLOBAL } from './global';
import { Observable } from 'rxjs';
import { Register } from '../models/register.model';

@Injectable()
export class GeneralService {
  url: string;

  constructor(private _http: HttpClient) { 
    this.url = GLOBAL.url;
  }

  getNews():Observable<any> {
    return this._http.get(this.url+'noticias');
  }

  getPrograms():Observable<any> {
    return this._http.get(this.url+'programas');
  }

  register(register: Register): Observable<any> {
    let json = JSON.stringify(register);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.post(this.url+'registro', json, {headers: headers});
  }
}
