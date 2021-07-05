import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Constants } from 'src/utils/constants';


@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.scss']
})
export class SharedComponent implements OnInit {
  catName :string;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  seeMore(event){
    switch(event.target.id)
    {
      case 'btn1':this.catName=Constants.economie;break;
      case 'btn2':this.catName=Constants.sports;break;
    }
    this.router.navigate(['categorie',this.catName]);
  }

}
