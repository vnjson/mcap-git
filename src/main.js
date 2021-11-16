import plugins from './plugins.js'


/**
 * Загрузка игры
 */
fetch(`scenes/vn.json`)
  .then(r=>r.json())
  .then(tree=>init(tree))
  .catch(err=>console.error('Ivalid script', err.message))

function init (tree){
  var debug = tree.$root.package.debug
  /*
    conf: {
      debug: true,
      $: {id: '$', name: 'Автор', replyColor: 'red'} //default character
    }
   */
  var vnjs = new Vnjson({ debug })
  window.$vnjs = vnjs
  plugins.call(vnjs)

  vnjs.setTree(tree)
  vnjs.on('postload', ()=>{
        vnjs.exec({'jump': '$root.$init'})
  })
  vnjs.on('init', ()=>{
    vnjs.exec()
  })
}


