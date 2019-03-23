// Copyright 1998-2014 Epic Games, Inc. All Rights Reserved.

//#include "GameChromaBP.h" //___HACK_UE4_VERSION_4_16_OR_GREATER
#include "UE4ChromaSDKRT.h"
#include "GameChromaBP.h" //___HACK_UE4_VERSION_4_15_OR_LESS
#include "ChromaSDKPluginBPLibrary.h"

UGameChromaBP::UGameChromaBP(const FPostConstructInitializeProperties& PCIP) //___HACK_UE4_VERSION_4_8_OR_LESS
	: Super(PCIP) //___HACK_UE4_VERSION_4_8_OR_LESS
//UGameChromaBP::UGameChromaBP(const FObjectInitializer& ObjectInitializer) //___HACK_UE4_VERSION_4_9_OR_GREATER
//	: Super(ObjectInitializer) //___HACK_UE4_VERSION_4_9_OR_GREATER
{
}

void UGameChromaBP::GameSampleStart()
{
	if (!UChromaSDKPluginBPLibrary::IsInitialized())
	{
		UChromaSDKPluginBPLibrary::ChromaSDKInit();
	}
}

void UGameChromaBP::GameSampleEnd()
{
	if (UChromaSDKPluginBPLibrary::IsInitialized())
	{
		UChromaSDKPluginBPLibrary::ChromaSDKUnInit();
	}
}

void UGameChromaBP::GameShowEffect1()
{
// start with a blank animation
FString baseLayer = "Animations/Blank_Keyboard.chroma";
// close the blank animation if it's already loaded, discarding any changes
UChromaSDKPluginBPLibrary::CloseAnimationName(baseLayer);
// open the blank animation, passing a reference to the base animation when loading has completed
UChromaSDKPluginBPLibrary::GetAnimation(baseLayer);
// the length of the animation
int frameCount = 50;
// set all frames to white, with all frames set to 30FPS
UChromaSDKPluginBPLibrary::MakeBlankFramesRGBName(baseLayer, frameCount, 0.033, 255, 255, 255);
// fade the start of the animation starting at frame zero to 40
UChromaSDKPluginBPLibrary::FadeStartFramesName(baseLayer, 40);
// show the animation in the canvas
displayCanvas(baseLayer, "canvasShowEffect1");
// play the animation after Chroma has initialized and after the canvas has been setup
if (initialized && setupComplete) {
// play and loop the animation
UChromaSDKPluginBPLibrary::playAnimation(baseLayer, true);
}
};

void UGameChromaBP::GameShowEffect2()
{
// start with a blank animation
FString baseLayer = "Animations/Blank_Keyboard.chroma";
// close the blank animation if it's already loaded, discarding any changes
UChromaSDKPluginBPLibrary::CloseAnimationName(baseLayer);
// open the blank animation, passing a reference to the base animation when loading has completed
UChromaSDKPluginBPLibrary::GetAnimation(baseLayer);
// the length of the animation
int frameCount = 50;
// set all frames to white, with all frames set to 30FPS
UChromaSDKPluginBPLibrary::MakeBlankFramesRGBName(baseLayer, frameCount, 0.033, 255, 255, 255);
// fade the end of the animation starting at frame length - 40 (60)
UChromaSDKPluginBPLibrary::FadeEndFramesName(baseLayer, 40);
// show the animation in the canvas
displayCanvas(baseLayer, "canvasShowEffect2");
// play the animation after Chroma has initialized and after the canvas has been setup
if (initialized && setupComplete) {
// play and loop the animation
UChromaSDKPluginBPLibrary::playAnimation(baseLayer, true);
}
};

void UGameChromaBP::GameShowEffect3()
{
// start with a blank animation
FString baseLayer = "Animations/Blank_Keyboard.chroma";
// close the blank animation if it's already loaded, discarding any changes
UChromaSDKPluginBPLibrary::CloseAnimationName(baseLayer);
// open the blank animation, passing a reference to the base animation when loading has completed
UChromaSDKPluginBPLibrary::GetAnimation(baseLayer);
// the length of the animation
int frameCount = 50;
// set all frames to white, with all frames set to 30FPS
UChromaSDKPluginBPLibrary::MakeBlankFramesRGBName(baseLayer, frameCount, 0.033, 255, 255, 255);
// fade the start of the animation starting at frame zero to 40
UChromaSDKPluginBPLibrary::FadeStartFramesName(baseLayer, 40);
// fade the end of the animation starting at frame length - 40 (60)
UChromaSDKPluginBPLibrary::FadeEndFramesName(baseLayer, 40);
// show the animation in the canvas
displayCanvas(baseLayer, "canvasShowEffect3");
// play the animation after Chroma has initialized and after the canvas has been setup
if (initialized && setupComplete) {
// play and loop the animation
UChromaSDKPluginBPLibrary::playAnimation(baseLayer, true);
}
};

