
import "./style.css";
import tpl from "./tpl.html"


export default function (){

  var $tpl = $(tpl)
  this.$store.$stream.append($tpl)

  this.on('main-menu', menu);

  function menu (menuObj){
    var onClickObj = null
    $tpl.html('') 



    for(var [label, menuItem ] of Object.entries(menuObj)){
      var character = this.getCharacterById(label)

      if(character){
        var str = null
        if(label==='$'){
            character.name = '';
        }
        if(character.name!==''){
            str = `<div class="main-menu__item--quetion">
                          <span style='color:${character.nameColor}; padding-right: 20px;'>${ character.name }:</span>
                          <span style='color:${character.replyColor}; '>${ menuItem }</span>
                    </div>`;
        }
        else{
            str = `<div class="main-menu__item--quetion">
                          <span style='color:${character.replyColor};'>${ menuItem }</span>
                    </div>`;
        }

        $('.main-menu').append(str)

      }
      else{
        let str = null
        if(/disabled/i.test(label) ){
            str = `<div data-label="${ label }" class="main-menu__item disabled"><span class="sound-hover">${ menuItem }</span></div>`;
        }

        else if(label==='onClick'){
          onClickObj = menuItem
        }
        else if(label==='css'){
          $tpl.css(menuItem)
        }
        else{
            str = `<div data-label="${ label }" class="main-menu__item"><span class="sound-hover">${ menuItem }</span></div>`;
        }
        
        $('.main-menu').append($(str))
      }
    }

var $vnjs = this
function onClickMenuHandler(label){

  if(menuObj.hasOwnProperty('onClick') ){

      $vnjs.exec(onClickObj)

  }
}
function clickHundler(){

    let label = $(this).data('label')

    if(label==='next'){
        onClickMenuHandler(label)
        setTimeout(()=>{
          $vnjs.exec({ next: true })
        },0)
    }

    else{
      onClickMenuHandler(label)
      setTimeout(()=>{
          $vnjs.exec({ jump: label })
      },0)
    }
    $tpl.hide()
    $tpl.off( "click", clickHundler)
}
$tpl.css({display: 'flex'});
$tpl.on("click", ".main-menu__item", clickHundler);




}


}