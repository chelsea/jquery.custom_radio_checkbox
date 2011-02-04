//##############################
// jQuery Custom Radio-buttons and Checkbox; basically it's styling/theming for Checkbox and Radiobutton elements in forms
// By Dharmavirsinh Jhala - dharmavir@gmail.com
// Revised by Chelsea Robb - github.com/chelsea
// Date of update: 4th February 2011
// Version: 0.9
//
// Switched to add or remove a checked class on the bound 
// element.  Simply set a .checked class in your css to display
// however you want
/*
 USAGE:
	$(document).ready(function(){
		$("radioWrapper").dgCheck();
	}
*/

// Extend JQuery Functionality For Custom Radio Button Functionality
jQuery.fn.extend({
dgStyle: function()
{
	// Initialize with initial load time control state
	$.each($(this), function(){
		var elm	=	$(this).children().get(0);
		elmType = $(elm).attr("type");
		$(this).data('type',elmType);
		$(this).data('checked',$(elm).attr("checked"));
		$(this).dgClear();
	});
	$(this).mouseup(function() { $(this).dgHandle(); });	
},
dgClear: function()
{
	if($(this).data("checked") == true)
		$(this).addClass("checked");
	else
		$(this).removeClass("checked");
},
dgHandle: function()
{
	var elm	=	$(this).children().get(0);
	if($(this).data("checked") == true)
		$(elm).dgUncheck(this);
	else
		$(elm).dgCheck(this);
	
	if($(this).data('type') == 'radio')
	{
		$.each($("input[name='"+$(elm).attr("name")+"']"),function()
		{
			if(elm!=this)
				$(this).dgUncheck(-1);
		});
	}
},
dgCheck: function(div)
{
	$(this).attr("checked",true);
	$(div).data('checked',true).addClass('checked');
},
dgUncheck: function(div)
{
	$(this).attr("checked",false);
  $(this).parent().data("checked",false).removeClass("checked");
}
});