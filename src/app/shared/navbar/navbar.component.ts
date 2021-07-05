import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
  constructor(private router: Router) { }

  ngOnInit(): void {
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