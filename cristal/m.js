var arr = []
var wins = 0, losses = 0
var total = 0

function random() {
    var a = Math.floor(Math.random() * 120) + 19
    random2()
    return a ;
}
var computer=random();
$(".panel-body").html(a);
function random2(){
    while(arr.length<4){
        var player = Math.floor(Math.random() * 20) + 1
        if (arr.indexOf(player) === -1) {
            arr.push(player)

        }

    }
    $(".blue").attr("data-num", arr[0])
    $(".green").attr("data-num", arr[1])
    $(".red").attr("data-num", arr[2])
    $(".yellow").attr("data-num", arr[3])
}
    
}
