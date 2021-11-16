
export default function (){

  const $tpl = $(`<pre id="debug-logger"></pre>`)

  $('body').append($tpl)
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
     
}
