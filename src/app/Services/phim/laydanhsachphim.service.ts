import { Injectable } from '@angular/core';
import { Http,Response,Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class LaydanhsachphimService {

  constructor(
  	private _http : Http
  	) { }
  LayDanhSachPhim() : Observable<any>{
  	let urlDSPhim = `http://sv2.myclass.vn/api/QuanLyPhim/LayDanhSachPhim?MaNhom=GP01`;
  	let obServe = this._http.get(urlDSPhim).map((result:Response) => result.json());
    return obServe;
  }
}
