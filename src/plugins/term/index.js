import "./style.css";
import tpl from "./tpl.html"
document.addEventListener('DOMContentLoaded', ()=>{
    hljs.highlightAll();
})
/**/
export default function (){

  var $tpl = $(tpl)

  this.$store.$stream.append($tpl)

  this.on('term', param=>{


    if(param){

      if( /\./.test(param) ){
        let str = param.split('.')
        let dataKey = str[0]
        let langName = str[1]
        var data = this.getDataByName(param)
        if(data){
            $tpl.find('pre code').css('overflow', 'auto')
            var html = hljs.highlight(data.body, { language:langName }).value
            $tpl.find('pre code').html(html)
            $tpl.find('pre code .hljs-string').toArray().map(str=>{
              if($(str).html()==='$:'){
                $(str).addClass('hljs-reply')
              }
            })
            $($tpl).fadeIn() 
        }
      }
      else{
        let img = $(`<img src=${this.getAssetByName(param).url} />`)
        $tpl.find('pre code').empty()
        $tpl.find('pre code').css('overflow', 'hidden')
        $tpl.find('pre code').append(img)
        $($tpl).fadeIn()
      }
    }
    else{
      $($tpl).hide()
    }

  })

 
}