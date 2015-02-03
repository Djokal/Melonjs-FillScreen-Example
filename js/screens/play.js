game.PlayScreen = me.ScreenObject.extend({
    /**
     *  action to perform on state change
     */
    onResetEvent: function() {
        // reset the score
        game.data.score = 0;

        // add our HUD to the game world
        me.game.world.addChild(new BackgroundLayer('bg', 2,-10));
    },

    /**
     *  action to perform when leaving this screen (state change)
     */
    onDestroyEvent: function() {
        // remove the HUD from the game world
        me.game.world.removeChild(this.HUD);
    }
});


var BackgroundLayer = me.ImageLayer.extend({
  init: function(image, z, speed) {
    name = image;
    width = 960;
    height = 640;
    ratio = 1;
    this.speed=speed;

    // call parent constructor
     this._super(me.ImageLayer, "init", [name, width, height, image, z, ratio]);
  },

  update: function() {

      this.pos.x -= this.speed;

    return true;
  }
});