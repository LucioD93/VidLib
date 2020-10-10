import { Component, OnInit } from '@angular/core';
import { Video } from 'src/app/models/video.model';
import { VideosService } from 'src/app/services/videos/videos.service';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent implements OnInit {
  videoList: Array<Video>;

  constructor(
    private videosService: VideosService
  ) { }

  ngOnInit(): void {
    this.videosService.getVideos().subscribe(data => {
      this.videoList = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        } as Video;
      });
      console.log(this.videoList);
    });
  }

}
