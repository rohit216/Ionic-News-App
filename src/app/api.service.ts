import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  Api_key="76a760e7627a4be7bdce61c4f230810d";

  constructor(private http:HttpClient) { }

  getNews(){
    return this.http.get(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${this.Api_key}`);
  }
}
