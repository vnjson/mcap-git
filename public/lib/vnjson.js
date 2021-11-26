(function (root, factory) {
  if ( typeof define === 'function' && define.amd ) {
    define([], factory(root));
  } else if ( typeof exports === 'object' ) {
    module.exports = factory(root);
  } else {
    root.Vnjson = factory(root);
  }
})(typeof global !== "undefined" ? global : this.window || this.global, function (root) {

  'use strict';

class Vnjson {
  version = '1.7.5';
  //current object
  ctx = {};
  //loaded scenes
  TREE = {};

  constructor (conf){
    this.conf = conf
    this.debug = conf.debug
    this.on('jump', this.jumpHandler)
    this.on('next', this.next)
    this.on('timeout', this.timeoutHandler)
  }

  /**
   * Plugins store
   */
  plugins = {};
  /**
   * Состояние игры.
   * Необходимо для загрузки и сохранения
   * А так же во время дебага, что бы при обновлении
   * ничего не терялось
   */
  current = {
    index: 0,
    labelName: 'entry',
    sceneName: '$root',
    character: null,
    render: {
      screen: null,
      audio: null,
      scene: null, //bg
      show: {}//left right center show
    },
    options: {
      typespeed: 30,
      volume: 100,
      zoom: 100
    },
    data: { 
      score: null
    },
    tree: [],
    allAssets: [],
    assets: []
  };

  $store = {};

  getAssetByName (name){
    let asset = this.current.assets.filter(asset=>{
                      return asset.name===name;
                })[0];
    if(asset){ 
      return asset
    }
    else{
      console.error(`Asset { ${name} } not found`);
      return {url: name}
    }
  }
  
  getDataByName (id){
    let scenesBody = Object.values(this.TREE)
    var data = null
    scenesBody.map(body=>{

      if(body.data){
        if(body.data.hasOwnProperty(id)){
          data = { id, body:JSON.parse(body.data[id]) }
        }
      }
    })
    return data;
  }
 
  getCurrentLabelBody (){
    let labelBody = this.TREE[this.current.sceneName][this.current.labelName];
    if(labelBody){
      return labelBody;
    }
    else{
      console.error('{ menu } or { jump } leads nowhere');
      console.warn(`scene: ${this.current.sceneName}`);
      console.warn(`label: ${this.current.labelName}`);
      return [''];
    }
  }
  getCurrentCharacter (){

    return this.current.character;
  }
  getCharacterById (id){
    return this.TREE.$root.characters.filter(character=>{
              return character.id === id;
    }).pop()


  }
  getCtx (){
    let ctx = this.getCurrentLabelBody()[this.current.index];
    return ctx;

  }
  setTree (tree){
    this.TREE = tree;

          if(!this.TREE.$root.hasOwnProperty('characters')){
            var narrator = {
                  id: "$",
                  name: "Narrator",
                  nameColor: "#49de58",
                  replyColor: "#a4deaa"
             }
             if(this.conf.$){
                narrator = this.conf.$
             }
            this.TREE.$root.characters = [narrator]

          }

          this.TREE.$root.characters.map(character=>{
            /**
             * Навешиваем слушатель на id персонажа
             * 
             */
            this.on(character.id, (reply)=>{

              this.current.character = character;
              this.emit('character', character, reply);
            })

          });

    this.emit('setTree')
    return this;
  }

  on (event, handler){
      if(!this.plugins[event]) {
        this.plugins[event] = [];
      }
      this.plugins[event].push(handler);
      return this;
  }
  emit (event, ...args){
      if(event in this.plugins) {
          this.plugins[event].forEach(handler=>handler.call(this, ...args))
      }
      else {
        let e = ['setScore', 'screenInit'].indexOf(event)
        if(e===-1){
          console.error(`Plugin { ${event} } not found [ ${this.current.sceneName+'.'+this.current.labelName+'.'+this.current.index} ]`)
        }
      }
      return this;
  }
  off (event){
    delete this.plugins[event]
    return this;
  }
  exec (ctx){
    //Получаем текущий объект контекста
    this.ctx = ctx||this.getCtx();
    if(typeof this.ctx === 'string'){
          this.emit('$', this.ctx);
    }
    else{
      /**
       * Преобразуем объект контекста [this.ctx] в массив 
       * [ ['key', 'value'], ['key2','value2']]
       * Пробегаемся по этому массиву, и записываем 
       * ключ-значение в переменные [ event, data ]
       */
      for(let [event, data] of Object.entries(this.ctx)){
      /**
       * Вызываем плагины с соответсвующими именами ключей
       */
        if(!/^_/i.test(event)){
            this.emit(event, data);
        }
      }
    }/*else*/
    this.emit('exec', this.ctx)
    return this;
  }

  next (){
    if(this.getCurrentLabelBody().length-2<this.current.index){
  
      this.current.index = this.current.index;
      console.warn(`No way out of the label [ ${this.current.labelName} ]`)
    }else{
      this.current.index++;
      this.exec();
    }
    return this;
  };

  use (plugin){
        plugin.call(this);  
        return this;
  }
  /*include plugins*/
  jumpHandler (pathname){
    if(/^_/i.test(pathname) ){
        var index = this.getCurrentLabelBody()
                        .map( ctx=>{
                          return ctx.hasOwnProperty(pathname)
                        })
                        .indexOf(true)
                       
        let label = [ this.current.sceneName, this.current.labelName, index ].join('.')

        this.exec({jump: label})
    }
    else{
        let path = pathname.split('.');
        this.current.index = path[2]||0;
        //label
        if(!/\./i.test(pathname)){    
          this.current.labelName = path[0];
          this.emit('init', false);

        }
        //scene.label
        if(/\./i.test(pathname)){
            this.current.sceneName = path[0];
            this.current.labelName = path[1];
            this.emit('init', true);
        };      
    }
  }

  timeoutHandler (param){
    setTimeout(()=>{
      for(let event in param.exec)
      this.exec({ [event]: param.exec[event] })
    }, param.timer)
  }
};

return Vnjson;
});
