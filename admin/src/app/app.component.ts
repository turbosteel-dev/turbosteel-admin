import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'manager';
  sidenav = false;
  data = true;

  constructor(public router: Router) {}

  
  ngOnInit(): void {
    this.router.events.subscribe((res) => {
      if (this.router.url.startsWith('/login') || this.router.url.startsWith('/forgot-password') || this.router.url.startsWith('/reset-password'))  {
        this.sidenav = false;
        this.data = true;
      } 
      else {
        this.sidenav = true;
        this.data = false;
      }
    });
  }
}