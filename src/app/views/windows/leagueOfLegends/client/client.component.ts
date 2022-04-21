import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Friends } from 'src/data/leagueOfLegends/friends';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  friends: any = Friends
  
  user: any = 'desconhecido?'

  notification: string = ''

  constructor(private router: Router) { }

  ngOnInit(): void {
  
    this.user = localStorage.getItem('user')

    setTimeout(() => {

      this.notification = 'opening-notification'

      setTimeout(() => {
        
        this.removeNotification()
        
      }, 6000)

    }, 2500)

  }

  navigate(router: string) {

    this.router.navigate([router])

  }

  removeNotification() {

    this.notification = ''

  }

}
