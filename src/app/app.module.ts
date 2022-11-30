import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StyleClassModule } from 'primeng/styleclass';
import { ButtonModule } from 'primeng/button';
import { ImageModule } from 'primeng/image';
import { ToolbarModule } from 'primeng/toolbar';
import { CardModule } from 'primeng/card';

import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';

import { ScrollAnchorDirective } from './scroll-anchor.directive';
import { ScrollManagerDirective } from './scroll-manager.directive';
import { ScrollSectionDirective } from './scroll-section.directive';
import { PhotoService } from './services/photo.service';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    AboutComponent,
    ProjectsComponent,
    ContactComponent,
    ScrollAnchorDirective,
    ScrollManagerDirective,
    ScrollSectionDirective,
    FooterComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    StyleClassModule,
    ButtonModule,
    ImageModule,
    ToolbarModule,
    CardModule
  ],
  providers: [PhotoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
