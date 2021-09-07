import { Injectable } from '@angular/core';
import { UiBookstoryMenuItem } from 'src/app/utility/interfaces/ui-bookstory-menu';

@Injectable({
  providedIn: 'root',
})
export class UiBookstoryService {
  menuItems: UiBookstoryMenuItem[] = [
    {
      labelTw: 'Overview',
      labelEn: 'index',
      path: '/ui-bookstory', // 等同模組 routing 中的 path: ''
    },
    {
      labelTw: 'Palettes',
      labelEn: 'colours',
      path: 'colours',
    },
    {
      labelTw: 'Typography',
      labelEn: 'typography',
      path: 'typography',
    },
    {
      labelTw: 'Button',
      labelEn: 'button',
      path: 'button',
    },
    {
      labelTw: 'Input',
      labelEn: 'input',
      path: 'input',
    },
  ];
  constructor() {}
  getMenuItems(): UiBookstoryMenuItem[] {
    return this.menuItems;
  }
}
