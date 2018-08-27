import { Injectable } from '@angular/core';
import { Http,Headers,Response } from '@angular/http';
import { Observable } from 'rxjs';
import { UserLogin } from '../../Models/TaiKhoan.class';
import 'rxjs/add/operator/map';

import swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class DangNhapService {

  constructor( private _http : Http ) { }

  DangNhapService( userLog : any ){
  	let userResult: UserLogin = new UserLogin();

  	let apiDangNhap = `http://sv2.myclass.vn/api/QuanLyNguoiDung/DangNhap?taikhoan=${userLog.taikhoan}&matkhau=${userLog.matkhau}`;
  	let observable : Observable<any> = this._http.post(apiDangNhap, userLog).map((result: Response) => result.json());
  	return observable;
  }
}
