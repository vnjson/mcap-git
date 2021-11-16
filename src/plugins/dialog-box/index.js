import "./colors.css";
import "./style.css";
import tpl from "./tpl.html"


export default function (){
  
  const $tpl = $(tpl)
  this.$store.$stream.append($tpl)

  /*
  * Вешаем клик на диалоговое окно
  */
  $tpl.on('mousedown', e=>{
      this.next()
  });

	this.on('character', (character, reply)=>{
          $tpl.find('.dialog-box__name').html(character.name).css({ color: character.nameColor })
          $tpl.find('.dialog-box__reply').html(reply).css({ color: character.replyColor })
	});
  this.on('dialog-box', param=>{

    if(param==='clear'){
       $tpl.find('.dialog-box__name').empty()
       $tpl.find('.dialog-box__reply').empty()
    }
    else if(param){
      $tpl.show()
    }
    else{
      $tpl.hide()
    }
  })

}
