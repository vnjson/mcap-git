
export default function(){

this.on('postload', ()=>{
  var embed = this.TREE.$root.embed


  if(embed){
    for(let event in embed){
      eventRegistration.call(this, event, embed[event])
    }
  }
})

}



function eventRegistration(event, tpl){

  var $tpl = $(tpl)
  $tpl.hide().addClass("component").css('background-color', 'white')
  this.$store.$stream.append($tpl)

  this.on(event, data=>{
    if(data){
      $tpl.fadeIn()
    }
    else{
      const $src = $tpl
      $tpl.remove()
      $src.hide()
      this.$store.$stream.append($tpl)
    }
  })

}