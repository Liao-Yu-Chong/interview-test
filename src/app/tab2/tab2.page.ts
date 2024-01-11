import { Component } from '@angular/core';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  data = [
    { title: "公告標題 01", createdAt: 1703496488777, content: "公告01的內文" },
    { title: "公告標題 02", createdAt: 1703496488777, content: "公告02的內文" },
    { title: "公告標題 03", createdAt: 1703496488777, content: "公告03的內文" },
    { title: "公告標題 04", createdAt: 1703496488777, content: "公告04的內文" },
    { title: "公告標題 05", createdAt: 1703496488777, content: "公告05的內文" },
  ];

  constructor() { }

}
