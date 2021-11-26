
export default function (){

  this.on('scene', id=>{
    if(typeof(id)==='object'){
      this.$store.$screen.css('opacity', 0)
      this.$store.$screen.css({
        'background-image': `url(${id.url})`
      })
      this.$store.$screen.css('opacity', 1)
    }
    else if(typeof(id)==='string'){
      this.$store.$screen.css('opacity', 0)
      this.$store.$screen.css({
        'background-image': `url('${this.getAssetByName(id).url}')`
      })
      this.$store.$screen.css('opacity', 1)
    }
    else{
      this.$store.$screen.css({
        'background-image': `unset`
      })
    }


  })
}