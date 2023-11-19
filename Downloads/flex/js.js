const canvas = document.getElementById(`canvas`);
const ctx = canvas.getContext(`2d`);


ctx.strokeStyle = `black`;
ctx.lineWidth = 3;
ctx.fillStyle = `yellow`;
ctx.beginPath();
ctx.arc(300, 350, 90, 0, Math.PI / 6, (11 * Math.PI) / 6);
ctx.lineTo(300, 350);
ctx.fill();
ctx.stroke();
ctx.closePath();


ctx.fillStyle = `black`;
ctx.beginPath();
ctx.arc(300, 350, 60, -Math.PI / 2, -Math.PI / 4, false);
ctx.fill();
ctx.closePath();


ctx.fillStyle = `black`;
ctx.beginPath();
ctx.arc(270, 330, 10, 0, 2 * Math.PI);
ctx.fill();
ctx.closePath();