import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css']
})
export class WidgetComponent implements OnInit, OnChanges {
  @Input() name: string;
  @Input() user: User;
  @Output() onTryMe: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() { }

  ngOnChanges(){

  }

  handleTryMe(text: string) {
    this.onTryMe.emit(text);
  }

}
