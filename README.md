# Chroma Animation Design Converter

**Table of Contents**

* [See Also](#see-also)
* [About](#about)

<a name="see-also"></a>
## See Also

**Docs:**

- [Chroma Animation Guide](http://chroma.razer.com/ChromaGuide/) - Visual examples of the Chroma Animation API methods

**Apps:**

- [ChromaClientForDiscord](https://github.com/tgraupmann/ChromaDiscordApp) - Add Chroma lighting to the Discord App events

- [ChromaClientForMixer](https://github.com/tgraupmann/ChromaClientForMixer) - Add Chroma lighting to the Mixer streaming experience

- [ChromaClientForTwitch](https://github.com/tgraupmann/ChromaTwitchExtension) - Add Chroma lighting to the Twitch streaming experience

**Plugins:**

- [CChromaEditor](https://github.com/RazerOfficial/CChromaEditor) - C++ native MFC library for playing and editing Chroma animations

- [GameMakerChromaExtension](https://github.com/RazerOfficial/GameMakerChromaExtension) - GameMaker extension to control lighting for Razer Chroma

- [HTML5ChromaSDK](https://github.com/RazerOfficial/HTML5ChromaSDK) - JavaScript library for playing Chroma animations

- [UE4_XDK_SampleApp](https://github.com/razerofficial/UE4_XDK_SampleApp) - UE4 Chroma samples and runtime module with Blueprint library for the ChromaSDK

- [UnityNativeChromaSDK](https://github.com/RazerOfficial/UnityNativeChromaSDK) - Unity native library for the ChromaSDK

<a name="about"></a>
## About

The `Chroma Design Converter` is a C# console project that automates the conversion of Chroma Animation JS to various engines and platforms.

**Screenshot:**

![image_1](/images/image_1.png)

## Getting Started ##

* Place the input JS into the `Sample.js` file

The typical input looks like the sample code from the [Chroma Animation Guide](http://chroma.razer.com/ChromaGuide/).

```
showEffect1.onclick = function () {
    exampleReset();
    handleButtonClick(showEffect1);

    var baseLayer = '../ChromaCommon/animations/Blank_Keyboard.chroma';
    ChromaAnimation.closeAnimation(baseLayer);
    ChromaAnimation.openAnimation(baseLayer, function (baseAnimation) {

        var ground = ChromaAnimation.getRGB(150, 100, 60);
        ChromaAnimation.fillZeroColorAllFrames(baseLayer, ground);

        ChromaAnimation.setChromaCustomFlag(baseLayer, true);
        ChromaAnimation.setChromaCustomColorAllFrames(baseLayer);
        ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);
        displayAndPlayAnimationKeyboard(baseLayer, "ShowEffect1");
        showEffect1ChromaLink.onclick();
    });
};
```

* Run the application

* Copy the automatically ported code from the output folder
