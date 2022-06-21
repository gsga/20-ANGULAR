import { Component, OnInit } from '@angular/core';

import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss']
})

export class OneComponent implements OnInit {

  title = 'One';

  constructor(private titleService: Title) {
  }

  ngOnInit() {
    this.titleService.setTitle(this.title);
  }

}
