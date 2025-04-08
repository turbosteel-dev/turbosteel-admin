import { Component } from '@angular/core';

@Component({
  selector: 'app-left-sidenav',
  templateUrl: './left-sidenav.component.html',
  styleUrls: ['./left-sidenav.component.scss']
})
export class LeftSidenavComponent {
  menus = [
    {
      name: "Site",
      path: "/site",
      permission: "site",
      icons: 'assets/images/icons/site.svg'
    }
  ];
}
