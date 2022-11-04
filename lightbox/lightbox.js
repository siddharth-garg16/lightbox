//pop function code for html
function includePopHTML(){
    let html = '<div id="vis-pop"><span id="close" onclick="closePopUp()"><img src="lightbox/images/cross.png" alt="" id="cross"></span><img src="lightbox/images/leftarrow.png" alt="" id="leftarrow"><img src="lightbox/images/rightarrow.png" alt="" id="rightarrow"><img src="images/one.jpg" alt="" id="main-pop-img"></div>';

    let popdiv = document.createElement("div");
    popdiv.innerHTML = html;

    document.body.insertBefore(popdiv, document.body.firstChild);
}

// function to init plugin
let img;
let current;
function imagePopUpInit(target){
    //select all images with target class
    img = document.getElementsByClassName(target);
    for(var i=0; i<img.length; i++){
        img[i].style.cursor = 'pointer';
        img[i].addEventListener("click", function(){
            document.getElementById("main-pop-img").src = this.src;
            document.getElementById("vis-pop").style.display = 'block';
            checkArrow();
        })
    }
    includePopHTML();
    document.getElementById('rightarrow').addEventListener('click', function(){
        nextImg();
    })
    document.getElementById('leftarrow').addEventListener('click', function(){
        prevImg();
    })

}

function closePopUp(){
    document.getElementById("main-pop-img").src = "";
    document.getElementById("vis-pop").style.display = 'none';
}

function nextImg(){
    getCurrentImage();
    current++;
    document.getElementById("main-pop-img").src = img[current].src;
}

function prevImg(){
    getCurrentImage();
    current--;
    document.getElementById("main-pop-img").src = img[current].src;
}

function getCurrentImage(){
    for(var i=0; i<img.length;i++){
        if(img[i].src == document.getElementById("main-pop-img").src){
            current=i;
        }
    }
}

function checkArrow(){
    getCurrentImage();
    if(current=='0'){
        document.getElementById('liftarrow').style.display = 'none';
        document.getElementById('rightarrow').style.display = 'block';
    }else if(current==img.length-1){
        document.getElementById('rightarrow').style.display = 'none';
        document.getElementById('leftarrow').style.display = 'block';
    }else{
        document.getElementById('leftarrow').style.display = 'block';
        document.getElementById('rightarrow').style.display = 'block';
    }
}




