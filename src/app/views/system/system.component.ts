import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Launchers } from 'src/data/system/launchers';

@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.scss']
})
export class SystemComponent implements OnInit {

  @ViewChild('window') window: any

  launchers: any = Launchers
  windowClass: string = 'opened'

  pressed: boolean = false
  windowPositionY: any
  windowPositionX: any

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

  headerPressed(event: MouseEvent) {
    
    this.pressed = true
    
    this.windowPositionY = event.offsetY
    this.windowPositionX = event.offsetX
    
  }

  headerMove(event: MouseEvent) {
    
    if(!this.pressed) {

      return event.preventDefault()
      
    }
    
    this.window.nativeElement.style.top = `${event.clientY - this.windowPositionY}px`
    this.window.nativeElement.style.left = `${event.clientX - this.windowPositionX}px`

  }

  headerUp() {

    this.pressed = false

  }

  

}
