import { RpgPlayer, Query } from '@rpgjs/server'
import { database } from '@rpgjs/starter-kit-server'

export class Player extends RpgPlayer {
    onConnected() {

        function getRandomInt(max) {
            return Math.floor(Math.random() * Math.floor(max));
        }
        
        this.setGraphic('hero')
        this.changeMap('medieval', {
            x: getRandomInt(50 * 32),
            y: getRandomInt(50 * 32) 
        })
    }

    onInput({ input }) {
      if (input == 'escape') {
          this.addItem(database.Potion)
          this.callMainMenu()
      }
    }

    onDead() {
       
    }

    onLevelUp(nbLevel) {
        
    }
}