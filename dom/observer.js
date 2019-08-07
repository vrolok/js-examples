var observer = new MutationObserver(callback);

function callback(list, observer) {
  for (let mutation of list) {
    // mutation.type 'childList' || 'attributes'
    // do something with MutationRecord
    console.log(mutation);
  }
}

observer.observe(content, {
  attributes: true, 
  subtree: true, 
  childList: true
});