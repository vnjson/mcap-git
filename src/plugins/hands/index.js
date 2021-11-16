import "./style.css";
import tpl from "./tpl.html"



export default function (){
  const $tpl = $(tpl)
  const $vnjs = this;
  this.$store.$stream.append($tpl)

  this.on('hand-left', id=>{
    if(id){
      $tpl.show()
      $tpl.find('.stream__hand-left').css('background-image', `url('${this.getAssetByName(id).url}')` )
    }
    else{
      $tpl.find('.stream__hand-left').css('background-image', "unset" ) 
    }
  })

  this.on('hand-right', id=>{
    if(id){
      $tpl.show()
      $tpl.find('.stream__hand-right').css('background-image', `url('${this.getAssetByName(id).url}')` )
    }
    else{
      $tpl.find('.stream__hand-right').css('background-image', "unset" ) 
    }
  })
  this.on('hands', data=>{
    if(data){
      $tpl.show();
    }
    else{
      $tpl.hide();
    }
  })

}