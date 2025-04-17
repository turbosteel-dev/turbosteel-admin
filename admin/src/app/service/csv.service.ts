import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { saveAs } from 'file-saver';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CsvService {

  private baseUrl = 'http://localhost:3000';  

  constructor(private http: HttpClient) {}

  downloadCSV() {
    let url = this.baseUrl + '/api/individualHouse/download'
    this.http.get(url, { responseType: 'blob' })
      .subscribe((response: Blob) => {
        saveAs(response, 'individual_houses.csv');
      }, error => {
        console.error('Error downloading CSV', error);
      });
  }



  downloadDistributorCSV() {
    let url = this.baseUrl + '/api/distributors/distributorsD/downloadCsv'
    this.http.get(url, { responseType: 'blob' })
      .subscribe((response: Blob) => {
        saveAs(response, 'distributors.csv');
      }, error => {
        console.error('Error downloading CSV', error);
      });
  }


  downloadArchitectsCSV() {
    let url = this.baseUrl + '/api/architects/architectsData/download'
    this.http.get(url, { responseType: 'blob' })
      .subscribe((response: Blob) => {
        saveAs(response, 'architects.csv');
      }, error => {
        console.error('Error downloading CSV', error);
      });
  }


  downloadMasonsCSV() {
    let url = this.baseUrl + '/api/mansons/downloadMasons/download'
    this.http.get(url, { responseType: 'blob' })
      .subscribe((response: Blob) => {
        saveAs(response, 'masons.csv');
      }, error => {
        console.error('Error downloading CSV', error);
      });
  }


  downloadDealerShipCSV() {
    let url = this.baseUrl + '/api/dealership/downloadDealerShip/download'
    this.http.get(url, { responseType: 'blob' })
      .subscribe((response: Blob) => {
        saveAs(response, 'delearship.csv');
      }, error => {
        console.error('Error downloading CSV', error);
      });
  }

  uploadCSV(file: File) {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);
    return this.http.post(this.baseUrl + '/api/distributors/distributorsD/uploadCsv', formData, {
      headers: new HttpHeaders(),
    });
  }


  downloadImage(imageUrl: string): Observable<Blob> {
    return this.http.get(imageUrl, { responseType: 'blob' });
  }
}
