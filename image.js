chrome.runtime.onMessage.addListener((request, sender, callback) => {
  var img = document.getElementsByTagName('img')[0]
  img.src = request.data
  img.onload = () => {
    img.className = 'shadow'
  }
  document.getElementsByTagName('figcaption')[0].appendChild(document.createTextNode(request.name))
})
