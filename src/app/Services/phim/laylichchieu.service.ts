import { Injectable } from '@angular/core';
import { Http,Response,Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class LaylichchieuService {

  constructor(
  	private _http:Http
  	) { }

  LayChiTietPhim(maPhim) :Observable<any> {
  	let urlChiTietPhim = `http://sv2.myclass.vn/api/QuanLyPhim/LayChiTietPhim?MaPhim=${maPhim}`;
    let obServe = this._http.get(urlChiTietPhim).map((result:Response) => result.json());
    return obServe;
  }
  LayChiTietPhongVe(maLichChieu){
    let url = `http://sv2.myclass.vn/api/QuanLyPhim/ChiTietPhongVe?MaLichChieu=${maLichChieu}`;
    let obServe = this._http.get(url).map((kq:Response) => kq.json());
    return obServe;
  }

}
