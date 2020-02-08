import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Modules
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { MarkdownModule } from 'ngx-markdown'; 

// Components
import { MainNavComponent } from './main-nav/main-nav.component';
import { WorksComponent } from './works/works.component';
import { WorkComponent } from './work/work.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    WorksComponent,
    WorkComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    MarkdownModule.forRoot(),
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
