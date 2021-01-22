showEffect1.onclick = function () {
    exampleReset();
    handleButtonClick(showEffect1);

    ChromaAnimation.useIdleAnimation(EChromaSDKDeviceEnum.DE_Keyboard, false);

    // start with a blank animation
    var baseLayer = 'animations/Sprite1_Keyboard.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {
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
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {
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
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {
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
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {
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
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {
        // play the animation on the dynamic canvas
        displayAndPlayAnimation(baseLayer, "ShowEffect1");
        showEffect1Keypad.onclick(); //show next device
    });
};

showEffect1Keypad.onclick = function () {
    exampleReset();

    // start with a blank animation
    var baseLayer = 'animations/Sprite1_Keypad.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {
        // play the animation on the dynamic canvas
        displayAndPlayAnimation(baseLayer, "ShowEffect1");
    });
};

showEffect2.onclick = function () {
    exampleReset();
    handleButtonClick(showEffect2);

    // start with a blank animation
    var baseLayer = 'animations/Trails_Keyboard.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

        // play the animation on the dynamic canvas
        displayAndPlayAnimation(baseLayer, "ShowEffect2");

        showEffect2ChromaLink.onclick(); //show next device
    });
};

showEffect2ChromaLink.onclick = function () {
    exampleReset();

    // start with a blank animation
    var baseLayer = 'animations/Trails_ChromaLink.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

        // play the animation on the dynamic canvas
        displayAndPlayAnimation(baseLayer, "ShowEffect2");

        showEffect2Headset.onclick(); //show next device
    });
};

showEffect2Headset.onclick = function () {
    exampleReset();

    // start with a blank animation
    var baseLayer = 'animations/Trails_Headset.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

        // play the animation on the dynamic canvas
        displayAndPlayAnimation(baseLayer, "ShowEffect2");

        showEffect2Mousepad.onclick(); //show next device
    });
};

showEffect2Mousepad.onclick = function () {
    exampleReset();

    // start with a blank animation
    var baseLayer = 'animations/Trails_Mousepad.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

        // play the animation on the dynamic canvas
        displayAndPlayAnimation(baseLayer, "ShowEffect2");

        showEffect2Mouse.onclick(); //show next device
    });
};

showEffect2Mouse.onclick = function () {
    exampleReset();

    // start with a blank animation
    var baseLayer = 'animations/Trails_Mouse.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

        // play the animation on the dynamic canvas
        displayAndPlayAnimation(baseLayer, "ShowEffect2");
        showEffect2Keypad.onclick(); //show next device
    });
};

showEffect2Keypad.onclick = function () {
    exampleReset();

    // start with a blank animation
    var baseLayer = 'animations/Trails_Keypad.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

        // play the animation on the dynamic canvas
        displayAndPlayAnimation(baseLayer, "ShowEffect2");
    });
};

showEffect3.onclick = function () {
    exampleReset();
    handleButtonClick(showEffect3);

    // start with a blank animation
    var baseLayer = 'animations/Trails_Keyboard.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

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
    var baseLayer = 'animations/Trails_ChromaLink.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

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
    var baseLayer = 'animations/Trails_Headset.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

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
    var baseLayer = 'animations/Trails_Mousepad.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

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
    var baseLayer = 'animations/Trails_Mouse.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

        // set middle color green
        ChromaAnimation.multiplyIntensityAllFramesRGB(baseLayer, 0, 255, 0);

        var minThreshold = 50; //set outer color to red
        var maxThreshold = 150; //set main color to blue
        ChromaAnimation.fillThresholdColorsMinMaxAllFramesRGB(baseLayer, minThreshold, 255, 0, 0, maxThreshold, 0, 0, 255);

        // play the animation on the dynamic canvas
        displayAndPlayAnimation(baseLayer, "ShowEffect3");
        showEffect3Keypad.onclick(); //show next device
    });
};

showEffect3Keypad.onclick = function () {
    exampleReset();

    // start with a blank animation
    var baseLayer = '../ChromaCommon/animations/Blank_Keypad.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

        // static color
        ChromaAnimation.fillZeroColorAllFramesRGB(baseLayer, 255, 0, 0);

        // play the animation on the dynamic canvas
        displayAndPlayAnimation(baseLayer, "ShowEffect3");
    });
};

showEffect4.onclick = function () {
    exampleReset();
    handleButtonClick(showEffect4);

    // start with a blank animation
    var baseLayer = 'animations/ParticlesOut_Keyboard.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

        // play the animation on the dynamic canvas
        displayAndPlayAnimation(baseLayer, "ShowEffect4");

        showEffect4ChromaLink.onclick(); //show next device
    });
};

showEffect4ChromaLink.onclick = function () {
    exampleReset();

    // start with a blank animation
    var baseLayer = 'animations/ParticlesOut_ChromaLink.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

        // play the animation on the dynamic canvas
        displayAndPlayAnimation(baseLayer, "ShowEffect4");

        showEffect4Headset.onclick(); //show next device
    });
};

showEffect4Headset.onclick = function () {
    exampleReset();

    // start with a blank animation
    var baseLayer = 'animations/ParticlesOut_Headset.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

        // play the animation on the dynamic canvas
        displayAndPlayAnimation(baseLayer, "ShowEffect4");

        showEffect4Mousepad.onclick(); //show next device
    });
};

showEffect4Mousepad.onclick = function () {
    exampleReset();

    // start with a blank animation
    var baseLayer = 'animations/ParticlesOut_Mousepad.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

        // play the animation on the dynamic canvas
        displayAndPlayAnimation(baseLayer, "ShowEffect4");

        showEffect4Mouse.onclick(); //show next device
    });
};

showEffect4Mouse.onclick = function () {
    exampleReset();

    // start with a blank animation
    var baseLayer = 'animations/ParticlesOut_Mouse.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

        // play the animation on the dynamic canvas
        displayAndPlayAnimation(baseLayer, "ShowEffect4");

        showEffect4Keypad.onclick(); //show next device
    });
};

showEffect4Keypad.onclick = function () {
    exampleReset();

    // start with a blank animation
    var baseLayer = 'animations/ParticlesOut_Keypad.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

        // play the animation on the dynamic canvas
        displayAndPlayAnimation(baseLayer, "ShowEffect4");
    });
};

showEffect5.onclick = function () {
    exampleReset();
    handleButtonClick(showEffect5);

    // start with a blank animation
    var baseLayer = 'animations/ParticlesOut_Keyboard.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

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
    var baseLayer = 'animations/ParticlesOut_ChromaLink.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

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
    var baseLayer = 'animations/ParticlesOut_Headset.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

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
    var baseLayer = 'animations/ParticlesOut_Mousepad.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

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
    var baseLayer = 'animations/ParticlesOut_Mouse.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

        // turn grayscale particles to blue water
        ChromaAnimation.multiplyIntensityAllFramesRGB(baseLayer, 0, 127, 255);

        // play the animation on the dynamic canvas
        displayAndPlayAnimation(baseLayer, "ShowEffect5");

        showEffect5Keypad.onclick(); //show next device
    });
};

showEffect5Keypad.onclick = function () {
    exampleReset();

    // start with a blank animation
    var baseLayer = 'animations/ParticlesOut_Keypad.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

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
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

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
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

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
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

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
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

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
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

        // the length of the animation
        var frameCount = 50;

        // set all frames to white, with all frames set to 30FPS
        ChromaAnimation.makeBlankFramesRGB(baseLayer, frameCount, 0.033, 255, 255, 255);

        // fade the start of the animation starting at frame zero to 40
        ChromaAnimation.fadeStartFrames(baseLayer, 40);

        // play the animation on the dynamic canvas
        displayAndPlayAnimation(baseLayer, "ShowEffect6");

        showEffect6Keypad.onclick(); //show next device
    });
};
showEffect6Keypad.onclick = function () {
    exampleReset();

    // start with a blank animation
    var baseLayer = '../ChromaCommon/animations/Blank_Keypad.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

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
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

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
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

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
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

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
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

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
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

        // the length of the animation
        var frameCount = 50;

        // set all frames to white, with all frames set to 30FPS
        ChromaAnimation.makeBlankFramesRGB(baseLayer, frameCount, 0.033, 255, 255, 255);

        // fade the end of the animation starting at frame length - 40 (60)
        ChromaAnimation.fadeEndFrames(baseLayer, 40);

        // play the animation on the dynamic canvas
        displayAndPlayAnimation(baseLayer, "ShowEffect7");

        showEffect7Keypad.onclick(); //show next device
    });
};

showEffect7Keypad.onclick = function () {
    exampleReset();

    // start with a blank animation
    var baseLayer = '../ChromaCommon/animations/Blank_Keypad.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

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
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

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
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

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
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

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
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

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
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

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

        showEffect8Keypad.onclick(); //show next device
    });
};

showEffect8Keypad.onclick = function () {
    exampleReset();

    // start with a blank animation
    var baseLayer = '../ChromaCommon/animations/Blank_Keypad.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

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
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

        // the length of the animation
        var frameCount = 50;

        // set all frames to white, with all frames set to 30FPS
        ChromaAnimation.makeBlankFramesRGB(baseLayer, frameCount, 0.033, 255, 255, 255);

        //integer number of times to blink during animation
        var speed = 2;

        // loop over all frames in the layer
        for (var frameId = 0; frameId < frameCount; ++frameId) {
            //Math.cos gives a smooth 1 to 0 to 1 curve, subtracting from one inverts the curve
            var t = 1 - Math.abs(Math.cos(speed * Math.PI * (frameId + 1) / frameCount));

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
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

        // the length of the animation
        var frameCount = 50;

        // set all frames to white, with all frames set to 30FPS
        ChromaAnimation.makeBlankFramesRGB(baseLayer, frameCount, 0.033, 255, 255, 255);

        //integer number of times to blink during animation
        var speed = 2;

        // loop over all frames in the layer
        for (var frameId = 0; frameId < frameCount; ++frameId) {
            //Math.cos gives a smooth 1 to 0 to 1 curve, subtracting from one inverts the curve
            var t = 1 - Math.abs(Math.cos(speed * Math.PI * (frameId + 1) / frameCount));

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
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

        // the length of the animation
        var frameCount = 50;

        // set all frames to white, with all frames set to 30FPS
        ChromaAnimation.makeBlankFramesRGB(baseLayer, frameCount, 0.033, 255, 255, 255);

        //integer number of times to blink during animation
        var speed = 2;

        // loop over all frames in the layer
        for (var frameId = 0; frameId < frameCount; ++frameId) {
            //Math.cos gives a smooth 1 to 0 to 1 curve, subtracting from one inverts the curve
            var t = 1 - Math.abs(Math.cos(speed * Math.PI * (frameId + 1) / frameCount));

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
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

        // the length of the animation
        var frameCount = 50;

        // set all frames to white, with all frames set to 30FPS
        ChromaAnimation.makeBlankFramesRGB(baseLayer, frameCount, 0.033, 255, 255, 255);

        //integer number of times to blink during animation
        var speed = 2;

        // loop over all frames in the layer
        for (var frameId = 0; frameId < frameCount; ++frameId) {
            //Math.cos gives a smooth 1 to 0 to 1 curve, subtracting from one inverts the curve
            var t = 1 - Math.abs(Math.cos(speed * Math.PI * (frameId + 1) / frameCount));

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
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

        // the length of the animation
        var frameCount = 50;

        // set all frames to white, with all frames set to 30FPS
        ChromaAnimation.makeBlankFramesRGB(baseLayer, frameCount, 0.033, 255, 255, 255);

        //integer number of times to blink during animation
        var speed = 2;

        // loop over all frames in the layer
        for (var frameId = 0; frameId < frameCount; ++frameId) {
            //Math.cos gives a smooth 1 to 0 to 1 curve, subtracting from one inverts the curve
            var t = 1 - Math.abs(Math.cos(speed * Math.PI * (frameId + 1) / frameCount));

            // multiply the frame by the 't' intensity
            ChromaAnimation.multiplyIntensity(baseLayer, frameId, t);
        }

        // play the animation on the dynamic canvas
        displayAndPlayAnimation(baseLayer, "ShowEffect9");

        showEffect9Keypad.onclick(); //show next device
    });
};

showEffect9Keypad.onclick = function () {
    exampleReset();

    // start with a blank animation
    var baseLayer = '../ChromaCommon/animations/Blank_Keypad.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

        // the length of the animation
        var frameCount = 50;

        // set all frames to white, with all frames set to 30FPS
        ChromaAnimation.makeBlankFramesRGB(baseLayer, frameCount, 0.033, 255, 255, 255);

        //integer number of times to blink during animation
        var speed = 2;

        // loop over all frames in the layer
        for (var frameId = 0; frameId < frameCount; ++frameId) {
            //Math.cos gives a smooth 1 to 0 to 1 curve, subtracting from one inverts the curve
            var t = 1 - Math.abs(Math.cos(speed * Math.PI * (frameId + 1) / frameCount));

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
    var baseLayer = 'animations/Particles2_Keyboard.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

        // play the animation on the dynamic canvas
        displayAndPlayAnimation(baseLayer, "ShowEffect10");

        showEffect10ChromaLink.onclick(); //show next device
    });
};

showEffect10ChromaLink.onclick = function () {
    exampleReset();

    // start with a blank animation
    var baseLayer = 'animations/Particles2_ChromaLink.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

        // play the animation on the dynamic canvas
        displayAndPlayAnimation(baseLayer, "ShowEffect10");

        showEffect10Headset.onclick(); //show next device
    });
};

showEffect10Headset.onclick = function () {
    exampleReset();

    // start with a blank animation
    var baseLayer = 'animations/Particles2_Headset.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

        // play the animation on the dynamic canvas
        displayAndPlayAnimation(baseLayer, "ShowEffect10");

        showEffect10Mousepad.onclick(); //show next device
    });
};

showEffect10Mousepad.onclick = function () {
    exampleReset();

    // start with a blank animation
    var baseLayer = 'animations/Particles2_Mousepad.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

        // play the animation on the dynamic canvas
        displayAndPlayAnimation(baseLayer, "ShowEffect10");

        showEffect10Mouse.onclick(); //show next device
    });
};

showEffect10Mouse.onclick = function () {
    exampleReset();

    // start with a blank animation
    var baseLayer = 'animations/Particles2_Mouse.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

        // play the animation on the dynamic canvas
        displayAndPlayAnimation(baseLayer, "ShowEffect10");

        showEffect10Keypad.onclick(); //show next device
    });
};

showEffect10Keypad.onclick = function () {
    exampleReset();

    // start with a blank animation
    var baseLayer = 'animations/Particles2_Keypad.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

        // play the animation on the dynamic canvas
        displayAndPlayAnimation(baseLayer, "ShowEffect10");
    });
};

showEffect11.onclick = function () {
    exampleReset();
    handleButtonClick(showEffect11);

    // start with a blank animation
    var baseLayer = 'animations/Particles2_Keyboard.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

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
    var baseLayer = 'animations/Particles2_ChromaLink.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

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
    var baseLayer = 'animations/Particles2_Headset.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

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
    var baseLayer = 'animations/Particles2_Mousepad.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

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
    var baseLayer = 'animations/Particles2_Mouse.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

        // reduce the intensity of the layer
        ChromaAnimation.multiplyIntensityAllFrames(baseLayer, 0.25);

        // play the animation on the dynamic canvas
        displayAndPlayAnimation(baseLayer, "ShowEffect11");

        showEffect11Keypad.onclick(); //show next device
    });
};

showEffect11Keypad.onclick = function () {
    exampleReset();

    // start with a blank animation
    var baseLayer = 'animations/Particles2_Keypad.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

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
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

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
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

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
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

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
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

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
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

        // play the animation on the dynamic canvas
        displayAndPlayAnimation(baseLayer, "ShowEffect12");

        showEffect12Keypad.onclick(); //show next device
    });
};

showEffect12Keypad.onclick = function () {
    exampleReset();

    // start with a blank animation
    var baseLayer = '../ChromaCommon/animations/BlackAndWhiteRainbow_Keypad.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

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
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

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
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

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
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

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
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

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
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

        var frameCount = ChromaAnimation.getFrameCount(baseLayer);

        // loop over all frames in the layer
        for (var frameId = 0; frameId < frameCount; ++frameId) {

            // give color to the layer
            ChromaAnimation.multiplyIntensityRGB(baseLayer, frameId, 255, 255, 0); //yellow
        }

        // play the animation on the dynamic canvas
        displayAndPlayAnimation(baseLayer, "ShowEffect13");

        showEffect13Keypad.onclick(); //show next device
    });
};

showEffect13Keypad.onclick = function () {
    exampleReset();

    // start with a blank animation
    var baseLayer = '../ChromaCommon/animations/BlackAndWhiteRainbow_Keypad.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

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
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

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
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

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
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

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
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

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
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

        ChromaAnimation.multiplyIntensityAllFramesRGB(baseLayer, 0, 255, 255); //cyan

        // play the animation on the dynamic canvas
        displayAndPlayAnimation(baseLayer, "ShowEffect14");

        showEffect14Keypad.onclick(); //show next device
    });
};

showEffect14Keypad.onclick = function () {
    exampleReset();

    // start with a blank animation
    var baseLayer = '../ChromaCommon/animations/BlackAndWhiteRainbow_Keypad.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

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
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

        var frameCount = ChromaAnimation.getFrameCount(baseLayer);

        var color1 = ChromaAnimation.getRGB(255, 0, 0); //red
        var color2 = ChromaAnimation.getRGB(0, 255, 0); //green

        //integer number of times to transition during animation
        var speed = 2;

        // loop over all frames in the layer
        for (var frameId = 0; frameId < frameCount; ++frameId) {

            //Math.cos gives a smooth 1 to 0 to 1 curve
            var t = Math.abs(Math.cos(speed * Math.PI * (frameId + 1) / frameCount));

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
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

        var frameCount = ChromaAnimation.getFrameCount(baseLayer);

        var color1 = ChromaAnimation.getRGB(255, 0, 0); //red
        var color2 = ChromaAnimation.getRGB(0, 255, 0); //green

        //integer number of times to transition during animation
        var speed = 2;

        // loop over all frames in the layer
        for (var frameId = 0; frameId < frameCount; ++frameId) {

            //Math.cos gives a smooth 1 to 0 to 1 curve
            var t = Math.abs(Math.cos(speed * Math.PI * (frameId + 1) / frameCount));

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
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

        var frameCount = ChromaAnimation.getFrameCount(baseLayer);

        var color1 = ChromaAnimation.getRGB(255, 0, 0); //red
        var color2 = ChromaAnimation.getRGB(0, 255, 0); //green

        //integer number of times to transition during animation
        var speed = 2;

        // loop over all frames in the layer
        for (var frameId = 0; frameId < frameCount; ++frameId) {

            //Math.cos gives a smooth 1 to 0 to 1 curve
            var t = Math.abs(Math.cos(speed * Math.PI * (frameId + 1) / frameCount));

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
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

        var frameCount = ChromaAnimation.getFrameCount(baseLayer);

        var color1 = ChromaAnimation.getRGB(255, 0, 0); //red
        var color2 = ChromaAnimation.getRGB(0, 255, 0); //green

        //integer number of times to transition during animation
        var speed = 2;

        // loop over all frames in the layer
        for (var frameId = 0; frameId < frameCount; ++frameId) {

            //Math.cos gives a smooth 1 to 0 to 1 curve
            var t = Math.abs(Math.cos(speed * Math.PI * (frameId + 1) / frameCount));

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
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

        var frameCount = ChromaAnimation.getFrameCount(baseLayer);

        var color1 = ChromaAnimation.getRGB(255, 0, 0); //red
        var color2 = ChromaAnimation.getRGB(0, 255, 0); //green

        //integer number of times to transition during animation
        var speed = 2;

        // loop over all frames in the layer
        for (var frameId = 0; frameId < frameCount; ++frameId) {

            //Math.cos gives a smooth 1 to 0 to 1 curve
            var t = Math.abs(Math.cos(speed * Math.PI * (frameId + 1) / frameCount));

            // use t to transition from color 1 to color 2
            var color = ChromaAnimation.lerpColor(color1, color2, t);

            // give color to the layer
            ChromaAnimation.multiplyIntensityColor(baseLayer, frameId, color);
        }

        // play the animation on the dynamic canvas
        displayAndPlayAnimation(baseLayer, "ShowEffect15");

        showEffect15Keypad.onclick(); //show next device
    });
};

showEffect15Keypad.onclick = function () {
    exampleReset();

    // start with a blank animation
    var baseLayer = '../ChromaCommon/animations/BlackAndWhiteRainbow_Keypad.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

        var frameCount = ChromaAnimation.getFrameCount(baseLayer);

        var color1 = ChromaAnimation.getRGB(255, 0, 0); //red
        var color2 = ChromaAnimation.getRGB(0, 255, 0); //green

        //integer number of times to transition during animation
        var speed = 2;

        // loop over all frames in the layer
        for (var frameId = 0; frameId < frameCount; ++frameId) {

            //Math.cos gives a smooth 1 to 0 to 1 curve
            var t = Math.abs(Math.cos(speed * Math.PI * (frameId + 1) / frameCount));

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
    var baseLayer = 'animations/Trails_Keyboard.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

        // play the animation on the dynamic canvas
        displayAndPlayAnimation(baseLayer, "ShowEffect16");

        showEffect16ChromaLink.onclick(); //show next device
    });
};

showEffect16ChromaLink.onclick = function () {
    exampleReset();

    // start with a blank animation
    var baseLayer = 'animations/Trails_ChromaLink.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

        // play the animation on the dynamic canvas
        displayAndPlayAnimation(baseLayer, "ShowEffect16");

        showEffect16Headset.onclick(); //show next device
    });
};

showEffect16Headset.onclick = function () {
    exampleReset();

    // start with a blank animation
    var baseLayer = 'animations/Trails_Headset.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

        // play the animation on the dynamic canvas
        displayAndPlayAnimation(baseLayer, "ShowEffect16");

        showEffect16Mousepad.onclick(); //show next device
    });
};

showEffect16Mousepad.onclick = function () {
    exampleReset();

    // start with a blank animation
    var baseLayer = 'animations/Trails_Mousepad.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

        // play the animation on the dynamic canvas
        displayAndPlayAnimation(baseLayer, "ShowEffect16");

        showEffect16Mouse.onclick(); //show next device
    });
};

showEffect16Mouse.onclick = function () {
    exampleReset();

    // start with a blank animation
    var baseLayer = 'animations/Trails_Mouse.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

        // play the animation on the dynamic canvas
        displayAndPlayAnimation(baseLayer, "ShowEffect16");

        showEffect16Keypad.onclick(); //show next device
    });
};

showEffect16Keypad.onclick = function () {
    exampleReset();

    // start with a blank animation
    var baseLayer = 'animations/Trails_Keypad.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

        // play the animation on the dynamic canvas
        displayAndPlayAnimation(baseLayer, "ShowEffect16");
    });
};

showEffect17.onclick = function () {
    exampleReset();
    handleButtonClick(showEffect17);

    // start with a blank animation
    var baseLayer = 'animations/Trails_Keyboard.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

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
    var baseLayer = 'animations/Trails_ChromaLink.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

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
    var baseLayer = 'animations/Trails_Headset.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

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
    var baseLayer = 'animations/Trails_Mousepad.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

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
    var baseLayer = 'animations/Trails_Mouse.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

        var frameCount = ChromaAnimation.getFrameCount(baseLayer);

        // loop over all frames in the layer
        for (var frameId = 0; frameId < frameCount; ++frameId) {

            var threshold = 100;

            // give color to the layer
            ChromaAnimation.fillThresholdColorsRGB(baseLayer, frameId, threshold, 255, 0, 0);
        }

        // play the animation on the dynamic canvas
        displayAndPlayAnimation(baseLayer, "ShowEffect17");

        showEffect17Keypad.onclick(); //show next device
    });
};

showEffect17Keypad.onclick = function () {
    exampleReset();

    // start with a blank animation
    var baseLayer = 'animations/Trails_Keypad.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

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
    var baseLayer = 'animations/Trails_Keyboard.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

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
    var baseLayer = 'animations/Trails_ChromaLink.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

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
    var baseLayer = 'animations/Trails_Headset.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

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
    var baseLayer = 'animations/Trails_Mousepad.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

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
    var baseLayer = 'animations/Trails_Mouse.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

        var threshold = 50;
        ChromaAnimation.fillThresholdColorsAllFramesRGB(baseLayer, threshold, 0, 64, 0); //dark green

        // play the animation on the dynamic canvas
        displayAndPlayAnimation(baseLayer, "ShowEffect18");

        showEffect18Keypad.onclick(); //show next device
    });
};

showEffect18Keypad.onclick = function () {
    exampleReset();

    // start with a blank animation
    var baseLayer = 'animations/Trails_Keypad.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

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
    var baseLayer = 'animations/Trails_Keyboard.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

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
    var baseLayer = 'animations/Trails_ChromaLink.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

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
    var baseLayer = 'animations/Trails_Headset.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

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
    var baseLayer = 'animations/Trails_Mousepad.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

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
    var baseLayer = 'animations/Trails_Mouse.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

        var minThreshold = 50; //dark cyan
        var maxThreshold = 150; //purple
        ChromaAnimation.fillThresholdColorsMinMaxAllFramesRGB(baseLayer, minThreshold, 0, 63, 63, maxThreshold, 127, 0, 127);

        // play the animation on the dynamic canvas
        displayAndPlayAnimation(baseLayer, "ShowEffect19");

        showEffect19Keypad.onclick(); //show next device
    });
};

showEffect19Keypad.onclick = function () {
    exampleReset();

    // start with a blank animation
    var baseLayer = 'animations/Trails_Keypad.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

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
    var baseLayer = 'animations/Arc3_Keyboard.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

        // play the animation on the dynamic canvas
        displayAndPlayAnimation(baseLayer, "ShowEffect20");

        showEffect20ChromaLink.onclick(); //show next device
    });
};

showEffect20ChromaLink.onclick = function () {
    exampleReset();

    // start with a blank animation
    var baseLayer = 'animations/Arc3_ChromaLink.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

        // play the animation on the dynamic canvas
        displayAndPlayAnimation(baseLayer, "ShowEffect20");

        showEffect20Headset.onclick(); //show next device
    });
};

showEffect20Headset.onclick = function () {
    exampleReset();

    // start with a blank animation
    var baseLayer = 'animations/Arc3_Headset.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

        // play the animation on the dynamic canvas
        displayAndPlayAnimation(baseLayer, "ShowEffect20");

        showEffect20Mousepad.onclick(); //show next device
    });
};

showEffect20Mousepad.onclick = function () {
    exampleReset();

    // start with a blank animation
    var baseLayer = 'animations/Arc3_Mousepad.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

        // play the animation on the dynamic canvas
        displayAndPlayAnimation(baseLayer, "ShowEffect20");

        showEffect20Mouse.onclick(); //show next device
    });
};

showEffect20Mouse.onclick = function () {
    exampleReset();

    // start with a blank animation
    var baseLayer = 'animations/Arc3_Mouse.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

        // play the animation on the dynamic canvas
        displayAndPlayAnimation(baseLayer, "ShowEffect20");

        showEffect20Keypad.onclick(); //show next device
    });
};

showEffect20Keypad.onclick = function () {
    exampleReset();

    // start with a blank animation
    var baseLayer = 'animations/Arc3_Keypad.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

        // play the animation on the dynamic canvas
        displayAndPlayAnimation(baseLayer, "ShowEffect20");
    });
};

