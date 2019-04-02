showEffect1.onclick = function () {
  exampleReset();
  handleButtonClick(showEffect1);

  // start with a blank animation
  var baseLayer = 'animations/Sprite1_Keyboard.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {
    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect1");

    showEffect1ChromaLink.onclick(); //show next device
  });
};

showEffect1ChromaLink.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = 'animations/Sprite1_ChromaLink.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {
    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect1");

    showEffect1Headset.onclick(); //show next device
  });
};

showEffect1Headset.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = 'animations/Sprite1_Headset.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {
    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect1");

    showEffect1Mousepad.onclick(); //show next device
  });
};

showEffect1Mousepad.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = 'animations/Sprite1_Mousepad.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {
    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect1");

    showEffect1Mouse.onclick(); //show next device
  });
};

showEffect1Mouse.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = 'animations/Sprite1_Mouse.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {
    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect1");
  });
};

showEffect2.onclick = function () {
  exampleReset();
  handleButtonClick(showEffect2);

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/Tongue1_Keyboard.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect2");

    showEffect2ChromaLink.onclick(); //show next device
  });
};

showEffect2ChromaLink.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/Tongue1_ChromaLink.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect2");

    showEffect2Headset.onclick(); //show next device
  });
};

showEffect2Headset.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/Tongue1_Headset.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect2");

    showEffect2Mousepad.onclick(); //show next device
  });
};

showEffect2Mousepad.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/Tongue1_Mousepad.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect2");

    showEffect2Mouse.onclick(); //show next device
  });
};

showEffect2Mouse.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/Tongue1_Mouse.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect2");
  });
};

showEffect3.onclick = function () {
  exampleReset();
  handleButtonClick(showEffect3);

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

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect3");

    showEffect3ChromaLink.onclick(); //show next device
  });
};

showEffect3ChromaLink.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/Tongue1_ChromaLink.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    // set middle color green
    ChromaAnimation.multiplyIntensityAllFramesRGB(baseLayer, 0, 255, 0);

    var minThreshold = 50; //set outer color to red
    var maxThreshold = 150; //set main color to blue
    ChromaAnimation.fillThresholdColorsMinMaxAllFramesRGB(baseLayer, minThreshold, 255, 0, 0, maxThreshold, 0, 0, 255);

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect3");

    showEffect3Headset.onclick(); //show next device
  });
};

showEffect3Headset.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/Tongue1_Headset.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    // set middle color green
    ChromaAnimation.multiplyIntensityAllFramesRGB(baseLayer, 0, 255, 0);

    var minThreshold = 50; //set outer color to red
    var maxThreshold = 150; //set main color to blue
    ChromaAnimation.fillThresholdColorsMinMaxAllFramesRGB(baseLayer, minThreshold, 255, 0, 0, maxThreshold, 0, 0, 255);

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect3");

    showEffect3Mousepad.onclick(); //show next device
  });
};

showEffect3Mousepad.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/Tongue1_Mousepad.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    // set middle color green
    ChromaAnimation.multiplyIntensityAllFramesRGB(baseLayer, 0, 255, 0);

    var minThreshold = 50; //set outer color to red
    var maxThreshold = 150; //set main color to blue
    ChromaAnimation.fillThresholdColorsMinMaxAllFramesRGB(baseLayer, minThreshold, 255, 0, 0, maxThreshold, 0, 0, 255);

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect3");

    showEffect3Mouse.onclick(); //show next device
  });
};

showEffect3Mouse.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/Tongue1_Mouse.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    // set middle color green
    ChromaAnimation.multiplyIntensityAllFramesRGB(baseLayer, 0, 255, 0);

    var minThreshold = 50; //set outer color to red
    var maxThreshold = 150; //set main color to blue
    ChromaAnimation.fillThresholdColorsMinMaxAllFramesRGB(baseLayer, minThreshold, 255, 0, 0, maxThreshold, 0, 0, 255);

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect3");
  });
};

showEffect4.onclick = function () {
  exampleReset();
  handleButtonClick(showEffect4);

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/OutParticle1_Keyboard.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect4");

    showEffect4ChromaLink.onclick(); //show next device
  });
};

showEffect4ChromaLink.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/OutParticle1_ChromaLink.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect4");

    showEffect4Headset.onclick(); //show next device
  });
};

showEffect4Headset.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/OutParticle1_Headset.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect4");

    showEffect4Mousepad.onclick(); //show next device
  });
};

showEffect4Mousepad.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/OutParticle1_Mousepad.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect4");

    showEffect4Mouse.onclick(); //show next device
  });
};

showEffect4Mouse.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/OutParticle1_Mouse.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect4");
  });
};

showEffect5.onclick = function () {
  exampleReset();
  handleButtonClick(showEffect5);

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/OutParticle1_Keyboard.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    // turn grayscale particles to blue water
    ChromaAnimation.multiplyIntensityAllFramesRGB(baseLayer, 0, 127, 255);

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect5");

    showEffect5ChromaLink.onclick(); //show next device
  });
};

showEffect5ChromaLink.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/OutParticle1_ChromaLink.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    // turn grayscale particles to blue water
    ChromaAnimation.multiplyIntensityAllFramesRGB(baseLayer, 0, 127, 255);

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect5");

    showEffect5Headset.onclick(); //show next device
  });
};

showEffect5Headset.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/OutParticle1_Headset.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    // turn grayscale particles to blue water
    ChromaAnimation.multiplyIntensityAllFramesRGB(baseLayer, 0, 127, 255);

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect5");

    showEffect5Mousepad.onclick(); //show next device
  });
};

showEffect5Mousepad.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/OutParticle1_Mousepad.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    // turn grayscale particles to blue water
    ChromaAnimation.multiplyIntensityAllFramesRGB(baseLayer, 0, 127, 255);

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect5");

    showEffect5Mouse.onclick(); //show next device
  });
};

showEffect5Mouse.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/OutParticle1_Mouse.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    // turn grayscale particles to blue water
    ChromaAnimation.multiplyIntensityAllFramesRGB(baseLayer, 0, 127, 255);

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect5");
  });
};

showEffect6.onclick = function () {
  exampleReset();
  handleButtonClick(showEffect6);

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

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect6");

    showEffect6ChromaLink.onclick(); //show next device
  });
};
showEffect6ChromaLink.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/Blank_ChromaLink.chroma';

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

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect6");

    showEffect6Headset.onclick(); //show next device
  });
};
showEffect6Headset.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/Blank_Headset.chroma';

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

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect6");

    showEffect6Mousepad.onclick(); //show next device
  });
};
showEffect6Mousepad.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/Blank_Mousepad.chroma';

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

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect6");

    showEffect6Mouse.onclick(); //show next device
  });
};
showEffect6Mouse.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/Blank_Mouse.chroma';

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

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect6");
  });
};

showEffect7.onclick = function () {
  exampleReset();
  handleButtonClick(showEffect7);

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

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect7");

    showEffect7ChromaLink.onclick(); //show next device
  });
};

showEffect7ChromaLink.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/Blank_ChromaLink.chroma';

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

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect7");

    showEffect7Headset.onclick(); //show next device
  });
};

showEffect7Headset.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/Blank_Headset.chroma';

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

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect7");

    showEffect7Mousepad.onclick(); //show next device
  });
};

showEffect7Mousepad.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/Blank_Mousepad.chroma';

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

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect7");

    showEffect7Mouse.onclick(); //show next device
  });
};

showEffect7Mouse.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/Blank_Mouse.chroma';

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

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect7");
  });
};

showEffect8.onclick = function () {
  exampleReset();
  handleButtonClick(showEffect8);

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

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect8");

    showEffect8ChromaLink.onclick(); //show next device
  });
};

showEffect8ChromaLink.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/Blank_ChromaLink.chroma';

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

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect8");

    showEffect8Headset.onclick(); //show next device
  });
};

showEffect8Headset.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/Blank_Headset.chroma';

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

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect8");

    showEffect8Mousepad.onclick(); //show next device
  });
};

showEffect8Mousepad.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/Blank_Mousepad.chroma';

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

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect8");

    showEffect8Mouse.onclick(); //show next device
  });
};

showEffect8Mouse.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/Blank_Mouse.chroma';

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

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect8");
  });
};

