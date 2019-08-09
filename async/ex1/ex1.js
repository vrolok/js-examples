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

var order = [];
var store = {};

function showText(file, text) {
	if (!store[file]) {
		store[file] = text;
	}

	let files = order;
	for (let i = 0; i < files.length; i++) {
		if (store[files[i]]) {
			if (store[files[i]] !== 'done') {
				output(store[files[i]]);
				store[files[i]] = 'done';
			}
		} else {
			return false;
		}
	}

	output('Complete!');
}

// **************************************
// The old-n-busted callback way
function getFile(file) {
	fakeAjax(file, function(text) {
		showText(file, text);
	});

	order.push(file);
}

// request all files at once in "parallel"
getFile("file1");
getFile("file2");
getFile("file3");
