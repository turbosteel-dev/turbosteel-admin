import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/service/http.service';



@Component({
  selector: 'app-view-turbosteel-header',
  templateUrl: './view-turbosteel-header.component.html',
  styleUrls: ['./view-turbosteel-header.component.scss']
})
export class ViewTurbosteelHeaderComponent {
recipeUrl = '/api/header/whyTurboSteelHeader';
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