showEffect9.onclick = function () {
  exampleReset();
  handleButtonClick(showEffect9);

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

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect9");

    showEffect9ChromaLink.onclick(); //show next device
  });
};

showEffect9ChromaLink.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/Blank_ChromaLink.chroma';

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

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect9");

    showEffect9Headset.onclick(); //show next device
  });
};

showEffect9Headset.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/Blank_Headset.chroma';

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

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect9");

    showEffect9Mousepad.onclick(); //show next device
  });
};

showEffect9Mousepad.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/Blank_Mousepad.chroma';

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

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect9");

    showEffect9Mouse.onclick(); //show next device
  });
};

showEffect9Mouse.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/Blank_Mouse.chroma';

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

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect9");
  });
};

showEffect10.onclick = function () {
  exampleReset();
  handleButtonClick(showEffect10);

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/Clouds1_Keyboard.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect10");

    showEffect10ChromaLink.onclick(); //show next device
  });
};

showEffect10ChromaLink.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/Clouds1_ChromaLink.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect10");

    showEffect10Headset.onclick(); //show next device
  });
};

showEffect10Headset.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/Clouds1_Headset.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect10");

    showEffect10Mousepad.onclick(); //show next device
  });
};

showEffect10Mousepad.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/Clouds1_Mousepad.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect10");

    showEffect10Mouse.onclick(); //show next device
  });
};

showEffect10Mouse.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/Clouds1_Mouse.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect10");
  });
};

showEffect11.onclick = function () {
  exampleReset();
  handleButtonClick(showEffect11);

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/Clouds1_Keyboard.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    // reduce the intensity of the layer
    ChromaAnimation.multiplyIntensityAllFrames(baseLayer, 0.25);

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect11");

    showEffect11ChromaLink.onclick(); //show next device
  });
};

showEffect11ChromaLink.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/Clouds1_ChromaLink.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    // reduce the intensity of the layer
    ChromaAnimation.multiplyIntensityAllFrames(baseLayer, 0.25);

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect11");

    showEffect11Headset.onclick(); //show next device
  });
};

showEffect11Headset.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/Clouds1_Headset.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    // reduce the intensity of the layer
    ChromaAnimation.multiplyIntensityAllFrames(baseLayer, 0.25);

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect11");

    showEffect11Mousepad.onclick(); //show next device
  });
};

showEffect11Mousepad.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/Clouds1_Mousepad.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    // reduce the intensity of the layer
    ChromaAnimation.multiplyIntensityAllFrames(baseLayer, 0.25);

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect11");

    showEffect11Mouse.onclick(); //show next device
  });
};

showEffect11Mouse.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/Clouds1_Mouse.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    // reduce the intensity of the layer
    ChromaAnimation.multiplyIntensityAllFrames(baseLayer, 0.25);

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect11");
  });
};

showEffect12.onclick = function () {
  exampleReset();
  handleButtonClick(showEffect12);

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/BlackAndWhiteRainbow_Keyboard.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect12");

    showEffect12ChromaLink.onclick(); //show next device
  });
};

showEffect12ChromaLink.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/BlackAndWhiteRainbow_ChromaLink.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect12");

    showEffect12Headset.onclick(); //show next device
  });
};

showEffect12Headset.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/BlackAndWhiteRainbow_Headset.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect12");

    showEffect12Mousepad.onclick(); //show next device
  });
};

showEffect12Mousepad.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/BlackAndWhiteRainbow_Mousepad.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect12");

    showEffect12Mouse.onclick(); //show next device
  });
};

showEffect12Mouse.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/BlackAndWhiteRainbow_Mouse.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect12");
  });
};

showEffect13.onclick = function () {
  exampleReset();
  handleButtonClick(showEffect13);

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/BlackAndWhiteRainbow_Keyboard.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    var frameCount = ChromaAnimation.getFrameCount(baseLayer);

    // loop over all frames in the layer
    for (var frameId = 0; frameId < frameCount; ++frameId) {

      // give color to the layer
      ChromaAnimation.multiplyIntensityRGB(baseLayer, frameId, 255, 255, 0); //yellow
    }

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect13");

    showEffect13ChromaLink.onclick(); //show next device
  });
};

showEffect13ChromaLink.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/BlackAndWhiteRainbow_ChromaLink.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    var frameCount = ChromaAnimation.getFrameCount(baseLayer);

    // loop over all frames in the layer
    for (var frameId = 0; frameId < frameCount; ++frameId) {

      // give color to the layer
      ChromaAnimation.multiplyIntensityRGB(baseLayer, frameId, 255, 255, 0); //yellow
    }

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect13");

    showEffect13Headset.onclick(); //show next device
  });
};

showEffect13Headset.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/BlackAndWhiteRainbow_Headset.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    var frameCount = ChromaAnimation.getFrameCount(baseLayer);

    // loop over all frames in the layer
    for (var frameId = 0; frameId < frameCount; ++frameId) {

      // give color to the layer
      ChromaAnimation.multiplyIntensityRGB(baseLayer, frameId, 255, 255, 0); //yellow
    }

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect13");

    showEffect13Mousepad.onclick(); //show next device
  });
};

showEffect13Mousepad.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/BlackAndWhiteRainbow_Mousepad.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    var frameCount = ChromaAnimation.getFrameCount(baseLayer);

    // loop over all frames in the layer
    for (var frameId = 0; frameId < frameCount; ++frameId) {

      // give color to the layer
      ChromaAnimation.multiplyIntensityRGB(baseLayer, frameId, 255, 255, 0); //yellow
    }

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect13");

    showEffect13Mouse.onclick(); //show next device
  });
};

showEffect13Mouse.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/BlackAndWhiteRainbow_Mouse.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    var frameCount = ChromaAnimation.getFrameCount(baseLayer);

    // loop over all frames in the layer
    for (var frameId = 0; frameId < frameCount; ++frameId) {

      // give color to the layer
      ChromaAnimation.multiplyIntensityRGB(baseLayer, frameId, 255, 255, 0); //yellow
    }

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect13");
  });
};

showEffect14.onclick = function () {
  exampleReset();
  handleButtonClick(showEffect14);

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/BlackAndWhiteRainbow_Keyboard.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    ChromaAnimation.multiplyIntensityAllFramesRGB(baseLayer, 0, 255, 255); //cyan

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect14");

    showEffect14ChromaLink.onclick(); //show next device
  });
};

showEffect14ChromaLink.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/BlackAndWhiteRainbow_ChromaLink.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    ChromaAnimation.multiplyIntensityAllFramesRGB(baseLayer, 0, 255, 255); //cyan

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect14");

    showEffect14Headset.onclick(); //show next device
  });
};

showEffect14Headset.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/BlackAndWhiteRainbow_Headset.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    ChromaAnimation.multiplyIntensityAllFramesRGB(baseLayer, 0, 255, 255); //cyan

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect14");

    showEffect14Mousepad.onclick(); //show next device
  });
};

showEffect14Mousepad.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/BlackAndWhiteRainbow_Mousepad.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    ChromaAnimation.multiplyIntensityAllFramesRGB(baseLayer, 0, 255, 255); //cyan

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect14");

    showEffect14Mouse.onclick(); //show next device
  });
};

showEffect14Mouse.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/BlackAndWhiteRainbow_Mouse.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    ChromaAnimation.multiplyIntensityAllFramesRGB(baseLayer, 0, 255, 255); //cyan

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect14");
  });
};

showEffect15.onclick = function () {
  exampleReset();
  handleButtonClick(showEffect15);

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/BlackAndWhiteRainbow_Keyboard.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    var frameCount = ChromaAnimation.getFrameCount(baseLayer);

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

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect15");

    showEffect15ChromaLink.onclick(); //show next device
  });
};

showEffect15ChromaLink.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/BlackAndWhiteRainbow_ChromaLink.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    var frameCount = ChromaAnimation.getFrameCount(baseLayer);

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

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect15");

    showEffect15Headset.onclick(); //show next device
  });
};

showEffect15Headset.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/BlackAndWhiteRainbow_Headset.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    var frameCount = ChromaAnimation.getFrameCount(baseLayer);

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

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect15");

    showEffect15Mousepad.onclick(); //show next device
  });
};

showEffect15Mousepad.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/BlackAndWhiteRainbow_Mousepad.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    var frameCount = ChromaAnimation.getFrameCount(baseLayer);

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

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect15");

    showEffect15Mouse.onclick(); //show next device
  });
};

