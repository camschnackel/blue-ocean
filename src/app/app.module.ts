import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { MatButtonModule } from '@angular/material/button'
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';

import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { CardModule } from 'primeng/card';
import { GalleriaModule } from 'primeng/galleria';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TasksItemComponent } from './components/tasks-item/tasks-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { ScrollAnchorDirective } from './scroll-anchor.directive';
import { ScrollManagerDirective } from './scroll-manager.directive';
import { ScrollSectionDirective } from './scroll-section.directive';
import { PhotoService } from './services/photo.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    TasksComponent,
    TasksItemComponent,
    ToolbarComponent,
    AboutComponent,
    ProjectsComponent,
    ContactComponent,
    ScrollAnchorDirective,
    ScrollManagerDirective,
    ScrollSectionDirective
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatGridListModule,
    MatTabsModule,
    MatCardModule,
    ButtonModule,
    ToolbarModule,
    CardModule,
    GalleriaModule
  ],
  providers: [PhotoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
