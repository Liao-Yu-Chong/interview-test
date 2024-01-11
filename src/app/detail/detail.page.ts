import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  itemId: string = '';

  data = [
    { title: "公告標題 01", createdAt: 1703496488777, content: "公告01的內文" },
    { title: "公告標題 02", createdAt: 1703496488777, content: "公告02的內文" },
    { title: "公告標題 03", createdAt: 1703496488777, content: "公告03的內文" },
    { title: "公告標題 04", createdAt: 1703496488777, content: "公告04的內文" },
    { title: "公告標題 05", createdAt: 1703496488777, content: "公告05的內文" },
  ];

  detail: any;

  constructor(
    private route: ActivatedRoute,
    private datePipe: DatePipe
  ) { }

  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam !== null) {
      this.itemId = idParam;
    }

    this.data = this.getDataById(this.itemId);
  }

  getDataById(title: string): any {
    this.detail = this.data.find(item => item.title === title);
    console.log(this.detail);
  }

  formatDate(date: number) {
    const formatDate = this.datePipe.transform(date);
    return formatDate;
  }

}