showEffect15Mouse.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/BlackAndWhiteRainbow_Mouse.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    var frameCount = ChromaAnimation.getFrameCount(baseLayer);

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

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect15");
  });
};

showEffect16.onclick = function () {
  exampleReset();
  handleButtonClick(showEffect16);

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/Tongue1_Keyboard.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect16");

    showEffect16ChromaLink.onclick(); //show next device
  });
};

showEffect16ChromaLink.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/Tongue1_ChromaLink.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect16");

    showEffect16Headset.onclick(); //show next device
  });
};

showEffect16Headset.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/Tongue1_Headset.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect16");

    showEffect16Mousepad.onclick(); //show next device
  });
};

showEffect16Mousepad.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/Tongue1_Mousepad.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect16");

    showEffect16Mouse.onclick(); //show next device
  });
};

showEffect16Mouse.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/Tongue1_Mouse.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect16");
  });
};

showEffect17.onclick = function () {
  exampleReset();
  handleButtonClick(showEffect17);

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/Tongue1_Keyboard.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    var frameCount = ChromaAnimation.getFrameCount(baseLayer);

    // loop over all frames in the layer
    for (var frameId = 0; frameId < frameCount; ++frameId) {

      var threshold = 100;

      // give color to the layer
      ChromaAnimation.fillThresholdColorsRGB(baseLayer, frameId, threshold, 255, 0, 0);
    }

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect17");

    showEffect17ChromaLink.onclick(); //show next device
  });
};

showEffect17ChromaLink.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/Tongue1_ChromaLink.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    var frameCount = ChromaAnimation.getFrameCount(baseLayer);

    // loop over all frames in the layer
    for (var frameId = 0; frameId < frameCount; ++frameId) {

      var threshold = 100;

      // give color to the layer
      ChromaAnimation.fillThresholdColorsRGB(baseLayer, frameId, threshold, 255, 0, 0);
    }

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect17");

    showEffect17Headset.onclick(); //show next device
  });
};

showEffect17Headset.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/Tongue1_Headset.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    var frameCount = ChromaAnimation.getFrameCount(baseLayer);

    // loop over all frames in the layer
    for (var frameId = 0; frameId < frameCount; ++frameId) {

      var threshold = 100;

      // give color to the layer
      ChromaAnimation.fillThresholdColorsRGB(baseLayer, frameId, threshold, 255, 0, 0);
    }

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect17");

    showEffect17Mousepad.onclick(); //show next device
  });
};

showEffect17Mousepad.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/Tongue1_Mousepad.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    var frameCount = ChromaAnimation.getFrameCount(baseLayer);

    // loop over all frames in the layer
    for (var frameId = 0; frameId < frameCount; ++frameId) {

      var threshold = 100;

      // give color to the layer
      ChromaAnimation.fillThresholdColorsRGB(baseLayer, frameId, threshold, 255, 0, 0);
    }

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect17");

    showEffect17Mouse.onclick(); //show next device
  });
};

showEffect17Mouse.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/Tongue1_Mouse.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    var frameCount = ChromaAnimation.getFrameCount(baseLayer);

    // loop over all frames in the layer
    for (var frameId = 0; frameId < frameCount; ++frameId) {

      var threshold = 100;

      // give color to the layer
      ChromaAnimation.fillThresholdColorsRGB(baseLayer, frameId, threshold, 255, 0, 0);
    }

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect17");
  });
};

showEffect18.onclick = function () {
  exampleReset();
  handleButtonClick(showEffect18);

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/Tongue1_Keyboard.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    var threshold = 50;
    ChromaAnimation.fillThresholdColorsAllFramesRGB(baseLayer, threshold, 0, 64, 0); //dark green

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect18");

    showEffect18ChromaLink.onclick(); //show next device
  });
};

showEffect18ChromaLink.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/Tongue1_ChromaLink.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    var threshold = 50;
    ChromaAnimation.fillThresholdColorsAllFramesRGB(baseLayer, threshold, 0, 64, 0); //dark green

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect18");

    showEffect18Headset.onclick(); //show next device
  });
};

showEffect18Headset.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/Tongue1_Headset.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    var threshold = 50;
    ChromaAnimation.fillThresholdColorsAllFramesRGB(baseLayer, threshold, 0, 64, 0); //dark green

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect18");

    showEffect18Mousepad.onclick(); //show next device
  });
};

showEffect18Mousepad.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/Tongue1_Mousepad.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    var threshold = 50;
    ChromaAnimation.fillThresholdColorsAllFramesRGB(baseLayer, threshold, 0, 64, 0); //dark green

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect18");

    showEffect18Mouse.onclick(); //show next device
  });
};

showEffect18Mouse.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/Tongue1_Mouse.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    var threshold = 50;
    ChromaAnimation.fillThresholdColorsAllFramesRGB(baseLayer, threshold, 0, 64, 0); //dark green

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect18");
  });
};

showEffect19.onclick = function () {
  exampleReset();
  handleButtonClick(showEffect19);

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/Tongue1_Keyboard.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    var minThreshold = 50; //dark cyan
    var maxThreshold = 150; //purple
    ChromaAnimation.fillThresholdColorsMinMaxAllFramesRGB(baseLayer, minThreshold, 0, 63, 63, maxThreshold, 127, 0, 127);

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect19");

    showEffect19ChromaLink.onclick(); //show next device
  });
};

showEffect19ChromaLink.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/Tongue1_ChromaLink.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    var minThreshold = 50; //dark cyan
    var maxThreshold = 150; //purple
    ChromaAnimation.fillThresholdColorsMinMaxAllFramesRGB(baseLayer, minThreshold, 0, 63, 63, maxThreshold, 127, 0, 127);

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect19");

    showEffect19Headset.onclick(); //show next device
  });
};

showEffect19Headset.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/Tongue1_Headset.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    var minThreshold = 50; //dark cyan
    var maxThreshold = 150; //purple
    ChromaAnimation.fillThresholdColorsMinMaxAllFramesRGB(baseLayer, minThreshold, 0, 63, 63, maxThreshold, 127, 0, 127);

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect19");

    showEffect19Mousepad.onclick(); //show next device
  });
};

showEffect19Mousepad.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/Tongue1_Mousepad.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    var minThreshold = 50; //dark cyan
    var maxThreshold = 150; //purple
    ChromaAnimation.fillThresholdColorsMinMaxAllFramesRGB(baseLayer, minThreshold, 0, 63, 63, maxThreshold, 127, 0, 127);

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect19");

    showEffect19Mouse.onclick(); //show next device
  });
};

showEffect19Mouse.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/Tongue1_Mouse.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    var minThreshold = 50; //dark cyan
    var maxThreshold = 150; //purple
    ChromaAnimation.fillThresholdColorsMinMaxAllFramesRGB(baseLayer, minThreshold, 0, 63, 63, maxThreshold, 127, 0, 127);

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect19");
  });
};

showEffect20.onclick = function () {
  exampleReset();
  handleButtonClick(showEffect20);

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/Arc3_Keyboard.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect20");

    showEffect20ChromaLink.onclick(); //show next device
  });
};

showEffect20ChromaLink.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/Arc3_ChromaLink.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect20");

    showEffect20Headset.onclick(); //show next device
  });
};

showEffect20Headset.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/Arc3_Headset.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect20");

    showEffect20Mousepad.onclick(); //show next device
  });
};

showEffect20Mousepad.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/Arc3_Mousepad.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect20");

    showEffect20Mouse.onclick(); //show next device
  });
};

showEffect20Mouse.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/Arc3_Mouse.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect20");
  });
};

showEffect21.onclick = function () {
  exampleReset();
  handleButtonClick(showEffect21);

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

      var frameCount = ChromaAnimation.getFrameCount(layer2);
      ChromaAnimation.makeBlankFrames(baseLayer, frameCount, 0.033, background);

      // copy non zero colors from layer 2 to the base layer
      ChromaAnimation.copyNonZeroAllKeysAllFrames(layer2, baseLayer);

      // play the animation on the dynamic canvas
      displayAndPlayAnimation(baseLayer, "ShowEffect21");

      showEffect21ChromaLink.onclick(); //show next device
    });
  });
};

