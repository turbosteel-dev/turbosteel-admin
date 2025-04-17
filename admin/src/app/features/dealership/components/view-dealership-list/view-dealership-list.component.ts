import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/service/http.service';
import { HttpClient } from '@angular/common/http';
import { CsvService } from 'src/app/service/csv.service';


@Component({
  selector: 'app-view-dealership-list',
  templateUrl: './view-dealership-list.component.html',
  styleUrls: ['./view-dealership-list.component.scss']
})
export class ViewDealershipListComponent {
  companyListUrl = '/api/dealership';
  companyListData: any;
  displayedColumns: string[] = ['title', 'description'];

  constructor(private activatedRoute: ActivatedRoute,private csv: CsvService, private httpClient: HttpClient, private httpService: HttpService) { }

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


  downloadFile(url: string) {
    this.csv.downloadImage(url).subscribe((blob: Blob) => {
      const fileName = this.extractFileNameFromUrl(url);
      const fileExtension = this.extractFileExtension(url);
      
      const anchor = document.createElement('a');
      const objectUrl = URL.createObjectURL(blob);
      anchor.href = objectUrl;
      anchor.download = `${fileName}${fileExtension}`;
      document.body.appendChild(anchor);
      anchor.click();
      document.body.removeChild(anchor);
      URL.revokeObjectURL(objectUrl);
    });
  }
  
  private extractFileNameFromUrl(url: string): string {
    const urlParts = url.split('/');
    const fileNameWithExtension = urlParts[urlParts.length - 1];  
    return fileNameWithExtension.split('.')[0];
  }
  
  private extractFileExtension(url: string): string {
    const extension = url.split('.').pop();  
    return `.${extension}`;
  }
}