void UGameChromaBP::GameShowEffect4()
{
// start with a blank animation
FString baseLayer = "Animations/Blank_Keyboard.chroma";
// close the blank animation if it's already loaded, discarding any changes
UChromaSDKPluginBPLibrary::CloseAnimationName(baseLayer);
// open the blank animation, passing a reference to the base animation when loading has completed
UChromaSDKPluginBPLibrary::GetAnimation(baseLayer);
// the length of the animation
int frameCount = 50;
// set all frames to white, with all frames set to 30FPS
UChromaSDKPluginBPLibrary::MakeBlankFramesRGBName(baseLayer, frameCount, 0.033, 255, 255, 255);
//integer number of times to blink during animation
int speed = 2;
// loop over all frames in the layer
for (int frameId = 0; frameId < frameCount; ++frameId) {
//Math.cos gives a smooth 1 to 0 to 1 curve, subtracting from one inverts the curve
float t = 1 - fabsf(cos(speed * PI * (frameId+1)/frameCount));
// multiply the frame by the 't' intensity
UChromaSDKPluginBPLibrary::MultiplyIntensityName(baseLayer, frameId, t);
}
// show the animation in the canvas
displayCanvas(baseLayer, "canvasShowEffect4");
// play the animation after Chroma has initialized and after the canvas has been setup
if (initialized && setupComplete) {
// play and loop the animation
UChromaSDKPluginBPLibrary::playAnimation(baseLayer, true);
}
};

void UGameChromaBP::GameShowEffect5()
{
// start with a blank animation
FString baseLayer = "Animations/Clouds1_Keyboard.chroma";
// close the blank animation if it's already loaded, discarding any changes
UChromaSDKPluginBPLibrary::CloseAnimationName(baseLayer);
// open the blank animation, passing a reference to the base animation when loading has completed
UChromaSDKPluginBPLibrary::GetAnimation(baseLayer);
// show the animation in the canvas
displayCanvas(baseLayer, "canvasShowEffect5");
// play the animation after Chroma has initialized and after the canvas has been setup
if (initialized && setupComplete) {
// play and loop the animation
UChromaSDKPluginBPLibrary::playAnimation(baseLayer, true);
}
};

void UGameChromaBP::GameShowEffect6()
{
// start with a blank animation
FString baseLayer = "Animations/Clouds1_Keyboard.chroma";
// close the blank animation if it's already loaded, discarding any changes
UChromaSDKPluginBPLibrary::CloseAnimationName(baseLayer);
// open the blank animation, passing a reference to the base animation when loading has completed
UChromaSDKPluginBPLibrary::GetAnimation(baseLayer);
// reduce the intensity of the layer
UChromaSDKPluginBPLibrary::MultiplyIntensityAllFramesName(baseLayer, 0.25);
// show the animation in the canvas
displayCanvas(baseLayer, "canvasShowEffect6");
// play the animation after Chroma has initialized and after the canvas has been setup
if (initialized && setupComplete) {
// play and loop the animation
UChromaSDKPluginBPLibrary::playAnimation(baseLayer, true);
}
};

void UGameChromaBP::GameShowEffect7()
{
// start with a blank animation
FString baseLayer = "Animations/BlackAndWhiteRainbow_Keyboard.chroma";
// close the blank animation if it's already loaded, discarding any changes
UChromaSDKPluginBPLibrary::CloseAnimationName(baseLayer);
// open the blank animation, passing a reference to the base animation when loading has completed
UChromaSDKPluginBPLibrary::GetAnimation(baseLayer);
// show the animation in the canvas
displayCanvas(baseLayer, "canvasShowEffect7");
// play the animation after Chroma has initialized and after the canvas has been setup
if (initialized && setupComplete) {
// play and loop the animation
UChromaSDKPluginBPLibrary::playAnimation(baseLayer, true);
}
};

void UGameChromaBP::GameShowEffect8()
{
// start with a blank animation
FString baseLayer = "Animations/BlackAndWhiteRainbow_Keyboard.chroma";
// close the blank animation if it's already loaded, discarding any changes
UChromaSDKPluginBPLibrary::CloseAnimationName(baseLayer);
// open the blank animation, passing a reference to the base animation when loading has completed
UChromaSDKPluginBPLibrary::GetAnimation(baseLayer);
int frameCount = baseAnimation.getFrameCount();
// loop over all frames in the layer
for (int frameId = 0; frameId < frameCount; ++frameId) {
// give color to the layer
UChromaSDKPluginBPLibrary::multiplyIntensityRGB(baseLayer, frameId, 255, 255, 0); //yellow
}
// show the animation in the canvas
displayCanvas(baseLayer, "canvasShowEffect8");
// play the animation after Chroma has initialized and after the canvas has been setup
if (initialized && setupComplete) {
// play and loop the animation
UChromaSDKPluginBPLibrary::playAnimation(baseLayer, true);
}
};

void UGameChromaBP::GameShowEffect9()
{
// start with a blank animation
FString baseLayer = "Animations/BlackAndWhiteRainbow_Keyboard.chroma";
// close the blank animation if it's already loaded, discarding any changes
UChromaSDKPluginBPLibrary::CloseAnimationName(baseLayer);
// open the blank animation, passing a reference to the base animation when loading has completed
UChromaSDKPluginBPLibrary::GetAnimation(baseLayer);
UChromaSDKPluginBPLibrary::MultiplyIntensityAllFramesRGBName(baseLayer, 0, 255, 255); //cyan
// show the animation in the canvas
displayCanvas(baseLayer, "canvasShowEffect9");
// play the animation after Chroma has initialized and after the canvas has been setup
if (initialized && setupComplete) {
// play and loop the animation
UChromaSDKPluginBPLibrary::playAnimation(baseLayer, true);
}
};

