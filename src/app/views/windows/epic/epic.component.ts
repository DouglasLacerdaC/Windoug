import { Component, OnInit } from '@angular/core';
import { GamesEpic } from 'src/data/epic/gamesEpic';
import { Launchers } from 'src/data/system/launchers';

@Component({
  selector: 'app-epic',
  templateUrl: './epic.component.html',
  styleUrls: ['./epic.component.scss']
})
export class EpicComponent implements OnInit {

  gamesEpic: any = GamesEpic
  value: number = 0

  constructor() { }

  ngOnInit(): void {
  }

  downloadGame(game: any) {

    if (game.pressed == false) {

      game.pressed = true

      const timeDownload = setInterval(() => {

        this.value += 1

        game.percentageDownload = `${this.value}%`
        game.classVisible = 'downloading'

        if (this.value == 100) {

          clearInterval(timeDownload)

          game.percentageDownload = 'Instalado'
          game.classVisible = 'installed'

          this.value = 0

          Launchers.push({
            name: game.name,
            logo: game.icon,
            router: game.router
          })

        }

      }, 100)

    }

  }

}
