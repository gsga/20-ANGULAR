import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.scss']
})
export class TwoComponent implements OnInit {

  title = 'Two';

  constructor(private titleService: Title) {
  }

  ngOnInit() {
    this.titleService.setTitle(this.title);
  }

}
