func showEffect1():
	ChromaAnimationAPI.UseIdleAnimation(EChromaSDKDeviceEnum.DE_Keyboard, false)
	# start with a blank animation
	var baseLayer = "Animations/Sprite1_Keyboard.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect1ChromaLink():
	# start with a blank animation
	var baseLayer = "Animations/Sprite1_ChromaLink.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect1Headset():
	# start with a blank animation
	var baseLayer = "Animations/Sprite1_Headset.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect1Mousepad():
	# start with a blank animation
	var baseLayer = "Animations/Sprite1_Mousepad.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect1Mouse():
	# start with a blank animation
	var baseLayer = "Animations/Sprite1_Mouse.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect1Keypad():
	# start with a blank animation
	var baseLayer = "Animations/Sprite1_Keypad.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect2():
	# start with a blank animation
	var baseLayer = "Animations/Trails_Keyboard.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect2ChromaLink():
	# start with a blank animation
	var baseLayer = "Animations/Trails_ChromaLink.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect2Headset():
	# start with a blank animation
	var baseLayer = "Animations/Trails_Headset.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect2Mousepad():
	# start with a blank animation
	var baseLayer = "Animations/Trails_Mousepad.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect2Mouse():
	# start with a blank animation
	var baseLayer = "Animations/Trails_Mouse.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect2Keypad():
	# start with a blank animation
	var baseLayer = "Animations/Trails_Keypad.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect3():
	# start with a blank animation
	var baseLayer = "Animations/Trails_Keyboard.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# set middle color green
	ChromaAnimationAPI.MultiplyIntensityAllFramesRGBName(baseLayer, 0, 255, 0)
	var minThreshold = 50; #set outer color to red
	var maxThreshold = 150; #set main color to blue
	ChromaAnimationAPI.FillThresholdColorsMinMaxAllFramesRGBName(baseLayer, minThreshold, 255, 0, 0, maxThreshold, 0, 0, 255)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect3ChromaLink():
	# start with a blank animation
	var baseLayer = "Animations/Trails_ChromaLink.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# set middle color green
	ChromaAnimationAPI.MultiplyIntensityAllFramesRGBName(baseLayer, 0, 255, 0)
	var minThreshold = 50; #set outer color to red
	var maxThreshold = 150; #set main color to blue
	ChromaAnimationAPI.FillThresholdColorsMinMaxAllFramesRGBName(baseLayer, minThreshold, 255, 0, 0, maxThreshold, 0, 0, 255)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect3Headset():
	# start with a blank animation
	var baseLayer = "Animations/Trails_Headset.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# set middle color green
	ChromaAnimationAPI.MultiplyIntensityAllFramesRGBName(baseLayer, 0, 255, 0)
	var minThreshold = 50; #set outer color to red
	var maxThreshold = 150; #set main color to blue
	ChromaAnimationAPI.FillThresholdColorsMinMaxAllFramesRGBName(baseLayer, minThreshold, 255, 0, 0, maxThreshold, 0, 0, 255)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect3Mousepad():
	# start with a blank animation
	var baseLayer = "Animations/Trails_Mousepad.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# set middle color green
	ChromaAnimationAPI.MultiplyIntensityAllFramesRGBName(baseLayer, 0, 255, 0)
	var minThreshold = 50; #set outer color to red
	var maxThreshold = 150; #set main color to blue
	ChromaAnimationAPI.FillThresholdColorsMinMaxAllFramesRGBName(baseLayer, minThreshold, 255, 0, 0, maxThreshold, 0, 0, 255)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect3Mouse():
	# start with a blank animation
	var baseLayer = "Animations/Trails_Mouse.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# set middle color green
	ChromaAnimationAPI.MultiplyIntensityAllFramesRGBName(baseLayer, 0, 255, 0)
	var minThreshold = 50; #set outer color to red
	var maxThreshold = 150; #set main color to blue
	ChromaAnimationAPI.FillThresholdColorsMinMaxAllFramesRGBName(baseLayer, minThreshold, 255, 0, 0, maxThreshold, 0, 0, 255)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect3Keypad():
	# start with a blank animation
	var baseLayer = "Animations/Blank_Keypad.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# static color
	ChromaAnimationAPI.FillZeroColorAllFramesRGBName(baseLayer, 255, 0, 0)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect4():
	# start with a blank animation
	var baseLayer = "Animations/ParticlesOut_Keyboard.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect4ChromaLink():
	# start with a blank animation
	var baseLayer = "Animations/ParticlesOut_ChromaLink.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect4Headset():
	# start with a blank animation
	var baseLayer = "Animations/ParticlesOut_Headset.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect4Mousepad():
	# start with a blank animation
	var baseLayer = "Animations/ParticlesOut_Mousepad.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect4Mouse():
	# start with a blank animation
	var baseLayer = "Animations/ParticlesOut_Mouse.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect4Keypad():
	# start with a blank animation
	var baseLayer = "Animations/ParticlesOut_Keypad.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect5():
	# start with a blank animation
	var baseLayer = "Animations/ParticlesOut_Keyboard.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# turn grayscale particles to blue water
	ChromaAnimationAPI.MultiplyIntensityAllFramesRGBName(baseLayer, 0, 127, 255)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect5ChromaLink():
	# start with a blank animation
	var baseLayer = "Animations/ParticlesOut_ChromaLink.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# turn grayscale particles to blue water
	ChromaAnimationAPI.MultiplyIntensityAllFramesRGBName(baseLayer, 0, 127, 255)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect5Headset():
	# start with a blank animation
	var baseLayer = "Animations/ParticlesOut_Headset.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# turn grayscale particles to blue water
	ChromaAnimationAPI.MultiplyIntensityAllFramesRGBName(baseLayer, 0, 127, 255)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect5Mousepad():
	# start with a blank animation
	var baseLayer = "Animations/ParticlesOut_Mousepad.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# turn grayscale particles to blue water
	ChromaAnimationAPI.MultiplyIntensityAllFramesRGBName(baseLayer, 0, 127, 255)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect5Mouse():
	# start with a blank animation
	var baseLayer = "Animations/ParticlesOut_Mouse.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# turn grayscale particles to blue water
	ChromaAnimationAPI.MultiplyIntensityAllFramesRGBName(baseLayer, 0, 127, 255)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect5Keypad():
	# start with a blank animation
	var baseLayer = "Animations/ParticlesOut_Keypad.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# turn grayscale particles to blue water
	ChromaAnimationAPI.MultiplyIntensityAllFramesRGBName(baseLayer, 0, 127, 255)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect6():
	# start with a blank animation
	var baseLayer = "Animations/Blank_Keyboard.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# the length of the animation
	var frameCount = 50;
	# set all frames to white, with all frames set to 30PS
	ChromaAnimationAPI.MakeBlankFramesRGBName(baseLayer, frameCount, 0.033, 255, 255, 255)
	# fade the start of the animation starting at frame zero to 40
	ChromaAnimationAPI.FadeStartFramesName(baseLayer, 40)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect6ChromaLink():
	# start with a blank animation
	var baseLayer = "Animations/Blank_ChromaLink.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# the length of the animation
	var frameCount = 50;
	# set all frames to white, with all frames set to 30PS
	ChromaAnimationAPI.MakeBlankFramesRGBName(baseLayer, frameCount, 0.033, 255, 255, 255)
	# fade the start of the animation starting at frame zero to 40
	ChromaAnimationAPI.FadeStartFramesName(baseLayer, 40)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect6Headset():
	# start with a blank animation
	var baseLayer = "Animations/Blank_Headset.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# the length of the animation
	var frameCount = 50;
	# set all frames to white, with all frames set to 30PS
	ChromaAnimationAPI.MakeBlankFramesRGBName(baseLayer, frameCount, 0.033, 255, 255, 255)
	# fade the start of the animation starting at frame zero to 40
	ChromaAnimationAPI.FadeStartFramesName(baseLayer, 40)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect6Mousepad():
	# start with a blank animation
	var baseLayer = "Animations/Blank_Mousepad.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# the length of the animation
	var frameCount = 50;
	# set all frames to white, with all frames set to 30PS
	ChromaAnimationAPI.MakeBlankFramesRGBName(baseLayer, frameCount, 0.033, 255, 255, 255)
	# fade the start of the animation starting at frame zero to 40
	ChromaAnimationAPI.FadeStartFramesName(baseLayer, 40)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect6Mouse():
	# start with a blank animation
	var baseLayer = "Animations/Blank_Mouse.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# the length of the animation
	var frameCount = 50;
	# set all frames to white, with all frames set to 30PS
	ChromaAnimationAPI.MakeBlankFramesRGBName(baseLayer, frameCount, 0.033, 255, 255, 255)
	# fade the start of the animation starting at frame zero to 40
	ChromaAnimationAPI.FadeStartFramesName(baseLayer, 40)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect6Keypad():
	# start with a blank animation
	var baseLayer = "Animations/Blank_Keypad.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# the length of the animation
	var frameCount = 50;
	# set all frames to white, with all frames set to 30PS
	ChromaAnimationAPI.MakeBlankFramesRGBName(baseLayer, frameCount, 0.033, 255, 255, 255)
	# fade the start of the animation starting at frame zero to 40
	ChromaAnimationAPI.FadeStartFramesName(baseLayer, 40)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect7():
	# start with a blank animation
	var baseLayer = "Animations/Blank_Keyboard.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# the length of the animation
	var frameCount = 50;
	# set all frames to white, with all frames set to 30PS
	ChromaAnimationAPI.MakeBlankFramesRGBName(baseLayer, frameCount, 0.033, 255, 255, 255)
	# fade the end of the animation starting at frame length - 40 (60)
	ChromaAnimationAPI.FadeEndFramesName(baseLayer, 40)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect7ChromaLink():
	# start with a blank animation
	var baseLayer = "Animations/Blank_ChromaLink.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# the length of the animation
	var frameCount = 50;
	# set all frames to white, with all frames set to 30PS
	ChromaAnimationAPI.MakeBlankFramesRGBName(baseLayer, frameCount, 0.033, 255, 255, 255)
	# fade the end of the animation starting at frame length - 40 (60)
	ChromaAnimationAPI.FadeEndFramesName(baseLayer, 40)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect7Headset():
	# start with a blank animation
	var baseLayer = "Animations/Blank_Headset.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# the length of the animation
	var frameCount = 50;
	# set all frames to white, with all frames set to 30PS
	ChromaAnimationAPI.MakeBlankFramesRGBName(baseLayer, frameCount, 0.033, 255, 255, 255)
	# fade the end of the animation starting at frame length - 40 (60)
	ChromaAnimationAPI.FadeEndFramesName(baseLayer, 40)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect7Mousepad():
	# start with a blank animation
	var baseLayer = "Animations/Blank_Mousepad.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# the length of the animation
	var frameCount = 50;
	# set all frames to white, with all frames set to 30PS
	ChromaAnimationAPI.MakeBlankFramesRGBName(baseLayer, frameCount, 0.033, 255, 255, 255)
	# fade the end of the animation starting at frame length - 40 (60)
	ChromaAnimationAPI.FadeEndFramesName(baseLayer, 40)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect7Mouse():
	# start with a blank animation
	var baseLayer = "Animations/Blank_Mouse.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# the length of the animation
	var frameCount = 50;
	# set all frames to white, with all frames set to 30PS
	ChromaAnimationAPI.MakeBlankFramesRGBName(baseLayer, frameCount, 0.033, 255, 255, 255)
	# fade the end of the animation starting at frame length - 40 (60)
	ChromaAnimationAPI.FadeEndFramesName(baseLayer, 40)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect7Keypad():
	# start with a blank animation
	var baseLayer = "Animations/Blank_Keypad.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# the length of the animation
	var frameCount = 50;
	# set all frames to white, with all frames set to 30PS
	ChromaAnimationAPI.MakeBlankFramesRGBName(baseLayer, frameCount, 0.033, 255, 255, 255)
	# fade the end of the animation starting at frame length - 40 (60)
	ChromaAnimationAPI.FadeEndFramesName(baseLayer, 40)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect8():
	# start with a blank animation
	var baseLayer = "Animations/Blank_Keyboard.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# the length of the animation
	var frameCount = 50;
	# set all frames to white, with all frames set to 30PS
	ChromaAnimationAPI.MakeBlankFramesRGBName(baseLayer, frameCount, 0.033, 255, 255, 255)
	# fade the start of the animation starting at frame zero to 40
	ChromaAnimationAPI.FadeStartFramesName(baseLayer, 40)
	# fade the end of the animation starting at frame length - 40 (60)
	ChromaAnimationAPI.FadeEndFramesName(baseLayer, 40)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect8ChromaLink():
	# start with a blank animation
	var baseLayer = "Animations/Blank_ChromaLink.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# the length of the animation
	var frameCount = 50;
	# set all frames to white, with all frames set to 30PS
	ChromaAnimationAPI.MakeBlankFramesRGBName(baseLayer, frameCount, 0.033, 255, 255, 255)
	# fade the start of the animation starting at frame zero to 40
	ChromaAnimationAPI.FadeStartFramesName(baseLayer, 40)
	# fade the end of the animation starting at frame length - 40 (60)
	ChromaAnimationAPI.FadeEndFramesName(baseLayer, 40)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect8Headset():
	# start with a blank animation
	var baseLayer = "Animations/Blank_Headset.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# the length of the animation
	var frameCount = 50;
	# set all frames to white, with all frames set to 30PS
	ChromaAnimationAPI.MakeBlankFramesRGBName(baseLayer, frameCount, 0.033, 255, 255, 255)
	# fade the start of the animation starting at frame zero to 40
	ChromaAnimationAPI.FadeStartFramesName(baseLayer, 40)
	# fade the end of the animation starting at frame length - 40 (60)
	ChromaAnimationAPI.FadeEndFramesName(baseLayer, 40)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect8Mousepad():
	# start with a blank animation
	var baseLayer = "Animations/Blank_Mousepad.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# the length of the animation
	var frameCount = 50;
	# set all frames to white, with all frames set to 30PS
	ChromaAnimationAPI.MakeBlankFramesRGBName(baseLayer, frameCount, 0.033, 255, 255, 255)
	# fade the start of the animation starting at frame zero to 40
	ChromaAnimationAPI.FadeStartFramesName(baseLayer, 40)
	# fade the end of the animation starting at frame length - 40 (60)
	ChromaAnimationAPI.FadeEndFramesName(baseLayer, 40)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect8Mouse():
	# start with a blank animation
	var baseLayer = "Animations/Blank_Mouse.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# the length of the animation
	var frameCount = 50;
	# set all frames to white, with all frames set to 30PS
	ChromaAnimationAPI.MakeBlankFramesRGBName(baseLayer, frameCount, 0.033, 255, 255, 255)
	# fade the start of the animation starting at frame zero to 40
	ChromaAnimationAPI.FadeStartFramesName(baseLayer, 40)
	# fade the end of the animation starting at frame length - 40 (60)
	ChromaAnimationAPI.FadeEndFramesName(baseLayer, 40)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect8Keypad():
	# start with a blank animation
	var baseLayer = "Animations/Blank_Keypad.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# the length of the animation
	var frameCount = 50;
	# set all frames to white, with all frames set to 30PS
	ChromaAnimationAPI.MakeBlankFramesRGBName(baseLayer, frameCount, 0.033, 255, 255, 255)
	# fade the start of the animation starting at frame zero to 40
	ChromaAnimationAPI.FadeStartFramesName(baseLayer, 40)
	# fade the end of the animation starting at frame length - 40 (60)
	ChromaAnimationAPI.FadeEndFramesName(baseLayer, 40)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect9():
	# start with a blank animation
	var baseLayer = "Animations/Blank_Keyboard.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# the length of the animation
	var frameCount = 50;
	# set all frames to white, with all frames set to 30PS
	ChromaAnimationAPI.MakeBlankFramesRGBName(baseLayer, frameCount, 0.033, 255, 255, 255)
	#integer number of times to blink during animation
	var speed = 2;
	# loop over all frames in the layer
	for frameId in range(0, frameCount, 1):
		#Math.cos gives a smooth 1 to 0 to 1 curve, subtracting from one inverts the curve
		var t = 1 - abs(sin(speed * PI * (frameId + 1) / float(frameCount)))
		# multiply the frame by the 't' intensity
		ChromaAnimationAPI.MultiplyIntensityName(baseLayer, frameId, t)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect9ChromaLink():
	# start with a blank animation
	var baseLayer = "Animations/Blank_ChromaLink.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# the length of the animation
	var frameCount = 50;
	# set all frames to white, with all frames set to 30PS
	ChromaAnimationAPI.MakeBlankFramesRGBName(baseLayer, frameCount, 0.033, 255, 255, 255)
	#integer number of times to blink during animation
	var speed = 2;
	# loop over all frames in the layer
	for frameId in range(0, frameCount, 1):
		#Math.cos gives a smooth 1 to 0 to 1 curve, subtracting from one inverts the curve
		var t = 1 - abs(sin(speed * PI * (frameId + 1) / float(frameCount)))
		# multiply the frame by the 't' intensity
		ChromaAnimationAPI.MultiplyIntensityName(baseLayer, frameId, t)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect9Headset():
	# start with a blank animation
	var baseLayer = "Animations/Blank_Headset.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# the length of the animation
	var frameCount = 50;
	# set all frames to white, with all frames set to 30PS
	ChromaAnimationAPI.MakeBlankFramesRGBName(baseLayer, frameCount, 0.033, 255, 255, 255)
	#integer number of times to blink during animation
	var speed = 2;
	# loop over all frames in the layer
	for frameId in range(0, frameCount, 1):
		#Math.cos gives a smooth 1 to 0 to 1 curve, subtracting from one inverts the curve
		var t = 1 - abs(sin(speed * PI * (frameId + 1) / float(frameCount)))
		# multiply the frame by the 't' intensity
		ChromaAnimationAPI.MultiplyIntensityName(baseLayer, frameId, t)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect9Mousepad():
	# start with a blank animation
	var baseLayer = "Animations/Blank_Mousepad.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# the length of the animation
	var frameCount = 50;
	# set all frames to white, with all frames set to 30PS
	ChromaAnimationAPI.MakeBlankFramesRGBName(baseLayer, frameCount, 0.033, 255, 255, 255)
	#integer number of times to blink during animation
	var speed = 2;
	# loop over all frames in the layer
	for frameId in range(0, frameCount, 1):
		#Math.cos gives a smooth 1 to 0 to 1 curve, subtracting from one inverts the curve
		var t = 1 - abs(sin(speed * PI * (frameId + 1) / float(frameCount)))
		# multiply the frame by the 't' intensity
		ChromaAnimationAPI.MultiplyIntensityName(baseLayer, frameId, t)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect9Mouse():
	# start with a blank animation
	var baseLayer = "Animations/Blank_Mouse.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# the length of the animation
	var frameCount = 50;
	# set all frames to white, with all frames set to 30PS
	ChromaAnimationAPI.MakeBlankFramesRGBName(baseLayer, frameCount, 0.033, 255, 255, 255)
	#integer number of times to blink during animation
	var speed = 2;
	# loop over all frames in the layer
	for frameId in range(0, frameCount, 1):
		#Math.cos gives a smooth 1 to 0 to 1 curve, subtracting from one inverts the curve
		var t = 1 - abs(sin(speed * PI * (frameId + 1) / float(frameCount)))
		# multiply the frame by the 't' intensity
		ChromaAnimationAPI.MultiplyIntensityName(baseLayer, frameId, t)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect9Keypad():
	# start with a blank animation
	var baseLayer = "Animations/Blank_Keypad.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# the length of the animation
	var frameCount = 50;
	# set all frames to white, with all frames set to 30PS
	ChromaAnimationAPI.MakeBlankFramesRGBName(baseLayer, frameCount, 0.033, 255, 255, 255)
	#integer number of times to blink during animation
	var speed = 2;
	# loop over all frames in the layer
	for frameId in range(0, frameCount, 1):
		#Math.cos gives a smooth 1 to 0 to 1 curve, subtracting from one inverts the curve
		var t = 1 - abs(sin(speed * PI * (frameId + 1) / float(frameCount)))
		# multiply the frame by the 't' intensity
		ChromaAnimationAPI.MultiplyIntensityName(baseLayer, frameId, t)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect10():
	# start with a blank animation
	var baseLayer = "Animations/Particles2_Keyboard.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect10ChromaLink():
	# start with a blank animation
	var baseLayer = "Animations/Particles2_ChromaLink.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect10Headset():
	# start with a blank animation
	var baseLayer = "Animations/Particles2_Headset.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect10Mousepad():
	# start with a blank animation
	var baseLayer = "Animations/Particles2_Mousepad.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect10Mouse():
	# start with a blank animation
	var baseLayer = "Animations/Particles2_Mouse.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect10Keypad():
	# start with a blank animation
	var baseLayer = "Animations/Particles2_Keypad.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect11():
	# start with a blank animation
	var baseLayer = "Animations/Particles2_Keyboard.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# reduce the intensity of the layer
	ChromaAnimationAPI.MultiplyIntensityAllFramesName(baseLayer, 0.25)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect11ChromaLink():
	# start with a blank animation
	var baseLayer = "Animations/Particles2_ChromaLink.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# reduce the intensity of the layer
	ChromaAnimationAPI.MultiplyIntensityAllFramesName(baseLayer, 0.25)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect11Headset():
	# start with a blank animation
	var baseLayer = "Animations/Particles2_Headset.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# reduce the intensity of the layer
	ChromaAnimationAPI.MultiplyIntensityAllFramesName(baseLayer, 0.25)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect11Mousepad():
	# start with a blank animation
	var baseLayer = "Animations/Particles2_Mousepad.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# reduce the intensity of the layer
	ChromaAnimationAPI.MultiplyIntensityAllFramesName(baseLayer, 0.25)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect11Mouse():
	# start with a blank animation
	var baseLayer = "Animations/Particles2_Mouse.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# reduce the intensity of the layer
	ChromaAnimationAPI.MultiplyIntensityAllFramesName(baseLayer, 0.25)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect11Keypad():
	# start with a blank animation
	var baseLayer = "Animations/Particles2_Keypad.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# reduce the intensity of the layer
	ChromaAnimationAPI.MultiplyIntensityAllFramesName(baseLayer, 0.25)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect12():
	# start with a blank animation
	var baseLayer = "Animations/BlackAndWhiteRainbow_Keyboard.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect12ChromaLink():
	# start with a blank animation
	var baseLayer = "Animations/BlackAndWhiteRainbow_ChromaLink.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect12Headset():
	# start with a blank animation
	var baseLayer = "Animations/BlackAndWhiteRainbow_Headset.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect12Mousepad():
	# start with a blank animation
	var baseLayer = "Animations/BlackAndWhiteRainbow_Mousepad.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect12Mouse():
	# start with a blank animation
	var baseLayer = "Animations/BlackAndWhiteRainbow_Mouse.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect12Keypad():
	# start with a blank animation
	var baseLayer = "Animations/BlackAndWhiteRainbow_Keypad.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect13():
	# start with a blank animation
	var baseLayer = "Animations/BlackAndWhiteRainbow_Keyboard.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	var frameCount = ChromaAnimationAPI.GetFrameCountName(baseLayer)
	# loop over all frames in the layer
	for frameId in range(0, frameCount, 1):
		# give color to the layer
		ChromaAnimationAPI.MultiplyIntensityRGBName(baseLayer, frameId, 255, 255, 0) #yellow
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect13ChromaLink():
	# start with a blank animation
	var baseLayer = "Animations/BlackAndWhiteRainbow_ChromaLink.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	var frameCount = ChromaAnimationAPI.GetFrameCountName(baseLayer)
	# loop over all frames in the layer
	for frameId in range(0, frameCount, 1):
		# give color to the layer
		ChromaAnimationAPI.MultiplyIntensityRGBName(baseLayer, frameId, 255, 255, 0) #yellow
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect13Headset():
	# start with a blank animation
	var baseLayer = "Animations/BlackAndWhiteRainbow_Headset.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	var frameCount = ChromaAnimationAPI.GetFrameCountName(baseLayer)
	# loop over all frames in the layer
	for frameId in range(0, frameCount, 1):
		# give color to the layer
		ChromaAnimationAPI.MultiplyIntensityRGBName(baseLayer, frameId, 255, 255, 0) #yellow
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect13Mousepad():
	# start with a blank animation
	var baseLayer = "Animations/BlackAndWhiteRainbow_Mousepad.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	var frameCount = ChromaAnimationAPI.GetFrameCountName(baseLayer)
	# loop over all frames in the layer
	for frameId in range(0, frameCount, 1):
		# give color to the layer
		ChromaAnimationAPI.MultiplyIntensityRGBName(baseLayer, frameId, 255, 255, 0) #yellow
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect13Mouse():
	# start with a blank animation
	var baseLayer = "Animations/BlackAndWhiteRainbow_Mouse.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	var frameCount = ChromaAnimationAPI.GetFrameCountName(baseLayer)
	# loop over all frames in the layer
	for frameId in range(0, frameCount, 1):
		# give color to the layer
		ChromaAnimationAPI.MultiplyIntensityRGBName(baseLayer, frameId, 255, 255, 0) #yellow
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect13Keypad():
	# start with a blank animation
	var baseLayer = "Animations/BlackAndWhiteRainbow_Keypad.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	var frameCount = ChromaAnimationAPI.GetFrameCountName(baseLayer)
	# loop over all frames in the layer
	for frameId in range(0, frameCount, 1):
		# give color to the layer
		ChromaAnimationAPI.MultiplyIntensityRGBName(baseLayer, frameId, 255, 255, 0) #yellow
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect14():
	# start with a blank animation
	var baseLayer = "Animations/BlackAndWhiteRainbow_Keyboard.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	ChromaAnimationAPI.MultiplyIntensityAllFramesRGBName(baseLayer, 0, 255, 255) #cyan
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect14ChromaLink():
	# start with a blank animation
	var baseLayer = "Animations/BlackAndWhiteRainbow_ChromaLink.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	ChromaAnimationAPI.MultiplyIntensityAllFramesRGBName(baseLayer, 0, 255, 255) #cyan
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect14Headset():
	# start with a blank animation
	var baseLayer = "Animations/BlackAndWhiteRainbow_Headset.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	ChromaAnimationAPI.MultiplyIntensityAllFramesRGBName(baseLayer, 0, 255, 255) #cyan
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect14Mousepad():
	# start with a blank animation
	var baseLayer = "Animations/BlackAndWhiteRainbow_Mousepad.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	ChromaAnimationAPI.MultiplyIntensityAllFramesRGBName(baseLayer, 0, 255, 255) #cyan
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect14Mouse():
	# start with a blank animation
	var baseLayer = "Animations/BlackAndWhiteRainbow_Mouse.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	ChromaAnimationAPI.MultiplyIntensityAllFramesRGBName(baseLayer, 0, 255, 255) #cyan
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect14Keypad():
	# start with a blank animation
	var baseLayer = "Animations/BlackAndWhiteRainbow_Keypad.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	ChromaAnimationAPI.MultiplyIntensityAllFramesRGBName(baseLayer, 0, 255, 255) #cyan
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect15():
	# start with a blank animation
	var baseLayer = "Animations/BlackAndWhiteRainbow_Keyboard.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	var frameCount = ChromaAnimationAPI.GetFrameCountName(baseLayer)
	var color1 = ChromaAnimationAPI.GetRGB(255, 0, 0) #red
	var color2 = ChromaAnimationAPI.GetRGB(0, 255, 0) #green
	#integer number of times to transition during animation
	var speed = 2;
	# loop over all frames in the layer
	for frameId in range(0, frameCount, 1):
		#Math.cos gives a smooth 1 to 0 to 1 curve
		var t = abs(sin(speed * PI * (frameId + 1) / float(frameCount)))
		# use t to transition from color 1 to color 2
		var color = ChromaAnimationAPI.LerpColor(color1, color2, t)
		# give color to the layer
		ChromaAnimationAPI.MultiplyIntensityColorName(baseLayer, frameId, color)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect15ChromaLink():
	# start with a blank animation
	var baseLayer = "Animations/BlackAndWhiteRainbow_ChromaLink.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	var frameCount = ChromaAnimationAPI.GetFrameCountName(baseLayer)
	var color1 = ChromaAnimationAPI.GetRGB(255, 0, 0) #red
	var color2 = ChromaAnimationAPI.GetRGB(0, 255, 0) #green
	#integer number of times to transition during animation
	var speed = 2;
	# loop over all frames in the layer
	for frameId in range(0, frameCount, 1):
		#Math.cos gives a smooth 1 to 0 to 1 curve
		var t = abs(sin(speed * PI * (frameId + 1) / float(frameCount)))
		# use t to transition from color 1 to color 2
		var color = ChromaAnimationAPI.LerpColor(color1, color2, t)
		# give color to the layer
		ChromaAnimationAPI.MultiplyIntensityColorName(baseLayer, frameId, color)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect15Headset():
	# start with a blank animation
	var baseLayer = "Animations/BlackAndWhiteRainbow_Headset.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	var frameCount = ChromaAnimationAPI.GetFrameCountName(baseLayer)
	var color1 = ChromaAnimationAPI.GetRGB(255, 0, 0) #red
	var color2 = ChromaAnimationAPI.GetRGB(0, 255, 0) #green
	#integer number of times to transition during animation
	var speed = 2;
	# loop over all frames in the layer
	for frameId in range(0, frameCount, 1):
		#Math.cos gives a smooth 1 to 0 to 1 curve
		var t = abs(sin(speed * PI * (frameId + 1) / float(frameCount)))
		# use t to transition from color 1 to color 2
		var color = ChromaAnimationAPI.LerpColor(color1, color2, t)
		# give color to the layer
		ChromaAnimationAPI.MultiplyIntensityColorName(baseLayer, frameId, color)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect15Mousepad():
	# start with a blank animation
	var baseLayer = "Animations/BlackAndWhiteRainbow_Mousepad.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	var frameCount = ChromaAnimationAPI.GetFrameCountName(baseLayer)
	var color1 = ChromaAnimationAPI.GetRGB(255, 0, 0) #red
	var color2 = ChromaAnimationAPI.GetRGB(0, 255, 0) #green
	#integer number of times to transition during animation
	var speed = 2;
	# loop over all frames in the layer
	for frameId in range(0, frameCount, 1):
		#Math.cos gives a smooth 1 to 0 to 1 curve
		var t = abs(sin(speed * PI * (frameId + 1) / float(frameCount)))
		# use t to transition from color 1 to color 2
		var color = ChromaAnimationAPI.LerpColor(color1, color2, t)
		# give color to the layer
		ChromaAnimationAPI.MultiplyIntensityColorName(baseLayer, frameId, color)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect15Mouse():
	# start with a blank animation
	var baseLayer = "Animations/BlackAndWhiteRainbow_Mouse.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	var frameCount = ChromaAnimationAPI.GetFrameCountName(baseLayer)
	var color1 = ChromaAnimationAPI.GetRGB(255, 0, 0) #red
	var color2 = ChromaAnimationAPI.GetRGB(0, 255, 0) #green
	#integer number of times to transition during animation
	var speed = 2;
	# loop over all frames in the layer
	for frameId in range(0, frameCount, 1):
		#Math.cos gives a smooth 1 to 0 to 1 curve
		var t = abs(sin(speed * PI * (frameId + 1) / float(frameCount)))
		# use t to transition from color 1 to color 2
		var color = ChromaAnimationAPI.LerpColor(color1, color2, t)
		# give color to the layer
		ChromaAnimationAPI.MultiplyIntensityColorName(baseLayer, frameId, color)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect15Keypad():
	# start with a blank animation
	var baseLayer = "Animations/BlackAndWhiteRainbow_Keypad.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	var frameCount = ChromaAnimationAPI.GetFrameCountName(baseLayer)
	var color1 = ChromaAnimationAPI.GetRGB(255, 0, 0) #red
	var color2 = ChromaAnimationAPI.GetRGB(0, 255, 0) #green
	#integer number of times to transition during animation
	var speed = 2;
	# loop over all frames in the layer
	for frameId in range(0, frameCount, 1):
		#Math.cos gives a smooth 1 to 0 to 1 curve
		var t = abs(sin(speed * PI * (frameId + 1) / float(frameCount)))
		# use t to transition from color 1 to color 2
		var color = ChromaAnimationAPI.LerpColor(color1, color2, t)
		# give color to the layer
		ChromaAnimationAPI.MultiplyIntensityColorName(baseLayer, frameId, color)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect16():
	# start with a blank animation
	var baseLayer = "Animations/Trails_Keyboard.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect16ChromaLink():
	# start with a blank animation
	var baseLayer = "Animations/Trails_ChromaLink.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect16Headset():
	# start with a blank animation
	var baseLayer = "Animations/Trails_Headset.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect16Mousepad():
	# start with a blank animation
	var baseLayer = "Animations/Trails_Mousepad.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect16Mouse():
	# start with a blank animation
	var baseLayer = "Animations/Trails_Mouse.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect16Keypad():
	# start with a blank animation
	var baseLayer = "Animations/Trails_Keypad.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect17():
	# start with a blank animation
	var baseLayer = "Animations/Trails_Keyboard.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	var frameCount = ChromaAnimationAPI.GetFrameCountName(baseLayer)
	# loop over all frames in the layer
	for frameId in range(0, frameCount, 1):
		var threshold = 100;
		# give color to the layer
		ChromaAnimationAPI.FillThresholdColorsRGBName(baseLayer, frameId, threshold, 255, 0, 0)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect17ChromaLink():
	# start with a blank animation
	var baseLayer = "Animations/Trails_ChromaLink.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	var frameCount = ChromaAnimationAPI.GetFrameCountName(baseLayer)
	# loop over all frames in the layer
	for frameId in range(0, frameCount, 1):
		var threshold = 100;
		# give color to the layer
		ChromaAnimationAPI.FillThresholdColorsRGBName(baseLayer, frameId, threshold, 255, 0, 0)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect17Headset():
	# start with a blank animation
	var baseLayer = "Animations/Trails_Headset.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	var frameCount = ChromaAnimationAPI.GetFrameCountName(baseLayer)
	# loop over all frames in the layer
	for frameId in range(0, frameCount, 1):
		var threshold = 100;
		# give color to the layer
		ChromaAnimationAPI.FillThresholdColorsRGBName(baseLayer, frameId, threshold, 255, 0, 0)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect17Mousepad():
	# start with a blank animation
	var baseLayer = "Animations/Trails_Mousepad.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	var frameCount = ChromaAnimationAPI.GetFrameCountName(baseLayer)
	# loop over all frames in the layer
	for frameId in range(0, frameCount, 1):
		var threshold = 100;
		# give color to the layer
		ChromaAnimationAPI.FillThresholdColorsRGBName(baseLayer, frameId, threshold, 255, 0, 0)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect17Mouse():
	# start with a blank animation
	var baseLayer = "Animations/Trails_Mouse.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	var frameCount = ChromaAnimationAPI.GetFrameCountName(baseLayer)
	# loop over all frames in the layer
	for frameId in range(0, frameCount, 1):
		var threshold = 100;
		# give color to the layer
		ChromaAnimationAPI.FillThresholdColorsRGBName(baseLayer, frameId, threshold, 255, 0, 0)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect17Keypad():
	# start with a blank animation
	var baseLayer = "Animations/Trails_Keypad.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	var frameCount = ChromaAnimationAPI.GetFrameCountName(baseLayer)
	# loop over all frames in the layer
	for frameId in range(0, frameCount, 1):
		var threshold = 100;
		# give color to the layer
		ChromaAnimationAPI.FillThresholdColorsRGBName(baseLayer, frameId, threshold, 255, 0, 0)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect18():
	# start with a blank animation
	var baseLayer = "Animations/Trails_Keyboard.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	var threshold = 50;
	ChromaAnimationAPI.FillThresholdColorsAllFramesRGBName(baseLayer, threshold, 0, 64, 0) #dark green
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect18ChromaLink():
	# start with a blank animation
	var baseLayer = "Animations/Trails_ChromaLink.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	var threshold = 50;
	ChromaAnimationAPI.FillThresholdColorsAllFramesRGBName(baseLayer, threshold, 0, 64, 0) #dark green
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect18Headset():
	# start with a blank animation
	var baseLayer = "Animations/Trails_Headset.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	var threshold = 50;
	ChromaAnimationAPI.FillThresholdColorsAllFramesRGBName(baseLayer, threshold, 0, 64, 0) #dark green
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect18Mousepad():
	# start with a blank animation
	var baseLayer = "Animations/Trails_Mousepad.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	var threshold = 50;
	ChromaAnimationAPI.FillThresholdColorsAllFramesRGBName(baseLayer, threshold, 0, 64, 0) #dark green
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect18Mouse():
	# start with a blank animation
	var baseLayer = "Animations/Trails_Mouse.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	var threshold = 50;
	ChromaAnimationAPI.FillThresholdColorsAllFramesRGBName(baseLayer, threshold, 0, 64, 0) #dark green
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect18Keypad():
	# start with a blank animation
	var baseLayer = "Animations/Trails_Keypad.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	var threshold = 50;
	ChromaAnimationAPI.FillThresholdColorsAllFramesRGBName(baseLayer, threshold, 0, 64, 0) #dark green
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect19():
	# start with a blank animation
	var baseLayer = "Animations/Trails_Keyboard.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	var minThreshold = 50; #dark cyan
	var maxThreshold = 150; #purple
	ChromaAnimationAPI.FillThresholdColorsMinMaxAllFramesRGBName(baseLayer, minThreshold, 0, 63, 63, maxThreshold, 127, 0, 127)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect19ChromaLink():
	# start with a blank animation
	var baseLayer = "Animations/Trails_ChromaLink.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	var minThreshold = 50; #dark cyan
	var maxThreshold = 150; #purple
	ChromaAnimationAPI.FillThresholdColorsMinMaxAllFramesRGBName(baseLayer, minThreshold, 0, 63, 63, maxThreshold, 127, 0, 127)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect19Headset():
	# start with a blank animation
	var baseLayer = "Animations/Trails_Headset.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	var minThreshold = 50; #dark cyan
	var maxThreshold = 150; #purple
	ChromaAnimationAPI.FillThresholdColorsMinMaxAllFramesRGBName(baseLayer, minThreshold, 0, 63, 63, maxThreshold, 127, 0, 127)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect19Mousepad():
	# start with a blank animation
	var baseLayer = "Animations/Trails_Mousepad.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	var minThreshold = 50; #dark cyan
	var maxThreshold = 150; #purple
	ChromaAnimationAPI.FillThresholdColorsMinMaxAllFramesRGBName(baseLayer, minThreshold, 0, 63, 63, maxThreshold, 127, 0, 127)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect19Mouse():
	# start with a blank animation
	var baseLayer = "Animations/Trails_Mouse.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	var minThreshold = 50; #dark cyan
	var maxThreshold = 150; #purple
	ChromaAnimationAPI.FillThresholdColorsMinMaxAllFramesRGBName(baseLayer, minThreshold, 0, 63, 63, maxThreshold, 127, 0, 127)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect19Keypad():
	# start with a blank animation
	var baseLayer = "Animations/Trails_Keypad.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	var minThreshold = 50; #dark cyan
	var maxThreshold = 150; #purple
	ChromaAnimationAPI.FillThresholdColorsMinMaxAllFramesRGBName(baseLayer, minThreshold, 0, 63, 63, maxThreshold, 127, 0, 127)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect20():
	# start with a blank animation
	var baseLayer = "Animations/Arc3_Keyboard.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect20ChromaLink():
	# start with a blank animation
	var baseLayer = "Animations/Arc3_ChromaLink.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect20Headset():
	# start with a blank animation
	var baseLayer = "Animations/Arc3_Headset.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect20Mousepad():
	# start with a blank animation
	var baseLayer = "Animations/Arc3_Mousepad.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect20Mouse():
	# start with a blank animation
	var baseLayer = "Animations/Arc3_Mouse.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect20Keypad():
	# start with a blank animation
	var baseLayer = "Animations/Arc3_Keypad.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect21():
	# start with a blank animation
	var baseLayer = "Animations/Blank_Keyboard.chroma";
	var layer2 = "Animations/Arc3_Keyboard.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	ChromaAnimationAPI.CloseAnimationName(layer2)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	ChromaAnimationAPI.GetAnimation(layer2)
	var background = ChromaAnimationAPI.GetRGB(127, 0, 0)
	var frameCount = ChromaAnimationAPI.GetFrameCountName(layer2)
	ChromaAnimationAPI.MakeBlankFramesName(baseLayer, frameCount, 0.033, background)
	# copy non zero colors from layer 2 to the base layer
	ChromaAnimationAPI.CopyNonZeroAllKeysAllFramesName(layer2, baseLayer)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect21ChromaLink():
	# start with a blank animation
	var baseLayer = "Animations/Blank_ChromaLink.chroma";
	var layer2 = "Animations/Arc3_ChromaLink.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	ChromaAnimationAPI.CloseAnimationName(layer2)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	ChromaAnimationAPI.GetAnimation(layer2)
	var background = ChromaAnimationAPI.GetRGB(127, 0, 0)
	var frameCount = ChromaAnimationAPI.GetFrameCountName(layer2)
	ChromaAnimationAPI.MakeBlankFramesName(baseLayer, frameCount, 0.033, background)
	# copy non zero colors from layer 2 to the base layer
	ChromaAnimationAPI.CopyNonZeroAllKeysAllFramesName(layer2, baseLayer)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect21Headset():
	# start with a blank animation
	var baseLayer = "Animations/Blank_Headset.chroma";
	var layer2 = "Animations/Arc3_Headset.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	ChromaAnimationAPI.CloseAnimationName(layer2)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	ChromaAnimationAPI.GetAnimation(layer2)
	var background = ChromaAnimationAPI.GetRGB(127, 0, 0)
	var frameCount = ChromaAnimationAPI.GetFrameCountName(layer2)
	ChromaAnimationAPI.MakeBlankFramesName(baseLayer, frameCount, 0.033, background)
	# copy non zero colors from layer 2 to the base layer
	ChromaAnimationAPI.CopyNonZeroAllKeysAllFramesName(layer2, baseLayer)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect21Mousepad():
	# start with a blank animation
	var baseLayer = "Animations/Blank_Mousepad.chroma";
	var layer2 = "Animations/Arc3_Mousepad.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	ChromaAnimationAPI.CloseAnimationName(layer2)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	ChromaAnimationAPI.GetAnimation(layer2)
	var background = ChromaAnimationAPI.GetRGB(127, 0, 0)
	var frameCount = ChromaAnimationAPI.GetFrameCountName(layer2)
	ChromaAnimationAPI.MakeBlankFramesName(baseLayer, frameCount, 0.033, background)
	# copy non zero colors from layer 2 to the base layer
	ChromaAnimationAPI.CopyNonZeroAllKeysAllFramesName(layer2, baseLayer)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect21Mouse():
	# start with a blank animation
	var baseLayer = "Animations/Blank_Mouse.chroma";
	var layer2 = "Animations/Arc3_Mouse.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	ChromaAnimationAPI.CloseAnimationName(layer2)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	ChromaAnimationAPI.GetAnimation(layer2)
	var background = ChromaAnimationAPI.GetRGB(127, 0, 0)
	var frameCount = ChromaAnimationAPI.GetFrameCountName(layer2)
	ChromaAnimationAPI.MakeBlankFramesName(baseLayer, frameCount, 0.033, background)
	# copy non zero colors from layer 2 to the base layer
	ChromaAnimationAPI.CopyNonZeroAllKeysAllFramesName(layer2, baseLayer)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect21Keypad():
	# start with a blank animation
	var baseLayer = "Animations/Blank_Keypad.chroma";
	var layer2 = "Animations/Arc3_Keypad.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	ChromaAnimationAPI.CloseAnimationName(layer2)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	ChromaAnimationAPI.GetAnimation(layer2)
	var background = ChromaAnimationAPI.GetRGB(127, 0, 0)
	var frameCount = ChromaAnimationAPI.GetFrameCountName(layer2)
	ChromaAnimationAPI.MakeBlankFramesName(baseLayer, frameCount, 0.033, background)
	# copy non zero colors from layer 2 to the base layer
	ChromaAnimationAPI.CopyNonZeroAllKeysAllFramesName(layer2, baseLayer)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect22():
	# start with a blank animation
	var baseLayer = "Animations/Blank_Keyboard.chroma";
	var layer2 = "Animations/Arc3_Keyboard.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	ChromaAnimationAPI.CloseAnimationName(layer2)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	ChromaAnimationAPI.GetAnimation(layer2)
	var frameCount = ChromaAnimationAPI.GetFrameCountName(layer2)
	# setup background color on the base layer
	var background = ChromaAnimationAPI.GetRGB(127, 0, 0)
	ChromaAnimationAPI.MakeBlankFramesName(baseLayer, frameCount, 0.033, background)
	# replace darker colors with background color
	ChromaAnimationAPI.FillThresholdColorsAllFramesName(layer2, 64, background)
	# copy non zero colors from layer 2 to the base layer
	ChromaAnimationAPI.CopyNonZeroAllKeysAllFramesName(layer2, baseLayer)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect22ChromaLink():
	# start with a blank animation
	var baseLayer = "Animations/Blank_ChromaLink.chroma";
	var layer2 = "Animations/Arc3_ChromaLink.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	ChromaAnimationAPI.CloseAnimationName(layer2)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	ChromaAnimationAPI.GetAnimation(layer2)
	var frameCount = ChromaAnimationAPI.GetFrameCountName(layer2)
	# setup background color on the base layer
	var background = ChromaAnimationAPI.GetRGB(127, 0, 0)
	ChromaAnimationAPI.MakeBlankFramesName(baseLayer, frameCount, 0.033, background)
	# replace darker colors with background color
	ChromaAnimationAPI.FillThresholdColorsAllFramesName(layer2, 64, background)
	# copy non zero colors from layer 2 to the base layer
	ChromaAnimationAPI.CopyNonZeroAllKeysAllFramesName(layer2, baseLayer)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect22Headset():
	# start with a blank animation
	var baseLayer = "Animations/Blank_Headset.chroma";
	var layer2 = "Animations/Arc3_Headset.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	ChromaAnimationAPI.CloseAnimationName(layer2)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	ChromaAnimationAPI.GetAnimation(layer2)
	var frameCount = ChromaAnimationAPI.GetFrameCountName(layer2)
	# setup background color on the base layer
	var background = ChromaAnimationAPI.GetRGB(127, 0, 0)
	ChromaAnimationAPI.MakeBlankFramesName(baseLayer, frameCount, 0.033, background)
	# replace darker colors with background color
	ChromaAnimationAPI.FillThresholdColorsAllFramesName(layer2, 64, background)
	# copy non zero colors from layer 2 to the base layer
	ChromaAnimationAPI.CopyNonZeroAllKeysAllFramesName(layer2, baseLayer)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect22Mousepad():
	# start with a blank animation
	var baseLayer = "Animations/Blank_Mousepad.chroma";
	var layer2 = "Animations/Arc3_Mousepad.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	ChromaAnimationAPI.CloseAnimationName(layer2)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	ChromaAnimationAPI.GetAnimation(layer2)
	var frameCount = ChromaAnimationAPI.GetFrameCountName(layer2)
	# setup background color on the base layer
	var background = ChromaAnimationAPI.GetRGB(127, 0, 0)
	ChromaAnimationAPI.MakeBlankFramesName(baseLayer, frameCount, 0.033, background)
	# replace darker colors with background color
	ChromaAnimationAPI.FillThresholdColorsAllFramesName(layer2, 64, background)
	# copy non zero colors from layer 2 to the base layer
	ChromaAnimationAPI.CopyNonZeroAllKeysAllFramesName(layer2, baseLayer)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect22Mouse():
	# start with a blank animation
	var baseLayer = "Animations/Blank_Mouse.chroma";
	var layer2 = "Animations/Arc3_Mouse.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	ChromaAnimationAPI.CloseAnimationName(layer2)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	ChromaAnimationAPI.GetAnimation(layer2)
	var frameCount = ChromaAnimationAPI.GetFrameCountName(layer2)
	# setup background color on the base layer
	var background = ChromaAnimationAPI.GetRGB(127, 0, 0)
	ChromaAnimationAPI.MakeBlankFramesName(baseLayer, frameCount, 0.033, background)
	# replace darker colors with background color
	ChromaAnimationAPI.FillThresholdColorsAllFramesName(layer2, 64, background)
	# copy non zero colors from layer 2 to the base layer
	ChromaAnimationAPI.CopyNonZeroAllKeysAllFramesName(layer2, baseLayer)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect22Keypad():
	# start with a blank animation
	var baseLayer = "Animations/Blank_Keypad.chroma";
	var layer2 = "Animations/Arc3_Keypad.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	ChromaAnimationAPI.CloseAnimationName(layer2)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	ChromaAnimationAPI.GetAnimation(layer2)
	var frameCount = ChromaAnimationAPI.GetFrameCountName(layer2)
	# setup background color on the base layer
	var background = ChromaAnimationAPI.GetRGB(127, 0, 0)
	ChromaAnimationAPI.MakeBlankFramesName(baseLayer, frameCount, 0.033, background)
	# replace darker colors with background color
	ChromaAnimationAPI.FillThresholdColorsAllFramesName(layer2, 64, background)
	# copy non zero colors from layer 2 to the base layer
	ChromaAnimationAPI.CopyNonZeroAllKeysAllFramesName(layer2, baseLayer)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect23():
	# start with a blank animation
	var baseLayer = "Animations/Blank_Keyboard.chroma";
	var layer2 = "Animations/Arc3_Keyboard.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	ChromaAnimationAPI.CloseAnimationName(layer2)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	ChromaAnimationAPI.GetAnimation(layer2)
	var frameCount = ChromaAnimationAPI.GetFrameCountName(layer2)
	# setup background color on the base layer
	var background = ChromaAnimationAPI.GetRGB(127, 0, 0)
	ChromaAnimationAPI.MakeBlankFramesName(baseLayer, frameCount, 0.033, background)
	# Add non zero colors from layer 2 to the base layer
	ChromaAnimationAPI.AddNonZeroAllKeysAllFramesName(layer2, baseLayer)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect23ChromaLink():
	# start with a blank animation
	var baseLayer = "Animations/Blank_ChromaLink.chroma";
	var layer2 = "Animations/Arc3_ChromaLink.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	ChromaAnimationAPI.CloseAnimationName(layer2)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	ChromaAnimationAPI.GetAnimation(layer2)
	var frameCount = ChromaAnimationAPI.GetFrameCountName(layer2)
	# setup background color on the base layer
	var background = ChromaAnimationAPI.GetRGB(127, 0, 0)
	ChromaAnimationAPI.MakeBlankFramesName(baseLayer, frameCount, 0.033, background)
	# Add non zero colors from layer 2 to the base layer
	ChromaAnimationAPI.AddNonZeroAllKeysAllFramesName(layer2, baseLayer)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect23Headset():
	# start with a blank animation
	var baseLayer = "Animations/Blank_Headset.chroma";
	var layer2 = "Animations/Arc3_Headset.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	ChromaAnimationAPI.CloseAnimationName(layer2)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	ChromaAnimationAPI.GetAnimation(layer2)
	var frameCount = ChromaAnimationAPI.GetFrameCountName(layer2)
	# setup background color on the base layer
	var background = ChromaAnimationAPI.GetRGB(127, 0, 0)
	ChromaAnimationAPI.MakeBlankFramesName(baseLayer, frameCount, 0.033, background)
	# Add non zero colors from layer 2 to the base layer
	ChromaAnimationAPI.AddNonZeroAllKeysAllFramesName(layer2, baseLayer)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect23Mousepad():
	# start with a blank animation
	var baseLayer = "Animations/Blank_Mousepad.chroma";
	var layer2 = "Animations/Arc3_Mousepad.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	ChromaAnimationAPI.CloseAnimationName(layer2)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	ChromaAnimationAPI.GetAnimation(layer2)
	var frameCount = ChromaAnimationAPI.GetFrameCountName(layer2)
	# setup background color on the base layer
	var background = ChromaAnimationAPI.GetRGB(127, 0, 0)
	ChromaAnimationAPI.MakeBlankFramesName(baseLayer, frameCount, 0.033, background)
	# Add non zero colors from layer 2 to the base layer
	ChromaAnimationAPI.AddNonZeroAllKeysAllFramesName(layer2, baseLayer)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect23Mouse():
	# start with a blank animation
	var baseLayer = "Animations/Blank_Mouse.chroma";
	var layer2 = "Animations/Arc3_Mouse.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	ChromaAnimationAPI.CloseAnimationName(layer2)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	ChromaAnimationAPI.GetAnimation(layer2)
	var frameCount = ChromaAnimationAPI.GetFrameCountName(layer2)
	# setup background color on the base layer
	var background = ChromaAnimationAPI.GetRGB(127, 0, 0)
	ChromaAnimationAPI.MakeBlankFramesName(baseLayer, frameCount, 0.033, background)
	# Add non zero colors from layer 2 to the base layer
	ChromaAnimationAPI.AddNonZeroAllKeysAllFramesName(layer2, baseLayer)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect23Keypad():
	# start with a blank animation
	var baseLayer = "Animations/Blank_Keypad.chroma";
	var layer2 = "Animations/Arc3_Keypad.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	ChromaAnimationAPI.CloseAnimationName(layer2)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	ChromaAnimationAPI.GetAnimation(layer2)
	var frameCount = ChromaAnimationAPI.GetFrameCountName(layer2)
	# setup background color on the base layer
	var background = ChromaAnimationAPI.GetRGB(127, 0, 0)
	ChromaAnimationAPI.MakeBlankFramesName(baseLayer, frameCount, 0.033, background)
	# Add non zero colors from layer 2 to the base layer
	ChromaAnimationAPI.AddNonZeroAllKeysAllFramesName(layer2, baseLayer)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect24():
	# start with a blank animation
	var baseLayer = "Animations/Blank_Keyboard.chroma";
	var layer2 = "Animations/Arc3_Keyboard.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	ChromaAnimationAPI.CloseAnimationName(layer2)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	ChromaAnimationAPI.GetAnimation(layer2)
	var frameCount = ChromaAnimationAPI.GetFrameCountName(layer2)
	# setup background color on the base layer
	var background = ChromaAnimationAPI.GetRGB(127, 0, 0)
	ChromaAnimationAPI.MakeBlankFramesName(baseLayer, frameCount, 0.033, background)
	# Add non zero colors from layer 2 to the base layer
	ChromaAnimationAPI.SubtractNonZeroAllKeysAllFramesName(layer2, baseLayer)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect24ChromaLink():
	# start with a blank animation
	var baseLayer = "Animations/Blank_ChromaLink.chroma";
	var layer2 = "Animations/Arc3_ChromaLink.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	ChromaAnimationAPI.CloseAnimationName(layer2)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	ChromaAnimationAPI.GetAnimation(layer2)
	var frameCount = ChromaAnimationAPI.GetFrameCountName(layer2)
	# setup background color on the base layer
	var background = ChromaAnimationAPI.GetRGB(127, 0, 0)
	ChromaAnimationAPI.MakeBlankFramesName(baseLayer, frameCount, 0.033, background)
	# Add non zero colors from layer 2 to the base layer
	ChromaAnimationAPI.SubtractNonZeroAllKeysAllFramesName(layer2, baseLayer)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect24Headset():
	# start with a blank animation
	var baseLayer = "Animations/Blank_Headset.chroma";
	var layer2 = "Animations/Arc3_Headset.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	ChromaAnimationAPI.CloseAnimationName(layer2)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	ChromaAnimationAPI.GetAnimation(layer2)
	var frameCount = ChromaAnimationAPI.GetFrameCountName(layer2)
	# setup background color on the base layer
	var background = ChromaAnimationAPI.GetRGB(127, 0, 0)
	ChromaAnimationAPI.MakeBlankFramesName(baseLayer, frameCount, 0.033, background)
	# Add non zero colors from layer 2 to the base layer
	ChromaAnimationAPI.SubtractNonZeroAllKeysAllFramesName(layer2, baseLayer)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect24Mousepad():
	# start with a blank animation
	var baseLayer = "Animations/Blank_Mousepad.chroma";
	var layer2 = "Animations/Arc3_Mousepad.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	ChromaAnimationAPI.CloseAnimationName(layer2)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	ChromaAnimationAPI.GetAnimation(layer2)
	var frameCount = ChromaAnimationAPI.GetFrameCountName(layer2)
	# setup background color on the base layer
	var background = ChromaAnimationAPI.GetRGB(127, 0, 0)
	ChromaAnimationAPI.MakeBlankFramesName(baseLayer, frameCount, 0.033, background)
	# Add non zero colors from layer 2 to the base layer
	ChromaAnimationAPI.SubtractNonZeroAllKeysAllFramesName(layer2, baseLayer)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect24Mouse():
	# start with a blank animation
	var baseLayer = "Animations/Blank_Mouse.chroma";
	var layer2 = "Animations/Arc3_Mouse.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	ChromaAnimationAPI.CloseAnimationName(layer2)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	ChromaAnimationAPI.GetAnimation(layer2)
	var frameCount = ChromaAnimationAPI.GetFrameCountName(layer2)
	# setup background color on the base layer
	var background = ChromaAnimationAPI.GetRGB(127, 0, 0)
	ChromaAnimationAPI.MakeBlankFramesName(baseLayer, frameCount, 0.033, background)
	# Add non zero colors from layer 2 to the base layer
	ChromaAnimationAPI.SubtractNonZeroAllKeysAllFramesName(layer2, baseLayer)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect24Keypad():
	# start with a blank animation
	var baseLayer = "Animations/Blank_Keypad.chroma";
	var layer2 = "Animations/Arc3_Keypad.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	ChromaAnimationAPI.CloseAnimationName(layer2)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	ChromaAnimationAPI.GetAnimation(layer2)
	var frameCount = ChromaAnimationAPI.GetFrameCountName(layer2)
	# setup background color on the base layer
	var background = ChromaAnimationAPI.GetRGB(127, 0, 0)
	ChromaAnimationAPI.MakeBlankFramesName(baseLayer, frameCount, 0.033, background)
	# Add non zero colors from layer 2 to the base layer
	ChromaAnimationAPI.SubtractNonZeroAllKeysAllFramesName(layer2, baseLayer)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect25():
	# start with a blank animation
	var baseLayer = "Animations/CircleSmall_Keyboard.chroma";
	var layer2 = "Animations/Rainbow_Keyboard.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	ChromaAnimationAPI.CloseAnimationName(layer2)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	ChromaAnimationAPI.GetAnimation(layer2)
	var frameCount = ChromaAnimationAPI.GetFrameCountName(layer2)
	ChromaAnimationAPI.DuplicateFirstFrameName(baseLayer, frameCount)
	# copy non zero colors from layer 2 to the base layer where the base layer was non zero
	ChromaAnimationAPI.CopyNonZeroTargetAllKeysAllFramesName(layer2, baseLayer)
	# set a background color
	ChromaAnimationAPI.FillZeroColorAllFramesRGBName(baseLayer, 255, 0, 0)
	# set animation playback to 30 PS
	ChromaAnimationAPI.OverrideFrameDurationName(baseLayer, 0.033)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect25ChromaLink():
	var baseLayer = "Animations/Rainbow_ChromaLink.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# set animation playback to 30 PS
	ChromaAnimationAPI.OverrideFrameDurationName(baseLayer, 0.033)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect25Headset():
	var baseLayer = "Animations/Rainbow_Headset.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# set animation playback to 30 PS
	ChromaAnimationAPI.OverrideFrameDurationName(baseLayer, 0.033)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect25Mousepad():
	var baseLayer = "Animations/Rainbow_Mousepad.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# set animation playback to 30 PS
	ChromaAnimationAPI.OverrideFrameDurationName(baseLayer, 0.033)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect25Mouse():
	var baseLayer = "Animations/Rainbow_Mouse.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# set animation playback to 30 PS
	ChromaAnimationAPI.OverrideFrameDurationName(baseLayer, 0.033)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect25Keypad():
	var baseLayer = "Animations/Rainbow_Keypad.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# set animation playback to 30 PS
	ChromaAnimationAPI.OverrideFrameDurationName(baseLayer, 0.033)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect26():
	# start with a blank animation
	var baseLayer = "Animations/Movement_Keyboard.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect26ChromaLink():
	# start with a blank animation
	var baseLayer = "Animations/Movement_ChromaLink.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect26Headset():
	# start with a blank animation
	var baseLayer = "Animations/Movement_Headset.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect26Mousepad():
	# start with a blank animation
	var baseLayer = "Animations/Movement_Mousepad.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect26Mouse():
	# start with a blank animation
	var baseLayer = "Animations/Movement_Mouse.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect26Keypad():
	# start with a blank animation
	var baseLayer = "Animations/Movement_Keypad.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect27():
	# start with a blank animation
	var baseLayer = "Animations/Movement_Keyboard.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# set animation playback to 30 PS
	ChromaAnimationAPI.OverrideFrameDurationName(baseLayer, 0.033)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect27ChromaLink():
	# start with a blank animation
	var baseLayer = "Animations/Movement_ChromaLink.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# set animation playback to 30 PS
	ChromaAnimationAPI.OverrideFrameDurationName(baseLayer, 0.033)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect27Headset():
	# start with a blank animation
	var baseLayer = "Animations/Movement_Headset.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# set animation playback to 30 PS
	ChromaAnimationAPI.OverrideFrameDurationName(baseLayer, 0.033)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect27Mousepad():
	# start with a blank animation
	var baseLayer = "Animations/Movement_Mousepad.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# set animation playback to 30 PS
	ChromaAnimationAPI.OverrideFrameDurationName(baseLayer, 0.033)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect27Mouse():
	# start with a blank animation
	var baseLayer = "Animations/Movement_Mouse.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# set animation playback to 30 PS
	ChromaAnimationAPI.OverrideFrameDurationName(baseLayer, 0.033)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect27Keypad():
	# start with a blank animation
	var baseLayer = "Animations/Movement_Keypad.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# set animation playback to 30 PS
	ChromaAnimationAPI.OverrideFrameDurationName(baseLayer, 0.033)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect28():
	# start with a blank animation
	var baseLayer = "Animations/Movement_Keyboard.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# reverse the order of frames
	ChromaAnimationAPI.ReverseAllFramesName(baseLayer)
	# set animation playback to 30 PS
	ChromaAnimationAPI.OverrideFrameDurationName(baseLayer, 0.033)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect28ChromaLink():
	# start with a blank animation
	var baseLayer = "Animations/Movement_ChromaLink.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# reverse the order of frames
	ChromaAnimationAPI.ReverseAllFramesName(baseLayer)
	# set animation playback to 30 PS
	ChromaAnimationAPI.OverrideFrameDurationName(baseLayer, 0.033)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect28Headset():
	# start with a blank animation
	var baseLayer = "Animations/Movement_Headset.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# reverse the order of frames
	ChromaAnimationAPI.ReverseAllFramesName(baseLayer)
	# set animation playback to 30 PS
	ChromaAnimationAPI.OverrideFrameDurationName(baseLayer, 0.033)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect28Mousepad():
	# start with a blank animation
	var baseLayer = "Animations/Movement_Mousepad.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# reverse the order of frames
	ChromaAnimationAPI.ReverseAllFramesName(baseLayer)
	# set animation playback to 30 PS
	ChromaAnimationAPI.OverrideFrameDurationName(baseLayer, 0.033)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect28Mouse():
	# start with a blank animation
	var baseLayer = "Animations/Movement_Mouse.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# reverse the order of frames
	ChromaAnimationAPI.ReverseAllFramesName(baseLayer)
	# set animation playback to 30 PS
	ChromaAnimationAPI.OverrideFrameDurationName(baseLayer, 0.033)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect28Keypad():
	# start with a blank animation
	var baseLayer = "Animations/Movement_Keypad.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# reverse the order of frames
	ChromaAnimationAPI.ReverseAllFramesName(baseLayer)
	# set animation playback to 30 PS
	ChromaAnimationAPI.OverrideFrameDurationName(baseLayer, 0.033)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect29():
	# start with a blank animation
	var baseLayer = "Animations/Movement_Keyboard.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# invert all the animation colors
	ChromaAnimationAPI.InvertColorsAllFramesName(baseLayer)
	# set animation playback to 30 PS
	ChromaAnimationAPI.OverrideFrameDurationName(baseLayer, 0.033)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect29ChromaLink():
	# start with a blank animation
	var baseLayer = "Animations/Movement_ChromaLink.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# invert all the animation colors
	ChromaAnimationAPI.InvertColorsAllFramesName(baseLayer)
	# set animation playback to 30 PS
	ChromaAnimationAPI.OverrideFrameDurationName(baseLayer, 0.033)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect29Headset():
	# start with a blank animation
	var baseLayer = "Animations/Movement_Headset.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# invert all the animation colors
	ChromaAnimationAPI.InvertColorsAllFramesName(baseLayer)
	# set animation playback to 30 PS
	ChromaAnimationAPI.OverrideFrameDurationName(baseLayer, 0.033)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect29Mousepad():
	# start with a blank animation
	var baseLayer = "Animations/Movement_Mousepad.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# invert all the animation colors
	ChromaAnimationAPI.InvertColorsAllFramesName(baseLayer)
	# set animation playback to 30 PS
	ChromaAnimationAPI.OverrideFrameDurationName(baseLayer, 0.033)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect29Mouse():
	# start with a blank animation
	var baseLayer = "Animations/Movement_Mouse.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# invert all the animation colors
	ChromaAnimationAPI.InvertColorsAllFramesName(baseLayer)
	# set animation playback to 30 PS
	ChromaAnimationAPI.OverrideFrameDurationName(baseLayer, 0.033)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect29Keypad():
	# start with a blank animation
	var baseLayer = "Animations/Movement_Keypad.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# invert all the animation colors
	ChromaAnimationAPI.InvertColorsAllFramesName(baseLayer)
	# set animation playback to 30 PS
	ChromaAnimationAPI.OverrideFrameDurationName(baseLayer, 0.033)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect30():
	# start with a blank animation
	var baseLayer = "Animations/Movement_Keyboard.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# duplicate and mirror
	ChromaAnimationAPI.DuplicateMirrorFramesName(baseLayer)
	# set animation playback to 30 PS
	ChromaAnimationAPI.OverrideFrameDurationName(baseLayer, 0.033)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect30ChromaLink():
	# start with a blank animation
	var baseLayer = "Animations/Movement_ChromaLink.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# duplicate and mirror
	ChromaAnimationAPI.DuplicateMirrorFramesName(baseLayer)
	# set animation playback to 30 PS
	ChromaAnimationAPI.OverrideFrameDurationName(baseLayer, 0.033)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect30Headset():
	# start with a blank animation
	var baseLayer = "Animations/Movement_Headset.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# duplicate and mirror
	ChromaAnimationAPI.DuplicateMirrorFramesName(baseLayer)
	# set animation playback to 30 PS
	ChromaAnimationAPI.OverrideFrameDurationName(baseLayer, 0.033)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect30Mousepad():
	# start with a blank animation
	var baseLayer = "Animations/Movement_Mousepad.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# duplicate and mirror
	ChromaAnimationAPI.DuplicateMirrorFramesName(baseLayer)
	# set animation playback to 30 PS
	ChromaAnimationAPI.OverrideFrameDurationName(baseLayer, 0.033)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect30Mouse():
	# start with a blank animation
	var baseLayer = "Animations/Movement_Mouse.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# duplicate and mirror
	ChromaAnimationAPI.DuplicateMirrorFramesName(baseLayer)
	# set animation playback to 30 PS
	ChromaAnimationAPI.OverrideFrameDurationName(baseLayer, 0.033)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect30Keypad():
	# start with a blank animation
	var baseLayer = "Animations/Movement_Keypad.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# duplicate and mirror
	ChromaAnimationAPI.DuplicateMirrorFramesName(baseLayer)
	# set animation playback to 30 PS
	ChromaAnimationAPI.OverrideFrameDurationName(baseLayer, 0.033)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect31():
	# start with a blank animation
	var baseLayer = "Animations/Movement_Keyboard.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# insert a pause
	var frameId = 50;
	var delay = 20;
	ChromaAnimationAPI.InsertDelayName(baseLayer, frameId, delay)
	# set animation playback to 30 PS
	ChromaAnimationAPI.OverrideFrameDurationName(baseLayer, 0.033)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect31ChromaLink():
	# start with a blank animation
	var baseLayer = "Animations/Movement_ChromaLink.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# insert a pause
	var frameId = 50;
	var delay = 20;
	ChromaAnimationAPI.InsertDelayName(baseLayer, frameId, delay)
	# set animation playback to 30 PS
	ChromaAnimationAPI.OverrideFrameDurationName(baseLayer, 0.033)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect31Headset():
	# start with a blank animation
	var baseLayer = "Animations/Movement_Headset.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# insert a pause
	var frameId = 50;
	var delay = 20;
	ChromaAnimationAPI.InsertDelayName(baseLayer, frameId, delay)
	# set animation playback to 30 PS
	ChromaAnimationAPI.OverrideFrameDurationName(baseLayer, 0.033)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect31Mousepad():
	# start with a blank animation
	var baseLayer = "Animations/Movement_Mousepad.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# insert a pause
	var frameId = 50;
	var delay = 20;
	ChromaAnimationAPI.InsertDelayName(baseLayer, frameId, delay)
	# set animation playback to 30 PS
	ChromaAnimationAPI.OverrideFrameDurationName(baseLayer, 0.033)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect31Mouse():
	# start with a blank animation
	var baseLayer = "Animations/Movement_Mouse.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# insert a pause
	var frameId = 50;
	var delay = 20;
	ChromaAnimationAPI.InsertDelayName(baseLayer, frameId, delay)
	# set animation playback to 30 PS
	ChromaAnimationAPI.OverrideFrameDurationName(baseLayer, 0.033)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect31Keypad():
	# start with a blank animation
	var baseLayer = "Animations/Movement_Keypad.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# insert a pause
	var frameId = 50;
	var delay = 20;
	ChromaAnimationAPI.InsertDelayName(baseLayer, frameId, delay)
	# set animation playback to 30 PS
	ChromaAnimationAPI.OverrideFrameDurationName(baseLayer, 0.033)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect32():
	# start with a blank animation
	var baseLayer = "Animations/Movement_Keyboard.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# reduce half of the frames, remove every 2nd frame
	ChromaAnimationAPI.ReduceFramesName(baseLayer, 2)
	# set animation playback to 30 PS
	ChromaAnimationAPI.OverrideFrameDurationName(baseLayer, 0.033)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect32ChromaLink():
	# start with a blank animation
	var baseLayer = "Animations/Movement_ChromaLink.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# reduce half of the frames, remove every 2nd frame
	ChromaAnimationAPI.ReduceFramesName(baseLayer, 2)
	# set animation playback to 30 PS
	ChromaAnimationAPI.OverrideFrameDurationName(baseLayer, 0.033)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect32Headset():
	# start with a blank animation
	var baseLayer = "Animations/Movement_Headset.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# reduce half of the frames, remove every 2nd frame
	ChromaAnimationAPI.ReduceFramesName(baseLayer, 2)
	# set animation playback to 30 PS
	ChromaAnimationAPI.OverrideFrameDurationName(baseLayer, 0.033)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect32Mousepad():
	# start with a blank animation
	var baseLayer = "Animations/Movement_Mousepad.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# reduce half of the frames, remove every 2nd frame
	ChromaAnimationAPI.ReduceFramesName(baseLayer, 2)
	# set animation playback to 30 PS
	ChromaAnimationAPI.OverrideFrameDurationName(baseLayer, 0.033)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect32Mouse():
	# start with a blank animation
	var baseLayer = "Animations/Movement_Mouse.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# reduce half of the frames, remove every 2nd frame
	ChromaAnimationAPI.ReduceFramesName(baseLayer, 2)
	# set animation playback to 30 PS
	ChromaAnimationAPI.OverrideFrameDurationName(baseLayer, 0.033)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect32Keypad():
	# start with a blank animation
	var baseLayer = "Animations/Movement_Keypad.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# reduce half of the frames, remove every 2nd frame
	ChromaAnimationAPI.ReduceFramesName(baseLayer, 2)
	# set animation playback to 30 PS
	ChromaAnimationAPI.OverrideFrameDurationName(baseLayer, 0.033)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect33():
	# start with a blank animation
	var baseLayer = "Animations/Movement_Keyboard.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# double the number of the frames
	ChromaAnimationAPI.DuplicateFramesName(baseLayer)
	# set animation playback to 30 PS
	ChromaAnimationAPI.OverrideFrameDurationName(baseLayer, 0.033)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect33ChromaLink():
	# start with a blank animation
	var baseLayer = "Animations/Movement_ChromaLink.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# double the number of the frames
	ChromaAnimationAPI.DuplicateFramesName(baseLayer)
	# set animation playback to 30 PS
	ChromaAnimationAPI.OverrideFrameDurationName(baseLayer, 0.033)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect33Headset():
	# start with a blank animation
	var baseLayer = "Animations/Movement_Headset.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# double the number of the frames
	ChromaAnimationAPI.DuplicateFramesName(baseLayer)
	# set animation playback to 30 PS
	ChromaAnimationAPI.OverrideFrameDurationName(baseLayer, 0.033)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect33Mousepad():
	# start with a blank animation
	var baseLayer = "Animations/Movement_Mousepad.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# double the number of the frames
	ChromaAnimationAPI.DuplicateFramesName(baseLayer)
	# set animation playback to 30 PS
	ChromaAnimationAPI.OverrideFrameDurationName(baseLayer, 0.033)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect33Mouse():
	# start with a blank animation
	var baseLayer = "Animations/Movement_Mouse.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# double the number of the frames
	ChromaAnimationAPI.DuplicateFramesName(baseLayer)
	# set animation playback to 30 PS
	ChromaAnimationAPI.OverrideFrameDurationName(baseLayer, 0.033)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect33Keypad():
	# start with a blank animation
	var baseLayer = "Animations/Movement_Keypad.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# double the number of the frames
	ChromaAnimationAPI.DuplicateFramesName(baseLayer)
	# set animation playback to 30 PS
	ChromaAnimationAPI.OverrideFrameDurationName(baseLayer, 0.033)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect34():
	# start with a blank animation
	var baseLayer = "Animations/Movement_Keyboard.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# trim the start of the animation, so it starts at frame 10
	ChromaAnimationAPI.TrimStartFramesName(baseLayer, 10)
	# set animation playback to 30 PS
	ChromaAnimationAPI.OverrideFrameDurationName(baseLayer, 0.033)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect34ChromaLink():
	# start with a blank animation
	var baseLayer = "Animations/Movement_ChromaLink.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# trim the start of the animation, so it starts at frame 10
	ChromaAnimationAPI.TrimStartFramesName(baseLayer, 10)
	# set animation playback to 30 PS
	ChromaAnimationAPI.OverrideFrameDurationName(baseLayer, 0.033)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect34Headset():
	# start with a blank animation
	var baseLayer = "Animations/Movement_Headset.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# trim the start of the animation, so it starts at frame 10
	ChromaAnimationAPI.TrimStartFramesName(baseLayer, 10)
	# set animation playback to 30 PS
	ChromaAnimationAPI.OverrideFrameDurationName(baseLayer, 0.033)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect34Mousepad():
	# start with a blank animation
	var baseLayer = "Animations/Movement_Mousepad.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# trim the start of the animation, so it starts at frame 10
	ChromaAnimationAPI.TrimStartFramesName(baseLayer, 10)
	# set animation playback to 30 PS
	ChromaAnimationAPI.OverrideFrameDurationName(baseLayer, 0.033)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect34Mouse():
	# start with a blank animation
	var baseLayer = "Animations/Movement_Mouse.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# trim the start of the animation, so it starts at frame 10
	ChromaAnimationAPI.TrimStartFramesName(baseLayer, 10)
	# set animation playback to 30 PS
	ChromaAnimationAPI.OverrideFrameDurationName(baseLayer, 0.033)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect34Keypad():
	# start with a blank animation
	var baseLayer = "Animations/Movement_Keypad.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# trim the start of the animation, so it starts at frame 10
	ChromaAnimationAPI.TrimStartFramesName(baseLayer, 10)
	# set animation playback to 30 PS
	ChromaAnimationAPI.OverrideFrameDurationName(baseLayer, 0.033)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect35():
	# start with a blank animation
	var baseLayer = "Animations/Movement_Keyboard.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# trim the start of the animation, so it starts at frame 10
	ChromaAnimationAPI.TrimStartFramesName(baseLayer, 10)
	# trim the end of the animation
	ChromaAnimationAPI.TrimEndFramesName(baseLayer, 75)
	# set animation playback to 30 PS
	ChromaAnimationAPI.OverrideFrameDurationName(baseLayer, 0.033)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect35ChromaLink():
	# start with a blank animation
	var baseLayer = "Animations/Movement_ChromaLink.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# trim the start of the animation, so it starts at frame 10
	ChromaAnimationAPI.TrimStartFramesName(baseLayer, 10)
	# trim the end of the animation
	ChromaAnimationAPI.TrimEndFramesName(baseLayer, 75)
	# set animation playback to 30 PS
	ChromaAnimationAPI.OverrideFrameDurationName(baseLayer, 0.033)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect35Headset():
	# start with a blank animation
	var baseLayer = "Animations/Movement_Headset.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# trim the start of the animation, so it starts at frame 10
	ChromaAnimationAPI.TrimStartFramesName(baseLayer, 10)
	# trim the end of the animation
	ChromaAnimationAPI.TrimEndFramesName(baseLayer, 75)
	# set animation playback to 30 PS
	ChromaAnimationAPI.OverrideFrameDurationName(baseLayer, 0.033)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect35Mousepad():
	# start with a blank animation
	var baseLayer = "Animations/Movement_Mousepad.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# trim the start of the animation, so it starts at frame 10
	ChromaAnimationAPI.TrimStartFramesName(baseLayer, 10)
	# trim the end of the animation
	ChromaAnimationAPI.TrimEndFramesName(baseLayer, 75)
	# set animation playback to 30 PS
	ChromaAnimationAPI.OverrideFrameDurationName(baseLayer, 0.033)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect35Mouse():
	# start with a blank animation
	var baseLayer = "Animations/Movement_Mouse.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# trim the start of the animation, so it starts at frame 10
	ChromaAnimationAPI.TrimStartFramesName(baseLayer, 10)
	# trim the end of the animation
	ChromaAnimationAPI.TrimEndFramesName(baseLayer, 75)
	# set animation playback to 30 PS
	ChromaAnimationAPI.OverrideFrameDurationName(baseLayer, 0.033)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect35Keypad():
	# start with a blank animation
	var baseLayer = "Animations/Movement_Keypad.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# trim the start of the animation, so it starts at frame 10
	ChromaAnimationAPI.TrimStartFramesName(baseLayer, 10)
	# trim the end of the animation
	ChromaAnimationAPI.TrimEndFramesName(baseLayer, 75)
	# set animation playback to 30 PS
	ChromaAnimationAPI.OverrideFrameDurationName(baseLayer, 0.033)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect36():
	# start with a blank animation
	var baseLayer = "Animations/CircleSmall_Keyboard.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	var frameCount = 20;
	ChromaAnimationAPI.DuplicateFirstFrameName(baseLayer, frameCount)
	# set animation playback to 30 PS
	ChromaAnimationAPI.OverrideFrameDurationName(baseLayer, 0.033)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect36ChromaLink():
	# start with a blank animation
	var baseLayer = "Animations/Blank_ChromaLink.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# green
	ChromaAnimationAPI.FillZeroColorAllFramesRGBName(baseLayer, 0, 255, 0)
	var frameCount = 20;
	ChromaAnimationAPI.DuplicateFirstFrameName(baseLayer, frameCount)
	# set animation playback to 30 PS
	ChromaAnimationAPI.OverrideFrameDurationName(baseLayer, 0.033)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect36Headset():
	# start with a blank animation
	var baseLayer = "Animations/Blank_Headset.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# green
	ChromaAnimationAPI.FillZeroColorAllFramesRGBName(baseLayer, 0, 255, 0)
	var frameCount = 20;
	ChromaAnimationAPI.DuplicateFirstFrameName(baseLayer, frameCount)
	# set animation playback to 30 PS
	ChromaAnimationAPI.OverrideFrameDurationName(baseLayer, 0.033)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect36Mousepad():
	# start with a blank animation
	var baseLayer = "Animations/Blank_Mousepad.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# green
	ChromaAnimationAPI.FillZeroColorAllFramesRGBName(baseLayer, 0, 255, 0)
	var frameCount = 20;
	ChromaAnimationAPI.DuplicateFirstFrameName(baseLayer, frameCount)
	# set animation playback to 30 PS
	ChromaAnimationAPI.OverrideFrameDurationName(baseLayer, 0.033)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect36Mouse():
	# start with a blank animation
	var baseLayer = "Animations/Blank_Mouse.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# green
	ChromaAnimationAPI.FillZeroColorAllFramesRGBName(baseLayer, 0, 255, 0)
	var frameCount = 20;
	ChromaAnimationAPI.DuplicateFirstFrameName(baseLayer, frameCount)
	# set animation playback to 30 PS
	ChromaAnimationAPI.OverrideFrameDurationName(baseLayer, 0.033)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect36Keypad():
	# start with a blank animation
	var baseLayer = "Animations/Blank_Keypad.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# green
	ChromaAnimationAPI.FillZeroColorAllFramesRGBName(baseLayer, 0, 255, 0)
	var frameCount = 20;
	ChromaAnimationAPI.DuplicateFirstFrameName(baseLayer, frameCount)
	# set animation playback to 30 PS
	ChromaAnimationAPI.OverrideFrameDurationName(baseLayer, 0.033)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect37():
	# start with a blank animation
	var baseLayer = "Animations/Blank_Keyboard.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	var frameCount = 20;
	# Start with blank frames set to 30PS
	ChromaAnimationAPI.MakeBlankFramesName(baseLayer, frameCount, 0.033, 0)
	# Fill all frames with black and white static
	ChromaAnimationAPI.FillRandomColorsBlackAndWhiteAllFramesName(baseLayer)
	# slow down the random frames so it can be seen
	ChromaAnimationAPI.DuplicateFramesName(baseLayer)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect37ChromaLink():
	# start with a blank animation
	var baseLayer = "Animations/Blank_ChromaLink.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	var frameCount = 20;
	# Start with blank frames set to 30PS
	ChromaAnimationAPI.MakeBlankFramesName(baseLayer, frameCount, 0.033, 0)
	# Fill all frames with black and white static
	ChromaAnimationAPI.FillRandomColorsBlackAndWhiteAllFramesName(baseLayer)
	# slow down the random frames so it can be seen
	ChromaAnimationAPI.DuplicateFramesName(baseLayer)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect37Headset():
	# start with a blank animation
	var baseLayer = "Animations/Blank_Headset.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	var frameCount = 20;
	# Start with blank frames set to 30PS
	ChromaAnimationAPI.MakeBlankFramesName(baseLayer, frameCount, 0.033, 0)
	# Fill all frames with black and white static
	ChromaAnimationAPI.FillRandomColorsBlackAndWhiteAllFramesName(baseLayer)
	# slow down the random frames so it can be seen
	ChromaAnimationAPI.DuplicateFramesName(baseLayer)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect37Mousepad():
	# start with a blank animation
	var baseLayer = "Animations/Blank_Mousepad.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	var frameCount = 20;
	# Start with blank frames set to 30PS
	ChromaAnimationAPI.MakeBlankFramesName(baseLayer, frameCount, 0.033, 0)
	# Fill all frames with black and white static
	ChromaAnimationAPI.FillRandomColorsBlackAndWhiteAllFramesName(baseLayer)
	# slow down the random frames so it can be seen
	ChromaAnimationAPI.DuplicateFramesName(baseLayer)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect37Mouse():
	# start with a blank animation
	var baseLayer = "Animations/Blank_Mouse.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	var frameCount = 20;
	# Start with blank frames set to 30PS
	ChromaAnimationAPI.MakeBlankFramesName(baseLayer, frameCount, 0.033, 0)
	# Fill all frames with black and white static
	ChromaAnimationAPI.FillRandomColorsBlackAndWhiteAllFramesName(baseLayer)
	# slow down the random frames so it can be seen
	ChromaAnimationAPI.DuplicateFramesName(baseLayer)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect37Keypad():
	# start with a blank animation
	var baseLayer = "Animations/Blank_Keypad.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	var frameCount = 20;
	# Start with blank frames set to 30PS
	ChromaAnimationAPI.MakeBlankFramesName(baseLayer, frameCount, 0.033, 0)
	# Fill all frames with black and white static
	ChromaAnimationAPI.FillRandomColorsBlackAndWhiteAllFramesName(baseLayer)
	# slow down the random frames so it can be seen
	ChromaAnimationAPI.DuplicateFramesName(baseLayer)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect38():
	# start with a blank animation
	var baseLayer = "Animations/Blank_Keyboard.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	var frameCount = 20;
	# Start with blank frames set to 30PS
	ChromaAnimationAPI.MakeBlankFramesName(baseLayer, frameCount, 0.033, 0)
	# Fill all frames with black and white static
	ChromaAnimationAPI.FillRandomColorsBlackAndWhiteAllFramesName(baseLayer)
	# slow down the random frames so it can be seen
	ChromaAnimationAPI.DuplicateFramesName(baseLayer)
	# make random colors more sparse using threshold
	var threshold = 240;
	# turn lower intensity colors to black
	ChromaAnimationAPI.FillThresholdColorsAllFramesName(baseLayer, threshold, 0)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect38ChromaLink():
	# start with a blank animation
	var baseLayer = "Animations/Blank_ChromaLink.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	var frameCount = 20;
	# Start with blank frames set to 30PS
	ChromaAnimationAPI.MakeBlankFramesName(baseLayer, frameCount, 0.033, 0)
	# Fill all frames with black and white static
	ChromaAnimationAPI.FillRandomColorsBlackAndWhiteAllFramesName(baseLayer)
	# slow down the random frames so it can be seen
	ChromaAnimationAPI.DuplicateFramesName(baseLayer)
	# make random colors more sparse using threshold
	var threshold = 240;
	# turn lower intensity colors to black
	ChromaAnimationAPI.FillThresholdColorsAllFramesName(baseLayer, threshold, 0)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect38Headset():
	# start with a blank animation
	var baseLayer = "Animations/Blank_Headset.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	var frameCount = 20;
	# Start with blank frames set to 30PS
	ChromaAnimationAPI.MakeBlankFramesName(baseLayer, frameCount, 0.033, 0)
	# Fill all frames with black and white static
	ChromaAnimationAPI.FillRandomColorsBlackAndWhiteAllFramesName(baseLayer)
	# slow down the random frames so it can be seen
	ChromaAnimationAPI.DuplicateFramesName(baseLayer)
	# make random colors more sparse using threshold
	var threshold = 240;
	# turn lower intensity colors to black
	ChromaAnimationAPI.FillThresholdColorsAllFramesName(baseLayer, threshold, 0)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect38Mousepad():
	# start with a blank animation
	var baseLayer = "Animations/Blank_Mousepad.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	var frameCount = 20;
	# Start with blank frames set to 30PS
	ChromaAnimationAPI.MakeBlankFramesName(baseLayer, frameCount, 0.033, 0)
	# Fill all frames with black and white static
	ChromaAnimationAPI.FillRandomColorsBlackAndWhiteAllFramesName(baseLayer)
	# slow down the random frames so it can be seen
	ChromaAnimationAPI.DuplicateFramesName(baseLayer)
	# make random colors more sparse using threshold
	var threshold = 240;
	# turn lower intensity colors to black
	ChromaAnimationAPI.FillThresholdColorsAllFramesName(baseLayer, threshold, 0)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect38Mouse():
	# start with a blank animation
	var baseLayer = "Animations/Blank_Mouse.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	var frameCount = 20;
	# Start with blank frames set to 30PS
	ChromaAnimationAPI.MakeBlankFramesName(baseLayer, frameCount, 0.033, 0)
	# Fill all frames with black and white static
	ChromaAnimationAPI.FillRandomColorsBlackAndWhiteAllFramesName(baseLayer)
	# slow down the random frames so it can be seen
	ChromaAnimationAPI.DuplicateFramesName(baseLayer)
	# make random colors more sparse using threshold
	var threshold = 240;
	# turn lower intensity colors to black
	ChromaAnimationAPI.FillThresholdColorsAllFramesName(baseLayer, threshold, 0)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect38Keypad():
	# start with a blank animation
	var baseLayer = "Animations/Blank_Keypad.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	var frameCount = 20;
	# Start with blank frames set to 30PS
	ChromaAnimationAPI.MakeBlankFramesName(baseLayer, frameCount, 0.033, 0)
	# Fill all frames with black and white static
	ChromaAnimationAPI.FillRandomColorsBlackAndWhiteAllFramesName(baseLayer)
	# slow down the random frames so it can be seen
	ChromaAnimationAPI.DuplicateFramesName(baseLayer)
	# make random colors more sparse using threshold
	var threshold = 240;
	# turn lower intensity colors to black
	ChromaAnimationAPI.FillThresholdColorsAllFramesName(baseLayer, threshold, 0)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect39():
	# start with a blank animation
	var baseLayer = "Animations/Blank_Keyboard.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	var frameCount = 20;
	# Start with blank frames set to 30PS
	ChromaAnimationAPI.MakeBlankFramesName(baseLayer, frameCount, 0.033, 0)
	# Fill all frames with black and white static
	ChromaAnimationAPI.FillRandomColorsBlackAndWhiteAllFramesName(baseLayer)
	# slow down the random frames so it can be seen
	ChromaAnimationAPI.DuplicateFramesName(baseLayer)
	var minThreshold = 240; #black
	var maxThreshold = 240; #rain
	ChromaAnimationAPI.FillThresholdColorsMinMaxAllFramesRGBName(baseLayer, minThreshold, 0, 0, 0, maxThreshold, 0, 127, 255)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect39ChromaLink():
	# start with a blank animation
	var baseLayer = "Animations/Blank_ChromaLink.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	var frameCount = 20;
	# Start with blank frames set to 30PS
	ChromaAnimationAPI.MakeBlankFramesName(baseLayer, frameCount, 0.033, 0)
	# Fill all frames with black and white static
	ChromaAnimationAPI.FillRandomColorsBlackAndWhiteAllFramesName(baseLayer)
	# slow down the random frames so it can be seen
	ChromaAnimationAPI.DuplicateFramesName(baseLayer)
	var minThreshold = 240; #black
	var maxThreshold = 240; #rain
	ChromaAnimationAPI.FillThresholdColorsMinMaxAllFramesRGBName(baseLayer, minThreshold, 0, 0, 0, maxThreshold, 0, 127, 255)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect39Headset():
	# start with a blank animation
	var baseLayer = "Animations/Blank_Headset.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	var frameCount = 20;
	# Start with blank frames set to 30PS
	ChromaAnimationAPI.MakeBlankFramesName(baseLayer, frameCount, 0.033, 0)
	# Fill all frames with black and white static
	ChromaAnimationAPI.FillRandomColorsBlackAndWhiteAllFramesName(baseLayer)
	# slow down the random frames so it can be seen
	ChromaAnimationAPI.DuplicateFramesName(baseLayer)
	var minThreshold = 240; #black
	var maxThreshold = 240; #rain
	ChromaAnimationAPI.FillThresholdColorsMinMaxAllFramesRGBName(baseLayer, minThreshold, 0, 0, 0, maxThreshold, 0, 127, 255)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect39Mousepad():
	# start with a blank animation
	var baseLayer = "Animations/Blank_Mousepad.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	var frameCount = 20;
	# Start with blank frames set to 30PS
	ChromaAnimationAPI.MakeBlankFramesName(baseLayer, frameCount, 0.033, 0)
	# Fill all frames with black and white static
	ChromaAnimationAPI.FillRandomColorsBlackAndWhiteAllFramesName(baseLayer)
	# slow down the random frames so it can be seen
	ChromaAnimationAPI.DuplicateFramesName(baseLayer)
	var minThreshold = 240; #black
	var maxThreshold = 240; #rain
	ChromaAnimationAPI.FillThresholdColorsMinMaxAllFramesRGBName(baseLayer, minThreshold, 0, 0, 0, maxThreshold, 0, 127, 255)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect39Mouse():
	# start with a blank animation
	var baseLayer = "Animations/Blank_Mouse.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	var frameCount = 20;
	# Start with blank frames set to 30PS
	ChromaAnimationAPI.MakeBlankFramesName(baseLayer, frameCount, 0.033, 0)
	# Fill all frames with black and white static
	ChromaAnimationAPI.FillRandomColorsBlackAndWhiteAllFramesName(baseLayer)
	# slow down the random frames so it can be seen
	ChromaAnimationAPI.DuplicateFramesName(baseLayer)
	var minThreshold = 240; #black
	var maxThreshold = 240; #rain
	ChromaAnimationAPI.FillThresholdColorsMinMaxAllFramesRGBName(baseLayer, minThreshold, 0, 0, 0, maxThreshold, 0, 127, 255)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect39Keypad():
	# start with a blank animation
	var baseLayer = "Animations/Blank_Keypad.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	var frameCount = 20;
	# Start with blank frames set to 30PS
	ChromaAnimationAPI.MakeBlankFramesName(baseLayer, frameCount, 0.033, 0)
	# Fill all frames with black and white static
	ChromaAnimationAPI.FillRandomColorsBlackAndWhiteAllFramesName(baseLayer)
	# slow down the random frames so it can be seen
	ChromaAnimationAPI.DuplicateFramesName(baseLayer)
	var minThreshold = 240; #black
	var maxThreshold = 240; #rain
	ChromaAnimationAPI.FillThresholdColorsMinMaxAllFramesRGBName(baseLayer, minThreshold, 0, 0, 0, maxThreshold, 0, 127, 255)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect40():
	# start with a blank animation
	var baseLayer = "Animations/Blank_Keyboard.chroma";
	var idleAnimation = "Animations/BlackAndWhiteRainbow_Keyboard.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	ChromaAnimationAPI.CloseAnimationName(idleAnimation)
	# Set idle animation
	ChromaAnimationAPI.SetIdleAnimationName(idleAnimation)
	# Enable idle animation
	ChromaAnimationAPI.UseIdleAnimation(EChromaSDKDeviceEnum.DE_Keyboard, true)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# Transition from green to red and then stop
	var frameCount = 30;
	ChromaAnimationAPI.MakeBlankFramesRGBName(baseLayer, frameCount, 0.1, 255, 255, 255)
	var color1 = ChromaAnimationAPI.GetRGB(0, 255, 0)
	var color2 = ChromaAnimationAPI.GetRGB(255, 0, 0)
	ChromaAnimationAPI.MultiplyColorLerpAllFramesName(baseLayer, color1, color2)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, false)
