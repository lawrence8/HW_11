window.onload = function() {
    
    
   


var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload() {

    game.load.image('sky', 'assets/pics/sky.png');
    
    game.load.image('star', 'assets/pics/tooth.png');
	game.load.image('bullet', 'assets/pics/bullet.png');
    game.load.spritesheet('dude', 'assets/pics/pik.png');
	game.load.audio('a', 'assets/a.wav');
	  game.load.spritesheet('e', 'assets/pics/virus.png');
	  game.load.spritesheet('lol','assets/pics/index.png');

}

var player;
var count=0;

var cursors;
var enemy;
var enemy2;

var stars;
var score = 0;
var scoreText;
var scoreText2;
var scoreText3;
var a;
var bullets;
function create() {


    game.physics.startSystem(Phaser.Physics.ARCADE);
	

   
    game.add.sprite(0, 0, 'sky');

   
    

   
    player = game.add.sprite(32, game.world.height - 150, 'dude');
	player.scale.setTo(0.17, 0.17);
	
	enemy=game.add.sprite(0, 0, 'e');
	enemy.scale.setTo(0.2, 0.2);
	
	enemy2=game.add.sprite(200, 200, 'e');
	enemy2.scale.setTo(0.2, 0.2);
	
	enemy3=game.add.sprite(400, 400, 'e');
	enemy3.scale.setTo(0.2, 0.2);
	
	enemy4=game.add.sprite(500, 150, 'e');
	enemy4.scale.setTo(0.2, 0.2);
	
	enemy5=game.add.sprite(700, 0, 'e');
	enemy5.scale.setTo(0.2, 0.2);
	
	

   
    game.physics.arcade.enable(player);
	  game.physics.arcade.enable(enemy);
	  game.physics.arcade.enable(enemy2);
	  game.physics.arcade.enable(enemy3);
	  game.physics.arcade.enable(enemy4);
	  game.physics.arcade.enable(enemy5);

    player.body.bounce.y = 0;
    player.body.gravity.y = 0;
    player.body.collideWorldBounds = true;
	
	enemy.body.bounce.y = 0;
    enemy.body.gravity.y = 0;
    enemy.body.collideWorldBounds = true;
	
	enemy2.body.bounce.y = 0;
    enemy2.body.gravity.y = 0;
    enemy2.body.collideWorldBounds = true;
	
	enemy3.body.bounce.y = 0;
    enemy3.body.gravity.y = 0;
    enemy3.body.collideWorldBounds = true;
	
		
	enemy4.body.bounce.y = 0;
    enemy4.body.gravity.y = 0;
    enemy4.body.collideWorldBounds = true;
	
	enemy5.body.bounce.y = 0;
    enemy5.body.gravity.y = 0;
    enemy5.body.collideWorldBounds = true;
	
	

    
 

    
    stars = game.add.group();

    stars.enableBody = true;

 
    
		
		
   
   var rand = game.rnd.realInRange(100, 500);
        
        var star = stars.create(rand, rand, 'star');
		star.scale.setTo(0.2, 0.2);

        

       
        star.body.gravity.y = 0;

       
        star.body.bounce.y = 0;
    
   
   

    

    
    scoreText = game.add.text(16, 100, 'Destory the teeth       Score: 0', { fontSize: '32px', fill: '#000' });
	scoreText2 = game.add.text(16, 16, 'Move with arrow keys and shoot with the mouse', { fontSize: '32px', fill: '#000' });
	scoreText3 = game.add.text(16, 50, 'You can only shoot while an arrow key is pressed', { fontSize: '32px', fill: '#000' });

    cursors = game.input.keyboard.createCursorKeys();
	
	a = game.add.audio('a');
	a.volume=0.08;
	 a.allowMultiple = false;
    addBullets();
    
}

function update() {
   

  
 
    game.physics.arcade.overlap(bullets, stars, collectStar,collectStar2);
	game.physics.arcade.overlap(player, enemy, collision);
	game.physics.arcade.overlap(player, enemy2, collision2);
	game.physics.arcade.overlap(player, enemy3, collision3);
	game.physics.arcade.overlap(player, enemy4, collision4);
	game.physics.arcade.overlap(player, enemy5, collision5);

    
    player.body.velocity.x = 0;
	if(score>90 ){
		if(count<1)
		scoreText.text = 'GOOD JOB     Score: ' + score ;
		
		}
	
	
	
	
	

    if (cursors.left.isDown)
    {
           fireBullets();
        player.body.velocity.x = -150;
		
		enemy.body.velocity.x=-150;
		
		
		enemy2.body.velocity.x=150;
		
		enemy3.body.velocity.y=100;
		enemy4.body.velocity.y=-100;
		enemy5.body.velocity.y=-200;
		
	
		enemy5.body.velocity.x=-200;


        
    }
     if (cursors.right.isDown)
    {
           fireBullets();
        player.body.velocity.x = 150;
		
		enemy.body.velocity.x=150;
		
		
		enemy2.body.velocity.x=-150;
		
		enemy3.body.velocity.y=-100;
		enemy4.body.velocity.y=100;
		enemy5.body.velocity.y=200;
		
		enemy5.body.velocity.x=200;
		

        
    }
    
    
   
    if (cursors.up.isDown)
    {
           fireBullets();
        player.body.velocity.y = -150;
		
		enemy.body.velocity.y=-150;
		
		
		enemy2.body.velocity.y=-150;
		
		enemy3.body.velocity.x=100;
		enemy4.body.velocity.x=-100;
		enemy5.body.velocity.y=200;


        
    }
    if (cursors.down.isDown)
    {
           fireBullets();
        player.body.velocity.y = 150;
		
		enemy.body.velocity.y=150;
		
		
		enemy2.body.velocity.y=150;
		
		enemy3.body.velocity.x=-100;
		enemy4.body.velocity.x=100;
		enemy5.body.velocity.y=-200;
		

        
    }
	
    
}

function collectStar (bullets, star) {
   a.play();
  
    star.kill();

    score += 10;
    scoreText.text = 'Destory the teeth    Score: ' + score;

}

function addBullets() {
        bullets = game.add.group();
        bullets.enableBody = true;
        bullets.physicsBodyType = Phaser.Physics.ARCADE;

        bullets.createMultiple(5000, 'bullet');
		
        bullets.setAll('outOfBoundsKill', true);
        bullets.setAll('checkWorldBounds', true);
    }
function fireBullets() {
        if(game.input.activePointer.isDown ) {
            
                var bullet1 = bullets.getFirstDead();
                bullet1.reset(player.x, player.y);
				
                game.physics.arcade.moveToPointer(bullet1, 500);
				bullet1.scale.setTo(0.05, 0.05);
             
            
        }
    }
	

function collectStar2 (bullets, star) {
   
    if (score < 1000){
	 stars = game.add.group();

    
    stars.enableBody = true;
   
   var rand = game.rnd.realInRange(100, 500);
       
        var star = stars.create(rand, rand, 'star');
		star.scale.setTo(0.2, 0.2);

        

        
        star.body.gravity.y = 0;

        star.body.bounce.y = 0;
    
   
   }
  
   
   }
function collision(player ,enemy){
     player.kill();
	 scoreText.text = 'Better luck next time' ;
	 count++;
}

function collision2(player ,enemy2){
     player.kill();
	 scoreText.text = 'Better luck next time' ;
	 count++;
	 
}

function collision3(player ,enemy3){
     player.kill();
	 scoreText.text = 'Better luck next time' ;
	 count++;
	 
}

function collision4(player ,enemy4){
     player.kill();
	 scoreText.text = 'Better luck next time' ;
	 count++;
	 
}

function collision5(player ,enemy5){
     player.kill();
	 scoreText.text = 'Better luck next time' ;
	 count++;
	 
}

};
