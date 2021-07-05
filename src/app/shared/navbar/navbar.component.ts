import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { categorie } from 'src/models/categorie';
import { CategoriesService } from 'src/services/categories/categories.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  navbarOpen = false;
  categories : categorie[];

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
  constructor(private router: Router,private categoriesService : CategoriesService) { }

  ngOnInit(): void {
    this.categoriesService.getCategories().subscribe((categories)=>{
      console.log(categories);
    })
  }
  onChange(event)
  {
    if(event.target.textContent!="Catégories")
    {
      console.log(event);
      this.router.navigate(['categorie',event.target.textContent]);
    }
  }


}
