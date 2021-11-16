
export default function (){
  this.on('scene', id=>{
    if(id){
      this.$store.$screen.css({
        'background-image': `url('${this.getAssetByName(id).url}')`
      })
    }
    else{
      this.$store.$screen.css({
        'background-image': `unset`
      })
    }

  })
}