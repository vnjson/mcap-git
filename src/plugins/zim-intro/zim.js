export const event = "zim-intro"

export function init (){



window.frame = new Frame('zim', 1024, 768, light, dark);



frame.on("ready", function() {

    var stage = frame.stage;
    var stageW = frame.width;
    var stageH = frame.height;
    //frame.outerColor = frame.grey;
   // frame.color = frame.lighter;



  // ~~~~~~~~~ COLUMN 1 ~~~~~~~~~~
/*
  new Label("ZIM COMPONENTS").pos(50, 50, stage).alp(.5);

  var button = new Button({
    backgroundColor:frame.pink,
    rollBackgroundColor:frame.blue,
    corner:0,
    gradient:.1
  }).pos(50, 150, stage);
  button.on("click", function() {pane.show();});

  var pane = new Pane({
    width:400,
    height:300,
    close:true,
    displayClose:false,
    draggable:true,
    titleBar:"Pane"
  });*/
/**
 * NEXT
 */

  var checkBox = new CheckBox({label:"next", startChecked: false})
    .pos(50, 250, stage);
  checkBox.on("change", function() {

      $vnjs.exec({ next: true })
  });


/*
  var radio = new RadioButtons({
    size:40,
    buttons:["Radio 1", "Radio 2", "Radio 3", "Radio 4"]
  }).pos(60, 360, stage);
  radio.selectedIndex = 1;
  radio.on("change", function() {
    indicator.selectedIndex = radio.selectedIndex;
    stage.update();
  });

  var indicator = new Indicator({
    backdropColor:frame.grey,
    backgroundColor:frame.light,
    foregroundColor:frame.pink,
    num:4,
    width:250,
    interactive:true
  }).pos(50, 650, stage);
  indicator.selectedIndex = 1;
  indicator.on("change", function() {
    radio.selectedIndex = indicator.selectedIndex;
    stage.update();
  });


  // ~~~~~~~~~ COLUMN 2 ~~~~~~~~~~


    var dial = new Dial({backgroundColor:frame.blue}).loc(400, 180);
  dial.on("change", function() {
    slider.currentValue = dial.currentValue;
    stage.update();
  });

  var stepper = new Stepper({continuous:true, stepperType:"number", min:1, max:9})
    .pos(500, 155, stage).sca(.5);
  stepper.on("change", function() {
    pad.selectedIndex = stepper.selectedIndex;
    stage.update();
  });

  var slider = new Slider({
    step:1,
    useTicks:true
  }).center().mov(0,-80);
  slider.on("change", function() {
    dial.currentValue = slider.currentValue;
    stage.update();
  });

  var waiter = new Waiter({backgroundColor:frame.pink, corner:0}).show();
  timeout(2, function () {
    waiter.hide();
  })

  var win = new Window({
    height:220,
    padding:10,
    scrollBarDrag:true
  }).pos(360, 480, stage);
  win.add(new Label({text:"Window\n0\n1\n2\n3\n4\n5\n6\n7\n8", color:frame.light}));
*/

  // ~~~~~~~~~ COLUMN 3 ~~~~~~~~~~
/*
  var backing = new Rectangle(400,70,frame.green)
    .pos(stageW-400, 0, stage)
  var tabs = new Tabs({corner:20, width:300})
    .pos(backing.x+50, 10, stage);
  tabs.on("change", function() {
    textArea.text = "TextArea\nTab " + tabs.text;
  });

  var pad = new Pad().pos(780, 120, stage);
  pad.selectedIndex = 0;
  pad.on("change", function() {
    stepper.selectedIndex = pad.selectedIndex;
    stage.update();
  });

  var colorPicker = new ColorPicker({
    colors:[frame.pink, frame.blue, frame.green, frame.yellow, frame.orange, frame.red],
    greyPicker:false,
    alphaPicker:false,
    buttonBar:false,
    cols:6,
    width:300
  })
    .center()
    .mov(310);
  colorPicker.selectedColor = frame.green;
  colorPicker.on("change", function() {
    backing.color = colorPicker.selectedColor;
    stage.update();
  });

*/


   // stage.update(); // this is needed to show any changes


}); 


}