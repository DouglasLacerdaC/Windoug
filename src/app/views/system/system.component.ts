import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.scss']
})
export class SystemComponent implements OnInit {

  windowClass: string = ''

  constructor() { }

  ngOnInit(): void {
  }

  windowOpened() {
    if (this.windowClass == '')
      this.windowClass = 'opened'
    else 
    this.windowClass = ''
  }

}
