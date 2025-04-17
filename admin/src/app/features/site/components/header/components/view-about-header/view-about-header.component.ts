import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/service/http.service';



@Component({
  selector: 'app-view-about-header',
  templateUrl: './view-about-header.component.html',
  styleUrls: ['./view-about-header.component.scss']
})
export class ViewAboutHeaderComponent {
 recipeUrl = '/api/header/aboutHeader';
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

