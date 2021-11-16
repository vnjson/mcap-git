
import tpl from "./tpl.html"

export default function (){
  $('#screen').append(tpl)
  this.$store.$stream = $('#stream')
}