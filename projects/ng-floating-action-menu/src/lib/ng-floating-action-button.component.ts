import { Component, OnInit, Input } from '@angular/core';
import { FloatingActionButton } from './FloatingActionButton';

@Component({
  selector: 'ng-floating-action-button',
  template: `
    <a
      href
      [attr.data-mfb-label]="button.label"
      (click)="buttonClick()"
      class="mfb-component__button--child  {{button.customClass}}"
    >
    <span class="mfb-component__child-icon" [innerHTML]="button.iconClass | sanitizeHtml">
    </span>
    </a>
  `
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
