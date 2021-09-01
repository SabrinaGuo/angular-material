import { UtilityModule } from './../../utility/utility.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiBookstoryRoutingModule } from './ui-bookstory-routing.module';
import { UiBookstoryComponent } from './ui-bookstory/ui-bookstory.component';
import { UiBookstoryIndexComponent } from './ui-bookstory-index/ui-bookstory-index.component';
import { UiBookstoryMenuComponent } from './partial/ui-bookstory-menu/ui-bookstory-menu.component';
import { UiBookstoryButtonComponent } from './ui-bookstory-button/ui-bookstory-button.component';
import { UiBookstoryInputComponent } from './ui-bookstory-input/ui-bookstory-input.component';
import { UiBookstoryColoursComponent } from './ui-bookstory-colours/ui-bookstory-colours.component';
import { UiBookstoryTypographyComponent } from './ui-bookstory-typography/ui-bookstory-typography.component';

@NgModule({
  declarations: [
    UiBookstoryComponent,
    UiBookstoryIndexComponent,
    UiBookstoryMenuComponent,
    UiBookstoryButtonComponent,
    UiBookstoryInputComponent,
    UiBookstoryColoursComponent,
    UiBookstoryTypographyComponent,
  ],
  imports: [CommonModule, UiBookstoryRoutingModule, UtilityModule],
})
export class UiBookstoryModule {}
