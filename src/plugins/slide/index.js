import './style.css'


const $tpl = $(`<img class="screen-stream__slide component"/>`)
export default function (){
  this.$store.$stream.append($tpl)
  this.on('slide', id=>{
    if(typeof id==='string'){
        $tpl.attr('src', this.getAssetByName(id).url).fadeIn()
    }
    else if(typeof id==='object'){
     
      $tpl.attr('src', this.getAssetByName(id.name).url).css(id.css).fadeIn()

    }
    else{
      $tpl.hide()
    }   
  })

}