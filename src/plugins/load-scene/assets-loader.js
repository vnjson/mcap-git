export default function (_assets){
 

 
var i = 0;

var load = _=>{

  var asset = _assets[i];


if(_assets.length>i){

  if(/\.png|\.jpg|.webp/i.test(asset.url)){
      
             let img = new Image();
             img.src =  asset.url;
             img.onload = ()=>{
                this.$store[asset.name] = asset.url
                  load();
             };


  }


  if(/\.mp3|\.wav|\.ogg/i.test(asset.url)){

    var sound = new Howl({src: asset.url})
        sound.on('load', _=>{
            this.$store[asset.name] = sound;
            load();
        });
 
  }

++i
}
else{
    this.current.assets = this.current.assets.concat(_assets);
    this.emit('postloadAssetsInlcudeScene')

}

};

load();




}