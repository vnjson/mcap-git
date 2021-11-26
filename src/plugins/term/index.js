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
      var data = this.getDataByName(param)

      if( /\./.test(param) ){
            
        if(!data){
          console.error('Data file not found')
          console.warn(this.current.sceneName+'.'+this.current.labelName+'.'+this.current.index)
        }
        else{
                let str = param.split('.')
                let langName = str[1]

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
        if(param==='clear'){
          $tpl.find('pre code').empty()
        }
        else{
        let img = $(`<img src=${this.getAssetByName(param).url} />`)
            $tpl.find('pre code').empty()
            $tpl.find('pre code').css('overflow', 'hidden')
            $tpl.find('pre code').append(img)
            $($tpl).fadeIn()

        }
      }
    }
    else{
      $($tpl).hide()
    }

  })

 
}