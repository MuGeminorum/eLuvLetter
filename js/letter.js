document.getElementById("open").onclick = function () {
	document.getElementById("data").innerHTML = "";
	var changeline = "<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
	var p1 = 'PARAGRAPH';
	var p2 = 'PARAGRAPH';
	var p3 = 'PARAGRAPH';
	var p4 = 'PARAGRAPH';
	var sign = '<br><div align="right">NAME</div>'

	var options = {
		strings: [
			'',
			'NAME: ' + changeline + p1 + changeline + p2 + changeline + p3 + changeline + p4 + sign
		],
		typeSpeed: 100,
		backSpeed: 100,
	};
	var typed = new Typed('#data', options);
};

document.getElementById("about").onclick = function () {
	document.getElementById("data").innerHTML = "";
	var options = {
		strings: [
			'',
			'`<div align="center"><b>About</b></div>`<br>^100<b>WebLetter 1.0.0</b><br>Copyright &copy; 2022 Zeping Zhang<br>`<b>Licence</b>`<br>BSD 2-Clause License<br><b>Third party libraries</b><br>^100 `<a class="external-link" href="https://github.com/george-chou/eLuvLetter">george-chou/eLuvLetter</a>`'
		],
		typeSpeed: 50,
		backSpeed: 50
	};

	var typed = new Typed('#data', options);
};


window.onload = function () {

	let currentUrl = window.location.href;
	let firstIndex = currentUrl.indexOf("#");
	if (firstIndex <= 0) window.location.href = currentUrl + "#contact";
}