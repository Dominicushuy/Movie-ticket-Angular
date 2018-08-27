import { Ghe } from './DanhSachGhe.class';
export class DanhSachGhe {
	public maGhe : number;
	public listMa : Ghe[]
	constructor(maghe: number){
		this.maGhe = maghe;
		this.listMa = []
	}
	addlist(list :any){
		this.listMa.push(list);
	}
	
}