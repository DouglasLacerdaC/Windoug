import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-summoners',
  templateUrl: './summoners.component.html',
  styleUrls: ['./summoners.component.scss']
})
export class SummonersComponent implements OnInit {

  srcRoute: string = '../../../../../assets/img/leagueOfLegends/client/choose.png'
  listVisible: string = ''

  user: any = 'desconhecido?'

  constructor(private router: Router) { }

  ngOnInit(): void {
    
    this.user = localStorage.getItem('user')

  }

  navigate(router: string) {

    this.router.navigate([router])

  }

  alterRouter(url: string) {
    
    this.srcRoute = url
  
    this.openedList()

  }

  openedList() {

    if(this.listVisible == '') {
      
      this.listVisible = 'list-visible'
    
    } else {
      
      this.listVisible = ''

    }

  }

}
