import scoreTpl from './score.html'

export default function (){

  $('#vnjson__tree-score').append(scoreTpl)
   setScore.call(this)
  this.on('setScore', ctx=>{
    setScore.call(this)
  });  
}

function setScore (){

    if(this.debug&&this.current.data.score){
      
      var { логика, творчество, эмоции, общение, теория, практика, прилежание, квалификация } = this.current.data.score
      $('.stream__score--msh').html(логика['мозговой_штурм'])
      $('.stream__score--km').html(логика['критическое_мышление'])
      $('.stream__score--rm').html(логика['рефлексивное_мышление'])
      $('.stream__score--sm').html(логика['стратегическое_мышление'])
      
      $('.stream__score--ti').html(творчество['интуиция'])
      $('.stream__score--tk').html(творчество['креативность'])
      $('.stream__score--to').html(творчество['оригинальность'])
      $('.stream__score--tp').html(творчество['продуктивность'])

      $('.stream__score--ep').html(эмоции['понимание_эмоций'])
      $('.stream__score--ev').html(эмоции['выражение_эмоций'])
      $('.stream__score--eve').html(эмоции['восприятие_эмоций'])
      $('.stream__score--ey').html(эмоции['управление_эмоциями'])

      $('.stream__score--oki').html(общение['кругозор'])
      $('.stream__score--oli').html(общение['лидерство'])
      $('.stream__score--oai').html(общение['адекватность'])
      $('.stream__score--och').html(общение['чувство_юмора'])

      $('.stream__score--t2p').html(теория['понимание'])  
      $('.stream__score--t2y').html(теория['умение_доказать'])
      $('.stream__score--t2yo').html(теория['умение_объяснить'])
      $('.stream__score--t2d').html(теория['доклады_презентации'])

      $('.stream__score--prk').html(практика['работа_в_команде']) 
      $('.stream__score--prz').html(практика['работа_на_занятии'])  
      $('.stream__score--prs').html(практика['работа_самостоятельно'])  
      $('.stream__score--pkvr').html(практика['качество_и_время_работы']) 

      $('.stream__score--p2y').html(прилежание['упорство'])   
      $('.stream__score--p2a').html(прилежание['аккуратность'])   
      $('.stream__score--p2v').html(прилежание['внимательность'])   
      $('.stream__score--p2s').html(прилежание['самоорганизация'])    

      $('.stream__score--k2s').html(квалификация['специализация'])    
      $('.stream__score--k2y').html(квалификация['универсальность'])    
    }

}