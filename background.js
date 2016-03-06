chrome.browserAction.onClicked.addListener((tab) => {

  // create a dummy DOM node to leverage Location methods
  let url = document.createElement('a')
  url.href = tab.url
  let filename = url.hostname

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

      chrome.tabs.captureVisibleTab(null, {format: 'png'}, (dataURI) => {

        chrome.tabs.create({url: chrome.extension.getURL('image.html')}, (tab) => {

          // TODO fix this (wait until image.js is loaded)
          setTimeout(() => {
            chrome.tabs.sendMessage(tab.id, {data: dataURI, name: filename}, (result) => {
              //console.log(result)
            })
          }, 1000)
        })
        //if(dataURI) {
          //var image = new Image()
          //image.src = dataURI
          //image.onload = () => {
            //screencapture.ctx.drawImage(image, 0, 0)
          //}
        //}
      })
    })
	})
})
