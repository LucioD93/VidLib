import { Component } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { NewVideoFormComponent } from './components/new-video-form/new-video-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'VidLib';

  constructor(public dialog: MatDialog){}

  onAddButtonPressed(): void {
    const dialogRef = this.dialog.open(
      NewVideoFormComponent,
      {data: ''}
    );

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed ->', result);
    });
  }
}
