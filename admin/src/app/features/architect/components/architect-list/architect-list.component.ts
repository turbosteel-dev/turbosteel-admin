import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CsvService } from 'src/app/service/csv.service';
import { HttpService } from 'src/app/service/http.service';



@Component({
  selector: 'app-architect-list',
  templateUrl: './architect-list.component.html',
  styleUrls: ['./architect-list.component.scss']
})
export class ArchitectListComponent {
 banner: any[] = [];
  bannerUrl = '/api/architects'
  displayedColumns: string[] = ['title','phone','email','action'];
  responseData:any;

  constructor(private http: HttpService, private csv: CsvService, private router: Router,  private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.loadBanner();
  }

  loadBanner(): void {
    this.http.get(this.bannerUrl).subscribe(res =>{
      this.banner = res as any;
    })
  }

  onClickView(id:any): void {
    this.router.navigate(['view',id], {relativeTo: this.activatedRoute});
  }

  onClickDelete(id:any){
    let url = this.bannerUrl + '/' + id;
    this.http.delete(url).subscribe(response=>{
      this.responseData = response;
      this.banner = [];
      this.loadBanner();
    })
  }

  onClickDownload(){
    this.csv.downloadArchitectsCSV();
  }
}