import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.scss']
})
export class SystemComponent implements OnInit {

  windowClass: string = ''

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  windowOpened() {
    
    if(this.windowClass == '') {

      this.windowClass = 'opened'

      this.router.navigate(['/system/epic'])

    }

  }

  windowClosed() {
    
    this.windowClass = ''
  
    setTimeout(() => {

      this.router.navigate([''])

    }, 1000)

  }

}
