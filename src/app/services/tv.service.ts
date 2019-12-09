import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Tv} from '../models/Tv';


@Injectable({
  providedIn: 'root'
})
export class TvService {
  tvUrl:string = 'https://api.themoviedb.org/3/tv/popular?api_key=85487a7774744be83c6029e80a114ac8&language=en-US&page=1'


  constructor(public http:HttpClient) { }
  getTv():Observable<Tv[]>{
    return this.http.get<Tv[]>(this.tvUrl);
}
}