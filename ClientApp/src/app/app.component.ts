import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { CityDto } from './services/Client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  //типы шаблонов
  @ViewChild('readOnlyTemplate', { static: false })
    readOnlyTemplate!: TemplateRef<any>;
  @ViewChild('editTemplate', { static: false })
    editTemplate!: TemplateRef<any>;

  isExpanded = false;
  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
  title = 'app';

  ngOnInit() {}
}
