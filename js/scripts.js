var oEditor = document.getElementById("Editor");
var oDiv2 = document.getElementById("Div2");
var oDiv1 = document.getElementById("Div1");

var oCcl = document.getElementById("Ccl");
var oRst = document.getElementById("Rst");
var oCfm = document.getElementById("Cfm");

var oRed = document.getElementById("Red");
var oYellow = document.getElementById("Yellow");
var oBlue = document.getElementById("Blue");

var oW100px = document.getElementById("W100px");
var oW200px = document.getElementById("W200px");
var oW300px = document.getElementById("W300px");

var oH100px = document.getElementById("H100px");
var oH200px = document.getElementById("H200px");
var oH300px = document.getElementById("H300px");

oEditor.onclick = function(){
	oDiv2.style.display = 'block';
};
oEditor.onmouseover = function(){
	oEditor.style.display = 'block';
	oEditor.style.backgroundColor = '#909090';
	oEditor.style.borderColor = 'red';
};
oEditor.onmouseout = function(){
	oEditor.style.display = 'block';
	oEditor.style.backgroundColor = 'red';
	oEditor.style.borderColor = '#000';
};

oCfm.onclick = cfm_;
function cfm_(){
	oDiv2.style.display = 'none';
};
oCfm.onmouseover = function(){
	oCfm.style.display = 'block';
	oCfm.style.backgroundColor = '#909090';
	oCfm.style.borderColor = 'red';
};
oCfm.onmouseout = function(){
	oCfm.style.display = 'block';
	oCfm.style.backgroundColor = '#00FF03';
	oCfm.style.borderColor = '#000';
};

oRst.onclick = function(){
	oDiv1.style.backgroundColor = '#FFFFFF';
	oDiv1.style.border = '1px solid #000';
	oDiv1.style.width = '80px';
	oDiv1.style.height = '80px';
	oDiv1.style.lineHeight = '80px';
};
oRst.onmouseover = function(){
	oRst.style.display = 'block';
	oRst.style.backgroundColor = '#909090';
	oRst.style.borderColor = 'red';
};
oRst.onmouseout = function(){
	oRst.style.display = 'block';
	oRst.style.backgroundColor = '#ECFB00';
	oRst.style.borderColor = '#000';
};


oRed.onclick = function(){
	oDiv1.style.backgroundColor = 'red';
};
oRed.onmouseover = function(){
	oRed.style.display = 'block';
	oRed.style.backgroundColor = '#909090';
	oRed.style.borderColor = 'red';
};
oRed.onmouseout = function(){
	oRed.style.display = 'block';
	oRed.style.backgroundColor = 'red';
	oRed.style.borderColor = '#000';
};


oYellow.onclick = function(){
	oDiv1.style.backgroundColor = 'yellow';
};
oYellow.onmouseover = function(){
	oYellow.style.display = 'block';
	oYellow.style.backgroundColor = '#909090';
	oYellow.style.borderColor = 'red';
};
oYellow.onmouseout = function(){
	oYellow.style.display = 'block';
	oYellow.style.backgroundColor = 'yellow';
	oYellow.style.borderColor = '#000';
};


oBlue.onclick = function(){
	oDiv1.style.backgroundColor = 'blue';
};
oBlue.onmouseover = function(){
	oBlue.style.display = 'block';
	oBlue.style.backgroundColor = '#909090';
	oBlue.style.borderColor = 'red';
};
oBlue.onmouseout = function(){
	oBlue.style.display = 'block';
	oBlue.style.backgroundColor = 'blue';
	oBlue.style.borderColor = '#000';
};


oW100px.onclick = function(){
	oDiv1.style.width = '100px';
};
oW100px.onmouseover = function(){
	oW100px.style.display = 'block';
	oW100px.style.backgroundColor = '#909090';
	oW100px.style.borderColor = 'red';
};
oW100px.onmouseout = function(){
	oW100px.style.display = 'block';
	oW100px.style.backgroundColor = '#CACACA';
	oW100px.style.borderColor = '#000';
};


oW200px.onclick = function(){
	oDiv1.style.width = '200px';
};
oW200px.onmouseover = function(){
	oW200px.style.display = 'block';
	oW200px.style.backgroundColor = '#909090';
	oW200px.style.borderColor = 'red';
};
oW200px.onmouseout = function(){
	oW200px.style.display = 'block';
	oW200px.style.backgroundColor = '#CACACA';
	oW200px.style.borderColor = '#000';
};


oW300px.onclick = function(){
	oDiv1.style.width = '300px';
};
oW300px.onmouseover = function(){
	oW300px.style.display = 'block';
	oW300px.style.backgroundColor = '#909090';
	oW300px.style.borderColor = 'red';
};
oW300px.onmouseout = function(){
	oW300px.style.display = 'block';
	oW300px.style.backgroundColor = '#CACACA';
	oW300px.style.borderColor = '#000';
};


oH100px.onclick = function(){
	oDiv1.style.height = '100px';
	oDiv1.style.lineHeight = '100px';
};
oH100px.onmouseover = function(){
	oH100px.style.display = 'block';
	oH100px.style.backgroundColor = '#909090';
	oH100px.style.borderColor = 'red';
};
oH100px.onmouseout = function(){
	oH100px.style.display = 'block';
	oH100px.style.backgroundColor = '#CACACA';
	oH100px.style.borderColor = '#000';
};


oH200px.onclick = function(){
	oDiv1.style.height = '200px';
	oDiv1.style.lineHeight = '200px';
};
oH200px.onmouseover = function(){
	oH200px.style.display = 'block';
	oH200px.style.backgroundColor = '#909090';
	oH200px.style.borderColor = 'red';
};
oH200px.onmouseout = function(){
	oH200px.style.display = 'block';
	oH200px.style.backgroundColor = '#CACACA';
	oH200px.style.borderColor = '#000';
};


oH300px.onclick = function(){
	oDiv1.style.height = '300px';
	oDiv1.style.lineHeight = '300px';
};
oH300px.onmouseover = function(){
	oH300px.style.display = 'block';
	oH300px.style.backgroundColor = '#909090';
	oH300px.style.borderColor = 'red';
};
oH300px.onmouseout = function(){
	oH300px.style.display = 'block';
	oH300px.style.backgroundColor = '#CACACA';
	oH300px.style.borderColor = '#000';
};
