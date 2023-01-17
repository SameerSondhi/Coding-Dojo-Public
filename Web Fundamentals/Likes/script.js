var click = 0;
var click2 = 0;
var click3 = 0;

function change(){
    click++;
    var likeCount = document.querySelector("#like-counter")
    likeCount.innerText = click + " Like(s)";
}

function change2(){
    click2++;
    var likeCount2 = document.querySelector("#like-counter2")
    likeCount2.innerText = click2 + " Like(s)";
}

function change3(){
    click3++;
    var likeCount3 = document.querySelector("#like-counter3")
    likeCount3.innerText = click3 + " Like(s)";
}