void UGameChromaBP::GameShowEffect10()
{
// start with a blank animation
FString baseLayer = "Animations/BlackAndWhiteRainbow_Keyboard.chroma";
// close the blank animation if it's already loaded, discarding any changes
UChromaSDKPluginBPLibrary::CloseAnimationName(baseLayer);
// open the blank animation, passing a reference to the base animation when loading has completed
UChromaSDKPluginBPLibrary::GetAnimation(baseLayer);
int frameCount = baseAnimation.getFrameCount();
FLinearColor color1 = UChromaSDKPluginBPLibrary::GetRGB(255, 0, 0); //red
FLinearColor color2 = UChromaSDKPluginBPLibrary::GetRGB(0, 255, 0); //green
//integer number of times to transition during animation
int speed = 2;
// loop over all frames in the layer
for (int frameId = 0; frameId < frameCount; ++frameId) {
//Math.cos gives a smooth 1 to 0 to 1 curve
float t = fabsf(cos(speed * PI * (frameId+1)/frameCount));
// use t to transition from color 1 to color 2
FLinearColor color = UChromaSDKPluginBPLibrary::LerpColor(color1, color2, t);
// give color to the layer
UChromaSDKPluginBPLibrary::MultiplyIntensityColorName(baseLayer, frameId, color);
}
// show the animation in the canvas
displayCanvas(baseLayer, "canvasShowEffect10");
// play the animation after Chroma has initialized and after the canvas has been setup
if (initialized && setupComplete) {
// play and loop the animation
UChromaSDKPluginBPLibrary::playAnimation(baseLayer, true);
}
};

void UGameChromaBP::GameShowEffect11()
{
// start with a blank animation
FString baseLayer = "Animations/Tongue1_Keyboard.chroma";
// close the blank animation if it's already loaded, discarding any changes
UChromaSDKPluginBPLibrary::CloseAnimationName(baseLayer);
// open the blank animation, passing a reference to the base animation when loading has completed
UChromaSDKPluginBPLibrary::GetAnimation(baseLayer);
// show the animation in the canvas
displayCanvas(baseLayer, "canvasShowEffect11");
// play the animation after Chroma has initialized and after the canvas has been setup
if (initialized && setupComplete) {
// play and loop the animation
UChromaSDKPluginBPLibrary::playAnimation(baseLayer, true);
}
};

void UGameChromaBP::GameShowEffect12()
{
// start with a blank animation
FString baseLayer = "Animations/Tongue1_Keyboard.chroma";
// close the blank animation if it's already loaded, discarding any changes
UChromaSDKPluginBPLibrary::CloseAnimationName(baseLayer);
// open the blank animation, passing a reference to the base animation when loading has completed
UChromaSDKPluginBPLibrary::GetAnimation(baseLayer);
int frameCount = baseAnimation.getFrameCount();
// loop over all frames in the layer
for (int frameId = 0; frameId < frameCount; ++frameId) {
int threshold = 100;
// give color to the layer
UChromaSDKPluginBPLibrary::fillThresholdColorsRGB(baseLayer, frameId, threshold, 255, 0, 0);
}
// show the animation in the canvas
displayCanvas(baseLayer, "canvasShowEffect12");
// play the animation after Chroma has initialized and after the canvas has been setup
if (initialized && setupComplete) {
// play and loop the animation
UChromaSDKPluginBPLibrary::playAnimation(baseLayer, true);
}
};

void UGameChromaBP::GameShowEffect13()
{
// start with a blank animation
FString baseLayer = "Animations/Tongue1_Keyboard.chroma";
// close the blank animation if it's already loaded, discarding any changes
UChromaSDKPluginBPLibrary::CloseAnimationName(baseLayer);
// open the blank animation, passing a reference to the base animation when loading has completed
UChromaSDKPluginBPLibrary::GetAnimation(baseLayer);
int threshold = 50;
UChromaSDKPluginBPLibrary::fillThresholdColorsAllFramesRGB(baseLayer, threshold, 0, 64, 0); //dark green
// show the animation in the canvas
displayCanvas(baseLayer, "canvasShowEffect13");
// play the animation after Chroma has initialized and after the canvas has been setup
if (initialized && setupComplete) {
// play and loop the animation
UChromaSDKPluginBPLibrary::playAnimation(baseLayer, true);
}
};

void UGameChromaBP::GameShowEffect14()
{
// start with a blank animation
FString baseLayer = "Animations/Tongue1_Keyboard.chroma";
// close the blank animation if it's already loaded, discarding any changes
UChromaSDKPluginBPLibrary::CloseAnimationName(baseLayer);
// open the blank animation, passing a reference to the base animation when loading has completed
UChromaSDKPluginBPLibrary::GetAnimation(baseLayer);
int minThreshold = 50; //dark cyan
int maxThreshold = 150; //purple
UChromaSDKPluginBPLibrary::fillThresholdColorsMinMaxAllFramesRGB(baseLayer, minThreshold, 0, 63, 63, maxThreshold, 127, 0, 127);
// show the animation in the canvas
displayCanvas(baseLayer, "canvasShowEffect14");
// play the animation after Chroma has initialized and after the canvas has been setup
if (initialized && setupComplete) {
// play and loop the animation
UChromaSDKPluginBPLibrary::playAnimation(baseLayer, true);
}
};

