// Copyrights Joseph Khoury 2010, Lebanese Language Institute; version v0.2 April 22 2010
if(typeof(lebaneseKbd) == 'undefined'){var lebaneseKbd = { notloaded: true, active: false, init:function(){if(typeof(jQuery)!='function'){var script=document.createElement("script");script.type="text/javascript";script.src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js";
document.body.appendChild(script)}; var lbdiv=document.createElement("div");lbdiv.innerHTML="Lebanese ON";lbdiv.id="lebanesekbstatus";document.body.appendChild(lbdiv);
lebaneseKbd._loadlb();},_loadlb : function(){if (typeof(jQuery)!='function'){setTimeout(function(){ lebaneseKbd._loadlb();},250)} 
else{lebaneseKbd.loadlb()}},loadlb :function(){$(document).ready( function() {var link = document.createElement("link");link.setAttribute("rel","stylesheet");link.setAttribute("type","text/css");var head = document.getElementsByTagName("head")[0];head.appendChild(link);link.setAttribute("href","https://raw.github.com/abpin/lebanese-language/master/styles/lebkbstyle.css");jQuery("#lebanesekbstatus").html("lebanese ON").addClass("lebkbg")}); var a;if (this.notloaded) {lebaneseKbd.active = true;jQuery("input:text,textarea,form input,.editable").keypress(function(a){if (lebaneseKbd.active){var b = (a.keyCode) || (a.charCode);
if(b=="13")a.preventDefault();else if(a.shiftKey)switch(b){case 84:a.preventDefault();jQuery(this).insertAtCaret("\u1e6b");break;case 83:a.preventDefault();
jQuery(this).insertAtCaret("\u1e61");break;case 68:a.preventDefault();jQuery(this).insertAtCaret("\u1e0b");break;case 71:a.preventDefault();jQuery(this).insertAtCaret("\u0121");break;case 72:a.preventDefault();
jQuery(this).insertAtCaret("\u1e23");break;case 75:a.preventDefault();jQuery(this).insertAtCaret("\u1e31");break;case 90:a.preventDefault();jQuery(this).insertAtCaret("\u017c");break;case 116:a.preventDefault();
jQuery(this).insertAtCaret("\u1e6a");break;case 115:a.preventDefault();jQuery(this).insertAtCaret("\u1e60");break;case 100:a.preventDefault();jQuery(this).insertAtCaret("\u1e0a");break;case 103:a.preventDefault();
jQuery(this).insertAtCaret("\u0120");break;case 104:a.preventDefault();jQuery(this).insertAtCaret("\u1e22");break;case 107:a.preventDefault();jQuery(this).insertAtCaret("\u1e30");
break;case 122:a.preventDefault(),jQuery(this).insertAtCaret("\u017b")}if(b>49&&b<56)switch(b){case 50:a.preventDefault();jQuery(this).insertAtCaret("'");break;case 51:a.preventDefault();jQuery(this).insertAtCaret("x");break;case 53:a.preventDefault();
jQuery(this).insertAtCaret("\u1e31");break;case 55:a.preventDefault(),jQuery(this).insertAtCaret("\u1e23")}}});jQuery.fn.insertAtCaret=function(a){return this.each(function(){if(document.selection)this.focus(),sel=document.selection.createRange(),sel.text=a,this.focus();else if(this.selectionStart||this.selectionStart=="0"){var b=this.selectionStart,c=this.selectionEnd,d=this.scrollTop;this.value=this.value.substring(0,b)+a+this.value.substring(c,this.value.length);this.focus();this.selectionStart=b+a.length;this.selectionEnd=b+a.length;this.scrollTop=d}else this.value+=a,this.focus()})};
this.notloaded = false;this.active=true;jQuery("#lebanesekbstatus").click(function () {lebaneseKbd.active = !lebaneseKbd.active;if (lebaneseKbd.active) {jQuery("#lebanesekbstatus").html("lebanese ON").addClass("lebkbg").removeClass("lebkbr")} else {jQuery("#lebanesekbstatus").html("lebanese OFF").addClass("lebkbr").removeClass("lebkbg")}})}}};lebaneseKbd.init();}
