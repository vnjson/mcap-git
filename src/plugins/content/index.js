import './style.css'
import icoContent from './assets/icoContent.jpg'

const $tpl = $(`<ul class="stream__stage component"></ul>`)
export default function (){

  this.$store.$stream.append($tpl)

  this.on('content', data=>{
    if( typeof(data)==='string' ){
      console.log('hide: ', data)
    }
    else if ( typeof(data)==='object' ){
      renderTree.call(this, data)
    } 
    else{
      $tpl.hide();
    }
  })


  $('.stream__hands').on('mouseover', '.stream__hand-right', function (){
    $(this).css('opacity', 0.5)
  })
  $('.stream__hands').on('mouseout', '.stream__hand-right', function (){
    $(this).css('opacity', 1)
  })


  $('.stream__hand-right').css('background-image', `url(${icoContent})`)
  $('.stream__hands').on('click', '.stream__hand-right', e=>{
    if(this.TREE.$root.content){
        this.exec({ jump: '$root.content' })
    }
    /*
    else{
      console.warn('Scene: { ' +'$root.content'+ ' } not found')
    }*/

  })


}



function renderTree(data){
  const $vnjs = this;

  $tpl.empty()
  $tpl.fadeIn()

  data.map(item=>{
    var $parent = $(`<li class="stage-parent"><div class="stage-vol stage-item sound-hover"></div><ul class="stage-children"></ul></li>`)
    Object.keys(item).map( (key, i)=>{
      
       if(i===0){
        $parent.find('.stage-vol').html(item[key]).attr('data-label', key)

        if(/disabled/i.test(key)){
          $parent.addClass('disabled')
        }
       }
       else{
        let $str = $(`<li class="stage-child stage-item sound-hover" data-label="${key}">${item[key]}<li>`)
   
        if(/disabled/i.test(key)){
          $str.addClass('disabled')
        }
        $parent.find('ul').append($str)
       }

    })
    $tpl.append($parent)
    
  })
function clickHandler(){
    let label = $(this).data('label')
    $tpl.hide()   
    $vnjs.exec({ jump: label })
    $tpl.off('click', clickHandler)
}
$tpl.on('click', '.stage-item', clickHandler)



}