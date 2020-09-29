import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  queryTerm:string;
  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  submitHandler(event){
    event.preventDefault();
    this.router.navigate(['/movieslist'], {queryParams:{m:this.queryTerm}});
  }

}
