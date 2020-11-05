export class Storage {
    constructor(storageName='gameScoreboard', initialValue='[]') {
        this.storageName = storageName

        if(!localStorage.getItem(storageName)) {
                    // If not, create new item for our Tic Tac Toe game
            localStorage.setItem(storageName, initialValue)
        }
    }


   // Load data from previous games from localStorage
   getData() {
    return JSON.parse(localStorage.getItem(this.storageName))
  }

  update(data) {
    localStorage.setItem(this.storageName, JSON.stringify(data))
  }

}

