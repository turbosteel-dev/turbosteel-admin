import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) { }

  baseUrl = 'https://turbo-steel-api-nkapt.ondigitalocean.app';

  get(url: string) {
    let userId = localStorage.getItem('token');
    let cookieHeaders;
    if (userId) {
      cookieHeaders = new HttpHeaders({ 'token': userId });
    }
    return this.httpClient.get(this.baseUrl + url, { headers: cookieHeaders });
  }

  post(url: string, data: any) {
    let userId = localStorage.getItem('token');
    let cookieHeaders;
    if (userId) {
      cookieHeaders = new HttpHeaders({ 'token': userId });
    }
    return this.httpClient.post(this.baseUrl + url, data, { headers: cookieHeaders });
  }

  put(url: string, data: any) {
    let userId = localStorage.getItem('token');
    let cookieHeaders;
    if (userId) {
      cookieHeaders = new HttpHeaders({ 'token': userId });
    }
    return this.httpClient.put(this.baseUrl + url, data, { headers: cookieHeaders });
  }

  delete(url: string) {
    let userId = localStorage.getItem('token');
    let cookieHeaders;
    if (userId) {
      cookieHeaders = new HttpHeaders({ 'token': userId });
    }
    return this.httpClient.delete(this.baseUrl + url, { headers: cookieHeaders });
  }
}