void UGameChromaBP::GameShowEffect15()
{
// start with a blank animation
FString baseLayer = "Animations/Arc3_Keyboard.chroma";
// close the blank animation if it's already loaded, discarding any changes
UChromaSDKPluginBPLibrary::CloseAnimationName(baseLayer);
// open the blank animation, passing a reference to the base animation when loading has completed
UChromaSDKPluginBPLibrary::GetAnimation(baseLayer);
// show the animation in the canvas
displayCanvas(baseLayer, "canvasShowEffect15");
// play the animation after Chroma has initialized and after the canvas has been setup
if (initialized && setupComplete) {
// play and loop the animation
UChromaSDKPluginBPLibrary::playAnimation(baseLayer, true);
}
};

void UGameChromaBP::GameShowEffect16()
{
// start with a blank animation
FString baseLayer = "Animations/Blank_Keyboard.chroma";
FString layer2 = "Animations/Arc3_Keyboard.chroma";
// close the blank animation if it's already loaded, discarding any changes
UChromaSDKPluginBPLibrary::CloseAnimationName(baseLayer);
UChromaSDKPluginBPLibrary::CloseAnimationName(layer2);
// open the blank animation, passing a reference to the base animation when loading has completed
UChromaSDKPluginBPLibrary::GetAnimation(baseLayer);
UChromaSDKPluginBPLibrary::GetAnimation(layer2);
FLinearColor background = UChromaSDKPluginBPLibrary::GetRGB(127, 0, 0);
int frameCount = layer2Animation.getFrameCount();
UChromaSDKPluginBPLibrary::MakeBlankFramesName(baseLayer, frameCount, 0.033, background);
// copy non zero colors from layer 2 to the base layer
UChromaSDKPluginBPLibrary::CopyNonZeroAllKeysAllFramesName(layer2, baseLayer);
// show the animation in the canvas
displayCanvas(baseLayer, "canvasShowEffect16");
// play the animation after Chroma has initialized and after the canvas has been setup
if (initialized && setupComplete) {
// play and loop the animation
UChromaSDKPluginBPLibrary::playAnimation(baseLayer, true);
}
};

void UGameChromaBP::GameShowEffect17()
{
// start with a blank animation
FString baseLayer = "Animations/Blank_Keyboard.chroma";
FString layer2 = "Animations/Arc3_Keyboard.chroma";
// close the blank animation if it's already loaded, discarding any changes
UChromaSDKPluginBPLibrary::CloseAnimationName(baseLayer);
UChromaSDKPluginBPLibrary::CloseAnimationName(layer2);
// open the blank animation, passing a reference to the base animation when loading has completed
UChromaSDKPluginBPLibrary::GetAnimation(baseLayer);
UChromaSDKPluginBPLibrary::GetAnimation(layer2);
int frameCount = layer2Animation.getFrameCount();
// setup background color on the base layer
FLinearColor background = UChromaSDKPluginBPLibrary::GetRGB(127, 0, 0);
UChromaSDKPluginBPLibrary::MakeBlankFramesName(baseLayer, frameCount, 0.033, background);
// replace darker colors with background color
UChromaSDKPluginBPLibrary::FillThresholdColorsAllFramesName(layer2, 64, background);
// copy non zero colors from layer 2 to the base layer
UChromaSDKPluginBPLibrary::CopyNonZeroAllKeysAllFramesName(layer2, baseLayer);
// show the animation in the canvas
displayCanvas(baseLayer, "canvasShowEffect17");
// play the animation after Chroma has initialized and after the canvas has been setup
if (initialized && setupComplete) {
// play and loop the animation
UChromaSDKPluginBPLibrary::playAnimation(baseLayer, true);
}
};

void UGameChromaBP::GameShowEffect18()
{
// start with a blank animation
FString baseLayer = "Animations/Blank_Keyboard.chroma";
FString layer2 = "Animations/Arc3_Keyboard.chroma";
// close the blank animation if it's already loaded, discarding any changes
UChromaSDKPluginBPLibrary::CloseAnimationName(baseLayer);
UChromaSDKPluginBPLibrary::CloseAnimationName(layer2);
// open the blank animation, passing a reference to the base animation when loading has completed
UChromaSDKPluginBPLibrary::GetAnimation(baseLayer);
UChromaSDKPluginBPLibrary::GetAnimation(layer2);
int frameCount = layer2Animation.getFrameCount();
// setup background color on the base layer
FLinearColor background = UChromaSDKPluginBPLibrary::GetRGB(127, 0, 0);
UChromaSDKPluginBPLibrary::MakeBlankFramesName(baseLayer, frameCount, 0.033, background);
// Add non zero colors from layer 2 to the base layer
UChromaSDKPluginBPLibrary::AddNonZeroAllKeysAllFramesName(layer2, baseLayer);
// show the animation in the canvas
displayCanvas(baseLayer, "canvasShowEffect18");
// play the animation after Chroma has initialized and after the canvas has been setup
if (initialized && setupComplete) {
// play and loop the animation
UChromaSDKPluginBPLibrary::playAnimation(baseLayer, true);
}
};

