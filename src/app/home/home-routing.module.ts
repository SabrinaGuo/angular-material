import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        loadChildren: '',
      },
    ],
  },
  {
    path: 'ui-bookstory',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../modules/Ui-bookstory/ui-bookstory.module').then(
            (m) => m.UiBookstoryModule
          ),
      },
    ],
  },
  {
    path: 'ui-slicing',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../modules/Ui-slicing/ui-slicing.module').then(
            (m) => m.UiSlicingModule
          ),
      },
    ],
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
