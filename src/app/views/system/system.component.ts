import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Launchers } from 'src/data/system/launchers';

@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.scss']
})
export class SystemComponent implements OnInit {

  launchers: any = Launchers
  windowClass: string = 'opened'

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  windowOpened(router: string) {
    
    if(this.windowClass == '') {

      this.windowClass = 'opened'

      this.router.navigate([router])

    }

  }

  windowClosed() {
    
    this.windowClass = ''
  
    setTimeout(() => {

      this.router.navigate([''])

    }, 700)

  }

}
