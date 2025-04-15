import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/service/http.service';
import { CsvService } from 'src/app/service/csv.service';



@Component({
  selector: 'app-distributors-list',
  templateUrl: './distributors-list.component.html',
  styleUrls: ['./distributors-list.component.scss']
})
export class DistributorsListComponent {
banner: any[] = [];
  bannerUrl = '/api/distributors'
  displayedColumns: string[] = ['name','email','phone','action'];
  responseData:any;
  fileToUpload: File | null = null;
  uploadResponse: any = null;
  errorMessage: string = '';

  constructor(private http: HttpService, private csv: CsvService,private router: Router,  private activatedRoute: ActivatedRoute) {}

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

  onClickEdit(id:any): void {
    this.router.navigate(['edit',id], {relativeTo: this.activatedRoute});
  }


  onClickDelete(id:any){
    let url = this.bannerUrl + '/' + id;
    this.http.delete(url).subscribe(response=>{
      this.responseData = response;
      this.banner = [];
      this.loadBanner();
    })
  }

  onClickAdd(){
    this.router.navigate(['new'], {relativeTo: this.activatedRoute});
  }


  downloadCsv(){
    this.csv.downloadDistributorCSV();
  }

  onFileChange(event: any): void {
    this.fileToUpload = event.target.files[0];
  }


  uploadFile(): void {
    if (!this.fileToUpload) {
      this.errorMessage = 'Please select a file to upload.';
      return;
    }

    this.csv.uploadCSV(this.fileToUpload).subscribe(
      (response) => {
        this.uploadResponse = response;
        console.log('Upload successful:', response);
        this.loadBanner();
      },
      (error) => {
        this.errorMessage = `Error uploading file: ${error.message}`;
        console.error('Upload failed:', error);
      }
    );
  }
}
