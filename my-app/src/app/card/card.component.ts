import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  public image: string = '../../assets/img/cards/mickeymouse.jpg';
  public titulo: string = 'Curso de Angular';
  @Input() inputData: any;

  constructor() {}

  ngOnInit(): void {}
}
