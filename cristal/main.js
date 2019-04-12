$(document).ready(function (e) {
    var random = Math.floor(Math.random() * 101 + 19);
    $("#target-score").text(random);

    // var num1 = Math.floor(Math.random() * 11 + 1)
    // var num2 = Math.floor(Math.random() * 11 + 1)
    // var num3 = Math.floor(Math.random() * 11 + 1)
    // var num4 = Math.floor(Math.random() * 11 + 1)
    var userTotal = 0;
    var win = 0;
    var lose = 0;
    $("#win-count").text(win);
    $("#lose-count").text(lose);
    function reset() {
        random = Math.floor(Math.random() * 101 + 19);
        console.log(random)
        $("#target-score").text(random);
        // num1 = Math.floor(Math.random() * 11 + 1);
        // num2 = Math.floor(Math.random() * 11 + 1);
        // num3 = Math.floor(Math.random() * 11 + 1);
        // num4 = Math.floor(Math.random() * 11 + 1);
        userTotal = 0;
        $("#your-score").text(userTotal);
        var image_list = $("img");
        for (var i = 0; i < image_list.length; i++) {
            var num = Math.floor(Math.random() * 11 + 1);
            $(image_list[i]).attr("value", num);
        }
    }

    function winer() {
        alert("You won!");
        win++;
        $("#win-count").text(win);
        reset();
    }

    function loses() {
        alert("You lose!");
        lose++;
        $("#lose-count").text(lose);
        reset()
    }

    reset();

    $(".image").click(function(e) {
        var num = Number($(this).attr("value"));
        userTotal = userTotal + num;
        $("#your-score").text(userTotal);

        if (userTotal == random) {
            winer();
        }
        else if (userTotal > random) {
            loses();
        }
    });

    // $("#blue").on("click", function () {
    //     userTotal = userTotal + num1;
    //     $("#your-score").text(userTotal);

    //     if (userTotal == random) {
    //         winer();
    //     }
    //     else if (userTotal > random) {
    //         loses();
    //     }
    // })
    // $("#green").on("click", function () {
    //     userTotal = userTotal+ num2;
    //     $("#your-score").text(userTotal);
    //     if (userTotal == random) {
    //         winer();
    //     }
    //     else if (userTotal > random) {
    //         loses();
    //     }
    // })
    // $("#red").on("click", function () {
    //     userTotal = userTotal+ num3;
    //     $("#your-score").text(userTotal);
    //     if (userTotal == random) {
    //         winer();
    //     }
    //     else if (userTotal > random) {
    //         loses();
    //     }
    // })
    // $("#yellow").on("click", function () {
    //     userTotal= userTotal + num4;
    //     $("#your-score").text(userTotal);
    //     if (userTotal == random) {
    //         winer();
    //     }
    //     else if (userTotal > random) {
    //         loses();
    //     }
    // })

});