showEffect21ChromaLink.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/Blank_ChromaLink.chroma';
  var layer2 = '../ChromaCommon/animations/Arc3_ChromaLink.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);
  ChromaAnimation.closeAnimation(layer2);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {
    ChromaAnimation.openAnimation(layer2, function(layer2Animation) {

      var background = ChromaAnimation.getRGB(127, 0, 0);

      var frameCount = ChromaAnimation.getFrameCount(layer2);
      ChromaAnimation.makeBlankFrames(baseLayer, frameCount, 0.033, background);

      // copy non zero colors from layer 2 to the base layer
      ChromaAnimation.copyNonZeroAllKeysAllFrames(layer2, baseLayer);

      // play the animation on the dynamic canvas
      displayAndPlayAnimation(baseLayer, "ShowEffect21");

      showEffect21Headset.onclick(); //show next device
    });
  });
};

showEffect21Headset.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/Blank_Headset.chroma';
  var layer2 = '../ChromaCommon/animations/Arc3_Headset.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);
  ChromaAnimation.closeAnimation(layer2);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {
    ChromaAnimation.openAnimation(layer2, function(layer2Animation) {

      var background = ChromaAnimation.getRGB(127, 0, 0);

      var frameCount = ChromaAnimation.getFrameCount(layer2);
      ChromaAnimation.makeBlankFrames(baseLayer, frameCount, 0.033, background);

      // copy non zero colors from layer 2 to the base layer
      ChromaAnimation.copyNonZeroAllKeysAllFrames(layer2, baseLayer);

      // play the animation on the dynamic canvas
      displayAndPlayAnimation(baseLayer, "ShowEffect21");

      showEffect21Mousepad.onclick(); //show next device
    });
  });
};

showEffect21Mousepad.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/Blank_Mousepad.chroma';
  var layer2 = '../ChromaCommon/animations/Arc3_Mousepad.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);
  ChromaAnimation.closeAnimation(layer2);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {
    ChromaAnimation.openAnimation(layer2, function(layer2Animation) {

      var background = ChromaAnimation.getRGB(127, 0, 0);

      var frameCount = ChromaAnimation.getFrameCount(layer2);
      ChromaAnimation.makeBlankFrames(baseLayer, frameCount, 0.033, background);

      // copy non zero colors from layer 2 to the base layer
      ChromaAnimation.copyNonZeroAllKeysAllFrames(layer2, baseLayer);

      // play the animation on the dynamic canvas
      displayAndPlayAnimation(baseLayer, "ShowEffect21");

      showEffect21Mouse.onclick(); //show next device
    });
  });
};

showEffect21Mouse.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/Blank_Mouse.chroma';
  var layer2 = '../ChromaCommon/animations/Arc3_Mouse.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);
  ChromaAnimation.closeAnimation(layer2);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {
    ChromaAnimation.openAnimation(layer2, function(layer2Animation) {

      var background = ChromaAnimation.getRGB(127, 0, 0);

      var frameCount = ChromaAnimation.getFrameCount(layer2);
      ChromaAnimation.makeBlankFrames(baseLayer, frameCount, 0.033, background);

      // copy non zero colors from layer 2 to the base layer
      ChromaAnimation.copyNonZeroAllKeysAllFrames(layer2, baseLayer);

      // play the animation on the dynamic canvas
      displayAndPlayAnimation(baseLayer, "ShowEffect21");
    });
  });
};

showEffect22.onclick = function () {
  exampleReset();
  handleButtonClick(showEffect22);

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/Blank_Keyboard.chroma';
  var layer2 = '../ChromaCommon/animations/Arc3_Keyboard.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);
  ChromaAnimation.closeAnimation(layer2);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {
    ChromaAnimation.openAnimation(layer2, function(layer2Animation) {

      var frameCount = ChromaAnimation.getFrameCount(layer2);

      // setup background color on the base layer
      var background = ChromaAnimation.getRGB(127, 0, 0);
      ChromaAnimation.makeBlankFrames(baseLayer, frameCount, 0.033, background);

      // replace darker colors with background color
      ChromaAnimation.fillThresholdColorsAllFrames(layer2, 64, background);

      // copy non zero colors from layer 2 to the base layer
      ChromaAnimation.copyNonZeroAllKeysAllFrames(layer2, baseLayer);

      // play the animation on the dynamic canvas
      displayAndPlayAnimation(baseLayer, "ShowEffect22");

      showEffect22ChromaLink.onclick(); //show next device
    });
  });
};

showEffect22ChromaLink.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/Blank_ChromaLink.chroma';
  var layer2 = '../ChromaCommon/animations/Arc3_ChromaLink.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);
  ChromaAnimation.closeAnimation(layer2);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {
    ChromaAnimation.openAnimation(layer2, function(layer2Animation) {

      var frameCount = ChromaAnimation.getFrameCount(layer2);

      // setup background color on the base layer
      var background = ChromaAnimation.getRGB(127, 0, 0);
      ChromaAnimation.makeBlankFrames(baseLayer, frameCount, 0.033, background);

      // replace darker colors with background color
      ChromaAnimation.fillThresholdColorsAllFrames(layer2, 64, background);

      // copy non zero colors from layer 2 to the base layer
      ChromaAnimation.copyNonZeroAllKeysAllFrames(layer2, baseLayer);

      // play the animation on the dynamic canvas
      displayAndPlayAnimation(baseLayer, "ShowEffect22");

      showEffect22Headset.onclick(); //show next device
    });
  });
};

showEffect22Headset.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/Blank_Headset.chroma';
  var layer2 = '../ChromaCommon/animations/Arc3_Headset.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);
  ChromaAnimation.closeAnimation(layer2);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {
    ChromaAnimation.openAnimation(layer2, function(layer2Animation) {

      var frameCount = ChromaAnimation.getFrameCount(layer2);

      // setup background color on the base layer
      var background = ChromaAnimation.getRGB(127, 0, 0);
      ChromaAnimation.makeBlankFrames(baseLayer, frameCount, 0.033, background);

      // replace darker colors with background color
      ChromaAnimation.fillThresholdColorsAllFrames(layer2, 64, background);

      // copy non zero colors from layer 2 to the base layer
      ChromaAnimation.copyNonZeroAllKeysAllFrames(layer2, baseLayer);

      // play the animation on the dynamic canvas
      displayAndPlayAnimation(baseLayer, "ShowEffect22");

      showEffect22Mousepad.onclick(); //show next device
    });
  });
};

showEffect22Mousepad.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/Blank_Mousepad.chroma';
  var layer2 = '../ChromaCommon/animations/Arc3_Mousepad.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);
  ChromaAnimation.closeAnimation(layer2);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {
    ChromaAnimation.openAnimation(layer2, function(layer2Animation) {

      var frameCount = ChromaAnimation.getFrameCount(layer2);

      // setup background color on the base layer
      var background = ChromaAnimation.getRGB(127, 0, 0);
      ChromaAnimation.makeBlankFrames(baseLayer, frameCount, 0.033, background);

      // replace darker colors with background color
      ChromaAnimation.fillThresholdColorsAllFrames(layer2, 64, background);

      // copy non zero colors from layer 2 to the base layer
      ChromaAnimation.copyNonZeroAllKeysAllFrames(layer2, baseLayer);

      // play the animation on the dynamic canvas
      displayAndPlayAnimation(baseLayer, "ShowEffect22");

      showEffect22Mouse.onclick(); //show next device
    });
  });
};

showEffect22Mouse.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/Blank_Mouse.chroma';
  var layer2 = '../ChromaCommon/animations/Arc3_Mouse.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);
  ChromaAnimation.closeAnimation(layer2);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {
    ChromaAnimation.openAnimation(layer2, function(layer2Animation) {

      var frameCount = ChromaAnimation.getFrameCount(layer2);

      // setup background color on the base layer
      var background = ChromaAnimation.getRGB(127, 0, 0);
      ChromaAnimation.makeBlankFrames(baseLayer, frameCount, 0.033, background);

      // replace darker colors with background color
      ChromaAnimation.fillThresholdColorsAllFrames(layer2, 64, background);

      // copy non zero colors from layer 2 to the base layer
      ChromaAnimation.copyNonZeroAllKeysAllFrames(layer2, baseLayer);

      // play the animation on the dynamic canvas
      displayAndPlayAnimation(baseLayer, "ShowEffect22");
    });
  });
};

