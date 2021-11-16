import './style.css'


export default function (){
  
  var prevScreen = null

  this.on('screen', id=>{
    if(prevScreen&&prevScreen!==id){
      $('#'+prevScreen).fadeOut()
      prevScreen = id
      $('#'+id).fadeIn()
    }
    else{
      prevScreen = id
      $('#'+id).fadeIn()
    }
    this.$store.$screen = $('#'+id)
    this.emit('screenInit', id);
  })
}