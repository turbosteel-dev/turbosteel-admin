import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/service/http.service';



@Component({
  selector: 'app-view-facilities-category',
  templateUrl: './view-facilities-category.component.html',
  styleUrls: ['./view-facilities-category.component.scss']
})
export class ViewFacilitiesCategoryComponent {
  recipeUrl = '/api/facilities/facilitiesCategory'
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

