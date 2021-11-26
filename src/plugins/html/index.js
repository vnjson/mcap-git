
export default function(){

this.on('postload', ()=>{
  var htmlChunk = this.TREE.$root.html


  if(htmlChunk){
    for(let event in htmlChunk){
      eventRegistration.call(this, event, htmlChunk[event])
    }
  }
})

}



function eventRegistration(event, tpl){

  var $tpl = $(tpl)
  $tpl.hide().addClass("component")
  this.$store.$stream.append($tpl)

  this.on(event, data=>{
    if( typeof(data) === 'object' ){
        $tpl.css(data.css)
        $tpl.fadeIn()
    }
    else if(data){
       $tpl.fadeIn()
    }
    else{
      $tpl.hide()
    }
  })

}