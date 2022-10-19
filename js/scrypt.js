
let like = document.getElementById("like").src = "img/black.png";
function hearting(){
    let a = document.getElementById("like").src;
        console.log(a);
        if(a=="file:///D:/front%20end/front%20end/Final%20Project/img/black.png"){
            document.getElementById("like").src = "img/red.png";
        }else{
            document.getElementById("like").src = "img/black.png";
        }
    }
function heart(){
let a = document.getElementById("like2").src;
    console.log(a);
    if(a=="file:///D:/front%20end/front%20end/Final%20Project/img/black.png"){
        document.getElementById("like2").src = "img/red.png";
    }else{
        document.getElementById("like2").src = "img/black.png";
    }
}
function heartt(){
    let a = document.getElementById("like3").src;
        console.log(a);
        if(a=="file:///D:/front%20end/front%20end/Final%20Project/img/black.png"){
            document.getElementById("like3").src = "img/red.png";
        }else{
            document.getElementById("like3").src = "img/black.png";
        }
}
function paroli(){
    let a = document.getElementById("password").value;
    let b = document.getElementById("check").value;
    console.log(a);
    console.log(b);
    if(a == "" || b == "" || a != b){
        console.log("ar emtxveva")
        document.getElementById("answer").innerHTML = "პაროლები არ ემთხვევა ერთმანეთს";
        document.getElementById("answer").style.color = "#ff0000";
        document.getElementById("password").style.border = "1px solid #ff0000";
        document.getElementById("check").style.border = "1px solid #ff0000";
    }else{
        document.form.action = "success.html";
    }
    // verafrit gavakete, rom nebismier shemtxvevasi submitis mere ar gaxsnas success.html 
}