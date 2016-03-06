
chrome.browserAction.onClicked.addListener((tab) => {

  console.log('tab: %s', tab.id)
  console.log('url: %s', tab.url)

  // create a dummy DOM node to leverage Location methods
  let url = document.createElement('a')
  url.href = tab.url
  let filename = url.hostname

  console.log('filename: %s', filename)

	chrome.tabs.executeScript(tab.id, {file: 'page.js'}, () => {

    chrome.tabs.sendMessage(tab.id, 'dimension', (result) => {

      // get page dimensions
      let [width, height] = result

      // prepare canvas
      let screencapture = {}
      let canvas = document.createElement('canvas')
      canvas.width = width
      canvas.height = height
      screencapture.canvas = canvas
      screencapture.ctx = canvas.getContext('2d')

      console.log('canvas: [%d,%d]', width, height)

      //chrome.tabs.captureVisibleTab(null, {format: 'png'}, (dataURI) => {
      //console.log(dataURI)
      //})
    })
	})
})
