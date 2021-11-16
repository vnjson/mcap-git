import './style.css'
import tree from './tree.js'
import log from './log.js'
import score from './score.js'


export default function  (){
	if(this.debug){	
 	this.on('postload', _=>{
 	

 			tree.call(this)
 			score.call(this)
 	
 			aside()

 	})

log()

this.on('preload', ()=>{
	console.log('|  vnjson.js@'+this.version+ '  |  размер окна: 1325x1080')

	var _obj = {...this.current.data}
	delete _obj.score
	console.log('<i style="font-weight: 600; color: #cf08bb;">data:</i> '+ JSON.stringify(_obj))
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
	})


$('#json-renderer').jsonViewer($vnjs.TREE, {
											collapsed: true,
											rootCollapsable: false, 
											withQuotes: false, 
											withLinks: false
										});


}