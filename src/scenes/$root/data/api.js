  plugins = {}

  current = {
    index: 0,
    labelName: '$init',
    sceneName: '$root',
    character: {id: '$', name: 'Norrator'},
    data: { 
      points: 0
    },
    allAssets: []
  }

  $store = {}

  getAssetByName (name){}

  getDataByName (id){}

  getCurrentLabelBody (){}

  getCurrentCharacter (){}

  getCharacterById (id){}

  getCtx (){}

  setTree (tree){}

  on (event, handler){}

  emit (event, ...args){}

  off (event){}

  exec (ctx){}

  next (){}

  use (plugin){}
