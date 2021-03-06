var boxSwitch = null;
var boxList = {
    'OrnamentBadgeAbox': 15,
    'OrnamentBadgeBbox': 20,
    'MembershipCard': 35,
};


function returnChooseBoxBtn(){
    var totalResObj = document.getElementById('resPics');
    totalResObj.innerHTML = "";
    for (var key in boxList)
    {
        document.getElementById(key).style.display = "block";
        document.getElementById(key+ "Pic").style.display = "block";
    }
    document.getElementById("drawOne").style.display = "none";
    document.getElementById("drawEleven").style.display = "none";
    document.getElementById("returnChooseBox").style.display = "none";
}
 
function drawCard(inCardNum){
    var boxFilePath = "src/" + boxSwitch + "/";
    var randomRange = boxList[boxSwitch] ;
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
        for (var key in boxList)
        {
            document.getElementById(key).style.display = "none";
            document.getElementById(key + "Pic").style.display = "none";
        }
        document.getElementById("drawOne").style.display = "block";
        document.getElementById("drawEleven").style.display = "block";
        document.getElementById("returnChooseBox").style.display = "block";
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