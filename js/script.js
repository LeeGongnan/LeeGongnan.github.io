var boxSwitch = null;
var boxList = ['A', 'B'];


function returnChooseBox(){
    alert(111);
}
 
function drawCard(inCardNum){
    var boxFilePath = "src/" + boxSwitch + "box/";
    var randomRange = boxSwitch == boxList[0] ? 15 : 20;
    var totalResObj = document.getElementById('resPics');
    totalResObj.innerHTML = "";
    for (var i = 0; i < inCardNum; i++)
    {
        var result = Math.floor(Math.random()*randomRange) + 1;
        var picPath = boxFilePath + result.toString() + ".jpg";
        var resImgObj = document.createElement('img');
        resImgObj.src = picPath;
        var textOjb = document.createTextNode("第"+(i+1).toString()+"抽结果：");
        var brObj = document.createElement('br');
        brObj.innerHTML = "<br/>";
        var imgBrObj = document.createElement('br');
        imgBrObj.innerHTML = "<br/>";

        totalResObj.appendChild(textOjb);
        totalResObj.appendChild(brObj);
        totalResObj.appendChild(resImgObj);
        totalResObj.appendChild(imgBrObj);
    }
}

function showDrawButton(){
    if (boxSwitch != null)
    {
        for (var i = 0; i < boxList.length; i++)
        {
            document.getElementById(boxList[i] + "box").style.display = "none";
            document.getElementById(boxList[i] + "boxPic").style.display = "none";
        }
        document.getElementById("drawOne").style.display = "block";
        document.getElementById("drawEleven").style.display = "block";
    }
    else
    {
        alert("请先选择分盒!");
    }
}

function chooseBox(inBoxSwitch){
    boxSwitch = inBoxSwitch;
    showDrawButton();
}