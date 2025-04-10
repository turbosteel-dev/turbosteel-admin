import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/service/http.service';



@Component({
  selector: 'app-view-product-feature-detail',
  templateUrl: './view-product-feature-detail.component.html',
  styleUrls: ['./view-product-feature-detail.component.scss']
})
export class ViewProductFeatureDetailComponent {
  recipeUrl = '/api/productFeature/productFeatureDetail';
  recipeData: any;
  displayedColumns: string[] = ['title', 'description'];

  constructor(private activatedRoute: ActivatedRoute, private httpService: HttpService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      if (params.get('id')) {
        this.loadFeatureViewData(params.get('id'));
      }
    })
  }

  loadFeatureViewData(id: any) {
    this.httpService.get(this.recipeUrl + '/' + id).subscribe(response => {
      this.recipeData = response;
    })
  }
}
