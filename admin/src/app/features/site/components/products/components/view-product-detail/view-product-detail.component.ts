import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/service/http.service';


@Component({
  selector: 'app-view-product-detail',
  templateUrl: './view-product-detail.component.html',
  styleUrls: ['./view-product-detail.component.scss']
})
export class ViewProductDetailComponent {
  companyListUrl = '/api/product/productDetail';
  companyListData: any;
  displayedColumns: string[] = ['title', 'description'];

  constructor(private activatedRoute: ActivatedRoute, private httpService: HttpService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      if(params.get('id')){
        this.loadcompanyListViewData(params.get('id'));
      }
    })
  }

  loadcompanyListViewData(id:any) {
    this.httpService.get(this.companyListUrl + '/' + id).subscribe(response => {
      this.companyListData = response;
      console.log(this.companyListData)
    })
  }
}

