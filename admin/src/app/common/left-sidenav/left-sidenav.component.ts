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
      icons: 'assets/images/icons/Site.svg'
    },
    {
      name: "Price Tag",
      path: "/price-tag",
      permission: "price-tag",
      icons: 'assets/images/icons/price tag.svg'
    },
    {
      name: "Individual House",
      path: "/individual-house",
      permission: "individual-house",
      icons: 'assets/images/icons/Individual house.svg'
    },
    {
      name: "Masons & Barbenders",
      path: "/masons",
      permission: "masons",
      icons: 'assets/images/icons/Mason and barbenders.svg'
    },
    {
      name: "Distributors",
      path: "/distributors",
      permission: "distributors",
      icons: 'assets/images/icons/mANAGE DISTRIBUTORS.svg'
    },
    {
      name: "Manage Distributors",
      path: "/manage-distributors",
      permission: "manage-distributors",
      icons: 'assets/images/icons/mANAGE DISTRIBUTORS.svg'
    },
    {
      name: "Dealership",
      path: "/dealership",
      permission: "dealership",
      icons: 'assets/images/icons/DEALERSHIP.svg'
    }
  ];
}
