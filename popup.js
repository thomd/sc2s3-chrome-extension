
chrome.tabs.getSelected(null, function(tab) {

	chrome.tabs.executeScript(tab.id, {file: 'page.js'}, function() {
	});

});
