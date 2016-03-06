console.log('page.js')

let dimension = (d) => [
  document.documentElement['client' + d],
  document.documentElement['scroll' + d],
  document.documentElement['offset' + d],
  document.body['scroll' + d],
  document.body['offset' + d]
]
let width = Math.max(...dimension('Width'))
let height = Math.max(...dimension('Height'))

chrome.runtime.onMessage.addListener((request, sender, callback) => {
  if(request == 'dimension') {
    callback([width, height])
  }
})

