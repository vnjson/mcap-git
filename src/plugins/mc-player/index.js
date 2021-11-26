export default function (){

  
const rndID = new Date().toLocaleDateString()
  try {
      window.mcefQuery({
        request: "info",
        persistent: true,
        onSuccess: response=>{
          this.current.data.player = JSON.parse(response)

          this.emit('player-load', this.current.data.player.name)
        }
      })

  } 
  catch (err) {
      this.current.data.player = {
        name: 'mcap_uknown__'+new Date().toLocaleDateString(),
        uuid: new Date().toLocaleString()
      }

      this.emit('player-load', this.current.data.player.name)
  }

}