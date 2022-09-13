var musics = ['叶里、伊格赛听 - 谪仙', '等什么君 - 辞九门回忆', '花粥、马雨阳 - 盗将行', '解语花. -  天空之外', '王贰浪 - 像鱼', 'HITA - 赤伶'];
var img = ['谪仙', '辞九门回忆', '盗将行', '天空之外', '像鱼', '赤伶'];

//获取曲名和歌手
function music(src) {
    var aut = src.slice(9, src.indexOf("-"));
    var mu = src.slice(src.indexOf("-") + 1, src.lastIndexOf("."));
    var arr = [];
    arr.push(aut, mu);
    $("h1").text(arr[1]);
    $(".music-title span").text('——' + arr[0]);
}
music($(".yiyue").attr("src"));

//点击播放暂停显示
$(".check>div").click(function () {
    $(".check div.pause").css('display', 'block');
    $(this).hide().siblings().show();
});

function playMusic() {
    $(".imge").addClass('play');
    $(".imge").removeClass('play-ac');
    $("audio.yiyue")[0].play();
}

//播放
$(".pause").click(function () {
    playMusic();
});

//暂停
$(".play").click(function () {
    $(".imge").addClass('play-ac');
    $("audio.yiyue")[0].pause();

});

function switchMusic(index) {
    //遍历更新
    musics.forEach(function (el, n) {
        if (index == n) {
            $('.yiyue').attr("src", '../image/' + el + '.mp3');
        }
    });
    img.forEach(function (el, n) {
        if (index == n) {
            $('img').attr("src", '../image/' + el + '.jpg');
        }
    });
    music($(".yiyue").attr("src"));
    playMusic();
}

//下一首
var index = 0;
$(".next").click(function () {
    $(".check div.play").css('display', 'block').siblings().css('display', 'none');
    index++;
    if (index === musics.length + 1) {
        index = 1;
    } else if (index > musics.length - 1) { //判断index是否大于歌曲数组长度
        index = 0;
    }
    switchMusic(index);
});

var index = musics.length;
$(".prv").click(function () {
    $(".check div.play").css('display', 'block').siblings().css('display', 'none');
    index--;
    if (index < 0) {
        index = musics.length - 1;
    }
    switchMusic(index);
});

function time(tim) {
    var hour;
    hour = String(Math.floor(tim / 60)).padStart(2, '0') + ":" + String(Math.floor(tim % 60)).padStart(2, '0');
    return hour;
}

$("audio.yiyue")[0].oncanplay = function () {
    //获取总时长
    var t = $("audio.yiyue")[0].duration;
    time(t);
    $(".end").text(time(t));
    //获取当前时间
    var m = $("audio.yiyue")[0].currentTime;
    time(m);
    $(".star").text(time(m));
};

$('input')[0].oninput = function () {
    $("audio.yiyue")[0].currentTime = (this.value * $("audio.yiyue")[0].duration) / 100;
};

$("audio.yiyue")[0].ontimeupdate = function () {
    var totalTime = this.duration;
    var nowTime = this.currentTime;
    var w = nowTime / totalTime * 100 + '%';
    $('.con').css("width", w);
    time(nowTime);
    $(".star").text(time(nowTime));
};

// 播放完自动播放下一首
$("audio.yiyue")[0].onended = function () {
    index++;
    if (index === musics.length + 1) {
        index = 1;
    } else if (index > musics.length - 1) {
        index = 0;
    }
    switchMusic(index);
};

//播放方式样式
$(".play-check>span").click(function () {
    $(this).addClass('ii').siblings().removeClass("ii");
});

//列表循环
$(".current").click(function () {
    $("audio.yiyue")[0].loop = false;
    var index = -1;
    $(".next").click(function () {
        $(".check div.play").css('display', 'block').siblings().css('display', 'none');
        index++;
        if (index === musics.length + 1) {
            index = 1;
        } else if (index > musics.length - 1) {
            index = 0;
        }
        switchMusic(index);
    });
    $(".prv").click(function () {
        $(".check div.play").css('display', 'block').siblings().css('display', 'none');
        index--;
        if (index < 0) {
            index = musics.length - 1;
        }
        switchMusic(index);
    });

    $("audio.yiyue")[0].onended = function () {
        index++;
        if (index === musics.length + 1) {
            index = 1;
        } else if (index > musics.length - 1) {
            index = 0;
        }
        switchMusic(index);
    };
});

//循环播放
$(".single").click(function () {
    $("audio.yiyue")[0].loop = true;
});

//随机播放
// var ran;
$(".random").click(function () {
    $("audio.yiyue")[0].loop = false;
    $(".next").click(function () {
        if (index === Math.floor(Math.random() * (musics.length + 1))) {
            console.log(index);
            index = Math.floor(Math.random() * (musics.length + 1));
        }
        index = Math.floor(Math.random() * (musics.length + 1));
        $(".check div.play").css('display', 'block').siblings().css('display', 'none');
        switchMusic(index);
    });
    $(".prv").click(function () {
        index = Math.floor(Math.random() * (musics.length + 1));
        $(".check div.play").css('display', 'block').siblings().css('display', 'none');
        switchMusic(index);
    });
    $("audio.yiyue")[0].onended = function () {
        index = Math.floor(Math.random() * (musics.length + 1));
        switchMusic(index);
    };
});