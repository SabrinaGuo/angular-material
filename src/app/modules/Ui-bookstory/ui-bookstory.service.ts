import { Injectable } from '@angular/core';
import { UiBookstoryMenuItem } from 'src/app/utility/interfaces/ui-bookstory-menu';

@Injectable({
  providedIn: 'root',
})
export class UiBookstoryService {
  menuItems: UiBookstoryMenuItem[] = [
    {
      labelTw: '首頁',
      labelEn: 'index',
      path: '/ui-bookstory', // 等同模組 routing 中的 path: ''
    },
    {
      labelTw: '調色盤',
      labelEn: 'colours',
      path: 'colours',
    },
    {
      labelTw: '字型排版',
      labelEn: 'typography',
      path: 'typography',
    },
    {
      labelTw: '按鈕',
      labelEn: 'button',
      path: 'button',
    },
    {
      labelTw: '輸入框',
      labelEn: 'input',
      path: 'input',
    },
  ];
  constructor() {}
  getMenuItems(): UiBookstoryMenuItem[] {
    return this.menuItems;
  }
}
