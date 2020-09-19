import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { VideoListComponent } from './video-list/video-list.component';
import { VideoListItemComponent } from './video-list-item/video-list-item.component';

@NgModule({
  declarations: [
    VideoListComponent,
    VideoListItemComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule
  ],
  exports: [
    VideoListComponent
  ]
})
export class ComponentsModule { }
