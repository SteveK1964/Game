var game = (function(){})();

//Initialize the game and set the canvas to 600x800
var game = (function(){
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
  
    return {
      init: function(){
        canvas.height = 600;
        canvas.width = 800;
      }
    }
  })();
  
  game.init();

  //Create a player object and draw that player to the screen.
  var game = (function(){
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    
    //1. Create the player object
    // Define all argument that will be used by fillRect()
    var player = {
      x:0,
      y:475,
      h: 25,
      w: 25,
      fill: '#fff'
    }
  
    return {
  
      //2. Draw the player to the canvas
      player: function(){
        ctx.fillStyle=player.fill;
        ctx.fillRect(player.x, player.y, player.w, player.h);
      },
  
      init: function(){
        canvas.height = 600;
        canvas.width = 800;
  
        this.player();
      }
    }
  })();
  
  game.init();

//Animate the game using animation frames.
var game = (function(){
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
  
    var player = {
      x:0,
      y:475,
      h: 25,
      w: 25,
      fill: '#fff'
    }
  
    return {
  
      player: function(){
        ctx.fillStyle=player.fill;
  
        //1. Define how many pixels the player
        // should move each frame (i.e. speed)
        ctx.clearRect(
          player.x-1,
          player.y-1,
          player.w+2,
          player.h+2
        );
  
        ctx.fillRect(
          player.x++,
          player.y,
          player.w,
          player.h
        );
  
      },

    //2. Create an animation frame
    //3. Redraw the player every time a frame is executed
    animate: function(){
        this.player();
        window.requestAnimationFrame(this.animate.bind(this));
      },
  
      init: function(){
        canvas.height = 600;
        canvas.width = 800;
  
        this.animate();
      }
    }
  })();
  
  game.init();

  //Touching the edge of the canvas changes the player's direction

  //1. Add a default direction for player movement.
  //2. Add x pixels to move the player to the right
  //3. Change the player direction when the player touches the edge of the canvas.
  //4. Subtract x pixels to move the player to the left.
  //5. Change the player direction when the player touches the edge of the canvas.
  
  var game = (function(){
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
  
    var player = {
      x:0,
      y:475,
      h: 25,
      w: 25,
      fill: '#fff',
      //1. Add a default direction for player movement.
      dir: 'right'
    }
  
    return {
  
      player: function(){
        ctx.fillStyle=player.fill;
  
        ctx.clearRect(
          player.x-1,
          player.y-1,
          player.w+2,
          player.h+2
        );
  
        //2. Add x pixels to move the player to the right
        if(player.dir === 'right'){
          ctx.fillRect(
            player.x++,
            player.y,
            player.w,
            player.h
          );
  
          //3. Change the player direction when the player touches the edge 
          //of the canvas.
          if((player.x + player.w) >= canvas.width){
            player.dir = 'left';
          }
  
        }else{
  
          //4. Subtract x pixels to move the player to the left
          ctx.fillRect(
            player.x--,
            player.y,
            player.w,
            player.h
          );
  
          //5. Change the player direction when the player touches the edge 
          //of the canvas.
          if(player.x <= 0){
            player.dir = 'right';
          }
        }
      },
  
      animate: function(){
        this.player();
        window.requestAnimationFrame(this.animate.bind(this));
      },
  
      init: function(){
        canvas.height = 600;
        canvas.width = 800;
  
        this.animate();
      }
    }
  })();
  
  game.init();

//PressingPressing any key shall change the direction in which the player is moving

//1. Create a setter for changing the current direction of the user.
//2. Add a listener to allow the user to change the direction of the player sprite

