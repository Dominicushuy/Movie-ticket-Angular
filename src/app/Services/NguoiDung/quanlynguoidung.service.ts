import { Injectable } from '@angular/core';
import { NguoiDung } from '../../Models/NguoiDung.class';
import { Http,Headers,Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class QuanlynguoidungService {

  constructor( private _http : Http ) { }

  DangKyNguoiDung( user : NguoiDung ){
  	let urlDangKy = `http://sv2.myclass.vn/api/QuanLyNguoiDung/ThemNguoiDung`;
  	let headerDangKy = new Headers();
  	headerDangKy.append('Content-Type','application/json;charset=UTF-8');
  	let observable : Observable <any> = this._http.post( urlDangKy, user , {headers:headerDangKy}).map((result : Response) => result.json());
  	return observable;
  }

  LayDanhSachNguoiDungTheoNhom(){
    let urlDSND = `http://sv2.myclass.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01`;
    let observable = this._http.get(urlDSND).map((result:Response) => result.json());
    return observable;
  }

  CapNhatNguoiDung( user : NguoiDung ){
    let urlCapNhat = `http://sv2.myclass.vn/api/QuanLyNguoiDung/CapNhatThongTin`;
    let headerDangKy = new Headers();
    headerDangKy.append('Content-Type','application/json;charset=UTF-8');
    let observable : Observable <any> = this._http.post( urlCapNhat, user , {headers:headerDangKy}).map((result : Response) => result.json());
    return observable;
  }

}
