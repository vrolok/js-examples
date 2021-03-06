function fakeAjax(url,cb) {
	var fake_responses = {
		"file1": "The first text",
		"file2": "The middle text",
		"file3": "The last text"
	};
	var randomDelay = (Math.round(Math.random() * 1E4) % 8000) + 1000;

	console.log("Requesting: " + url);

	setTimeout(function(){
		cb(fake_responses[url]);
	},randomDelay);
}

function output(text) {
	console.log(text);
}

// **************************************

function getFile(file) {
	return new Promise(function(resolve) {
		fakeAjax(file, resolve);
	});
}

// request all files at once in "parallel"
// ???
var file1 = getFile('file1');
var file2 = getFile('file2');
var file3 = getFile('file3');

// Promise.all([file1, file2, file3])
// 	.then(arr => arr.forEach(output))
// 	.then(() => output('Complete!'))

file1
	.then(output)
	.then(() => file2)
	.then(output)
	.then(() => file3)
	.then(output)