import "./colors.css";
import "./style.css";
import tpl from "./tpl.html"


export default function (){

  const $tpl = $(tpl)
  this.$store.$stream.append($tpl)
  //this.current.dialogBox = false
  /*
  * Вешаем клик на диалоговое окно
  */
  $tpl.on('mousedown', e=>{
      this.next()
  });

	this.on('character', (character, reply)=>{
      /*
      if(!this.current.dialogBox){
        console.error('[ dialog-box ] is not displayed')
      }*/
      $tpl.find('.dialog-box__name').html(character.name).css({ color: character.nameColor })
      $tpl.find('.dialog-box__reply').html(reply).css({ color: character.replyColor })
	});
  this.on('dialog-box', param=>{

    if(param==='clear'){
      //this.current.dialogBox = false
       $tpl.find('.dialog-box__name').empty()
       $tpl.find('.dialog-box__reply').empty()
    }
    else if(param){
      //this.current.dialogBox = true
      $tpl.show()
    }
    else{
      //this.current.dialogBox = false
      $tpl.hide()
    }
  })

}