showEffect23.onclick = function () {
  exampleReset();
  handleButtonClick(showEffect23);

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/Blank_Keyboard.chroma';
  var layer2 = '../ChromaCommon/animations/Arc3_Keyboard.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);
  ChromaAnimation.closeAnimation(layer2);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {
    ChromaAnimation.openAnimation(layer2, function(layer2Animation) {

      var frameCount = ChromaAnimation.getFrameCount(layer2);

      // setup background color on the base layer
      var background = ChromaAnimation.getRGB(127, 0, 0);
      ChromaAnimation.makeBlankFrames(baseLayer, frameCount, 0.033, background);

      // Add non zero colors from layer 2 to the base layer
      ChromaAnimation.addNonZeroAllKeysAllFrames(layer2, baseLayer);

      // play the animation on the dynamic canvas
      displayAndPlayAnimation(baseLayer, "ShowEffect23");

      showEffect23ChromaLink.onclick(); //show next device
    });
  });
};

showEffect23ChromaLink.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/Blank_ChromaLink.chroma';
  var layer2 = '../ChromaCommon/animations/Arc3_ChromaLink.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);
  ChromaAnimation.closeAnimation(layer2);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {
    ChromaAnimation.openAnimation(layer2, function(layer2Animation) {

      var frameCount = ChromaAnimation.getFrameCount(layer2);

      // setup background color on the base layer
      var background = ChromaAnimation.getRGB(127, 0, 0);
      ChromaAnimation.makeBlankFrames(baseLayer, frameCount, 0.033, background);

      // Add non zero colors from layer 2 to the base layer
      ChromaAnimation.addNonZeroAllKeysAllFrames(layer2, baseLayer);

      // play the animation on the dynamic canvas
      displayAndPlayAnimation(baseLayer, "ShowEffect23");

      showEffect23Headset.onclick(); //show next device
    });
  });
};

showEffect23Headset.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/Blank_Headset.chroma';
  var layer2 = '../ChromaCommon/animations/Arc3_Headset.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);
  ChromaAnimation.closeAnimation(layer2);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {
    ChromaAnimation.openAnimation(layer2, function(layer2Animation) {

      var frameCount = ChromaAnimation.getFrameCount(layer2);

      // setup background color on the base layer
      var background = ChromaAnimation.getRGB(127, 0, 0);
      ChromaAnimation.makeBlankFrames(baseLayer, frameCount, 0.033, background);

      // Add non zero colors from layer 2 to the base layer
      ChromaAnimation.addNonZeroAllKeysAllFrames(layer2, baseLayer);

      // play the animation on the dynamic canvas
      displayAndPlayAnimation(baseLayer, "ShowEffect23");

      showEffect23Mousepad.onclick(); //show next device
    });
  });
};

showEffect23Mousepad.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/Blank_Mousepad.chroma';
  var layer2 = '../ChromaCommon/animations/Arc3_Mousepad.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);
  ChromaAnimation.closeAnimation(layer2);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {
    ChromaAnimation.openAnimation(layer2, function(layer2Animation) {

      var frameCount = ChromaAnimation.getFrameCount(layer2);

      // setup background color on the base layer
      var background = ChromaAnimation.getRGB(127, 0, 0);
      ChromaAnimation.makeBlankFrames(baseLayer, frameCount, 0.033, background);

      // Add non zero colors from layer 2 to the base layer
      ChromaAnimation.addNonZeroAllKeysAllFrames(layer2, baseLayer);

      // play the animation on the dynamic canvas
      displayAndPlayAnimation(baseLayer, "ShowEffect23");

      showEffect23Mouse.onclick(); //show next device
    });
  });
};

showEffect23Mouse.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/Blank_Mouse.chroma';
  var layer2 = '../ChromaCommon/animations/Arc3_Mouse.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);
  ChromaAnimation.closeAnimation(layer2);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {
    ChromaAnimation.openAnimation(layer2, function(layer2Animation) {

      var frameCount = ChromaAnimation.getFrameCount(layer2);

      // setup background color on the base layer
      var background = ChromaAnimation.getRGB(127, 0, 0);
      ChromaAnimation.makeBlankFrames(baseLayer, frameCount, 0.033, background);

      // Add non zero colors from layer 2 to the base layer
      ChromaAnimation.addNonZeroAllKeysAllFrames(layer2, baseLayer);

      // play the animation on the dynamic canvas
      displayAndPlayAnimation(baseLayer, "ShowEffect23");
    });
  });
};

showEffect24.onclick = function () {
  exampleReset();
  handleButtonClick(showEffect24);

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/Blank_Keyboard.chroma';
  var layer2 = '../ChromaCommon/animations/Arc3_Keyboard.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);
  ChromaAnimation.closeAnimation(layer2);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {
    ChromaAnimation.openAnimation(layer2, function(layer2Animation) {

      var frameCount = ChromaAnimation.getFrameCount(layer2);

      // setup background color on the base layer
      var background = ChromaAnimation.getRGB(127, 0, 0);
      ChromaAnimation.makeBlankFrames(baseLayer, frameCount, 0.033, background);

      // Add non zero colors from layer 2 to the base layer
      ChromaAnimation.subtractNonZeroAllKeysAllFrames(layer2, baseLayer);

      // play the animation on the dynamic canvas
      displayAndPlayAnimation(baseLayer, "ShowEffect24");

      showEffect24ChromaLink.onclick(); //show next device
    });
  });
};

showEffect24ChromaLink.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/Blank_ChromaLink.chroma';
  var layer2 = '../ChromaCommon/animations/Arc3_ChromaLink.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);
  ChromaAnimation.closeAnimation(layer2);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {
    ChromaAnimation.openAnimation(layer2, function(layer2Animation) {

      var frameCount = ChromaAnimation.getFrameCount(layer2);

      // setup background color on the base layer
      var background = ChromaAnimation.getRGB(127, 0, 0);
      ChromaAnimation.makeBlankFrames(baseLayer, frameCount, 0.033, background);

      // Add non zero colors from layer 2 to the base layer
      ChromaAnimation.subtractNonZeroAllKeysAllFrames(layer2, baseLayer);

      // play the animation on the dynamic canvas
      displayAndPlayAnimation(baseLayer, "ShowEffect24");

      showEffect24Headset.onclick(); //show next device
    });
  });
};

showEffect24Headset.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/Blank_Headset.chroma';
  var layer2 = '../ChromaCommon/animations/Arc3_Headset.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);
  ChromaAnimation.closeAnimation(layer2);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {
    ChromaAnimation.openAnimation(layer2, function(layer2Animation) {

      var frameCount = ChromaAnimation.getFrameCount(layer2);

      // setup background color on the base layer
      var background = ChromaAnimation.getRGB(127, 0, 0);
      ChromaAnimation.makeBlankFrames(baseLayer, frameCount, 0.033, background);

      // Add non zero colors from layer 2 to the base layer
      ChromaAnimation.subtractNonZeroAllKeysAllFrames(layer2, baseLayer);

      // play the animation on the dynamic canvas
      displayAndPlayAnimation(baseLayer, "ShowEffect24");

      showEffect24Mousepad.onclick(); //show next device
    });
  });
};

showEffect24Mousepad.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/Blank_Mousepad.chroma';
  var layer2 = '../ChromaCommon/animations/Arc3_Mousepad.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);
  ChromaAnimation.closeAnimation(layer2);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {
    ChromaAnimation.openAnimation(layer2, function(layer2Animation) {

      var frameCount = ChromaAnimation.getFrameCount(layer2);

      // setup background color on the base layer
      var background = ChromaAnimation.getRGB(127, 0, 0);
      ChromaAnimation.makeBlankFrames(baseLayer, frameCount, 0.033, background);

      // Add non zero colors from layer 2 to the base layer
      ChromaAnimation.subtractNonZeroAllKeysAllFrames(layer2, baseLayer);

      // play the animation on the dynamic canvas
      displayAndPlayAnimation(baseLayer, "ShowEffect24");

      showEffect24Mouse.onclick(); //show next device
    });
  });
};

showEffect24Mouse.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/Blank_Mouse.chroma';
  var layer2 = '../ChromaCommon/animations/Arc3_Mouse.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);
  ChromaAnimation.closeAnimation(layer2);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {
    ChromaAnimation.openAnimation(layer2, function(layer2Animation) {

      var frameCount = ChromaAnimation.getFrameCount(layer2);

      // setup background color on the base layer
      var background = ChromaAnimation.getRGB(127, 0, 0);
      ChromaAnimation.makeBlankFrames(baseLayer, frameCount, 0.033, background);

      // Add non zero colors from layer 2 to the base layer
      ChromaAnimation.subtractNonZeroAllKeysAllFrames(layer2, baseLayer);

      // play the animation on the dynamic canvas
      displayAndPlayAnimation(baseLayer, "ShowEffect24");
    });
  });
};

