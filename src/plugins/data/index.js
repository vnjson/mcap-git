

function loadData (){
  let data = localStorage.getItem('data')
  if(data){
    this.current.data = JSON.parse(data)
  }
  else{
    this.current.data = {score: null}
  }

}

function saveData(){
  let data = JSON.stringify(this.current.data)
  localStorage.setItem('data', data)
  
}
function clearData(){
  localStorage.removeItem('data')
  this.current.data = {score: null}
}
export default function (){

loadData.call(this)



  this.on('set-data', data=>{
    for(let key in data){
      this.current.data[key] = data[key]
    }
    saveData.call(this)
  })
  this.on('clear-data', data=>{
    clearData.call(this)
  })
  this.on('switch', data=>{
    for(let equal in data){
      let param = equal.split('===')
      if(this.current.data[param[0]]===param[1]){
        this.exec(data[equal])
      }
    }
  })
}