import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { NgOptimizedImage } from '@angular/common';
import { AboutComponent } from './pages/about/about.component';

@NgModule({
  declarations: [AppComponent, ProductComponent, CarouselComponent, AboutComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgOptimizedImage,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
