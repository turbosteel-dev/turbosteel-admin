import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-view-media-image',
  templateUrl: './view-media-image.component.html',
  styleUrls: ['./view-media-image.component.scss']
})
export class ViewMediaImageComponent {
recipeUrl = '/api/media/mediaDetail';
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
