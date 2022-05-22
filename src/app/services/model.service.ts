import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModelService {

  api = '127.0.0.1:5000'

  constructor(
    private http: HttpClient
  ) { }

  getEndPoint(): Observable<any> {
    const res = this.http.get('http://localhost:5000/predict')
    console.log(res);

    return res
  }

  getPrediction(tweet_url): Observable<any> {
    return this.http.post('http://localhost:5000/predict', {
      'tweet_url': tweet_url
    });
  }

}
