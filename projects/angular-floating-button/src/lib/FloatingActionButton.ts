import { TemplateRef } from '@angular/core';

export class FloatingActionButton {
  iconClassTemplate: TemplateRef<any>;;
  customClass: string;
  label?: string;
  onClick: () => void;
}
