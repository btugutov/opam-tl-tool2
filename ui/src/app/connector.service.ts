import { Injectable } from '@angular/core';
import { BehaviorSubject, ObservableInput } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConnectorService {

  constructor(private http: HttpClient) {
    // 
   }
   checkConnection() {
    // console.log("storeUser(user): user =>", user)
    var that = this;
    return new Promise(function (resolve, reject) {
      that.http.get('/api/summary').subscribe(
        res => {
          console.log("checkConnection res =>", res);
          resolve(res)
        },
        err => {
          console.log("checkConnection res =>", err);
          reject(err)
        }
      );
    })
  }
}
