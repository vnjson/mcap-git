import plugins from './plugins.js'


/**
 * Загрузка игры
 */
fetch(`scenes/vn.json`)
  .then(r=>r.json())
  .then(tree=>init(tree))
  .catch(err=>console.error('Ivalid script', err.message))

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
        console.log(123)
        $vnjs.exec({'jump': '$root.$init'})
  })
  $vnjs.on('init', ()=>{
    $vnjs.exec()
  })
}


