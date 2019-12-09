import { Component, OnInit } from '@angular/core';
import { TvService } from '../../services/tv.service';
import { Tv} from '../../models/Tv';


@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css']
})
export class TvComponent implements OnInit {
  tv:Tv[] = [];
  constructor(public tV:TvService) { }

  ngOnInit() {
    this.tV.getTv().subscribe( tv => {
      this.tv = tv["results"];
      this.tv.forEach(tv =>{
        var pic = tv["poster_path"];
        tv.img = "https://image.tmdb.org/t/p/w200/" + pic;
        tv.overview = tv['overview'];
        tv.first_air_date = tv['first_air_date'];
      })
    });
  }

}
