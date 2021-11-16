
import "./style.css";
import tpl from "./tpl.html"

var warnMsg = null

export default function (){
  var $tpl = $(tpl)
  this.$store.$stream.append($tpl)

  this.on('postload', ()=>{
    if(this.TREE.$items){
        this.TREE.$items.store.map(asset=>{
              var status = 'sortable-drag'
              var target = null
              if(!asset.disabled){
                  if(asset.target){
                    target = asset.target.join("__")
                  }
                  let storeItem = $(` <div class="inv__cell sound-hover ${status}" data-type="${asset.type}" data-target="${target}" id="${asset.id}"></div>`)
                  storeItem.css('background-image', `url(${this.getAssetByName(asset.id).url})`)
                  $tpl.find('#inventar').append(storeItem)
              }
        })
    }
    else{
      warnMsg = 'Items missing in inventory'
    }
  })

  this.on('inv', show=>{
    if(show){
      if(warnMsg){
        console.warn(warnMsg)
      }
      $tpl.show()
    }
    else{
      $tpl.hide();
    }
  })
  var $vnjs = this
  function checkUnity(chunks){
    var $chunks = chunks.toArray()
    var target = $($chunks[0]).data('target')
   

    let isUnity = $chunks.filter(chunk=>{
                      return target===$(chunk).data('target')
                  }).length===4;
    if(isUnity){
      $vnjs.exec({'set-item': target})
      setTimeout(()=>{
        $('#'+target).hide()
        $('#'+target).appendTo('.inventar__unity').show(100)
      },10)
    }

  }


  function onAdd (e){
             let typeItem = $(e.item).data('type')
             let typeTarget = $(e.to).data('type')
             if(typeTarget!==typeItem){
                var i = e.item
                $(e.item).attr('dragable', true)
                $(e.item).remove()
                $(e.from).append(i)
             }
             //item.type===item.type
             else{
                let chunks = $(e.to).children()
                if(chunks.length===4){
                  checkUnity(chunks)
                }

             }
  }
 

      Sortable.create(document.querySelector('#inventar'), 
        {
          group: {
            name: 'inv',
            put: ['cloth', 'accessor', 'equip', 'craft']
          },
          animation: 150,
        })
        Sortable.create(document.querySelector('.inventar__cloth'), 
        {
          group: {
            name: 'cloth',
            pull: 'inv',
            put: (to)=>{
              return to.el.children.length<4
            }
          },
          animation: 150,
          onAdd
        })
        Sortable.create(document.querySelector('.inventar__accessor'), 
        {
          group: {
            name: 'accessor',
            pull: 'inv',
            put: (to)=>{
              return to.el.children.length<4
            }
          },
          animation: 150,
          onAdd
        })
        Sortable.create(document.querySelector('.inventar__equip'), 
        {
          group: {
            name: 'equip',
            pull: 'inv',
            put: (to)=>{
              return to.el.children.length<4
            },
          },
          animation: 150,
          onAdd

        })
        Sortable.create(document.querySelector('.inventar__craft'), 
        {
          group: {
            name: 'craft',
            pull: 'inv',
            put: (to)=>{
              return to.el.children.length<4
            }
          },
          animation: 150,
          onAdd,
          onMove: ()=>{
            $('.inventar__unity').children().hide(200)
          }
        })




  this.on('inv-set', id=>{
        var itemInStore = $('#inventar .inv__cell').toArray().filter(item=>{
                            return $(item).attr('id')===id
                          })

        if(itemInStore.length<1){
            var asset = this.TREE.$items.store.filter(asset=>asset.id===id)[0]
            if(asset){
                var status = 'sortable-drag'

                let storeItem = $(` <div id=${asset.id} class="inv__cell sound-hover ${status}" data-type="${asset.type}"></div>`)
                storeItem.css('background-image', `url(${this.getAssetByName(asset.id).url})`)
                $('#inventar').append(storeItem)
            }
        }
  })
  this.on('inv-get', id=>{
    $('#inventar').find('#'+id).remove()
  })



}