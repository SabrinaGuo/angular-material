import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiSlicingRoutingModule } from './ui-slicing-routing.module';
import { UiSlicingComponent } from './ui-slicing/ui-slicing.component';
import { UiSlicingIndexComponent } from './ui-slicing-index/ui-slicing-index.component';

@NgModule({
  declarations: [UiSlicingComponent, UiSlicingIndexComponent],
  imports: [CommonModule, UiSlicingRoutingModule],
})
export class UiSlicingModule {}
