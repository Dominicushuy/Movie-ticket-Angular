import { Injectable } from '@angular/core';
import { Http,Headers,Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor( private _http : Http ) { }

    DatVe( ve : any ){
    let apiDatVe = `http://sv2.myclass.vn/api/QuanLyDatVe/DatVe`;
    let header = new Headers();
    header.append('Content-Type','application/json;charset=UTF-8');
    let observable : Observable <any> = this._http.post( apiDatVe, ve , {headers:header}).map((result : Response) => result.json());
    return observable;
  }

}
