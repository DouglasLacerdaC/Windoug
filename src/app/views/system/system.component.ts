import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Launchers } from 'src/data/system/launchers';
import { fromEvent, Observable, Subscription } from 'rxjs';
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

  mouseMoveSubscription: Subscription
  mouseUpSubscription: Subscription

  constructor(private router: Router) {
    this.mouseMoveSubscription = this.subscribeToMouseMove()
    this.mouseUpSubscription = this.subscribeToMouseUp()
  }

  ngOnInit(): void {
  }

  private subscribeToMouseMove(): Subscription {
    return fromEvent(document,'mousemove').subscribe((event) => {
      if(this.pressed) {
        this.window.nativeElement.style.top = `${(event as MouseEvent).clientY - this.windowPositionY}px`
        this.window.nativeElement.style.left = `${(event as MouseEvent).clientX - this.windowPositionX}px`
      }
    })
  }

  private subscribeToMouseUp(): Subscription {
    return fromEvent(document,'mouseup').subscribe(() => {
      this.pressed = false;
    })
  }

  windowOpened(router: string) {
    if(this.windowClass == '') {
      this.windowClass = 'opened'
      this.router.navigate([router])
    }
  }

  windowClosed() {
    this.windowClass = ''
    this.pressed = false
    setTimeout(() => {
      this.router.navigate([''])
    }, 700)
  }

  headerPressed(event: MouseEvent) {
    this.pressed = true
    this.windowPositionY = event.offsetY
    this.windowPositionX = event.offsetX
  }
}
