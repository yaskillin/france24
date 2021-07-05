import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.scss']
})
export class CategorieComponent implements OnInit {
  public catName:string;
  constructor(private route:ActivatedRoute) {

   }

  ngOnInit(): void {

    this.route.params.subscribe(params=>{
      this.catName=params.name;
    });
  }

}
