function fakeAjax(url,cb) {
	const fake_responses = {
		"file1": "The first text",
		"file2": "The middle text",
		"file3": "The last text"
	};
	const randomDelay = (Math.round(Math.random() * 1E4) % 8000) + 1000;

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
	let resp;

	fakeAjax(file, function(text) {
		if (resp) resp(text);
		resp = text;
	})

	return function thunk(cb) {
		if (resp) cb(resp);
		resp = cb;
	}
}

const th1 = getFile('file1');
const th2 = getFile('file2');
const th3 = getFile('file3');

th1(function ready(text) {
	output(text);
	th2(function ready(text) {
		output(text);
		th3(function ready(text) {
			output(text);
			output('Complete!');
		});
	});
})
