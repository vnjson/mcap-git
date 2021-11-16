
//https://api.jquery.com/animate/
/*
	не умеет анимировать свойства 
  вроде 45deg, и т.д
 */
export default function (){

  this.on('animate', data=>{
    let { selector, duration, css } = data
    console.log(data)
    $(selector).animate(css, duration)
     $(selector).css('color', 'red')
  })
  
}