import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/service/http.service';


@Component({
  selector: 'app-about-header',
  templateUrl: './about-header.component.html',
  styleUrls: ['./about-header.component.scss']
})
export class AboutHeaderComponent {
  corporate: any[] = [];
  corporateUrl = '/api/header/aboutHeader';
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

