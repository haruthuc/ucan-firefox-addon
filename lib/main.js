var selection = require("sdk/selection");
var data = require("sdk/self").data;
var Request = require("sdk/request").Request;

//init content panel
var contentPanel = require("sdk/panel").Panel({
	width : 350,
	height : 280,
	allow : true,
	contentScriptFile : data.url("get-text.js"),
	contentScriptWhen : "ready"
});


selection.on('select', function() {
	
	var countWordArray = selection.text.split(" ").length;

	if (selection.isContiguous && selection.text != "" && countWordArray < 3) {
		
		contentPanel.contentURL = "http://www.ucan.vn/shark/public/resource/dict/index/source/" + selection.text;
		
		contentPanel.show();

	}

});
