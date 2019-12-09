import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Movies } from '../models/Movies';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  movieUrl:string = 'https://api.themoviedb.org/3/movie/now_playing?api_key=85487a7774744be83c6029e80a114ac8&language=en-US&page=1'
  

  constructor(public http:HttpClient) { }
    getMovies():Observable<Movies[]>{
      return this.http.get<Movies[]>(this.movieUrl);

    }


}
