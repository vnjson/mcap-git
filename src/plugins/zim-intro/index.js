import { event, init } from "./zim.js"


export default function (){



  this.on(event, data=>{
      if(window.frame) frame.dispose()
      if(data){

         setTimeout(()=>{
            init.call(this)
            this.exec({screen: 'zim'})
         },0)
      }
      else{
         window.frame = null
         this.exec({
          screen: 'stream'
        })
      }
  })

}