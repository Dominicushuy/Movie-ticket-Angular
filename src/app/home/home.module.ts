import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutHomeComponent } from './layout-home/layout-home.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { PipeModule } from '../pipes/pipe.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { appRoutes } from './routers/app.routers';

import { TrangChuComponent } from './layout-home/trang-chu/trang-chu.component';

import { BannerComponent } from './layout-home/trang-chu/banner/banner.component';
import { BannerLogoComponent } from './layout-home/trang-chu/banner-logo/banner-logo.component';
import { BannerTextComponent } from './layout-home/trang-chu/banner-text/banner-text.component';
import { TrangPhimComponent } from './layout-home/trang-phim/trang-phim.component';
import { NavmenuComponent } from './layout-home/trang-phim/navmenu/navmenu.component';
import { UserSectionComponent } from './layout-home/trang-phim/user-section/user-section.component';
import { ContainerLayoutComponent } from './layout-home/trang-phim/container-layout/container-layout.component';
import { ErrorComponent } from './layout-home/trang-phim/user-section/error/error.component';
import { SliderComponent } from './layout-home/trang-phim/slider/slider.component';
import { CardSectionComponent } from './layout-home/trang-phim/card-section/card-section.component';
import { ContentPageComponent } from './layout-home/trang-phim/content-page/content-page.component';
import { ViewTechnologyComponent } from './layout-home/trang-phim/content-page/view-technology/view-technology.component';
import { MovieDetailComponent } from './layout-home/trang-phim/content-page/movie-detail/movie-detail.component';
import { PhimdangchieuComponent } from './layout-home/trang-phim/content-page/phimdangchieu/phimdangchieu.component';
import { PromotionSectionComponent } from './layout-home/trang-phim/content-page/promotion-section/promotion-section.component';
import { NewsComponent } from './layout-home/trang-phim/content-page/news/news.component';
import { BottomComponent } from './layout-home/trang-phim/bottom/bottom.component';
import { FooterComponent } from './layout-home/trang-phim/footer/footer.component';
import { ChitietComponent } from './layout-home/trang-phim/content-page/chitiet/chitiet.component';
import { SelectedallComponent } from './layout-home/trang-phim/content-page/selectedall/selectedall.component';
import { BookingComponent } from './layout-home/trang-phim/content-page/booking/booking.component';
import { ThanhToanComponent } from './layout-home/trang-phim/content-page/thanh-toan/thanh-toan.component';

import { LoadingPageModule } from 'angular-loading-page';
import { MaterialBarModule } from 'angular-loading-page';




@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    PipeModule,
    BrowserAnimationsModule,
    BrowserModule,
    LoadingPageModule,
    MaterialBarModule

  ],

  declarations: [
  				LayoutHomeComponent,
  				TrangChuComponent,
  				BannerComponent,
  				BannerLogoComponent,
  				BannerTextComponent,
  				TrangPhimComponent,
  				NavmenuComponent,
  				UserSectionComponent,
  				ContainerLayoutComponent,
  				ErrorComponent,
  				SliderComponent,
  				CardSectionComponent,
  				ContentPageComponent,
  				ViewTechnologyComponent,
  				MovieDetailComponent,
  				PhimdangchieuComponent,
  				PromotionSectionComponent,
  				NewsComponent,
  				BottomComponent,
  				FooterComponent,
  				ChitietComponent,
  				SelectedallComponent,
  				BookingComponent,
  				ThanhToanComponent

  				],
  exports: [
  				LayoutHomeComponent,
  				TrangChuComponent,
          BannerComponent,
          BannerLogoComponent,
          BannerTextComponent,
          TrangPhimComponent,
          NavmenuComponent,
          UserSectionComponent,
          ContainerLayoutComponent,
          SliderComponent,
          PromotionSectionComponent,
          NewsComponent

  ]	,
})
export class HomeModule { }