var game = (function(){
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
  
    var player = {
      x:0,
      y:475,
      h: 25,
      w: 25,
      fill: '#fff',
      dir: 'right'
    }
  
    return {
  
      player: function(){
        ctx.fillStyle=player.fill;
  
        ctx.clearRect(
          player.x-1,
          player.y-1,
          player.w+2,
          player.h+2
        );
  
        if(player.dir === 'right'){
          ctx.fillRect(
            player.x++,
            player.y,
            player.w,
            player.h
          );
  
          if((player.x + player.w) >= canvas.width){
            player.dir = 'left';
          }
  
        }else{
          ctx.fillRect(
            player.x--,
            player.y,
            player.w,
            player.h
          );
  
          if(player.x <= 0){
            player.dir = 'right';
          }
        }
      },
  
      //1. Create a setter for changing the current direction of the user.
      changeDirection: function(){
        if(player.dir === 'left'){
          player.dir = 'right';
        }else if(player.dir === 'right'){
          player.dir = 'left';
        }
      }
  
      animate: function(){
        this.player();
        window.requestAnimationFrame(this.animate.bind(this));
      },
  
      init: function(){
        canvas.height = 600;
        canvas.width = 800;
  
        this.animate();
      }
    }
  })();
  
  game.init();
  
  //2. Add a listener to allow the  user to change the direction
  //of the player sprite
  window.addEventListener('keyup', function(){
    game.changeDirection();
  });

  //Increase the speed of the player

  //1. Add a speed property to the player this is the number of pixels the player will move each frame.
  //2. Change x-1 to player.x-player.speed.
  //3. Change player.x++ to player.x = (player.x + player.speed).
  //4. Change player.x+1 to player.x+player.speed.
  //5. Change player.x-- to player.x = (player.x - player.speed),

  var game = (function(){
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
  
    var player = {
      x:0,
      y:475,
      h: 25,
      w: 25,
      fill: '#fff',
      die: 'right',
      //1. Add a speed property to the player this is the number of pixels 
      //the player will move each frame
      speed: 5
    }
  
    return {
  
      player: function(){
        ctx.fillStyle=player.fill;
  
        if(player.dir === 'right'){
  
          //2. Change x-1 to player.x-player.speed
          ctx.clearRect(
            player.x-player.speed,
            player.y-1,
            player.w+2,
            player.h+2
          );
  
          //3. Change player.x++ to player.x = (player.x + player.speed)
          ctx.fillRect(
            player.x = (player.x + player.speed),
            player.y,
            player.w,
            player.h
          );
  
          if((player.x + player.w) >= canvas.width){
            player.dir = 'left';
          }
  
        }else{
  
          //4. Change player.x+1 to player.x+player.speed
          ctx.clearRect(
            player.x+player.speed,
            player.y-1,
            player.w+2,
            player.h+2
          );
  
          //5. Change player.x-- to player.x = (player.x - player.speed),
          ctx.fillRect(
            player.x = (player.x - player.speed),
            player.y,
            player.w,
            player.h
          );
  
          if(player.x <= 0){
            player.dir = 'right';
          }
        }
      },
  
      changeDirection: function(){
        if(player.dir === 'left'){
          player.dir = 'right';
        }else if(player.dir === 'right'){
          player.dir = 'left';
        }
      },
  
      animate: function(){
        this.player();
        window.requestAnimationFrame(this.animate.bind(this));
      },
  
      init: function(){
        canvas.height = 600;
        canvas.width = 800;
  
        this.animate();
      }
    }
  })();
  
  game.init();
  
  window.addEventListener('keyup', function(){
    game.changeDirection();
  });

  //Launch an enemy spawn down the Y axis

  //1. Define an enemy spawn.
  //2. Create a method for launching spawns.
  //3. This iteration will launch a single spawn.
  //4. Animate the spawns.  

  var game = (function(){
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
  
    var player = {
      x:0,
      y:475,
      h: 25,
      w: 25,
      fill: '#fff',
      dir: 'right',
      speed: 5
    }
  
    //1. Define an enemy spawn
    var spawn = {
      x: 50,
      y: 0,
      h: 10,
      w: 10,
      fill: '#ff0',
      speed: 5
    }
  
    //2. Create a method for launching spawns
    // this iteration will launch a single spawn
    function launchSpawns(){
      ctx.fillStyle=spawn.fill;
  
      ctx.clearRect(
        spawn.x-1,
        spawn.y-spawn.speed,
        spawn.w+2,
        spawn.h+2
      );
  
      ctx.fillRect(
        spawn.x,
        spawn.y = (spawn.y + spawn.speed),
        spawn.w,
        spawn.h
      );
    }
  
    return {
  
      player: function(){
        ctx.fillStyle=player.fill;
  
        if(player.dir === 'right'){
  
          ctx.clearRect(
            player.x-player.speed,
            player.y-1,
            player.w+2,
            player.h+2
          );
  
          ctx.fillRect(
            player.x = (player.x + player.speed),
            player.y,
            player.w,
            player.h
          );
  
          if((player.x + player.w) >= canvas.width){
            player.dir = 'left';
          }
  
        }else{
  
          ctx.clearRect(
            player.x+player.speed,
            player.y-1,
            player.w+2,
            player.h+2
          );
  
          ctx.fillRect(
            player.x = (player.x - player.speed),
            player.y,
            player.w,
            player.h
          );
  
          if(player.x <= 0){
            player.dir = 'right';
          }
        }
      },
  
      changeDirection: function(){
        if(player.dir === 'left'){
          player.dir = 'right';
        }else if(player.dir === 'right'){
          player.dir = 'left';
        }
      },
  
      animate: function(){
        this.player();
        //3. Animate the spawns
        launchSpawns();
        window.requestAnimationFrame(this.animate.bind(this));
      },
  
      init: function(){
        canvas.height = 600;
        canvas.width = 800;
  
        this.animate();
      }
    }
  })();
  
  game.init();
  
  window.addEventListener('keyup', function(){
    game.changeDirection();
  });

  //Launch a new spawn every 400ms and move all spawns in a loop

  //1. Initialize an Object of spawns.
  //2. Initialize a variable for launching spawns.
  //3. Create a new enemy spawn every 400 ms.
  //4. Use psuedo-random strings to name the new spawns.
  //5. Add the new spawn to the Object of spawns.
  //6. Move all spawns.
  //7. Loop through the Object of spawns and move each one individually. * This will look a lot like movePlayer()
  //8. Only move the spawn, if the spawn has not moved off of the screen.
  //9. Delete the spawn from the Object of spawns if that spawn has moved off of the screen.
  //10. Add moveSpawns() to the animation frame.

  var game = (function(){
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
  
    var player = {
      x:0,
      y:475,
      h: 25,
      w: 25,
      fill: '#fff',
      dir: 'right',
      speed: 5
    }
  
    var spawn = {
      x: 50,
      y: 0,
      h: 10,
      w: 10,
      fill: '#ff0',
      speed: 5
    }
  
    //1. Initialize an Object of spawns
    var spawns = {}
  
    //2. Initialize a variable for launching spawns.
    var spawner = null;
  
  
    function launchSpawns(){
      //3. Create a new enemy spawn every 400 ms
      spawner = setInterval(()=>{
        //4. Use psuedo-random strings to name the new spawns
        var text = "";
        var possible = "abcdefghijklmnopqrstuvwxyz";
  
        for (var i = 0; i < 10; i++){
          text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
  
        //5. Add the new spawn to the Object of Spawns
        spawns[text] = {
          x:Math.floor(Math.random()*this.canvas.width),
          y:spawn.y,
          h:spawn.h,
          w:spawn.w,
          fill:spawn.fill,
          speed:spawn.speed,
        }
  
      },400);
    }
  
    //6. Move all spawns
    function moveSpawns(){
  
      //7. Loop through the Object of spawns
      //and move each one individually.
      //This will look a lot like movePlayer()
      if(Object.keys(spawns).length>0){
        for(let spawn in spawns){
  
          //8. Only move the spawn, if the spawn has not 
          //moved off of the screen.
          if(spawns[spawn].y<=canvas.height){
  
            ctx.fillStyle = spawns[spawn].fill;
  
            ctx.save();
  
            ctx.clearRect(
              spawns[spawn].x-1,
              spawns[spawn].y-spawns[spawn].speed,
              spawns[spawn].w+2,
              spawns[spawn].h+2
            );
  
            ctx.fillRect(
              spawns[spawn].x,
              spawns[spawn].y = (spawns[spawn].y+spawns[spawn].speed),
              spawns[spawn].w,
              spawns[spawn].h
            );
  
            ctx.restore();
            
  
          }else{
            //9. Delete the spawn from the Object of spawns if 
            // that spawn has moved off of the screen.
            delete spawns[spawn];
          }
        }
      }
  
    }
  
    return {
  
      player: function(){
        ctx.fillStyle=player.fill;
  
        if(player.dir === 'right'){
  
          ctx.clearRect(
            player.x-player.speed,
            player.y-1,
            player.w+2,
            player.h+2
          );
  
          ctx.fillRect(
            player.x = (player.x + player.speed),
            player.y,
            player.w,
            player.h
          );
  
          if((player.x + player.w) >= canvas.width){
            player.dir = 'left';
          }
  
        }else{
  
          ctx.clearRect(
            player.x+player.speed,
            player.y-1,
            player.w+2,
            player.h+2
          );
  
          ctx.fillRect(
            player.x = (player.x - player.speed),
            player.y,
            player.w,
            player.h
          );
  
          if(player.x <= 0){
            player.dir = 'right';
          }
        }
      },
  
      changeDirection: function(){
        if(player.dir === 'left'){
          player.dir = 'right';
        }else if(player.dir === 'right'){
          player.dir = 'left';
        }
      },
  
      animate: function(){
        this.player();
        //10. Add moveSpawns to the animation frame.
        moveSpawns();
        window.requestAnimationFrame(this.animate.bind(this));
      },
  
      init: function(){
        canvas.height = 600;
        canvas.width = 800;
  
        launchSpawns();
        this.animate();
      }
    }
  })();
  
  game.init();
  
  window.addEventListener('keyup', function(){
    game.changeDirection();
  });

  //Add collision detection and end game on collision

  //1.  Add the animation frames to a variable the we can kill later
  //2.  Track the state of game over
  //3.  When each spawn move detect if that spawn shares common pixels with the player,
  //    then there has been a collision.
  
  //If there is a collision.

  //1.  Set gameOver to true.
  //2.  Kill the animation frames.
  //3.  Kill the spawner.

  //Only animate if the game is not over.

  