void UGameChromaBP::GameShowEffect19()
{
// start with a blank animation
FString baseLayer = "Animations/Blank_Keyboard.chroma";
FString layer2 = "Animations/Arc3_Keyboard.chroma";
// close the blank animation if it's already loaded, discarding any changes
UChromaSDKPluginBPLibrary::CloseAnimationName(baseLayer);
UChromaSDKPluginBPLibrary::CloseAnimationName(layer2);
// open the blank animation, passing a reference to the base animation when loading has completed
UChromaSDKPluginBPLibrary::GetAnimation(baseLayer);
UChromaSDKPluginBPLibrary::GetAnimation(layer2);
int frameCount = layer2Animation.getFrameCount();
// setup background color on the base layer
FLinearColor background = UChromaSDKPluginBPLibrary::GetRGB(127, 0, 0);
UChromaSDKPluginBPLibrary::MakeBlankFramesName(baseLayer, frameCount, 0.033, background);
// Add non zero colors from layer 2 to the base layer
UChromaSDKPluginBPLibrary::SubtractNonZeroAllKeysAllFramesName(layer2, baseLayer);
// show the animation in the canvas
displayCanvas(baseLayer, "canvasShowEffect19");
// play the animation after Chroma has initialized and after the canvas has been setup
if (initialized && setupComplete) {
// play and loop the animation
UChromaSDKPluginBPLibrary::playAnimation(baseLayer, true);
}
};

void UGameChromaBP::GameShowEffect20()
{
// start with a blank animation
FString baseLayer = "Animations/CircleSmall_Keyboard.chroma";
FString layer2 = "animations/Rainbow_Keyboard.chroma";
// close the blank animation if it's already loaded, discarding any changes
UChromaSDKPluginBPLibrary::CloseAnimationName(baseLayer);
UChromaSDKPluginBPLibrary::CloseAnimationName(layer2);
// open the blank animation, passing a reference to the base animation when loading has completed
UChromaSDKPluginBPLibrary::GetAnimation(baseLayer);
UChromaSDKPluginBPLibrary::GetAnimation(layer2);
int frameCount = layer2Animation.getFrameCount();
UChromaSDKPluginBPLibrary::DuplicateFirstFrameName(baseLayer, frameCount);
// copy non zero colors from layer 2 to the base layer where the base layer was non zero
UChromaSDKPluginBPLibrary::CopyNonZeroTargetAllKeysAllFramesName(layer2, baseLayer);
// set a background color
UChromaSDKPluginBPLibrary::FillZeroColorAllFramesRGBName(baseLayer, 255, 0, 0);
// set animation playback to 30 FPS
UChromaSDKPluginBPLibrary::OverrideFrameDurationName(baseLayer, 0.033f);
// show the animation in the canvas
displayCanvas(baseLayer, "canvasShowEffect20");
// play the animation after Chroma has initialized and after the canvas has been setup
if (initialized && setupComplete) {
// play and loop the animation
UChromaSDKPluginBPLibrary::playAnimation(baseLayer, true);
}
};

void UGameChromaBP::GameShowEffect21()
{
// start with a blank animation
FString baseLayer = "Animations/MovementUpLeft_Keyboard.chroma";
// close the blank animation if it's already loaded, discarding any changes
UChromaSDKPluginBPLibrary::CloseAnimationName(baseLayer);
// open the blank animation, passing a reference to the base animation when loading has completed
UChromaSDKPluginBPLibrary::GetAnimation(baseLayer);
// show the animation in the canvas
displayCanvas(baseLayer, "canvasShowEffect21");
// play the animation after Chroma has initialized and after the canvas has been setup
if (initialized && setupComplete) {
// play and loop the animation
UChromaSDKPluginBPLibrary::playAnimation(baseLayer, true);
}
};

void UGameChromaBP::GameShowEffect22()
{
// start with a blank animation
FString baseLayer = "Animations/MovementUpLeft_Keyboard.chroma";
// close the blank animation if it's already loaded, discarding any changes
UChromaSDKPluginBPLibrary::CloseAnimationName(baseLayer);
// open the blank animation, passing a reference to the base animation when loading has completed
UChromaSDKPluginBPLibrary::GetAnimation(baseLayer);
// set animation playback to 30 FPS
UChromaSDKPluginBPLibrary::OverrideFrameDurationName(baseLayer, 0.033f);
// show the animation in the canvas
displayCanvas(baseLayer, "canvasShowEffect22");
// play the animation after Chroma has initialized and after the canvas has been setup
if (initialized && setupComplete) {
// play and loop the animation
UChromaSDKPluginBPLibrary::playAnimation(baseLayer, true);
}
};

void UGameChromaBP::GameShowEffect23()
{
// start with a blank animation
FString baseLayer = "Animations/MovementUpLeft_Keyboard.chroma";
// close the blank animation if it's already loaded, discarding any changes
UChromaSDKPluginBPLibrary::CloseAnimationName(baseLayer);
// open the blank animation, passing a reference to the base animation when loading has completed
UChromaSDKPluginBPLibrary::GetAnimation(baseLayer);
// reverse the order of frames
UChromaSDKPluginBPLibrary::ReverseAllFramesName(baseLayer);
// set animation playback to 30 FPS
UChromaSDKPluginBPLibrary::OverrideFrameDurationName(baseLayer, 0.033f);
// show the animation in the canvas
displayCanvas(baseLayer, "canvasShowEffect23");
// play the animation after Chroma has initialized and after the canvas has been setup
if (initialized && setupComplete) {
// play and loop the animation
UChromaSDKPluginBPLibrary::playAnimation(baseLayer, true);
}
};

