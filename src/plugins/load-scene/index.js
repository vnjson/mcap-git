import assetsLoader from './assets-loader.js'

export default function (){
  var obj = {}
  window.obj = obj
  //var loaded = false
  var pathName = null
  this.on('load-scene', url=>{
    this.exec({screen: "loader"})

    
    if(obj[url]){
        this.exec({jump: pathName, clear: 'all'})
        this.exec({screen: "stream"})
    }
    else{
        fetch(url)
          .then(r=>r.json())
          .then(r=>init(r))
          var init = data=>{
            pathName = data.package.sceneName+"."+data.package.labelName
            this.TREE[data.package.sceneName] = data.sceneBody
            assetsLoader.call(this, data.sceneBody.assets)
            this.on('postloadAssetsInlcudeScene', ()=>{
              this.exec({screen: "stream"})
              this.exec({clear: 'all'})
              this.exec({jump: pathName})
              obj[url] = true
            }) 
          }
    }

  })

}