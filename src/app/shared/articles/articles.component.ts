import { Component, OnInit } from '@angular/core';
import { HostListener } from "@angular/core";

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
})
export class ArticlesComponent implements OnInit {
  public news: number[] = [0, 1, 2, 3, 4, 5];
  public numbColumns : number=4;

  ngOnInit(): void {}

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
  constructor() {
      this.getScreenSize();
  }
}