func showEffect40ChromaLink():
	# start with a blank animation
	var baseLayer = "Animations/Blank_ChromaLink.chroma";
	var idleAnimation = "Animations/BlackAndWhiteRainbow_ChromaLink.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	ChromaAnimationAPI.CloseAnimationName(idleAnimation)
	# Set idle animation
	ChromaAnimationAPI.SetIdleAnimationName(idleAnimation)
	# Enable idle animation
	ChromaAnimationAPI.UseIdleAnimation(EChromaSDKDeviceEnum.DE_ChromaLink, true)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# Transition from green to red and then stop
	var frameCount = 30;
	ChromaAnimationAPI.MakeBlankFramesRGBName(baseLayer, frameCount, 0.1, 255, 255, 255)
	var color1 = ChromaAnimationAPI.GetRGB(0, 255, 0)
	var color2 = ChromaAnimationAPI.GetRGB(255, 0, 0)
	ChromaAnimationAPI.MultiplyColorLerpAllFramesName(baseLayer, color1, color2)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, false)
func showEffect40Headset():
	# start with a blank animation
	var baseLayer = "Animations/Blank_Headset.chroma";
	var idleAnimation = "Animations/BlackAndWhiteRainbow_Headset.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	ChromaAnimationAPI.CloseAnimationName(idleAnimation)
	# Set idle animation
	ChromaAnimationAPI.SetIdleAnimationName(idleAnimation)
	# Enable idle animation
	ChromaAnimationAPI.UseIdleAnimation(EChromaSDKDeviceEnum.DE_Headset, true)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# Transition from green to red and then stop
	var frameCount = 30;
	ChromaAnimationAPI.MakeBlankFramesRGBName(baseLayer, frameCount, 0.1, 255, 255, 255)
	var color1 = ChromaAnimationAPI.GetRGB(0, 255, 0)
	var color2 = ChromaAnimationAPI.GetRGB(255, 0, 0)
	ChromaAnimationAPI.MultiplyColorLerpAllFramesName(baseLayer, color1, color2)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, false)