void UGameChromaBP::GameShowEffect24()
{
// start with a blank animation
FString baseLayer = "Animations/MovementUpLeft_Keyboard.chroma";
// close the blank animation if it's already loaded, discarding any changes
UChromaSDKPluginBPLibrary::CloseAnimationName(baseLayer);
// open the blank animation, passing a reference to the base animation when loading has completed
UChromaSDKPluginBPLibrary::GetAnimation(baseLayer);
// invert all the animation colors
UChromaSDKPluginBPLibrary::InvertColorsAllFramesName(baseLayer);
// set animation playback to 30 FPS
UChromaSDKPluginBPLibrary::OverrideFrameDurationName(baseLayer, 0.033f);
// show the animation in the canvas
displayCanvas(baseLayer, "canvasShowEffect24");
// play the animation after Chroma has initialized and after the canvas has been setup
if (initialized && setupComplete) {
// play and loop the animation
UChromaSDKPluginBPLibrary::playAnimation(baseLayer, true);
}
};

void UGameChromaBP::GameShowEffect25()
{
// start with a blank animation
FString baseLayer = "Animations/MovementUpLeft_Keyboard.chroma";
// close the blank animation if it's already loaded, discarding any changes
UChromaSDKPluginBPLibrary::CloseAnimationName(baseLayer);
// open the blank animation, passing a reference to the base animation when loading has completed
UChromaSDKPluginBPLibrary::GetAnimation(baseLayer);
// duplicate and mirror
UChromaSDKPluginBPLibrary::DuplicateMirrorFramesName(baseLayer);
// set animation playback to 30 FPS
UChromaSDKPluginBPLibrary::OverrideFrameDurationName(baseLayer, 0.033f);
// show the animation in the canvas
displayCanvas(baseLayer, "canvasShowEffect25");
// play the animation after Chroma has initialized and after the canvas has been setup
if (initialized && setupComplete) {
// play and loop the animation
UChromaSDKPluginBPLibrary::playAnimation(baseLayer, true);
}
};

void UGameChromaBP::GameShowEffect26()
{
// start with a blank animation
FString baseLayer = "Animations/MovementUpLeft_Keyboard.chroma";
// close the blank animation if it's already loaded, discarding any changes
UChromaSDKPluginBPLibrary::CloseAnimationName(baseLayer);
// open the blank animation, passing a reference to the base animation when loading has completed
UChromaSDKPluginBPLibrary::GetAnimation(baseLayer);
// insert a pause
int frameId = 50;
int delay = 20;
UChromaSDKPluginBPLibrary::InsertDelayName(baseLayer, frameId, delay);
// set animation playback to 30 FPS
UChromaSDKPluginBPLibrary::OverrideFrameDurationName(baseLayer, 0.033f);
// show the animation in the canvas
displayCanvas(baseLayer, "canvasShowEffect26");
// play the animation after Chroma has initialized and after the canvas has been setup
if (initialized && setupComplete) {
// play and loop the animation
UChromaSDKPluginBPLibrary::playAnimation(baseLayer, true);
}
};

void UGameChromaBP::GameShowEffect27()
{
// start with a blank animation
FString baseLayer = "Animations/MovementUpLeft_Keyboard.chroma";
// close the blank animation if it's already loaded, discarding any changes
UChromaSDKPluginBPLibrary::CloseAnimationName(baseLayer);
// open the blank animation, passing a reference to the base animation when loading has completed
UChromaSDKPluginBPLibrary::GetAnimation(baseLayer);
// reduce half of the frames, remove every 2nd frame
UChromaSDKPluginBPLibrary::ReduceFramesName(baseLayer, 2);
// set animation playback to 30 FPS
UChromaSDKPluginBPLibrary::OverrideFrameDurationName(baseLayer, 0.033f);
// show the animation in the canvas
displayCanvas(baseLayer, "canvasShowEffect27");
// play the animation after Chroma has initialized and after the canvas has been setup
if (initialized && setupComplete) {
// play and loop the animation
UChromaSDKPluginBPLibrary::playAnimation(baseLayer, true);
}
};

void UGameChromaBP::GameShowEffect28()
{
// start with a blank animation
FString baseLayer = "Animations/MovementUpLeft_Keyboard.chroma";
// close the blank animation if it's already loaded, discarding any changes
UChromaSDKPluginBPLibrary::CloseAnimationName(baseLayer);
// open the blank animation, passing a reference to the base animation when loading has completed
UChromaSDKPluginBPLibrary::GetAnimation(baseLayer);
// double the number of the frames
UChromaSDKPluginBPLibrary::DuplicateFramesName(baseLayer);
// set animation playback to 30 FPS
UChromaSDKPluginBPLibrary::OverrideFrameDurationName(baseLayer, 0.033f);
// show the animation in the canvas
displayCanvas(baseLayer, "canvasShowEffect28");
// play the animation after Chroma has initialized and after the canvas has been setup
if (initialized && setupComplete) {
// play and loop the animation
UChromaSDKPluginBPLibrary::playAnimation(baseLayer, true);
}
};

void UGameChromaBP::GameShowEffect29()
{
// start with a blank animation
FString baseLayer = "Animations/MovementUpLeft_Keyboard.chroma";
// close the blank animation if it's already loaded, discarding any changes
UChromaSDKPluginBPLibrary::CloseAnimationName(baseLayer);
// open the blank animation, passing a reference to the base animation when loading has completed
UChromaSDKPluginBPLibrary::GetAnimation(baseLayer);
// trim the start of the animation, so it starts at frame 10
UChromaSDKPluginBPLibrary::TrimStartFramesName(baseLayer, 10);
// set animation playback to 30 FPS
UChromaSDKPluginBPLibrary::OverrideFrameDurationName(baseLayer, 0.033f);
// show the animation in the canvas
displayCanvas(baseLayer, "canvasShowEffect29");
// play the animation after Chroma has initialized and after the canvas has been setup
if (initialized && setupComplete) {
// play and loop the animation
UChromaSDKPluginBPLibrary::playAnimation(baseLayer, true);
}
};

