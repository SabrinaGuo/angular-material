import { Component, OnInit } from '@angular/core';
import { UiBookstoryMenuItem } from 'src/app/utility/interfaces/ui-bookstory-menu';
import { UiBookstoryService } from '../../ui-bookstory.service';

@Component({
  selector: 'app-ui-bookstory-menu',
  templateUrl: './ui-bookstory-menu.component.html',
  styleUrls: ['./ui-bookstory-menu.component.scss'],
})
export class UiBookstoryMenuComponent implements OnInit {
  menuItems: UiBookstoryMenuItem[] = [
    {
      labelTw: '',
      labelEn: '',
      path: '',
    },
  ];
  constructor(private uiBookstoryService: UiBookstoryService) {}
  ngOnInit(): void {
    this.menuItems = this.uiBookstoryService.getMenuItems();
  }
}