func showEffect40Mousepad():
	# start with a blank animation
	var baseLayer = "Animations/Blank_Mousepad.chroma";
	var idleAnimation = "Animations/BlackAndWhiteRainbow_Mousepad.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	ChromaAnimationAPI.CloseAnimationName(idleAnimation)
	# Set idle animation
	ChromaAnimationAPI.SetIdleAnimationName(idleAnimation)
	# Enable idle animation
	ChromaAnimationAPI.UseIdleAnimation(EChromaSDKDeviceEnum.DE_Mousepad, true)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# Transition from green to red and then stop
	var frameCount = 30;
	ChromaAnimationAPI.MakeBlankFramesRGBName(baseLayer, frameCount, 0.1, 255, 255, 255)
	var color1 = ChromaAnimationAPI.GetRGB(0, 255, 0)
	var color2 = ChromaAnimationAPI.GetRGB(255, 0, 0)
	ChromaAnimationAPI.MultiplyColorLerpAllFramesName(baseLayer, color1, color2)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, false)
func showEffect40Mouse():
	# start with a blank animation
	var baseLayer = "Animations/Blank_Mouse.chroma";
	var idleAnimation = "Animations/BlackAndWhiteRainbow_Mouse.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	ChromaAnimationAPI.CloseAnimationName(idleAnimation)
	# Set idle animation
	ChromaAnimationAPI.SetIdleAnimationName(idleAnimation)
	# Enable idle animation
	ChromaAnimationAPI.UseIdleAnimation(EChromaSDKDeviceEnum.DE_Mouse, true)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# Transition from green to red and then stop
	var frameCount = 30;
	ChromaAnimationAPI.MakeBlankFramesRGBName(baseLayer, frameCount, 0.1, 255, 255, 255)
	var color1 = ChromaAnimationAPI.GetRGB(0, 255, 0)
	var color2 = ChromaAnimationAPI.GetRGB(255, 0, 0)
	ChromaAnimationAPI.MultiplyColorLerpAllFramesName(baseLayer, color1, color2)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, false)
