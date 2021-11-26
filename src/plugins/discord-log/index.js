import { webhook, avatar_url } from './config.yaml'

export default function (){

  function sendMessage(params, url) {
      const request = new XMLHttpRequest();
      request.open("POST", url);
      request.setRequestHeader('Content-type', 'application/json');
      request.send(JSON.stringify(params));
    }

this.on('discord-log', msg=>{
  var content = null
  if(typeof(msg)==='string'){
    content = this.TREE.$root.package.name+' [ '+this.current.sceneName+'.'+this.current.labelName+' ]  '+ msg
  }
  else{
    content = this.TREE.$root.package.name+' [ '+this.current.sceneName+'.'+this.current.labelName+' ]'
  }
      const params = {
        username: $vnjs.current.data.player.name,
        avatar_url,
        content
      }

  sendMessage(params, webhook) 
})


}