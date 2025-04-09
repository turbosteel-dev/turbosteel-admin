import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/service/http.service';


@Component({
  selector: 'app-product-banner',
  templateUrl: './product-banner.component.html',
  styleUrls: ['./product-banner.component.scss']
})
export class ProductBannerComponent {
 banner: any[] = [];
  bannerUrl = '/api/product/productBanner'
  displayedColumns: string[] = ['title','action'];
  responseData:any;

  constructor(private http: HttpService, private router: Router,  private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.loadBanner();
  }

  loadBanner(): void {
    this.http.get(this.bannerUrl).subscribe(res =>{
      this.banner = res as any;
    })
  }

  onClickView(id:any): void {
    this.router.navigate(['view',id], {relativeTo: this.activatedRoute});
  }

  onClickEdit(id:any): void {
    this.router.navigate(['edit',id], {relativeTo: this.activatedRoute});
  }


  onClickDelete(id:any){
    let url = this.bannerUrl + '/' + id;
    this.http.delete(url).subscribe(response=>{
      this.responseData = response;
      this.banner = [];
      this.loadBanner();
    })
  }

  onClickAdd(){
    this.router.navigate(['new'], {relativeTo: this.activatedRoute});
  }
}