


export default function (){

  this.on('player-load', name=>{
    if( store.get(name) ){
        this.current.data = store.get(name)
    }
  })
  this.on('set-data', data=>{
    for(let key in data){
      this.current.data[key] = data[key]
    }
    store.set(this.current.data.player.name, this.current.data)
  })
  this.on('clear-data-all', data=>{
    localStorage.clear()
  })
  this.on('clear-data', data=>{
    store.remove(this.current.data.player.name)
    
    this.current.data = {
      score: this.current.data.score,
      player: this.current.data.player
    }

  })
  this.on('switch', data=>{
    for(let equal in data){
      let param = equal.split('===')
      if(this.current.data[param[0]]===param[1]){
        this.exec(data[equal])
      }
    }
  })
}