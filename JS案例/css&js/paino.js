
var mainDom = document.querySelector('.stage .main');
var overDom = document.querySelector('.stage .over');
var scoreDom = document.querySelector('.stage .score');

var startDom = document.querySelector('.stage .start');
var startBtnDom = document.querySelector('.stage .start .btn');

var writDom = document.querySelector('.stage .writ');
var cartBtnDom = document.querySelector('.stage .writ .car');

var dameDom = document.querySelector('.stage .over .dame ');
var btnDom = document.querySelector('.stage .over .dame span');

var music = [
    [
        25, 21, 22, 23, 24, 25, 21, 21, 26, 24, 25, 26, 27, 31, 21, 21, 24, 25, 24, 23, 22, 23, 24, 23, 22, 21, 17,
        21, 22, 23, 21, 22, 25, 21, 22, 23, 24, 25, 21, 21, 26, 24, 25, 26, 27, 31, 21, 21, 24, 25, 24, 23, 22, 23,
        24, 23, 22, 21, 22, 23, 22, 21, 17, 21,
    ],
    [
        23, 22, 21, 17, 16, 15, 16, 17, 21, 17, 16, 15, 14, 13, 14, 12, 21, 17, 21, 11, 7, 15, 12, 13, 11, 21, 17, 16,
        17, 23, 25, 26, 24, 23, 22, 24, 24, 23, 21, 17, 16, 15, 14, 13, 12, 14, 13, 12, 11, 12, 13, 14, 15, 12, 15,
        14, 13, 16, 15, 14, 15, 14, 13, 12, 11, 6, 16, 17, 21, 17, 16, 15, 14, 13, 12, 16, 15, 16, 15, 14, 13, 23, 22,
        21, 22, 21, 23, 22, 24, 25, 23, 24, 25, 23, 24, 25, 15, 16, 17, 21, 22, 23, 24, 23, 21, 22, 23, 13, 14, 15,
        16, 15, 14, 15, 13, 14, 15, 14, 16, 15, 14, 13, 12, 13, 12, 11, 12, 13, 14, 15, 16, 14, 16, 15, 16, 17, 21,
        15, 16, 17, 21, 22, 23, 24, 25, 23, 21, 22, 23, 22, 21, 22, 17, 21, 22, 23, 22, 21, 17, 21, 16, 17, 21, 11,
        12, 13, 14, 13, 12, 13, 21, 17, 21, 16, 21, 17, 16, 15, 14, 15, 14, 13, 14, 15, 16, 17, 11, 16, 21, 17, 21,
        17, 16, 17, 21, 22, 21, 17, 21, 16, 17, 23, 13, 14, 13, 12, 22, 23, 22, 21, 13, 11, 16, 15, 5, 4, 5, 6, 16,
        17, 16, 17, 5, 4, 5, 6, 16, 15, 16, 17, 17, 16, 17, 11, 21, 22, 21, 17, 7, 11, 7, 6, 16, 15, 16, 17, 7, 13,
        12, 11, 21, 22, 24, 23, 13, 15, 23, 21, 24, 23, 24, 22, 15, 14, 15, 13, 21, 17, 21, 13, 15, 15, 16, 17, 15,
        13, 21, 22, 23, 21, 23, 23, 22, 21, 17, 16, 16, 15, 16, 17, 21, 23, 22, 21, 23,
    ],
];
var puzi = music[Math.floor(Math.random() * music.length)];

var dots = [];
var score = 0;
var speed = 0.02;
var flag = false;

startBtnDom.onclick = function () {
    startGame();
    startDom.style.display = 'none';
};

cartBtnDom.onclick = function () {
    writDom.style.display = 'none';
};
var start = null;
function startGame() {

    function Dot(y) {
        this.x = Math.floor(Math.random() * 4);
        this.y = y;
        this.node = document.createElement('i');
        this.upadateView();
        mainDom.appendChild(this.node);
        mainDom.onclick = function () {
            clearInterval(id);
            overDom.style.display = 'block';

        };
        var _this = this;
        this.node.onclick = function () {

            var firstUnPlayed = dots.filter(function (dot) {
                return !dot.played;
            })[0];
            if (this.isSameNode(firstUnPlayed.node)) {
                flag = true;
                start();
                _this.node.classList.add('played');
                _this.played = true;
                var node = document.createElement('audio');
                node.src = './music/sound_' + _this.music + '.mp3';
                node.play();
                score++;
                if (score % 10 === 0) {
                    speed += 0.001;
                }
                scoreDom.innerHTML = '';
                String(score).split("").forEach(function (n) {
                    var node = document.createElement('i');
                    node.classList.add('num');
                    node.classList.add('num' + n);
                    scoreDom.appendChild(node);
                });
            }
            event.stopPropagation();
        };
    }
    Dot.prototype.move = function () {
        this.y += speed;
    };
    Dot.prototype.upadateView = function () {
        this.node.style.left = this.x * 90 + 'px';
        this.node.style.top = this.y * 90 + 'px';
    };
    function init() {
        for (let i = 6; i > 0; i--) {
            var d = new Dot(i - 1);
            var tmp = puzi.shift();
            puzi.push(tmp);
            d.music = tmp;
            dots.push(d);
        }
    }
    init();
    var id;
    start = function () {
        clearInterval(id);//清除之前的定时器
        id = setInterval(function () {//初始化现在的定时器  
            if (flag) {
                dots.forEach(function (el) {
                    el.move();
                    el.upadateView();
                });

                if (dots[dots.length - 1].y >= 0) {
                    var d = new Dot(-1);
                    var tmp = puzi.shift();
                    puzi.push(tmp);
                    d.music = tmp;
                    dots.push(d);
                }
                var firstUnPlayed = dots.filter(function (dot) {
                    return !dot.played;
                })[0];

                if (firstUnPlayed && (firstUnPlayed.y + 1) * 90 > 667) {
                    clearInterval(id);
                    overDom.style.display = 'block';

                }

                var firstPlayed = dots.filter(function (dot) {
                    return dot.played;
                })[0];
                if (firstPlayed && firstPlayed.y * 90 > 667) {
                    mainDom.removeChild(firstPlayed.node);
                    dots.splice(dots.indexOf(firstPlayed), 1);
                }
            }
        }, 30);
    };
}
btnDom.onclick = function () {
    location.reload();
    document.querySelector(".start").style.display = "none";
    document.querySelector(".writ").style.display = "none";

};
