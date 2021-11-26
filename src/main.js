import plugins from './plugins.js'
import './theme.css'

/**
 * Загрузка игры
 */
fetch(`scenes/vn.json`)
  .then(r=>r.json())
  .then(tree=>init(tree))
  .catch(err=>console.error('Invalid script', err.message))

function init (tree){
  var debug = false
  if(tree.$root.hasOwnProperty('package')){
    debug = tree.$root.package.debug||false
  }
  /*
    conf: {
      debug: true,
      $: {id: '$', name: 'Автор', replyColor: 'red'} //default character
    }
   */
  window.$vnjs = new Vnjson({ debug: debug })

  plugins.call($vnjs)

  $vnjs.setTree(tree)

  $vnjs.on('postload', ()=>{
      $vnjs.exec({screen: 'stream'})
      $vnjs.exec({jump: '$root.$init'})
  })

  $vnjs.on('init', ()=>{
    $vnjs.exec()
  })
}

