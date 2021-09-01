import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui-bookstory-index',
  templateUrl: './ui-bookstory-index.component.html',
  styleUrls: ['./ui-bookstory-index.component.scss'],
})
export class UiBookstoryIndexComponent implements OnInit {
  title: string;
  constructor(private titleService: Title) {}

  ngOnInit(): void {
    this.title = this.titleService.getTitle();
  }
}
