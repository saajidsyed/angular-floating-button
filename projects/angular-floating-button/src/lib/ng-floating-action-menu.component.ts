import { Component, OnInit, Input } from '@angular/core';
import { FloatingActionButton } from '../public_api';

@Component({
  selector: 'angular-floating-button',
  templateUrl: './ng-floating-action-menu.component.html',
  styleUrls: ['./ng-floating-action-menu.component.scss']
})
export class NgFloatingActionMenuComponent implements OnInit {
  public isOpen = false;
  public state = 'closed';

  @Input() placement: string;
  @Input() effect: string;
  @Input() label: string;
  @Input() iconClass: string;
  @Input() activeIconClass: string;
  @Input() toggle = 'click';
  @Input() iconTemplate: string;
  @Input() buttons: Array<FloatingActionButton>;

  constructor() {}

  clicked() {
    if (this.toggle !== 'click') {
      return false;
    }
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      this.state = 'open';
    } else {
      this.state = 'closed';
    }
  }

  entered() {
    if (this.toggle !== 'hover') {
      return false;
    }
    this.state = 'open';
  }

  leaved() {
    if (this.toggle !== 'hover') {
      return false;
    }
    this.state = 'closed';
  }

  ngOnInit() {}
}
