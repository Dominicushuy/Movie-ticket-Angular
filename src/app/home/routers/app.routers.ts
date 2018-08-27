import { Routes, RouterModule } from '@angular/router';

import { LayoutHomeComponent } from '../layout-home/layout-home.component';
import { TrangChuComponent } from '../layout-home/trang-chu/trang-chu.component';

import { BannerComponent } from '../layout-home/trang-chu/banner/banner.component';
import { BannerLogoComponent } from '../layout-home/trang-chu/banner-logo/banner-logo.component';
import { BannerTextComponent } from '../layout-home/trang-chu/banner-text/banner-text.component';

import { TrangPhimComponent } from '../layout-home/trang-phim/trang-phim.component';
import { NavmenuComponent } from '../layout-home/trang-phim/navmenu/navmenu.component';
import { ContentPageComponent } from '../layout-home/trang-phim/content-page/content-page.component';
import { MovieDetailComponent } from '../layout-home/trang-phim/content-page/movie-detail/movie-detail.component';

import { ContainerLayoutComponent } from '../layout-home/trang-phim/container-layout/container-layout.component';
import { ChitietComponent } from '../layout-home/trang-phim/content-page/chitiet/chitiet.component';
import { PhimdangchieuComponent} from '../layout-home/trang-phim/content-page/phimdangchieu/phimdangchieu.component'
import { SelectedallComponent } from '../layout-home/trang-phim/content-page/selectedall/selectedall.component';
import { BookingComponent } from '../layout-home/trang-phim/content-page/booking/booking.component'
import { ThanhToanComponent } from '../layout-home/trang-phim/content-page/thanh-toan/thanh-toan.component'

export const appRoutes : Routes = [

	{
		path: '',
		component:TrangChuComponent
	},
	{	
		path:'home',
		component :LayoutHomeComponent,
		children:[
			{
				path: '',
				component:TrangPhimComponent,
				children:[
				{
					path: '',
					component:ContainerLayoutComponent,
					children:[
						{
							path:'',
							component:ContentPageComponent,
							children: [
								{
									path:'',
									component:MovieDetailComponent,
								},
								{
									path:'chitiet/:maphim',
									component: ChitietComponent
								},
								{
									path:'phimdangchieu',
									component: PhimdangchieuComponent
								},
								{
									path:'selected/:maphim',
									component: SelectedallComponent
								},
								{
									path:'booking/:malichchieu',
									component: BookingComponent
								},
							
							]
						}
					]
				},
				]
			},
		]
	},
	
	

]