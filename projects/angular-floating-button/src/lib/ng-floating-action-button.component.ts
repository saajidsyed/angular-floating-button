import { Component, OnInit, Input } from '@angular/core';
import { FloatingActionButton } from './FloatingActionButton';

@Component({
  selector: 'ng-floating-action-button',
  templateUrl: './ng-floating-action-button.html'
})
export class NgFloatingActionButtonComponent implements OnInit {
  @Input() button: FloatingActionButton;

  constructor() {}

  buttonClick() {
    this.button.onClick();
    return false;
  }

  ngOnInit() {}
}
