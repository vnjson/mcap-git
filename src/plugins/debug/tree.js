


export default function (){


this.on('init', scene=>{

     //localStorage.clear();
     var _labels = $('#vnjson__tree-root  .scene ul.jstree-children li a.jstree-anchor').toArray()
      _labels.map(node=>{
        $(node).removeClass('jstree-clicked')
      })

    _labels.map(node=>{
        let sceneName = $(node).parent().parent().parent().attr('id')
        let labelName = $(node).text()
       // console.log(sceneName,labelName, this.current.labelName)
        if(labelName===this.current.labelName&&sceneName===this.current.sceneName){
          $(node).addClass('jstree-clicked')
          var node_id = $(node).parent().attr('id')
          const jState = `{"state":{"core":{"open":["$items","$root","beginning"],"scroll":{"left":0,"top":0},"selected":["${node_id}"]}},"ttl":false,"sec":1634790070560}`
          localStorage.setItem('tree', jState)
        }
    });
    //this.exec({clear: 'all'})
 })



var data = []
for(let scene in this.TREE){
  let labels = Object.keys(this.TREE[scene]).filter(l=>{
                let exclude =  l!=='html'&&l!=='embed'&&l!=='data'&&l!=='store'&&l!=='assets'&&l!=='package'&&l!=='characters'
                    return exclude
               })

  let node = {
        text: scene, 
        id: scene, 
        state: {
          opened: true,
          selected: false,
          disabled: true
        },
        children:  labels,
        li_attr: {class: 'scene'},
        a_attr: {id: scene, class: 'scene-item'}
  }
    data.push(node)
}
 
  var $vnjs = this
    $("#vnjson__tree-root").jstree({
              core: { data },
              //state: { "key" : "tree" },
              plugins: [ "state" ]
            });

    $('#vnjson__tree-root').on("changed.jstree", function (e, data) {
      let { action, node } = data
      // $vnjs.exec({clear: 'all'})

      if(action!=="deselect_all"){
        
        let sceneName = node.parent
        let labelName = node.text

          let ctx = $vnjs.TREE[sceneName]['$init'][0]
  

          $vnjs.exec(ctx)
          $vnjs.exec({jump: [sceneName, labelName].join('.')})
      }
    });

/**
 * reload
 */
$('.browser-reload').on('click', ()=>{
   location.reload(true)
 })
    
}