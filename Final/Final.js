//**Warning for flashing graphics**

let angle = 0;

function setup() {
  createCanvas(1100, 997);
  angleMode(DEGREES);
}

function draw() {
  background(255, 255, 255);
  
  //hair
  strokeWeight(2);
  line(765, 142, 753, 154);
  line(753, 154, 736, 154);
  line(736, 154, 727, 164);
  line(727, 164, 719, 186);
  line(719, 186, 722, 153);
  line(722, 153, 734, 144);
  line(734, 144, 704, 156);
  line(704, 156, 693, 172);
  line(693, 172, 696, 198);
  line(696, 198, 683, 193);
  line(683, 193, 685, 154);
  
  line(765, 142, 756, 136);
  line(756, 136, 761, 121);
  line(761, 121, 729, 111);
  line(729, 111, 725, 100);
  line(725, 100, 680, 84);
  line(680, 84, 626, 120);
  line(626, 120, 606, 122);
  line(606, 122, 615, 132);
  line(615, 132, 575, 140);
  line(575, 140, 598, 150);
  line(598, 150, 625, 136);
  line(625, 136, 609, 158);
  line(609, 158, 623, 153);
  line(623, 153, 617, 165);
  line(617, 165, 630, 170);
  line(630, 170, 645, 148);
  line(645, 148, 636, 175);
  line(636, 175, 646, 178);
  line(646, 178, 675, 145);
  line(675, 145, 651, 181);
  line(651, 181, 662, 174);
  
  line(702, 91, 702, 83);
  line(702, 83, 715, 78);
  line(715, 78, 702, 91);
  line(702, 91, 719, 84);
  line(719, 84, 750, 106);
  line(750, 106, 788, 125);
  line(788, 125, 791, 186);
  line(791, 186, 799, 212);
  line(799, 212, 783, 209);
  line(783, 209, 779, 190);
  line(779, 190, 774, 205);
  line(774, 205, 765, 204);
  line(765, 142, 778, 143);
  line(778, 143, 769, 160);
  
  strokeWeight(2);
  point(636, 185);
  point(649, 198);
  point(666, 212);
  point(649, 185);
  point(639, 195);
  point(643, 188);
  point(653, 191);
  point(642, 202);
  strokeWeight(3);
  point(726, 189);
  
  //face
  strokeWeight(2);
  line(683, 171, 671, 166);
  line(671, 166, 656, 183);
  line(656, 183, 660, 202);
  line(667, 195, 645, 214);
  line(645, 214, 654, 222);
  line(654, 222, 667, 195);
  line(662, 204, 677, 202);
  line(677, 202, 678, 237);
  line(678, 237, 729, 273);
  line(729, 273, 773, 182);
  line(773, 182, 765, 142);
  line(765, 198, 767, 233);
  line(767, 233, 750, 229);
  line(673, 223, 657, 214);
  line(650, 210, 639, 206);
  line(639, 206, 629, 186);
  line(629, 186, 640, 163);
  line(673, 222, 659, 252);
  line(678, 230, 676, 261);
  
  strokeWeight(4);
  line(665, 241, 676, 247);
  
  //eyebrow
  strokeWeight(2);
  line(732, 170, 750, 167);
  line(750, 167, 768, 177);
  line(768, 177, 766, 183);
  line(766, 183, 748, 171);
  line(748, 171, 732, 170);
  
  //eye
  line(764, 187, 759, 187);
  line(759, 187, 745, 179);
  line(745, 179, 734, 180);
  line(731, 183, 751, 195);
  line(751, 195, 754, 198);
  line(751, 195, 757, 186);
  line(746, 182, 742, 189);
  line(751, 195, 757, 186);
  
  strokeWeight(4);
  line(750, 192, 753, 186.5);
  
  strokeWeight(2);
  fill(0, 0, 0);
  triangle(734, 180, 727, 181, 731, 183);
  triangle(702,194, 715, 213, 704, 204);
  
  //lips
  triangle(746, 235, 729, 235, 743, 242);
  line(740, 247, 734, 243);
  
  //torso
  strokeWeight(2);
  line(644, 246, 704, 277);
  line(644, 246, 638, 289);
  line(638, 289, 597, 311);
  line(597, 311, 595, 322);
  line(597, 311, 614, 314);
  line(614, 314, 630, 327);
  line(630, 327, 629, 348);
  line(629, 348, 620, 370);
  line(620, 370, 602, 377);
  line(602, 377, 611, 418);
  line(602, 377, 600, 372);
  line(611, 418, 598, 464);
  line(591, 484, 584, 498);
  line(584, 498, 676, 524);
  line(676, 524, 715, 490);
  line(715, 490, 695, 447);
  line(695, 447, 684, 401);
  line(684, 401, 697, 371);
  line(697, 371, 681, 342);
  line(704, 277, 679, 295);
  line(679, 295, 681, 342);
  line(638, 289, 679, 295);
  
  line(595, 322, 614, 314);
  line(595, 322, 490, 448);
  line(490, 448, 502, 473);
  line(502, 473, 654, 490);
  line(654, 490, 667, 502);
  line(676, 471, 656, 478);
  line(656, 478, 527, 447);
  line(527, 447, 614, 358);
  line(589, 381, 562, 361);
  
  line(662, 508, 682, 483);
  line(682, 483, 670, 455);
  
  triangle(636, 474, 624, 496, 631, 497);
  triangle(639, 467, 649, 465, 633, 492);
  strokeWeight(3);
  line(632, 464, 615, 494);
  
  noFill();
  strokeWeight(2);
  triangle(703, 278, 711, 292, 702, 295);
  
  //pants and feet
  strokeWeight(2);
  line(593, 500, 574, 565);
  line(603, 612, 574, 565);
  line(603, 612, 662, 762);
  line(662, 762, 656, 790);
  line(656, 790, 737, 943);
  line(737, 943, 725, 982);
  line(725, 982, 744, 991);
  line(744, 991, 753, 979);
  line(753, 979, 759, 995);
  line(759, 995, 847, 995);
  line(847, 995, 835, 985);
  line(835, 985, 756, 952);
  line(756, 952, 748, 882);
  line(748, 882, 715, 903);
  line(736, 888, 678, 658);
  line(678, 658, 660, 519);
  line(595, 600, 589, 752);
  line(589, 752, 565, 770);
  line(565, 770, 516, 935);
  line(516, 935, 485, 954);
  line(485, 954, 500, 970);
  line(500, 970, 515, 964);
  line(515, 964, 512, 978);
  line(512, 978, 544, 995);
  line(544, 995, 594, 995);
  line(594, 995, 585, 986);
  line(585, 986, 544, 966);
  line(544, 966, 533, 939);
  line(533, 939, 570, 895);
  line(570, 895, 532, 882);
  line(559, 890, 625, 772);
  line(625, 772, 641, 710);
  line(652, 530, 632, 552);
  
  //stars
  blackRect();
  whiteRect();
  
  //ground
  strokeWeight(1);
  line(0, 650, 300, 650);
  line(300, 650, 303, 630);
  line(303, 630, 309, 650);
  line(309, 650, 318, 622);
  line(318, 622, 324, 650);
  line(324, 650, 374, 650);
  line(374, 650, 380, 609);
  line(380, 609, 380, 650);
  line(380, 650, 591, 650);
  line(677, 650, 740, 650);
  line(740, 650, 744, 636);
  line(744, 636, 748, 650);
  line(748, 650, 751, 620);
  line(751, 620, 755, 650);
  line(755, 650, 765, 650);
  line(765, 650, 770, 600);
  line(770, 600, 775, 650);
  line(775, 650, 785, 650);
  line(785, 650, 791, 631);
  line(791, 631, 798, 650);
  line(798, 650, 1035, 650);
  line(1035, 650, 1040, 630);
  line(1040, 630, 1041, 650);
  line(1041, 650, 1100, 650);
  
  //flowers
  noFill();
  triangle(393, 895, 395, 860, 400, 895);
  fill(0,0,0);
  triangle(385, 860, 395, 840, 405, 860);
  triangle(385, 820, 395, 840, 405, 820);
  triangle(375, 850, 395, 840, 375, 830);
  triangle(415, 850, 395, 840, 415, 830);
  
  line(190, 995, 200, 995);
  line(190, 995, 198, 946);
  line(198, 946, 195, 910);
  line(195, 910, 204, 953);
  line(204, 953, 200, 995);
  line(200, 995, 213, 967);
  line(213, 967, 230, 957);
  line(230, 957, 221, 984);
  line(221, 984, 190, 995);
  
  line(90, 790, 100, 790);
  line(90, 790, 98, 741);
  line(100, 790, 98, 741);
  line(66, 765, 91, 777);
  line(71, 780, 66, 765);
  line(91, 777, 71, 780);
  
  triangle(185, 893, 158, 918, 180, 930);
  triangle(189, 885, 198, 852, 217, 867);
  triangle(184, 887, 185, 846, 161, 867);
  triangle(177, 889, 153, 880, 150, 908);
  triangle(191, 891, 218, 879, 218, 901);
  triangle(189, 894, 216, 912, 192, 928);
  
  triangle(105, 721, 108, 748, 134, 726);
  triangle(98, 721, 75, 736, 103, 750);
  triangle(94, 717, 71, 726, 75, 703);
  triangle(97, 717, 83, 693, 107, 690);
  triangle(106, 715, 117, 693, 128, 716);
  
  triangle(835, 715, 822, 709, 828, 718);
  triangle(835, 715, 845, 705, 842, 717);
  
  noFill();
  rect(185, 890, 12, 8);
  rect(100, 718, 10, 6);
  triangle(833, 733, 838, 733, 835, 715);
}