showEffect21.onclick = function () {
    exampleReset();
    handleButtonClick(showEffect21);

    // start with a blank animation
    var baseLayer = '../ChromaCommon/animations/Blank_Keyboard.chroma';
    var layer2 = 'animations/Arc3_Keyboard.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);
    ChromaAnimation.closeAnimation(layer2);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {
        ChromaAnimation.openAnimation(layer2, function (layer2Animation) {

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
    var layer2 = 'animations/Arc3_ChromaLink.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);
    ChromaAnimation.closeAnimation(layer2);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {
        ChromaAnimation.openAnimation(layer2, function (layer2Animation) {

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
    var layer2 = 'animations/Arc3_Headset.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);
    ChromaAnimation.closeAnimation(layer2);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {
        ChromaAnimation.openAnimation(layer2, function (layer2Animation) {

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
    var layer2 = 'animations/Arc3_Mousepad.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);
    ChromaAnimation.closeAnimation(layer2);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {
        ChromaAnimation.openAnimation(layer2, function (layer2Animation) {

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
    var layer2 = 'animations/Arc3_Mouse.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);
    ChromaAnimation.closeAnimation(layer2);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {
        ChromaAnimation.openAnimation(layer2, function (layer2Animation) {

            var background = ChromaAnimation.getRGB(127, 0, 0);

            var frameCount = ChromaAnimation.getFrameCount(layer2);
            ChromaAnimation.makeBlankFrames(baseLayer, frameCount, 0.033, background);

            // copy non zero colors from layer 2 to the base layer
            ChromaAnimation.copyNonZeroAllKeysAllFrames(layer2, baseLayer);

            // play the animation on the dynamic canvas
            displayAndPlayAnimation(baseLayer, "ShowEffect21");

            showEffect21Keypad.onclick(); //show next device
        });
    });
};

showEffect21Keypad.onclick = function () {
    exampleReset();

    // start with a blank animation
    var baseLayer = '../ChromaCommon/animations/Blank_Keypad.chroma';
    var layer2 = 'animations/Arc3_Keypad.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);
    ChromaAnimation.closeAnimation(layer2);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {
        ChromaAnimation.openAnimation(layer2, function (layer2Animation) {

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
    var layer2 = 'animations/Arc3_Keyboard.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);
    ChromaAnimation.closeAnimation(layer2);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {
        ChromaAnimation.openAnimation(layer2, function (layer2Animation) {

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
    var layer2 = 'animations/Arc3_ChromaLink.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);
    ChromaAnimation.closeAnimation(layer2);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {
        ChromaAnimation.openAnimation(layer2, function (layer2Animation) {

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
    var layer2 = 'animations/Arc3_Headset.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);
    ChromaAnimation.closeAnimation(layer2);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {
        ChromaAnimation.openAnimation(layer2, function (layer2Animation) {

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
    var layer2 = 'animations/Arc3_Mousepad.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);
    ChromaAnimation.closeAnimation(layer2);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {
        ChromaAnimation.openAnimation(layer2, function (layer2Animation) {

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
    var layer2 = 'animations/Arc3_Mouse.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);
    ChromaAnimation.closeAnimation(layer2);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {
        ChromaAnimation.openAnimation(layer2, function (layer2Animation) {

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

            showEffect22Keypad.onclick(); //show next device
        });
    });
};

showEffect22Keypad.onclick = function () {
    exampleReset();

    // start with a blank animation
    var baseLayer = '../ChromaCommon/animations/Blank_Keypad.chroma';
    var layer2 = 'animations/Arc3_Keypad.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);
    ChromaAnimation.closeAnimation(layer2);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {
        ChromaAnimation.openAnimation(layer2, function (layer2Animation) {

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
    var layer2 = 'animations/Arc3_Keyboard.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);
    ChromaAnimation.closeAnimation(layer2);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {
        ChromaAnimation.openAnimation(layer2, function (layer2Animation) {

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
    var layer2 = 'animations/Arc3_ChromaLink.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);
    ChromaAnimation.closeAnimation(layer2);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {
        ChromaAnimation.openAnimation(layer2, function (layer2Animation) {

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
    var layer2 = 'animations/Arc3_Headset.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);
    ChromaAnimation.closeAnimation(layer2);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {
        ChromaAnimation.openAnimation(layer2, function (layer2Animation) {

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
    var layer2 = 'animations/Arc3_Mousepad.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);
    ChromaAnimation.closeAnimation(layer2);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {
        ChromaAnimation.openAnimation(layer2, function (layer2Animation) {

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
    var layer2 = 'animations/Arc3_Mouse.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);
    ChromaAnimation.closeAnimation(layer2);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {
        ChromaAnimation.openAnimation(layer2, function (layer2Animation) {

            var frameCount = ChromaAnimation.getFrameCount(layer2);

            // setup background color on the base layer
            var background = ChromaAnimation.getRGB(127, 0, 0);
            ChromaAnimation.makeBlankFrames(baseLayer, frameCount, 0.033, background);

            // Add non zero colors from layer 2 to the base layer
            ChromaAnimation.addNonZeroAllKeysAllFrames(layer2, baseLayer);

            // play the animation on the dynamic canvas
            displayAndPlayAnimation(baseLayer, "ShowEffect23");

            showEffect23Keypad.onclick();
        });
    });
};

showEffect23Keypad.onclick = function () {
    exampleReset();

    // start with a blank animation
    var baseLayer = '../ChromaCommon/animations/Blank_Keypad.chroma';
    var layer2 = 'animations/Arc3_Keypad.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);
    ChromaAnimation.closeAnimation(layer2);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {
        ChromaAnimation.openAnimation(layer2, function (layer2Animation) {

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
    var layer2 = 'animations/Arc3_Keyboard.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);
    ChromaAnimation.closeAnimation(layer2);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {
        ChromaAnimation.openAnimation(layer2, function (layer2Animation) {

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
    var layer2 = 'animations/Arc3_ChromaLink.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);
    ChromaAnimation.closeAnimation(layer2);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {
        ChromaAnimation.openAnimation(layer2, function (layer2Animation) {

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
    var layer2 = 'animations/Arc3_Headset.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);
    ChromaAnimation.closeAnimation(layer2);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {
        ChromaAnimation.openAnimation(layer2, function (layer2Animation) {

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
    var layer2 = 'animations/Arc3_Mousepad.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);
    ChromaAnimation.closeAnimation(layer2);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {
        ChromaAnimation.openAnimation(layer2, function (layer2Animation) {

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
    var layer2 = 'animations/Arc3_Mouse.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);
    ChromaAnimation.closeAnimation(layer2);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {
        ChromaAnimation.openAnimation(layer2, function (layer2Animation) {

            var frameCount = ChromaAnimation.getFrameCount(layer2);

            // setup background color on the base layer
            var background = ChromaAnimation.getRGB(127, 0, 0);
            ChromaAnimation.makeBlankFrames(baseLayer, frameCount, 0.033, background);

            // Add non zero colors from layer 2 to the base layer
            ChromaAnimation.subtractNonZeroAllKeysAllFrames(layer2, baseLayer);

            // play the animation on the dynamic canvas
            displayAndPlayAnimation(baseLayer, "ShowEffect24");

            showEffect24Keypad.onclick(); //show next device
        });
    });
};

showEffect24Keypad.onclick = function () {
    exampleReset();

    // start with a blank animation
    var baseLayer = '../ChromaCommon/animations/Blank_Keypad.chroma';
    var layer2 = 'animations/Arc3_Keypad.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);
    ChromaAnimation.closeAnimation(layer2);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {
        ChromaAnimation.openAnimation(layer2, function (layer2Animation) {

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
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {
        ChromaAnimation.openAnimation(layer2, function (layer2Animation) {

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

    var baseLayer = 'animations/Rainbow_ChromaLink.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

        // set animation playback to 30 FPS
        ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);

        // play the animation on the dynamic canvas
        displayAndPlayAnimation(baseLayer, "ShowEffect25");

        showEffect25Headset.onclick(); //show next device
    });
};

showEffect25Headset.onclick = function () {
    exampleReset();

    var baseLayer = 'animations/Rainbow_Headset.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

        // set animation playback to 30 FPS
        ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);

        // play the animation on the dynamic canvas
        displayAndPlayAnimation(baseLayer, "ShowEffect25");

        showEffect25Mousepad.onclick(); //show next device
    });
};

showEffect25Mousepad.onclick = function () {
    exampleReset();

    var baseLayer = 'animations/Rainbow_Mousepad.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

        // set animation playback to 30 FPS
        ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);

        // play the animation on the dynamic canvas
        displayAndPlayAnimation(baseLayer, "ShowEffect25");

        showEffect25Mouse.onclick(); //show next device
    });
};

showEffect25Mouse.onclick = function () {
    exampleReset();

    var baseLayer = 'animations/Rainbow_Mouse.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

        // set animation playback to 30 FPS
        ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);

        // play the animation on the dynamic canvas
        displayAndPlayAnimation(baseLayer, "ShowEffect25");

        showEffect25Keypad.onclick(); //show next device
    });
};

showEffect25Keypad.onclick = function () {
    exampleReset();

    var baseLayer = 'animations/Rainbow_Keypad.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

        // set animation playback to 30 FPS
        ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);

        // play the animation on the dynamic canvas
        displayAndPlayAnimation(baseLayer, "ShowEffect25");
    });
};

showEffect26.onclick = function () {
    exampleReset();
    handleButtonClick(showEffect26);

    // start with a blank animation
    var baseLayer = 'animations/Movement_Keyboard.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

        // play the animation on the dynamic canvas
        displayAndPlayAnimation(baseLayer, "ShowEffect26");

        showEffect26ChromaLink.onclick(); //show next device
    });
};

showEffect26ChromaLink.onclick = function () {
    exampleReset();

    // start with a blank animation
    var baseLayer = 'animations/Movement_ChromaLink.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

        // play the animation on the dynamic canvas
        displayAndPlayAnimation(baseLayer, "ShowEffect26");

        showEffect26Headset.onclick(); //show next device
    });
};

showEffect26Headset.onclick = function () {
    exampleReset();

    // start with a blank animation
    var baseLayer = 'animations/Movement_Headset.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

        // play the animation on the dynamic canvas
        displayAndPlayAnimation(baseLayer, "ShowEffect26");

        showEffect26Mousepad.onclick(); //show next device
    });
};

showEffect26Mousepad.onclick = function () {
    exampleReset();

    // start with a blank animation
    var baseLayer = 'animations/Movement_Mousepad.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

        // play the animation on the dynamic canvas
        displayAndPlayAnimation(baseLayer, "ShowEffect26");

        showEffect26Mouse.onclick(); //show next device
    });
};

showEffect26Mouse.onclick = function () {
    exampleReset();

    // start with a blank animation
    var baseLayer = 'animations/Movement_Mouse.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

        // play the animation on the dynamic canvas
        displayAndPlayAnimation(baseLayer, "ShowEffect26");

        showEffect26Keypad.onclick(); //show next device
    });
};

showEffect26Keypad.onclick = function () {
    exampleReset();

    // start with a blank animation
    var baseLayer = 'animations/Movement_Keypad.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

        // play the animation on the dynamic canvas
        displayAndPlayAnimation(baseLayer, "ShowEffect26");
    });
};

showEffect27.onclick = function () {
    exampleReset();
    handleButtonClick(showEffect27);

    // start with a blank animation
    var baseLayer = 'animations/Movement_Keyboard.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

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
    var baseLayer = 'animations/Movement_ChromaLink.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

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
    var baseLayer = 'animations/Movement_Headset.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

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
    var baseLayer = 'animations/Movement_Mousepad.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

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
    var baseLayer = 'animations/Movement_Mouse.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

        // set animation playback to 30 FPS
        ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);

        // play the animation on the dynamic canvas
        displayAndPlayAnimation(baseLayer, "ShowEffect27");

        showEffect27Keypad.onclick(); //show next device
    });
};

showEffect27Keypad.onclick = function () {
    exampleReset();

    // start with a blank animation
    var baseLayer = 'animations/Movement_Keypad.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

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
    var baseLayer = 'animations/Movement_Keyboard.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

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
    var baseLayer = 'animations/Movement_ChromaLink.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

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
    var baseLayer = 'animations/Movement_Headset.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

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
    var baseLayer = 'animations/Movement_Mousepad.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

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
    var baseLayer = 'animations/Movement_Mouse.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

        // reverse the order of frames
        ChromaAnimation.reverseAllFrames(baseLayer);

        // set animation playback to 30 FPS
        ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);

        // play the animation on the dynamic canvas
        displayAndPlayAnimation(baseLayer, "ShowEffect28");

        showEffect28Keypad.onclick(); //show next device
    });
};

showEffect28Keypad.onclick = function () {
    exampleReset();

    // start with a blank animation
    var baseLayer = 'animations/Movement_Keypad.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

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
    var baseLayer = 'animations/Movement_Keyboard.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

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
    var baseLayer = 'animations/Movement_ChromaLink.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

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
    var baseLayer = 'animations/Movement_Headset.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

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
    var baseLayer = 'animations/Movement_Mousepad.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

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
    var baseLayer = 'animations/Movement_Mouse.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

        // invert all the animation colors
        ChromaAnimation.invertColorsAllFrames(baseLayer);

        // set animation playback to 30 FPS
        ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);

        // play the animation on the dynamic canvas
        displayAndPlayAnimation(baseLayer, "ShowEffect29");

        showEffect29Keypad.onclick(); //show next device
    });
};

showEffect29Keypad.onclick = function () {
    exampleReset();

    // start with a blank animation
    var baseLayer = 'animations/Movement_Keypad.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

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
    var baseLayer = 'animations/Movement_Keyboard.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

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
    var baseLayer = 'animations/Movement_ChromaLink.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

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
    var baseLayer = 'animations/Movement_Headset.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

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
    var baseLayer = 'animations/Movement_Mousepad.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

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
    var baseLayer = 'animations/Movement_Mouse.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

        // duplicate and mirror
        ChromaAnimation.duplicateMirrorFrames(baseLayer);

        // set animation playback to 30 FPS
        ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);

        // play the animation on the dynamic canvas
        displayAndPlayAnimation(baseLayer, "ShowEffect30");

        showEffect30Keypad.onclick(); //show next device
    });
};

showEffect30Keypad.onclick = function () {
    exampleReset();

    // start with a blank animation
    var baseLayer = 'animations/Movement_Keypad.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

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
    var baseLayer = 'animations/Movement_Keyboard.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

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
    var baseLayer = 'animations/Movement_ChromaLink.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

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
    var baseLayer = 'animations/Movement_Headset.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

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
    var baseLayer = 'animations/Movement_Mousepad.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

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
    var baseLayer = 'animations/Movement_Mouse.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

        // insert a pause
        var frameId = 50;
        var delay = 20;
        ChromaAnimation.insertDelay(baseLayer, frameId, delay);

        // set animation playback to 30 FPS
        ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);

        // play the animation on the dynamic canvas
        displayAndPlayAnimation(baseLayer, "ShowEffect31");

        showEffect31Keypad.onclick(); //show next device
    });
};

showEffect31Keypad.onclick = function () {
    exampleReset();

    // start with a blank animation
    var baseLayer = 'animations/Movement_Keypad.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

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
    var baseLayer = 'animations/Movement_Keyboard.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

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
    var baseLayer = 'animations/Movement_ChromaLink.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

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
    var baseLayer = 'animations/Movement_Headset.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

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
    var baseLayer = 'animations/Movement_Mousepad.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

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
    var baseLayer = 'animations/Movement_Mouse.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

        // reduce half of the frames, remove every 2nd frame
        ChromaAnimation.reduceFrames(baseLayer, 2);

        // set animation playback to 30 FPS
        ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);

        // play the animation on the dynamic canvas
        displayAndPlayAnimation(baseLayer, "ShowEffect32");

        showEffect32Keypad.onclick(); //show next device
    });
};

showEffect32Keypad.onclick = function () {
    exampleReset();

    // start with a blank animation
    var baseLayer = 'animations/Movement_Keypad.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

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
    var baseLayer = 'animations/Movement_Keyboard.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

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
    var baseLayer = 'animations/Movement_ChromaLink.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

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
    var baseLayer = 'animations/Movement_Headset.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

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
    var baseLayer = 'animations/Movement_Mousepad.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

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
    var baseLayer = 'animations/Movement_Mouse.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

        // double the number of the frames
        ChromaAnimation.duplicateFrames(baseLayer);

        // set animation playback to 30 FPS
        ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);

        // play the animation on the dynamic canvas
        displayAndPlayAnimation(baseLayer, "ShowEffect33");

        showEffect33Keypad.onclick(); //show next device
    });
};

showEffect33Keypad.onclick = function () {
    exampleReset();

    // start with a blank animation
    var baseLayer = 'animations/Movement_Keypad.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

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
    var baseLayer = 'animations/Movement_Keyboard.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

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
    var baseLayer = 'animations/Movement_ChromaLink.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

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
    var baseLayer = 'animations/Movement_Headset.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

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
    var baseLayer = 'animations/Movement_Mousepad.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

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
    var baseLayer = 'animations/Movement_Mouse.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

        // trim the start of the animation, so it starts at frame 10
        ChromaAnimation.trimStartFrames(baseLayer, 10);

        // set animation playback to 30 FPS
        ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);

        // play the animation on the dynamic canvas
        displayAndPlayAnimation(baseLayer, "ShowEffect34");

        showEffect34Keypad.onclick(); //show next device
    });
};

showEffect34Keypad.onclick = function () {
    exampleReset();

    // start with a blank animation
    var baseLayer = 'animations/Movement_Keypad.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

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
    var baseLayer = 'animations/Movement_Keyboard.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

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
    var baseLayer = 'animations/Movement_ChromaLink.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

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
    var baseLayer = 'animations/Movement_Headset.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

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
    var baseLayer = 'animations/Movement_Mousepad.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

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
    var baseLayer = 'animations/Movement_Mouse.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

        // trim the start of the animation, so it starts at frame 10
        ChromaAnimation.trimStartFrames(baseLayer, 10);

        // trim the end of the animation
        ChromaAnimation.trimEndFrames(baseLayer, 75);

        // set animation playback to 30 FPS
        ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);

        // play the animation on the dynamic canvas
        displayAndPlayAnimation(baseLayer, "ShowEffect35");

        showEffect35Keypad.onclick(); //show next device
    });
};

showEffect35Keypad.onclick = function () {
    exampleReset();

    // start with a blank animation
    var baseLayer = 'animations/Movement_Keypad.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

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
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

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
    var baseLayer = '../ChromaCommon/animations/Blank_ChromaLink.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

        // green
        ChromaAnimation.fillZeroColorAllFramesRGB(baseLayer, 0, 255, 0);

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
    var baseLayer = '../ChromaCommon/animations/Blank_Headset.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

        // green
        ChromaAnimation.fillZeroColorAllFramesRGB(baseLayer, 0, 255, 0);

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
    var baseLayer = '../ChromaCommon/animations/Blank_Mousepad.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

        // green
        ChromaAnimation.fillZeroColorAllFramesRGB(baseLayer, 0, 255, 0);

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
    var baseLayer = '../ChromaCommon/animations/Blank_Mouse.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

        // green
        ChromaAnimation.fillZeroColorAllFramesRGB(baseLayer, 0, 255, 0);

        var frameCount = 20;
        ChromaAnimation.duplicateFirstFrame(baseLayer, frameCount);

        // set animation playback to 30 FPS
        ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);

        // play the animation on the dynamic canvas
        displayAndPlayAnimation(baseLayer, "ShowEffect36");

        showEffect36Keypad.onclick(); //show next device
    });
};

showEffect36Keypad.onclick = function () {
    exampleReset();

    // start with a blank animation
    var baseLayer = '../ChromaCommon/animations/Blank_Keypad.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

        // green
        ChromaAnimation.fillZeroColorAllFramesRGB(baseLayer, 0, 255, 0);

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
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

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
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

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
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

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
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

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
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

        var frameCount = 20;

        // Start with blank frames set to 30FPS
        ChromaAnimation.makeBlankFrames(baseLayer, frameCount, 0.033, 0);

        // Fill all frames with black and white static
        ChromaAnimation.fillRandomColorsBlackAndWhiteAllFrames(baseLayer);

        // slow down the random frames so it can be seen
        ChromaAnimation.duplicateFrames(baseLayer);

        // play the animation on the dynamic canvas
        displayAndPlayAnimation(baseLayer, "ShowEffect37");

        showEffect37Keypad.onclick(); //show next device
    });
};

showEffect37Keypad.onclick = function () {
    exampleReset();

    // start with a blank animation
    var baseLayer = '../ChromaCommon/animations/Blank_Keypad.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

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
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

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
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

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
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

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
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

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
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

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

        showEffect38Keypad.onclick(); //show next device
    });
};

showEffect38Keypad.onclick = function () {
    exampleReset();

    // start with a blank animation
    var baseLayer = '../ChromaCommon/animations/Blank_Keypad.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

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
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

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
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

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
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

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
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

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
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

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

        showEffect39Keypad.onclick(); //show next device
    });
}

showEffect39Keypad.onclick = function () {
    exampleReset();

    // start with a blank animation
    var baseLayer = '../ChromaCommon/animations/Blank_Keypad.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

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
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

        // Transition from green to red and then stop
        var frameCount = 30;
        ChromaAnimation.makeBlankFramesRGB(baseLayer, frameCount, 0.1, 255, 255, 255);
        var color1 = ChromaAnimation.getRGB(0, 255, 0);
        var color2 = ChromaAnimation.getRGB(255, 0, 0);
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
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

        // Transition from green to red and then stop
        var frameCount = 30;
        ChromaAnimation.makeBlankFramesRGB(baseLayer, frameCount, 0.1, 255, 255, 255);
        var color1 = ChromaAnimation.getRGB(0, 255, 0);
        var color2 = ChromaAnimation.getRGB(255, 0, 0);
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
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

        // Transition from green to red and then stop
        var frameCount = 30;
        ChromaAnimation.makeBlankFramesRGB(baseLayer, frameCount, 0.1, 255, 255, 255);
        var color1 = ChromaAnimation.getRGB(0, 255, 0);
        var color2 = ChromaAnimation.getRGB(255, 0, 0);
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
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

        // Transition from green to red and then stop
        var frameCount = 30;
        ChromaAnimation.makeBlankFramesRGB(baseLayer, frameCount, 0.1, 255, 255, 255);
        var color1 = ChromaAnimation.getRGB(0, 255, 0);
        var color2 = ChromaAnimation.getRGB(255, 0, 0);
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
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

        // Transition from green to red and then stop
        var frameCount = 30;
        ChromaAnimation.makeBlankFramesRGB(baseLayer, frameCount, 0.1, 255, 255, 255);
        var color1 = ChromaAnimation.getRGB(0, 255, 0);
        var color2 = ChromaAnimation.getRGB(255, 0, 0);
        ChromaAnimation.multiplyColorLerpAllFrames(baseLayer, color1, color2);

        // play the animation on the dynamic canvas
        displayAndPlayAnimation(baseLayer, "ShowEffect40", false);

        showEffect40Keypad.onclick(); //show next device
    });
};

showEffect40Keypad.onclick = function () {
    exampleReset(true);

    // start with a blank animation
    var baseLayer = '../ChromaCommon/animations/Blank_Keypad.chroma';
    var idleAnimation = '../ChromaCommon/animations/BlackAndWhiteRainbow_Keypad.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);
    ChromaAnimation.closeAnimation(idleAnimation);

    // Set idle animation
    ChromaAnimation.setIdleAnimation(idleAnimation);

    // Enable idle animation
    ChromaAnimation.useIdleAnimation(EChromaSDKDeviceEnum.DE_Mouse, true);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

        // Transition from green to red and then stop
        var frameCount = 30;
        ChromaAnimation.makeBlankFramesRGB(baseLayer, frameCount, 0.1, 255, 255, 255);
        var color1 = ChromaAnimation.getRGB(0, 255, 0);
        var color2 = ChromaAnimation.getRGB(255, 0, 0);
        ChromaAnimation.multiplyColorLerpAllFrames(baseLayer, color1, color2);

        // play the animation on the dynamic canvas
        displayAndPlayAnimation(baseLayer, "ShowEffect40", false);
    });
};

showEffect41.onclick = function () {
    exampleReset();
    handleButtonClick(showEffect41);

    // start with a blank animation
    var baseLayer = '../ChromaCommon/animations/Blank_Keyboard.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

        // the length of the animation
        var frameCount = 50;

        // set all frames to white, with all frames set to 30FPS
        ChromaAnimation.makeBlankFramesRGB(baseLayer, frameCount, 0.033, 64, 0, 64);

        var maxRow = ChromaAnimation.getMaxRow(EChromaSDKDevice2DEnum.DE_Keyboard);
        var maxColumn = ChromaAnimation.getMaxColumn(EChromaSDKDevice2DEnum.DE_Keyboard);

        var startColumn = Math.floor(Math.random() * maxColumn) % 22;
        var startRow = Math.floor(Math.random() * maxRow) % 6;

        var color = ChromaAnimation.getRGB(0, 255, 0);
        var radius = 0;
        var speed = 25 / frameCount;
        var lineWidth = 2;

        for (var frameIndex = 0; frameIndex < frameCount; ++frameIndex) {
            var stroke = radius;
            for (var t = 0; t < lineWidth; ++t) {
                for (var i = 0; i < 360; ++i) {
                    var angle = i * Math.PI / 180;
                    var r = Math.floor(startRow + stroke * Math.sin(angle));
                    var c = Math.floor(startColumn + stroke * Math.cos(angle));
                    if (r >= 0 && r < maxRow &&
                        c >= 0 && c < maxColumn) {
                        var key = (r << 8) | c;
                        ChromaAnimation.setKeyColor(baseLayer, frameIndex, key, color);
                    }
                }
                stroke += speed;
            }
            radius += speed;
        }

        // play at top speed
        ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);

        // play the animation on the dynamic canvas
        displayAndPlayAnimation(baseLayer, "ShowEffect41");

        showEffect41ChromaLink.onclick(); //show next device
    });
};
showEffect41ChromaLink.onclick = function () {
    exampleReset();

    // start with a blank animation
    var baseLayer = '../ChromaCommon/animations/Blank_ChromaLink.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

        // the length of the animation
        var frameCount = 50;

        // solid color
        ChromaAnimation.makeBlankFramesRGB(baseLayer, frameCount, 0.033, 64, 255, 64);

        // play the animation on the dynamic canvas
        displayAndPlayAnimation(baseLayer, "ShowEffect41");

        showEffect41Headset.onclick(); //show next device
    });
};
showEffect41Headset.onclick = function () {
    exampleReset();

    // start with a blank animation
    var baseLayer = '../ChromaCommon/animations/Blank_Headset.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

        // the length of the animation
        var frameCount = 50;

        // solid color
        ChromaAnimation.makeBlankFramesRGB(baseLayer, frameCount, 0.033, 64, 255, 64);

        // play the animation on the dynamic canvas
        displayAndPlayAnimation(baseLayer, "ShowEffect41");

        showEffect41Mousepad.onclick(); //show next device
    });
};
showEffect41Mousepad.onclick = function () {
    exampleReset();

    // start with a blank animation
    var baseLayer = '../ChromaCommon/animations/Blank_Mousepad.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

        // the length of the animation
        var frameCount = 50;

        // solid color
        ChromaAnimation.makeBlankFramesRGB(baseLayer, frameCount, 0.033, 64, 255, 64);

        // play the animation on the dynamic canvas
        displayAndPlayAnimation(baseLayer, "ShowEffect41");

        showEffect41Mouse.onclick(); //show next device
    });
};
showEffect41Mouse.onclick = function () {
    exampleReset();

    // start with a blank animation
    var baseLayer = '../ChromaCommon/animations/Blank_Mouse.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

        // the length of the animation
        var frameCount = 50;

        // solid color
        ChromaAnimation.makeBlankFramesRGB(baseLayer, frameCount, 0.033, 64, 255, 64);

        // play the animation on the dynamic canvas
        displayAndPlayAnimation(baseLayer, "ShowEffect41");

        showEffect41Keypad.onclick(); //show next device
    });
};
showEffect41Keypad.onclick = function () {
    exampleReset();

    // start with a blank animation
    var baseLayer = '../ChromaCommon/animations/Blank_Keypad.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

        // the length of the animation
        var frameCount = 50;

        // solid color
        ChromaAnimation.makeBlankFramesRGB(baseLayer, frameCount, 0.033, 64, 255, 64);

        // play the animation on the dynamic canvas
        displayAndPlayAnimation(baseLayer, "ShowEffect41");
    });
};


