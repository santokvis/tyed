import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {APP_BASE_HREF, Location} from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessagesComponent } from './messages/messages.component';
import { WebComponent } from './web/web.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { DrawingsComponent } from './drawings/drawings.component';
import { MatIconModule} from '@angular/material/icon';
import { ComicsComponent } from './comics/comics.component';
import { CollectionsComponent } from './collections/collections.component';
import { SearchComponent } from './search/search.component';
import { HttpClientModule } from '@angular/common/http';
import { AnimationsComponent } from './animations/animations.component';



@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    WebComponent,
    HomeComponent,
    NewsComponent,
    DrawingsComponent,
    ComicsComponent,
    CollectionsComponent,
    SearchComponent,
    AnimationsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MatIconModule,
    HttpClientModule,
  ],
  // providers: [{provide: APP_BASE_HREF, useValue: '/tyed/docs'}],
  bootstrap: [AppComponent]
})

export class AppModule { }
