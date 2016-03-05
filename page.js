// page context

chrome.runtime.onMessage.addListener((request, sender, callback) => {

  // create a dummy DOM node to leverage Location methods
  let url = document.createElement('a')
  url.href = request.url

  console.log(url.hostname)

  // capture screenshot

})
