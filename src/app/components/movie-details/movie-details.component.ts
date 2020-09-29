import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../../../app/service/movies.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  movie: any;
  constructor(private service: MoviesService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(){
    this.activatedRoute.params
    .subscribe((params=>{
      let id= params['imdbID'];
      this.service.getMovieDetails(id)
      .subscribe(res=>this.movie=res)
    }))
  }

  onBack(){
    window.history.back();
  }

}
