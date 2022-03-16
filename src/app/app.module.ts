import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ContentComponent } from './content/content.component';
import { ContentViwerComponent } from './content-viwer/content-viwer.component';
import { HttpClientModule } from '@angular/common/http';
import { ImageRenderComponent } from './image-render/image-render.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ContentComponent,
    ContentViwerComponent,
    ImageRenderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
