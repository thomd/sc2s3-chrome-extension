
chrome.tabs.getSelected(null, (tab) => {

	chrome.tabs.executeScript(tab.id, {file: 'page.js'}, () => {
		let url = tab.url
		let screencapture = {}
		chrome.tabs.sendMessage(tab.id, {url: url})
	});

});
