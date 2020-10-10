import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() addButtonPressed = new EventEmitter<null>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddButtonPressed(): void {
    this.addButtonPressed.emit();
  }

}
