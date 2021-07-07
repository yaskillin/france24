import { Component, Input, OnInit } from '@angular/core';
import { HostListener } from "@angular/core";
import { categorie } from 'src/models/categorie';
import { News } from 'src/models/news';
import { CategoriesService } from 'src/services/categories/categories.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
})
export class ArticlesComponent implements OnInit {
  @Input() categorie: categorie;
  public news: News[] = [];
  public numbColumns : number=4;

  ngOnInit(): void {
    if(this.categorie!=null)
    {
      this.categorieService.getNewsByCategorie(this.categorie.id,1).subscribe(
        (data)=>{
          data.data.forEach((element) => {
            var currentNew: News = {
              title:element.title,
              categorie:this.categorie.id,
              description:element.description,
              thumbnail_url:element.thumbnail_url
            };
            this.news.push(currentNew);
          });
      });
    }
    console.log(this.news);
  }

  scrHeight:any;
  scrWidth:any;

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
        this.scrHeight = window.innerHeight;
        this.scrWidth = window.innerWidth;
        if(this.scrWidth<450)
        {
          this.numbColumns=12;
        }
        else if(this.scrWidth<700)
        {
          this.numbColumns=6;
        }
        else
        {
          this.numbColumns=4;
        }
  }

  // Constructor
  constructor(private categorieService:CategoriesService) {
      this.getScreenSize();
  }
}