function blackRect() {
  rectMode(CENTER);
  
  push();
  translate(430, 230);
  rotate(-angle);
  fill(0, 0, 0);
  strokeWeight(0);
  rect(0, 0, 20, 20);
  pop();
  
  push();
  translate(250, 500);
  rotate(-angle);
  fill(0, 0, 0);
  strokeWeight(0);
  rect(0, 0, 20, 20);
  pop();
  
  push();
  translate(1000, 500);
  rotate(-angle);
  fill(0, 0, 0);
  strokeWeight(0);
  rect(0, 0, 20, 20);
  pop();
  
  push();
  translate(822, 290);
  rotate(-angle);
  fill(0, 0, 0);
  strokeWeight(0);
  rect(0, 0, 20, 20);
  pop();
  
  push();
  translate(885, 100);
  rotate(-angle);
  fill(0, 0, 0);
  strokeWeight(0);
  rect(0, 0, 20, 20);
  pop();
  
  push();
  translate(150, 125);
  rotate(-angle);
  fill(0, 0, 0);
  strokeWeight(0);
  rect(0, 0, 20, 20);
  pop();
  
  push();
  translate(300, 55);
  rotate(-angle);
  fill(0, 0, 0);
  strokeWeight(0);
  rect(0, 0, 20, 20);
  pop();
  
  push();
  translate(50, 380);
  rotate(-angle);
  fill(0, 0, 0);
  strokeWeight(0);
  rect(0, 0, 20, 20);
  pop();
  
  push();
  translate(1020, 180);
  rotate(angle);
  fill(0, 0, 0);
  strokeWeight(0);
  rect(0, 0, 15, 15);
  pop();
  
  push();
  translate(550, 15);
  rotate(angle);
  fill(0, 0, 0);
  strokeWeight(0);
  rect(0, 0, 15, 15);
  pop();
  
  push();
  translate(470, 550);
  rotate(angle);
  fill(0, 0, 0);
  strokeWeight(0);
  rect(0, 0, 15, 15);
  pop();
  
  push();
  translate(940, 333);
  rotate(angle);
  fill(0, 0, 0);
  strokeWeight(0);
  rect(0, 0, 15, 15);
  pop();
  
  push();
  translate(280, 290);
  rotate(angle);
  fill(0, 0, 0);
  strokeWeight(0);
  rect(0, 0, 15, 15);
  pop();
  
  push();
  translate(750, 418);
  rotate(angle);
  fill(0, 0, 0);
  strokeWeight(0);
  rect(0, 0, 15, 15);
  pop();
  
  push();
  translate(500, 350);
  rotate(angle);
  fill(0, 0, 0);
  strokeWeight(0);
  rect(0, 0, 15, 15);
  pop();
  
  push();
  translate(83, 583);
  rotate(angle);
  fill(0, 0, 0);
  strokeWeight(0);
  rect(0, 0, 15, 15);
  pop();
  
  angle = angle + 1;
}

