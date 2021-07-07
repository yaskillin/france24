import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { categorie } from 'src/models/categorie';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.scss']
})
export class CategorieComponent implements OnInit {
  public categorie:categorie;
  constructor(private route:ActivatedRoute) {

   }

  ngOnInit(): void {

    this.route.params.subscribe(params=>{
      this.categorie=JSON.parse(params.categorie);
    });
  }

}
