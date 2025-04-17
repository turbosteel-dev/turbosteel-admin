import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/service/http.service';


@Component({
  selector: 'app-view-masons',
  templateUrl: './view-masons.component.html',
  styleUrls: ['./view-masons.component.scss']
})
export class ViewMasonsComponent {
  recipeUrl = '/api/forms/masonsBanner';
  recipeData: any;
  displayedColumns: string[] = ['title', 'description'];

  constructor(private activatedRoute: ActivatedRoute, private httpService: HttpService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      if(params.get('id')){
        this.loadFeatureViewData(params.get('id'));
      }
    })
  }

  loadFeatureViewData(id:any) {
    this.httpService.get(this.recipeUrl + '/' + id).subscribe(response => {
      this.recipeData = response;
    })
  }
}