func showEffect40Keypad():
	# start with a blank animation
	var baseLayer = "Animations/Blank_Keypad.chroma";
	var idleAnimation = "Animations/BlackAndWhiteRainbow_Keypad.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	ChromaAnimationAPI.CloseAnimationName(idleAnimation)
	# Set idle animation
	ChromaAnimationAPI.SetIdleAnimationName(idleAnimation)
	# Enable idle animation
	ChromaAnimationAPI.UseIdleAnimation(EChromaSDKDeviceEnum.DE_Mouse, true)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# Transition from green to red and then stop
	var frameCount = 30;
	ChromaAnimationAPI.MakeBlankFramesRGBName(baseLayer, frameCount, 0.1, 255, 255, 255)
	var color1 = ChromaAnimationAPI.GetRGB(0, 255, 0)
	var color2 = ChromaAnimationAPI.GetRGB(255, 0, 0)
	ChromaAnimationAPI.MultiplyColorLerpAllFramesName(baseLayer, color1, color2)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, false)
func showEffect41():
	# start with a blank animation
	var baseLayer = "Animations/Blank_Keyboard.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# the length of the animation
	var frameCount = 50;
	# set all frames to white, with all frames set to 30PS
	ChromaAnimationAPI.MakeBlankFramesRGBName(baseLayer, frameCount, 0.033, 64, 0, 64)
	var maxRow = ChromaAnimationAPI.GetMaxRow((int)EChromaSDKDevice2DEnum::DE_Keyboard)
	var maxColumn = ChromaAnimationAPI.GetMaxColumn((int)EChromaSDKDevice2DEnum::DE_Keyboard)
	var startColumn = floor(Math.random() * maxColumn) % 22;
	var startRow = floor(Math.random() * maxRow) % 6;
	var color = ChromaAnimationAPI.GetRGB(0, 255, 0)
	var radius = 0;
	var speed = 25 / float(frameCount)
	var lineWidth = 2;
	for frameIndex in range(0, frameCount, 1):
		var stroke = radius;
		for t in range(0, lineWidth, 1):
			for i in range(0, 360, 1):
				var angle = i * PI / 180.0;
				var r = floor(startRow + stroke * sin(angle))
				var c = floor(startColumn + stroke * sin(angle))
				if (r >= 0 && r < maxRow &&
					c >= 0 && c < maxColumn) {
					var key = (r << 8) | c;
					ChromaAnimationAPI.SetKeyColorName(baseLayer, frameIndex, key, color)
			stroke += speed;
		radius += speed;
	# play at top speed
	ChromaAnimationAPI.OverrideFrameDurationName(baseLayer, 0.033)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect41ChromaLink():
	# start with a blank animation
	var baseLayer = "Animations/Blank_ChromaLink.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# the length of the animation
	var frameCount = 50;
	# solid color
	ChromaAnimationAPI.MakeBlankFramesRGBName(baseLayer, frameCount, 0.033, 64, 255, 64)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect41Headset():
	# start with a blank animation
	var baseLayer = "Animations/Blank_Headset.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# the length of the animation
	var frameCount = 50;
	# solid color
	ChromaAnimationAPI.MakeBlankFramesRGBName(baseLayer, frameCount, 0.033, 64, 255, 64)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect41Mousepad():
	# start with a blank animation
	var baseLayer = "Animations/Blank_Mousepad.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# the length of the animation
	var frameCount = 50;
	# solid color
	ChromaAnimationAPI.MakeBlankFramesRGBName(baseLayer, frameCount, 0.033, 64, 255, 64)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect41Mouse():
	# start with a blank animation
	var baseLayer = "Animations/Blank_Mouse.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# the length of the animation
	var frameCount = 50;
	# solid color
	ChromaAnimationAPI.MakeBlankFramesRGBName(baseLayer, frameCount, 0.033, 64, 255, 64)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect41Keypad():
	# start with a blank animation
	var baseLayer = "Animations/Blank_Keypad.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# the length of the animation
	var frameCount = 50;
	# solid color
	ChromaAnimationAPI.MakeBlankFramesRGBName(baseLayer, frameCount, 0.033, 64, 255, 64)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect42():
	# start with a blank animation
	var baseLayer = "Animations/Blank_Keyboard.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# the length of the animation
	var frameCount = 1;
	# set all frames to white, with all frames set to 30PS
	ChromaAnimationAPI.MakeBlankFramesRGBName(baseLayer, frameCount, 0.033, 64, 0, 64)
	var maxRow = ChromaAnimationAPI.GetMaxRow((int)EChromaSDKDevice2DEnum::DE_Keyboard)
	var maxColumn = ChromaAnimationAPI.GetMaxColumn((int)EChromaSDKDevice2DEnum::DE_Keyboard)
	# pick first key
	var pointAColumn = floor(Math.random() * maxColumn) % 22;
	var pointARow = floor(Math.random() * maxRow) % 6;
	# pick a different second key
	var pointBColumn;
	var pointBRow;
		do {
		pointBColumn = floor(Math.random() * maxColumn) % 22;
		pointBRow = floor(Math.random() * maxRow) % 6;
	} while (pointAColumn == pointBColumn && pointARow == pointBRow)
	var color = ChromaAnimationAPI.GetRGB(0, 255, 0)
	var frameIndex = 0;
	for = in range(=, 1.0f, ):
		var r = floor(ChromaAnimationAPI.Lerp(pointARow, pointBRow, i))
		var c = floor(ChromaAnimationAPI.Lerp(pointAColumn, pointBColumn, i))
		if (r >= 0 && r < maxRow &&
			c >= 0 && c < maxColumn) {
			var key = (r << 8) | c;
			ChromaAnimationAPI.SetKeyColorName(baseLayer, frameIndex, key, color)
	# play at top speed
	ChromaAnimationAPI.OverrideFrameDurationName(baseLayer, 0.033)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect42ChromaLink():
	# start with a blank animation
	var baseLayer = "Animations/Blank_ChromaLink.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# the length of the animation
	var frameCount = 50;
	# solid color
	ChromaAnimationAPI.MakeBlankFramesRGBName(baseLayer, frameCount, 0.033, 64, 255, 64)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect42Headset():
	# start with a blank animation
	var baseLayer = "Animations/Blank_Headset.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# the length of the animation
	var frameCount = 50;
	# solid color
	ChromaAnimationAPI.MakeBlankFramesRGBName(baseLayer, frameCount, 0.033, 64, 255, 64)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect42Mousepad():
	# start with a blank animation
	var baseLayer = "Animations/Blank_Mousepad.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# the length of the animation
	var frameCount = 50;
	# solid color
	ChromaAnimationAPI.MakeBlankFramesRGBName(baseLayer, frameCount, 0.033, 64, 255, 64)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect42Mouse():
	# start with a blank animation
	var baseLayer = "Animations/Blank_Mouse.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# the length of the animation
	var frameCount = 50;
	# solid color
	ChromaAnimationAPI.MakeBlankFramesRGBName(baseLayer, frameCount, 0.033, 64, 255, 64)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect42Keypad():
	# start with a blank animation
	var baseLayer = "Animations/Blank_Keypad.chroma";
	# close the blank animation if it's already loaded, discarding any changes
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	# open the blank animation, passing a reference to the base animation when loading has completed
	ChromaAnimationAPI.GetAnimation(baseLayer)
	# the length of the animation
	var frameCount = 50;
	# solid color
	ChromaAnimationAPI.MakeBlankFramesRGBName(baseLayer, frameCount, 0.033, 64, 255, 64)
	# play the animation on the dynamic canvas
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect43():
	var baseLayer = "Animations/BlackAndWhiteRainbow_Keyboard.chroma";
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	ChromaAnimationAPI.GetAnimation(baseLayer)
	ChromaAnimationAPI.ReduceFramesName(baseLayer, 2)
	ChromaAnimationAPI.ReduceFramesName(baseLayer, 2)
	var color1 = ChromaAnimationAPI.GetRGB(64, 64, 0)
	var color2 = ChromaAnimationAPI.GetRGB(64, 0, 64)
	ChromaAnimationAPI.MultiplyTargetColorLerpAllFramesName(baseLayer, color1, color2)
		var keys[] = {
		Keyboard::RZKEY::RZKEY_W,
		Keyboard::RZKEY::RZKEY_A,
		Keyboard::RZKEY::RZKEY_S,
		Keyboard::RZKEY::RZKEY_D,
		Keyboard::RZKEY::RZKEY_P,
		Keyboard::RZKEY::RZKEY_M,
		Keyboard::RZKEY::RZKEY_F1,
	};
	var color = ChromaAnimationAPI.GetRGB(0, 255, 0)
	ChromaAnimationAPI.SetKeysColorAllFramesName(baseLayer,  keys, (int)size(keys),  color)
	ChromaAnimationAPI.SetChromaCustomFlagName(baseLayer, true)
	ChromaAnimationAPI.SetChromaCustomColorAllFramesName(baseLayer)
	ChromaAnimationAPI.OverrideFrameDurationName(baseLayer, 0.033)
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect43ChromaLink():
	var baseLayer = "Animations/BlackAndWhiteRainbow_ChromaLink.chroma";
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	ChromaAnimationAPI.GetAnimation(baseLayer)
	ChromaAnimationAPI.ReduceFramesName(baseLayer, 2)
	ChromaAnimationAPI.ReduceFramesName(baseLayer, 2)
	var color1 = ChromaAnimationAPI.GetRGB(64, 64, 0)
	var color2 = ChromaAnimationAPI.GetRGB(64, 0, 64)
	ChromaAnimationAPI.MultiplyTargetColorLerpAllFramesName(baseLayer, color1, color2)
	ChromaAnimationAPI.OverrideFrameDurationName(baseLayer, 0.033)
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect43Headset():
	var baseLayer = "Animations/BlackAndWhiteRainbow_Headset.chroma";
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	ChromaAnimationAPI.GetAnimation(baseLayer)
	ChromaAnimationAPI.ReduceFramesName(baseLayer, 2)
	ChromaAnimationAPI.ReduceFramesName(baseLayer, 2)
	var color1 = ChromaAnimationAPI.GetRGB(64, 64, 0)
	var color2 = ChromaAnimationAPI.GetRGB(64, 0, 64)
	ChromaAnimationAPI.MultiplyTargetColorLerpAllFramesName(baseLayer, color1, color2)
	ChromaAnimationAPI.OverrideFrameDurationName(baseLayer, 0.033)
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect43Mousepad():
	var baseLayer = "Animations/BlackAndWhiteRainbow_Mousepad.chroma";
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	ChromaAnimationAPI.GetAnimation(baseLayer)
	ChromaAnimationAPI.ReduceFramesName(baseLayer, 2)
	ChromaAnimationAPI.ReduceFramesName(baseLayer, 2)
	var color1 = ChromaAnimationAPI.GetRGB(64, 64, 0)
	var color2 = ChromaAnimationAPI.GetRGB(64, 0, 64)
	ChromaAnimationAPI.MultiplyTargetColorLerpAllFramesName(baseLayer, color1, color2)
	ChromaAnimationAPI.OverrideFrameDurationName(baseLayer, 0.033)
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect43Mouse():
	var baseLayer = "Animations/BlackAndWhiteRainbow_Mouse.chroma";
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	ChromaAnimationAPI.GetAnimation(baseLayer)
	ChromaAnimationAPI.ReduceFramesName(baseLayer, 2)
	ChromaAnimationAPI.ReduceFramesName(baseLayer, 2)
	var color1 = ChromaAnimationAPI.GetRGB(64, 64, 0)
	var color2 = ChromaAnimationAPI.GetRGB(64, 0, 64)
	ChromaAnimationAPI.MultiplyTargetColorLerpAllFramesName(baseLayer, color1, color2)
	ChromaAnimationAPI.OverrideFrameDurationName(baseLayer, 0.033)
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect43Keypad():
	var baseLayer = "Animations/BlackAndWhiteRainbow_Keypad.chroma";
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	ChromaAnimationAPI.GetAnimation(baseLayer)
	ChromaAnimationAPI.ReduceFramesName(baseLayer, 2)
	ChromaAnimationAPI.ReduceFramesName(baseLayer, 2)
	var color1 = ChromaAnimationAPI.GetRGB(64, 64, 0)
	var color2 = ChromaAnimationAPI.GetRGB(64, 0, 64)
	ChromaAnimationAPI.MultiplyTargetColorLerpAllFramesName(baseLayer, color1, color2)
	ChromaAnimationAPI.OverrideFrameDurationName(baseLayer, 0.033)
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect44():
	var baseLayer = "Animations/Spiral_Keyboard.chroma";
	var layer2 = "Animations/Rainbow_Keyboard.chroma";
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	ChromaAnimationAPI.CloseAnimationName(layer2)
	ChromaAnimationAPI.GetAnimation(baseLayer)
	ChromaAnimationAPI.GetAnimation(layer2)
	var color1 = ChromaAnimationAPI.GetRGB(32, 32, 32)
	var color2 = ChromaAnimationAPI.GetRGB(64, 64, 64)
	ChromaAnimationAPI.MultiplyTargetColorLerpAllFramesName(baseLayer, color1, color2)
		var keys[] = {
		Keyboard::RZKEY::RZKEY_W,
		Keyboard::RZKEY::RZKEY_A,
		Keyboard::RZKEY::RZKEY_S,
		Keyboard::RZKEY::RZKEY_D,
		Keyboard::RZKEY::RZKEY_P,
		Keyboard::RZKEY::RZKEY_M,
		Keyboard::RZKEY::RZKEY_F1,
	};
	ChromaAnimationAPI.CopyKeysColorAllFramesName(layer2, baseLayer, keys)
	ChromaAnimationAPI.SetChromaCustomFlagName(baseLayer, true)
	ChromaAnimationAPI.SetChromaCustomColorAllFramesName(baseLayer)
	ChromaAnimationAPI.OverrideFrameDurationName(baseLayer, 0.033)
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect44ChromaLink():
	var baseLayer = "Animations/BlackAndWhiteRainbow_ChromaLink.chroma";
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	ChromaAnimationAPI.GetAnimation(baseLayer)
	ChromaAnimationAPI.ReduceFramesName(baseLayer, 2)
	ChromaAnimationAPI.ReduceFramesName(baseLayer, 2)
	var color1 = ChromaAnimationAPI.GetRGB(32, 32, 32)
	var color2 = ChromaAnimationAPI.GetRGB(64, 64, 64)
	ChromaAnimationAPI.MultiplyTargetColorLerpAllFramesName(baseLayer, color1, color2)
	ChromaAnimationAPI.OverrideFrameDurationName(baseLayer, 0.033)
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect44Headset():
	var baseLayer = "Animations/BlackAndWhiteRainbow_Headset.chroma";
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	ChromaAnimationAPI.GetAnimation(baseLayer)
	ChromaAnimationAPI.ReduceFramesName(baseLayer, 2)
	ChromaAnimationAPI.ReduceFramesName(baseLayer, 2)
	var color1 = ChromaAnimationAPI.GetRGB(32, 32, 32)
	var color2 = ChromaAnimationAPI.GetRGB(64, 64, 64)
	ChromaAnimationAPI.MultiplyTargetColorLerpAllFramesName(baseLayer, color1, color2)
	ChromaAnimationAPI.OverrideFrameDurationName(baseLayer, 0.033)
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect44Mousepad():
	var baseLayer = "Animations/BlackAndWhiteRainbow_Mousepad.chroma";
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	ChromaAnimationAPI.GetAnimation(baseLayer)
	ChromaAnimationAPI.ReduceFramesName(baseLayer, 2)
	ChromaAnimationAPI.ReduceFramesName(baseLayer, 2)
	var color1 = ChromaAnimationAPI.GetRGB(32, 32, 32)
	var color2 = ChromaAnimationAPI.GetRGB(64, 64, 64)
	ChromaAnimationAPI.MultiplyTargetColorLerpAllFramesName(baseLayer, color1, color2)
	ChromaAnimationAPI.OverrideFrameDurationName(baseLayer, 0.033)
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect44Mouse():
	var baseLayer = "Animations/BlackAndWhiteRainbow_Mouse.chroma";
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	ChromaAnimationAPI.GetAnimation(baseLayer)
	ChromaAnimationAPI.ReduceFramesName(baseLayer, 2)
	ChromaAnimationAPI.ReduceFramesName(baseLayer, 2)
	var color1 = ChromaAnimationAPI.GetRGB(32, 32, 32)
	var color2 = ChromaAnimationAPI.GetRGB(64, 64, 64)
	ChromaAnimationAPI.MultiplyTargetColorLerpAllFramesName(baseLayer, color1, color2)
	ChromaAnimationAPI.OverrideFrameDurationName(baseLayer, 0.033)
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect44Keypad():
	var baseLayer = "Animations/BlackAndWhiteRainbow_Keypad.chroma";
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	ChromaAnimationAPI.GetAnimation(baseLayer)
	ChromaAnimationAPI.ReduceFramesName(baseLayer, 2)
	ChromaAnimationAPI.ReduceFramesName(baseLayer, 2)
	var color1 = ChromaAnimationAPI.GetRGB(32, 32, 32)
	var color2 = ChromaAnimationAPI.GetRGB(64, 64, 64)
	ChromaAnimationAPI.MultiplyTargetColorLerpAllFramesName(baseLayer, color1, color2)
	ChromaAnimationAPI.OverrideFrameDurationName(baseLayer, 0.033)
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect45():
	var baseLayer = "Animations/Blank_Keyboard.chroma";
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	ChromaAnimationAPI.GetAnimation(baseLayer)
	var frameCount = 120;
	ChromaAnimationAPI.MakeBlankFramesRGBName(baseLayer, frameCount, 0.1, 64, 64, 64)
		var keys[] = {
		Keyboard::RZKEY::RZKEY_W,
		Keyboard::RZKEY::RZKEY_A,
		Keyboard::RZKEY::RZKEY_S,
		Keyboard::RZKEY::RZKEY_D,
	};
	ChromaAnimationAPI.SetKeysColorAllFramesRGBName(baseLayer,  keys, (int)size(keys),  255,  255,  0)
		keys[] = {
		Keyboard::RZKEY::RZKEY_F1,
		Keyboard::RZKEY::RZKEY_F2,
		Keyboard::RZKEY::RZKEY_F3,
		Keyboard::RZKEY::RZKEY_F4,
		Keyboard::RZKEY::RZKEY_F5,
		Keyboard::RZKEY::RZKEY_F6,
	};
	var t = 0;
	var speed = 0.05;
	for frameId in range(0, frameCount, 1):
		t += speed;
		var hp = abs(sin(PI / 2.0 + t))
		for i in range(0, keys.length, 1):
			var ratio = (i + 1) / keys.length;
			var color = ChromaAnimationAPI.GetRGB(0, 255 * (1 - hp), 0)
				if ((i + 1) / (keys.length + 1) < hp) {
				color = ChromaAnimationAPI.GetRGB(0, 255, 0)
				} else {
				color = ChromaAnimationAPI.GetRGB(0, 100, 0)
			var key = keys[i];
			ChromaAnimationAPI.SetKeyColorName(baseLayer, frameId, key, color)
	ChromaAnimationAPI.SetChromaCustomFlagName(baseLayer, true)
	ChromaAnimationAPI.SetChromaCustomColorAllFramesName(baseLayer)
	ChromaAnimationAPI.OverrideFrameDurationName(baseLayer, 0.033)
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect45ChromaLink():
	var baseLayer = "Animations/Blank_ChromaLink.chroma";
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	ChromaAnimationAPI.GetAnimation(baseLayer)
	var frameCount = 50;
	ChromaAnimationAPI.MakeBlankFramesRGBName(baseLayer, frameCount, 0.1, 255, 255, 255)
	ChromaAnimationAPI.FadeStartFramesName(baseLayer, frameCount / 2)
	ChromaAnimationAPI.FadeEndFramesName(baseLayer, frameCount / 2)
	var color1 = ChromaAnimationAPI.GetRGB(0, 64, 0)
	var color2 = ChromaAnimationAPI.GetRGB(0, 255, 0)
	ChromaAnimationAPI.MultiplyTargetColorLerpAllFramesName(baseLayer, color1, color2)
	ChromaAnimationAPI.OverrideFrameDurationName(baseLayer, 0.033)
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect45Headset():
	var baseLayer = "Animations/Blank_Headset.chroma";
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	ChromaAnimationAPI.GetAnimation(baseLayer)
	var frameCount = 50;
	ChromaAnimationAPI.MakeBlankFramesRGBName(baseLayer, frameCount, 0.1, 255, 255, 255)
	ChromaAnimationAPI.FadeStartFramesName(baseLayer, frameCount / 2)
	ChromaAnimationAPI.FadeEndFramesName(baseLayer, frameCount / 2)
	var color1 = ChromaAnimationAPI.GetRGB(0, 64, 0)
	var color2 = ChromaAnimationAPI.GetRGB(0, 255, 0)
	ChromaAnimationAPI.MultiplyTargetColorLerpAllFramesName(baseLayer, color1, color2)
	ChromaAnimationAPI.OverrideFrameDurationName(baseLayer, 0.033)
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect45Mousepad():
	var baseLayer = "Animations/Blank_Mousepad.chroma";
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	ChromaAnimationAPI.GetAnimation(baseLayer)
	var frameCount = 50;
	ChromaAnimationAPI.MakeBlankFramesRGBName(baseLayer, frameCount, 0.1, 255, 255, 255)
	ChromaAnimationAPI.FadeStartFramesName(baseLayer, frameCount / 2)
	ChromaAnimationAPI.FadeEndFramesName(baseLayer, frameCount / 2)
	var color1 = ChromaAnimationAPI.GetRGB(0, 64, 0)
	var color2 = ChromaAnimationAPI.GetRGB(0, 255, 0)
	ChromaAnimationAPI.MultiplyTargetColorLerpAllFramesName(baseLayer, color1, color2)
	ChromaAnimationAPI.OverrideFrameDurationName(baseLayer, 0.033)
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect45Mouse():
	var baseLayer = "Animations/Blank_Mouse.chroma";
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	ChromaAnimationAPI.GetAnimation(baseLayer)
	var frameCount = 50;
	ChromaAnimationAPI.MakeBlankFramesRGBName(baseLayer, frameCount, 0.1, 255, 255, 255)
	ChromaAnimationAPI.FadeStartFramesName(baseLayer, frameCount / 2)
	ChromaAnimationAPI.FadeEndFramesName(baseLayer, frameCount / 2)
	var color1 = ChromaAnimationAPI.GetRGB(0, 64, 0)
	var color2 = ChromaAnimationAPI.GetRGB(0, 255, 0)
	ChromaAnimationAPI.MultiplyTargetColorLerpAllFramesName(baseLayer, color1, color2)
	ChromaAnimationAPI.OverrideFrameDurationName(baseLayer, 0.033)
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect45Keypad():
	var baseLayer = "Animations/Blank_Keypad.chroma";
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	ChromaAnimationAPI.GetAnimation(baseLayer)
	var frameCount = 50;
	ChromaAnimationAPI.MakeBlankFramesRGBName(baseLayer, frameCount, 0.1, 255, 255, 255)
	ChromaAnimationAPI.FadeStartFramesName(baseLayer, frameCount / 2)
	ChromaAnimationAPI.FadeEndFramesName(baseLayer, frameCount / 2)
	var color1 = ChromaAnimationAPI.GetRGB(0, 64, 0)
	var color2 = ChromaAnimationAPI.GetRGB(0, 255, 0)
	ChromaAnimationAPI.MultiplyTargetColorLerpAllFramesName(baseLayer, color1, color2)
	ChromaAnimationAPI.OverrideFrameDurationName(baseLayer, 0.033)
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect46():
	var baseLayer = "Animations/Blank_Keyboard.chroma";
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	ChromaAnimationAPI.GetAnimation(baseLayer)
	var frameCount = 120;
	ChromaAnimationAPI.MakeBlankFramesRGBName(baseLayer, frameCount, 0.1, 64, 64, 64)
		var keys[] = {
		Keyboard::RZKEY::RZKEY_W,
		Keyboard::RZKEY::RZKEY_A,
		Keyboard::RZKEY::RZKEY_S,
		Keyboard::RZKEY::RZKEY_D,
	};
	ChromaAnimationAPI.SetKeysColorAllFramesRGBName(baseLayer,  keys, (int)size(keys),  255,  0,  0)
		keys[] = {
		Keyboard::RZKEY::RZKEY_F7,
		Keyboard::RZKEY::RZKEY_F8,
		Keyboard::RZKEY::RZKEY_F9,
		Keyboard::RZKEY::RZKEY_F10,
		Keyboard::RZKEY::RZKEY_F11,
		Keyboard::RZKEY::RZKEY_F12,
	};
	var t = 0;
	var speed = 0.05;
	for frameId in range(0, frameCount, 1):
		t += speed;
		var hp = abs(sin(PI / 2.0 + t))
		for i in range(0, keys.length, 1):
			var ratio = (i + 1) / keys.length;
			var color = ChromaAnimationAPI.GetRGB(255 * (1 - hp), 255 * (1 - hp), 0)
				if ((i + 1) / (keys.length + 1) < hp) {
				color = ChromaAnimationAPI.GetRGB(255, 255, 0)
				} else {
				color = ChromaAnimationAPI.GetRGB(100, 100, 0)
			var key = keys[i];
			ChromaAnimationAPI.SetKeyColorName(baseLayer, frameId, key, color)
	ChromaAnimationAPI.SetChromaCustomFlagName(baseLayer, true)
	ChromaAnimationAPI.SetChromaCustomColorAllFramesName(baseLayer)
	ChromaAnimationAPI.OverrideFrameDurationName(baseLayer, 0.033)
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect46ChromaLink():
	var baseLayer = "Animations/Blank_ChromaLink.chroma";
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	ChromaAnimationAPI.GetAnimation(baseLayer)
	var frameCount = 50;
	ChromaAnimationAPI.MakeBlankFramesRGBName(baseLayer, frameCount, 0.1, 255, 255, 255)
	ChromaAnimationAPI.FadeStartFramesName(baseLayer, frameCount / 2)
	ChromaAnimationAPI.FadeEndFramesName(baseLayer, frameCount / 2)
	var color1 = ChromaAnimationAPI.GetRGB(64, 64, 0)
	var color2 = ChromaAnimationAPI.GetRGB(255, 255, 0)
	ChromaAnimationAPI.MultiplyTargetColorLerpAllFramesName(baseLayer, color1, color2)
	ChromaAnimationAPI.OverrideFrameDurationName(baseLayer, 0.033)
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect46Headset():
	var baseLayer = "Animations/Blank_Headset.chroma";
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	ChromaAnimationAPI.GetAnimation(baseLayer)
	var frameCount = 50;
	ChromaAnimationAPI.MakeBlankFramesRGBName(baseLayer, frameCount, 0.1, 255, 255, 255)
	ChromaAnimationAPI.FadeStartFramesName(baseLayer, frameCount / 2)
	ChromaAnimationAPI.FadeEndFramesName(baseLayer, frameCount / 2)
	var color1 = ChromaAnimationAPI.GetRGB(64, 64, 0)
	var color2 = ChromaAnimationAPI.GetRGB(255, 255, 0)
	ChromaAnimationAPI.MultiplyTargetColorLerpAllFramesName(baseLayer, color1, color2)
	ChromaAnimationAPI.OverrideFrameDurationName(baseLayer, 0.033)
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect46Mousepad():
	var baseLayer = "Animations/Blank_Mousepad.chroma";
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	ChromaAnimationAPI.GetAnimation(baseLayer)
	var frameCount = 50;
	ChromaAnimationAPI.MakeBlankFramesRGBName(baseLayer, frameCount, 0.1, 255, 255, 255)
	ChromaAnimationAPI.FadeStartFramesName(baseLayer, frameCount / 2)
	ChromaAnimationAPI.FadeEndFramesName(baseLayer, frameCount / 2)
	var color1 = ChromaAnimationAPI.GetRGB(64, 64, 0)
	var color2 = ChromaAnimationAPI.GetRGB(255, 255, 0)
	ChromaAnimationAPI.MultiplyTargetColorLerpAllFramesName(baseLayer, color1, color2)
	ChromaAnimationAPI.OverrideFrameDurationName(baseLayer, 0.033)
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect46Mouse():
	var baseLayer = "Animations/Blank_Mouse.chroma";
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	ChromaAnimationAPI.GetAnimation(baseLayer)
	var frameCount = 50;
	ChromaAnimationAPI.MakeBlankFramesRGBName(baseLayer, frameCount, 0.1, 255, 255, 255)
	ChromaAnimationAPI.FadeStartFramesName(baseLayer, frameCount / 2)
	ChromaAnimationAPI.FadeEndFramesName(baseLayer, frameCount / 2)
	var color1 = ChromaAnimationAPI.GetRGB(64, 64, 0)
	var color2 = ChromaAnimationAPI.GetRGB(255, 255, 0)
	ChromaAnimationAPI.MultiplyTargetColorLerpAllFramesName(baseLayer, color1, color2)
	ChromaAnimationAPI.OverrideFrameDurationName(baseLayer, 0.033)
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
func showEffect46Keypad():
	var baseLayer = "Animations/Blank_Keypad.chroma";
	ChromaAnimationAPI.CloseAnimationName(baseLayer)
	ChromaAnimationAPI.GetAnimation(baseLayer)
	var frameCount = 50;
	ChromaAnimationAPI.MakeBlankFramesRGBName(baseLayer, frameCount, 0.1, 255, 255, 255)
	ChromaAnimationAPI.FadeStartFramesName(baseLayer, frameCount / 2)
	ChromaAnimationAPI.FadeEndFramesName(baseLayer, frameCount / 2)
	var color1 = ChromaAnimationAPI.GetRGB(64, 64, 0)
	var color2 = ChromaAnimationAPI.GetRGB(255, 255, 0)
	ChromaAnimationAPI.MultiplyTargetColorLerpAllFramesName(baseLayer, color1, color2)
	ChromaAnimationAPI.OverrideFrameDurationName(baseLayer, 0.033)
	ChromaAnimationAPI.PlayAnimationName(baseLayer, true)
/*
case 1:
ShowEffect1()
ShowEffect1ChromaLink()
ShowEffect1Headset()
ShowEffect1Keypad()
ShowEffect1Mousepad()
ShowEffect1Mouse()
break;
case 2:
ShowEffect2()
ShowEffect2ChromaLink()
ShowEffect2Headset()
ShowEffect2Keypad()
ShowEffect2Mousepad()
ShowEffect2Mouse()
break;
case 3:
ShowEffect3()
ShowEffect3ChromaLink()
ShowEffect3Headset()
ShowEffect3Keypad()
ShowEffect3Mousepad()
ShowEffect3Mouse()
break;
case 4:
ShowEffect4()
ShowEffect4ChromaLink()
ShowEffect4Headset()
ShowEffect4Keypad()
ShowEffect4Mousepad()
ShowEffect4Mouse()
break;
case 5:
ShowEffect5()
ShowEffect5ChromaLink()
ShowEffect5Headset()
ShowEffect5Keypad()
ShowEffect5Mousepad()
ShowEffect5Mouse()
break;
case 6:
ShowEffect6()
ShowEffect6ChromaLink()
ShowEffect6Headset()
ShowEffect6Keypad()
ShowEffect6Mousepad()
ShowEffect6Mouse()
break;
case 7:
ShowEffect7()
ShowEffect7ChromaLink()
ShowEffect7Headset()
ShowEffect7Keypad()
ShowEffect7Mousepad()
ShowEffect7Mouse()
break;
case 8:
ShowEffect8()
ShowEffect8ChromaLink()
ShowEffect8Headset()
ShowEffect8Keypad()
ShowEffect8Mousepad()
ShowEffect8Mouse()
break;
case 9:
ShowEffect9()
ShowEffect9ChromaLink()
ShowEffect9Headset()
ShowEffect9Keypad()
ShowEffect9Mousepad()
ShowEffect9Mouse()
break;
case 10:
ShowEffect10()
ShowEffect10ChromaLink()
ShowEffect10Headset()
ShowEffect10Keypad()
ShowEffect10Mousepad()
ShowEffect10Mouse()
break;
case 11:
ShowEffect11()
ShowEffect11ChromaLink()
ShowEffect11Headset()
ShowEffect11Keypad()
ShowEffect11Mousepad()
ShowEffect11Mouse()
break;
case 12:
ShowEffect12()
ShowEffect12ChromaLink()
ShowEffect12Headset()
ShowEffect12Keypad()
ShowEffect12Mousepad()
ShowEffect12Mouse()
break;
case 13:
ShowEffect13()
ShowEffect13ChromaLink()
ShowEffect13Headset()
ShowEffect13Keypad()
ShowEffect13Mousepad()
ShowEffect13Mouse()
break;
case 14:
ShowEffect14()
ShowEffect14ChromaLink()
ShowEffect14Headset()
ShowEffect14Keypad()
ShowEffect14Mousepad()
ShowEffect14Mouse()
break;
case 15:
ShowEffect15()
ShowEffect15ChromaLink()
ShowEffect15Headset()
ShowEffect15Keypad()
ShowEffect15Mousepad()
ShowEffect15Mouse()
break;
case 16:
ShowEffect16()
ShowEffect16ChromaLink()
ShowEffect16Headset()
ShowEffect16Keypad()
ShowEffect16Mousepad()
ShowEffect16Mouse()
break;
case 17:
ShowEffect17()
ShowEffect17ChromaLink()
ShowEffect17Headset()
ShowEffect17Keypad()
ShowEffect17Mousepad()
ShowEffect17Mouse()
break;
case 18:
ShowEffect18()
ShowEffect18ChromaLink()
ShowEffect18Headset()
ShowEffect18Keypad()
ShowEffect18Mousepad()
ShowEffect18Mouse()
break;
case 19:
ShowEffect19()
ShowEffect19ChromaLink()
ShowEffect19Headset()
ShowEffect19Keypad()
ShowEffect19Mousepad()
ShowEffect19Mouse()
break;
case 20:
ShowEffect20()
ShowEffect20ChromaLink()
ShowEffect20Headset()
ShowEffect20Keypad()
ShowEffect20Mousepad()
ShowEffect20Mouse()
break;
case 21:
ShowEffect21()
ShowEffect21ChromaLink()
ShowEffect21Headset()
ShowEffect21Keypad()
ShowEffect21Mousepad()
ShowEffect21Mouse()
break;
case 22:
ShowEffect22()
ShowEffect22ChromaLink()
ShowEffect22Headset()
ShowEffect22Keypad()
ShowEffect22Mousepad()
ShowEffect22Mouse()
break;
case 23:
ShowEffect23()
ShowEffect23ChromaLink()
ShowEffect23Headset()
ShowEffect23Keypad()
ShowEffect23Mousepad()
ShowEffect23Mouse()
break;
case 24:
ShowEffect24()
ShowEffect24ChromaLink()
ShowEffect24Headset()
ShowEffect24Keypad()
ShowEffect24Mousepad()
ShowEffect24Mouse()
break;
case 25:
ShowEffect25()
ShowEffect25ChromaLink()
ShowEffect25Headset()
ShowEffect25Keypad()
ShowEffect25Mousepad()
ShowEffect25Mouse()
break;
case 26:
ShowEffect26()
ShowEffect26ChromaLink()
ShowEffect26Headset()
ShowEffect26Keypad()
ShowEffect26Mousepad()
ShowEffect26Mouse()
break;
case 27:
ShowEffect27()
ShowEffect27ChromaLink()
ShowEffect27Headset()
ShowEffect27Keypad()
ShowEffect27Mousepad()
ShowEffect27Mouse()
break;
case 28:
ShowEffect28()
ShowEffect28ChromaLink()
ShowEffect28Headset()
ShowEffect28Keypad()
ShowEffect28Mousepad()
ShowEffect28Mouse()
break;
case 29:
ShowEffect29()
ShowEffect29ChromaLink()
ShowEffect29Headset()
ShowEffect29Keypad()
ShowEffect29Mousepad()
ShowEffect29Mouse()
break;
case 30:
ShowEffect30()
ShowEffect30ChromaLink()
ShowEffect30Headset()
ShowEffect30Keypad()
ShowEffect30Mousepad()
ShowEffect30Mouse()
break;
case 31:
ShowEffect31()
ShowEffect31ChromaLink()
ShowEffect31Headset()
ShowEffect31Keypad()
ShowEffect31Mousepad()
ShowEffect31Mouse()
break;
case 32:
ShowEffect32()
ShowEffect32ChromaLink()
ShowEffect32Headset()
ShowEffect32Keypad()
ShowEffect32Mousepad()
ShowEffect32Mouse()
break;
case 33:
ShowEffect33()
ShowEffect33ChromaLink()
ShowEffect33Headset()
ShowEffect33Keypad()
ShowEffect33Mousepad()
ShowEffect33Mouse()
break;
case 34:
ShowEffect34()
ShowEffect34ChromaLink()
ShowEffect34Headset()
ShowEffect34Keypad()
ShowEffect34Mousepad()
ShowEffect34Mouse()
break;
case 35:
ShowEffect35()
ShowEffect35ChromaLink()
ShowEffect35Headset()
ShowEffect35Keypad()
ShowEffect35Mousepad()
ShowEffect35Mouse()
break;
case 36:
ShowEffect36()
ShowEffect36ChromaLink()
ShowEffect36Headset()
ShowEffect36Keypad()
ShowEffect36Mousepad()
ShowEffect36Mouse()
break;
case 37:
ShowEffect37()
ShowEffect37ChromaLink()
ShowEffect37Headset()
ShowEffect37Keypad()
ShowEffect37Mousepad()
ShowEffect37Mouse()
break;
case 38:
ShowEffect38()
ShowEffect38ChromaLink()
ShowEffect38Headset()
ShowEffect38Keypad()
ShowEffect38Mousepad()
ShowEffect38Mouse()
break;
case 39:
ShowEffect39()
ShowEffect39ChromaLink()
ShowEffect39Headset()
ShowEffect39Keypad()
ShowEffect39Mousepad()
ShowEffect39Mouse()
break;
case 40:
ShowEffect40()
ShowEffect40ChromaLink()
ShowEffect40Headset()
ShowEffect40Keypad()
ShowEffect40Mousepad()
ShowEffect40Mouse()
break;
case 41:
ShowEffect41()
ShowEffect41ChromaLink()
ShowEffect41Headset()
ShowEffect41Keypad()
ShowEffect41Mousepad()
ShowEffect41Mouse()
break;
case 42:
ShowEffect42()
ShowEffect42ChromaLink()
ShowEffect42Headset()
ShowEffect42Keypad()
ShowEffect42Mousepad()
ShowEffect42Mouse()
break;
case 43:
ShowEffect43()
ShowEffect43ChromaLink()
ShowEffect43Headset()
ShowEffect43Keypad()
ShowEffect43Mousepad()
ShowEffect43Mouse()
break;
case 44:
ShowEffect44()
ShowEffect44ChromaLink()
ShowEffect44Headset()
ShowEffect44Keypad()
ShowEffect44Mousepad()
ShowEffect44Mouse()
break;
case 45:
ShowEffect45()
ShowEffect45ChromaLink()
ShowEffect45Headset()
ShowEffect45Keypad()
ShowEffect45Mousepad()
ShowEffect45Mouse()
break;
case 46:
ShowEffect46()
ShowEffect46ChromaLink()
ShowEffect46Headset()
ShowEffect46Keypad()
ShowEffect46Mousepad()
ShowEffect46Mouse()
break;
*/
func _on_ButtonEffect1_button_up():
	if (IsChromaInitialized()):
		showEffect1()
		showEffect1ChromaLink()
		showEffect1Headset()
		showEffect1Keypad()
		showEffect1Mouse()
		showEffect1Mousepad()
func _on_ButtonEffect2_button_up():
	if (IsChromaInitialized()):
		showEffect2()
		showEffect2ChromaLink()
		showEffect2Headset()
		showEffect2Keypad()
		showEffect2Mouse()
		showEffect2Mousepad()
func _on_ButtonEffect3_button_up():
	if (IsChromaInitialized()):
		showEffect3()
		showEffect3ChromaLink()
		showEffect3Headset()
		showEffect3Keypad()
		showEffect3Mouse()
		showEffect3Mousepad()
func _on_ButtonEffect4_button_up():
	if (IsChromaInitialized()):
		showEffect4()
		showEffect4ChromaLink()
		showEffect4Headset()
		showEffect4Keypad()
		showEffect4Mouse()
		showEffect4Mousepad()
func _on_ButtonEffect5_button_up():
	if (IsChromaInitialized()):
		showEffect5()
		showEffect5ChromaLink()
		showEffect5Headset()
		showEffect5Keypad()
		showEffect5Mouse()
		showEffect5Mousepad()
func _on_ButtonEffect6_button_up():
	if (IsChromaInitialized()):
		showEffect6()
		showEffect6ChromaLink()
		showEffect6Headset()
		showEffect6Keypad()
		showEffect6Mouse()
		showEffect6Mousepad()
func _on_ButtonEffect7_button_up():
	if (IsChromaInitialized()):
		showEffect7()
		showEffect7ChromaLink()
		showEffect7Headset()
		showEffect7Keypad()
		showEffect7Mouse()
		showEffect7Mousepad()
func _on_ButtonEffect8_button_up():
	if (IsChromaInitialized()):
		showEffect8()
		showEffect8ChromaLink()
		showEffect8Headset()
		showEffect8Keypad()
		showEffect8Mouse()
		showEffect8Mousepad()
func _on_ButtonEffect9_button_up():
	if (IsChromaInitialized()):
		showEffect9()
		showEffect9ChromaLink()
		showEffect9Headset()
		showEffect9Keypad()
		showEffect9Mouse()
		showEffect9Mousepad()
func _on_ButtonEffect10_button_up():
	if (IsChromaInitialized()):
		showEffect10()
		showEffect10ChromaLink()
		showEffect10Headset()
		showEffect10Keypad()
		showEffect10Mouse()
		showEffect10Mousepad()
func _on_ButtonEffect11_button_up():
	if (IsChromaInitialized()):
		showEffect11()
		showEffect11ChromaLink()
		showEffect11Headset()
		showEffect11Keypad()
		showEffect11Mouse()
		showEffect11Mousepad()
func _on_ButtonEffect12_button_up():
	if (IsChromaInitialized()):
		showEffect12()
		showEffect12ChromaLink()
		showEffect12Headset()
		showEffect12Keypad()
		showEffect12Mouse()
		showEffect12Mousepad()
func _on_ButtonEffect13_button_up():
	if (IsChromaInitialized()):
		showEffect13()
		showEffect13ChromaLink()
		showEffect13Headset()
		showEffect13Keypad()
		showEffect13Mouse()
		showEffect13Mousepad()
func _on_ButtonEffect14_button_up():
	if (IsChromaInitialized()):
		showEffect14()
		showEffect14ChromaLink()
		showEffect14Headset()
		showEffect14Keypad()
		showEffect14Mouse()
		showEffect14Mousepad()
func _on_ButtonEffect15_button_up():
	if (IsChromaInitialized()):
		showEffect15()
		showEffect15ChromaLink()
		showEffect15Headset()
		showEffect15Keypad()
		showEffect15Mouse()
		showEffect15Mousepad()
func _on_ButtonEffect16_button_up():
	if (IsChromaInitialized()):
		showEffect16()
		showEffect16ChromaLink()
		showEffect16Headset()
		showEffect16Keypad()
		showEffect16Mouse()
		showEffect16Mousepad()
func _on_ButtonEffect17_button_up():
	if (IsChromaInitialized()):
		showEffect17()
		showEffect17ChromaLink()
		showEffect17Headset()
		showEffect17Keypad()
		showEffect17Mouse()
		showEffect17Mousepad()
func _on_ButtonEffect18_button_up():
	if (IsChromaInitialized()):
		showEffect18()
		showEffect18ChromaLink()
		showEffect18Headset()
		showEffect18Keypad()
		showEffect18Mouse()
		showEffect18Mousepad()
func _on_ButtonEffect19_button_up():
	if (IsChromaInitialized()):
		showEffect19()
		showEffect19ChromaLink()
		showEffect19Headset()
		showEffect19Keypad()
		showEffect19Mouse()
		showEffect19Mousepad()
func _on_ButtonEffect20_button_up():
	if (IsChromaInitialized()):
		showEffect20()
		showEffect20ChromaLink()
		showEffect20Headset()
		showEffect20Keypad()
		showEffect20Mouse()
		showEffect20Mousepad()
func _on_ButtonEffect21_button_up():
	if (IsChromaInitialized()):
		showEffect21()
		showEffect21ChromaLink()
		showEffect21Headset()
		showEffect21Keypad()
		showEffect21Mouse()
		showEffect21Mousepad()
func _on_ButtonEffect22_button_up():
	if (IsChromaInitialized()):
		showEffect22()
		showEffect22ChromaLink()
		showEffect22Headset()
		showEffect22Keypad()
		showEffect22Mouse()
		showEffect22Mousepad()
func _on_ButtonEffect23_button_up():
	if (IsChromaInitialized()):
		showEffect23()
		showEffect23ChromaLink()
		showEffect23Headset()
		showEffect23Keypad()
		showEffect23Mouse()
		showEffect23Mousepad()
func _on_ButtonEffect24_button_up():
	if (IsChromaInitialized()):
		showEffect24()
		showEffect24ChromaLink()
		showEffect24Headset()
		showEffect24Keypad()
		showEffect24Mouse()
		showEffect24Mousepad()
func _on_ButtonEffect25_button_up():
	if (IsChromaInitialized()):
		showEffect25()
		showEffect25ChromaLink()
		showEffect25Headset()
		showEffect25Keypad()
		showEffect25Mouse()
		showEffect25Mousepad()
func _on_ButtonEffect26_button_up():
	if (IsChromaInitialized()):
		showEffect26()
		showEffect26ChromaLink()
		showEffect26Headset()
		showEffect26Keypad()
		showEffect26Mouse()
		showEffect26Mousepad()
func _on_ButtonEffect27_button_up():
	if (IsChromaInitialized()):
		showEffect27()
		showEffect27ChromaLink()
		showEffect27Headset()
		showEffect27Keypad()
		showEffect27Mouse()
		showEffect27Mousepad()
func _on_ButtonEffect28_button_up():
	if (IsChromaInitialized()):
		showEffect28()
		showEffect28ChromaLink()
		showEffect28Headset()
		showEffect28Keypad()
		showEffect28Mouse()
		showEffect28Mousepad()
func _on_ButtonEffect29_button_up():
	if (IsChromaInitialized()):
		showEffect29()
		showEffect29ChromaLink()
		showEffect29Headset()
		showEffect29Keypad()
		showEffect29Mouse()
		showEffect29Mousepad()
func _on_ButtonEffect30_button_up():
	if (IsChromaInitialized()):
		showEffect30()
		showEffect30ChromaLink()
		showEffect30Headset()
		showEffect30Keypad()
		showEffect30Mouse()
		showEffect30Mousepad()
func _on_ButtonEffect31_button_up():
	if (IsChromaInitialized()):
		showEffect31()
		showEffect31ChromaLink()
		showEffect31Headset()
		showEffect31Keypad()
		showEffect31Mouse()
		showEffect31Mousepad()
func _on_ButtonEffect32_button_up():
	if (IsChromaInitialized()):
		showEffect32()
		showEffect32ChromaLink()
		showEffect32Headset()
		showEffect32Keypad()
		showEffect32Mouse()
		showEffect32Mousepad()
func _on_ButtonEffect33_button_up():
	if (IsChromaInitialized()):
		showEffect33()
		showEffect33ChromaLink()
		showEffect33Headset()
		showEffect33Keypad()
		showEffect33Mouse()
		showEffect33Mousepad()
func _on_ButtonEffect34_button_up():
	if (IsChromaInitialized()):
		showEffect34()
		showEffect34ChromaLink()
		showEffect34Headset()
		showEffect34Keypad()
		showEffect34Mouse()
		showEffect34Mousepad()
func _on_ButtonEffect35_button_up():
	if (IsChromaInitialized()):
		showEffect35()
		showEffect35ChromaLink()
		showEffect35Headset()
		showEffect35Keypad()
		showEffect35Mouse()
		showEffect35Mousepad()
func _on_ButtonEffect36_button_up():
	if (IsChromaInitialized()):
		showEffect36()
		showEffect36ChromaLink()
		showEffect36Headset()
		showEffect36Keypad()
		showEffect36Mouse()
		showEffect36Mousepad()
func _on_ButtonEffect37_button_up():
	if (IsChromaInitialized()):
		showEffect37()
		showEffect37ChromaLink()
		showEffect37Headset()
		showEffect37Keypad()
		showEffect37Mouse()
		showEffect37Mousepad()
func _on_ButtonEffect38_button_up():
	if (IsChromaInitialized()):
		showEffect38()
		showEffect38ChromaLink()
		showEffect38Headset()
		showEffect38Keypad()
		showEffect38Mouse()
		showEffect38Mousepad()
func _on_ButtonEffect39_button_up():
	if (IsChromaInitialized()):
		showEffect39()
		showEffect39ChromaLink()
		showEffect39Headset()
		showEffect39Keypad()
		showEffect39Mouse()
		showEffect39Mousepad()
func _on_ButtonEffect40_button_up():
	if (IsChromaInitialized()):
		showEffect40()
		showEffect40ChromaLink()
		showEffect40Headset()
		showEffect40Keypad()
		showEffect40Mouse()
		showEffect40Mousepad()
func _on_ButtonEffect41_button_up():
	if (IsChromaInitialized()):
		showEffect41()
		showEffect41ChromaLink()
		showEffect41Headset()
		showEffect41Keypad()
		showEffect41Mouse()
		showEffect41Mousepad()
func _on_ButtonEffect42_button_up():
	if (IsChromaInitialized()):
		showEffect42()
		showEffect42ChromaLink()
		showEffect42Headset()
		showEffect42Keypad()
		showEffect42Mouse()
		showEffect42Mousepad()
func _on_ButtonEffect43_button_up():
	if (IsChromaInitialized()):
		showEffect43()
		showEffect43ChromaLink()
		showEffect43Headset()
		showEffect43Keypad()
		showEffect43Mouse()
		showEffect43Mousepad()
func _on_ButtonEffect44_button_up():
	if (IsChromaInitialized()):
		showEffect44()
		showEffect44ChromaLink()
		showEffect44Headset()
		showEffect44Keypad()
		showEffect44Mouse()
		showEffect44Mousepad()
func _on_ButtonEffect45_button_up():
	if (IsChromaInitialized()):
		showEffect45()
		showEffect45ChromaLink()
		showEffect45Headset()
		showEffect45Keypad()
		showEffect45Mouse()
		showEffect45Mousepad()
func _on_ButtonEffect46_button_up():
	if (IsChromaInitialized()):
		showEffect46()
		showEffect46ChromaLink()
		showEffect46Headset()
		showEffect46Keypad()
		showEffect46Mouse()
		showEffect46Mousepad()
