function draw() {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    //sky
    const sky = ctx.createLinearGradient(0, 0, 0, canvas.height * 0.6);
    sky.addColorStop(0, "#8ecae6");   // blue sky
    sky.addColorStop(1, "#e0f6ff");   // near horizon

    ctx.fillStyle = sky;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    //ground
    ctx.fillStyle = "#7cbf6a"; // grass
    ctx.fillRect(0, canvas.height * 0.6, canvas.width, canvas.height);

    //clouds
    ctx.fillStyle = "rgba(255,255,255,0.8)";
    ctx.beginPath();
    ctx.arc(150, 130, 35, 0, Math.PI * 2);
    ctx.arc(190, 120, 45, 0, Math.PI * 2);
    ctx.arc(235, 135, 30, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();

    //back hair
    ctx.beginPath();
    ctx.lineTo(480,503);
    ctx.lineTo(485,525);
    ctx.lineTo(508,483);
    ctx.lineTo(514,495);
    ctx.lineTo(532,474);
    ctx.lineTo(557,417);
    ctx.lineTo(575,398);
    ctx.lineTo(613,334);
    ctx.lineTo(615,252);
    ctx.lineTo(591,188);
    ctx.lineTo(583,225);
    ctx.lineTo(477,441);
    ctx.fillStyle = "#000000";
    ctx.fill();
    ctx.closePath();

    //neck
    ctx.beginPath();
    ctx.moveTo(493, 448);
    ctx.lineTo(475, 545);
    ctx.lineTo(525, 577);
    ctx.lineTo(469, 690);
    ctx.lineTo(291, 681);
    ctx.lineTo(204, 575);
    ctx.lineTo(351, 558);
    ctx.lineTo(363, 506);
    ctx.fillStyle = "#f2d7b8";
    ctx.fill();
    ctx.closePath();

    //neck shadow
    ctx.beginPath();
    ctx.moveTo(495, 437);
    
    ctx.lineTo(479, 516);
    ctx.lineTo(400, 544);
    ctx.lineTo(355, 544);
    
    ctx.lineTo(367, 497);
    ctx.fillStyle = "#b58969";
    ctx.fill();
    ctx.closePath();

    //drawing head
    ctx.beginPath();
    ctx.ellipse(385, 285, 170, 215, 0, 0, Math.PI * 2);
    ctx.fillStyle = "#f2d7b8";
    ctx.fill();
    ctx.closePath
    //jawline
    ctx.beginPath();
    ctx.moveTo(272, 444);
    ctx.arcTo(332, 510, 393, 532, 20);
    ctx.arcTo(395, 512, 510, 445, 20);
    ctx.arcTo(466, 475, 556, 383, 20);
    ctx.fillStyle = "#f2d7b8";
    ctx.fill();
    ctx.closePath();

    //ear
    ctx.beginPath();
    ctx.ellipse(220, 300, 30, 50, 0, 0, Math.PI * 2);
    ctx.ellipse(550, 300, 30, 50, 0, 0, Math.PI * 2);
    ctx.fillStyle = "#f2d7b8";
    ctx.fill();
    ctx.closePath();
    //shadow ear
    ctx.beginPath();
    ctx.ellipse(550, 300, 20, 40, 0, 0, Math.PI * 2);
    ctx.fillStyle = "#b58969";
    ctx.fill();
    ctx.closePath();

    //drawing nose
    ctx.beginPath();
    ctx.moveTo(335, 375);
    ctx.lineTo(349, 390);
    ctx.lineTo(339, 375);
    ctx.fillStyle = "#000000";
    ctx.fill();
    ctx.closePath();
    
    //drawing shadow of nose
    ctx.beginPath();
    ctx.moveTo(365-10,390);
    ctx.lineTo(354-10,374);
    ctx.lineTo(365-10,334);
    ctx.lineTo(369-10,369);
    ctx.fillStyle = "#b58969";
    ctx.fill();
    ctx.closePath();

    //left eye
    ctx.beginPath();
    ctx.arc(290, 315+20, 40, Math.PI, 1.8*Math.PI);
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.closePath();
    
    //right eye
    ctx.beginPath();
    ctx.arc(455-5, 315+17.5, 40, 3.5, 0.1);
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.closePath();

    //blush
    ctx.save();
    ctx.beginPath();
    ctx.arc(285, 360, 18, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(255, 120, 140, 50%)";
    ctx.shadowColor = "rgba(255, 120, 140, 50%)";
    ctx.shadowBlur = 50;
    ctx.fill();
    ctx.restore();

    ctx.save();
    ctx.beginPath();
    ctx.arc(450, 360, 18, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(255, 120, 140, 50%)";
    ctx.shadowColor = "rgba(255, 120, 140, 50%)";
    ctx.shadowBlur = 50;
    ctx.fill();
    ctx.restore();

    //mouth
    ctx.beginPath();
    ctx.arc(360, 425, 35, 0.5, Math.PI*0.75);
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.closePath();

    //hair
    ctx.beginPath();
    ctx.lineTo(379,40);
    ctx.lineTo(295, 64);
    ctx.lineTo(228, 123);
    ctx.lineTo(190, 188);
    ctx.lineTo(181,222);
    ctx.lineTo(196, 279);
    ctx.lineTo(225, 367);
    ctx.lineTo(225, 280);
    ctx.lineTo(238, 283);
    ctx.lineTo(271, 265);
    ctx.lineTo(322, 267);
    ctx.lineTo(360, 280);
    ctx.lineTo(404, 267);
    ctx.lineTo(440, 266);
    ctx.lineTo(497, 281);
    ctx.lineTo(526, 315);
    ctx.lineTo(516, 377);
    ctx.lineTo(550, 325);
    ctx.lineTo(548, 340);
    ctx.lineTo(582, 281);
    ctx.lineTo(594, 190);
    ctx.lineTo(548, 110);
    ctx.lineTo(486, 65);
    ctx.lineTo(421, 60);
    ctx.fillStyle = "#0a0a0a";
    ctx.fill();
    ctx.closePath();

    //shadow hair
    ctx.beginPath();
    ctx.lineTo(228,122);

    
    ctx.lineTo(228, 123);
    ctx.lineTo(295, 64);
    ctx.lineTo(379,40);
    ctx.lineTo(421, 60);
    ctx.lineTo(486, 65);
    ctx.lineTo(548, 110);
    ctx.lineTo(594, 190);
    ctx.lineTo(582, 281);
    ctx.lineTo(582, 189);
    ctx.lineTo(528, 118);
    ctx.lineTo(466, 82);
    ctx.lineTo(417, 64);
    ctx.lineTo(378, 44);
    ctx.lineTo(295, 65);
    ctx.fillStyle = "#000000";
    ctx.fill();
    ctx.closePath();

    //hair highlight
    ctx.beginPath();
    ctx.lineTo(295, 64);
    ctx.lineTo(228, 123);
    ctx.lineTo(190, 188);
    ctx.lineTo(181,222);
    ctx.lineTo(196, 279);
    ctx.lineTo(225, 367);
    ctx.lineTo(200, 276);
    ctx.lineTo(194, 219);
    ctx.lineTo(228, 142);
    ctx.fillStyle = "#333333";
    ctx.fill();
    ctx.closePath();

    //blonde hair highlights
    ctx.beginPath();
    ctx.lineTo(419, 60);
    ctx.lineTo(334,165);
    ctx.lineTo(360,280);
    ctx.lineTo(343, 166);

    ctx.moveTo(419, 60);
    ctx.lineTo(425,165);
    ctx.lineTo(402,265);
    ctx.lineTo(442, 167);

    ctx.moveTo(419, 60);
    ctx.lineTo(502, 186);
    ctx.lineTo(510, 292);
    ctx.lineTo(546, 192);

    ctx.moveTo(419, 60);
    ctx.lineTo(308, 100);
    ctx.lineTo(259, 179);
    ctx.lineTo(240, 280);
    ctx.lineTo(243, 170);
    ctx.lineTo(298, 79);
    ctx.fillStyle = "#f5ffd9";
    ctx.fill();
    ctx.closePath();

    //arms
    ctx.beginPath();
    ctx.lineTo(180,688);
    ctx.lineTo(85,850);
    ctx.lineTo(164, 850);
    ctx.lineTo(230,711);

    ctx.moveTo(621,781);
    ctx.lineTo(619,850);
    ctx.lineTo(700, 850);
    ctx.lineTo(655, 687);
    ctx.closePath();
    ctx.fillStyle = "#f2d7b8";
    ctx.fill();




    //shirt
    ctx.beginPath();
    ctx.moveTo(203, 575);
    ctx.lineTo(346, 556);
    ctx.arcTo(375, 610, 500, 600, 40);
    ctx.lineTo(492, 557);
    ctx.lineTo(642, 597);
    ctx.lineTo(725, 773);
    ctx.lineTo(583, 818);
    ctx.lineTo(559, 681);
    ctx.lineTo(501, 795);
    ctx.lineTo(509, 850);
    ctx.lineTo(248, 850);
    ctx.lineTo(231, 693);
    ctx.moveTo(203, 575);
    ctx.lineTo(260, 675);
    ctx.lineTo(218, 791);
    ctx.lineTo(109, 738);
    ctx.closePath();
    ctx.fillStyle = "#0c3461";
    ctx.fill();

    //shadow of shirt
    ctx.beginPath();
    ctx.lineTo(559, 681);
    ctx.lineTo(550, 850);
    ctx.lineTo(508, 850);
    ctx.lineTo(500, 792);
    ctx.closePath();
    ctx.fillStyle = "#0a2a4d";
    ctx.fill();
    }

    
draw();