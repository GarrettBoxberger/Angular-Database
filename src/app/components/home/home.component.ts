import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Movies } from '../../models/Movies';
import { TvService } from '../../services/tv.service';
import { Tv} from '../../models/Tv';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  movies:Movies[] = [];
  tv:Tv[] = [];

  constructor(public mS:MovieService,public tV:TvService  ) { }

  ngOnInit() {
     this.mS.getMovies().subscribe( movies => {
       this.movies = movies["results"];
       this.movies.forEach(movie =>{
         var pic = movie["poster_path"];
         movie.img = "https://image.tmdb.org/t/p/w200/" + pic;
       })
     });

     this.tV.getTv().subscribe( tv => {
      this.tv = tv["results"];
      this.tv.forEach(tv =>{
        var pic = tv["poster_path"];
        tv.img = "https://image.tmdb.org/t/p/w200/" + pic;
      })
    });

  }

}
