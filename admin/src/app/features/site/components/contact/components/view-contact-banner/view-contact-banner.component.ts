import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-view-contact-banner',
  templateUrl: './view-contact-banner.component.html',
  styleUrls: ['./view-contact-banner.component.scss']
})
export class ViewContactBannerComponent {
 recipeUrl = '/api/contact/contactBanner';
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