showEffect42.onclick = function () {
    exampleReset();
    handleButtonClick(showEffect42);

    // start with a blank animation
    var baseLayer = '../ChromaCommon/animations/Blank_Keyboard.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

        // the length of the animation
        var frameCount = 1;

        // set all frames to white, with all frames set to 30FPS
        ChromaAnimation.makeBlankFramesRGB(baseLayer, frameCount, 0.033, 64, 0, 64);

        var maxRow = ChromaAnimation.getMaxRow(EChromaSDKDevice2DEnum.DE_Keyboard);
        var maxColumn = ChromaAnimation.getMaxColumn(EChromaSDKDevice2DEnum.DE_Keyboard);

        // pick first key
        var pointAColumn = Math.floor(Math.random() * maxColumn) % 22;
        var pointARow = Math.floor(Math.random() * maxRow) % 6;

        // pick a different second key
        var pointBColumn;
        var pointBRow;
        do {
            pointBColumn = Math.floor(Math.random() * maxColumn) % 22;
            pointBRow = Math.floor(Math.random() * maxRow) % 6;
        } while (pointAColumn == pointBColumn && pointARow == pointBRow);

        var color = ChromaAnimation.getRGB(0, 255, 0);

        var frameIndex = 0;
        for (var i = 0.0; i <= 1.0; i += 0.04) { // 1.0/22.0
            var r = Math.floor(ChromaAnimation.lerp(pointARow, pointBRow, i));
            var c = Math.floor(ChromaAnimation.lerp(pointAColumn, pointBColumn, i));
            if (r >= 0 && r < maxRow &&
                c >= 0 && c < maxColumn) {
                var key = (r << 8) | c;
                ChromaAnimation.setKeyColor(baseLayer, frameIndex, key, color);
            }
        }

        // play at top speed
        ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);

        // play the animation on the dynamic canvas
        displayAndPlayAnimation(baseLayer, "ShowEffect42");

        showEffect42ChromaLink.onclick(); //show next device
    });
};
showEffect42ChromaLink.onclick = function () {
    exampleReset();

    // start with a blank animation
    var baseLayer = '../ChromaCommon/animations/Blank_ChromaLink.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

        // the length of the animation
        var frameCount = 50;

        // solid color
        ChromaAnimation.makeBlankFramesRGB(baseLayer, frameCount, 0.033, 64, 255, 64);

        // play the animation on the dynamic canvas
        displayAndPlayAnimation(baseLayer, "ShowEffect42");

        showEffect42Headset.onclick(); //show next device
    });
};
showEffect42Headset.onclick = function () {
    exampleReset();

    // start with a blank animation
    var baseLayer = '../ChromaCommon/animations/Blank_Headset.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

        // the length of the animation
        var frameCount = 50;

        // solid color
        ChromaAnimation.makeBlankFramesRGB(baseLayer, frameCount, 0.033, 64, 255, 64);

        // play the animation on the dynamic canvas
        displayAndPlayAnimation(baseLayer, "ShowEffect42");

        showEffect42Mousepad.onclick(); //show next device
    });
};
showEffect42Mousepad.onclick = function () {
    exampleReset();

    // start with a blank animation
    var baseLayer = '../ChromaCommon/animations/Blank_Mousepad.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

        // the length of the animation
        var frameCount = 50;

        // solid color
        ChromaAnimation.makeBlankFramesRGB(baseLayer, frameCount, 0.033, 64, 255, 64);

        // play the animation on the dynamic canvas
        displayAndPlayAnimation(baseLayer, "ShowEffect42");

        showEffect42Mouse.onclick(); //show next device
    });
};
showEffect42Mouse.onclick = function () {
    exampleReset();

    // start with a blank animation
    var baseLayer = '../ChromaCommon/animations/Blank_Mouse.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

        // the length of the animation
        var frameCount = 50;

        // solid color
        ChromaAnimation.makeBlankFramesRGB(baseLayer, frameCount, 0.033, 64, 255, 64);

        // play the animation on the dynamic canvas
        displayAndPlayAnimation(baseLayer, "ShowEffect42");

        showEffect42Keypad.onclick(); //show next device
    });
};

showEffect42Keypad.onclick = function () {
    exampleReset();

    // start with a blank animation
    var baseLayer = '../ChromaCommon/animations/Blank_Keypad.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

        // the length of the animation
        var frameCount = 50;

        // solid color
        ChromaAnimation.makeBlankFramesRGB(baseLayer, frameCount, 0.033, 64, 255, 64);

        // play the animation on the dynamic canvas
        displayAndPlayAnimation(baseLayer, "ShowEffect42");
    });
};

showEffect43.onclick = function () {
    exampleReset();
    handleButtonClick(showEffect43);

    var baseLayer = '../ChromaCommon/animations/BlackAndWhiteRainbow_Keyboard.chroma';
    ChromaAnimation.closeAnimation(baseLayer);
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

        ChromaAnimation.reduceFrames(baseLayer, 2);
        ChromaAnimation.reduceFrames(baseLayer, 2);

        var color1 = ChromaAnimation.getRGB(64, 64, 0);
        var color2 = ChromaAnimation.getRGB(64, 0, 64);
        ChromaAnimation.multiplyTargetColorLerpAllFrames(baseLayer, color1, color2);

        var keys = [];
        keys.push(RZKEY.RZKEY_W);
        keys.push(RZKEY.RZKEY_A);
        keys.push(RZKEY.RZKEY_S);
        keys.push(RZKEY.RZKEY_D);
        keys.push(RZKEY.RZKEY_P);
        keys.push(RZKEY.RZKEY_M);
        keys.push(RZKEY.RZKEY_F1);
        var color = ChromaAnimation.getRGB(0, 255, 0);
        ChromaAnimation.setKeysColorAllFrames(baseLayer, keys, color);


        ChromaAnimation.setChromaCustomFlag(baseLayer, true);
        ChromaAnimation.setChromaCustomColorAllFrames(baseLayer);
        ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);
        displayAndPlayAnimationKeyboard(baseLayer, "ShowEffect43");
        showEffect43ChromaLink.onclick();
    });
};
showEffect43ChromaLink.onclick = function () {
    exampleReset();
    var baseLayer = '../ChromaCommon/animations/BlackAndWhiteRainbow_ChromaLink.chroma';
    ChromaAnimation.closeAnimation(baseLayer);
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

        ChromaAnimation.reduceFrames(baseLayer, 2);
        ChromaAnimation.reduceFrames(baseLayer, 2);

        var color1 = ChromaAnimation.getRGB(64, 64, 0);
        var color2 = ChromaAnimation.getRGB(64, 0, 64);
        ChromaAnimation.multiplyTargetColorLerpAllFrames(baseLayer, color1, color2);

        ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);
        displayAndPlayAnimationChromaLink(baseLayer, "ShowEffect43");
        showEffect43Headset.onclick();
    });
}
showEffect43Headset.onclick = function () {
    exampleReset();
    var baseLayer = '../ChromaCommon/animations/BlackAndWhiteRainbow_Headset.chroma';
    ChromaAnimation.closeAnimation(baseLayer);
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

        ChromaAnimation.reduceFrames(baseLayer, 2);
        ChromaAnimation.reduceFrames(baseLayer, 2);

        var color1 = ChromaAnimation.getRGB(64, 64, 0);
        var color2 = ChromaAnimation.getRGB(64, 0, 64);
        ChromaAnimation.multiplyTargetColorLerpAllFrames(baseLayer, color1, color2);

        ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);
        displayAndPlayAnimationHeadset(baseLayer, "ShowEffect43");
        showEffect43Mousepad.onclick();
    });
}
showEffect43Mousepad.onclick = function () {
    exampleReset();
    var baseLayer = '../ChromaCommon/animations/BlackAndWhiteRainbow_Mousepad.chroma';
    ChromaAnimation.closeAnimation(baseLayer);
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

        ChromaAnimation.reduceFrames(baseLayer, 2);
        ChromaAnimation.reduceFrames(baseLayer, 2);

        var color1 = ChromaAnimation.getRGB(64, 64, 0);
        var color2 = ChromaAnimation.getRGB(64, 0, 64);
        ChromaAnimation.multiplyTargetColorLerpAllFrames(baseLayer, color1, color2);

        ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);
        displayAndPlayAnimation(baseLayer, "ShowEffect43");
        showEffect43Mouse.onclick();
    });
}
showEffect43Mouse.onclick = function () {
    exampleReset();
    var baseLayer = '../ChromaCommon/animations/BlackAndWhiteRainbow_Mouse.chroma';
    ChromaAnimation.closeAnimation(baseLayer);
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

        ChromaAnimation.reduceFrames(baseLayer, 2);
        ChromaAnimation.reduceFrames(baseLayer, 2);

        var color1 = ChromaAnimation.getRGB(64, 64, 0);
        var color2 = ChromaAnimation.getRGB(64, 0, 64);
        ChromaAnimation.multiplyTargetColorLerpAllFrames(baseLayer, color1, color2);

        ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);
        displayAndPlayAnimation(baseLayer, "ShowEffect43");

        showEffect43Keypad.onclick(); //show next device
    });
}
showEffect43Keypad.onclick = function () {
    exampleReset();
    var baseLayer = '../ChromaCommon/animations/BlackAndWhiteRainbow_Keypad.chroma';
    ChromaAnimation.closeAnimation(baseLayer);
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

        ChromaAnimation.reduceFrames(baseLayer, 2);
        ChromaAnimation.reduceFrames(baseLayer, 2);

        var color1 = ChromaAnimation.getRGB(64, 64, 0);
        var color2 = ChromaAnimation.getRGB(64, 0, 64);
        ChromaAnimation.multiplyTargetColorLerpAllFrames(baseLayer, color1, color2);

        ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);
        displayAndPlayAnimation(baseLayer, "ShowEffect43");
    });
}

showEffect44.onclick = function () {
    exampleReset();
    handleButtonClick(showEffect44);

    var baseLayer = '../ChromaCommon/animations/Spiral_Keyboard.chroma';
    var layer2 = 'animations/Rainbow_Keyboard.chroma';
    ChromaAnimation.closeAnimation(baseLayer);
    ChromaAnimation.closeAnimation(layer2);
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {
        ChromaAnimation.openAnimation(layer2, function (layer2Animation) {

            var color1 = ChromaAnimation.getRGB(32, 32, 32);
            var color2 = ChromaAnimation.getRGB(64, 64, 64);
            ChromaAnimation.multiplyTargetColorLerpAllFrames(baseLayer, color1, color2);

            var keys = [];
            keys.push(RZKEY.RZKEY_W);
            keys.push(RZKEY.RZKEY_A);
            keys.push(RZKEY.RZKEY_S);
            keys.push(RZKEY.RZKEY_D);
            keys.push(RZKEY.RZKEY_P);
            keys.push(RZKEY.RZKEY_M);
            keys.push(RZKEY.RZKEY_F1);
            ChromaAnimation.copyKeysColorAllFrames(layer2, baseLayer, keys);


            ChromaAnimation.setChromaCustomFlag(baseLayer, true);
            ChromaAnimation.setChromaCustomColorAllFrames(baseLayer);
            ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);
            displayAndPlayAnimationKeyboard(baseLayer, "ShowEffect44");
            showEffect44ChromaLink.onclick();
        });
    });
};
showEffect44ChromaLink.onclick = function () {
    exampleReset();
    var baseLayer = '../ChromaCommon/animations/BlackAndWhiteRainbow_ChromaLink.chroma';
    ChromaAnimation.closeAnimation(baseLayer);
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

        ChromaAnimation.reduceFrames(baseLayer, 2);
        ChromaAnimation.reduceFrames(baseLayer, 2);

        var color1 = ChromaAnimation.getRGB(32, 32, 32);
        var color2 = ChromaAnimation.getRGB(64, 64, 64);
        ChromaAnimation.multiplyTargetColorLerpAllFrames(baseLayer, color1, color2);

        ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);
        displayAndPlayAnimationChromaLink(baseLayer, "ShowEffect44");
        showEffect44Headset.onclick();
    });
}
showEffect44Headset.onclick = function () {
    exampleReset();
    var baseLayer = '../ChromaCommon/animations/BlackAndWhiteRainbow_Headset.chroma';
    ChromaAnimation.closeAnimation(baseLayer);
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

        ChromaAnimation.reduceFrames(baseLayer, 2);
        ChromaAnimation.reduceFrames(baseLayer, 2);

        var color1 = ChromaAnimation.getRGB(32, 32, 32);
        var color2 = ChromaAnimation.getRGB(64, 64, 64);
        ChromaAnimation.multiplyTargetColorLerpAllFrames(baseLayer, color1, color2);

        ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);
        displayAndPlayAnimationHeadset(baseLayer, "ShowEffect44");
        showEffect44Mousepad.onclick();
    });
}
showEffect44Mousepad.onclick = function () {
    exampleReset();
    var baseLayer = '../ChromaCommon/animations/BlackAndWhiteRainbow_Mousepad.chroma';
    ChromaAnimation.closeAnimation(baseLayer);
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

        ChromaAnimation.reduceFrames(baseLayer, 2);
        ChromaAnimation.reduceFrames(baseLayer, 2);

        var color1 = ChromaAnimation.getRGB(32, 32, 32);
        var color2 = ChromaAnimation.getRGB(64, 64, 64);
        ChromaAnimation.multiplyTargetColorLerpAllFrames(baseLayer, color1, color2);

        ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);
        displayAndPlayAnimation(baseLayer, "ShowEffect44");
        showEffect44Mouse.onclick();
    });
}
showEffect44Mouse.onclick = function () {
    exampleReset();
    var baseLayer = '../ChromaCommon/animations/BlackAndWhiteRainbow_Mouse.chroma';
    ChromaAnimation.closeAnimation(baseLayer);
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

        ChromaAnimation.reduceFrames(baseLayer, 2);
        ChromaAnimation.reduceFrames(baseLayer, 2);

        var color1 = ChromaAnimation.getRGB(32, 32, 32);
        var color2 = ChromaAnimation.getRGB(64, 64, 64);
        ChromaAnimation.multiplyTargetColorLerpAllFrames(baseLayer, color1, color2);

        ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);
        displayAndPlayAnimation(baseLayer, "ShowEffect44");

        showEffect44Keypad.onclick(); //show next device
    });
}
showEffect44Keypad.onclick = function () {
    exampleReset();
    var baseLayer = '../ChromaCommon/animations/BlackAndWhiteRainbow_Keypad.chroma';
    ChromaAnimation.closeAnimation(baseLayer);
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

        ChromaAnimation.reduceFrames(baseLayer, 2);
        ChromaAnimation.reduceFrames(baseLayer, 2);

        var color1 = ChromaAnimation.getRGB(32, 32, 32);
        var color2 = ChromaAnimation.getRGB(64, 64, 64);
        ChromaAnimation.multiplyTargetColorLerpAllFrames(baseLayer, color1, color2);

        ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);
        displayAndPlayAnimation(baseLayer, "ShowEffect44");
    });
}

showEffect45.onclick = function () {
    exampleReset();
    handleButtonClick(showEffect45);

    var baseLayer = '../ChromaCommon/animations/Blank_Keyboard.chroma';
    ChromaAnimation.closeAnimation(baseLayer);
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

        var frameCount = 120;
        ChromaAnimation.makeBlankFramesRGB(baseLayer, frameCount, 0.1, 64, 64, 64);

        var keys = [];
        keys.push(RZKEY.RZKEY_W);
        keys.push(RZKEY.RZKEY_A);
        keys.push(RZKEY.RZKEY_S);
        keys.push(RZKEY.RZKEY_D);
        ChromaAnimation.setKeysColorAllFramesRGB(baseLayer, keys, 255, 255, 0);

        var keys = [];
        keys.push(RZKEY.RZKEY_F1);
        keys.push(RZKEY.RZKEY_F2);
        keys.push(RZKEY.RZKEY_F3);
        keys.push(RZKEY.RZKEY_F4);
        keys.push(RZKEY.RZKEY_F5);
        keys.push(RZKEY.RZKEY_F6);

        var t = 0;
        var speed = 0.05;
        for (var frameId = 0; frameId < frameCount; ++frameId) {
            t += speed;
            var hp = Math.abs(Math.cos(Math.PI / 2 + t));

            for (var i = 0; i < keys.length; ++i) {
                var ratio = (i + 1) / keys.length;
                var color = ChromaAnimation.getRGB(0, 255 * (1 - hp), 0);
                if ((i + 1) / (keys.length + 1) < hp) {
                    color = ChromaAnimation.getRGB(0, 255, 0);
                } else {
                    color = ChromaAnimation.getRGB(0, 100, 0);
                }
                var key = keys[i];
                ChromaAnimation.setKeyColor(baseLayer, frameId, key, color);
            }
        }

        ChromaAnimation.setChromaCustomFlag(baseLayer, true);
        ChromaAnimation.setChromaCustomColorAllFrames(baseLayer);
        ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);
        displayAndPlayAnimationKeyboard(baseLayer, "ShowEffect45");
        showEffect45ChromaLink.onclick();
    });
};
showEffect45ChromaLink.onclick = function () {
    exampleReset();
    var baseLayer = '../ChromaCommon/animations/Blank_ChromaLink.chroma';
    ChromaAnimation.closeAnimation(baseLayer);
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

        var frameCount = 50;
        ChromaAnimation.makeBlankFramesRGB(baseLayer, frameCount, 0.1, 255, 255, 255);

        ChromaAnimation.fadeStartFrames(baseLayer, frameCount / 2);
        ChromaAnimation.fadeEndFrames(baseLayer, frameCount / 2);

        var color1 = ChromaAnimation.getRGB(0, 64, 0);
        var color2 = ChromaAnimation.getRGB(0, 255, 0);
        ChromaAnimation.multiplyTargetColorLerpAllFrames(baseLayer, color1, color2);

        ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);

        displayAndPlayAnimationChromaLink(baseLayer, "ShowEffect45");
        showEffect45Headset.onclick();
    });
}
showEffect45Headset.onclick = function () {
    exampleReset();
    var baseLayer = '../ChromaCommon/animations/Blank_Headset.chroma';
    ChromaAnimation.closeAnimation(baseLayer);
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

        var frameCount = 50;
        ChromaAnimation.makeBlankFramesRGB(baseLayer, frameCount, 0.1, 255, 255, 255);

        ChromaAnimation.fadeStartFrames(baseLayer, frameCount / 2);
        ChromaAnimation.fadeEndFrames(baseLayer, frameCount / 2);

        var color1 = ChromaAnimation.getRGB(0, 64, 0);
        var color2 = ChromaAnimation.getRGB(0, 255, 0);
        ChromaAnimation.multiplyTargetColorLerpAllFrames(baseLayer, color1, color2);

        ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);

        displayAndPlayAnimationHeadset(baseLayer, "ShowEffect45");
        showEffect45Mousepad.onclick();
    });
}
showEffect45Mousepad.onclick = function () {
    exampleReset();
    var baseLayer = '../ChromaCommon/animations/Blank_Mousepad.chroma';
    ChromaAnimation.closeAnimation(baseLayer);
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

        var frameCount = 50;
        ChromaAnimation.makeBlankFramesRGB(baseLayer, frameCount, 0.1, 255, 255, 255);

        ChromaAnimation.fadeStartFrames(baseLayer, frameCount / 2);
        ChromaAnimation.fadeEndFrames(baseLayer, frameCount / 2);

        var color1 = ChromaAnimation.getRGB(0, 64, 0);
        var color2 = ChromaAnimation.getRGB(0, 255, 0);
        ChromaAnimation.multiplyTargetColorLerpAllFrames(baseLayer, color1, color2);

        ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);

        displayAndPlayAnimation(baseLayer, "ShowEffect45");
        showEffect45Mouse.onclick();
    });
}
showEffect45Mouse.onclick = function () {
    exampleReset();
    var baseLayer = '../ChromaCommon/animations/Blank_Mouse.chroma';
    ChromaAnimation.closeAnimation(baseLayer);
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

        var frameCount = 50;
        ChromaAnimation.makeBlankFramesRGB(baseLayer, frameCount, 0.1, 255, 255, 255);

        ChromaAnimation.fadeStartFrames(baseLayer, frameCount / 2);
        ChromaAnimation.fadeEndFrames(baseLayer, frameCount / 2);

        var color1 = ChromaAnimation.getRGB(0, 64, 0);
        var color2 = ChromaAnimation.getRGB(0, 255, 0);
        ChromaAnimation.multiplyTargetColorLerpAllFrames(baseLayer, color1, color2);

        ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);

        displayAndPlayAnimation(baseLayer, "ShowEffect45");

        showEffect45Keypad.onclick(); //show next device
    });
}
showEffect45Keypad.onclick = function () {
    exampleReset();
    var baseLayer = '../ChromaCommon/animations/Blank_Keypad.chroma';
    ChromaAnimation.closeAnimation(baseLayer);
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

        var frameCount = 50;
        ChromaAnimation.makeBlankFramesRGB(baseLayer, frameCount, 0.1, 255, 255, 255);

        ChromaAnimation.fadeStartFrames(baseLayer, frameCount / 2);
        ChromaAnimation.fadeEndFrames(baseLayer, frameCount / 2);

        var color1 = ChromaAnimation.getRGB(0, 64, 0);
        var color2 = ChromaAnimation.getRGB(0, 255, 0);
        ChromaAnimation.multiplyTargetColorLerpAllFrames(baseLayer, color1, color2);

        ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);

        displayAndPlayAnimation(baseLayer, "ShowEffect45");
    });
}

showEffect46.onclick = function () {
    exampleReset();
    handleButtonClick(showEffect46);

    var baseLayer = '../ChromaCommon/animations/Blank_Keyboard.chroma';
    ChromaAnimation.closeAnimation(baseLayer);
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

        var frameCount = 120;
        ChromaAnimation.makeBlankFramesRGB(baseLayer, frameCount, 0.1, 64, 64, 64);

        var keys = [];
        keys.push(RZKEY.RZKEY_W);
        keys.push(RZKEY.RZKEY_A);
        keys.push(RZKEY.RZKEY_S);
        keys.push(RZKEY.RZKEY_D);
        ChromaAnimation.setKeysColorAllFramesRGB(baseLayer, keys, 255, 0, 0);

        var keys = [];
        keys.push(RZKEY.RZKEY_F7);
        keys.push(RZKEY.RZKEY_F8);
        keys.push(RZKEY.RZKEY_F9);
        keys.push(RZKEY.RZKEY_F10);
        keys.push(RZKEY.RZKEY_F11);
        keys.push(RZKEY.RZKEY_F12);

        var t = 0;
        var speed = 0.05;
        for (var frameId = 0; frameId < frameCount; ++frameId) {
            t += speed;
            var hp = Math.abs(Math.cos(Math.PI / 2 + t));

            for (var i = 0; i < keys.length; ++i) {
                var ratio = (i + 1) / keys.length;
                var color = ChromaAnimation.getRGB(255 * (1 - hp), 255 * (1 - hp), 0);
                if ((i + 1) / (keys.length + 1) < hp) {
                    color = ChromaAnimation.getRGB(255, 255, 0);
                } else {
                    color = ChromaAnimation.getRGB(100, 100, 0);
                }
                var key = keys[i];
                ChromaAnimation.setKeyColor(baseLayer, frameId, key, color);
            }
        }

        ChromaAnimation.setChromaCustomFlag(baseLayer, true);
        ChromaAnimation.setChromaCustomColorAllFrames(baseLayer);
        ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);
        displayAndPlayAnimationKeyboard(baseLayer, "ShowEffect46");
        showEffect46ChromaLink.onclick();
    });
};
showEffect46ChromaLink.onclick = function () {
    exampleReset();
    var baseLayer = '../ChromaCommon/animations/Blank_ChromaLink.chroma';
    ChromaAnimation.closeAnimation(baseLayer);
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

        var frameCount = 50;
        ChromaAnimation.makeBlankFramesRGB(baseLayer, frameCount, 0.1, 255, 255, 255);

        ChromaAnimation.fadeStartFrames(baseLayer, frameCount / 2);
        ChromaAnimation.fadeEndFrames(baseLayer, frameCount / 2);

        var color1 = ChromaAnimation.getRGB(64, 64, 0);
        var color2 = ChromaAnimation.getRGB(255, 255, 0);
        ChromaAnimation.multiplyTargetColorLerpAllFrames(baseLayer, color1, color2);

        ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);

        displayAndPlayAnimationChromaLink(baseLayer, "ShowEffect46");
        showEffect46Headset.onclick();
    });
}
showEffect46Headset.onclick = function () {
    exampleReset();
    var baseLayer = '../ChromaCommon/animations/Blank_Headset.chroma';
    ChromaAnimation.closeAnimation(baseLayer);
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

        var frameCount = 50;
        ChromaAnimation.makeBlankFramesRGB(baseLayer, frameCount, 0.1, 255, 255, 255);

        ChromaAnimation.fadeStartFrames(baseLayer, frameCount / 2);
        ChromaAnimation.fadeEndFrames(baseLayer, frameCount / 2);

        var color1 = ChromaAnimation.getRGB(64, 64, 0);
        var color2 = ChromaAnimation.getRGB(255, 255, 0);
        ChromaAnimation.multiplyTargetColorLerpAllFrames(baseLayer, color1, color2);

        ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);

        displayAndPlayAnimationHeadset(baseLayer, "ShowEffect46");
        showEffect46Mousepad.onclick();
    });
}
showEffect46Mousepad.onclick = function () {
    exampleReset();
    var baseLayer = '../ChromaCommon/animations/Blank_Mousepad.chroma';
    ChromaAnimation.closeAnimation(baseLayer);
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

        var frameCount = 50;
        ChromaAnimation.makeBlankFramesRGB(baseLayer, frameCount, 0.1, 255, 255, 255);

        ChromaAnimation.fadeStartFrames(baseLayer, frameCount / 2);
        ChromaAnimation.fadeEndFrames(baseLayer, frameCount / 2);

        var color1 = ChromaAnimation.getRGB(64, 64, 0);
        var color2 = ChromaAnimation.getRGB(255, 255, 0);
        ChromaAnimation.multiplyTargetColorLerpAllFrames(baseLayer, color1, color2);

        ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);

        displayAndPlayAnimation(baseLayer, "ShowEffect46");
        showEffect46Mouse.onclick();
    });
}
showEffect46Mouse.onclick = function () {
    exampleReset();
    var baseLayer = '../ChromaCommon/animations/Blank_Mouse.chroma';
    ChromaAnimation.closeAnimation(baseLayer);
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

        var frameCount = 50;
        ChromaAnimation.makeBlankFramesRGB(baseLayer, frameCount, 0.1, 255, 255, 255);

        ChromaAnimation.fadeStartFrames(baseLayer, frameCount / 2);
        ChromaAnimation.fadeEndFrames(baseLayer, frameCount / 2);

        var color1 = ChromaAnimation.getRGB(64, 64, 0);
        var color2 = ChromaAnimation.getRGB(255, 255, 0);
        ChromaAnimation.multiplyTargetColorLerpAllFrames(baseLayer, color1, color2);

        ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);

        displayAndPlayAnimation(baseLayer, "ShowEffect46");

        showEffect46Keypad.onclick(); //show next device
    });
}
showEffect46Keypad.onclick = function () {
    exampleReset();
    var baseLayer = '../ChromaCommon/animations/Blank_Keypad.chroma';
    ChromaAnimation.closeAnimation(baseLayer);
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

        var frameCount = 50;
        ChromaAnimation.makeBlankFramesRGB(baseLayer, frameCount, 0.1, 255, 255, 255);

        ChromaAnimation.fadeStartFrames(baseLayer, frameCount / 2);
        ChromaAnimation.fadeEndFrames(baseLayer, frameCount / 2);

        var color1 = ChromaAnimation.getRGB(64, 64, 0);
        var color2 = ChromaAnimation.getRGB(255, 255, 0);
        ChromaAnimation.multiplyTargetColorLerpAllFrames(baseLayer, color1, color2);

        ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);

        displayAndPlayAnimation(baseLayer, "ShowEffect46");
    });
}

