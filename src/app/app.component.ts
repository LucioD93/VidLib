import { Component } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { NewVideoFormComponent } from './components/new-video-form/new-video-form.component';
import { VideoInfoService } from './services/video-info/video-info.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'VidLib';

  constructor(
    public dialog: MatDialog,
    public videoInfoService: VideoInfoService
  ){}

  onAddButtonPressed(): void {
    const dialogRef = this.dialog.open(
      NewVideoFormComponent,
      {data: ''}
    );

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed ->', result);
      const newVideoObservable = this.videoInfoService.getVideoInfoFromYoutubeAPI(result);
      newVideoObservable.subscribe(res => console.log('+>', result));
      console.log(newVideoObservable);
    });
  }
}
