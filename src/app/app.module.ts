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
import { WorksScreenComponent } from './works-screen/works-screen.component';
import { WorkDetailsScreenComponent } from './work-details-screen/work-details-screen.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { AboutScreenComponent } from './about-screen/about-screen.component';
import { ContactScreenComponent } from './contact-screen/contact-screen.component';

// Services
import { ContentfulService } from './contentful.service';

(window as any).process = {
  env: { DEBUG: undefined },
  browser: 'dummy'
};

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    WorksScreenComponent,
    WorkDetailsScreenComponent,
    HomeScreenComponent,
    AboutScreenComponent,
    ContactScreenComponent
  ],
  imports: [
    BrowserModule,
    MarkdownModule.forRoot(),
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule
  ],
  providers: [
    ContentfulService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
