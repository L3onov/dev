$(function() {
	// setup ul.tabs to work as tabs for each div directly under div.panes
	$("ul.nav").tabs("div.panes > div", {// enable "cross-fading" effect
	effect: 'fade',
	fadeOutSpeed: "400"});
});
$(function() {		
		
	// initialize scrollable with mousewheel support
	$(".scrollable").scrollable({ vertical: true, mousewheel: true });	
	
});
$(function() {

	// if the function argument is given to overlay,
	// it is assumed to be the onBeforeLoad event listener
	$("a[rel]").overlay({

		mask: {
			color: '#333333',
			loadSpeed: 200,
			opacity: 0.4,
			zIndex:  999
		},

		onBeforeLoad: function() {

			// grab wrapper element inside content
			var wrap = this.getOverlay().find(".contentWrap");

			// load the page specified in the trigger
			wrap.load(this.getTrigger().attr("href"));
		}

	});
});
