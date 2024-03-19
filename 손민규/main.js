var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;

ctx.fillStyle = 'pink';
//왼쪽 위에서 부터 10,10 위치에 100*100 사이즈 네모 그리기
ctx.fillRect(1250,600,100,100);