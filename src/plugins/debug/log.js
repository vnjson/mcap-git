
export default function (){

  const $tpl = $(`<pre id="debug-logger"></pre>`)

  $('.game').append($tpl)
  var logger = document.getElementById("debug-logger")

  function outputHtml(output){
        logger.innerHTML += output;
        logger.scrollTop = logger.scrollHeight;
  }



    console.clear = function () {
        logger.innerHTML = ""
    }
    console.log = function () {
        var output = "", arg, i;
        for (i = 0; i < arguments.length; i++) {
            arg = arguments[i];
            output += "<span class=\"log-" + (typeof arg) + "\">";

            if (
                typeof arg === "object" &&
                typeof JSON === "object" &&
                typeof JSON.stringify === "function"
            ) {
                output += JSON.stringify(arg);   
            } else {
                output += arg;   
            }

            output += "</span>";
        }
        outputHtml(output)
    };
    console.info = console.log
    console.error = function () {

        var output = "", arg, i;
        for (i = 0; i < arguments.length; i++) {
            arg = arguments[i];
            output += "<span class=\"error-" + (typeof arg) + "\">";

            if (
                typeof arg === "object" &&
                typeof JSON === "object" &&
                typeof JSON.stringify === "function"
            ) {
                output += JSON.stringify(arg);   
            } else {
                output += arg;   
            }

            output += "</span>";
        }
        outputHtml(output)
    };



    console.warn = function () {
        var output = "", arg, i;
        for (i = 0; i < arguments.length; i++) {
            arg = arguments[i];
            output += "<span class=\"warn-" + (typeof arg) + "\">";

            if (
                typeof arg === "object" &&
                typeof JSON === "object" &&
                typeof JSON.stringify === "function"
            ) {
                output += JSON.stringify(arg);   
            } else {
                output += arg;   
            }

            output += "</span>";
        }

        outputHtml(output)
    };

    window.addEventListener('error', function(e) {
        e.preventDefault();
        console.error(e.message);
        return true;
    }, true);
      //logger.scrollTop = 99999999999; 
/**
 * Terminal
 */
var $terminal = $(`
    <div class="debug__terminal">
        <span class="debug__terminal-tilda">~</span>
        <input spellcheck="false" class="debug__terminal-input" placeholder="key: value"/>
    </div>
    `)
$($terminal).insertAfter($tpl)

function evaluate (){

    let data = $('.debug__terminal-input').val().split(':')
    if(data.length>1){
            var param = data[1].trim()
            if(param==='false') 
                        param=false 
            if(param==='true')
                        param=true

            $vnjs.emit( data[0], param )  
    }
    else{
        $vnjs.emit( '$', data[0] )
    }

    $('.debug__terminal-input').val('')
}


$('.debug__terminal-tilda').on('mousedown', function (e){
    e.preventDefault()

    evaluate()
})
$(document).on('keypress', function (e){
    //setCaretPosition($('.debug__terminal-input').val().length)
    if(e.which == 13) { 
        e.preventDefault()
        evaluate()
    }

})
/*
function setCaretPosition(caretPos) {
    var elem =  document.querySelector('.debug__terminal-input')

    if(elem != null) {
        if(elem.createTextRange) {
            var range = elem.createTextRange();
            range.move('character', caretPos);
            range.select();
        }
        else {
            if(elem.selectionStart) {
                elem.focus();
                elem.setSelectionRange(caretPos, caretPos);
            }
            else
                elem.focus();
        }
    }
}
*/
}


