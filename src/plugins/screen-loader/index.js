import './style.css'
import tpl from './tpl.html'

var $tpl = $(tpl)
$('#screen').append($tpl)

export default function (){

  this.on('preload', ()=>{
     $tpl.css('display', 'flex')
  });
  this.on('load', ()=>{

  })
  this.on('postload', ()=>{

    $tpl.fadeOut()

  })
}