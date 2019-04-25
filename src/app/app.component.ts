import { Component } from '@angular/core';
import { FloatingActionButton } from 'angular-floating-button';

@Component({
  selector: 'app-root',
  template: `
    <angular-floating-button
      [placement]="config.placment"
      [effect]="config.effect"
      [label]="config.label"
      [iconClassTemplate]="config.iconClass"
      [activeIconClassTemplate]="config.activeIconClass"
      [toggle]="config.toggle"
      [mainButtonClass]="config.mainButtonClass"
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
      iconClassTemplate: '<fa-icon icon="check" ></fa-icon>',
      label: 'follow me on github',
      customClass:'',
      onClick: function() {}
    },
    {
      iconClassTemplate: '<fa-icon icon="spinner" ></fa-icon>',
      label: 'follow me on facebook',
       customClass:'',
      onClick: function() {}
    },
    {
      iconClassTemplate: '<fa-icon icon="check" ></fa-icon>',
      label: 'linkedin',
       customClass:'',
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
      placement: 'br',
      effect: 'mfb-zoomin',
      label: 'main button label',
      iconClassTemplate: '<mat-icon>add</mat-icon>',
      activeIconClassTemplate: '<mat-icon>clear</mat-icon>',
      toggle: 'click',
      mainButtonClass: 'mat-bg-primary',
      buttons: this.buttons
    };
  }
}
