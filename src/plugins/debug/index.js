import './style.css'
import tree from './tree.js'
import log from './log.js'
import score from './score.js'
import asideTpl from './aside.html'

export default function  (){
	if(this.debug){	
 	this.on('postload', _=>{
 	
			tree.call(this)
 			score.call(this)
 	
 	 	aside()
 			

 	})


var $aside = $(asideTpl)
 $($aside).appendTo('.wrapper')

log()
console.log('|  vnjson.js@'+this.version+ '  [ window ] development: 1400x1080 | production: 1024x768')
/**
 * Что бы отображалось в консоле data
 */

this.on('player-load', name=>{
    if( store.get(name) ){
        this.current.data = store.get(name)
        var _obj = {...this.current.data}
        delete _obj.score
        delete _obj.player
        console.log('<i style="background: #000000;padding: 3px 3px; color: #f4f5e9;">| data |</i> '+ JSON.stringify(_obj))
    }
})
this.on('preload', ()=>{
	console.log('<i style="background: darkcyan;padding: 3px 10px; color: #f4f5e9;">preload</i>')
})
this.on('load', asset=>{
		console.log('  '+ JSON.stringify(asset) )
})
this.on('postload', ()=>{
		console.log('<i style="background: darkcyan;padding: 3px 10px; color: #f4f5e9;">postload</i>')
})



this.on('screenInit', screen=>{
	console.log('<i style="background: #3872c9;padding: 3px 10px; color: #f4f5e9;">screen</i>  '+screen)
})
this.on('init', ()=>{
	if(this.current.index!==0){
		console.log('<i style="background: #582282;padding: 3px 10px; color: #f4f5e9">jump</i>  '+this.current.sceneName+'.'+this.current.labelName+'.'+this.current.index)
	}
	else{
		console.log('<i style="background: #582282;padding: 3px 10px; color: #f4f5e9">jump</i>  '+this.current.sceneName+'.'+this.current.labelName)
	}
})

}	


}



function aside(){
	var prev = 'vnjson__tree-root'

	$('.vnjson__tree-header').on('click', '.vnjson__tree-header--tab', function (){
		
		$('.vnjson__tree-header--tab').toArray().map(tab=>{
			$(tab).removeClass('debug-active')
		})

		let id = $(this).data('id')
		$('#'+prev).hide()
		$('#'+id).fadeIn()
		prev=id
		$(this).addClass('debug-active')
		if(id==='vnjson__tree-qr'){
			$('#debug__qrcode--text').focus()
		}
	})


$('#json-renderer').jsonViewer($vnjs.TREE, {
											collapsed: true,
											rootCollapsable: false, 
											withQuotes: false, 
											withLinks: false
										});

/*
 * color-picker
 */
var hueb = new Huebee( '.debug__color-input', {
  notation: 'hex',
  saturations: 4
});

$('.vnjson__tree-color-picker').on('click', '.huebee__canvas', function (){
    copyToClipboard(document.querySelector(".debug__color-input"))
})
/**
 * qr-code
 */

const qrcode = new QRCode("debug__qrcode");
const qrcodeText = document.getElementById("debug__qrcode--text")

$('#debug__qrcode--generate').on('mousedown', function (e){
	qrcode.makeCode(qrcodeText.value);
	outputImgCode()
})
$(document).on('keypress',function(e) {
    if(e.which == 13) {
			qrcode.makeCode(qrcodeText.value);
			outputImgCode()
    }
});


function outputImgCode(){

setTimeout(()=>{
$('#debug__clipboard-container').html('')
const tpl = `<div>
				<p>используйте html - plugin для вставки кода в новелу</p>
      			<button id="debug__copy-to-clipboard">copy</button>
      		</div>`
$('#debug__clipboard-container').append(tpl)	
const str = $('#debug__qrcode').html()
const wrapper = $('<textarea id="debug__html-code" spellcheck="false"></textarea>')
			wrapper.text(str.split('</canvas>')[1])
			$('#debug__clipboard-container').append(wrapper)	
		},100)
$('#debug__clipboard-container').on("click", '#debug__copy-to-clipboard', function() {
    copyToClipboard(document.getElementById("debug__html-code"));
});


}
//outputImgCode()


/*
 * clipboard
 */
function copyToClipboard(elem) {

    var targetId = "_hiddenCopyText_";
    var isInput = elem.tagName === "INPUT" || elem.tagName === "TEXTAREA";
    var origSelectionStart, origSelectionEnd;
    if (isInput) {
        target = elem;
        origSelectionStart = elem.selectionStart;
        origSelectionEnd = elem.selectionEnd;
    } else {

        target = document.getElementById(targetId);
        if (!target) {
            var target = document.createElement("textarea");
            target.style.position = "absolute";
            target.style.left = "-9999px";
            target.style.top = "0";
            target.id = targetId;
            document.body.appendChild(target);
        }
        target.textContent = elem.textContent;
    }
    var currentFocus = document.activeElement;
    target.focus();
    target.setSelectionRange(0, target.value.length);
    
    var succeed;
    try {
    	  succeed = document.execCommand("copy");
    } catch(e) {
        succeed = false;
    }

    if (currentFocus && typeof currentFocus.focus === "function") {
        currentFocus.focus();
    }
    
    if (isInput) {
        elem.setSelectionRange(origSelectionStart, origSelectionEnd);
    } else {
        target.textContent = "";
    }
    return succeed;
}

}