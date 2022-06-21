import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.scss']
})
export class ThreeComponent implements OnInit {

  title = 'Three';

  constructor(private titleService: Title) {
  }

  ngOnInit() {
    this.titleService.setTitle(this.title);
  }

}
