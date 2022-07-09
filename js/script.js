import fs from 'fs';
import path from 'path';

var boxSwitch = null;
var boxList = ['A', 'B'];


function returnChooseBox(){
    alert(111);
}
 
function drawCard(inCardNum){
    var boxFilePath = path.resolve("src/" + boxSwitch + "box");
    fs.readdir(boxFilePath,function(err,files){
        if(err){
          console.warn(err)
        }else{
          //遍历读取到的文件列表
          files.forEach(function(filename){
            //获取当前文件的绝对路径
            var filedir = path.join(filePath,filename);
            //根据文件路径获取文件信息，返回一个fs.Stats对象
            fs.stat(filedir,function(eror,stats){
              if(eror){
                console.warn('获取文件stats失败');
              }else{
                var isFile = stats.isFile();//是文件
                alert(stats);
              }
            })
          });
        }
      });
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