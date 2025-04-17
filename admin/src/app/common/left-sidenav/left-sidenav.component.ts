import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/service/http.service';


@Component({
  selector: 'app-left-sidenav',
  templateUrl: './left-sidenav.component.html',
  styleUrls: ['./left-sidenav.component.scss']
})
export class LeftSidenavComponent {
  dropdownVisible = false;
  userId:any;
  userUrl = '/api/admin'
  userDetail:any;
  userRole: string | null = null;

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
      name: "Architect Registration",
      path: "/architects",
      permission: "architects",
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
      name: "Dealership",
      path: "/dealership",
      permission: "dealership",
      icons: 'assets/images/icons/DEALERSHIP.svg'
    }
  ];

  
  constructor(private router: Router, private http: HttpService) { 
    this.userId = localStorage.getItem('userId')
  }


  ngOnInit(){
    this.userRole = localStorage.getItem('userRole');
    this.getUser();
  }

  getUser(){
    let url = this.userUrl + '/' + this.userId;
    this.http.get(url).subscribe(response =>{
      this.userDetail = response;
      console.log(this.userDetail)
    })
}

  canAccessUserManagement(): boolean {
    return this.userRole === 'superAdmin';
  }


  onClickRoutes(path: string) {
    this.router.navigate([path]);
  }

  onClickLogout() {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    this.router.navigate(['/login']);
  }


  toggleDropdown() {
    this.dropdownVisible = !this.dropdownVisible;
  }


  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    const targetElement = event.target as HTMLElement;
    if (!targetElement.closest('.details') && !targetElement.closest('.dropdown')) {
      this.dropdownVisible = false;
    }
  }


  onClickProfile(){

  }

}
