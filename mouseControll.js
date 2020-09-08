/**
 * jhayes
 * 2020-09-08
 * 鼠标拖动页面
 */

/**
 * 监听滚轮：
 *   滚轮往下滚动页面放大
 *   滚轮往上滚动页面放大
 */

/**
 * 监听鼠标：
 *   鼠标左键点击事件
 *   鼠标右键点击事件
 */

function clickLarger(obj) {
  obj.tap = () => {
    var mouseX = app.renderer.plugins.interaction.mouse.global.x;
    var mouseY = app.renderer.plugins.interaction.mouse.global.y;
    let distanceX = mouseX * 5 - CENTER.X;
    let distanceY = mouseY * 5 - CENTER.Y;
    if (stage.width <= STAGE_WH.x && this.drawing&&!this.drawingPoint) {
      const texture = PIXI.Texture.from(
        "https://pixijs.io/examples/examples/assets/bunny.png"
      );
      // Scale mode for pixelation
      texture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;

      // create our little bunny friend..
      var bunny = new PIXI.Sprite(texture);
      (bunny.x = 20), (bunny.y = 20);
      // enable the bunny to be interactive... this will allow it to respond to mouse and touch events
      bunny.interactive = true;

      // this button mode will mean the hand cursor appears when you roll over the bunny with your mouse
      bunny.buttonMode = true;

      // center the bunny's anchor point
      bunny.anchor.set(0.5);

      // make it a bit bigger, so it's easier to grab
      bunny.scale.set(0.1);

      stage.addChild(bunny);
      bunny.x = mouseX;
      bunny.y = mouseY;
      pointList.push(bunny.x,bunny.y)
      console.log(pointList)
    } else if (stage.width == STAGE_WH.x * 5 && this.drawing&&!this.drawingPoint) {
      const texture = PIXI.Texture.from(
        "https://pixijs.io/examples/examples/assets/bunny.png"
      );
      // Scale mode for pixelation
      texture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;

      // create our little bunny friend..
      var bunny = new PIXI.Sprite(texture);
      // enable the bunny to be interactive... this will allow it to respond to mouse and touch events
      bunny.interactive = true;

      // this button mode will mean the hand cursor appears when you roll over the bunny with your mouse
      bunny.buttonMode = true;

      // center the bunny's anchor point
      bunny.anchor.set(0.5);

      // make it a bit bigger, so it's easier to grab
      bunny.scale.set(0.1);
      console.log(mouseX,mouseY,largerDistanceX,largerDistanceY);
      bunny.position.x = (mouseX+largerDistanceX)/5
      bunny.position.y = (mouseY+largerDistanceY)/5
      stage.addChild(bunny);
      console.log(bunny.x,bunny.y)
      pointList.push(bunny.x,bunny.y)
      console.log(pointList)
    }
    if (stage.width <= STAGE_WH.x && !this.drawing&& this.drawingPoint) {
      const texture = PIXI.Texture.from(
        "https://pixijs.io/examples/examples/assets/bunny.png"
      );
      // Scale mode for pixelation
      texture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;

      // create our little bunny friend..
      var bunny = new PIXI.Sprite(texture);
      (bunny.x = 20), (bunny.y = 20);
      // enable the bunny to be interactive... this will allow it to respond to mouse and touch events
      bunny.interactive = true;

      // this button mode will mean the hand cursor appears when you roll over the bunny with your mouse
      bunny.buttonMode = true;

      // center the bunny's anchor point
      bunny.anchor.set(0.5);

      // make it a bit bigger, so it's easier to grab
      bunny.scale.set(0.1);

      stage.addChild(bunny);
      bunny.x = mouseX;
      bunny.y = mouseY;
    } else if (stage.width == STAGE_WH.x * 5 && !this.drawing&& this.drawingPoint) {
      const texture = PIXI.Texture.from(
        "https://pixijs.io/examples/examples/assets/bunny.png"
      );
      // Scale mode for pixelation
      texture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;

      // create our little bunny friend..
      var bunny = new PIXI.Sprite(texture);
      // enable the bunny to be interactive... this will allow it to respond to mouse and touch events
      bunny.interactive = true;

      // this button mode will mean the hand cursor appears when you roll over the bunny with your mouse
      bunny.buttonMode = true;

      // center the bunny's anchor point
      bunny.anchor.set(0.5);

      // make it a bit bigger, so it's easier to grab
      bunny.scale.set(0.1);
      console.log(mouseX,mouseY,largerDistanceX,largerDistanceY);
      bunny.position.x = (mouseX+largerDistanceX)/5
      bunny.position.y = (mouseY+largerDistanceY)/5
      stage.addChild(bunny);
      console.log(bunny.x,bunny.y)

    }
    
    
    if (stage.width <= STAGE_WH.x && !this.drawing&& !this.drawingPoint) {
      TweenMax.to(stage, 1, {
        height: stage.height * 5,
        ease: Power0.easeIn,
        delay: 0,
      }); //弹性移动位置动画
      TweenMax.to(stage, 1, {
        width: stage.width * 5,
        ease: Power0.easeIn,
        delay: 0,
      }); //弹性移动位置动画
      TweenMax.to(stage, 1, {
        x: -distanceX,
        ease: Power0.easeIn,
        delay: 0,
      }); //弹性移动位置动画
      TweenMax.to(stage, 1, {
        y: -distanceY,
        ease: Power0.easeIn,
        delay: 0,
      }); //弹性移动位置动画
       largerDistanceX = distanceX;
       largerDistanceY = distanceY;
    } else if (stage.width == STAGE_WH.x * 5 && !this.drawing&& !this.drawingPoint) {
      TweenMax.to(stage, 1, {
        height: stage.height / 5,
        ease: Power0.easeIn,
        delay: 0,
      }); //弹性移动位置动画
      TweenMax.to(stage, 1, {
        width: stage.width / 5,
        ease: Power0.easeIn,
        delay: 0,
      }); //弹性移动位置动画
      TweenMax.to(stage, 1, {
        x: 0,
        ease: Power0.easeIn,
        delay: 0,
      }); //弹性移动位置动画
      TweenMax.to(stage, 1, {
        y: 0,
        ease: Power0.easeIn,
        delay: 0,
      }); //弹性移动位置动画
    }
  };
}

/**
 * 监听鼠标：
 *   鼠标按住拖动事件
 */

/**
 *画布移动：
 *TweenMax动画
 */

/**
 *画布放大缩小：
 *TweenMax动画
 */
