import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OffersComponent } from './Home/offers/offers.component';
import { HeaderComponent } from './Layout/header/header.component';
import { HeroComponent } from './Home/hero/hero.component';
import { HomePageComponent } from './Home/home-page/home-page.component';
import { HeroSearchComponent } from './Home/hero-search/hero-search.component';
import { HomeInformationComponent } from './Home/home-information/home-information.component';
import { PopularCategoryCardComponent } from './Home/popular-category-card/popular-category-card.component';

@NgModule({
  declarations: [
    AppComponent,
    OffersComponent,
    HeaderComponent,
    HeroComponent,
    HomePageComponent,
    HeroSearchComponent,
    HomeInformationComponent,
    PopularCategoryCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