showEffect47.onclick = function () {
    exampleReset();
    handleButtonClick(showEffect47);

    let EMBED_Sample_Keyboard = [1, 0, 0, 0, 1, 0, 26, 0, 0, 0, 205, 204, 204, 61, 0, 0, 0, 0, 33, 37, 40, 0, 0, 0, 0, 0, 40, 41, 45, 0, 217, 221, 220, 0, 226, 226, 227, 0, 36, 39, 44, 0, 41, 44, 49, 0, 20, 25, 29, 0, 24, 28, 31, 0, 21, 26, 32, 0, 35, 43, 46, 0, 8, 154, 117, 0, 23, 147, 117, 0, 21, 144, 116, 0, 21, 139, 115, 0, 21, 135, 112, 0, 20, 131, 112, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 30, 35, 38, 0, 34, 38, 41, 0, 36, 36, 38, 0, 212, 217, 213, 0, 208, 210, 207, 0, 55, 56, 58, 0, 38, 41, 46, 0, 25, 30, 34, 0, 13, 16, 21, 0, 26, 29, 36, 0, 25, 30, 36, 0, 33, 38, 44, 0, 13, 162, 119, 0, 22, 149, 119, 0, 23, 143, 118, 0, 20, 138, 114, 0, 18, 134, 113, 0, 20, 128, 112, 0, 17, 125, 109, 0, 19, 121, 108, 0, 19, 116, 105, 0, 0, 0, 0, 0, 32, 36, 39, 0, 22, 23, 27, 0, 40, 40, 42, 0, 199, 207, 204, 0, 186, 192, 192, 0, 41, 43, 49, 0, 10, 13, 18, 0, 16, 17, 22, 0, 29, 32, 37, 0, 39, 44, 50, 0, 42, 47, 53, 0, 45, 50, 54, 0, 22, 157, 117, 0, 22, 151, 118, 0, 21, 146, 116, 0, 23, 141, 115, 0, 20, 138, 114, 0, 18, 131, 111, 0, 18, 127, 108, 0, 17, 122, 107, 0, 18, 120, 107, 0, 0, 0, 0, 0, 24, 28, 29, 0, 22, 23, 27, 0, 30, 31, 35, 0, 211, 245, 159, 0, 204, 232, 149, 0, 13, 12, 17, 0, 17, 16, 22, 0, 17, 18, 23, 0, 15, 20, 24, 0, 11, 16, 22, 0, 52, 57, 63, 0, 23, 163, 122, 0, 0, 0, 0, 0, 23, 157, 120, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21, 134, 114, 0, 19, 130, 111, 0, 19, 126, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 38, 43, 45, 0, 0, 0, 0, 0, 34, 38, 39, 0, 159, 211, 78, 0, 131, 179, 123, 0, 138, 201, 53, 0, 12, 16, 19, 0, 12, 13, 18, 0, 27, 31, 38, 0, 28, 33, 37, 0, 26, 31, 37, 0, 26, 169, 125, 0, 0, 0, 0, 0, 24, 160, 120, 0, 0, 0, 0, 0, 22, 147, 117, 0, 0, 0, 0, 0, 19, 136, 110, 0, 19, 132, 112, 0, 19, 128, 109, 0, 17, 124, 108, 0, 0, 0, 0, 0, 53, 71, 42, 0, 201, 230, 130, 0, 133, 190, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 22, 26, 29, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 40, 45, 51, 0, 28, 170, 122, 0, 25, 166, 123, 0, 25, 160, 120, 0, 23, 154, 120, 0, 22, 149, 119, 0, 20, 143, 114, 0, 0, 0, 0, 0, 21, 137, 114, 0, 18, 129, 110, 0, 0, 0, 0, 0, 205, 204, 204, 61, 0, 0, 0, 0, 224, 250, 168, 0, 0, 0, 0, 0, 23, 27, 30, 0, 197, 198, 200, 0, 216, 217, 219, 0, 88, 89, 91, 0, 30, 33, 38, 0, 33, 36, 41, 0, 22, 25, 30, 0, 28, 31, 36, 0, 38, 43, 49, 0, 43, 48, 52, 0, 22, 149, 119, 0, 21, 146, 116, 0, 21, 141, 113, 0, 21, 139, 115, 0, 20, 134, 111, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 177, 221, 104, 0, 34, 38, 40, 0, 26, 30, 34, 0, 161, 162, 164, 0, 194, 199, 198, 0, 197, 198, 193, 0, 38, 39, 41, 0, 27, 31, 35, 0, 30, 33, 38, 0, 25, 28, 33, 0, 27, 30, 36, 0, 37, 42, 48, 0, 45, 51, 57, 0, 23, 153, 119, 0, 22, 146, 117, 0, 22, 141, 115, 0, 20, 137, 114, 0, 20, 132, 112, 0, 19, 128, 111, 0, 18, 125, 109, 0, 19, 121, 108, 0, 0, 0, 0, 0, 68, 121, 14, 0, 27, 28, 33, 0, 32, 36, 39, 0, 209, 210, 214, 0, 200, 206, 206, 0, 188, 194, 194, 0, 19, 22, 26, 0, 29, 32, 37, 0, 34, 37, 42, 0, 27, 30, 35, 0, 37, 42, 48, 0, 45, 50, 56, 0, 35, 158, 122, 0, 24, 156, 119, 0, 22, 149, 119, 0, 21, 146, 116, 0, 22, 140, 114, 0, 20, 136, 113, 0, 18, 131, 111, 0, 20, 127, 111, 0, 19, 124, 109, 0, 0, 0, 0, 0, 158, 224, 58, 0, 22, 23, 27, 0, 18, 19, 23, 0, 33, 37, 39, 0, 224, 246, 173, 0, 188, 217, 126, 0, 29, 30, 34, 0, 17, 18, 23, 0, 23, 24, 29, 0, 24, 29, 33, 0, 38, 43, 49, 0, 55, 58, 65, 0, 0, 0, 0, 0, 24, 160, 120, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 138, 114, 0, 20, 133, 113, 0, 19, 130, 111, 0, 0, 0, 0, 0, 0, 0, 0, 0, 196, 233, 116, 0, 0, 0, 0, 0, 22, 26, 27, 0, 15, 19, 29, 0, 203, 237, 147, 0, 181, 230, 107, 0, 155, 206, 66, 0, 12, 16, 19, 0, 18, 19, 24, 0, 26, 31, 35, 0, 34, 39, 45, 0, 41, 46, 52, 0, 0, 0, 0, 0, 25, 166, 124, 0, 0, 0, 0, 0, 23, 151, 118, 0, 0, 0, 0, 0, 22, 140, 116, 0, 21, 137, 114, 0, 20, 131, 112, 0, 20, 129, 110, 0, 0, 0, 0, 0, 29, 34, 42, 0, 171, 208, 84, 0, 192, 224, 104, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 7, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 31, 36, 40, 0, 35, 40, 46, 0, 27, 168, 125, 0, 24, 165, 123, 0, 23, 157, 120, 0, 22, 153, 119, 0, 23, 148, 118, 0, 0, 0, 0, 0, 22, 140, 116, 0, 20, 133, 113, 0, 0, 0, 0, 0, 205, 204, 204, 61, 0, 0, 0, 0, 38, 41, 46, 0, 0, 0, 0, 0, 31, 35, 38, 0, 25, 29, 32, 0, 217, 218, 220, 0, 223, 225, 224, 0, 9, 13, 16, 0, 36, 39, 44, 0, 34, 37, 42, 0, 28, 33, 37, 0, 32, 37, 43, 0, 38, 43, 49, 0, 41, 44, 49, 0, 24, 149, 119, 0, 22, 145, 117, 0, 21, 141, 114, 0, 20, 138, 114, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 61, 62, 65, 0, 157, 206, 76, 0, 28, 32, 35, 0, 20, 23, 27, 0, 207, 208, 211, 0, 223, 225, 224, 0, 219, 221, 215, 0, 37, 38, 40, 0, 10, 14, 19, 0, 28, 31, 36, 0, 29, 32, 37, 0, 34, 39, 45, 0, 30, 35, 41, 0, 46, 145, 119, 0, 22, 150, 118, 0, 22, 146, 117, 0, 21, 139, 114, 0, 20, 136, 114, 0, 20, 132, 112, 0, 18, 128, 110, 0, 18, 123, 108, 0, 0, 0, 0, 0, 17, 32, 4, 0, 13, 14, 12, 0, 26, 30, 33, 0, 21, 25, 28, 0, 177, 178, 182, 0, 207, 213, 213, 0, 198, 204, 204, 0, 7, 9, 24, 0, 34, 39, 43, 0, 38, 41, 46, 0, 19, 22, 27, 0, 27, 32, 38, 0, 42, 47, 53, 0, 24, 159, 119, 0, 23, 153, 119, 0, 22, 149, 119, 0, 22, 145, 116, 0, 22, 140, 116, 0, 21, 135, 112, 0, 18, 131, 111, 0, 20, 127, 111, 0, 0, 0, 0, 0, 26, 30, 40, 0, 17, 22, 22, 0, 26, 27, 31, 0, 26, 27, 31, 0, 26, 30, 32, 0, 212, 232, 156, 0, 222, 244, 160, 0, 29, 30, 34, 0, 0, 0, 5, 0, 21, 22, 27, 0, 22, 27, 31, 0, 35, 40, 46, 0, 0, 0, 0, 0, 27, 161, 122, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 22, 142, 115, 0, 20, 138, 114, 0, 20, 133, 113, 0, 0, 0, 0, 0, 0, 0, 0, 0, 41, 45, 44, 0, 0, 0, 0, 0, 49, 51, 41, 0, 20, 24, 25, 0, 18, 22, 23, 0, 185, 226, 122, 0, 192, 228, 119, 0, 174, 218, 96, 0, 19, 22, 27, 0, 25, 26, 31, 0, 27, 32, 36, 0, 38, 43, 49, 0, 0, 0, 0, 0, 24, 167, 123, 0, 0, 0, 0, 0, 23, 154, 120, 0, 0, 0, 0, 0, 22, 145, 117, 0, 22, 140, 116, 0, 18, 134, 111, 0, 19, 132, 112, 0, 0, 0, 0, 0, 32, 33, 37, 0, 6, 5, 3, 0, 165, 200, 76, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 131, 187, 52, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36, 39, 44, 0, 29, 34, 38, 0, 41, 46, 52, 0, 26, 167, 124, 0, 26, 161, 121, 0, 23, 157, 120, 0, 23, 153, 119, 0, 0, 0, 0, 0, 20, 143, 114, 0, 21, 137, 114, 0, 0, 0, 0, 0, 205, 204, 204, 61, 0, 0, 0, 0, 52, 57, 61, 0, 0, 0, 0, 0, 224, 250, 168, 0, 36, 40, 43, 0, 19, 23, 26, 0, 247, 248, 250, 0, 229, 229, 229, 0, 42, 46, 49, 0, 28, 31, 36, 0, 36, 39, 44, 0, 26, 29, 34, 0, 34, 39, 45, 0, 41, 46, 52, 0, 34, 39, 43, 0, 25, 147, 119, 0, 22, 145, 117, 0, 21, 141, 114, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 37, 41, 46, 0, 24, 27, 16, 0, 177, 221, 104, 0, 33, 37, 40, 0, 20, 24, 28, 0, 237, 238, 241, 0, 209, 214, 213, 0, 197, 198, 193, 0, 38, 39, 41, 0, 27, 31, 35, 0, 30, 33, 38, 0, 30, 33, 38, 0, 38, 41, 48, 0, 41, 46, 52, 0, 25, 152, 120, 0, 22, 150, 118, 0, 22, 146, 117, 0, 20, 139, 113, 0, 20, 136, 114, 0, 20, 132, 112, 0, 20, 128, 110, 0, 0, 0, 0, 0, 30, 38, 40, 0, 203, 228, 125, 0, 25, 28, 26, 0, 21, 22, 27, 0, 27, 31, 34, 0, 216, 217, 221, 0, 206, 212, 212, 0, 188, 194, 194, 0, 19, 22, 26, 0, 29, 32, 37, 0, 34, 37, 42, 0, 28, 31, 36, 0, 26, 31, 37, 0, 43, 54, 56, 0, 23, 158, 118, 0, 23, 153, 119, 0, 22, 149, 119, 0, 21, 144, 115, 0, 22, 140, 116, 0, 20, 136, 113, 0, 19, 132, 112, 0, 0, 0, 0, 0, 46, 51, 54, 0, 187, 226, 95, 0, 35, 40, 41, 0, 30, 31, 35, 0, 23, 24, 28, 0, 26, 30, 32, 0, 219, 239, 172, 0, 188, 217, 126, 0, 29, 30, 34, 0, 17, 18, 23, 0, 23, 24, 29, 0, 18, 23, 27, 0, 0, 0, 0, 0, 40, 45, 51, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 22, 145, 116, 0, 22, 142, 115, 0, 20, 138, 114, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 37, 40, 0, 0, 0, 0, 0, 193, 224, 105, 0, 44, 43, 26, 0, 14, 18, 19, 0, 15, 19, 28, 0, 204, 241, 146, 0, 181, 230, 107, 0, 155, 206, 66, 0, 12, 16, 19, 0, 18, 19, 24, 0, 39, 44, 48, 0, 0, 0, 0, 0, 42, 47, 53, 0, 0, 0, 0, 0, 24, 160, 122, 0, 0, 0, 0, 0, 22, 150, 117, 0, 22, 145, 117, 0, 22, 140, 116, 0, 20, 136, 113, 0, 0, 0, 0, 0, 50, 54, 57, 0, 26, 27, 31, 0, 19, 15, 19, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 145, 222, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 26, 31, 35, 0, 33, 36, 41, 0, 44, 49, 53, 0, 51, 52, 57, 0, 25, 166, 123, 0, 26, 161, 121, 0, 23, 157, 120, 0, 0, 0, 0, 0, 21, 148, 118, 0, 22, 142, 115, 0, 0, 0, 0, 0, 205, 204, 204, 61, 0, 0, 0, 0, 23, 28, 32, 0, 0, 0, 0, 0, 41, 46, 50, 0, 38, 59, 16, 0, 28, 32, 35, 0, 28, 32, 35, 0, 224, 225, 229, 0, 222, 224, 223, 0, 44, 48, 51, 0, 21, 24, 29, 0, 40, 43, 48, 0, 34, 39, 43, 0, 28, 33, 39, 0, 37, 42, 48, 0, 40, 43, 48, 0, 22, 149, 119, 0, 20, 144, 115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 28, 33, 37, 0, 41, 46, 50, 0, 45, 50, 53, 0, 174, 220, 77, 0, 28, 32, 35, 0, 21, 25, 28, 0, 80, 80, 82, 0, 216, 220, 219, 0, 218, 220, 217, 0, 76, 77, 79, 0, 17, 20, 25, 0, 20, 25, 29, 0, 19, 22, 27, 0, 29, 34, 40, 0, 35, 41, 47, 0, 22, 153, 119, 0, 21, 149, 116, 0, 21, 144, 116, 0, 21, 141, 116, 0, 20, 136, 113, 0, 21, 132, 113, 0, 0, 0, 0, 0, 40, 44, 47, 0, 21, 26, 29, 0, 114, 134, 71, 0, 53, 66, 61, 0, 30, 31, 36, 0, 26, 27, 31, 0, 201, 200, 205, 0, 215, 221, 219, 0, 196, 202, 202, 0, 38, 39, 36, 0, 15, 18, 23, 0, 26, 29, 34, 0, 18, 21, 26, 0, 14, 19, 25, 0, 45, 50, 54, 0, 22, 157, 117, 0, 22, 154, 117, 0, 23, 147, 118, 0, 21, 144, 115, 0, 21, 139, 113, 0, 19, 137, 113, 0, 0, 0, 0, 0, 40, 44, 47, 0, 26, 31, 34, 0, 181, 210, 117, 0, 46, 60, 54, 0, 24, 25, 29, 0, 15, 16, 20, 0, 21, 25, 28, 0, 192, 225, 126, 0, 203, 237, 134, 0, 18, 16, 22, 0, 0, 0, 5, 0, 24, 25, 30, 0, 0, 0, 0, 0, 30, 35, 41, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 22, 152, 118, 0, 22, 147, 117, 0, 23, 142, 114, 0, 0, 0, 0, 0, 0, 0, 0, 0, 34, 38, 41, 0, 0, 0, 0, 0, 19, 24, 28, 0, 172, 203, 73, 0, 34, 38, 29, 0, 23, 27, 28, 0, 14, 19, 22, 0, 194, 232, 133, 0, 90, 153, 25, 0, 142, 205, 55, 0, 6, 10, 13, 0, 8, 9, 14, 0, 0, 0, 0, 0, 28, 33, 37, 0, 0, 0, 0, 0, 24, 163, 122, 0, 0, 0, 0, 0, 23, 153, 119, 0, 21, 149, 116, 0, 20, 145, 115, 0, 22, 142, 115, 0, 0, 0, 0, 0, 33, 37, 40, 0, 32, 36, 39, 0, 29, 30, 34, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 156, 200, 70, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 13, 17, 20, 0, 20, 25, 29, 0, 27, 30, 35, 0, 25, 30, 34, 0, 27, 171, 122, 0, 25, 166, 123, 0, 25, 161, 121, 0, 0, 0, 0, 0, 23, 154, 120, 0, 22, 147, 117, 0, 0, 0, 0, 0, 205, 204, 204, 61, 0, 0, 0, 0, 45, 65, 60, 0, 0, 0, 0, 0, 29, 34, 38, 0, 46, 51, 55, 0, 46, 66, 28, 0, 40, 44, 47, 0, 51, 54, 59, 0, 207, 211, 212, 0, 224, 226, 225, 0, 21, 25, 28, 0, 24, 27, 32, 0, 31, 36, 40, 0, 34, 39, 43, 0, 28, 33, 39, 0, 42, 47, 53, 0, 34, 39, 43, 0, 24, 147, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 43, 52, 51, 0, 36, 41, 45, 0, 22, 27, 31, 0, 31, 37, 35, 0, 175, 225, 86, 0, 25, 29, 32, 0, 29, 32, 37, 0, 108, 108, 110, 0, 223, 227, 226, 0, 211, 213, 210, 0, 56, 57, 59, 0, 23, 26, 31, 0, 21, 24, 29, 0, 24, 27, 32, 0, 39, 44, 50, 0, 32, 37, 43, 0, 24, 151, 121, 0, 23, 148, 118, 0, 21, 144, 116, 0, 21, 141, 116, 0, 22, 136, 113, 0, 0, 0, 0, 0, 35, 40, 43, 0, 33, 37, 40, 0, 30, 35, 38, 0, 214, 237, 147, 0, 41, 51, 43, 0, 28, 29, 34, 0, 22, 26, 29, 0, 226, 226, 231, 0, 205, 211, 211, 0, 198, 204, 204, 0, 36, 39, 26, 0, 26, 29, 34, 0, 25, 28, 33, 0, 28, 31, 36, 0, 38, 43, 49, 0, 46, 47, 52, 0, 23, 158, 118, 0, 23, 151, 118, 0, 23, 147, 119, 0, 21, 144, 115, 0, 22, 140, 114, 0, 0, 0, 0, 0, 38, 43, 46, 0, 47, 51, 54, 0, 42, 47, 50, 0, 202, 241, 115, 0, 38, 44, 41, 0, 25, 26, 30, 0, 17, 18, 22, 0, 20, 24, 27, 0, 210, 243, 166, 0, 200, 236, 130, 0, 15, 14, 19, 0, 11, 11, 17, 0, 0, 0, 0, 0, 29, 34, 38, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 23, 155, 118, 0, 22, 152, 118, 0, 22, 145, 116, 0, 0, 0, 0, 0, 0, 0, 0, 0, 23, 28, 31, 0, 0, 0, 0, 0, 48, 53, 56, 0, 43, 48, 51, 0, 171, 209, 61, 0, 49, 51, 38, 0, 13, 17, 18, 0, 21, 27, 28, 0, 195, 236, 153, 0, 111, 168, 52, 0, 153, 213, 64, 0, 12, 16, 19, 0, 0, 0, 0, 0, 26, 29, 36, 0, 0, 0, 0, 0, 27, 166, 124, 0, 0, 0, 0, 0, 23, 157, 120, 0, 23, 153, 119, 0, 21, 149, 116, 0, 21, 146, 116, 0, 0, 0, 0, 0, 38, 50, 50, 0, 21, 25, 28, 0, 42, 46, 49, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 176, 205, 112, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 124, 155, 75, 0, 18, 22, 25, 0, 25, 30, 34, 0, 32, 35, 40, 0, 35, 40, 46, 0, 28, 170, 122, 0, 25, 166, 123, 0, 0, 0, 0, 0, 24, 159, 119, 0, 22, 150, 117, 0, 0, 0, 0, 0, 205, 204, 204, 61, 0, 0, 0, 0, 55, 112, 93, 0, 0, 0, 0, 0, 58, 61, 66, 0, 38, 43, 47, 0, 21, 25, 31, 0, 230, 254, 178, 0, 29, 33, 36, 0, 41, 45, 48, 0, 210, 216, 214, 0, 206, 206, 207, 0, 33, 36, 41, 0, 29, 32, 37, 0, 25, 30, 34, 0, 38, 39, 44, 0, 32, 37, 43, 0, 35, 40, 46, 0, 40, 51, 53, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 58, 96, 83, 0, 58, 64, 64, 0, 26, 31, 35, 0, 26, 31, 35, 0, 32, 32, 44, 0, 182, 224, 122, 0, 25, 29, 32, 0, 27, 30, 35, 0, 207, 208, 212, 0, 222, 226, 225, 0, 234, 236, 231, 0, 34, 35, 37, 0, 32, 37, 41, 0, 28, 31, 36, 0, 36, 41, 47, 0, 34, 39, 45, 0, 44, 49, 55, 0, 22, 152, 118, 0, 22, 147, 117, 0, 23, 143, 116, 0, 20, 140, 115, 0, 0, 0, 0, 0, 49, 70, 64, 0, 42, 45, 49, 0, 35, 39, 43, 0, 57, 61, 64, 0, 192, 221, 121, 0, 6, 15, 1, 0, 23, 27, 30, 0, 21, 23, 27, 0, 175, 177, 182, 0, 195, 203, 202, 0, 194, 200, 197, 0, 18, 19, 20, 0, 24, 28, 33, 0, 27, 31, 35, 0, 12, 17, 23, 0, 35, 40, 46, 0, 61, 143, 121, 0, 23, 155, 119, 0, 21, 150, 118, 0, 22, 146, 117, 0, 22, 145, 116, 0, 0, 0, 0, 0, 33, 42, 44, 0, 34, 38, 41, 0, 54, 58, 61, 0, 32, 37, 40, 0, 156, 219, 54, 0, 23, 25, 22, 0, 25, 26, 30, 0, 22, 23, 27, 0, 22, 27, 30, 0, 191, 221, 168, 0, 201, 230, 137, 0, 27, 28, 32, 0, 0, 0, 0, 0, 6, 7, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 23, 157, 120, 0, 22, 153, 119, 0, 22, 150, 117, 0, 0, 0, 0, 0, 0, 0, 0, 0, 45, 57, 55, 0, 0, 0, 0, 0, 44, 48, 51, 0, 41, 46, 49, 0, 17, 23, 23, 0, 193, 229, 109, 0, 15, 16, 19, 0, 23, 25, 27, 0, 25, 29, 31, 0, 180, 226, 110, 0, 196, 231, 132, 0, 174, 217, 101, 0, 0, 0, 0, 0, 25, 26, 31, 0, 0, 0, 0, 0, 38, 43, 49, 0, 0, 0, 0, 0, 24, 160, 120, 0, 25, 157, 120, 0, 22, 152, 118, 0, 22, 150, 117, 0, 0, 0, 0, 0, 21, 195, 130, 0, 29, 33, 36, 0, 60, 64, 67, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 196, 225, 106, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 124, 190, 44, 0, 0, 2, 11, 0, 10, 15, 19, 0, 38, 43, 47, 0, 34, 39, 45, 0, 42, 47, 53, 0, 23, 171, 123, 0, 0, 0, 0, 0, 25, 161, 121, 0, 24, 156, 119, 0, 0, 0, 0, 0, 205, 204, 204, 61, 0, 0, 0, 0, 29, 165, 125, 0, 0, 0, 0, 0, 49, 61, 59, 0, 49, 52, 57, 0, 36, 41, 45, 0, 26, 32, 38, 0, 32, 36, 39, 0, 34, 38, 41, 0, 31, 32, 36, 0, 222, 226, 225, 0, 76, 80, 83, 0, 57, 60, 65, 0, 29, 32, 37, 0, 20, 28, 31, 0, 30, 33, 38, 0, 31, 36, 42, 0, 42, 47, 53, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21, 173, 124, 0, 49, 80, 72, 0, 66, 72, 72, 0, 29, 34, 38, 0, 23, 28, 31, 0, 30, 31, 35, 0, 59, 68, 65, 0, 20, 21, 25, 0, 31, 34, 39, 0, 198, 201, 206, 0, 211, 213, 210, 0, 220, 222, 217, 0, 19, 23, 26, 0, 22, 27, 31, 0, 34, 37, 44, 0, 30, 35, 41, 0, 45, 50, 56, 0, 23, 151, 118, 0, 21, 151, 117, 0, 23, 146, 117, 0, 22, 142, 115, 0, 0, 0, 0, 0, 29, 177, 127, 0, 36, 48, 48, 0, 41, 44, 49, 0, 53, 56, 61, 0, 32, 36, 37, 0, 186, 226, 105, 0, 18, 28, 27, 0, 23, 27, 30, 0, 34, 35, 39, 0, 196, 200, 208, 0, 187, 196, 194, 0, 191, 196, 192, 0, 29, 30, 34, 0, 24, 27, 32, 0, 26, 29, 34, 0, 39, 44, 50, 0, 35, 40, 46, 0, 25, 157, 120, 0, 24, 155, 121, 0, 22, 149, 119, 0, 22, 147, 116, 0, 0, 0, 0, 0, 29, 181, 130, 0, 36, 47, 47, 0, 37, 41, 44, 0, 49, 53, 56, 0, 2, 5, 1, 0, 139, 213, 50, 0, 27, 32, 28, 0, 15, 16, 20, 0, 21, 22, 26, 0, 30, 34, 37, 0, 164, 186, 165, 0, 192, 218, 143, 0, 0, 0, 0, 0, 14, 14, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 160, 120, 0, 23, 157, 120, 0, 22, 153, 119, 0, 0, 0, 0, 0, 0, 0, 0, 0, 29, 178, 123, 0, 0, 0, 0, 0, 43, 48, 51, 0, 37, 41, 44, 0, 40, 45, 48, 0, 38, 42, 41, 0, 188, 228, 99, 0, 34, 37, 32, 0, 17, 16, 21, 0, 21, 22, 27, 0, 198, 225, 181, 0, 147, 197, 59, 0, 0, 0, 0, 0, 29, 32, 37, 0, 0, 0, 0, 0, 36, 41, 47, 0, 0, 0, 0, 0, 24, 165, 123, 0, 24, 160, 120, 0, 24, 155, 119, 0, 24, 154, 120, 0, 0, 0, 0, 0, 30, 190, 130, 0, 48, 65, 61, 0, 36, 40, 43, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 26, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 210, 47, 0, 154, 209, 76, 0, 13, 17, 20, 0, 16, 19, 24, 0, 43, 46, 51, 0, 29, 34, 40, 0, 39, 44, 50, 0, 0, 0, 0, 0, 23, 164, 121, 0, 23, 158, 118, 0, 0, 0, 0, 0, 205, 204, 204, 61, 0, 0, 0, 0, 24, 163, 122, 0, 0, 0, 0, 0, 73, 128, 110, 0, 39, 55, 52, 0, 72, 77, 81, 0, 41, 46, 50, 0, 23, 28, 30, 0, 34, 38, 41, 0, 26, 29, 32, 0, 41, 43, 47, 0, 227, 229, 226, 0, 65, 69, 72, 0, 25, 29, 34, 0, 45, 48, 53, 0, 32, 37, 41, 0, 22, 26, 30, 0, 37, 42, 48, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 170, 125, 0, 22, 172, 124, 0, 65, 95, 87, 0, 57, 63, 63, 0, 32, 37, 41, 0, 22, 27, 30, 0, 33, 37, 39, 0, 56, 64, 65, 0, 29, 30, 34, 0, 20, 23, 28, 0, 212, 217, 223, 0, 221, 223, 220, 0, 226, 228, 225, 0, 38, 41, 46, 0, 18, 21, 26, 0, 39, 42, 49, 0, 38, 43, 49, 0, 37, 42, 48, 0, 21, 152, 118, 0, 22, 150, 117, 0, 22, 145, 116, 0, 0, 0, 0, 0, 25, 175, 124, 0, 40, 87, 71, 0, 19, 31, 31, 0, 28, 31, 36, 0, 31, 34, 39, 0, 45, 49, 50, 0, 182, 220, 113, 0, 29, 39, 38, 0, 24, 28, 31, 0, 35, 36, 40, 0, 197, 202, 207, 0, 203, 209, 206, 0, 191, 196, 192, 0, 42, 46, 49, 0, 34, 37, 42, 0, 41, 44, 49, 0, 39, 44, 50, 0, 40, 55, 58, 0, 24, 156, 119, 0, 23, 154, 120, 0, 23, 151, 118, 0, 0, 0, 0, 0, 26, 178, 127, 0, 37, 69, 58, 0, 32, 38, 40, 0, 32, 36, 39, 0, 36, 40, 43, 0, 50, 52, 48, 0, 111, 206, 12, 0, 33, 37, 36, 0, 26, 27, 31, 0, 15, 19, 22, 0, 19, 19, 20, 0, 190, 201, 197, 0, 0, 0, 0, 0, 1, 4, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 65, 54, 63, 0, 26, 161, 121, 0, 24, 156, 119, 0, 0, 0, 0, 0, 0, 0, 0, 0, 27, 183, 126, 0, 0, 0, 0, 0, 37, 50, 48, 0, 33, 38, 41, 0, 45, 49, 52, 0, 44, 48, 51, 0, 59, 63, 60, 0, 174, 212, 100, 0, 23, 25, 26, 0, 17, 16, 21, 0, 27, 30, 29, 0, 190, 209, 187, 0, 0, 0, 0, 0, 197, 234, 140, 0, 0, 0, 0, 0, 28, 33, 37, 0, 0, 0, 0, 0, 30, 167, 125, 0, 25, 166, 124, 0, 24, 160, 120, 0, 23, 157, 120, 0, 0, 0, 0, 0, 27, 185, 127, 0, 24, 191, 129, 0, 35, 49, 49, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 47, 50, 55, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 205, 234, 150, 0, 145, 210, 66, 0, 124, 188, 49, 0, 10, 14, 17, 0, 10, 13, 18, 0, 46, 49, 54, 0, 24, 29, 35, 0, 0, 0, 0, 0, 23, 171, 123, 0, 24, 163, 122, 0, 0, 0, 0, 0, 205, 204, 204, 61, 0, 0, 0, 0, 23, 159, 119, 0, 0, 0, 0, 0, 26, 163, 121, 0, 43, 119, 89, 0, 51, 76, 70, 0, 54, 59, 62, 0, 44, 49, 53, 0, 41, 46, 50, 0, 111, 123, 84, 0, 43, 47, 50, 0, 36, 40, 43, 0, 217, 223, 219, 0, 61, 62, 64, 0, 16, 17, 22, 0, 29, 34, 38, 0, 40, 43, 48, 0, 28, 31, 36, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 165, 123, 0, 26, 167, 124, 0, 27, 169, 123, 0, 49, 104, 85, 0, 41, 53, 51, 0, 34, 39, 43, 0, 30, 35, 39, 0, 27, 32, 35, 0, 169, 232, 81, 0, 30, 35, 38, 0, 31, 35, 38, 0, 71, 71, 73, 0, 214, 218, 217, 0, 216, 218, 217, 0, 38, 43, 47, 0, 24, 27, 32, 0, 19, 22, 27, 0, 26, 31, 37, 0, 44, 49, 55, 0, 9, 58, 50, 0, 22, 151, 118, 0, 0, 0, 0, 0, 23, 169, 124, 0, 25, 173, 123, 0, 24, 178, 126, 0, 52, 70, 66, 0, 36, 44, 46, 0, 41, 44, 49, 0, 31, 35, 38, 0, 11, 20, 3, 0, 36, 41, 38, 0, 27, 30, 35, 0, 38, 42, 45, 0, 192, 196, 199, 0, 199, 206, 199, 0, 213, 215, 212, 0, 37, 40, 45, 0, 32, 35, 40, 0, 21, 24, 29, 0, 23, 28, 34, 0, 45, 50, 56, 0, 29, 155, 121, 0, 24, 156, 119, 0, 0, 0, 0, 0, 25, 174, 124, 0, 26, 178, 127, 0, 36, 175, 126, 0, 52, 62, 63, 0, 35, 39, 42, 0, 24, 28, 31, 0, 39, 44, 47, 0, 181, 224, 101, 0, 3, 10, 21, 0, 24, 28, 31, 0, 29, 33, 36, 0, 39, 40, 43, 0, 0, 0, 0, 0, 192, 201, 200, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36, 41, 47, 0, 41, 46, 52, 0, 23, 161, 120, 0, 0, 0, 0, 0, 0, 0, 0, 0, 27, 179, 128, 0, 0, 0, 0, 0, 27, 185, 127, 0, 43, 67, 59, 0, 31, 36, 39, 0, 12, 16, 19, 0, 47, 52, 55, 0, 19, 24, 29, 0, 185, 227, 94, 0, 15, 20, 23, 0, 18, 19, 23, 0, 16, 17, 21, 0, 0, 0, 0, 0, 99, 149, 74, 0, 0, 0, 0, 0, 25, 24, 30, 0, 0, 0, 0, 0, 25, 30, 36, 0, 38, 43, 49, 0, 23, 166, 123, 0, 23, 162, 121, 0, 0, 0, 0, 0, 28, 181, 125, 0, 28, 184, 127, 0, 29, 189, 129, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 33, 37, 40, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21, 23, 21, 0, 166, 205, 115, 0, 155, 223, 75, 0, 144, 211, 65, 0, 10, 14, 17, 0, 24, 27, 32, 0, 28, 31, 36, 0, 0, 0, 0, 0, 33, 38, 44, 0, 26, 167, 124, 0, 0, 0, 0, 0, 205, 204, 204, 61, 0, 0, 0, 0, 23, 154, 120, 0, 0, 0, 0, 0, 24, 160, 120, 0, 23, 162, 121, 0, 24, 167, 123, 0, 51, 119, 96, 0, 60, 72, 72, 0, 56, 61, 65, 0, 55, 60, 64, 0, 36, 41, 45, 0, 24, 28, 31, 0, 33, 34, 38, 0, 33, 37, 40, 0, 220, 222, 221, 0, 43, 46, 51, 0, 44, 49, 53, 0, 29, 30, 35, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 159, 119, 0, 26, 162, 122, 0, 24, 165, 123, 0, 25, 168, 125, 0, 28, 170, 124, 0, 46, 90, 75, 0, 61, 70, 69, 0, 35, 40, 44, 0, 31, 36, 40, 0, 44, 52, 64, 0, 159, 211, 61, 0, 24, 28, 31, 0, 20, 23, 28, 0, 219, 225, 223, 0, 64, 66, 65, 0, 34, 39, 45, 0, 29, 34, 38, 0, 35, 38, 43, 0, 32, 35, 42, 0, 35, 40, 46, 0, 39, 44, 50, 0, 0, 0, 0, 0, 25, 164, 123, 0, 26, 167, 124, 0, 25, 170, 124, 0, 26, 173, 123, 0, 28, 119, 86, 0, 45, 59, 59, 0, 46, 49, 54, 0, 33, 36, 41, 0, 29, 33, 36, 0, 215, 240, 147, 0, 25, 30, 23, 0, 35, 39, 42, 0, 30, 31, 36, 0, 192, 201, 200, 0, 210, 212, 209, 0, 22, 23, 28, 0, 35, 40, 44, 0, 29, 32, 37, 0, 43, 46, 51, 0, 35, 40, 46, 0, 53, 55, 61, 0, 0, 0, 0, 0, 26, 169, 123, 0, 26, 172, 123, 0, 28, 176, 126, 0, 26, 178, 127, 0, 46, 82, 68, 0, 15, 25, 26, 0, 39, 43, 46, 0, 32, 36, 39, 0, 32, 37, 40, 0, 192, 244, 112, 0, 31, 37, 35, 0, 20, 24, 27, 0, 0, 0, 0, 0, 22, 23, 27, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 28, 31, 36, 0, 18, 21, 26, 0, 41, 46, 52, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 173, 125, 0, 0, 0, 0, 0, 25, 177, 126, 0, 27, 180, 126, 0, 26, 184, 126, 0, 55, 65, 64, 0, 40, 44, 47, 0, 38, 42, 45, 0, 48, 52, 55, 0, 67, 66, 68, 0, 152, 207, 58, 0, 21, 23, 25, 0, 0, 0, 0, 0, 22, 26, 29, 0, 0, 0, 0, 0, 73, 99, 51, 0, 0, 0, 0, 0, 24, 25, 30, 0, 18, 23, 27, 0, 27, 32, 38, 0, 3, 38, 31, 0, 0, 0, 0, 0, 27, 175, 127, 0, 27, 179, 128, 0, 25, 184, 128, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 38, 42, 45, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 39, 7, 0, 8, 16, 9, 0, 9, 12, 11, 0, 187, 225, 121, 0, 149, 195, 48, 0, 20, 39, 0, 0, 16, 19, 24, 0, 0, 0, 0, 0, 15, 20, 24, 0, 20, 25, 31, 0, 0, 0, 0, 0, 205, 204, 204, 61, 0, 0, 0, 0, 22, 148, 118, 0, 0, 0, 0, 0, 23, 155, 118, 0, 23, 158, 120, 0, 23, 159, 119, 0, 24, 162, 121, 0, 35, 112, 84, 0, 53, 80, 73, 0, 45, 53, 55, 0, 34, 39, 43, 0, 40, 45, 49, 0, 127, 139, 117, 0, 25, 29, 32, 0, 32, 36, 39, 0, 202, 206, 208, 0, 78, 79, 81, 0, 33, 37, 42, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 23, 153, 117, 0, 23, 157, 120, 0, 23, 159, 119, 0, 23, 164, 122, 0, 25, 166, 123, 0, 26, 169, 126, 0, 53, 168, 129, 0, 63, 90, 83, 0, 39, 44, 48, 0, 43, 48, 52, 0, 43, 48, 51, 0, 24, 30, 27, 0, 20, 22, 19, 0, 21, 24, 29, 0, 218, 223, 219, 0, 220, 222, 219, 0, 16, 17, 22, 0, 25, 30, 34, 0, 19, 22, 27, 0, 32, 35, 40, 0, 35, 40, 46, 0, 0, 0, 0, 0, 26, 158, 121, 0, 23, 162, 121, 0, 24, 165, 122, 0, 26, 169, 125, 0, 28, 171, 125, 0, 23, 173, 125, 0, 47, 85, 72, 0, 41, 49, 51, 0, 42, 45, 50, 0, 32, 35, 40, 0, 2, 5, 6, 0, 192, 233, 128, 0, 25, 30, 30, 0, 29, 33, 36, 0, 207, 216, 212, 0, 213, 215, 213, 0, 85, 86, 88, 0, 30, 33, 38, 0, 36, 39, 44, 0, 33, 36, 41, 0, 22, 27, 33, 0, 0, 0, 0, 0, 25, 161, 121, 0, 26, 167, 124, 0, 27, 170, 124, 0, 25, 173, 123, 0, 26, 177, 126, 0, 29, 178, 126, 0, 38, 58, 52, 0, 35, 39, 42, 0, 34, 38, 41, 0, 47, 52, 55, 0, 42, 49, 41, 0, 168, 220, 103, 0, 0, 0, 0, 0, 29, 30, 34, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 27, 32, 0, 27, 28, 33, 0, 32, 35, 40, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 166, 123, 0, 0, 0, 0, 0, 25, 173, 125, 0, 26, 177, 126, 0, 26, 178, 127, 0, 28, 182, 128, 0, 43, 183, 132, 0, 41, 52, 52, 0, 49, 53, 56, 0, 55, 59, 62, 0, 52, 56, 59, 0, 175, 203, 99, 0, 0, 0, 0, 0, 16, 17, 21, 0, 0, 0, 0, 0, 158, 218, 63, 0, 0, 0, 0, 0, 24, 27, 32, 0, 18, 19, 24, 0, 23, 26, 31, 0, 20, 25, 31, 0, 0, 0, 0, 0, 27, 170, 124, 0, 26, 174, 126, 0, 27, 178, 127, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 27, 188, 128, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 35, 40, 43, 0, 41, 44, 50, 0, 200, 240, 134, 0, 18, 24, 22, 0, 178, 222, 94, 0, 156, 203, 105, 0, 116, 173, 33, 0, 0, 0, 0, 0, 15, 16, 21, 0, 22, 27, 31, 0, 0, 0, 0, 0, 205, 204, 204, 61, 0, 0, 0, 0, 22, 142, 115, 0, 0, 0, 0, 0, 24, 149, 117, 0, 23, 153, 119, 0, 23, 155, 118, 0, 24, 159, 119, 0, 25, 161, 121, 0, 24, 163, 122, 0, 54, 109, 90, 0, 58, 74, 73, 0, 34, 39, 43, 0, 28, 33, 37, 0, 90, 91, 96, 0, 22, 26, 29, 0, 43, 44, 48, 0, 28, 29, 31, 0, 22, 23, 25, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 23, 146, 117, 0, 22, 149, 119, 0, 24, 154, 120, 0, 22, 158, 120, 0, 24, 160, 120, 0, 24, 163, 122, 0, 26, 167, 124, 0, 26, 168, 122, 0, 57, 116, 96, 0, 43, 57, 57, 0, 67, 72, 76, 0, 32, 37, 41, 0, 32, 40, 43, 0, 17, 24, 21, 0, 39, 43, 46, 0, 211, 212, 216, 0, 222, 224, 221, 0, 54, 55, 57, 0, 30, 33, 38, 0, 24, 32, 35, 0, 18, 26, 29, 0, 0, 0, 0, 0, 23, 152, 119, 0, 25, 157, 120, 0, 22, 160, 122, 0, 23, 162, 121, 0, 24, 165, 122, 0, 26, 169, 123, 0, 25, 171, 122, 0, 25, 173, 123, 0, 44, 63, 59, 0, 44, 50, 53, 0, 44, 47, 52, 0, 28, 32, 35, 0, 27, 40, 4, 0, 24, 29, 32, 0, 30, 34, 37, 0, 210, 213, 222, 0, 221, 225, 226, 0, 195, 195, 195, 0, 32, 33, 37, 0, 31, 34, 39, 0, 24, 27, 32, 0, 0, 0, 0, 0, 25, 157, 120, 0, 24, 160, 120, 0, 23, 164, 121, 0, 25, 168, 124, 0, 25, 171, 124, 0, 27, 173, 124, 0, 27, 176, 126, 0, 32, 84, 64, 0, 34, 44, 45, 0, 53, 57, 60, 0, 36, 40, 43, 0, 22, 26, 29, 0, 0, 0, 0, 0, 24, 47, 23, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 197, 203, 203, 0, 34, 37, 45, 0, 19, 24, 28, 0, 0, 0, 0, 0, 0, 0, 0, 0, 23, 159, 119, 0, 0, 0, 0, 0, 25, 166, 123, 0, 24, 170, 123, 0, 27, 173, 126, 0, 25, 176, 125, 0, 25, 178, 124, 0, 28, 182, 128, 0, 56, 88, 77, 0, 29, 37, 39, 0, 51, 55, 58, 0, 45, 50, 53, 0, 0, 0, 0, 0, 131, 203, 35, 0, 0, 0, 0, 0, 22, 26, 29, 0, 0, 0, 0, 0, 196, 225, 136, 0, 8, 6, 11, 0, 14, 15, 20, 0, 20, 21, 26, 0, 0, 0, 0, 0, 26, 162, 122, 0, 26, 167, 124, 0, 24, 172, 124, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 183, 125, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 41, 45, 48, 0, 45, 49, 52, 0, 18, 22, 23, 0, 177, 215, 85, 0, 29, 33, 33, 0, 6, 10, 19, 0, 205, 242, 144, 0, 0, 0, 0, 0, 142, 205, 52, 0, 19, 20, 25, 0, 0, 0, 0, 0, 205, 204, 204, 61, 0, 0, 0, 0, 21, 135, 112, 0, 0, 0, 0, 0, 22, 142, 115, 0, 21, 146, 116, 0, 23, 148, 116, 0, 23, 151, 118, 0, 21, 154, 120, 0, 24, 159, 119, 0, 24, 160, 120, 0, 25, 161, 121, 0, 59, 99, 88, 0, 40, 52, 52, 0, 28, 33, 37, 0, 28, 33, 37, 0, 27, 32, 29, 0, 34, 38, 41, 0, 35, 36, 40, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 138, 114, 0, 21, 144, 116, 0, 22, 145, 116, 0, 22, 149, 119, 0, 23, 153, 119, 0, 24, 158, 121, 0, 24, 160, 120, 0, 24, 163, 122, 0, 25, 166, 123, 0, 26, 167, 124, 0, 39, 104, 80, 0, 61, 80, 76, 0, 36, 41, 45, 0, 58, 63, 66, 0, 107, 139, 32, 0, 27, 31, 34, 0, 30, 34, 37, 0, 204, 210, 206, 0, 207, 207, 205, 0, 48, 49, 51, 0, 32, 37, 41, 0, 0, 0, 0, 0, 23, 143, 118, 0, 21, 148, 118, 0, 23, 151, 118, 0, 25, 155, 119, 0, 24, 158, 121, 0, 23, 164, 122, 0, 24, 165, 123, 0, 25, 168, 124, 0, 24, 171, 124, 0, 27, 171, 122, 0, 48, 73, 67, 0, 58, 63, 63, 0, 36, 41, 45, 0, 17, 22, 25, 0, 33, 56, 16, 0, 31, 32, 36, 0, 22, 25, 30, 0, 219, 225, 223, 0, 216, 218, 215, 0, 226, 228, 225, 0, 21, 22, 27, 0, 0, 0, 0, 0, 21, 148, 118, 0, 24, 152, 119, 0, 23, 157, 120, 0, 23, 159, 119, 0, 23, 164, 121, 0, 24, 167, 123, 0, 25, 171, 126, 0, 26, 172, 123, 0, 27, 175, 125, 0, 51, 178, 133, 0, 62, 73, 73, 0, 35, 39, 42, 0, 0, 0, 0, 0, 38, 44, 47, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 166, 167, 171, 0, 193, 199, 199, 0, 191, 197, 197, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 150, 118, 0, 0, 0, 0, 0, 23, 158, 118, 0, 25, 161, 121, 0, 25, 164, 122, 0, 24, 170, 123, 0, 26, 172, 125, 0, 26, 177, 126, 0, 27, 180, 126, 0, 26, 179, 127, 0, 67, 85, 79, 0, 39, 47, 49, 0, 0, 0, 0, 0, 35, 39, 42, 0, 0, 0, 0, 0, 31, 35, 36, 0, 0, 0, 0, 0, 21, 25, 28, 0, 190, 224, 144, 0, 182, 216, 119, 0, 16, 16, 15, 0, 0, 0, 0, 0, 23, 153, 119, 0, 23, 157, 120, 0, 24, 163, 122, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 26, 177, 126, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 111, 77, 0, 36, 41, 45, 0, 59, 63, 66, 0, 32, 36, 39, 0, 171, 209, 61, 0, 49, 51, 38, 0, 13, 17, 18, 0, 0, 0, 0, 0, 183, 236, 99, 0, 152, 210, 69, 0, 0, 0, 0, 0, 205, 204, 204, 61, 0, 0, 0, 0, 21, 128, 112, 0, 0, 0, 0, 0, 22, 135, 115, 0, 20, 138, 114, 0, 20, 142, 115, 0, 22, 146, 116, 0, 22, 150, 117, 0, 22, 153, 119, 0, 24, 156, 119, 0, 23, 158, 121, 0, 22, 161, 120, 0, 40, 119, 90, 0, 43, 73, 61, 0, 45, 50, 54, 0, 29, 34, 38, 0, 34, 39, 43, 0, 34, 39, 42, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 19, 132, 112, 0, 21, 137, 114, 0, 22, 140, 116, 0, 21, 144, 115, 0, 23, 148, 118, 0, 22, 150, 117, 0, 23, 153, 119, 0, 23, 157, 120, 0, 24, 160, 120, 0, 23, 162, 121, 0, 24, 165, 122, 0, 24, 167, 123, 0, 49, 91, 77, 0, 22, 27, 31, 0, 48, 53, 57, 0, 32, 36, 33, 0, 34, 37, 42, 0, 19, 23, 26, 0, 247, 248, 250, 0, 225, 227, 226, 0, 16, 17, 19, 0, 0, 0, 0, 0, 19, 137, 113, 0, 22, 140, 116, 0, 20, 145, 115, 0, 21, 148, 118, 0, 23, 153, 119, 0, 22, 156, 119, 0, 23, 159, 119, 0, 24, 163, 122, 0, 24, 165, 123, 0, 26, 169, 125, 0, 25, 171, 124, 0, 48, 103, 84, 0, 46, 61, 58, 0, 36, 41, 45, 0, 22, 27, 30, 0, 198, 241, 117, 0, 25, 34, 34, 0, 35, 38, 43, 0, 210, 211, 215, 0, 220, 224, 223, 0, 220, 222, 217, 0, 0, 0, 0, 0, 21, 139, 115, 0, 22, 147, 117, 0, 24, 149, 119, 0, 23, 154, 120, 0, 23, 157, 120, 0, 25, 162, 120, 0, 25, 164, 122, 0, 26, 167, 124, 0, 24, 171, 126, 0, 25, 174, 124, 0, 24, 176, 127, 0, 55, 88, 77, 0, 0, 0, 0, 0, 47, 50, 55, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 28, 32, 35, 0, 32, 33, 35, 0, 191, 200, 199, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21, 144, 115, 0, 0, 0, 0, 0, 22, 150, 117, 0, 23, 155, 120, 0, 23, 158, 120, 0, 23, 164, 122, 0, 24, 165, 122, 0, 26, 169, 121, 0, 23, 172, 122, 0, 26, 176, 126, 0, 25, 178, 126, 0, 21, 182, 126, 0, 0, 0, 0, 0, 34, 38, 41, 0, 0, 0, 0, 0, 174, 223, 86, 0, 0, 0, 0, 0, 23, 24, 28, 0, 29, 31, 35, 0, 23, 23, 26, 0, 184, 226, 96, 0, 0, 0, 0, 0, 21, 145, 117, 0, 23, 151, 118, 0, 22, 156, 119, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 171, 124, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 28, 183, 126, 0, 27, 179, 123, 0, 42, 52, 51, 0, 33, 38, 41, 0, 29, 33, 36, 0, 35, 40, 36, 0, 174, 231, 101, 0, 0, 0, 0, 0, 17, 16, 21, 0, 32, 51, 19, 0, 0, 0, 0, 0, 205, 204, 204, 61, 0, 0, 0, 0, 20, 122, 109, 0, 0, 0, 0, 0, 19, 130, 111, 0, 20, 133, 113, 0, 20, 136, 113, 0, 21, 139, 115, 0, 21, 144, 115, 0, 23, 148, 118, 0, 24, 152, 119, 0, 22, 154, 117, 0, 23, 157, 120, 0, 23, 159, 121, 0, 26, 158, 118, 0, 48, 95, 82, 0, 37, 47, 48, 0, 36, 41, 45, 0, 40, 45, 49, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 18, 126, 110, 0, 20, 131, 112, 0, 21, 133, 111, 0, 20, 138, 114, 0, 21, 141, 114, 0, 21, 144, 115, 0, 21, 148, 118, 0, 22, 152, 118, 0, 24, 156, 119, 0, 23, 158, 118, 0, 23, 159, 119, 0, 26, 162, 122, 0, 25, 164, 122, 0, 52, 95, 83, 0, 34, 37, 42, 0, 33, 38, 42, 0, 32, 36, 43, 0, 14, 22, 7, 0, 30, 34, 37, 0, 46, 49, 54, 0, 206, 212, 211, 0, 0, 0, 0, 0, 19, 130, 111, 0, 19, 134, 114, 0, 21, 139, 115, 0, 23, 143, 116, 0, 22, 147, 117, 0, 22, 150, 117, 0, 24, 154, 118, 0, 23, 157, 120, 0, 23, 161, 120, 0, 24, 163, 122, 0, 24, 165, 122, 0, 24, 169, 125, 0, 28, 169, 122, 0, 53, 75, 70, 0, 38, 43, 47, 0, 32, 37, 40, 0, 40, 44, 47, 0, 25, 36, 28, 0, 20, 24, 27, 0, 23, 27, 30, 0, 219, 225, 223, 0, 0, 0, 0, 0, 21, 134, 114, 0, 21, 139, 115, 0, 20, 143, 114, 0, 22, 147, 117, 0, 23, 151, 118, 0, 22, 156, 121, 0, 24, 158, 121, 0, 24, 163, 122, 0, 25, 166, 123, 0, 25, 168, 124, 0, 26, 172, 125, 0, 26, 174, 124, 0, 0, 0, 0, 0, 59, 84, 78, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 22, 27, 32, 0, 20, 24, 27, 0, 31, 32, 37, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21, 137, 114, 0, 0, 0, 0, 0, 19, 143, 115, 0, 23, 148, 118, 0, 24, 152, 119, 0, 25, 157, 120, 0, 24, 160, 120, 0, 24, 165, 123, 0, 26, 167, 124, 0, 27, 170, 124, 0, 27, 173, 124, 0, 25, 177, 126, 0, 0, 0, 0, 0, 52, 84, 73, 0, 0, 0, 0, 0, 31, 33, 37, 0, 0, 0, 0, 0, 49, 59, 58, 0, 23, 27, 30, 0, 16, 20, 23, 0, 21, 25, 28, 0, 0, 0, 0, 0, 20, 138, 114, 0, 21, 144, 116, 0, 24, 149, 119, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 23, 164, 121, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 26, 177, 126, 0, 28, 181, 127, 0, 27, 185, 127, 0, 40, 52, 52, 0, 12, 16, 19, 0, 47, 52, 55, 0, 11, 11, 25, 0, 0, 0, 0, 0, 11, 20, 16, 0, 23, 24, 28, 0, 0, 0, 0, 0, 205, 204, 204, 61, 0, 0, 0, 0, 19, 116, 105, 0, 0, 0, 0, 0, 19, 124, 109, 0, 20, 127, 111, 0, 19, 130, 111, 0, 20, 133, 113, 0, 20, 138, 114, 0, 21, 143, 116, 0, 20, 144, 115, 0, 23, 148, 118, 0, 22, 153, 119, 0, 22, 156, 119, 0, 23, 157, 120, 0, 23, 159, 119, 0, 60, 132, 111, 0, 69, 96, 89, 0, 32, 42, 44, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 18, 120, 107, 0, 18, 123, 108, 0, 19, 127, 111, 0, 19, 132, 112, 0, 22, 135, 115, 0, 20, 138, 114, 0, 22, 142, 115, 0, 22, 145, 116, 0, 22, 149, 119, 0, 22, 152, 118, 0, 22, 156, 121, 0, 23, 157, 120, 0, 23, 162, 121, 0, 25, 164, 122, 0, 59, 96, 86, 0, 62, 70, 72, 0, 35, 40, 44, 0, 40, 45, 49, 0, 27, 32, 42, 0, 42, 46, 49, 0, 46, 47, 51, 0, 0, 0, 0, 0, 18, 123, 108, 0, 20, 129, 110, 0, 19, 132, 112, 0, 19, 137, 113, 0, 22, 140, 116, 0, 19, 144, 114, 0, 22, 147, 117, 0, 22, 152, 118, 0, 24, 156, 119, 0, 23, 157, 118, 0, 24, 160, 120, 0, 23, 164, 122, 0, 25, 166, 123, 0, 20, 172, 123, 0, 55, 78, 72, 0, 53, 58, 62, 0, 30, 35, 39, 0, 34, 40, 52, 0, 183, 226, 101, 0, 19, 23, 26, 0, 21, 24, 29, 0, 0, 0, 0, 0, 20, 127, 111, 0, 20, 131, 114, 0, 20, 136, 113, 0, 22, 140, 116, 0, 20, 144, 116, 0, 22, 147, 117, 0, 22, 152, 118, 0, 24, 156, 119, 0, 23, 159, 121, 0, 24, 163, 122, 0, 24, 165, 122, 0, 26, 169, 125, 0, 0, 0, 0, 0, 26, 172, 123, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 52, 56, 58, 0, 174, 219, 116, 0, 24, 29, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 19, 130, 111, 0, 0, 0, 0, 0, 19, 137, 113, 0, 21, 141, 114, 0, 21, 144, 115, 0, 22, 150, 117, 0, 22, 153, 119, 0, 23, 157, 120, 0, 22, 161, 120, 0, 24, 165, 123, 0, 25, 168, 122, 0, 25, 171, 123, 0, 0, 0, 0, 0, 26, 177, 126, 0, 0, 0, 0, 0, 38, 42, 45, 0, 0, 0, 0, 0, 41, 41, 49, 0, 162, 219, 75, 0, 24, 28, 29, 0, 19, 20, 24, 0, 0, 0, 0, 0, 19, 130, 111, 0, 20, 136, 113, 0, 22, 142, 115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 23, 157, 120, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 172, 124, 0, 26, 177, 126, 0, 26, 178, 127, 0, 26, 184, 126, 0, 48, 60, 60, 0, 43, 47, 50, 0, 63, 67, 70, 0, 0, 0, 0, 0, 57, 59, 56, 0, 26, 31, 33, 0, 0, 0, 0, 0, 205, 204, 204, 61, 0, 0, 0, 0, 15, 112, 103, 0, 0, 0, 0, 0, 18, 118, 106, 0, 20, 122, 108, 0, 19, 126, 110, 0, 21, 130, 111, 0, 21, 135, 112, 0, 20, 138, 114, 0, 22, 142, 115, 0, 24, 144, 116, 0, 23, 148, 118, 0, 22, 152, 118, 0, 23, 155, 118, 0, 23, 157, 120, 0, 24, 159, 119, 0, 36, 123, 93, 0, 55, 88, 79, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 18, 115, 106, 0, 17, 119, 106, 0, 20, 122, 108, 0, 18, 126, 110, 0, 19, 130, 111, 0, 19, 132, 112, 0, 21, 139, 115, 0, 22, 140, 116, 0, 22, 145, 116, 0, 23, 148, 118, 0, 22, 152, 118, 0, 22, 155, 120, 0, 25, 157, 120, 0, 23, 161, 121, 0, 31, 164, 124, 0, 66, 108, 98, 0, 43, 54, 54, 0, 48, 53, 57, 0, 29, 34, 38, 0, 23, 23, 22, 0, 42, 46, 49, 0, 0, 0, 0, 0, 18, 118, 106, 0, 20, 122, 109, 0, 21, 128, 112, 0, 18, 131, 111, 0, 20, 136, 113, 0, 21, 139, 115, 0, 20, 143, 115, 0, 23, 146, 117, 0, 22, 149, 119, 0, 23, 154, 120, 0, 22, 156, 119, 0, 23, 159, 119, 0, 24, 163, 122, 0, 26, 167, 124, 0, 54, 171, 132, 0, 73, 100, 93, 0, 44, 52, 54, 0, 41, 46, 50, 0, 18, 23, 26, 0, 209, 237, 147, 0, 27, 31, 34, 0, 0, 0, 0, 0, 18, 123, 108, 0, 20, 127, 111, 0, 20, 131, 112, 0, 20, 136, 113, 0, 21, 139, 115, 0, 19, 143, 115, 0, 23, 148, 118, 0, 23, 151, 118, 0, 24, 156, 119, 0, 23, 157, 120, 0, 23, 162, 121, 0, 24, 165, 122, 0, 0, 0, 0, 0, 27, 170, 124, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 45, 48, 53, 0, 27, 31, 32, 0, 196, 231, 129, 0, 0, 0, 0, 0, 0, 0, 0, 0, 18, 125, 109, 0, 0, 0, 0, 0, 20, 131, 112, 0, 19, 135, 112, 0, 21, 141, 114, 0, 22, 145, 117, 0, 22, 150, 117, 0, 22, 152, 118, 0, 23, 157, 120, 0, 24, 160, 120, 0, 24, 163, 122, 0, 25, 166, 123, 0, 0, 0, 0, 0, 25, 171, 122, 0, 0, 0, 0, 0, 50, 65, 62, 0, 0, 0, 0, 0, 34, 38, 41, 0, 18, 22, 25, 0, 160, 224, 71, 0, 15, 19, 18, 0, 0, 0, 0, 0, 18, 125, 109, 0, 18, 131, 111, 0, 19, 137, 113, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 22, 152, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 26, 167, 124, 0, 25, 172, 124, 0, 25, 176, 125, 0, 27, 178, 127, 0, 28, 182, 128, 0, 40, 62, 59, 0, 27, 31, 34, 0, 0, 0, 0, 0, 29, 34, 37, 0, 136, 205, 26, 0, 0, 0, 0, 0, 205, 204, 204, 61, 0, 0, 0, 0, 18, 111, 103, 0, 0, 0, 0, 0, 19, 116, 105, 0, 20, 120, 108, 0, 19, 124, 109, 0, 20, 129, 110, 0, 20, 133, 113, 0, 20, 138, 114, 0, 21, 139, 113, 0, 23, 143, 115, 0, 22, 147, 117, 0, 22, 150, 117, 0, 22, 153, 119, 0, 24, 156, 119, 0, 24, 159, 119, 0, 41, 168, 128, 0, 49, 108, 88, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 18, 113, 105, 0, 17, 117, 105, 0, 17, 122, 108, 0, 18, 125, 109, 0, 20, 128, 112, 0, 21, 132, 113, 0, 20, 136, 113, 0, 21, 139, 115, 0, 21, 144, 116, 0, 21, 146, 116, 0, 21, 149, 119, 0, 23, 153, 119, 0, 24, 156, 119, 0, 22, 160, 120, 0, 24, 165, 122, 0, 44, 112, 89, 0, 29, 50, 45, 0, 53, 58, 62, 0, 40, 45, 49, 0, 26, 31, 35, 0, 139, 153, 109, 0, 0, 0, 0, 0, 18, 118, 106, 0, 18, 123, 109, 0, 20, 125, 110, 0, 17, 130, 110, 0, 21, 132, 113, 0, 20, 138, 114, 0, 23, 141, 117, 0, 20, 144, 116, 0, 23, 148, 118, 0, 22, 151, 120, 0, 25, 156, 122, 0, 22, 158, 120, 0, 25, 161, 121, 0, 24, 165, 122, 0, 23, 170, 125, 0, 52, 104, 87, 0, 56, 66, 67, 0, 32, 37, 41, 0, 39, 44, 47, 0, 21, 25, 24, 0, 17, 19, 13, 0, 0, 0, 0, 0, 17, 119, 106, 0, 19, 126, 110, 0, 19, 130, 111, 0, 21, 134, 114, 0, 20, 138, 114, 0, 22, 142, 117, 0, 21, 146, 116, 0, 24, 149, 117, 0, 23, 153, 119, 0, 25, 157, 120, 0, 22, 161, 122, 0, 24, 163, 122, 0, 0, 0, 0, 0, 26, 169, 125, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 62, 65, 70, 0, 29, 33, 36, 0, 78, 92, 43, 0, 0, 0, 0, 0, 0, 0, 0, 0, 18, 123, 108, 0, 0, 0, 0, 0, 19, 130, 111, 0, 20, 134, 111, 0, 21, 137, 114, 0, 22, 142, 115, 0, 22, 147, 117, 0, 22, 150, 117, 0, 24, 155, 121, 0, 23, 158, 118, 0, 25, 161, 121, 0, 25, 166, 123, 0, 0, 0, 0, 0, 26, 172, 125, 0, 0, 0, 0, 0, 44, 75, 65, 0, 0, 0, 0, 0, 36, 40, 43, 0, 31, 36, 39, 0, 199, 222, 132, 0, 10, 35, 0, 0, 0, 0, 0, 0, 18, 123, 108, 0, 18, 129, 110, 0, 20, 134, 111, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 22, 150, 117, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 165, 122, 0, 24, 170, 123, 0, 26, 173, 126, 0, 25, 176, 125, 0, 27, 181, 127, 0, 50, 80, 70, 0, 28, 36, 38, 0, 0, 0, 0, 0, 49, 53, 56, 0, 50, 50, 64, 0, 0, 0, 0, 0, 205, 204, 204, 61, 0, 0, 0, 0, 17, 110, 102, 0, 0, 0, 0, 0, 19, 115, 104, 0, 18, 118, 106, 0, 20, 122, 108, 0, 19, 126, 110, 0, 17, 130, 110, 0, 22, 134, 112, 0, 20, 138, 114, 0, 21, 141, 114, 0, 22, 145, 116, 0, 23, 147, 118, 0, 22, 152, 118, 0, 23, 154, 120, 0, 23, 156, 119, 0, 24, 159, 119, 0, 43, 134, 103, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 18, 111, 103, 0, 18, 115, 106, 0, 17, 119, 106, 0, 20, 122, 108, 0, 18, 126, 110, 0, 19, 130, 111, 0, 19, 132, 112, 0, 20, 138, 114, 0, 22, 140, 116, 0, 21, 144, 115, 0, 22, 147, 117, 0, 22, 152, 118, 0, 23, 154, 120, 0, 23, 159, 121, 0, 24, 163, 122, 0, 25, 163, 121, 0, 59, 105, 94, 0, 44, 52, 54, 0, 37, 42, 46, 0, 49, 54, 58, 0, 47, 45, 53, 0, 0, 0, 0, 0, 18, 115, 106, 0, 17, 118, 106, 0, 20, 122, 109, 0, 20, 127, 111, 0, 18, 130, 111, 0, 21, 134, 114, 0, 20, 138, 114, 0, 20, 142, 115, 0, 22, 145, 116, 0, 22, 149, 119, 0, 22, 153, 119, 0, 25, 156, 122, 0, 23, 159, 119, 0, 24, 163, 122, 0, 25, 168, 124, 0, 29, 166, 122, 0, 55, 85, 77, 0, 29, 34, 37, 0, 40, 45, 49, 0, 27, 32, 35, 0, 135, 201, 40, 0, 0, 0, 0, 0, 16, 117, 105, 0, 18, 123, 108, 0, 19, 126, 110, 0, 19, 130, 111, 0, 22, 136, 113, 0, 21, 139, 115, 0, 21, 144, 116, 0, 21, 146, 116, 0, 23, 151, 118, 0, 24, 155, 121, 0, 22, 156, 119, 0, 23, 162, 121, 0, 0, 0, 0, 0, 24, 165, 122, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 45, 48, 53, 0, 42, 45, 50, 0, 45, 49, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 18, 120, 107, 0, 0, 0, 0, 0, 20, 127, 109, 0, 20, 131, 112, 0, 19, 135, 112, 0, 22, 140, 114, 0, 22, 145, 117, 0, 21, 149, 116, 0, 23, 151, 118, 0, 25, 157, 120, 0, 24, 160, 120, 0, 24, 163, 122, 0, 0, 0, 0, 0, 27, 170, 126, 0, 0, 0, 0, 0, 25, 177, 124, 0, 0, 0, 0, 0, 39, 43, 46, 0, 17, 21, 24, 0, 18, 20, 24, 0, 130, 205, 48, 0, 0, 0, 0, 0, 17, 122, 108, 0, 20, 127, 111, 0, 19, 132, 112, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 23, 148, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 163, 122, 0, 27, 169, 123, 0, 25, 171, 124, 0, 25, 176, 125, 0, 26, 180, 126, 0, 28, 182, 128, 0, 38, 57, 55, 0, 0, 0, 0, 0, 39, 43, 46, 0, 48, 53, 56, 0, 0, 0, 0, 0, 205, 204, 204, 61, 0, 0, 0, 0, 15, 105, 98, 0, 0, 0, 0, 0, 16, 112, 104, 0, 19, 115, 104, 0, 18, 118, 106, 0, 19, 122, 108, 0, 20, 128, 110, 0, 18, 130, 111, 0, 21, 135, 113, 0, 20, 138, 114, 0, 22, 142, 116, 0, 22, 146, 116, 0, 22, 147, 118, 0, 22, 151, 118, 0, 22, 154, 118, 0, 23, 156, 119, 0, 24, 159, 120, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 17, 110, 102, 0, 19, 112, 104, 0, 18, 115, 106, 0, 18, 118, 106, 0, 18, 123, 108, 0, 19, 127, 111, 0, 20, 131, 112, 0, 21, 134, 114, 0, 20, 138, 114, 0, 22, 140, 114, 0, 22, 145, 116, 0, 23, 148, 118, 0, 21, 151, 117, 0, 24, 156, 119, 0, 24, 160, 120, 0, 24, 163, 122, 0, 30, 165, 124, 0, 50, 78, 71, 0, 68, 76, 78, 0, 32, 37, 41, 0, 16, 21, 25, 0, 0, 0, 0, 0, 17, 110, 102, 0, 18, 115, 104, 0, 18, 120, 107, 0, 18, 123, 108, 0, 18, 126, 110, 0, 20, 131, 112, 0, 19, 135, 112, 0, 20, 138, 114, 0, 21, 143, 116, 0, 22, 145, 116, 0, 22, 149, 119, 0, 22, 153, 119, 0, 23, 157, 120, 0, 24, 160, 120, 0, 24, 165, 122, 0, 25, 167, 124, 0, 49, 124, 97, 0, 32, 46, 46, 0, 47, 52, 56, 0, 28, 33, 37, 0, 17, 24, 22, 0, 0, 0, 0, 0, 17, 112, 104, 0, 18, 118, 106, 0, 18, 123, 109, 0, 20, 127, 111, 0, 18, 129, 110, 0, 20, 136, 115, 0, 20, 138, 114, 0, 21, 143, 118, 0, 22, 147, 117, 0, 23, 150, 120, 0, 24, 154, 120, 0, 24, 158, 121, 0, 0, 0, 0, 0, 24, 163, 122, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 35, 44, 43, 0, 24, 29, 33, 0, 46, 51, 55, 0, 0, 0, 0, 0, 0, 0, 0, 0, 19, 116, 105, 0, 0, 0, 0, 0, 18, 123, 108, 0, 19, 128, 109, 0, 19, 132, 112, 0, 19, 137, 113, 0, 21, 141, 114, 0, 21, 144, 115, 0, 22, 150, 117, 0, 24, 152, 119, 0, 22, 156, 119, 0, 23, 159, 119, 0, 0, 0, 0, 0, 24, 165, 122, 0, 0, 0, 0, 0, 28, 176, 126, 0, 0, 0, 0, 0, 65, 73, 75, 0, 59, 63, 66, 0, 29, 33, 36, 0, 22, 23, 27, 0, 0, 0, 0, 0, 17, 117, 105, 0, 18, 123, 108, 0, 20, 128, 112, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21, 144, 115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 23, 159, 119, 0, 25, 164, 122, 0, 27, 169, 123, 0, 26, 172, 125, 0, 27, 178, 127, 0, 26, 180, 126, 0, 28, 182, 128, 0, 0, 0, 0, 0, 22, 26, 29, 0, 44, 48, 51, 0, 0, 0, 0, 0, 205, 204, 204, 61, 0, 0, 0, 0, 18, 103, 100, 0, 0, 0, 0, 0, 18, 109, 102, 0, 17, 112, 104, 0, 19, 116, 105, 0, 19, 119, 107, 0, 20, 125, 110, 0, 21, 128, 112, 0, 21, 132, 113, 0, 20, 136, 113, 0, 22, 140, 116, 0, 20, 143, 118, 0, 20, 147, 117, 0, 23, 150, 120, 0, 22, 154, 117, 0, 22, 156, 121, 0, 23, 157, 120, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 15, 105, 101, 0, 17, 110, 102, 0, 17, 112, 104, 0, 19, 116, 105, 0, 19, 121, 108, 0, 18, 125, 109, 0, 19, 127, 111, 0, 19, 130, 111, 0, 22, 136, 113, 0, 20, 138, 114, 0, 22, 142, 115, 0, 21, 146, 116, 0, 22, 149, 119, 0, 22, 153, 119, 0, 23, 159, 119, 0, 23, 161, 120, 0, 23, 164, 122, 0, 49, 104, 87, 0, 40, 59, 55, 0, 23, 28, 32, 0, 32, 37, 41, 0, 0, 0, 0, 0, 18, 109, 102, 0, 18, 113, 105, 0, 17, 117, 105, 0, 16, 121, 107, 0, 19, 124, 109, 0, 18, 129, 110, 0, 20, 131, 112, 0, 20, 136, 113, 0, 21, 139, 115, 0, 21, 144, 116, 0, 23, 148, 118, 0, 23, 150, 120, 0, 25, 155, 121, 0, 24, 158, 121, 0, 25, 164, 123, 0, 24, 165, 122, 0, 22, 169, 124, 0, 65, 99, 89, 0, 60, 70, 72, 0, 40, 45, 49, 0, 38, 43, 46, 0, 0, 0, 0, 0, 18, 111, 103, 0, 20, 116, 105, 0, 19, 121, 108, 0, 19, 124, 109, 0, 21, 128, 112, 0, 20, 133, 113, 0, 20, 138, 114, 0, 22, 140, 116, 0, 21, 144, 115, 0, 22, 149, 119, 0, 23, 151, 118, 0, 25, 155, 119, 0, 0, 0, 0, 0, 23, 162, 121, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 56, 79, 73, 0, 40, 45, 45, 0, 28, 33, 37, 0, 0, 0, 0, 0, 0, 0, 0, 0, 19, 115, 104, 0, 0, 0, 0, 0, 19, 121, 108, 0, 18, 125, 109, 0, 19, 130, 111, 0, 20, 133, 112, 0, 21, 137, 114, 0, 23, 141, 115, 0, 22, 147, 117, 0, 22, 150, 117, 0, 24, 154, 120, 0, 24, 157, 119, 0, 0, 0, 0, 0, 24, 165, 122, 0, 0, 0, 0, 0, 26, 174, 124, 0, 0, 0, 0, 0, 53, 69, 66, 0, 43, 47, 50, 0, 33, 37, 40, 0, 38, 42, 45, 0, 0, 0, 0, 0, 17, 114, 103, 0, 18, 120, 107, 0, 18, 125, 109, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21, 141, 114, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 23, 157, 120, 0, 25, 161, 121, 0, 26, 165, 123, 0, 25, 171, 124, 0, 25, 176, 125, 0, 25, 178, 124, 0, 26, 179, 127, 0, 0, 0, 0, 0, 34, 46, 46, 0, 31, 35, 38, 0, 0, 0, 0, 0, 205, 204, 204, 61, 0, 0, 0, 0, 17, 102, 99, 0, 0, 0, 0, 0, 18, 109, 102, 0, 17, 112, 104, 0, 18, 115, 104, 0, 18, 118, 106, 0, 19, 124, 109, 0, 21, 128, 112, 0, 20, 131, 112, 0, 20, 136, 115, 0, 22, 140, 116, 0, 21, 143, 116, 0, 22, 147, 115, 0, 22, 149, 119, 0, 22, 154, 117, 0, 23, 154, 120, 0, 23, 157, 120, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 105, 101, 0, 17, 110, 102, 0, 19, 112, 104, 0, 18, 115, 104, 0, 18, 119, 106, 0, 19, 124, 109, 0, 19, 126, 110, 0, 19, 131, 112, 0, 21, 135, 112, 0, 20, 138, 114, 0, 22, 141, 115, 0, 22, 147, 117, 0, 22, 148, 118, 0, 23, 154, 120, 0, 23, 158, 118, 0, 25, 161, 121, 0, 24, 163, 121, 0, 51, 116, 94, 0, 56, 76, 72, 0, 68, 74, 76, 0, 33, 38, 42, 0, 0, 0, 0, 0, 17, 108, 101, 0, 19, 112, 104, 0, 17, 117, 105, 0, 18, 120, 107, 0, 19, 124, 109, 0, 18, 129, 110, 0, 20, 131, 112, 0, 20, 136, 113, 0, 21, 139, 115, 0, 21, 144, 116, 0, 23, 146, 117, 0, 22, 149, 119, 0, 23, 153, 119, 0, 24, 158, 121, 0, 24, 163, 122, 0, 25, 166, 123, 0, 27, 167, 122, 0, 58, 104, 88, 0, 57, 67, 68, 0, 29, 32, 37, 0, 19, 24, 27, 0, 0, 0, 0, 0, 18, 109, 102, 0, 19, 115, 104, 0, 19, 119, 107, 0, 21, 123, 109, 0, 21, 128, 112, 0, 20, 131, 112, 0, 19, 137, 115, 0, 21, 139, 115, 0, 23, 143, 118, 0, 21, 148, 118, 0, 23, 151, 118, 0, 25, 155, 121, 0, 0, 0, 0, 0, 25, 161, 121, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 39, 70, 62, 0, 45, 49, 50, 0, 42, 47, 51, 0, 0, 0, 0, 0, 0, 0, 0, 0, 18, 113, 105, 0, 0, 0, 0, 0, 18, 120, 107, 0, 18, 125, 109, 0, 19, 130, 111, 0, 19, 132, 112, 0, 21, 137, 114, 0, 23, 141, 115, 0, 21, 146, 116, 0, 23, 151, 118, 0, 23, 153, 119, 0, 23, 157, 120, 0, 0, 0, 0, 0, 23, 164, 121, 0, 0, 0, 0, 0, 27, 173, 124, 0, 0, 0, 0, 0, 38, 64, 55, 0, 32, 36, 39, 0, 49, 53, 56, 0, 27, 31, 34, 0, 0, 0, 0, 0, 19, 114, 106, 0, 17, 119, 106, 0, 18, 125, 109, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21, 141, 114, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 23, 157, 120, 0, 25, 161, 121, 0, 25, 164, 122, 0, 24, 170, 123, 0, 24, 175, 124, 0, 28, 177, 127, 0, 27, 179, 127, 0, 0, 0, 0, 0, 34, 47, 47, 0, 31, 35, 38, 0, 0, 0, 0, 0, 205, 204, 204, 61, 0, 0, 0, 0, 17, 102, 99, 0, 0, 0, 0, 0, 18, 109, 102, 0, 17, 112, 104, 0, 18, 115, 104, 0, 18, 118, 106, 0, 19, 124, 109, 0, 21, 128, 112, 0, 20, 131, 112, 0, 20, 136, 115, 0, 22, 140, 116, 0, 20, 142, 117, 0, 21, 146, 114, 0, 22, 149, 119, 0, 22, 152, 116, 0, 23, 154, 120, 0, 23, 157, 121, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 15, 104, 100, 0, 16, 109, 101, 0, 18, 111, 103, 0, 18, 115, 104, 0, 18, 119, 106, 0, 18, 123, 108, 0, 19, 126, 110, 0, 19, 131, 112, 0, 20, 133, 113, 0, 19, 137, 113, 0, 22, 141, 115, 0, 22, 145, 116, 0, 22, 148, 118, 0, 22, 153, 119, 0, 23, 158, 120, 0, 25, 161, 121, 0, 24, 163, 122, 0, 57, 125, 102, 0, 58, 80, 74, 0, 38, 44, 47, 0, 43, 48, 52, 0, 0, 0, 0, 0, 17, 108, 101, 0, 19, 112, 104, 0, 19, 116, 105, 0, 18, 120, 107, 0, 19, 124, 109, 0, 18, 129, 110, 0, 20, 131, 112, 0, 20, 136, 113, 0, 21, 139, 115, 0, 21, 144, 116, 0, 22, 145, 116, 0, 22, 149, 119, 0, 23, 153, 119, 0, 24, 158, 121, 0, 24, 163, 122, 0, 24, 165, 122, 0, 26, 167, 124, 0, 55, 103, 87, 0, 64, 74, 75, 0, 22, 25, 30, 0, 31, 36, 39, 0, 0, 0, 0, 0, 18, 109, 102, 0, 19, 115, 104, 0, 19, 119, 107, 0, 18, 123, 109, 0, 21, 128, 112, 0, 20, 131, 112, 0, 19, 137, 115, 0, 21, 139, 115, 0, 23, 143, 118, 0, 22, 147, 117, 0, 22, 150, 117, 0, 25, 155, 121, 0, 0, 0, 0, 0, 24, 160, 120, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 47, 81, 72, 0, 67, 71, 72, 0, 24, 29, 33, 0, 0, 0, 0, 0, 0, 0, 0, 0, 18, 113, 105, 0, 0, 0, 0, 0, 18, 120, 107, 0, 18, 125, 109, 0, 20, 129, 110, 0, 19, 132, 112, 0, 18, 136, 112, 0, 23, 141, 115, 0, 21, 146, 116, 0, 22, 150, 117, 0, 23, 153, 119, 0, 23, 157, 120, 0, 0, 0, 0, 0, 25, 164, 123, 0, 0, 0, 0, 0, 27, 173, 124, 0, 0, 0, 0, 0, 52, 79, 70, 0, 35, 40, 43, 0, 40, 44, 47, 0, 34, 38, 41, 0, 0, 0, 0, 0, 19, 114, 106, 0, 17, 119, 106, 0, 18, 125, 109, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 22, 140, 114, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 23, 157, 120, 0, 25, 161, 121, 0, 25, 164, 122, 0, 24, 170, 123, 0, 25, 176, 125, 0, 27, 176, 126, 0, 26, 180, 126, 0, 0, 0, 0, 0, 31, 45, 45, 0, 26, 30, 33, 0, 0, 0, 0, 0, 205, 204, 204, 61, 0, 0, 0, 0, 17, 102, 99, 0, 0, 0, 0, 0, 18, 109, 102, 0, 17, 112, 104, 0, 18, 115, 104, 0, 18, 118, 106, 0, 19, 124, 109, 0, 21, 128, 112, 0, 20, 131, 112, 0, 20, 136, 115, 0, 22, 140, 116, 0, 20, 142, 117, 0, 21, 146, 114, 0, 22, 149, 119, 0, 22, 152, 116, 0, 23, 154, 120, 0, 23, 157, 121, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 15, 104, 100, 0, 16, 109, 101, 0, 18, 111, 103, 0, 18, 115, 104, 0, 18, 119, 106, 0, 18, 123, 108, 0, 19, 126, 110, 0, 19, 131, 112, 0, 20, 133, 113, 0, 19, 137, 113, 0, 22, 141, 115, 0, 22, 145, 116, 0, 22, 148, 118, 0, 22, 153, 119, 0, 23, 158, 120, 0, 25, 161, 121, 0, 24, 163, 122, 0, 57, 125, 102, 0, 58, 80, 74, 0, 38, 44, 47, 0, 43, 48, 52, 0, 0, 0, 0, 0, 17, 108, 101, 0, 19, 112, 104, 0, 19, 116, 105, 0, 18, 120, 107, 0, 19, 124, 109, 0, 18, 129, 110, 0, 20, 131, 112, 0, 20, 136, 113, 0, 21, 139, 115, 0, 21, 144, 116, 0, 22, 145, 116, 0, 22, 149, 119, 0, 23, 153, 119, 0, 24, 158, 121, 0, 24, 163, 122, 0, 24, 165, 122, 0, 26, 167, 124, 0, 55, 103, 87, 0, 64, 74, 75, 0, 22, 25, 30, 0, 31, 36, 39, 0, 0, 0, 0, 0, 18, 109, 102, 0, 19, 115, 104, 0, 19, 119, 107, 0, 18, 123, 109, 0, 21, 128, 112, 0, 20, 131, 112, 0, 19, 137, 115, 0, 21, 139, 115, 0, 23, 143, 118, 0, 22, 147, 117, 0, 22, 150, 117, 0, 25, 155, 121, 0, 0, 0, 0, 0, 24, 160, 120, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 47, 81, 72, 0, 67, 71, 72, 0, 24, 29, 33, 0, 0, 0, 0, 0, 0, 0, 0, 0, 18, 113, 105, 0, 0, 0, 0, 0, 18, 120, 107, 0, 18, 125, 109, 0, 20, 129, 110, 0, 19, 132, 112, 0, 18, 136, 112, 0, 23, 141, 115, 0, 21, 146, 116, 0, 22, 150, 117, 0, 23, 153, 119, 0, 23, 157, 120, 0, 0, 0, 0, 0, 25, 164, 123, 0, 0, 0, 0, 0, 27, 173, 124, 0, 0, 0, 0, 0, 52, 79, 70, 0, 35, 40, 43, 0, 40, 44, 47, 0, 34, 38, 41, 0, 0, 0, 0, 0, 19, 114, 106, 0, 17, 119, 106, 0, 18, 125, 109, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 22, 140, 114, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 23, 157, 120, 0, 25, 161, 121, 0, 25, 164, 122, 0, 24, 170, 123, 0, 25, 176, 125, 0, 27, 176, 126, 0, 26, 180, 126, 0, 0, 0, 0, 0, 31, 45, 45, 0, 26, 30, 33, 0, 0, 0, 0, 0, 205, 204, 204, 61, 0, 0, 0, 0, 17, 102, 99, 0, 0, 0, 0, 0, 19, 110, 103, 0, 16, 111, 103, 0, 19, 115, 104, 0, 18, 118, 106, 0, 19, 124, 109, 0, 21, 128, 112, 0, 20, 131, 112, 0, 19, 135, 114, 0, 22, 140, 116, 0, 20, 142, 115, 0, 21, 146, 114, 0, 23, 150, 120, 0, 22, 152, 116, 0, 22, 153, 119, 0, 23, 157, 122, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 15, 104, 100, 0, 16, 109, 101, 0, 18, 111, 103, 0, 18, 115, 104, 0, 18, 118, 106, 0, 18, 123, 108, 0, 18, 126, 110, 0, 19, 130, 111, 0, 20, 133, 113, 0, 19, 137, 113, 0, 22, 141, 114, 0, 22, 145, 116, 0, 23, 148, 118, 0, 22, 153, 119, 0, 23, 158, 120, 0, 24, 160, 120, 0, 24, 162, 122, 0, 41, 111, 87, 0, 48, 71, 65, 0, 39, 45, 47, 0, 31, 36, 40, 0, 0, 0, 0, 0, 17, 108, 101, 0, 19, 112, 104, 0, 19, 116, 105, 0, 17, 119, 106, 0, 19, 124, 109, 0, 19, 127, 111, 0, 19, 130, 111, 0, 19, 135, 112, 0, 20, 138, 114, 0, 21, 144, 116, 0, 22, 145, 116, 0, 22, 149, 119, 0, 23, 153, 119, 0, 23, 157, 120, 0, 24, 163, 122, 0, 24, 165, 122, 0, 26, 167, 124, 0, 46, 97, 80, 0, 51, 61, 62, 0, 33, 36, 41, 0, 11, 16, 19, 0, 0, 0, 0, 0, 19, 110, 103, 0, 19, 115, 104, 0, 19, 119, 107, 0, 18, 123, 109, 0, 21, 128, 112, 0, 20, 131, 112, 0, 20, 136, 115, 0, 21, 139, 115, 0, 23, 143, 118, 0, 22, 147, 117, 0, 24, 149, 117, 0, 25, 155, 121, 0, 0, 0, 0, 0, 24, 160, 120, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 66, 104, 91, 0, 49, 53, 54, 0, 26, 31, 35, 0, 0, 0, 0, 0, 0, 0, 0, 0, 17, 112, 104, 0, 0, 0, 0, 0, 18, 120, 107, 0, 19, 124, 109, 0, 20, 129, 110, 0, 19, 132, 112, 0, 18, 136, 112, 0, 22, 140, 114, 0, 22, 145, 116, 0, 22, 150, 117, 0, 23, 153, 119, 0, 23, 157, 120, 0, 0, 0, 0, 0, 25, 164, 123, 0, 0, 0, 0, 0, 26, 172, 123, 0, 0, 0, 0, 0, 46, 76, 66, 0, 36, 41, 44, 0, 32, 36, 39, 0, 43, 47, 50, 0, 0, 0, 0, 0, 18, 113, 105, 0, 17, 119, 106, 0, 18, 125, 109, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21, 139, 113, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 22, 156, 119, 0, 24, 160, 120, 0, 25, 164, 122, 0, 24, 170, 123, 0, 25, 176, 125, 0, 27, 176, 126, 0, 26, 180, 126, 0, 0, 0, 0, 0, 40, 53, 53, 0, 19, 23, 26, 0, 0, 0, 0, 0];

    var baseLayer = 'Embedded/Sample_Keyboard.chroma';
    ChromaAnimation.closeAnimation(baseLayer);
    ChromaAnimation.openAnimationFromMemory(EMBED_Sample_Keyboard, baseLayer, function (baseAnimation) {

        ChromaAnimation.setChromaCustomFlag(baseLayer, true);
        ChromaAnimation.setChromaCustomColorAllFrames(baseLayer);
        ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);
        displayAndPlayAnimationKeyboard(baseLayer, "ShowEffect47");
        showEffect47ChromaLink.onclick();
    });
};
showEffect47ChromaLink.onclick = function () {
    exampleReset();

    let EMBED_Sample_ChromaLink = [1, 0, 0, 0, 0, 0, 26, 0, 0, 0, 205, 204, 204, 61, 174, 195, 174, 0, 35, 36, 38, 0, 225, 229, 228, 0, 211, 213, 210, 0, 52, 55, 60, 0, 205, 204, 204, 61, 25, 26, 29, 0, 21, 25, 28, 0, 213, 216, 221, 0, 206, 208, 205, 0, 94, 96, 95, 0, 205, 204, 204, 61, 20, 21, 25, 0, 37, 41, 44, 0, 31, 34, 39, 0, 208, 213, 216, 0, 227, 229, 226, 0, 205, 204, 204, 61, 18, 20, 19, 0, 159, 228, 62, 0, 21, 25, 28, 0, 32, 37, 41, 0, 216, 222, 220, 0, 205, 204, 204, 61, 148, 218, 88, 0, 17, 22, 25, 0, 192, 243, 108, 0, 29, 30, 34, 0, 30, 34, 37, 0, 205, 204, 204, 61, 59, 67, 48, 0, 44, 49, 53, 0, 47, 54, 39, 0, 37, 40, 50, 0, 34, 38, 41, 0, 205, 204, 204, 61, 34, 38, 41, 0, 29, 34, 38, 0, 31, 36, 39, 0, 10, 21, 5, 0, 20, 28, 30, 0, 205, 204, 204, 61, 34, 38, 41, 0, 59, 68, 67, 0, 45, 50, 54, 0, 35, 40, 43, 0, 178, 229, 89, 0, 205, 204, 204, 61, 40, 44, 47, 0, 50, 91, 79, 0, 56, 61, 65, 0, 23, 28, 32, 0, 32, 37, 40, 0, 205, 204, 204, 61, 31, 43, 43, 0, 26, 169, 125, 0, 51, 100, 84, 0, 58, 68, 68, 0, 49, 54, 58, 0, 205, 204, 204, 61, 27, 181, 127, 0, 24, 163, 122, 0, 24, 167, 123, 0, 29, 166, 122, 0, 52, 74, 69, 0, 205, 204, 204, 61, 28, 176, 126, 0, 24, 158, 121, 0, 24, 163, 122, 0, 25, 166, 123, 0, 25, 168, 124, 0, 205, 204, 204, 61, 26, 169, 121, 0, 23, 153, 119, 0, 22, 156, 119, 0, 23, 159, 119, 0, 24, 163, 121, 0, 205, 204, 204, 61, 23, 164, 122, 0, 22, 145, 116, 0, 24, 149, 119, 0, 23, 153, 119, 0, 23, 158, 118, 0, 205, 204, 204, 61, 22, 154, 117, 0, 20, 138, 114, 0, 21, 144, 115, 0, 20, 147, 117, 0, 22, 152, 118, 0, 205, 204, 204, 61, 22, 150, 117, 0, 21, 132, 113, 0, 20, 138, 114, 0, 21, 141, 114, 0, 22, 145, 116, 0, 205, 204, 204, 61, 23, 143, 116, 0, 18, 126, 110, 0, 19, 132, 112, 0, 22, 136, 113, 0, 21, 139, 115, 0, 205, 204, 204, 61, 21, 137, 114, 0, 18, 122, 108, 0, 19, 126, 110, 0, 20, 131, 112, 0, 22, 136, 113, 0, 205, 204, 204, 61, 21, 135, 112, 0, 17, 118, 106, 0, 18, 125, 109, 0, 21, 130, 111, 0, 20, 133, 113, 0, 205, 204, 204, 61, 20, 131, 112, 0, 17, 117, 105, 0, 18, 123, 108, 0, 19, 126, 110, 0, 19, 130, 111, 0, 205, 204, 204, 61, 21, 129, 113, 0, 17, 114, 105, 0, 18, 118, 106, 0, 16, 123, 107, 0, 20, 127, 109, 0, 205, 204, 204, 61, 18, 126, 110, 0, 17, 112, 104, 0, 19, 116, 105, 0, 18, 120, 107, 0, 19, 126, 110, 0, 205, 204, 204, 61, 18, 126, 110, 0, 18, 111, 103, 0, 19, 116, 105, 0, 18, 120, 107, 0, 18, 125, 109, 0, 205, 204, 204, 61, 19, 126, 110, 0, 18, 111, 103, 0, 19, 116, 105, 0, 18, 120, 107, 0, 18, 125, 109, 0, 205, 204, 204, 61, 19, 126, 110, 0, 18, 111, 103, 0, 19, 116, 105, 0, 18, 120, 107, 0, 18, 125, 109, 0, 205, 204, 204, 61, 19, 126, 110, 0, 18, 111, 103, 0, 19, 115, 104, 0, 18, 120, 107, 0, 18, 125, 109, 0];

    var baseLayer = 'Embedded/Sample_ChromaLink.chroma';
    ChromaAnimation.closeAnimation(baseLayer);
    ChromaAnimation.openAnimationFromMemory(EMBED_Sample_ChromaLink, baseLayer, function (baseAnimation) {

        ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);

        displayAndPlayAnimationChromaLink(baseLayer, "ShowEffect47");
        showEffect47Headset.onclick();
    });
}
showEffect47Headset.onclick = function () {
    exampleReset();

    let EMBED_Sample_Headset = [1, 0, 0, 0, 0, 1, 26, 0, 0, 0, 205, 204, 204, 61, 2, 3, 7, 0, 14, 18, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 205, 204, 204, 61, 11, 12, 16, 0, 24, 27, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 205, 204, 204, 61, 16, 17, 21, 0, 41, 44, 49, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 205, 204, 204, 61, 12, 13, 17, 0, 29, 33, 36, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 205, 204, 204, 61, 35, 51, 50, 0, 14, 15, 19, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 205, 204, 204, 61, 31, 202, 132, 0, 23, 24, 28, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 205, 204, 204, 61, 29, 200, 130, 0, 5, 6, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 205, 204, 204, 61, 29, 198, 131, 0, 7, 8, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 205, 204, 204, 61, 29, 195, 131, 0, 23, 24, 28, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 205, 204, 204, 61, 29, 189, 129, 0, 16, 17, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 205, 204, 204, 61, 28, 182, 128, 0, 22, 25, 30, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 205, 204, 204, 61, 25, 176, 125, 0, 29, 199, 130, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 205, 204, 204, 61, 26, 169, 125, 0, 30, 196, 130, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 205, 204, 204, 61, 24, 158, 121, 0, 28, 190, 130, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 205, 204, 204, 61, 22, 152, 118, 0, 29, 183, 126, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 205, 204, 204, 61, 23, 143, 116, 0, 28, 176, 126, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 205, 204, 204, 61, 20, 136, 113, 0, 26, 169, 123, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 205, 204, 204, 61, 20, 131, 112, 0, 24, 165, 123, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 205, 204, 204, 61, 20, 129, 110, 0, 24, 163, 122, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 205, 204, 204, 61, 18, 125, 109, 0, 24, 160, 120, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 205, 204, 204, 61, 18, 123, 109, 0, 22, 156, 119, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 205, 204, 204, 61, 18, 118, 106, 0, 24, 154, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 205, 204, 204, 61, 18, 118, 106, 0, 21, 151, 117, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 205, 204, 204, 61, 17, 118, 106, 0, 21, 151, 117, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 205, 204, 204, 61, 17, 118, 106, 0, 21, 151, 117, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 205, 204, 204, 61, 17, 118, 106, 0, 22, 150, 117, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    var baseLayer = 'Embedded/Sample_Headset.chroma';
    ChromaAnimation.closeAnimation(baseLayer);
    ChromaAnimation.openAnimationFromMemory(EMBED_Sample_Headset, baseLayer, function (baseAnimation) {

        ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);

        displayAndPlayAnimationHeadset(baseLayer, "ShowEffect47");
        showEffect47Mousepad.onclick();
    });
}
showEffect47Mousepad.onclick = function () {
    exampleReset();

    let EMBED_Sample_Mousepad = [1, 0, 0, 0, 0, 2, 26, 0, 0, 0, 205, 204, 204, 61, 20, 138, 114, 0, 22, 145, 116, 0, 24, 154, 120, 0, 22, 158, 118, 0, 24, 166, 123, 0, 27, 176, 124, 0, 162, 217, 126, 0, 50, 143, 0, 0, 25, 30, 33, 0, 19, 22, 27, 0, 36, 41, 44, 0, 14, 15, 19, 0, 30, 31, 35, 0, 20, 30, 17, 0, 20, 26, 26, 0, 205, 204, 204, 61, 21, 141, 114, 0, 22, 150, 117, 0, 23, 157, 120, 0, 25, 164, 123, 0, 27, 168, 123, 0, 31, 174, 126, 0, 120, 198, 62, 0, 22, 69, 11, 0, 30, 34, 37, 0, 11, 14, 19, 0, 38, 48, 49, 0, 31, 35, 38, 0, 33, 37, 40, 0, 35, 40, 43, 0, 35, 40, 43, 0, 205, 204, 204, 61, 21, 144, 116, 0, 22, 153, 119, 0, 24, 160, 120, 0, 25, 166, 123, 0, 28, 172, 126, 0, 30, 180, 124, 0, 125, 214, 70, 0, 136, 199, 50, 0, 12, 16, 21, 0, 26, 29, 34, 0, 37, 56, 54, 0, 42, 52, 51, 0, 22, 26, 29, 0, 31, 35, 38, 0, 33, 38, 42, 0, 205, 204, 204, 61, 22, 149, 119, 0, 24, 158, 121, 0, 26, 165, 123, 0, 26, 172, 125, 0, 28, 177, 125, 0, 114, 194, 69, 0, 82, 154, 47, 0, 24, 29, 32, 0, 5, 8, 13, 0, 40, 48, 50, 0, 52, 83, 70, 0, 22, 213, 136, 0, 23, 28, 31, 0, 49, 53, 56, 0, 28, 33, 36, 0, 205, 204, 204, 61, 20, 156, 120, 0, 24, 163, 122, 0, 25, 171, 124, 0, 26, 177, 126, 0, 26, 184, 126, 0, 117, 211, 60, 0, 163, 229, 85, 0, 12, 16, 19, 0, 31, 34, 39, 0, 26, 40, 40, 0, 29, 212, 134, 0, 29, 205, 132, 0, 25, 199, 130, 0, 20, 33, 33, 0, 69, 92, 86, 0, 205, 204, 204, 61, 53, 56, 61, 0, 11, 42, 36, 0, 32, 47, 48, 0, 27, 181, 127, 0, 44, 186, 140, 0, 68, 147, 4, 0, 25, 31, 31, 0, 18, 21, 26, 0, 37, 42, 45, 0, 54, 80, 71, 0, 28, 210, 135, 0, 32, 203, 133, 0, 29, 193, 130, 0, 33, 181, 129, 0, 60, 122, 99, 0, 205, 204, 204, 61, 35, 40, 46, 0, 44, 49, 55, 0, 41, 46, 52, 0, 32, 187, 129, 0, 126, 199, 64, 0, 125, 203, 34, 0, 30, 34, 37, 0, 13, 16, 21, 0, 36, 46, 47, 0, 43, 80, 62, 0, 29, 208, 134, 0, 31, 197, 131, 0, 28, 190, 130, 0, 26, 180, 126, 0, 26, 167, 124, 0, 205, 204, 204, 61, 34, 39, 45, 0, 16, 21, 27, 0, 24, 29, 32, 0, 32, 36, 35, 0, 88, 200, 36, 0, 168, 232, 90, 0, 9, 12, 17, 0, 40, 43, 48, 0, 34, 48, 48, 0, 31, 211, 135, 0, 32, 203, 132, 0, 30, 196, 132, 0, 28, 187, 129, 0, 27, 178, 127, 0, 25, 165, 123, 0, 205, 204, 204, 61, 26, 27, 32, 0, 24, 28, 32, 0, 14, 19, 23, 0, 11, 20, 19, 0, 0, 74, 0, 0, 20, 25, 28, 0, 7, 10, 15, 0, 32, 36, 39, 0, 35, 58, 50, 0, 33, 209, 134, 0, 30, 200, 131, 0, 28, 191, 128, 0, 27, 185, 127, 0, 25, 174, 124, 0, 25, 163, 122, 0, 205, 204, 204, 61, 23, 26, 31, 0, 22, 25, 30, 0, 36, 39, 44, 0, 7, 11, 14, 0, 128, 225, 49, 0, 18, 22, 25, 0, 14, 17, 22, 0, 35, 45, 46, 0, 30, 212, 133, 0, 29, 205, 130, 0, 26, 196, 131, 0, 27, 187, 127, 0, 26, 179, 125, 0, 26, 169, 123, 0, 23, 158, 118, 0, 205, 204, 204, 61, 17, 22, 26, 0, 185, 191, 199, 0, 45, 68, 23, 0, 12, 13, 18, 0, 20, 21, 25, 0, 26, 27, 31, 0, 35, 43, 45, 0, 38, 73, 59, 0, 30, 206, 133, 0, 28, 197, 130, 0, 28, 187, 129, 0, 25, 178, 124, 0, 25, 171, 124, 0, 24, 163, 122, 0, 22, 152, 118, 0, 205, 204, 204, 61, 214, 216, 213, 0, 195, 201, 201, 0, 131, 205, 51, 0, 10, 11, 15, 0, 6, 7, 11, 0, 33, 37, 40, 0, 27, 48, 41, 0, 31, 209, 135, 0, 30, 201, 131, 0, 28, 191, 128, 0, 27, 180, 126, 0, 25, 171, 124, 0, 25, 164, 123, 0, 24, 156, 119, 0, 21, 145, 116, 0, 205, 204, 204, 61, 35, 39, 42, 0, 19, 23, 26, 0, 200, 226, 126, 0, 11, 12, 16, 0, 15, 16, 20, 0, 25, 35, 36, 0, 24, 214, 133, 0, 30, 204, 132, 0, 29, 195, 131, 0, 29, 184, 126, 0, 25, 171, 124, 0, 25, 163, 121, 0, 23, 157, 120, 0, 22, 150, 117, 0, 21, 139, 115, 0, 205, 204, 204, 61, 13, 17, 20, 0, 23, 29, 29, 0, 84, 109, 58, 0, 8, 9, 13, 0, 41, 46, 49, 0, 28, 207, 134, 0, 30, 204, 132, 0, 30, 196, 132, 0, 28, 186, 128, 0, 27, 175, 125, 0, 23, 162, 121, 0, 23, 153, 119, 0, 21, 148, 118, 0, 21, 141, 114, 0, 18, 131, 111, 0, 205, 204, 204, 61, 27, 32, 36, 0, 15, 23, 7, 0, 36, 41, 44, 0, 10, 11, 15, 0, 41, 58, 52, 0, 30, 206, 133, 0, 29, 198, 129, 0, 27, 189, 129, 0, 26, 179, 125, 0, 25, 166, 123, 0, 23, 155, 118, 0, 22, 145, 116, 0, 21, 141, 114, 0, 21, 132, 113, 0, 18, 125, 109, 0, 205, 204, 204, 61, 32, 37, 41, 0, 31, 34, 39, 0, 29, 33, 36, 0, 13, 19, 19, 0, 21, 214, 131, 0, 30, 201, 131, 0, 28, 192, 129, 0, 28, 182, 128, 0, 24, 170, 123, 0, 24, 159, 119, 0, 22, 147, 117, 0, 20, 138, 114, 0, 21, 132, 113, 0, 19, 127, 111, 0, 18, 118, 106, 0, 205, 204, 204, 61, 47, 83, 69, 0, 45, 50, 53, 0, 37, 42, 46, 0, 31, 201, 132, 0, 31, 205, 133, 0, 29, 195, 129, 0, 27, 187, 127, 0, 27, 175, 125, 0, 24, 163, 122, 0, 22, 152, 118, 0, 20, 138, 114, 0, 19, 130, 111, 0, 19, 126, 110, 0, 18, 120, 107, 0, 17, 112, 104, 0, 205, 204, 204, 61, 50, 145, 111, 0, 49, 79, 71, 0, 1, 55, 34, 0, 28, 197, 130, 0, 29, 200, 130, 0, 28, 191, 128, 0, 26, 180, 126, 0, 24, 170, 123, 0, 23, 157, 120, 0, 21, 146, 116, 0, 19, 132, 112, 0, 19, 124, 109, 0, 19, 121, 108, 0, 18, 115, 104, 0, 18, 109, 102, 0, 205, 204, 204, 61, 25, 161, 121, 0, 63, 110, 92, 0, 28, 186, 128, 0, 30, 196, 132, 0, 29, 198, 129, 0, 27, 189, 129, 0, 26, 179, 125, 0, 26, 167, 124, 0, 24, 155, 121, 0, 21, 144, 115, 0, 19, 130, 111, 0, 18, 123, 109, 0, 18, 118, 106, 0, 17, 112, 104, 0, 16, 107, 100, 0, 205, 204, 204, 61, 23, 159, 119, 0, 26, 174, 124, 0, 27, 185, 127, 0, 30, 194, 131, 0, 30, 197, 128, 0, 27, 187, 127, 0, 28, 176, 126, 0, 24, 165, 122, 0, 22, 152, 118, 0, 22, 140, 116, 0, 19, 127, 111, 0, 19, 121, 108, 0, 17, 117, 105, 0, 16, 111, 103, 0, 16, 105, 99, 0, 205, 204, 204, 61, 22, 157, 120, 0, 24, 171, 122, 0, 28, 183, 126, 0, 28, 192, 129, 0, 27, 193, 129, 0, 26, 183, 128, 0, 25, 171, 124, 0, 23, 159, 119, 0, 23, 148, 118, 0, 20, 136, 113, 0, 18, 125, 109, 0, 17, 117, 105, 0, 17, 112, 104, 0, 16, 108, 101, 0, 16, 102, 99, 0, 205, 204, 204, 61, 23, 157, 120, 0, 26, 169, 125, 0, 25, 179, 125, 0, 27, 189, 129, 0, 28, 191, 128, 0, 27, 180, 126, 0, 26, 169, 123, 0, 23, 157, 120, 0, 21, 146, 116, 0, 18, 134, 113, 0, 19, 121, 108, 0, 19, 114, 106, 0, 17, 110, 102, 0, 16, 105, 101, 0, 16, 101, 98, 0, 205, 204, 204, 61, 22, 156, 119, 0, 26, 169, 125, 0, 27, 180, 126, 0, 29, 189, 129, 0, 28, 190, 130, 0, 26, 179, 125, 0, 25, 168, 122, 0, 24, 156, 119, 0, 21, 144, 115, 0, 20, 133, 113, 0, 19, 121, 108, 0, 18, 113, 105, 0, 17, 110, 102, 0, 15, 104, 100, 0, 15, 100, 97, 0, 205, 204, 204, 61, 22, 156, 119, 0, 26, 169, 125, 0, 27, 180, 126, 0, 29, 189, 129, 0, 28, 190, 130, 0, 26, 179, 125, 0, 25, 168, 122, 0, 24, 156, 119, 0, 21, 144, 115, 0, 20, 133, 113, 0, 19, 121, 108, 0, 18, 113, 105, 0, 17, 110, 102, 0, 16, 105, 101, 0, 15, 100, 97, 0, 205, 204, 204, 61, 22, 156, 119, 0, 26, 169, 125, 0, 27, 180, 126, 0, 29, 189, 129, 0, 28, 190, 130, 0, 26, 179, 125, 0, 25, 168, 122, 0, 24, 156, 119, 0, 21, 144, 115, 0, 20, 133, 113, 0, 19, 121, 108, 0, 18, 113, 105, 0, 17, 110, 102, 0, 16, 105, 101, 0, 15, 100, 97, 0, 205, 204, 204, 61, 22, 156, 119, 0, 26, 169, 125, 0, 26, 179, 125, 0, 29, 189, 129, 0, 28, 190, 130, 0, 26, 179, 125, 0, 25, 168, 122, 0, 24, 156, 119, 0, 21, 144, 115, 0, 19, 132, 112, 0, 18, 120, 107, 0, 18, 113, 105, 0, 17, 110, 102, 0, 16, 105, 101, 0, 15, 100, 97, 0];

    var baseLayer = 'Embedded/Sample_Mousepad.chroma';
    ChromaAnimation.closeAnimation(baseLayer);
    ChromaAnimation.openAnimationFromMemory(EMBED_Sample_Mousepad, baseLayer, function (baseAnimation) {

        ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);

        displayAndPlayAnimation(baseLayer, "ShowEffect47");
        showEffect47Mouse.onclick();
    });
}
showEffect47Mouse.onclick = function () {
    exampleReset();

    let EMBED_Sample_Mouse = [1, 0, 0, 0, 1, 2, 26, 0, 0, 0, 205, 204, 204, 61, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 17, 30, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 28, 33, 39, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 19, 20, 25, 0, 0, 0, 0, 0, 0, 0, 0, 0, 40, 45, 51, 0, 5, 15, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 30, 36, 0, 23, 26, 31, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 29, 34, 40, 0, 5, 9, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 40, 45, 49, 0, 18, 19, 23, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 42, 47, 53, 0, 40, 43, 48, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 6, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 26, 31, 35, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 205, 204, 204, 61, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 176, 192, 175, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 37, 43, 0, 137, 206, 35, 0, 0, 0, 0, 0, 0, 0, 0, 0, 14, 15, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 33, 38, 44, 0, 157, 208, 81, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 26, 31, 37, 0, 121, 186, 39, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 23, 28, 36, 0, 171, 210, 103, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 46, 51, 55, 0, 6, 10, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 31, 35, 38, 0, 18, 23, 27, 0, 0, 0, 0, 0, 0, 0, 0, 0, 17, 20, 25, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 19, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 205, 204, 204, 61, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 193, 205, 197, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 26, 29, 34, 0, 112, 183, 37, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 7, 11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 23, 26, 31, 0, 162, 187, 175, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 37, 41, 0, 156, 213, 81, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 28, 33, 0, 130, 203, 48, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 34, 38, 43, 0, 23, 27, 29, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 27, 30, 35, 0, 38, 46, 49, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 16, 19, 0, 0, 0, 0, 0, 0, 0, 0, 0, 45, 50, 54, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 205, 204, 204, 61, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 30, 30, 31, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 10, 15, 0, 20, 24, 23, 0, 0, 0, 0, 0, 0, 0, 0, 0, 208, 231, 148, 0, 0, 0, 0, 0, 0, 0, 0, 0, 17, 17, 22, 0, 18, 32, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 9, 14, 0, 174, 215, 84, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 15, 18, 23, 0, 147, 208, 71, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 12, 16, 0, 10, 18, 17, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 15, 18, 23, 0, 6, 11, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 17, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 34, 39, 43, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 205, 204, 204, 61, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36, 40, 43, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 34, 37, 42, 0, 23, 24, 28, 0, 0, 0, 0, 0, 0, 0, 0, 0, 210, 243, 166, 0, 0, 0, 0, 0, 0, 0, 0, 0, 26, 27, 31, 0, 19, 20, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 24, 27, 0, 6, 19, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 14, 17, 0, 164, 212, 78, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 15, 19, 22, 0, 11, 12, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 15, 16, 20, 0, 22, 26, 29, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 8, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 27, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 205, 204, 204, 61, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 30, 34, 37, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 160, 187, 129, 0, 26, 27, 31, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21, 25, 28, 0, 0, 0, 0, 0, 0, 0, 0, 0, 135, 200, 43, 0, 21, 24, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 132, 195, 51, 0, 9, 30, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 131, 193, 56, 0, 186, 223, 96, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 161, 195, 100, 0, 12, 15, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 8, 6, 0, 20, 21, 25, 0, 0, 0, 0, 0, 0, 0, 0, 0, 11, 12, 17, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 37, 41, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 205, 204, 204, 61, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 38, 36, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 192, 201, 200, 0, 24, 33, 29, 0, 0, 0, 0, 0, 0, 0, 0, 0, 23, 24, 28, 0, 0, 0, 0, 0, 0, 0, 0, 0, 206, 236, 133, 0, 143, 205, 87, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 73, 124, 16, 0, 181, 217, 92, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 146, 200, 62, 0, 12, 13, 17, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 134, 206, 58, 0, 15, 20, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 27, 12, 0, 12, 13, 17, 0, 0, 0, 0, 0, 0, 0, 0, 0, 11, 12, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 30, 38, 41, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 205, 204, 204, 61, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 183, 236, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 199, 205, 205, 0, 145, 216, 45, 0, 0, 0, 0, 0, 0, 0, 0, 0, 23, 24, 28, 0, 0, 0, 0, 0, 0, 0, 0, 0, 27, 39, 3, 0, 190, 224, 104, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 174, 39, 0, 69, 70, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 167, 230, 83, 0, 30, 36, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 125, 197, 46, 0, 20, 24, 27, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 86, 155, 0, 0, 14, 15, 19, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 13, 17, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 8, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 205, 204, 204, 61, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 73, 74, 78, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 30, 31, 35, 0, 26, 29, 37, 0, 0, 0, 0, 0, 0, 0, 0, 0, 30, 34, 33, 0, 0, 0, 0, 0, 0, 0, 0, 0, 22, 23, 27, 0, 27, 32, 35, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 27, 32, 26, 0, 30, 35, 39, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 34, 45, 37, 0, 37, 41, 44, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 199, 234, 114, 0, 37, 41, 44, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 123, 176, 30, 0, 30, 31, 35, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 8, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 14, 17, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 205, 204, 204, 61, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 38, 42, 45, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21, 22, 26, 0, 28, 32, 35, 0, 0, 0, 0, 0, 0, 0, 0, 0, 186, 236, 107, 0, 0, 0, 0, 0, 0, 0, 0, 0, 19, 20, 24, 0, 51, 55, 58, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 23, 24, 28, 0, 37, 41, 44, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 23, 27, 26, 0, 35, 39, 42, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 148, 180, 105, 0, 23, 27, 30, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 78, 100, 49, 0, 35, 39, 42, 0, 0, 0, 0, 0, 0, 0, 0, 0, 11, 12, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 44, 49, 52, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 205, 204, 204, 61, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 29, 39, 40, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 32, 0, 0, 37, 47, 48, 0, 0, 0, 0, 0, 0, 0, 0, 0, 39, 43, 46, 0, 0, 0, 0, 0, 0, 0, 0, 0, 153, 228, 75, 0, 49, 59, 60, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 147, 203, 58, 0, 50, 60, 61, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 171, 209, 61, 0, 43, 39, 45, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 5, 1, 0, 39, 51, 49, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 28, 32, 29, 0, 59, 152, 115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 20, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 18, 19, 23, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 205, 204, 204, 61, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 30, 176, 126, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 42, 46, 48, 0, 25, 180, 126, 0, 0, 0, 0, 0, 0, 0, 0, 0, 29, 33, 36, 0, 0, 0, 0, 0, 0, 0, 0, 0, 42, 47, 50, 0, 29, 183, 129, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 47, 51, 54, 0, 28, 186, 128, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 42, 46, 49, 0, 28, 188, 128, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 15, 19, 22, 0, 28, 190, 130, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 35, 39, 42, 0, 29, 192, 129, 0, 0, 0, 0, 0, 0, 0, 0, 0, 55, 195, 139, 0, 0, 0, 0, 0, 0, 0, 0, 0, 33, 37, 40, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 205, 204, 204, 61, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 26, 172, 125, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 35, 38, 43, 0, 27, 175, 125, 0, 0, 0, 0, 0, 0, 0, 0, 0, 43, 86, 69, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 24, 27, 0, 27, 178, 127, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 29, 32, 0, 26, 180, 126, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 40, 45, 48, 0, 25, 184, 128, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 39, 43, 46, 0, 26, 185, 127, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 55, 59, 62, 0, 28, 187, 129, 0, 0, 0, 0, 0, 0, 0, 0, 0, 29, 198, 129, 0, 0, 0, 0, 0, 0, 0, 0, 0, 28, 33, 36, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 205, 204, 204, 61, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 166, 123, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 49, 82, 71, 0, 25, 168, 122, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 172, 124, 0, 0, 0, 0, 0, 0, 0, 0, 0, 47, 80, 69, 0, 24, 170, 123, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 55, 88, 75, 0, 26, 174, 126, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 27, 62, 48, 0, 27, 175, 125, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 28, 187, 128, 0, 25, 178, 124, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 23, 194, 128, 0, 27, 180, 126, 0, 0, 0, 0, 0, 0, 0, 0, 0, 28, 190, 130, 0, 0, 0, 0, 0, 0, 0, 0, 0, 28, 192, 129, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 205, 204, 204, 61, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 23, 159, 120, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 26, 173, 123, 0, 25, 161, 121, 0, 0, 0, 0, 0, 0, 0, 0, 0, 26, 167, 124, 0, 0, 0, 0, 0, 0, 0, 0, 0, 28, 176, 126, 0, 24, 165, 123, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 26, 178, 127, 0, 25, 166, 123, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 27, 181, 127, 0, 26, 169, 123, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 26, 184, 126, 0, 24, 172, 124, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 27, 185, 127, 0, 25, 173, 124, 0, 0, 0, 0, 0, 0, 0, 0, 0, 27, 185, 127, 0, 0, 0, 0, 0, 0, 0, 0, 0, 26, 186, 128, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 205, 204, 204, 61, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 23, 154, 120, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 26, 169, 125, 0, 21, 155, 120, 0, 0, 0, 0, 0, 0, 0, 0, 0, 23, 162, 121, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 171, 126, 0, 23, 157, 120, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 27, 173, 124, 0, 24, 160, 120, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 176, 125, 0, 24, 163, 122, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 26, 179, 125, 0, 23, 165, 123, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 27, 180, 126, 0, 25, 168, 125, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 178, 124, 0, 0, 0, 0, 0, 0, 0, 0, 0, 27, 181, 127, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 205, 204, 204, 61, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 22, 147, 117, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 163, 122, 0, 24, 149, 119, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 156, 119, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 164, 122, 0, 22, 150, 117, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 166, 123, 0, 23, 153, 119, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 171, 124, 0, 22, 156, 121, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 171, 124, 0, 23, 157, 122, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 26, 174, 126, 0, 23, 159, 119, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 171, 124, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 176, 125, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 205, 204, 204, 61, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 22, 142, 117, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 158, 121, 0, 21, 144, 115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 23, 151, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 160, 120, 0, 22, 147, 117, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 163, 122, 0, 23, 149, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 164, 122, 0, 22, 150, 117, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 167, 124, 0, 22, 152, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 26, 169, 123, 0, 23, 154, 120, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 165, 122, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 171, 124, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 205, 204, 204, 61, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 22, 140, 116, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 23, 157, 120, 0, 22, 142, 117, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 149, 117, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 159, 119, 0, 22, 145, 117, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 161, 121, 0, 22, 145, 116, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 163, 121, 0, 24, 149, 119, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 23, 165, 122, 0, 23, 151, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 168, 124, 0, 22, 152, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 165, 123, 0, 0, 0, 0, 0, 0, 0, 0, 0, 26, 169, 125, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 205, 204, 204, 61, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 138, 114, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 154, 120, 0, 22, 140, 116, 0, 0, 0, 0, 0, 0, 0, 0, 0, 22, 147, 117, 0, 0, 0, 0, 0, 0, 0, 0, 0, 23, 157, 120, 0, 22, 142, 115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 159, 119, 0, 21, 144, 116, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 23, 162, 121, 0, 22, 145, 116, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 163, 121, 0, 22, 147, 117, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 163, 121, 0, 22, 150, 117, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 161, 121, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 165, 123, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 205, 204, 204, 61, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 133, 113, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 23, 151, 118, 0, 20, 136, 113, 0, 0, 0, 0, 0, 0, 0, 0, 0, 23, 143, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 23, 153, 119, 0, 22, 138, 115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 23, 157, 120, 0, 22, 138, 115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 23, 157, 120, 0, 22, 142, 115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 160, 120, 0, 21, 144, 116, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 160, 120, 0, 20, 145, 115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 23, 157, 120, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 163, 122, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 205, 204, 204, 61, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 18, 131, 111, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 23, 148, 118, 0, 20, 133, 113, 0, 0, 0, 0, 0, 0, 0, 0, 0, 22, 140, 116, 0, 0, 0, 0, 0, 0, 0, 0, 0, 23, 151, 118, 0, 21, 135, 114, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 22, 153, 119, 0, 20, 138, 114, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 23, 155, 121, 0, 20, 138, 114, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 22, 156, 119, 0, 21, 141, 114, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 22, 158, 120, 0, 21, 144, 116, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 155, 119, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 160, 120, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 205, 204, 204, 61, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 131, 112, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 23, 148, 118, 0, 19, 132, 112, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21, 139, 115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 22, 150, 117, 0, 20, 134, 113, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 23, 153, 119, 0, 21, 137, 114, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 155, 121, 0, 20, 138, 114, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 23, 157, 120, 0, 20, 140, 113, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 23, 157, 120, 0, 20, 143, 115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 154, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 23, 159, 119, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 205, 204, 204, 61, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 131, 112, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 23, 148, 118, 0, 19, 132, 112, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21, 139, 115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 22, 149, 117, 0, 20, 134, 113, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 23, 152, 118, 0, 21, 137, 114, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 23, 154, 120, 0, 20, 138, 114, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 23, 157, 120, 0, 20, 140, 113, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 22, 156, 119, 0, 20, 143, 115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 23, 154, 120, 0, 0, 0, 0, 0, 0, 0, 0, 0, 23, 159, 119, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 205, 204, 204, 61, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 131, 112, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 23, 148, 118, 0, 19, 132, 112, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21, 139, 115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 22, 149, 117, 0, 20, 134, 113, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 23, 152, 118, 0, 21, 137, 114, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 23, 154, 120, 0, 20, 138, 114, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 23, 157, 120, 0, 20, 140, 113, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 22, 156, 119, 0, 20, 143, 115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 23, 154, 120, 0, 0, 0, 0, 0, 0, 0, 0, 0, 23, 159, 119, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 205, 204, 204, 61, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 131, 112, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 23, 148, 118, 0, 20, 131, 112, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21, 139, 115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 22, 149, 117, 0, 19, 134, 112, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 23, 152, 118, 0, 21, 137, 114, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 23, 154, 120, 0, 20, 138, 114, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 157, 120, 0, 21, 139, 115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 22, 156, 119, 0, 20, 143, 115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 23, 154, 120, 0, 0, 0, 0, 0, 0, 0, 0, 0, 23, 159, 119, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    var baseLayer = 'Embedded/Sample_Mouse.chroma';
    ChromaAnimation.closeAnimation(baseLayer);
    ChromaAnimation.openAnimationFromMemory(EMBED_Sample_Mouse, baseLayer, function (baseAnimation) {

        ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);

        displayAndPlayAnimation(baseLayer, "ShowEffect47");

        showEffect47Keypad.onclick(); //show next device
    });
}
showEffect47Keypad.onclick = function () {
    exampleReset();

    let EMBED_Sample_Keypad = [1, 0, 0, 0, 1, 1, 26, 0, 0, 0, 205, 204, 204, 61, 217, 219, 216, 0, 52, 53, 58, 0, 25, 28, 33, 0, 34, 37, 42, 0, 40, 41, 46, 0, 208, 210, 207, 0, 37, 38, 40, 0, 28, 33, 37, 0, 19, 22, 27, 0, 13, 16, 21, 0, 196, 205, 204, 0, 56, 59, 67, 0, 43, 46, 51, 0, 22, 25, 30, 0, 31, 35, 39, 0, 188, 223, 114, 0, 146, 185, 78, 0, 21, 24, 29, 0, 16, 19, 24, 0, 23, 28, 32, 0, 205, 204, 204, 61, 231, 233, 230, 0, 196, 196, 196, 0, 18, 21, 26, 0, 37, 40, 45, 0, 29, 30, 35, 0, 221, 226, 220, 0, 231, 232, 227, 0, 42, 46, 49, 0, 26, 31, 35, 0, 28, 31, 36, 0, 199, 205, 205, 0, 206, 212, 212, 0, 38, 39, 36, 0, 23, 27, 32, 0, 28, 31, 36, 0, 130, 196, 37, 0, 209, 236, 152, 0, 17, 33, 11, 0, 26, 29, 34, 0, 23, 24, 29, 0, 205, 204, 204, 61, 188, 193, 199, 0, 230, 232, 231, 0, 35, 35, 35, 0, 10, 14, 18, 0, 28, 31, 36, 0, 210, 214, 218, 0, 213, 217, 217, 0, 213, 215, 212, 0, 17, 21, 24, 0, 33, 38, 42, 0, 29, 31, 34, 0, 200, 206, 206, 0, 189, 195, 195, 0, 31, 34, 26, 0, 34, 37, 42, 0, 21, 25, 26, 0, 188, 218, 112, 0, 182, 213, 134, 0, 22, 31, 31, 0, 17, 20, 25, 0, 205, 204, 204, 61, 35, 38, 43, 0, 209, 210, 213, 0, 229, 231, 230, 0, 52, 52, 53, 0, 22, 26, 31, 0, 20, 24, 27, 0, 210, 213, 222, 0, 187, 189, 187, 0, 214, 216, 211, 0, 17, 21, 24, 0, 21, 25, 28, 0, 28, 28, 33, 0, 215, 221, 219, 0, 186, 191, 190, 0, 36, 39, 26, 0, 18, 19, 23, 0, 21, 25, 28, 0, 151, 183, 112, 0, 156, 182, 141, 0, 15, 22, 14, 0, 205, 204, 204, 61, 36, 40, 43, 0, 30, 34, 37, 0, 219, 220, 222, 0, 218, 220, 219, 0, 50, 51, 53, 0, 28, 32, 35, 0, 30, 34, 38, 0, 217, 220, 225, 0, 231, 233, 230, 0, 211, 213, 208, 0, 37, 38, 42, 0, 25, 24, 29, 0, 23, 23, 25, 0, 201, 207, 207, 0, 191, 196, 197, 0, 24, 26, 25, 0, 26, 27, 31, 0, 17, 18, 22, 0, 64, 72, 59, 0, 192, 226, 118, 0, 205, 204, 204, 61, 157, 207, 66, 0, 19, 23, 26, 0, 32, 36, 39, 0, 204, 204, 206, 0, 230, 232, 229, 0, 17, 51, 0, 0, 32, 34, 38, 0, 20, 23, 28, 0, 181, 186, 192, 0, 216, 218, 215, 0, 44, 61, 32, 0, 22, 23, 28, 0, 24, 27, 30, 0, 236, 239, 240, 0, 207, 216, 215, 0, 170, 227, 88, 0, 19, 23, 25, 0, 22, 23, 27, 0, 22, 23, 27, 0, 185, 222, 94, 0, 205, 204, 204, 61, 27, 31, 36, 0, 31, 51, 3, 0, 34, 38, 41, 0, 30, 34, 37, 0, 214, 218, 218, 0, 13, 20, 1, 0, 26, 27, 24, 0, 29, 30, 34, 0, 25, 30, 34, 0, 205, 210, 213, 0, 213, 241, 130, 0, 32, 38, 23, 0, 26, 25, 31, 0, 30, 31, 36, 0, 194, 199, 203, 0, 18, 36, 0, 0, 52, 62, 57, 0, 24, 25, 29, 0, 24, 27, 31, 0, 23, 27, 30, 0, 205, 204, 204, 61, 25, 30, 33, 0, 40, 40, 45, 0, 1, 11, 13, 0, 15, 19, 22, 0, 31, 35, 38, 0, 35, 39, 42, 0, 97, 125, 45, 0, 14, 21, 21, 0, 37, 41, 44, 0, 32, 33, 35, 0, 29, 33, 36, 0, 205, 241, 119, 0, 38, 47, 43, 0, 18, 22, 25, 0, 30, 31, 35, 0, 29, 34, 37, 0, 167, 220, 79, 0, 10, 15, 14, 0, 24, 28, 31, 0, 23, 24, 28, 0, 205, 204, 204, 61, 17, 22, 26, 0, 36, 41, 44, 0, 66, 66, 70, 0, 15, 21, 18, 0, 29, 33, 36, 0, 45, 48, 53, 0, 22, 27, 30, 0, 84, 109, 47, 0, 33, 47, 42, 0, 24, 28, 31, 0, 39, 43, 46, 0, 25, 29, 30, 0, 192, 222, 126, 0, 28, 39, 33, 0, 26, 30, 33, 0, 57, 61, 64, 0, 41, 49, 51, 0, 174, 234, 86, 0, 13, 18, 21, 0, 21, 22, 26, 0, 205, 204, 204, 61, 59, 71, 71, 0, 51, 54, 59, 0, 39, 44, 48, 0, 29, 35, 42, 0, 210, 238, 135, 0, 67, 71, 72, 0, 30, 35, 39, 0, 31, 36, 39, 0, 30, 33, 42, 0, 45, 63, 44, 0, 49, 54, 57, 0, 26, 29, 34, 0, 38, 41, 46, 0, 15, 20, 10, 0, 47, 64, 45, 0, 22, 26, 29, 0, 45, 49, 52, 0, 34, 38, 41, 0, 10, 19, 0, 0, 28, 63, 15, 0, 205, 204, 204, 61, 27, 165, 125, 0, 38, 86, 70, 0, 39, 55, 52, 0, 55, 60, 64, 0, 27, 32, 36, 0, 29, 173, 124, 0, 58, 88, 80, 0, 36, 45, 44, 0, 41, 46, 50, 0, 43, 48, 51, 0, 47, 171, 127, 0, 66, 82, 79, 0, 39, 42, 47, 0, 31, 34, 39, 0, 29, 33, 36, 0, 30, 179, 127, 0, 23, 33, 34, 0, 53, 57, 60, 0, 33, 37, 40, 0, 38, 43, 46, 0, 205, 204, 204, 61, 24, 163, 122, 0, 24, 163, 121, 0, 13, 129, 92, 0, 57, 91, 82, 0, 70, 75, 78, 0, 26, 169, 125, 0, 26, 169, 126, 0, 49, 112, 90, 0, 57, 74, 72, 0, 63, 68, 72, 0, 26, 172, 125, 0, 25, 173, 125, 0, 50, 94, 79, 0, 66, 76, 77, 0, 31, 34, 39, 0, 25, 177, 126, 0, 25, 179, 125, 0, 43, 77, 66, 0, 30, 38, 40, 0, 36, 40, 43, 0, 205, 204, 204, 61, 23, 158, 118, 0, 24, 160, 120, 0, 23, 162, 121, 0, 21, 167, 122, 0, 57, 116, 98, 0, 26, 162, 122, 0, 24, 165, 122, 0, 24, 167, 123, 0, 28, 167, 126, 0, 50, 88, 75, 0, 25, 166, 123, 0, 26, 169, 123, 0, 24, 170, 122, 0, 27, 171, 122, 0, 54, 79, 73, 0, 26, 172, 123, 0, 26, 172, 123, 0, 27, 175, 125, 0, 27, 181, 127, 0, 59, 71, 69, 0, 205, 204, 204, 61, 22, 152, 118, 0, 23, 154, 120, 0, 25, 157, 120, 0, 23, 158, 118, 0, 25, 161, 121, 0, 23, 157, 120, 0, 23, 157, 120, 0, 24, 160, 120, 0, 23, 162, 120, 0, 25, 166, 123, 0, 24, 160, 122, 0, 23, 164, 122, 0, 26, 165, 124, 0, 25, 168, 124, 0, 25, 171, 124, 0, 23, 164, 122, 0, 24, 165, 122, 0, 27, 170, 126, 0, 24, 171, 124, 0, 26, 177, 126, 0, 205, 204, 204, 61, 20, 145, 115, 0, 23, 148, 118, 0, 22, 151, 118, 0, 22, 154, 117, 0, 23, 157, 120, 0, 22, 149, 119, 0, 22, 152, 118, 0, 23, 155, 118, 0, 23, 158, 118, 0, 25, 161, 121, 0, 23, 154, 120, 0, 25, 157, 120, 0, 24, 159, 119, 0, 25, 161, 121, 0, 24, 165, 123, 0, 23, 159, 121, 0, 25, 160, 119, 0, 24, 163, 121, 0, 25, 166, 123, 0, 25, 171, 125, 0, 205, 204, 204, 61, 21, 139, 115, 0, 23, 143, 116, 0, 23, 144, 115, 0, 21, 148, 118, 0, 23, 151, 118, 0, 21, 144, 116, 0, 21, 146, 116, 0, 24, 149, 119, 0, 23, 153, 119, 0, 25, 157, 120, 0, 21, 148, 118, 0, 22, 150, 117, 0, 23, 153, 119, 0, 23, 157, 120, 0, 23, 159, 119, 0, 23, 151, 118, 0, 23, 154, 120, 0, 23, 157, 120, 0, 23, 159, 119, 0, 26, 165, 123, 0, 205, 204, 204, 61, 20, 133, 113, 0, 20, 136, 113, 0, 21, 139, 115, 0, 20, 143, 115, 0, 23, 146, 117, 0, 19, 137, 113, 0, 21, 139, 114, 0, 21, 144, 116, 0, 20, 145, 115, 0, 21, 150, 119, 0, 22, 140, 116, 0, 22, 145, 116, 0, 22, 147, 117, 0, 22, 149, 119, 0, 24, 154, 119, 0, 21, 144, 115, 0, 22, 147, 117, 0, 23, 151, 118, 0, 23, 154, 120, 0, 24, 159, 119, 0, 205, 204, 204, 61, 20, 129, 110, 0, 19, 130, 111, 0, 22, 136, 113, 0, 20, 138, 114, 0, 22, 142, 115, 0, 19, 132, 112, 0, 22, 135, 115, 0, 20, 138, 114, 0, 22, 142, 115, 0, 21, 146, 116, 0, 20, 136, 113, 0, 20, 138, 114, 0, 22, 142, 115, 0, 22, 145, 116, 0, 22, 149, 119, 0, 21, 139, 115, 0, 21, 144, 116, 0, 22, 146, 116, 0, 22, 149, 119, 0, 21, 155, 120, 0, 205, 204, 204, 61, 20, 127, 109, 0, 19, 130, 111, 0, 20, 133, 113, 0, 20, 136, 113, 0, 21, 139, 113, 0, 20, 131, 112, 0, 22, 133, 114, 0, 21, 137, 114, 0, 22, 140, 116, 0, 21, 144, 115, 0, 21, 134, 114, 0, 19, 137, 113, 0, 22, 140, 116, 0, 20, 144, 116, 0, 23, 148, 118, 0, 21, 137, 114, 0, 21, 141, 116, 0, 21, 143, 116, 0, 23, 148, 118, 0, 23, 153, 119, 0, 205, 204, 204, 61, 18, 125, 109, 0, 21, 128, 112, 0, 19, 130, 111, 0, 21, 135, 112, 0, 20, 138, 114, 0, 21, 130, 111, 0, 18, 131, 111, 0, 21, 134, 114, 0, 20, 138, 114, 0, 22, 142, 115, 0, 18, 131, 111, 0, 21, 134, 114, 0, 20, 138, 114, 0, 22, 142, 115, 0, 22, 145, 116, 0, 19, 135, 112, 0, 20, 138, 114, 0, 23, 142, 118, 0, 21, 144, 115, 0, 22, 150, 117, 0, 205, 204, 204, 61, 18, 123, 109, 0, 18, 124, 109, 0, 20, 127, 111, 0, 19, 131, 112, 0, 22, 136, 113, 0, 18, 125, 109, 0, 19, 127, 111, 0, 19, 131, 112, 0, 21, 135, 112, 0, 20, 138, 114, 0, 20, 129, 110, 0, 20, 131, 112, 0, 21, 134, 114, 0, 20, 138, 114, 0, 22, 142, 115, 0, 20, 131, 112, 0, 19, 135, 114, 0, 19, 137, 113, 0, 22, 140, 116, 0, 21, 146, 116, 0, 205, 204, 204, 61, 17, 119, 106, 0, 20, 122, 109, 0, 18, 125, 109, 0, 21, 130, 111, 0, 19, 132, 112, 0, 17, 123, 108, 0, 18, 126, 110, 0, 21, 130, 111, 0, 20, 131, 112, 0, 20, 136, 113, 0, 19, 126, 110, 0, 18, 129, 110, 0, 20, 131, 112, 0, 20, 135, 112, 0, 21, 139, 115, 0, 18, 129, 110, 0, 20, 131, 112, 0, 19, 135, 114, 0, 21, 139, 115, 0, 20, 144, 116, 0, 205, 204, 204, 61, 17, 119, 106, 0, 19, 121, 108, 0, 18, 125, 109, 0, 20, 129, 110, 0, 19, 132, 112, 0, 17, 122, 108, 0, 18, 125, 109, 0, 20, 129, 110, 0, 20, 131, 112, 0, 22, 136, 113, 0, 18, 125, 109, 0, 19, 127, 111, 0, 19, 130, 111, 0, 21, 135, 112, 0, 19, 137, 113, 0, 19, 127, 111, 0, 19, 130, 111, 0, 19, 134, 114, 0, 20, 138, 114, 0, 20, 144, 116, 0, 205, 204, 204, 61, 18, 118, 106, 0, 19, 121, 108, 0, 19, 124, 109, 0, 20, 129, 110, 0, 19, 132, 112, 0, 17, 122, 107, 0, 18, 125, 109, 0, 20, 127, 111, 0, 19, 130, 111, 0, 22, 136, 113, 0, 18, 125, 109, 0, 19, 127, 111, 0, 19, 130, 111, 0, 21, 135, 112, 0, 19, 137, 113, 0, 20, 127, 111, 0, 18, 129, 110, 0, 19, 134, 114, 0, 20, 138, 114, 0, 19, 143, 115, 0, 205, 204, 204, 61, 18, 118, 106, 0, 19, 121, 108, 0, 19, 124, 109, 0, 20, 129, 110, 0, 19, 132, 112, 0, 17, 122, 107, 0, 18, 125, 109, 0, 20, 127, 111, 0, 19, 130, 111, 0, 22, 136, 113, 0, 18, 125, 109, 0, 19, 127, 111, 0, 19, 130, 111, 0, 21, 135, 112, 0, 19, 137, 113, 0, 20, 127, 111, 0, 18, 129, 110, 0, 19, 134, 114, 0, 20, 138, 114, 0, 19, 143, 115, 0, 205, 204, 204, 61, 18, 118, 106, 0, 19, 121, 108, 0, 19, 124, 109, 0, 20, 129, 110, 0, 18, 131, 111, 0, 17, 122, 107, 0, 18, 125, 109, 0, 20, 127, 111, 0, 19, 130, 111, 0, 22, 136, 113, 0, 18, 125, 109, 0, 19, 127, 111, 0, 19, 130, 111, 0, 21, 135, 112, 0, 20, 138, 114, 0, 20, 127, 111, 0, 18, 129, 110, 0, 19, 134, 115, 0, 20, 138, 114, 0, 19, 143, 115, 0];

    var baseLayer = 'Embedded/Sample_Keypad.chroma';
    ChromaAnimation.closeAnimation(baseLayer);
    ChromaAnimation.openAnimationFromMemory(EMBED_Sample_Keypad, baseLayer, function (baseAnimation) {

        ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);

        displayAndPlayAnimation(baseLayer, "ShowEffect47");
    });
}
