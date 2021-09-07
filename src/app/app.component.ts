import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'material - 中租';

  constructor(private titleService: Title) {}

  ngOnInit() {
    console.log('AppComponent init.');

    //設定 title
    this.titleService.setTitle(this.title);
  }
}