showEffect25.onclick = function () {
  exampleReset();
  handleButtonClick(showEffect25);

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/CircleSmall_Keyboard.chroma';
  var layer2 = 'animations/Rainbow_Keyboard.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);
  ChromaAnimation.closeAnimation(layer2);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {
    ChromaAnimation.openAnimation(layer2, function(layer2Animation) {

      var frameCount = ChromaAnimation.getFrameCount(layer2);
      ChromaAnimation.duplicateFirstFrame(baseLayer, frameCount);

      // copy non zero colors from layer 2 to the base layer where the base layer was non zero
      ChromaAnimation.copyNonZeroTargetAllKeysAllFrames(layer2, baseLayer);

      // set a background color
      ChromaAnimation.fillZeroColorAllFramesRGB(baseLayer, 255, 0, 0);

      // set animation playback to 30 FPS
      ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);

      // play the animation on the dynamic canvas
      displayAndPlayAnimation(baseLayer, "ShowEffect25");

      showEffect25ChromaLink.onclick(); //show next device
    });
  });
};

showEffect25ChromaLink.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/CircleSmall_ChromaLink.chroma';
  var layer2 = 'animations/Rainbow_ChromaLink.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);
  ChromaAnimation.closeAnimation(layer2);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {
    ChromaAnimation.openAnimation(layer2, function(layer2Animation) {

      var frameCount = ChromaAnimation.getFrameCount(layer2);
      ChromaAnimation.duplicateFirstFrame(baseLayer, frameCount);

      // copy non zero colors from layer 2 to the base layer where the base layer was non zero
      ChromaAnimation.copyNonZeroTargetAllKeysAllFrames(layer2, baseLayer);

      // set a background color
      ChromaAnimation.fillZeroColorAllFramesRGB(baseLayer, 255, 0, 0);

      // set animation playback to 30 FPS
      ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);

      // play the animation on the dynamic canvas
      displayAndPlayAnimation(baseLayer, "ShowEffect25");

      showEffect25Headset.onclick(); //show next device
    });
  });
};

showEffect25Headset.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/CircleSmall_Headset.chroma';
  var layer2 = 'animations/Rainbow_Headset.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);
  ChromaAnimation.closeAnimation(layer2);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {
    ChromaAnimation.openAnimation(layer2, function(layer2Animation) {

      var frameCount = ChromaAnimation.getFrameCount(layer2);
      ChromaAnimation.duplicateFirstFrame(baseLayer, frameCount);

      // copy non zero colors from layer 2 to the base layer where the base layer was non zero
      ChromaAnimation.copyNonZeroTargetAllKeysAllFrames(layer2, baseLayer);

      // set a background color
      ChromaAnimation.fillZeroColorAllFramesRGB(baseLayer, 255, 0, 0);

      // set animation playback to 30 FPS
      ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);

      // play the animation on the dynamic canvas
      displayAndPlayAnimation(baseLayer, "ShowEffect25");

      showEffect25Mousepad.onclick(); //show next device
    });
  });
};

showEffect25Mousepad.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/CircleSmall_Mousepad.chroma';
  var layer2 = 'animations/Rainbow_Mousepad.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);
  ChromaAnimation.closeAnimation(layer2);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {
    ChromaAnimation.openAnimation(layer2, function(layer2Animation) {

      var frameCount = ChromaAnimation.getFrameCount(layer2);
      ChromaAnimation.duplicateFirstFrame(baseLayer, frameCount);

      // copy non zero colors from layer 2 to the base layer where the base layer was non zero
      ChromaAnimation.copyNonZeroTargetAllKeysAllFrames(layer2, baseLayer);

      // set a background color
      ChromaAnimation.fillZeroColorAllFramesRGB(baseLayer, 255, 0, 0);

      // set animation playback to 30 FPS
      ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);

      // play the animation on the dynamic canvas
      displayAndPlayAnimation(baseLayer, "ShowEffect25");

      showEffect25Mouse.onclick(); //show next device
    });
  });
};

showEffect25Mouse.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/CircleSmall_Mouse.chroma';
  var layer2 = 'animations/Rainbow_Mouse.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);
  ChromaAnimation.closeAnimation(layer2);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {
    ChromaAnimation.openAnimation(layer2, function(layer2Animation) {

      var frameCount = ChromaAnimation.getFrameCount(layer2);
      ChromaAnimation.duplicateFirstFrame(baseLayer, frameCount);

      // copy non zero colors from layer 2 to the base layer where the base layer was non zero
      ChromaAnimation.copyNonZeroTargetAllKeysAllFrames(layer2, baseLayer);

      // set a background color
      ChromaAnimation.fillZeroColorAllFramesRGB(baseLayer, 255, 0, 0);

      // set animation playback to 30 FPS
      ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);

      // play the animation on the dynamic canvas
      displayAndPlayAnimation(baseLayer, "ShowEffect25");
    });
  });
};

showEffect26.onclick = function () {
  exampleReset();
  handleButtonClick(showEffect26);

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/MovementUpLeft_Keyboard.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect26");

    showEffect26ChromaLink.onclick(); //show next device
  });
};

showEffect26ChromaLink.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/MovementUpLeft_ChromaLink.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect26");

    showEffect26Headset.onclick(); //show next device
  });
};

showEffect26Headset.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/MovementUpLeft_Headset.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect26");

    showEffect26Mousepad.onclick(); //show next device
  });
};

showEffect26Mousepad.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/MovementUpLeft_Mousepad.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect26");

    showEffect26Mouse.onclick(); //show next device
  });
};

showEffect26Mouse.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/MovementUpLeft_Mouse.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect26");
  });
};

showEffect27.onclick = function () {
  exampleReset();
  handleButtonClick(showEffect27);

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/MovementUpLeft_Keyboard.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    // set animation playback to 30 FPS
    ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect27");

    showEffect27ChromaLink.onclick(); //show next device
  });
};

showEffect27ChromaLink.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/MovementUpLeft_ChromaLink.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    // set animation playback to 30 FPS
    ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect27");

    showEffect27Headset.onclick(); //show next device
  });
};

showEffect27Headset.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/MovementUpLeft_Headset.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    // set animation playback to 30 FPS
    ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect27");

    showEffect27Mousepad.onclick(); //show next device
  });
};

showEffect27Mousepad.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/MovementUpLeft_Mousepad.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    // set animation playback to 30 FPS
    ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect27");

    showEffect27Mouse.onclick(); //show next device
  });
};

showEffect27Mouse.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/MovementUpLeft_Mouse.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    // set animation playback to 30 FPS
    ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect27");
  });
};

showEffect28.onclick = function () {
  exampleReset();
  handleButtonClick(showEffect28);

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

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect28");

    showEffect28ChromaLink.onclick(); //show next device
  });
};

showEffect28ChromaLink.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/MovementUpLeft_ChromaLink.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    // reverse the order of frames
    ChromaAnimation.reverseAllFrames(baseLayer);

    // set animation playback to 30 FPS
    ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect28");

    showEffect28Headset.onclick(); //show next device
  });
};

showEffect28Headset.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/MovementUpLeft_Headset.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    // reverse the order of frames
    ChromaAnimation.reverseAllFrames(baseLayer);

    // set animation playback to 30 FPS
    ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect28");

    showEffect28Mousepad.onclick(); //show next device
  });
};

showEffect28Mousepad.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/MovementUpLeft_Mousepad.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    // reverse the order of frames
    ChromaAnimation.reverseAllFrames(baseLayer);

    // set animation playback to 30 FPS
    ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect28");

    showEffect28Mouse.onclick(); //show next device
  });
};

showEffect28Mouse.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/MovementUpLeft_Mouse.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    // reverse the order of frames
    ChromaAnimation.reverseAllFrames(baseLayer);

    // set animation playback to 30 FPS
    ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect28");
  });
};

showEffect29.onclick = function () {
  exampleReset();
  handleButtonClick(showEffect29);

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

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect29");

    showEffect29ChromaLink.onclick(); //show next device
  });
};

