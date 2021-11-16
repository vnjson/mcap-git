
import "./style.css";
import tpl from "./tpl.html"


export default function (){

  var $tpl = $(tpl)
  this.$store.$stream.append($tpl)

  this.on('menu', menu);

  function menu (menuObj){

    $tpl.empty() 
    $tpl.css({display: 'flex'});


    for(var [label, menuItem ] of Object.entries(menuObj)){
      var character = this.getCharacterById(label)

      if(character){
        var str = null
        if(label==='$'){
            character.name = '';
        }
        if(character.name!==''){
            str = `<div class="stream__menu-quetion">
                          <span style='color:${character.nameColor}; padding-right: 20px;'>${ character.name }:</span>
                          <span style='color:${character.replyColor}; '>${ menuItem }</span>
                    </div>`;
        }
        else{
            str = `<div class="stream__menu-quetion">
                          <span style='color:${character.replyColor};'>${ menuItem }</span>
                    </div>`;
        }

        $('.stream__menu-menu').append(str)

      }
      else{
        let str = null
        if(/disabled/i.test(label) ){
            str = `<div data-label="${ label }" class="stream__menu-item disabled"><span class="sound-hover">${ menuItem }</span></div>`;
        }
        else if(/^_/i.test(label)){

          str = `<div data-label="${ label }" class="stream__menu-item"><span class="sound-hover">${ menuItem }</span></div>`;
        }
        else{
            str = `<div data-label="${ label }" class="stream__menu-item"><span class="sound-hover">${ menuItem }</span></div>`;
        }
        
        $('.stream__menu-menu').append($(str))
      }
    }

let $vnjs = this

function clickHundler(){

    let label = $(this).data('label')

    if(label==='next'){
      $vnjs.exec({ next: true })
    }
    else if(/^_/i.test(label)){
      $vnjs.exec({ target: label })
    }
    else{
      $vnjs.exec({ jump: label }) 
    }
    $tpl.hide();
    $tpl.off( "click", clickHundler)

}

$tpl.on("click", ".stream__menu-item", clickHundler);




}


}