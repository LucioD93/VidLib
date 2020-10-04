import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { VideoListComponent } from './video-list/video-list.component';
import { VideoListItemComponent } from './video-list-item/video-list-item.component';
import { HeaderComponent } from './header/header.component';
import { NewVideoFormComponent } from './new-video-form/new-video-form.component';

@NgModule({
  declarations: [
    VideoListComponent,
    VideoListItemComponent,
    HeaderComponent,
    NewVideoFormComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
    VideoListComponent,
    HeaderComponent
  ]
})
export class ComponentsModule { }
