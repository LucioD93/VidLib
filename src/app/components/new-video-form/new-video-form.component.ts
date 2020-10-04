import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-video-form',
  templateUrl: './new-video-form.component.html',
  styleUrls: ['./new-video-form.component.scss']
})
export class NewVideoFormComponent implements OnInit {
  videoID: string;

  constructor() { }

  ngOnInit(): void {
  }

}
