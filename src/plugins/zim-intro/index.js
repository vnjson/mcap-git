import { event, init } from "./zim.js"


export default function (){



  this.on(event, data=>{
      if(window.frame) frame.dispose()
      if(data){

          init.call(this)
          this.exec({screen: 'zim'})
      }
      else{

         this.exec({
          screen: 'stream'
        })
      }
  })

}