import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/service/http.service';


@Component({
  selector: 'app-in-house-detail',
  templateUrl: './in-house-detail.component.html',
  styleUrls: ['./in-house-detail.component.scss']
})
export class InHouseDetailComponent {
corporate: any[] = [];
  corporateUrl = '/api/inHouse/InHouseDetail';
  displayedColumns: string[] = ['banner_title', 'options'];
  responseData: any;
  corporateData: any;

  constructor(private http: HttpService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadcorporates();
  }

  loadcorporates(): void {
    this.http.get(this.corporateUrl).subscribe(res => {
      this.corporateData = res as any;
    })
  }


  onClickView(id: any): void {
    this.router.navigate(['view', id], { relativeTo: this.activatedRoute });
  }

  onClickEdit(id: any): void {
    this.router.navigate(['edit', id], { relativeTo: this.activatedRoute });
  }


  onClickDelete(id: any) {
     
    let url = this.corporateUrl + '/' + id;
    this.http.delete(url).subscribe(response => {
      this.responseData = response;
      this.corporateData = [];
      this.loadcorporates();
    })
  }

  onClickAdd() {
    this.router.navigate(['new'], { relativeTo: this.activatedRoute });
  }
}