void UGameChromaBP::GameShowEffect30()
{
// start with a blank animation
FString baseLayer = "Animations/MovementUpLeft_Keyboard.chroma";
// close the blank animation if it's already loaded, discarding any changes
UChromaSDKPluginBPLibrary::CloseAnimationName(baseLayer);
// open the blank animation, passing a reference to the base animation when loading has completed
UChromaSDKPluginBPLibrary::GetAnimation(baseLayer);
// trim the start of the animation, so it starts at frame 10
UChromaSDKPluginBPLibrary::TrimStartFramesName(baseLayer, 10);
// trim the end of the animation
UChromaSDKPluginBPLibrary::TrimEndFramesName(baseLayer, 75);
// set animation playback to 30 FPS
UChromaSDKPluginBPLibrary::OverrideFrameDurationName(baseLayer, 0.033f);
// show the animation in the canvas
displayCanvas(baseLayer, "canvasShowEffect30");
// play the animation after Chroma has initialized and after the canvas has been setup
if (initialized && setupComplete) {
// play and loop the animation
UChromaSDKPluginBPLibrary::playAnimation(baseLayer, true);
}
};

void UGameChromaBP::GameShowEffect31()
{
// start with a blank animation
FString baseLayer = "Animations/CircleSmall_Keyboard.chroma";
// close the blank animation if it's already loaded, discarding any changes
UChromaSDKPluginBPLibrary::CloseAnimationName(baseLayer);
// open the blank animation, passing a reference to the base animation when loading has completed
UChromaSDKPluginBPLibrary::GetAnimation(baseLayer);
int frameCount = 20;
UChromaSDKPluginBPLibrary::DuplicateFirstFrameName(baseLayer, frameCount);
// set animation playback to 30 FPS
UChromaSDKPluginBPLibrary::OverrideFrameDurationName(baseLayer, 0.033f);
// show the animation in the canvas
displayCanvas(baseLayer, "canvasShowEffect31");
// play the animation after Chroma has initialized and after the canvas has been setup
if (initialized && setupComplete) {
// play and loop the animation
UChromaSDKPluginBPLibrary::playAnimation(baseLayer, true);
}
};

void UGameChromaBP::GameShowEffect32()
{
// start with a blank animation
FString baseLayer = "Animations/Blank_Keyboard.chroma";
// close the blank animation if it's already loaded, discarding any changes
UChromaSDKPluginBPLibrary::CloseAnimationName(baseLayer);
// open the blank animation, passing a reference to the base animation when loading has completed
UChromaSDKPluginBPLibrary::GetAnimation(baseLayer);
int frameCount = 20;
// Start with blank frames set to 30FPS
UChromaSDKPluginBPLibrary::MakeBlankFramesName(baseLayer, frameCount, 0.033, UChromaSDKPluginBPLibrary::ToLinearColor(0));
// Fill all frames with black and white static
UChromaSDKPluginBPLibrary::FillRandomColorsBlackAndWhiteAllFramesName(baseLayer);
// slow down the random frames so it can be seen
UChromaSDKPluginBPLibrary::DuplicateFramesName(baseLayer);
// show the animation in the canvas
displayCanvas(baseLayer, "canvasShowEffect32");
// play the animation after Chroma has initialized and after the canvas has been setup
if (initialized && setupComplete) {
// play and loop the animation
UChromaSDKPluginBPLibrary::playAnimation(baseLayer, true);
}
};

void UGameChromaBP::GameShowEffect33()
{
// start with a blank animation
FString baseLayer = "Animations/Blank_Keyboard.chroma";
// close the blank animation if it's already loaded, discarding any changes
UChromaSDKPluginBPLibrary::CloseAnimationName(baseLayer);
// open the blank animation, passing a reference to the base animation when loading has completed
UChromaSDKPluginBPLibrary::GetAnimation(baseLayer);
int frameCount = 20;
// Start with blank frames set to 30FPS
UChromaSDKPluginBPLibrary::MakeBlankFramesName(baseLayer, frameCount, 0.033, UChromaSDKPluginBPLibrary::ToLinearColor(0));
// Fill all frames with black and white static
UChromaSDKPluginBPLibrary::FillRandomColorsBlackAndWhiteAllFramesName(baseLayer);
// slow down the random frames so it can be seen
UChromaSDKPluginBPLibrary::DuplicateFramesName(baseLayer);
// make random colors more sparse using threshold
int threshold = 240;
// turn lower intensity colors to black
UChromaSDKPluginBPLibrary::FillThresholdColorsAllFramesName(baseLayer, threshold, UChromaSDKPluginBPLibrary::ToLinearColor(0));
// show the animation in the canvas
displayCanvas(baseLayer, "canvasShowEffect33");
// play the animation after Chroma has initialized and after the canvas has been setup
if (initialized && setupComplete) {
// play and loop the animation
UChromaSDKPluginBPLibrary::playAnimation(baseLayer, true);
}
};

