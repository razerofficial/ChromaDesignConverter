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