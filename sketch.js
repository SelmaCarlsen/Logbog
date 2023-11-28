 hit1=0
hit2=0
scene=0


function preload(){
  img = createImg('https://img.tukuppt.com/png_preview/00/54/57/hA74ZfmnrX.jpg!/fw/780','');
	img.hide();
    soundFormats('mp3', 'm4a');
  mSound = loadSound('Point Sound.m4a');
  nSound = loadSound('-1 Sound.m4a');
  bSound = loadSound('Background Sound.m4a');
  }

function setup() {
  t1=0; t2=0; n=0;
  createCanvas(800,800);
   bSound.play();
}

function draw() {
  if (scene==0){visStart();}
  if (scene==1){visSpil();}
  if (scene==2){visWinner();}

  
}

function timeIngervalRandomNumber() {
	t2=millis();
	if (t2-t1>1000){
		t1=t2;
		n=round(random(3));
	}
}

function keyPressed(){
   if(keyCode===ENTER){
    scene=1;
  }
  if(keyCode===LEFT_ARROW && n==1){
    hit1+=1;
     mSound.play();
  }
  if (keyCode===RIGHT_ARROW && n== 2){hit1+=1;
    mSound.play();
}
   if(keyCode===LEFT_ARROW && n!=1){
    hit1-=1;
  }
  if (keyCode===RIGHT_ARROW && n!= 2){hit1-=1;
   }                                   
  if(keyCode===UP_ARROW && n==0){
    hit1+=1;
     mSound.play();
  }
  if (keyCode===DOWN_ARROW && n== 3){hit1+=1;
  mSound.play();
}
    if(keyCode===UP_ARROW && n!=0){
    hit1-=1;
  }
  if (keyCode===DOWN_ARROW && n!= 3){hit1-=1;
     nSound.play();
   }
  
   if(keyCode===65 && n==1){
    hit2+=1;
      mSound.play();
  }
  if (keyCode===68 && n== 2){hit2+=1;
   mSound.play();
}
   if(keyCode===65 && n!=1){
    hit2-=1;
      nSound.play();
  }
  if (keyCode===68 && n!= 2){hit2-=1;
     nSound.play();
   }                                   
  if(keyCode===87 && n==0){
    hit2+=1;
     mSound.play();
  }
  if (keyCode===83 && n== 3){hit2+=1;
     mSound.play();
}
    if(keyCode===87 && n!=0){
    hit2-=1;
       nSound.play();
  }
  if (keyCode===83 && n!= 3){hit2-=1;
     nSound.play();
   }
}
function visStart(){
  background(255,0,0)
  textSize(35);
  text('Tryk ENTER for start',200,200)
  
}

function visSpil(){
    image(img,0,0,800,800)
  textSize(35);
  
  let s = 'player 1: '+hit1;
  fill(255,0,0);
  text(s,100,90);
  
  let p = 'player 2: '+hit2;
 fill(255,0,0)
  text(p,450,90);
  
  
 timeIngervalRandomNumber()
  /*RødBold*/
  if (n==0){
    fill(255,0,0)
  ellipse(400,200,100)
}
  /*SortBold*/
  if (n==1){
    fill(20,40,50)
  ellipse(200,400,100)
  }
  /*BlåBold*/
     if (n==2){
       fill(20,40,205)
  ellipse(600,400,100)
}
  /*GrønBold*/
  if (n==3){
    fill(20,205,50)
  ellipse(400,600,100)
}
  if(hit1==10||hit2==10){scene=2}
}

function visWinner(){
  if (hit1==10){
   background(255,0,0)
  textSize(50);
  text('Winner Player 1 ',200,200)
}
  if (hit2==10){
   background(255,0,0)
  textSize(50);
  text('Winner Player 2',200,200)
}}
	




