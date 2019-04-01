import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
// import 'rxjs/Rx';
import 'rxjs/add/operator/map';
// import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';


@Injectable()

export class FileService {

  constructor(private http: HttpClient) {}

  downloadFile(file: string) {
    const body = {filename: file};

    return this.http.post('http://localhost:4200/file/download', body, {
      responseType : 'blob',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }
}
