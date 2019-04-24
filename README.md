# angular-floating-button

updated version of [ng2-floating-button](https://github.com/tahashahid/ng2-floating-button)

## Installation

```bash
$ npm install angular-floating-button --save
```

## usage

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import your library
import { NgFloatingActionMenuModule } from 'angular-floating-button';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,

    // Specify your library as an import
    NgFloatingActionMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

**component.html**

```xml
   <angular-floating-button
     [placement]="config.placement"
     [effect]="config.effect"
     [label]="config.label"
     [iconClassTemplate]="config.iconClass"
     [activeIconClassTemplate]="config.activeIconClass"
     [toggle]="config.toggle"
     [mainButtonClass]="config.mainButtonClass"
     [buttons]="buttons">
   </angular-floating-button>
```

**component.ts**

```typescript
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  config;
  buttons: Array<FloatingActionButton> = [
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
      mainButtonClass: 'mat-bg-primary'
      buttons: this.buttons
    };
  }
}
```

## License

MIT © [saajid](mailto:syedsaajid882@gmail.com)
