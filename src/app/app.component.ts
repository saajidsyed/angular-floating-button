import { Component } from '@angular/core';
import { FloatingActionButton } from 'angular-floating-button';

@Component({
  selector: 'app-root',
  template: `
    <angular-floating-button
      [placement]="config.placment"
      [effect]="config.effect"
      [label]="config.label"
      [iconClass]="config.iconClass"
      [activeIconClass]="config.activeIconClass"
      [toggle]="config.toggle"
      [buttons]="buttons"
    >
    </angular-floating-button>
  `
})
export class AppComponent {
  title = 'angular-floating-button';

  public config;
  public buttons: Array<FloatingActionButton> = [
    {
      iconClass: 'ion-social-github',
      label: 'follow me on github',
      onClick: function() {}
    },
    {
      iconClass: 'ion-social-facebook',
      label: 'follow me on facebook',
      onClick: function() {}
    },
    {
      iconClass: 'ion-social-linkedin',
      label: 'linkedin',
      onClick: function() {}
    }
  ];

  placements = [
    {
      value: 'br',
      key: 'bottom right'
    },
    {
      value: 'bl',
      key: 'bottom left'
    },
    {
      value: 'tr',
      key: 'top right'
    },
    {
      value: 'tl',
      key: 'top left'
    }
  ];

  effects = [
    {
      value: 'mfb-zoomin',
      key: 'Zoom In'
    },
    {
      value: 'mfb-slidein',
      key: 'Slide In + Fade'
    },
    {
      value: 'mfb-fountain',
      key: 'Fountain'
    },
    {
      value: 'mfb-slidein-spring',
      key: 'Slide In (Spring)'
    }
  ];

  toggles = ['click', 'hover'];

  constructor() {
    this.config = {
      placment: 'br',
      effect: 'mfb-zoomin',
      label: 'main button label',
      iconClass: 'ion-plus-round',
      activeIconClass: 'ion-close-round',
      toggle: 'click',
      buttons: this.buttons
    };
  }
}
