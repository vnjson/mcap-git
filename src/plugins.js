
import debug              from './plugins/debug/index.js'
import assetsLoader       from './plugins/assets-loader/index.js'
import screen             from './plugins/screen/index.js'
/*screens*/
import loaderScreen       from './plugins/screen-loader/index.js'
import streamScreen       from './plugins/screen-stream/index.js'
import zimScreen          from './plugins/screen-zim/index.js'
/**/
import dialogBox          from './plugins/dialog-box/index.js'
import hands              from './plugins/hands/index.js'
import cloud              from './plugins/cloud/index.js'
import audio              from './plugins/audio/index.js'
import animate            from './plugins/animate/index.js'
import menu               from './plugins/menu/index.js'
import term               from './plugins/term/index.js'
import inv                from './plugins/inv/index.js'
import show               from './plugins/show/index.js'
import scene              from './plugins/scene/index.js'
import soundHover         from './plugins/sound-hover/index.js'

import clear              from './plugins/clear/index.js'
import data               from './plugins/data/index.js'
import qa                 from './plugins/qa/index.js'
import loadScene          from './plugins/load-scene/index.js'
import slide              from './plugins/slide/index.js'
import content            from './plugins/content/index.js'
import voice              from './plugins/voice/index.js'
import embed              from './plugins/embed/index.js'
/*zim*/
import zimIntro           from './plugins/zim-intro/index.js'
import zimUI              from './plugins/zim-ui/index.js'
/*embed*/




export default function(){
  this.use(debug)
  this.use(assetsLoader)
  /*screens*/
  this.use(screen)
  this.use(streamScreen)
  this.use(loaderScreen)
  this.use(zimScreen)
  /*components*/
  this.use(scene)
  this.use(show)
  this.use(audio)
  this.use(animate)
  this.use(menu)
  this.use(term)
  this.use(inv)
  this.use(cloud)
  this.use(soundHover)
  this.use(clear)
  this.use(dialogBox)
  this.use(hands)
  this.use(data)
  this.use(qa)
  this.use(loadScene)
  this.use(slide)  
  this.use(content)
  this.use(voice)
  this.use(embed)

  /*zim*/
  this.use(zimIntro)
  this.use(zimUI)


}