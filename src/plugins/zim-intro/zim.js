
export const event = "zim-intro"

export function init (){

var $vnjs = this

window.frame = new Frame('zim', 1024, 768, light, dark);


frame.on("ready", () => {
    const stage = frame.stage;


    let stageW = frame.width;
    let stageH = frame.height;

    new Circle(100, blue)
        .center()
        .drag();
        

  var checkBox = new CheckBox({label:"next", startChecked: false})
    .pos(650, 10, stage);
  checkBox.on("change", function() {
  
      $vnjs.exec({ 
        jump: 'beginning.plug', 
        screen: 'stream' 
      })
      //$vnjs.exec({ next: true })
      
  });


    stage.update(); 
});


}