function whiteRect() {
  rectMode(CENTER);
  
  push();
  translate(430, 230);
  rotate(angle);
  fill(255, 255, 255);
  strokeWeight(0);
  rect(0, 0, 20, 20);
  pop();
  
  push();
  translate(250, 500);
  rotate(angle);
  fill(255, 255, 255);
  strokeWeight(0);
  rect(0, 0, 20, 20);
  pop();
  
  push();
  translate(1000, 500);
  rotate(angle);
  fill(255, 255, 255);
  strokeWeight(0);
  rect(0, 0, 20, 20);
  pop();
  
  push();
  translate(822, 290);
  rotate(angle);
  fill(255, 255, 255);
  strokeWeight(0);
  rect(0, 0, 20, 20);
  pop();
  
  push();
  translate(885, 100);
  rotate(angle);
  fill(255, 255, 255);
  strokeWeight(0);
  rect(0, 0, 20, 20);
  pop();
  
  push();
  translate(150, 125);
  rotate(angle);
  fill(255, 255, 255);
  strokeWeight(0);
  rect(0, 0, 20, 20);
  pop();
  
  push();
  translate(300, 55);
  rotate(angle);
  fill(255, 255, 255);
  strokeWeight(0);
  rect(0, 0, 20, 20);
  pop();
  
  push();
  translate(50, 380);
  rotate(angle);
  fill(255, 255, 255);
  strokeWeight(0);
  rect(0, 0, 20, 20);
  pop();
  
  push();
  translate(1020, 180);
  rotate(-angle);
  fill(255, 255, 255);
  strokeWeight(0);
  rect(0, 0, 13, 13);
  pop();
  
  push();
  translate(550, 15);
  rotate(-angle);
  fill(255, 255, 255);
  strokeWeight(0);
  rect(0, 0, 13, 13);
  pop();
  
  push();
  translate(470, 550);
  rotate(-angle);
  fill(255, 255, 255);
  strokeWeight(0);
  rect(0, 0, 13, 13);
  pop();
  
  push();
  translate(940, 333);
  rotate(-angle);
  fill(255, 255, 255);
  strokeWeight(0);
  rect(0, 0, 13, 13);
  pop();
  
  push();
  translate(280, 290);
  rotate(-angle);
  fill(255, 255, 255);
  strokeWeight(0);
  rect(0, 0, 13, 13);
  pop();
  
  push();
  translate(750, 418);
  rotate(-angle);
  fill(255, 255, 255);
  strokeWeight(0);
  rect(0, 0, 13, 13);
  pop();
  
  push();
  translate(500, 350);
  rotate(-angle);
  fill(255, 255, 255);
  strokeWeight(0);
  rect(0, 0, 13, 13);
  pop();
  
  push();
  translate(83, 583);
  rotate(-angle);
  fill(255, 255, 255);
  strokeWeight(0);
  rect(0, 0, 13, 13);
  pop();
  
  angle = angle + 1;
}