void UGameChromaBP::GameShowEffect34()
{
// start with a blank animation
FString baseLayer = "Animations/Blank_Keyboard.chroma";
// close the blank animation if it's already loaded, discarding any changes
UChromaSDKPluginBPLibrary::CloseAnimationName(baseLayer);
// open the blank animation, passing a reference to the base animation when loading has completed
UChromaSDKPluginBPLibrary::GetAnimation(baseLayer);
int frameCount = 20;
// Start with blank frames set to 30FPS
UChromaSDKPluginBPLibrary::MakeBlankFramesName(baseLayer, frameCount, 0.033, UChromaSDKPluginBPLibrary::ToLinearColor(0));
// Fill all frames with black and white static
UChromaSDKPluginBPLibrary::FillRandomColorsBlackAndWhiteAllFramesName(baseLayer);
// slow down the random frames so it can be seen
UChromaSDKPluginBPLibrary::DuplicateFramesName(baseLayer);
int minThreshold = 240; //black
int maxThreshold = 240; //rain
UChromaSDKPluginBPLibrary::fillThresholdColorsMinMaxAllFramesRGB(baseLayer, minThreshold, 0, 0, 0, maxThreshold, 0, 127, 255);
// show the animation in the canvas
displayCanvas(baseLayer, "canvasShowEffect34");
// play the animation after Chroma has initialized and after the canvas has been setup
if (initialized && setupComplete) {
// play and loop the animation
UChromaSDKPluginBPLibrary::playAnimation(baseLayer, true);
}
};

void UGameChromaBP::GameShowEffect35()
{
// start with a blank animation
FString baseLayer = "animations/Sprite1_Keyboard.chroma";
// close the blank animation if it's already loaded, discarding any changes
UChromaSDKPluginBPLibrary::CloseAnimationName(baseLayer);
// open the blank animation, passing a reference to the base animation when loading has completed
UChromaSDKPluginBPLibrary::GetAnimation(baseLayer);
// show the animation in the canvas
displayCanvas(baseLayer, "canvasShowEffect35");
// play the animation after Chroma has initialized and after the canvas has been setup
if (initialized && setupComplete) {
// play and loop the animation
UChromaSDKPluginBPLibrary::playAnimation(baseLayer, true);
}
};

void UGameChromaBP::GameShowEffect36()
{
// start with a blank animation
FString baseLayer = "Animations/Tongue1_Keyboard.chroma";
// close the blank animation if it's already loaded, discarding any changes
UChromaSDKPluginBPLibrary::CloseAnimationName(baseLayer);
// open the blank animation, passing a reference to the base animation when loading has completed
UChromaSDKPluginBPLibrary::GetAnimation(baseLayer);
// show the animation in the canvas
displayCanvas(baseLayer, "canvasShowEffect36");
// play the animation after Chroma has initialized and after the canvas has been setup
if (initialized && setupComplete) {
// play and loop the animation
UChromaSDKPluginBPLibrary::playAnimation(baseLayer, true);
}
};

void UGameChromaBP::GameShowEffect37()
{
// start with a blank animation
FString baseLayer = "Animations/Tongue1_Keyboard.chroma";
// close the blank animation if it's already loaded, discarding any changes
UChromaSDKPluginBPLibrary::CloseAnimationName(baseLayer);
// open the blank animation, passing a reference to the base animation when loading has completed
UChromaSDKPluginBPLibrary::GetAnimation(baseLayer);
// set middle color green
UChromaSDKPluginBPLibrary::MultiplyIntensityAllFramesRGBName(baseLayer, 0, 255, 0);
int minThreshold = 50; //set outer color to red
int maxThreshold = 150; //set main color to blue
UChromaSDKPluginBPLibrary::fillThresholdColorsMinMaxAllFramesRGB(baseLayer, minThreshold, 255, 0, 0, maxThreshold, 0, 0, 255);
// show the animation in the canvas
displayCanvas(baseLayer, "canvasShowEffect37");
// play the animation after Chroma has initialized and after the canvas has been setup
if (initialized && setupComplete) {
// play and loop the animation
UChromaSDKPluginBPLibrary::playAnimation(baseLayer, true);
}
};

void UGameChromaBP::GameShowEffect38()
{
// start with a blank animation
FString baseLayer = "Animations/OutParticle1_Keyboard.chroma";
// close the blank animation if it's already loaded, discarding any changes
UChromaSDKPluginBPLibrary::CloseAnimationName(baseLayer);
// open the blank animation, passing a reference to the base animation when loading has completed
UChromaSDKPluginBPLibrary::GetAnimation(baseLayer);
// show the animation in the canvas
displayCanvas(baseLayer, "canvasShowEffect38");
// play the animation after Chroma has initialized and after the canvas has been setup
if (initialized && setupComplete) {
// play and loop the animation
UChromaSDKPluginBPLibrary::playAnimation(baseLayer, true);
}
};

void UGameChromaBP::GameShowEffect39()
{
// start with a blank animation
FString baseLayer = "Animations/OutParticle1_Keyboard.chroma";
// close the blank animation if it's already loaded, discarding any changes
UChromaSDKPluginBPLibrary::CloseAnimationName(baseLayer);
// open the blank animation, passing a reference to the base animation when loading has completed
UChromaSDKPluginBPLibrary::GetAnimation(baseLayer);
// turn grayscale particles to blue water
UChromaSDKPluginBPLibrary::MultiplyIntensityAllFramesRGBName(baseLayer, 0, 127, 255);
// show the animation in the canvas
displayCanvas(baseLayer, "canvasShowEffect39");
// play the animation after Chroma has initialized and after the canvas has been setup
if (initialized && setupComplete) {
// play and loop the animation
UChromaSDKPluginBPLibrary::playAnimation(baseLayer, true);
}
};
