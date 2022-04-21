import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pvp',
  templateUrl: './pvp.component.html',
  styleUrls: ['./pvp.component.scss']
})
export class PvpComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigate(router: string) {

    this.router.navigate([router])

  }

}