showEffect29ChromaLink.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/MovementUpLeft_ChromaLink.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    // invert all the animation colors
    ChromaAnimation.invertColorsAllFrames(baseLayer);

    // set animation playback to 30 FPS
    ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect29");

    showEffect29Headset.onclick(); //show next device
  });
};

showEffect29Headset.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/MovementUpLeft_Headset.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    // invert all the animation colors
    ChromaAnimation.invertColorsAllFrames(baseLayer);

    // set animation playback to 30 FPS
    ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect29");

    showEffect29Mousepad.onclick(); //show next device
  });
};

showEffect29Mousepad.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/MovementUpLeft_Mousepad.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    // invert all the animation colors
    ChromaAnimation.invertColorsAllFrames(baseLayer);

    // set animation playback to 30 FPS
    ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect29");

    showEffect29Mouse.onclick(); //show next device
  });
};

showEffect29Mouse.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/MovementUpLeft_Mouse.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    // invert all the animation colors
    ChromaAnimation.invertColorsAllFrames(baseLayer);

    // set animation playback to 30 FPS
    ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect29");
  });
};

showEffect30.onclick = function () {
  exampleReset();
  handleButtonClick(showEffect30);

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

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect30");

    showEffect30ChromaLink.onclick(); //show next device
  });
};

showEffect30ChromaLink.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/MovementUpLeft_ChromaLink.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    // duplicate and mirror
    ChromaAnimation.duplicateMirrorFrames(baseLayer);

    // set animation playback to 30 FPS
    ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect30");

    showEffect30Headset.onclick(); //show next device
  });
};

showEffect30Headset.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/MovementUpLeft_Headset.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    // duplicate and mirror
    ChromaAnimation.duplicateMirrorFrames(baseLayer);

    // set animation playback to 30 FPS
    ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect30");

    showEffect30Mousepad.onclick(); //show next device
  });
};

showEffect30Mousepad.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/MovementUpLeft_Mousepad.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    // duplicate and mirror
    ChromaAnimation.duplicateMirrorFrames(baseLayer);

    // set animation playback to 30 FPS
    ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect30");

    showEffect30Mouse.onclick(); //show next device
  });
};

showEffect30Mouse.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/MovementUpLeft_Mouse.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    // duplicate and mirror
    ChromaAnimation.duplicateMirrorFrames(baseLayer);

    // set animation playback to 30 FPS
    ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect30");
  });
};

showEffect31.onclick = function () {
  exampleReset();
  handleButtonClick(showEffect31);

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

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect31");

    showEffect31ChromaLink.onclick(); //show next device
  });
};

showEffect31ChromaLink.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/MovementUpLeft_ChromaLink.chroma';

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

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect31");

    showEffect31Headset.onclick(); //show next device
  });
};

showEffect31Headset.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/MovementUpLeft_Headset.chroma';

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

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect31");

    showEffect31Mousepad.onclick(); //show next device
  });
};

showEffect31Mousepad.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/MovementUpLeft_Mousepad.chroma';

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

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect31");

    showEffect31Mouse.onclick(); //show next device
  });
};

showEffect31Mouse.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/MovementUpLeft_Mouse.chroma';

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

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect31");
  });
};

showEffect32.onclick = function () {
  exampleReset();
  handleButtonClick(showEffect32);

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

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect32");

    showEffect32ChromaLink.onclick(); //show next device
  });
};

showEffect32ChromaLink.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/MovementUpLeft_ChromaLink.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    // reduce half of the frames, remove every 2nd frame
    ChromaAnimation.reduceFrames(baseLayer, 2);

    // set animation playback to 30 FPS
    ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect32");

    showEffect32Headset.onclick(); //show next device
  });
};

showEffect32Headset.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/MovementUpLeft_Headset.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    // reduce half of the frames, remove every 2nd frame
    ChromaAnimation.reduceFrames(baseLayer, 2);

    // set animation playback to 30 FPS
    ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect32");

    showEffect32Mousepad.onclick(); //show next device
  });
};

showEffect32Mousepad.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/MovementUpLeft_Mousepad.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    // reduce half of the frames, remove every 2nd frame
    ChromaAnimation.reduceFrames(baseLayer, 2);

    // set animation playback to 30 FPS
    ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect32");

    showEffect32Mouse.onclick(); //show next device
  });
};

showEffect32Mouse.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/MovementUpLeft_Mouse.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    // reduce half of the frames, remove every 2nd frame
    ChromaAnimation.reduceFrames(baseLayer, 2);

    // set animation playback to 30 FPS
    ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect32");
  });
};

showEffect33.onclick = function () {
  exampleReset();
  handleButtonClick(showEffect33);

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

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect33");

    showEffect33ChromaLink.onclick(); //show next device
  });
};

showEffect33ChromaLink.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/MovementUpLeft_ChromaLink.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    // double the number of the frames
    ChromaAnimation.duplicateFrames(baseLayer);

    // set animation playback to 30 FPS
    ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect33");

    showEffect33Headset.onclick(); //show next device
  });
};

showEffect33Headset.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/MovementUpLeft_Headset.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    // double the number of the frames
    ChromaAnimation.duplicateFrames(baseLayer);

    // set animation playback to 30 FPS
    ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect33");

    showEffect33Mousepad.onclick(); //show next device
  });
};

showEffect33Mousepad.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/MovementUpLeft_Mousepad.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    // double the number of the frames
    ChromaAnimation.duplicateFrames(baseLayer);

    // set animation playback to 30 FPS
    ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect33");

    showEffect33Mouse.onclick(); //show next device
  });
};

showEffect33Mouse.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/MovementUpLeft_Mouse.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    // double the number of the frames
    ChromaAnimation.duplicateFrames(baseLayer);

    // set animation playback to 30 FPS
    ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect33");
  });
};

showEffect34.onclick = function () {
  exampleReset();
  handleButtonClick(showEffect34);

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

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect34");

    showEffect34ChromaLink.onclick(); //show next device
  });
};

showEffect34ChromaLink.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/MovementUpLeft_ChromaLink.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    // trim the start of the animation, so it starts at frame 10
    ChromaAnimation.trimStartFrames(baseLayer, 10);

    // set animation playback to 30 FPS
    ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect34");

    showEffect34Headset.onclick(); //show next device
  });
};

showEffect34Headset.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/MovementUpLeft_Headset.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    // trim the start of the animation, so it starts at frame 10
    ChromaAnimation.trimStartFrames(baseLayer, 10);

    // set animation playback to 30 FPS
    ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect34");

    showEffect34Mousepad.onclick(); //show next device
  });
};

showEffect34Mousepad.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/MovementUpLeft_Mousepad.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    // trim the start of the animation, so it starts at frame 10
    ChromaAnimation.trimStartFrames(baseLayer, 10);

    // set animation playback to 30 FPS
    ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect34");

    showEffect34Mouse.onclick(); //show next device
  });
};

showEffect34Mouse.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/MovementUpLeft_Mouse.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    // trim the start of the animation, so it starts at frame 10
    ChromaAnimation.trimStartFrames(baseLayer, 10);

    // set animation playback to 30 FPS
    ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect34");
  });
};

showEffect35.onclick = function () {
  exampleReset();
  handleButtonClick(showEffect35);

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

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect35");

    showEffect35ChromaLink.onclick(); //show next device
  });
};

showEffect35ChromaLink.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/MovementUpLeft_ChromaLink.chroma';

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

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect35");

    showEffect35Headset.onclick(); //show next device
  });
};

showEffect35Headset.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/MovementUpLeft_Headset.chroma';

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

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect35");

    showEffect35Mousepad.onclick(); //show next device
  });
};

showEffect35Mousepad.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/MovementUpLeft_Mousepad.chroma';

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

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect35");

    showEffect35Mouse.onclick(); //show next device
  });
};

showEffect35Mouse.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/MovementUpLeft_Mouse.chroma';

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

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect35");
  });
};

showEffect36.onclick = function () {
  exampleReset();
  handleButtonClick(showEffect36);

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

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect36");

    showEffect36ChromaLink.onclick(); //show next device
  });
};

showEffect36ChromaLink.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/CircleSmall_ChromaLink.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    var frameCount = 20;
    ChromaAnimation.duplicateFirstFrame(baseLayer, frameCount);

    // set animation playback to 30 FPS
    ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect36");

    showEffect36Headset.onclick(); //show next device
  });
};

