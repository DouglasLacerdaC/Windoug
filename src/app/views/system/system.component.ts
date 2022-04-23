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
  windowClass: string = ''

  pressed: boolean = false
  windowPositionY: any
  windowPositionX: any

  constructor(private router: Router) { }

  ngOnInit(): void {

    document.addEventListener('mousemove', (event: MouseEvent) => {
      
      if(this.pressed) {
      
        this.window.nativeElement.style.top = `${event.clientY - this.windowPositionY}px`
        this.window.nativeElement.style.left = `${event.clientX - this.windowPositionX}px`
      
      }

    })

    document.addEventListener('mouseup', () => {

      this.pressed = false

    })

  }

  windowOpened(router: string) {
    
    if(this.windowClass == '') {

      this.windowClass = 'opened'

      this.router.navigate([router])

    }

  }

  windowClosed() {
    
    
    setTimeout(() => {
      
      this.windowClass = ''
      this.router.navigate([''])

      this.window.nativeElement.style.top = `5vh`
      this.window.nativeElement.style.left = `calc(50% - 600px)`

    }, 500)

  }

  headerPressed(event: MouseEvent) {
    
    this.pressed = true
    
    this.windowPositionY = event.offsetY
    this.windowPositionX = event.offsetX
    
  }

}
