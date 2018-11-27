showTableEffect1.onclick = function () {
    exampleReset();
    handleButtonClick(showTableEffect1);

    // start with a blank animation
    var baseLayer = 'animations/Sprite1_Keyboard.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {
        // play the animation on the dynamic canvas
        displayAndPlayAnimationKeyboard(baseLayer, "ShowTableEffect1");
    });
};
showTableEffect2.onclick = function () {
    exampleReset();
    handleButtonClick(showTableEffect2);

    // start with a blank animation
    var baseLayer = '../ChromaCommon/animations/Tongue1_Keyboard.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

        // play the animation on the dynamic canvas
        displayAndPlayAnimationKeyboard(baseLayer, "ShowTableEffect2");
    });
};
showTableEffect3.onclick = function () {
    exampleReset();
    handleButtonClick(showTableEffect3);

    // start with a blank animation
    var baseLayer = '../ChromaCommon/animations/Tongue1_Keyboard.chroma';

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
        displayAndPlayAnimationKeyboard(baseLayer, "ShowTableEffect3");
    });
};
showTableEffect4.onclick = function () {
    exampleReset();
    handleButtonClick(showTableEffect4);

    // start with a blank animation
    var baseLayer = '../ChromaCommon/animations/OutParticle1_Keyboard.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

        // play the animation on the dynamic canvas
        displayAndPlayAnimationKeyboard(baseLayer, "ShowTableEffect4");
    });
};
showTableEffect5.onclick = function () {
    exampleReset();
    handleButtonClick(showTableEffect5);

    // start with a blank animation
    var baseLayer = '../ChromaCommon/animations/OutParticle1_Keyboard.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

        // turn grayscale particles to blue water
        ChromaAnimation.multiplyIntensityAllFramesRGB(baseLayer, 0, 127, 255);

        // play the animation on the dynamic canvas
        displayAndPlayAnimationKeyboard(baseLayer, "ShowTableEffect5");
    });
};
showTableEffect6.onclick = function () {
    exampleReset();
    handleButtonClick(showTableEffect6);

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
        displayAndPlayAnimationKeyboard(baseLayer, "ShowTableEffect6");
    });
};
showTableEffect7.onclick = function () {
    exampleReset();
    handleButtonClick(showTableEffect7);

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
        displayAndPlayAnimationKeyboard(baseLayer, "ShowTableEffect7");
    });
};
showTableEffect8.onclick = function () {
    exampleReset();
    handleButtonClick(showTableEffect8);

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
        displayAndPlayAnimationKeyboard(baseLayer, "ShowTableEffect8");
    });
};
showTableEffect9.onclick = function () {
    exampleReset();
    handleButtonClick(showTableEffect9);

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
        displayAndPlayAnimationKeyboard(baseLayer, "ShowTableEffect9");
    });
};
showTableEffect10.onclick = function () {
    exampleReset();
    handleButtonClick(showTableEffect10);

    // start with a blank animation
    var baseLayer = '../ChromaCommon/animations/Clouds1_Keyboard.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

        // play the animation on the dynamic canvas
        displayAndPlayAnimationKeyboard(baseLayer, "ShowTableEffect10");
    });
};
showTableEffect11.onclick = function () {
    exampleReset();
    handleButtonClick(showTableEffect11);

    // start with a blank animation
    var baseLayer = '../ChromaCommon/animations/Clouds1_Keyboard.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

        // reduce the intensity of the layer
        ChromaAnimation.multiplyIntensityAllFrames(baseLayer, 0.25);

        // play the animation on the dynamic canvas
        displayAndPlayAnimationKeyboard(baseLayer, "ShowTableEffect11");
    });
};
showTableEffect12.onclick = function () {
    exampleReset();
    handleButtonClick(showTableEffect12);

    // start with a blank animation
    var baseLayer = '../ChromaCommon/animations/BlackAndWhiteRainbow_Keyboard.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

        // play the animation on the dynamic canvas
        displayAndPlayAnimationKeyboard(baseLayer, "ShowTableEffect12");
    });
};
showTableEffect13.onclick = function () {
    exampleReset();
    handleButtonClick(showTableEffect13);

    // start with a blank animation
    var baseLayer = '../ChromaCommon/animations/BlackAndWhiteRainbow_Keyboard.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

        var frameCount = baseAnimation.getFrameCount();

        // loop over all frames in the layer
        for (var frameId = 0; frameId < frameCount; ++frameId) {

            // give color to the layer
            ChromaAnimation.multiplyIntensityRGB(baseLayer, frameId, 255, 255, 0); //yellow
        }

        // play the animation on the dynamic canvas
        displayAndPlayAnimationKeyboard(baseLayer, "ShowTableEffect13");
    });
};
showTableEffect14.onclick = function () {
    exampleReset();
    handleButtonClick(showTableEffect14);

    // start with a blank animation
    var baseLayer = '../ChromaCommon/animations/BlackAndWhiteRainbow_Keyboard.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

        ChromaAnimation.multiplyIntensityAllFramesRGB(baseLayer, 0, 255, 255); //cyan

        // play the animation on the dynamic canvas
        displayAndPlayAnimationKeyboard(baseLayer, "ShowTableEffect14");
    });
};
showTableEffect15.onclick = function () {
    exampleReset();
    handleButtonClick(showTableEffect15);

    // start with a blank animation
    var baseLayer = '../ChromaCommon/animations/BlackAndWhiteRainbow_Keyboard.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

        var frameCount = baseAnimation.getFrameCount();

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
        displayAndPlayAnimationKeyboard(baseLayer, "ShowTableEffect15");
    });
};
showTableEffect16.onclick = function () {
    exampleReset();
    handleButtonClick(showTableEffect16);

    // start with a blank animation
    var baseLayer = '../ChromaCommon/animations/Tongue1_Keyboard.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

        // play the animation on the dynamic canvas
        displayAndPlayAnimationKeyboard(baseLayer, "ShowTableEffect16");
    });
};
showTableEffect17.onclick = function () {
    exampleReset();
    handleButtonClick(showTableEffect17);

    // start with a blank animation
    var baseLayer = '../ChromaCommon/animations/Tongue1_Keyboard.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

        var frameCount = baseAnimation.getFrameCount();

        // loop over all frames in the layer
        for (var frameId = 0; frameId < frameCount; ++frameId) {

            var threshold = 100;

            // give color to the layer
            ChromaAnimation.fillThresholdColorsRGB(baseLayer, frameId, threshold, 255, 0, 0);
        }

        // play the animation on the dynamic canvas
        displayAndPlayAnimationKeyboard(baseLayer, "ShowTableEffect17");
    });
};
showTableEffect18.onclick = function () {
    exampleReset();
    handleButtonClick(showTableEffect18);

    // start with a blank animation
    var baseLayer = '../ChromaCommon/animations/Tongue1_Keyboard.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

        var threshold = 50;
        ChromaAnimation.fillThresholdColorsAllFramesRGB(baseLayer, threshold, 0, 64, 0); //dark green

        // play the animation on the dynamic canvas
        displayAndPlayAnimationKeyboard(baseLayer, "ShowTableEffect18");
    });
};
showTableEffect19.onclick = function () {
    exampleReset();
    handleButtonClick(showTableEffect19);

    // start with a blank animation
    var baseLayer = '../ChromaCommon/animations/Tongue1_Keyboard.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

        var minThreshold = 50; //dark cyan
        var maxThreshold = 150; //purple
        ChromaAnimation.fillThresholdColorsMinMaxAllFramesRGB(baseLayer, minThreshold, 0, 63, 63, maxThreshold, 127, 0, 127);

        // play the animation on the dynamic canvas
        displayAndPlayAnimationKeyboard(baseLayer, "ShowTableEffect19");
    });
};
showTableEffect20.onclick = function () {
    exampleReset();
    handleButtonClick(showTableEffect20);

    // start with a blank animation
    var baseLayer = '../ChromaCommon/animations/Arc3_Keyboard.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

        // play the animation on the dynamic canvas
        displayAndPlayAnimationKeyboard(baseLayer, "ShowTableEffect20");
    });
};
showTableEffect21.onclick = function () {
    exampleReset();
    handleButtonClick(showTableEffect21);

    // start with a blank animation
    var baseLayer = '../ChromaCommon/animations/Blank_Keyboard.chroma';
    var layer2 = '../ChromaCommon/animations/Arc3_Keyboard.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);
    ChromaAnimation.closeAnimation(layer2);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {
        ChromaAnimation.openAnimation(layer2, function (layer2Animation) {

            var background = ChromaAnimation.getRGB(127, 0, 0);

            var frameCount = layer2Animation.getFrameCount();
            ChromaAnimation.makeBlankFrames(baseLayer, frameCount, 0.033, background);

            // copy non zero colors from layer 2 to the base layer
            ChromaAnimation.copyNonZeroAllKeysAllFrames(layer2, baseLayer);

            // play the animation on the dynamic canvas
            displayAndPlayAnimationKeyboard(baseLayer, "ShowTableEffect21");
        });
    });
};
showTableEffect22.onclick = function () {
    exampleReset();
    handleButtonClick(showTableEffect22);

    // start with a blank animation
    var baseLayer = '../ChromaCommon/animations/Blank_Keyboard.chroma';
    var layer2 = '../ChromaCommon/animations/Arc3_Keyboard.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);
    ChromaAnimation.closeAnimation(layer2);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {
        ChromaAnimation.openAnimation(layer2, function (layer2Animation) {

            var frameCount = layer2Animation.getFrameCount();

            // setup background color on the base layer
            var background = ChromaAnimation.getRGB(127, 0, 0);
            ChromaAnimation.makeBlankFrames(baseLayer, frameCount, 0.033, background);

            // replace darker colors with background color
            ChromaAnimation.fillThresholdColorsAllFrames(layer2, 64, background);

            // copy non zero colors from layer 2 to the base layer
            ChromaAnimation.copyNonZeroAllKeysAllFrames(layer2, baseLayer);

            // play the animation on the dynamic canvas
            displayAndPlayAnimationKeyboard(baseLayer, "ShowTableEffect22");
        });
    });
};
showTableEffect23.onclick = function () {
    exampleReset();
    handleButtonClick(showTableEffect23);

    // start with a blank animation
    var baseLayer = '../ChromaCommon/animations/Blank_Keyboard.chroma';
    var layer2 = '../ChromaCommon/animations/Arc3_Keyboard.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);
    ChromaAnimation.closeAnimation(layer2);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {
        ChromaAnimation.openAnimation(layer2, function (layer2Animation) {

            var frameCount = layer2Animation.getFrameCount();

            // setup background color on the base layer
            var background = ChromaAnimation.getRGB(127, 0, 0);
            ChromaAnimation.makeBlankFrames(baseLayer, frameCount, 0.033, background);

            // Add non zero colors from layer 2 to the base layer
            ChromaAnimation.addNonZeroAllKeysAllFrames(layer2, baseLayer);

            // play the animation on the dynamic canvas
            displayAndPlayAnimationKeyboard(baseLayer, "ShowTableEffect23");
        });
    });
};
showTableEffect24.onclick = function () {
    exampleReset();
    handleButtonClick(showTableEffect24);

    // start with a blank animation
    var baseLayer = '../ChromaCommon/animations/Blank_Keyboard.chroma';
    var layer2 = '../ChromaCommon/animations/Arc3_Keyboard.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);
    ChromaAnimation.closeAnimation(layer2);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {
        ChromaAnimation.openAnimation(layer2, function (layer2Animation) {

            var frameCount = layer2Animation.getFrameCount();

            // setup background color on the base layer
            var background = ChromaAnimation.getRGB(127, 0, 0);
            ChromaAnimation.makeBlankFrames(baseLayer, frameCount, 0.033, background);

            // Add non zero colors from layer 2 to the base layer
            ChromaAnimation.subtractNonZeroAllKeysAllFrames(layer2, baseLayer);

            // play the animation on the dynamic canvas
            displayAndPlayAnimationKeyboard(baseLayer, "ShowTableEffect24");
        });
    });
};
showTableEffect25.onclick = function () {
    exampleReset();
    handleButtonClick(showTableEffect25);

    // start with a blank animation
    var baseLayer = '../ChromaCommon/animations/CircleSmall_Keyboard.chroma';
    var layer2 = 'animations/Rainbow_Keyboard.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);
    ChromaAnimation.closeAnimation(layer2);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {
        ChromaAnimation.openAnimation(layer2, function (layer2Animation) {

            var frameCount = layer2Animation.getFrameCount();
            ChromaAnimation.duplicateFirstFrame(baseLayer, frameCount);

            // copy non zero colors from layer 2 to the base layer where the base layer was non zero
            ChromaAnimation.copyNonZeroTargetAllKeysAllFrames(layer2, baseLayer);

            // set a background color
            ChromaAnimation.fillZeroColorAllFramesRGB(baseLayer, 255, 0, 0);

            // set animation playback to 30 FPS
            ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);

            // play the animation on the dynamic canvas
            displayAndPlayAnimationKeyboard(baseLayer, "ShowTableEffect25");
        });
    });
};
showTableEffect26.onclick = function () {
    exampleReset();
    handleButtonClick(showTableEffect26);

    // start with a blank animation
    var baseLayer = '../ChromaCommon/animations/MovementUpLeft_Keyboard.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

        // play the animation on the dynamic canvas
        displayAndPlayAnimationKeyboard(baseLayer, "ShowTableEffect26");
    });
};
showTableEffect27.onclick = function () {
    exampleReset();
    handleButtonClick(showTableEffect27);

    // start with a blank animation
    var baseLayer = '../ChromaCommon/animations/MovementUpLeft_Keyboard.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

        // set animation playback to 30 FPS
        ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);

        // play the animation on the dynamic canvas
        displayAndPlayAnimationKeyboard(baseLayer, "ShowTableEffect27");
    });
};
showTableEffect28.onclick = function () {
    exampleReset();
    handleButtonClick(showTableEffect28);

    // start with a blank animation
    var baseLayer = '../ChromaCommon/animations/MovementUpLeft_Keyboard.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

        // reverse the order of frames
        ChromaAnimation.reverseAllFrames(baseLayer);

        // set animation playback to 30 FPS
        ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);

        // play the animation on the dynamic canvas
        displayAndPlayAnimationKeyboard(baseLayer, "ShowTableEffect28");
    });
};
showTableEffect29.onclick = function () {
    exampleReset();
    handleButtonClick(showTableEffect29);

    // start with a blank animation
    var baseLayer = '../ChromaCommon/animations/MovementUpLeft_Keyboard.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

        // invert all the animation colors
        ChromaAnimation.invertColorsAllFrames(baseLayer);

        // set animation playback to 30 FPS
        ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);

        // play the animation on the dynamic canvas
        displayAndPlayAnimationKeyboard(baseLayer, "ShowTableEffect29");
    });
};
showTableEffect30.onclick = function () {
    exampleReset();
    handleButtonClick(showTableEffect30);

    // start with a blank animation
    var baseLayer = '../ChromaCommon/animations/MovementUpLeft_Keyboard.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

        // duplicate and mirror
        ChromaAnimation.duplicateMirrorFrames(baseLayer);

        // set animation playback to 30 FPS
        ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);

        // play the animation on the dynamic canvas
        displayAndPlayAnimationKeyboard(baseLayer, "ShowTableEffect30");
    });
};
showTableEffect31.onclick = function () {
    exampleReset();
    handleButtonClick(showTableEffect31);

    // start with a blank animation
    var baseLayer = '../ChromaCommon/animations/MovementUpLeft_Keyboard.chroma';

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
        displayAndPlayAnimationKeyboard(baseLayer, "ShowTableEffect31");
    });
};
showTableEffect32.onclick = function () {
    exampleReset();
    handleButtonClick(showTableEffect32);

    // start with a blank animation
    var baseLayer = '../ChromaCommon/animations/MovementUpLeft_Keyboard.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

        // reduce half of the frames, remove every 2nd frame
        ChromaAnimation.reduceFrames(baseLayer, 2);

        // set animation playback to 30 FPS
        ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);

        // play the animation on the dynamic canvas
        displayAndPlayAnimationKeyboard(baseLayer, "ShowTableEffect32");
    });
};
showTableEffect33.onclick = function () {
    exampleReset();
    handleButtonClick(showTableEffect33);

    // start with a blank animation
    var baseLayer = '../ChromaCommon/animations/MovementUpLeft_Keyboard.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

        // double the number of the frames
        ChromaAnimation.duplicateFrames(baseLayer);

        // set animation playback to 30 FPS
        ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);

        // play the animation on the dynamic canvas
        displayAndPlayAnimationKeyboard(baseLayer, "ShowTableEffect33");
    });
};
showTableEffect34.onclick = function () {
    exampleReset();
    handleButtonClick(showTableEffect34);

    // start with a blank animation
    var baseLayer = '../ChromaCommon/animations/MovementUpLeft_Keyboard.chroma';

    // close the blank animation if it's already loaded, discarding any changes
    ChromaAnimation.closeAnimation(baseLayer);

    // open the blank animation, passing a reference to the base animation when loading has completed
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

        // trim the start of the animation, so it starts at frame 10
        ChromaAnimation.trimStartFrames(baseLayer, 10);

        // set animation playback to 30 FPS
        ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);

        // play the animation on the dynamic canvas
        displayAndPlayAnimationKeyboard(baseLayer, "ShowTableEffect34");
    });
};
showTableEffect35.onclick = function () {
    exampleReset();
    handleButtonClick(showTableEffect35);

    // start with a blank animation
    var baseLayer = '../ChromaCommon/animations/MovementUpLeft_Keyboard.chroma';

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
        displayAndPlayAnimationKeyboard(baseLayer, "ShowTableEffect35");
    });
};
showTableEffect36.onclick = function () {
    exampleReset();
    handleButtonClick(showTableEffect36);

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
        displayAndPlayAnimationKeyboard(baseLayer, "ShowTableEffect36");
    });
};
showTableEffect37.onclick = function () {
    exampleReset();
    handleButtonClick(showTableEffect37);

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
        displayAndPlayAnimationKeyboard(baseLayer, "ShowTableEffect37");
    });
};
showTableEffect38.onclick = function () {
    exampleReset();
    handleButtonClick(showTableEffect38);

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
        displayAndPlayAnimationKeyboard(baseLayer, "ShowTableEffect38");
    });
};
showTableEffect39.onclick = function () {
    exampleReset();
    handleButtonClick(showTableEffect39);

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
        displayAndPlayAnimationKeyboard(baseLayer, "ShowTableEffect39");
    });
};
