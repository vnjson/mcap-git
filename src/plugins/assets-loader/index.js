export default function (){




var getAssets = _=>{
  this.emit('preload')
var i = 0;

var load = _=>{
  var asset = this.current.assets[i];
  
  if(/\.mp3|\.wav|\.ogg/i.test(asset.url)){
    var sound = new Howl({src: asset.url})
        sound.on('load', _=>{
          this.$store[asset.name] = sound;
          if( this.current.assets.length-1>=++i){
            this.emit('load', asset)
            load();
            
          }else{
            this.emit('postload') 
          }             
        });
  }
  else if(/\.png|\.jpg|\.jpeg|\.webp|\.gif/i.test(asset.url)){
    
      if(this.TREE.$root.hasOwnProperty('package')){
          if(this.TREE.$root.package.hasOwnProperty('preload') ){
            if(this.current.assets.length-1>=++i){
              if(this.TREE.$root.package.preload){
                    let img = new Image();
                    img.src =  asset.url;
                    img.onload = ()=>{
                      this.$store[asset.name] = img
                      this.emit('load', asset)
                      load()
                      
                    };
              }
              else{
                this.$store[asset.name] = asset.url
                 load()
              }

            }else{
                  this.emit('postload')
            };

          }
      }
 

  

  }
  else{
    ++i
    load();
    console.warn(asset.url +' Format not supported')
  }
};

load();


};

var setAllAssets = ()=>{

    for(let [scene, body] of Object.entries(this.TREE)){
        this.current.assets = this.current.assets.concat(body.assets);
    };
    if(this.current.assets.length>0){

          getAssets();
       
    }
    else{
 
      setTimeout(()=>{
        this.emit('preload')
        this.emit('load')
        this.emit('postload')
      },0)

    }

}

/*
this.on('preload', scene=>{

  var assets = this.TREE[this.current.sceneName].assets;
  this.current.assets = this.current.assets.concat(assets);

  this.emit('setAssets');
})

*/

this.on('setTree', _=>{
  setAllAssets();


});


}
