// Copyright 1998-2014 Epic Games, Inc. All Rights Reserved.
#include "SampleAppButton.h" //___HACK_UE4_VERSION_4_16_OR_GREATER
#include "UE4ChromaSDKRT.h"
//#include "SampleAppButton.h" //___HACK_UE4_VERSION_4_15_OR_LESS
#include "ChromaSDKPluginBPLibrary.h"
#include "SampleAppChromaBP.h"

using namespace std;

mutex USampleAppButton::_sMutex;

//USampleAppButton::USampleAppButton(const class FPostConstructInitializeProperties& PCIP) //___HACK_UE4_VERSION_4_8_OR_LESS
//	: Super(PCIP) //___HACK_UE4_VERSION_4_8_OR_LESS
USampleAppButton::USampleAppButton(const FObjectInitializer& ObjectInitializer) //___HACK_UE4_VERSION_4_9_OR_GREATER
: Super(ObjectInitializer) //___HACK_UE4_VERSION_4_9_OR_GREATER
{
}

void USampleAppButton::HandleClick()
{
    if (!UChromaSDKPluginBPLibrary::IsInitialized())
    {
        UE_LOG(LogTemp, Error, TEXT("Chroma is not initialized!"));
        return;
    }

    lock_guard<mutex> guard(_sMutex);

    if (Name.Compare("Button_Effect1") == 0)
    {
        USampleAppChromaBP::SampleAppShowEffect1();
        USampleAppChromaBP::SampleAppShowEffect1ChromaLink();
        USampleAppChromaBP::SampleAppShowEffect1Headset();
        USampleAppChromaBP::SampleAppShowEffect1Mousepad();
        USampleAppChromaBP::SampleAppShowEffect1Mouse();
    }

    else if (Name.Compare("Button_Effect2") == 0)
    {
        USampleAppChromaBP::SampleAppShowEffect2();
        USampleAppChromaBP::SampleAppShowEffect2ChromaLink();
        USampleAppChromaBP::SampleAppShowEffect2Headset();
        USampleAppChromaBP::SampleAppShowEffect2Mousepad();
        USampleAppChromaBP::SampleAppShowEffect2Mouse();
    }

    else if (Name.Compare("Button_Effect3") == 0)
    {
        USampleAppChromaBP::SampleAppShowEffect3();
        USampleAppChromaBP::SampleAppShowEffect3ChromaLink();
        USampleAppChromaBP::SampleAppShowEffect3Headset();
        USampleAppChromaBP::SampleAppShowEffect3Mousepad();
        USampleAppChromaBP::SampleAppShowEffect3Mouse();
    }

    else if (Name.Compare("Button_Effect4") == 0)
    {
        USampleAppChromaBP::SampleAppShowEffect4();
        USampleAppChromaBP::SampleAppShowEffect4ChromaLink();
        USampleAppChromaBP::SampleAppShowEffect4Headset();
        USampleAppChromaBP::SampleAppShowEffect4Mousepad();
        USampleAppChromaBP::SampleAppShowEffect4Mouse();
    }

    else if (Name.Compare("Button_Effect5") == 0)
    {
        USampleAppChromaBP::SampleAppShowEffect5();
        USampleAppChromaBP::SampleAppShowEffect5ChromaLink();
        USampleAppChromaBP::SampleAppShowEffect5Headset();
        USampleAppChromaBP::SampleAppShowEffect5Mousepad();
        USampleAppChromaBP::SampleAppShowEffect5Mouse();
    }

    else if (Name.Compare("Button_Effect6") == 0)
    {
        USampleAppChromaBP::SampleAppShowEffect6();
        USampleAppChromaBP::SampleAppShowEffect6ChromaLink();
        USampleAppChromaBP::SampleAppShowEffect6Headset();
        USampleAppChromaBP::SampleAppShowEffect6Mousepad();
        USampleAppChromaBP::SampleAppShowEffect6Mouse();
    }

    else if (Name.Compare("Button_Effect7") == 0)
    {
        USampleAppChromaBP::SampleAppShowEffect7();
        USampleAppChromaBP::SampleAppShowEffect7ChromaLink();
        USampleAppChromaBP::SampleAppShowEffect7Headset();
        USampleAppChromaBP::SampleAppShowEffect7Mousepad();
        USampleAppChromaBP::SampleAppShowEffect7Mouse();
    }

    else if (Name.Compare("Button_Effect8") == 0)
    {
        USampleAppChromaBP::SampleAppShowEffect8();
        USampleAppChromaBP::SampleAppShowEffect8ChromaLink();
        USampleAppChromaBP::SampleAppShowEffect8Headset();
        USampleAppChromaBP::SampleAppShowEffect8Mousepad();
        USampleAppChromaBP::SampleAppShowEffect8Mouse();
    }

    else if (Name.Compare("Button_Effect9") == 0)
    {
        USampleAppChromaBP::SampleAppShowEffect9();
        USampleAppChromaBP::SampleAppShowEffect9ChromaLink();
        USampleAppChromaBP::SampleAppShowEffect9Headset();
        USampleAppChromaBP::SampleAppShowEffect9Mousepad();
        USampleAppChromaBP::SampleAppShowEffect9Mouse();
    }

    else if (Name.Compare("Button_Effect10") == 0)
    {
        USampleAppChromaBP::SampleAppShowEffect10();
        USampleAppChromaBP::SampleAppShowEffect10ChromaLink();
        USampleAppChromaBP::SampleAppShowEffect10Headset();
        USampleAppChromaBP::SampleAppShowEffect10Mousepad();
        USampleAppChromaBP::SampleAppShowEffect10Mouse();
    }

    else if (Name.Compare("Button_Effect11") == 0)
    {
        USampleAppChromaBP::SampleAppShowEffect11();
        USampleAppChromaBP::SampleAppShowEffect11ChromaLink();
        USampleAppChromaBP::SampleAppShowEffect11Headset();
        USampleAppChromaBP::SampleAppShowEffect11Mousepad();
        USampleAppChromaBP::SampleAppShowEffect11Mouse();
    }

    else if (Name.Compare("Button_Effect12") == 0)
    {
        USampleAppChromaBP::SampleAppShowEffect12();
        USampleAppChromaBP::SampleAppShowEffect12ChromaLink();
        USampleAppChromaBP::SampleAppShowEffect12Headset();
        USampleAppChromaBP::SampleAppShowEffect12Mousepad();
        USampleAppChromaBP::SampleAppShowEffect12Mouse();
    }

    else if (Name.Compare("Button_Effect13") == 0)
    {
        USampleAppChromaBP::SampleAppShowEffect13();
        USampleAppChromaBP::SampleAppShowEffect13ChromaLink();
        USampleAppChromaBP::SampleAppShowEffect13Headset();
        USampleAppChromaBP::SampleAppShowEffect13Mousepad();
        USampleAppChromaBP::SampleAppShowEffect13Mouse();
    }

    else if (Name.Compare("Button_Effect14") == 0)
    {
        USampleAppChromaBP::SampleAppShowEffect14();
        USampleAppChromaBP::SampleAppShowEffect14ChromaLink();
        USampleAppChromaBP::SampleAppShowEffect14Headset();
        USampleAppChromaBP::SampleAppShowEffect14Mousepad();
        USampleAppChromaBP::SampleAppShowEffect14Mouse();
    }

    else if (Name.Compare("Button_Effect15") == 0)
    {
        USampleAppChromaBP::SampleAppShowEffect15();
        USampleAppChromaBP::SampleAppShowEffect15ChromaLink();
        USampleAppChromaBP::SampleAppShowEffect15Headset();
        USampleAppChromaBP::SampleAppShowEffect15Mousepad();
        USampleAppChromaBP::SampleAppShowEffect15Mouse();
    }

}
