import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Movies } from '../../models/Movies';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  movies:Movies[] = [];


  constructor(public mS:MovieService) { }

  ngOnInit() {
     this.mS.getMovies().subscribe( movies => {
       this.movies = movies["results"];
       this.movies.forEach(movie =>{
         var pic = movie["poster_path"];
         movie.img = "https://image.tmdb.org/t/p/w200/" + pic;
         movie.overview = movie['overview'];
         movie.release_date = movie['release_date'];
       })
     });

  }

}
