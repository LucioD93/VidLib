import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoListComponent } from './video-list/video-list.component';
import { VideoListItemComponent } from './video-list-item/video-list-item.component';

@NgModule({
  declarations: [
    VideoListComponent,
    VideoListItemComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    VideoListComponent
  ]
})
export class ComponentsModule { }
