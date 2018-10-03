showEffect1.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/Blank_Keyboard.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    // the length of the animation
    var frameCount = 50;

    // set all frames to white, with all frames set to 30FPS
    ChromaAnimation.makeBlankFramesRGB(baseLayer, frameCount, 0.033, 255, 255, 255);

    // fade the start of the animation starting at frame zero to 40
    ChromaAnimation.fadeStartFrames(baseLayer, 40);

    // show the animation in the canvas
    displayCanvas(baseLayer, "canvasShowEffect1");

    // play the animation after Chroma has initialized and after the canvas has been setup
    if (initialized && setupComplete) {
      // play and loop the animation
      ChromaAnimation.playAnimation(baseLayer, true);
    }
  });
};
showEffect2.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/Blank_Keyboard.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    // the length of the animation
    var frameCount = 50;

    // set all frames to white, with all frames set to 30FPS
    ChromaAnimation.makeBlankFramesRGB(baseLayer, frameCount, 0.033, 255, 255, 255);

    // fade the end of the animation starting at frame length - 40 (60)
    ChromaAnimation.fadeEndFrames(baseLayer, 40);

    // show the animation in the canvas
    displayCanvas(baseLayer, "canvasShowEffect2");

    // play the animation after Chroma has initialized and after the canvas has been setup
    if (initialized && setupComplete) {
      // play and loop the animation
      ChromaAnimation.playAnimation(baseLayer, true);
    }
  });
};
showEffect3.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/Blank_Keyboard.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    // the length of the animation
    var frameCount = 50;

    // set all frames to white, with all frames set to 30FPS
    ChromaAnimation.makeBlankFramesRGB(baseLayer, frameCount, 0.033, 255, 255, 255);

    // fade the start of the animation starting at frame zero to 40
    ChromaAnimation.fadeStartFrames(baseLayer, 40);

    // fade the end of the animation starting at frame length - 40 (60)
    ChromaAnimation.fadeEndFrames(baseLayer, 40);

    // show the animation in the canvas
    displayCanvas(baseLayer, "canvasShowEffect3");

    // play the animation after Chroma has initialized and after the canvas has been setup
    if (initialized && setupComplete) {
      // play and loop the animation
      ChromaAnimation.playAnimation(baseLayer, true);
    }
  });
};
showEffect4.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/Blank_Keyboard.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    // the length of the animation
    var frameCount = 50;

    // set all frames to white, with all frames set to 30FPS
    ChromaAnimation.makeBlankFramesRGB(baseLayer, frameCount, 0.033, 255, 255, 255);

    //integer number of times to blink during animation
    var speed = 2;

    // loop over all frames in the layer
    for (var frameId = 0; frameId < frameCount; ++frameId) {
      //Math.cos gives a smooth 1 to 0 to 1 curve, subtracting from one inverts the curve
      var t = 1 - Math.abs(Math.cos(speed * Math.PI * (frameId+1)/frameCount));

      // multiply the frame by the 't' intensity
      ChromaAnimation.multiplyIntensity(baseLayer, frameId, t);
    }

    // show the animation in the canvas
    displayCanvas(baseLayer, "canvasShowEffect4");

    // play the animation after Chroma has initialized and after the canvas has been setup
    if (initialized && setupComplete) {
      // play and loop the animation
      ChromaAnimation.playAnimation(baseLayer, true);
    }
  });
};
showEffect5.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/Clouds1_Keyboard.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    // show the animation in the canvas
    displayCanvas(baseLayer, "canvasShowEffect5");

    // play the animation after Chroma has initialized and after the canvas has been setup
    if (initialized && setupComplete) {
      // play and loop the animation
      ChromaAnimation.playAnimation(baseLayer, true);
    }
  });
};
showEffect6.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/Clouds1_Keyboard.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    // reduce the intensity of the layer
    ChromaAnimation.multiplyIntensityAllFrames(baseLayer, 0.25);

    // show the animation in the canvas
    displayCanvas(baseLayer, "canvasShowEffect6");

    // play the animation after Chroma has initialized and after the canvas has been setup
    if (initialized && setupComplete) {
      // play and loop the animation
      ChromaAnimation.playAnimation(baseLayer, true);
    }
  });
};
showEffect7.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/BlackAndWhiteRainbow_Keyboard.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    // show the animation in the canvas
    displayCanvas(baseLayer, "canvasShowEffect7");

    // play the animation after Chroma has initialized and after the canvas has been setup
    if (initialized && setupComplete) {
      // play and loop the animation
      ChromaAnimation.playAnimation(baseLayer, true);
    }
  });
};
showEffect8.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/BlackAndWhiteRainbow_Keyboard.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    var frameCount = baseAnimation.getFrameCount();

    // loop over all frames in the layer
    for (var frameId = 0; frameId < frameCount; ++frameId) {

      // give color to the layer
      ChromaAnimation.multiplyIntensityRGB(baseLayer, frameId, 255, 255, 0); //yellow
    }

    // show the animation in the canvas
    displayCanvas(baseLayer, "canvasShowEffect8");

    // play the animation after Chroma has initialized and after the canvas has been setup
    if (initialized && setupComplete) {
      // play and loop the animation
      ChromaAnimation.playAnimation(baseLayer, true);
    }
  });
};
showEffect9.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/BlackAndWhiteRainbow_Keyboard.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    ChromaAnimation.multiplyIntensityAllFramesRGB(baseLayer, 0, 255, 255); //cyan

    // show the animation in the canvas
    displayCanvas(baseLayer, "canvasShowEffect9");

    // play the animation after Chroma has initialized and after the canvas has been setup
    if (initialized && setupComplete) {
      // play and loop the animation
      ChromaAnimation.playAnimation(baseLayer, true);
    }
  });
};
showEffect10.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/BlackAndWhiteRainbow_Keyboard.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    var frameCount = baseAnimation.getFrameCount();

    var color1 = ChromaAnimation.getRGB(255, 0, 0); //red
    var color2 = ChromaAnimation.getRGB(0, 255, 0); //green

    //integer number of times to transition during animation
    var speed = 2;

    // loop over all frames in the layer
    for (var frameId = 0; frameId < frameCount; ++frameId) {

      //Math.cos gives a smooth 1 to 0 to 1 curve
      var t = Math.abs(Math.cos(speed * Math.PI * (frameId+1)/frameCount));

      // use t to transition from color 1 to color 2
      var color = ChromaAnimation.lerpColor(color1, color2, t);

      // give color to the layer
      ChromaAnimation.multiplyIntensityColor(baseLayer, frameId, color);
    }

    // show the animation in the canvas
    displayCanvas(baseLayer, "canvasShowEffect10");

    // play the animation after Chroma has initialized and after the canvas has been setup
    if (initialized && setupComplete) {
      // play and loop the animation
      ChromaAnimation.playAnimation(baseLayer, true);
    }
  });
};
showEffect11.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/Tongue1_Keyboard.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    // show the animation in the canvas
    displayCanvas(baseLayer, "canvasShowEffect11");

    // play the animation after Chroma has initialized and after the canvas has been setup
    if (initialized && setupComplete) {
      // play and loop the animation
      ChromaAnimation.playAnimation(baseLayer, true);
    }
  });
};
showEffect12.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/Tongue1_Keyboard.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    var frameCount = baseAnimation.getFrameCount();

    // loop over all frames in the layer
    for (var frameId = 0; frameId < frameCount; ++frameId) {

      var threshold = 100;

      // give color to the layer
      ChromaAnimation.fillThresholdColorsRGB(baseLayer, frameId, threshold, 255, 0, 0);
    }

    // show the animation in the canvas
    displayCanvas(baseLayer, "canvasShowEffect12");

    // play the animation after Chroma has initialized and after the canvas has been setup
    if (initialized && setupComplete) {
      // play and loop the animation
      ChromaAnimation.playAnimation(baseLayer, true);
    }
  });
};
showEffect13.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/Tongue1_Keyboard.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    var threshold = 50;
    ChromaAnimation.fillThresholdColorsAllFramesRGB(baseLayer, threshold, 0, 64, 0); //dark green

    // show the animation in the canvas
    displayCanvas(baseLayer, "canvasShowEffect13");

    // play the animation after Chroma has initialized and after the canvas has been setup
    if (initialized && setupComplete) {
      // play and loop the animation
      ChromaAnimation.playAnimation(baseLayer, true);
    }
  });
};
showEffect14.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/Tongue1_Keyboard.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    var minThreshold = 50; //dark cyan
    var maxThreshold = 150; //purple
    ChromaAnimation.fillThresholdColorsMinMaxAllFramesRGB(baseLayer, minThreshold, 0, 63, 63, maxThreshold, 127, 0, 127);

    // show the animation in the canvas
    displayCanvas(baseLayer, "canvasShowEffect14");

    // play the animation after Chroma has initialized and after the canvas has been setup
    if (initialized && setupComplete) {
      // play and loop the animation
      ChromaAnimation.playAnimation(baseLayer, true);
    }
  });
};
showEffect15.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/Arc3_Keyboard.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    // show the animation in the canvas
    displayCanvas(baseLayer, "canvasShowEffect15");

    // play the animation after Chroma has initialized and after the canvas has been setup
    if (initialized && setupComplete) {
      // play and loop the animation
      ChromaAnimation.playAnimation(baseLayer, true);
    }
  });
};
showEffect16.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/Blank_Keyboard.chroma';
  var layer2 = '../ChromaCommon/animations/Arc3_Keyboard.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);
  ChromaAnimation.closeAnimation(layer2);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {
    ChromaAnimation.openAnimation(layer2, function(layer2Animation) {

      var background = ChromaAnimation.getRGB(127, 0, 0);

      var frameCount = layer2Animation.getFrameCount();
      ChromaAnimation.makeBlankFrames(baseLayer, frameCount, 0.033, background);

      // copy non zero colors from layer 2 to the base layer
      ChromaAnimation.copyNonZeroAllKeysAllFrames(layer2, baseLayer);

      // show the animation in the canvas
      displayCanvas(baseLayer, "canvasShowEffect16");

      // play the animation after Chroma has initialized and after the canvas has been setup
      if (initialized && setupComplete) {
        // play and loop the animation
        ChromaAnimation.playAnimation(baseLayer, true);
      }
    });
  });
};
showEffect17.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/Blank_Keyboard.chroma';
  var layer2 = '../ChromaCommon/animations/Arc3_Keyboard.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);
  ChromaAnimation.closeAnimation(layer2);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {
    ChromaAnimation.openAnimation(layer2, function(layer2Animation) {

      var frameCount = layer2Animation.getFrameCount();

      // setup background color on the base layer
      var background = ChromaAnimation.getRGB(127, 0, 0);
      ChromaAnimation.makeBlankFrames(baseLayer, frameCount, 0.033, background);

      // replace darker colors with background color
      ChromaAnimation.fillThresholdColorsAllFrames(layer2, 64, background);

      // copy non zero colors from layer 2 to the base layer
      ChromaAnimation.copyNonZeroAllKeysAllFrames(layer2, baseLayer);

      // show the animation in the canvas
      displayCanvas(baseLayer, "canvasShowEffect17");

      // play the animation after Chroma has initialized and after the canvas has been setup
      if (initialized && setupComplete) {
        // play and loop the animation
        ChromaAnimation.playAnimation(baseLayer, true);
      }
    });
  });
};
showEffect18.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/Blank_Keyboard.chroma';
  var layer2 = '../ChromaCommon/animations/Arc3_Keyboard.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);
  ChromaAnimation.closeAnimation(layer2);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {
    ChromaAnimation.openAnimation(layer2, function(layer2Animation) {

      var frameCount = layer2Animation.getFrameCount();

      // setup background color on the base layer
      var background = ChromaAnimation.getRGB(127, 0, 0);
      ChromaAnimation.makeBlankFrames(baseLayer, frameCount, 0.033, background);

      // Add non zero colors from layer 2 to the base layer
      ChromaAnimation.addNonZeroAllKeysAllFrames(layer2, baseLayer);

      // show the animation in the canvas
      displayCanvas(baseLayer, "canvasShowEffect18");

      // play the animation after Chroma has initialized and after the canvas has been setup
      if (initialized && setupComplete) {
        // play and loop the animation
        ChromaAnimation.playAnimation(baseLayer, true);
      }
    });
  });
};
showEffect19.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/Blank_Keyboard.chroma';
  var layer2 = '../ChromaCommon/animations/Arc3_Keyboard.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);
  ChromaAnimation.closeAnimation(layer2);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {
    ChromaAnimation.openAnimation(layer2, function(layer2Animation) {

      var frameCount = layer2Animation.getFrameCount();

      // setup background color on the base layer
      var background = ChromaAnimation.getRGB(127, 0, 0);
      ChromaAnimation.makeBlankFrames(baseLayer, frameCount, 0.033, background);

      // Add non zero colors from layer 2 to the base layer
      ChromaAnimation.subtractNonZeroAllKeysAllFrames(layer2, baseLayer);

      // show the animation in the canvas
      displayCanvas(baseLayer, "canvasShowEffect19");

      // play the animation after Chroma has initialized and after the canvas has been setup
      if (initialized && setupComplete) {
        // play and loop the animation
        ChromaAnimation.playAnimation(baseLayer, true);
      }
    });
  });
};
showEffect20.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/CircleSmall_Keyboard.chroma';
  var layer2 = 'animations/Rainbow_Keyboard.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);
  ChromaAnimation.closeAnimation(layer2);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {
    ChromaAnimation.openAnimation(layer2, function(layer2Animation) {

      var frameCount = layer2Animation.getFrameCount();
      ChromaAnimation.duplicateFirstFrame(baseLayer, frameCount);

      // copy non zero colors from layer 2 to the base layer where the base layer was non zero
      ChromaAnimation.copyNonZeroTargetAllKeysAllFrames(layer2, baseLayer);

      // set a background color
      ChromaAnimation.fillZeroColorAllFramesRGB(baseLayer, 255, 0, 0);

      // set animation playback to 30 FPS
      ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);

      // show the animation in the canvas
      displayCanvas(baseLayer, "canvasShowEffect20");

      // play the animation after Chroma has initialized and after the canvas has been setup
      if (initialized && setupComplete) {
        // play and loop the animation
        ChromaAnimation.playAnimation(baseLayer, true);
      }
    });
  });
};
showEffect21.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/MovementUpLeft_Keyboard.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    // show the animation in the canvas
    displayCanvas(baseLayer, "canvasShowEffect21");

    // play the animation after Chroma has initialized and after the canvas has been setup
    if (initialized && setupComplete) {
      // play and loop the animation
      ChromaAnimation.playAnimation(baseLayer, true);
    }
  });
};
showEffect22.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/MovementUpLeft_Keyboard.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    // set animation playback to 30 FPS
    ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);

    // show the animation in the canvas
    displayCanvas(baseLayer, "canvasShowEffect22");

    // play the animation after Chroma has initialized and after the canvas has been setup
    if (initialized && setupComplete) {
      // play and loop the animation
      ChromaAnimation.playAnimation(baseLayer, true);
    }
  });
};
showEffect23.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/MovementUpLeft_Keyboard.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    // reverse the order of frames
    ChromaAnimation.reverseAllFrames(baseLayer);

    // set animation playback to 30 FPS
    ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);

    // show the animation in the canvas
    displayCanvas(baseLayer, "canvasShowEffect23");

    // play the animation after Chroma has initialized and after the canvas has been setup
    if (initialized && setupComplete) {
      // play and loop the animation
      ChromaAnimation.playAnimation(baseLayer, true);
    }
  });
};
showEffect24.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/MovementUpLeft_Keyboard.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    // invert all the animation colors
    ChromaAnimation.invertColorsAllFrames(baseLayer);

    // set animation playback to 30 FPS
    ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);

    // show the animation in the canvas
    displayCanvas(baseLayer, "canvasShowEffect24");

    // play the animation after Chroma has initialized and after the canvas has been setup
    if (initialized && setupComplete) {
      // play and loop the animation
      ChromaAnimation.playAnimation(baseLayer, true);
    }
  });
};
showEffect25.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/MovementUpLeft_Keyboard.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    // duplicate and mirror
    ChromaAnimation.duplicateMirrorFrames(baseLayer);

    // set animation playback to 30 FPS
    ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);

    // show the animation in the canvas
    displayCanvas(baseLayer, "canvasShowEffect25");

    // play the animation after Chroma has initialized and after the canvas has been setup
    if (initialized && setupComplete) {
      // play and loop the animation
      ChromaAnimation.playAnimation(baseLayer, true);
    }
  });
};
showEffect26.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/MovementUpLeft_Keyboard.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    // insert a pause
    var frameId = 50;
    var delay = 20;
    ChromaAnimation.insertDelay(baseLayer, frameId, delay);

    // set animation playback to 30 FPS
    ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);

    // show the animation in the canvas
    displayCanvas(baseLayer, "canvasShowEffect26");

    // play the animation after Chroma has initialized and after the canvas has been setup
    if (initialized && setupComplete) {
      // play and loop the animation
      ChromaAnimation.playAnimation(baseLayer, true);
    }
  });
};
showEffect27.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/MovementUpLeft_Keyboard.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    // reduce half of the frames, remove every 2nd frame
    ChromaAnimation.reduceFrames(baseLayer, 2);

    // set animation playback to 30 FPS
    ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);

    // show the animation in the canvas
    displayCanvas(baseLayer, "canvasShowEffect27");

    // play the animation after Chroma has initialized and after the canvas has been setup
    if (initialized && setupComplete) {
      // play and loop the animation
      ChromaAnimation.playAnimation(baseLayer, true);
    }
  });
};
showEffect28.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/MovementUpLeft_Keyboard.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    // double the number of the frames
    ChromaAnimation.duplicateFrames(baseLayer);

    // set animation playback to 30 FPS
    ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);

    // show the animation in the canvas
    displayCanvas(baseLayer, "canvasShowEffect28");

    // play the animation after Chroma has initialized and after the canvas has been setup
    if (initialized && setupComplete) {
      // play and loop the animation
      ChromaAnimation.playAnimation(baseLayer, true);
    }
  });
};
showEffect29.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/MovementUpLeft_Keyboard.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    // trim the start of the animation, so it starts at frame 10
    ChromaAnimation.trimStartFrames(baseLayer, 10);

    // set animation playback to 30 FPS
    ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);

    // show the animation in the canvas
    displayCanvas(baseLayer, "canvasShowEffect29");

    // play the animation after Chroma has initialized and after the canvas has been setup
    if (initialized && setupComplete) {
      // play and loop the animation
      ChromaAnimation.playAnimation(baseLayer, true);
    }
  });
};
showEffect30.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/MovementUpLeft_Keyboard.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    // trim the start of the animation, so it starts at frame 10
    ChromaAnimation.trimStartFrames(baseLayer, 10);

    // trim the end of the animation
    ChromaAnimation.trimEndFrames(baseLayer, 75);

    // set animation playback to 30 FPS
    ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);

    // show the animation in the canvas
    displayCanvas(baseLayer, "canvasShowEffect30");

    // play the animation after Chroma has initialized and after the canvas has been setup
    if (initialized && setupComplete) {
      // play and loop the animation
      ChromaAnimation.playAnimation(baseLayer, true);
    }
  });
};
showEffect31.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/CircleSmall_Keyboard.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    var frameCount = 20;
    ChromaAnimation.duplicateFirstFrame(baseLayer, frameCount);

    // set animation playback to 30 FPS
    ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);

    // show the animation in the canvas
    displayCanvas(baseLayer, "canvasShowEffect31");

    // play the animation after Chroma has initialized and after the canvas has been setup
    if (initialized && setupComplete) {
      // play and loop the animation
      ChromaAnimation.playAnimation(baseLayer, true);
    }
  });
};
showEffect32.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/Blank_Keyboard.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    var frameCount = 20;

    // Start with blank frames set to 30FPS
    ChromaAnimation.makeBlankFrames(baseLayer, frameCount, 0.033, 0);

    // Fill all frames with black and white static
    ChromaAnimation.fillRandomColorsBlackAndWhiteAllFrames(baseLayer);

    // slow down the random frames so it can be seen
    ChromaAnimation.duplicateFrames(baseLayer);

    // show the animation in the canvas
    displayCanvas(baseLayer, "canvasShowEffect32");

    // play the animation after Chroma has initialized and after the canvas has been setup
    if (initialized && setupComplete) {
      // play and loop the animation
      ChromaAnimation.playAnimation(baseLayer, true);
    }
  });
};
showEffect33.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/Blank_Keyboard.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    var frameCount = 20;

    // Start with blank frames set to 30FPS
    ChromaAnimation.makeBlankFrames(baseLayer, frameCount, 0.033, 0);

    // Fill all frames with black and white static
    ChromaAnimation.fillRandomColorsBlackAndWhiteAllFrames(baseLayer);

    // slow down the random frames so it can be seen
    ChromaAnimation.duplicateFrames(baseLayer);

    // make random colors more sparse using threshold
    var threshold = 240;

    // turn lower intensity colors to black
    ChromaAnimation.fillThresholdColorsAllFrames(baseLayer, threshold, 0);

    // show the animation in the canvas
    displayCanvas(baseLayer, "canvasShowEffect33");

    // play the animation after Chroma has initialized and after the canvas has been setup
    if (initialized && setupComplete) {
      // play and loop the animation
      ChromaAnimation.playAnimation(baseLayer, true);
    }
  });
};
showEffect34.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/Blank_Keyboard.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    var frameCount = 20;

    // Start with blank frames set to 30FPS
    ChromaAnimation.makeBlankFrames(baseLayer, frameCount, 0.033, 0);

    // Fill all frames with black and white static
    ChromaAnimation.fillRandomColorsBlackAndWhiteAllFrames(baseLayer);

    // slow down the random frames so it can be seen
    ChromaAnimation.duplicateFrames(baseLayer);

    var minThreshold = 240; //black
    var maxThreshold = 240; //rain
    ChromaAnimation.fillThresholdColorsMinMaxAllFramesRGB(baseLayer, minThreshold, 0, 0, 0, maxThreshold, 0, 127, 255);

    // show the animation in the canvas
    displayCanvas(baseLayer, "canvasShowEffect34");

    // play the animation after Chroma has initialized and after the canvas has been setup
    if (initialized && setupComplete) {
      // play and loop the animation
      ChromaAnimation.playAnimation(baseLayer, true);
    }
  });
};
showEffect35.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = 'animations/Sprite1_Keyboard.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    // show the animation in the canvas
    displayCanvas(baseLayer, "canvasShowEffect35");

    // play the animation after Chroma has initialized and after the canvas has been setup
    if (initialized && setupComplete) {
      // play and loop the animation
      ChromaAnimation.playAnimation(baseLayer, true);
    }
  });
};
showEffect36.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/Tongue1_Keyboard.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    // show the animation in the canvas
    displayCanvas(baseLayer, "canvasShowEffect36");

    // play the animation after Chroma has initialized and after the canvas has been setup
    if (initialized && setupComplete) {
      // play and loop the animation
      ChromaAnimation.playAnimation(baseLayer, true);
    }
  });
};
showEffect37.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/Tongue1_Keyboard.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    // set middle color green
    ChromaAnimation.multiplyIntensityAllFramesRGB(baseLayer, 0, 255, 0);

    var minThreshold = 50; //set outer color to red
    var maxThreshold = 150; //set main color to blue
    ChromaAnimation.fillThresholdColorsMinMaxAllFramesRGB(baseLayer, minThreshold, 255, 0, 0, maxThreshold, 0, 0, 255);

    // show the animation in the canvas
    displayCanvas(baseLayer, "canvasShowEffect37");

    // play the animation after Chroma has initialized and after the canvas has been setup
    if (initialized && setupComplete) {
      // play and loop the animation
      ChromaAnimation.playAnimation(baseLayer, true);
    }
  });
};
showEffect38.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/OutParticle1_Keyboard.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    // show the animation in the canvas
    displayCanvas(baseLayer, "canvasShowEffect38");

    // play the animation after Chroma has initialized and after the canvas has been setup
    if (initialized && setupComplete) {
      // play and loop the animation
      ChromaAnimation.playAnimation(baseLayer, true);
    }
  });
};
showEffect39.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/OutParticle1_Keyboard.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    // turn grayscale particles to blue water
    ChromaAnimation.multiplyIntensityAllFramesRGB(baseLayer, 0, 127, 255);

    // show the animation in the canvas
    displayCanvas(baseLayer, "canvasShowEffect39");

    // play the animation after Chroma has initialized and after the canvas has been setup
    if (initialized && setupComplete) {
      // play and loop the animation
      ChromaAnimation.playAnimation(baseLayer, true);
    }
  });
};