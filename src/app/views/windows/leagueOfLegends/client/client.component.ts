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

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigate() {

    this.router.navigate(['system/LeagueOfLegends/home'])

  }

}
