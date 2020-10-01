import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

import { VideoListComponent } from './video-list/video-list.component';
import { VideoListItemComponent } from './video-list-item/video-list-item.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    VideoListComponent,
    VideoListItemComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule
  ],
  exports: [
    VideoListComponent,
    HeaderComponent
  ]
})
export class ComponentsModule { }
