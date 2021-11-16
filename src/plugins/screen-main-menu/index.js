import "./style.css"
import tpl from "./tpl.html"

export default function (){
  const $tpl = $(tpl)
  const $vnjs = this
  this.$store.$screen = $tpl
  $('#screen').append($tpl)

  this.on('main-menu', data=>{

      this.exec({screen: 'main-menu'})
      var str = ''
      $tpl.find('.main-menu__menu').empty()
      for(var [label, menuItem ] of Object.entries(data)){
    
        if(/disabled/i.test(label) ){
          str = ` <div class="btn disabled" data-label="${label}">${menuItem}</div>`
        }
        else{
          str = `<div class="btn" data-label="${label}">${menuItem}</div>`
        }
        $tpl.find('.main-menu__menu').append(str)
      }
  })


  function clickHundler(){

        let label = $(this).data('label')

        $vnjs.exec({ jump: label })

     
  }

  $tpl.find('.main-menu__menu').on("click", ".btn", clickHundler);


}