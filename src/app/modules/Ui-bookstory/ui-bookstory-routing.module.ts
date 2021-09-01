import { UiBookstoryTypographyComponent } from './ui-bookstory-typography/ui-bookstory-typography.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UiBookstoryComponent } from './ui-bookstory/ui-bookstory.component';
import { UiBookstoryIndexComponent } from './ui-bookstory-index/ui-bookstory-index.component';
import { UiBookstoryButtonComponent } from './ui-bookstory-button/ui-bookstory-button.component';
import { UiBookstoryInputComponent } from './ui-bookstory-input/ui-bookstory-input.component';
import { UiBookstoryColoursComponent } from './ui-bookstory-colours/ui-bookstory-colours.component';

const routes: Routes = [
  {
    path: '', // path: /ui-storybook
    component: UiBookstoryComponent,
    children: [
      {
        path: '',
        component: UiBookstoryIndexComponent,
      },
      {
        path: 'colours',
        component: UiBookstoryColoursComponent,
      },
      {
        path: 'typography',
        component: UiBookstoryTypographyComponent,
      },
      {
        path: 'button',
        component: UiBookstoryButtonComponent,
      },
      {
        path: 'input',
        component: UiBookstoryInputComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UiBookstoryRoutingModule {}
