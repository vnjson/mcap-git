export default function (){

  this.on('clear', param=>{
    if(param==='all'){
      $('.component').toArray().map(component=>{
        $(component).hide()
      })

      Object.values(this.$store).map(asset=>{
        if(asset.hasOwnProperty("_muted") ){
          asset.stop()
        }
      })
    }

  })
}