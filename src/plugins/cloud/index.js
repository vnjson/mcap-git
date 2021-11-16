import "./style.css";
import tpl from "./tpl.html"


export default function (){

  var $tpl = $(tpl)

  this.$store.$stream.append($tpl)
  this.on('cloud', param=>{
    $tpl.empty()
    $tpl.css('display', 'flex')

    if(param){
      if(param.css){ $tpl.css(param.css) }
      Object.keys(param.tags).map(label=>{
            let item = `<div class="tag sound-hover" data-label=${label}>${param.tags[label]}</div>`
            $tpl.append(item)
      })

      let $vnjs = this;
      $tpl.on('click', '.tag', function (){
        let label = $(this).data('label')
        $vnjs.exec({ jump: label })
      })
    }
    else{
      $tpl.hide()
    }
  })
}