import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UiSlicingIndexComponent } from './ui-slicing-index/ui-slicing-index.component';
import { UiSlicingComponent } from './ui-slicing/ui-slicing.component';

const routes: Routes = [
  {
    path: '', // path: /ui-slicing
    component: UiSlicingComponent,
    children: [
      {
        path: '',
        component: UiSlicingIndexComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UiSlicingRoutingModule {}
