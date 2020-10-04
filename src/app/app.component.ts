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
    console.log('Hola');
    const dialogRef = this.dialog.open(NewVideoFormComponent);
  }
}
