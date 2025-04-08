import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/service/http.service';


@Component({
  selector: 'app-view-about-us',
  templateUrl: './view-about-us.component.html',
  styleUrls: ['./view-about-us.component.scss']
})
export class ViewAboutUsComponent {
  companyListUrl = '/api/home/homeAboutUs';
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

