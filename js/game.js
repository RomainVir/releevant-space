/**
 * Variables used during the game.
 */
let player;
let enemy;
let cursors;
let background;
let background2;
/**
 * It prelaods all the assets required in the game.
 */
function preload() {
  this.load.image("sky", "assets/backgrounds/blue.png");
  this.load.image("player", "assets/characters/player.png");
  this.load.image("enemy", "assets/characters/alien1.png");
}

/**
 * It creates the scene and place the game objects.
 */
function create() {
  // scene background
  background = this.add.image(SCREEN_WIDTH / 2, SCREEN_HEIGHT / 2, "sky");
  background2 = this.add.image(SCREEN_WIDTH / 2, SCREEN_HEIGHT / 2 - 1024, "sky");
  // playet setup
  player = this.add.image(SCREEN_WIDTH / 2, SCREEN_HEIGHT, "player");
  player.setX((SCREEN_WIDTH - player.width * PLAYER_SCALE) / 2);
  player.setY(SCREEN_HEIGHT - (player.height * PLAYER_SCALE) / 2);
  player.setScale(PLAYER_SCALE);

  // enemy setup
  enemy = this.add.image(SCREEN_WIDTH / 2, SCREEN_HEIGHT, "enemy");
  enemy.setX((SCREEN_WIDTH - enemy.width * ENEMY_SCALE) / 2);
  enemy.setY((enemy.height * ENEMY_SCALE) / 2);
  enemy.setScale(ENEMY_SCALE);

  //cursors map into game engine
  cursors = this.input.keyboard.createCursorKeys();
}

/**
 * Updates each game object of the scene.
 */
function update() {
  moverFondo();
  moverPlayer();
}

  function moverPlayer () {

  // ICI ON FAIT GAUCHE DROITE avec les touches
  if (cursors.left.isDown) {
    let blockleft = player.x - PLAYER_VELOCITY;

   if(blockleft < (player.width / 2) * PLAYER_SCALE) {
    blockleft = player.width / 2 * PLAYER_SCALE;
   }
   player.setX(blockleft);
  } 

  if (cursors.right.isDown) {
    let blockright = player.x + PLAYER_VELOCITY;
    if(blockright > 800 - (player.width / 2) * PLAYER_SCALE) {
      blockright = 800 - (player.width / 2) * PLAYER_SCALE;
    }
    player.setX(blockright)
  }
// ICI ON FAIT EN HAUT EN BAS
  if (cursors.up.isDown) {
    let blockup = player.y - PLAYER_VELOCITY;

   if(blockup < (player.height / 2) * PLAYER_SCALE) {
    blockup = player.height / 2 * PLAYER_SCALE;
   }
   player.setY(blockup);
  } 

  if (cursors.down.isDown) {
    let down = player.y + PLAYER_VELOCITY;
    if(down > SCREEN_HEIGHT - (player.height / 2) * PLAYER_SCALE) {
      down = SCREEN_HEIGHT - (player.height / 2) * PLAYER_SCALE;
    }
    player.setY(down)
  }
  }

//BOUGER LE FOND
function moverFondo () {
  background.setY(background.y + BACKGROUND_VELOCITY)
  background2.setY(background2.y + BACKGROUND_VELOCITY)

  if(background.y > background.height + SCREEN_HEIGHT / 2) {
    background.setY(background2.y - background.height);

    let temporal = background;
    background = background2;
    background2 = temporal
  }
 }