showEffect36Headset.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/CircleSmall_Headset.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    var frameCount = 20;
    ChromaAnimation.duplicateFirstFrame(baseLayer, frameCount);

    // set animation playback to 30 FPS
    ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect36");

    showEffect36Mousepad.onclick(); //show next device
  });
};

showEffect36Mousepad.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/CircleSmall_Mousepad.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    var frameCount = 20;
    ChromaAnimation.duplicateFirstFrame(baseLayer, frameCount);

    // set animation playback to 30 FPS
    ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect36");

    showEffect36Mouse.onclick(); //show next device
  });
};

showEffect36Mouse.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/CircleSmall_Mouse.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    var frameCount = 20;
    ChromaAnimation.duplicateFirstFrame(baseLayer, frameCount);

    // set animation playback to 30 FPS
    ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect36");
  });
};

showEffect37.onclick = function () {
  exampleReset();
  handleButtonClick(showEffect37);

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

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect37");

    showEffect37ChromaLink.onclick(); //show next device
  });
};

showEffect37ChromaLink.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/Blank_ChromaLink.chroma';

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

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect37");

    showEffect37Headset.onclick(); //show next device
  });
};

showEffect37Headset.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/Blank_Headset.chroma';

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

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect37");

    showEffect37Mousepad.onclick(); //show next device
  });
};

showEffect37Mousepad.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/Blank_Mousepad.chroma';

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

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect37");

    showEffect37Mouse.onclick(); //show next device
  });
};

showEffect37Mouse.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/Blank_Mouse.chroma';

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

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect37");
  });
};

showEffect38.onclick = function () {
  exampleReset();
  handleButtonClick(showEffect38);

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

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect38");

    showEffect38ChromaLink.onclick(); //show next device
  });
};

showEffect38ChromaLink.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/Blank_ChromaLink.chroma';

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

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect38");

    showEffect38Headset.onclick(); //show next device
  });
};

showEffect38Headset.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/Blank_Headset.chroma';

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

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect38");

    showEffect38Mousepad.onclick(); //show next device
  });
};

showEffect38Mousepad.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/Blank_Mousepad.chroma';

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

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect38");

    showEffect38Mouse.onclick(); //show next device
  });
};

showEffect38Mouse.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/Blank_Mouse.chroma';

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

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect38");
  });
};

showEffect39.onclick = function () {
  exampleReset();
  handleButtonClick(showEffect39);

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

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect39");

    showEffect39ChromaLink.onclick(); //show next device
  });
}

showEffect39ChromaLink.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/Blank_ChromaLink.chroma';

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

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect39");

    showEffect39Headset.onclick(); //show next device
  });
}

showEffect39Headset.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/Blank_Headset.chroma';

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

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect39");

    showEffect39Mousepad.onclick(); //show next device
  });
}

showEffect39Mousepad.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/Blank_Mousepad.chroma';

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

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect39");

    showEffect39Mouse.onclick(); //show next device
  });
}

showEffect39Mouse.onclick = function () {
  exampleReset();

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/Blank_Mouse.chroma';

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

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect39");
  });
}

showEffect40.onclick = function () {
  exampleReset(true);
  handleButtonClick(showEffect40);

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/Blank_Keyboard.chroma';
  var idleAnimation = '../ChromaCommon/animations/BlackAndWhiteRainbow_Keyboard.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);
  ChromaAnimation.closeAnimation(idleAnimation);

  // Set idle animation
  ChromaAnimation.setIdleAnimation(idleAnimation);

  // Enable idle animation
  ChromaAnimation.useIdleAnimation(EChromaSDKDeviceEnum.DE_Keyboard, true);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    // Transition from green to red and then stop
    var frameCount = 30;
    ChromaAnimation.makeBlankFramesRGB(baseLayer, frameCount, 0.1, 255, 255, 255);
    var color1 = ChromaAnimation.getRGB(0,255,0);
    var color2 = ChromaAnimation.getRGB(255,0,0);
    ChromaAnimation.multiplyColorLerpAllFrames(baseLayer, color1, color2);

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect40", false);

    showEffect40ChromaLink.onclick(); //show next device
  });
};

showEffect40ChromaLink.onclick = function () {
  exampleReset(true);

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/Blank_ChromaLink.chroma';
  var idleAnimation = '../ChromaCommon/animations/BlackAndWhiteRainbow_ChromaLink.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);
  ChromaAnimation.closeAnimation(idleAnimation);

  // Set idle animation
  ChromaAnimation.setIdleAnimation(idleAnimation);

  // Enable idle animation
  ChromaAnimation.useIdleAnimation(EChromaSDKDeviceEnum.DE_ChromaLink, true);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    // Transition from green to red and then stop
    var frameCount = 30;
    ChromaAnimation.makeBlankFramesRGB(baseLayer, frameCount, 0.1, 255, 255, 255);
    var color1 = ChromaAnimation.getRGB(0,255,0);
    var color2 = ChromaAnimation.getRGB(255,0,0);
    ChromaAnimation.multiplyColorLerpAllFrames(baseLayer, color1, color2);

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect40", false);

    showEffect40Headset.onclick(); //show next device
  });
};

showEffect40Headset.onclick = function () {
  exampleReset(true);

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/Blank_Headset.chroma';
  var idleAnimation = '../ChromaCommon/animations/BlackAndWhiteRainbow_Headset.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);
  ChromaAnimation.closeAnimation(idleAnimation);

  // Set idle animation
  ChromaAnimation.setIdleAnimation(idleAnimation);

  // Enable idle animation
  ChromaAnimation.useIdleAnimation(EChromaSDKDeviceEnum.DE_Headset, true);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    // Transition from green to red and then stop
    var frameCount = 30;
    ChromaAnimation.makeBlankFramesRGB(baseLayer, frameCount, 0.1, 255, 255, 255);
    var color1 = ChromaAnimation.getRGB(0,255,0);
    var color2 = ChromaAnimation.getRGB(255,0,0);
    ChromaAnimation.multiplyColorLerpAllFrames(baseLayer, color1, color2);

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect40", false);

    showEffect40Mousepad.onclick(); //show next device
  });
};

showEffect40Mousepad.onclick = function () {
  exampleReset(true);

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/Blank_Mousepad.chroma';
  var idleAnimation = '../ChromaCommon/animations/BlackAndWhiteRainbow_Mousepad.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);
  ChromaAnimation.closeAnimation(idleAnimation);

  // Set idle animation
  ChromaAnimation.setIdleAnimation(idleAnimation);

  // Enable idle animation
  ChromaAnimation.useIdleAnimation(EChromaSDKDeviceEnum.DE_Mousepad, true);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    // Transition from green to red and then stop
    var frameCount = 30;
    ChromaAnimation.makeBlankFramesRGB(baseLayer, frameCount, 0.1, 255, 255, 255);
    var color1 = ChromaAnimation.getRGB(0,255,0);
    var color2 = ChromaAnimation.getRGB(255,0,0);
    ChromaAnimation.multiplyColorLerpAllFrames(baseLayer, color1, color2);

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect40", false);

    showEffect40Mouse.onclick(); //show next device
  });
};

showEffect40Mouse.onclick = function () {
  exampleReset(true);

  // start with a blank animation
  var baseLayer = '../ChromaCommon/animations/Blank_Mouse.chroma';
  var idleAnimation = '../ChromaCommon/animations/BlackAndWhiteRainbow_Mouse.chroma';

  // close the blank animation if it's already loaded, discarding any changes
  ChromaAnimation.closeAnimation(baseLayer);
  ChromaAnimation.closeAnimation(idleAnimation);

  // Set idle animation
  ChromaAnimation.setIdleAnimation(idleAnimation);

  // Enable idle animation
  ChromaAnimation.useIdleAnimation(EChromaSDKDeviceEnum.DE_Mouse, true);

  // open the blank animation, passing a reference to the base animation when loading has completed
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    // Transition from green to red and then stop
    var frameCount = 30;
    ChromaAnimation.makeBlankFramesRGB(baseLayer, frameCount, 0.1, 255, 255, 255);
    var color1 = ChromaAnimation.getRGB(0,255,0);
    var color2 = ChromaAnimation.getRGB(255,0,0);
    ChromaAnimation.multiplyColorLerpAllFrames(baseLayer, color1, color2);

    // play the animation on the dynamic canvas
    displayAndPlayAnimation(baseLayer, "ShowEffect40", false);
  });
};
