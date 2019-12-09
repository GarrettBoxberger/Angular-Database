import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { HomeComponent }from './components/home/home.component';
import { MovieComponent } from './components/movie/movie.component';
import { TvComponent } from './components/tv/tv.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './layout/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    MovieComponent,
    TvComponent,
    FooterComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'movie',component: MovieComponent },
      {path: 'tv', component:TvComponent},
      {path:'home',component:HomeComponent},
      {path:' ',redirectTo:'home',pathMatch:'full'},
      {path: '**',redirectTo:'home',pathMatch:'full'}

    ])
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
