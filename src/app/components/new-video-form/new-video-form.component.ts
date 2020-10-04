import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-new-video-form',
  templateUrl: './new-video-form.component.html',
  styleUrls: ['./new-video-form.component.scss']
})
export class NewVideoFormComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<NewVideoFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string
  ) { }

  ngOnInit(): void {}

  onAddClick(): void {
    this.dialogRef.close(this.data);
  }

}
