// Copyright 1998-2014 Epic SampleApps, Inc. All Rights Reserved.

#pragma once

#include "Engine.h"
#include "UMG.h"
#include "SampleAppChromaBP.generated.h"

UCLASS()
class USampleAppChromaBP : public UBlueprintFunctionLibrary
{
	GENERATED_UCLASS_BODY()

    static int min(int a, int b);
	static int max(int a, int b);

    UFUNCTION(BlueprintCallable, meta = (DisplayName = "SampleAppSetupButtonsEffects", Keywords = "Setup an array of button widgets"), Category = "Sample")
	static void SampleAppSetupButtonsEffects(const TArray<UButton*>& buttons);

	UFUNCTION(BlueprintCallable, meta = (DisplayName = "SampleAppSampleStart", Keywords = "Init at the start of the application"), Category = "Sample")
	static void SampleAppSampleStart();

	UFUNCTION(BlueprintCallable, meta = (DisplayName = "SampleAppSampleEnd", Keywords = "Uninit at the end of the application"), Category = "Sample")
	static void SampleAppSampleEnd();

	UFUNCTION(BlueprintCallable, meta = (DisplayName = "SampleAppShowTableEffect1", Keywords = "Example"), Category = "Sample")
	static void SampleAppShowTableEffect1();

	UFUNCTION(BlueprintCallable, meta = (DisplayName = "SampleAppShowTableEffect2", Keywords = "Example"), Category = "Sample")
	static void SampleAppShowTableEffect2();

	UFUNCTION(BlueprintCallable, meta = (DisplayName = "SampleAppShowTableEffect3", Keywords = "Example"), Category = "Sample")
	static void SampleAppShowTableEffect3();

	UFUNCTION(BlueprintCallable, meta = (DisplayName = "SampleAppShowTableEffect4", Keywords = "Example"), Category = "Sample")
	static void SampleAppShowTableEffect4();

	UFUNCTION(BlueprintCallable, meta = (DisplayName = "SampleAppShowTableEffect5", Keywords = "Example"), Category = "Sample")
	static void SampleAppShowTableEffect5();

	UFUNCTION(BlueprintCallable, meta = (DisplayName = "SampleAppShowTableEffect6", Keywords = "Example"), Category = "Sample")
	static void SampleAppShowTableEffect6();

	UFUNCTION(BlueprintCallable, meta = (DisplayName = "SampleAppShowTableEffect7", Keywords = "Example"), Category = "Sample")
	static void SampleAppShowTableEffect7();

	UFUNCTION(BlueprintCallable, meta = (DisplayName = "SampleAppShowTableEffect8", Keywords = "Example"), Category = "Sample")
	static void SampleAppShowTableEffect8();

	UFUNCTION(BlueprintCallable, meta = (DisplayName = "SampleAppShowTableEffect9", Keywords = "Example"), Category = "Sample")
	static void SampleAppShowTableEffect9();

	UFUNCTION(BlueprintCallable, meta = (DisplayName = "SampleAppShowTableEffect10", Keywords = "Example"), Category = "Sample")
	static void SampleAppShowTableEffect10();

	UFUNCTION(BlueprintCallable, meta = (DisplayName = "SampleAppShowTableEffect11", Keywords = "Example"), Category = "Sample")
	static void SampleAppShowTableEffect11();

	UFUNCTION(BlueprintCallable, meta = (DisplayName = "SampleAppShowTableEffect12", Keywords = "Example"), Category = "Sample")
	static void SampleAppShowTableEffect12();

	UFUNCTION(BlueprintCallable, meta = (DisplayName = "SampleAppShowTableEffect13", Keywords = "Example"), Category = "Sample")
	static void SampleAppShowTableEffect13();

	UFUNCTION(BlueprintCallable, meta = (DisplayName = "SampleAppShowTableEffect14", Keywords = "Example"), Category = "Sample")
	static void SampleAppShowTableEffect14();

	UFUNCTION(BlueprintCallable, meta = (DisplayName = "SampleAppShowTableEffect15", Keywords = "Example"), Category = "Sample")
	static void SampleAppShowTableEffect15();

	UFUNCTION(BlueprintCallable, meta = (DisplayName = "SampleAppShowTableEffect16", Keywords = "Example"), Category = "Sample")
	static void SampleAppShowTableEffect16();

	UFUNCTION(BlueprintCallable, meta = (DisplayName = "SampleAppShowTableEffect17", Keywords = "Example"), Category = "Sample")
	static void SampleAppShowTableEffect17();

	UFUNCTION(BlueprintCallable, meta = (DisplayName = "SampleAppShowTableEffect18", Keywords = "Example"), Category = "Sample")
	static void SampleAppShowTableEffect18();

	UFUNCTION(BlueprintCallable, meta = (DisplayName = "SampleAppShowTableEffect19", Keywords = "Example"), Category = "Sample")
	static void SampleAppShowTableEffect19();

	UFUNCTION(BlueprintCallable, meta = (DisplayName = "SampleAppShowTableEffect20", Keywords = "Example"), Category = "Sample")
	static void SampleAppShowTableEffect20();

	UFUNCTION(BlueprintCallable, meta = (DisplayName = "SampleAppShowTableEffect21", Keywords = "Example"), Category = "Sample")
	static void SampleAppShowTableEffect21();

	UFUNCTION(BlueprintCallable, meta = (DisplayName = "SampleAppShowTableEffect22", Keywords = "Example"), Category = "Sample")
	static void SampleAppShowTableEffect22();

	UFUNCTION(BlueprintCallable, meta = (DisplayName = "SampleAppShowTableEffect23", Keywords = "Example"), Category = "Sample")
	static void SampleAppShowTableEffect23();

	UFUNCTION(BlueprintCallable, meta = (DisplayName = "SampleAppShowTableEffect24", Keywords = "Example"), Category = "Sample")
	static void SampleAppShowTableEffect24();

	UFUNCTION(BlueprintCallable, meta = (DisplayName = "SampleAppShowTableEffect25", Keywords = "Example"), Category = "Sample")
	static void SampleAppShowTableEffect25();

	UFUNCTION(BlueprintCallable, meta = (DisplayName = "SampleAppShowTableEffect26", Keywords = "Example"), Category = "Sample")
	static void SampleAppShowTableEffect26();

	UFUNCTION(BlueprintCallable, meta = (DisplayName = "SampleAppShowTableEffect27", Keywords = "Example"), Category = "Sample")
	static void SampleAppShowTableEffect27();

	UFUNCTION(BlueprintCallable, meta = (DisplayName = "SampleAppShowTableEffect28", Keywords = "Example"), Category = "Sample")
	static void SampleAppShowTableEffect28();

	UFUNCTION(BlueprintCallable, meta = (DisplayName = "SampleAppShowTableEffect29", Keywords = "Example"), Category = "Sample")
	static void SampleAppShowTableEffect29();

	UFUNCTION(BlueprintCallable, meta = (DisplayName = "SampleAppShowTableEffect30", Keywords = "Example"), Category = "Sample")
	static void SampleAppShowTableEffect30();

	UFUNCTION(BlueprintCallable, meta = (DisplayName = "SampleAppShowTableEffect31", Keywords = "Example"), Category = "Sample")
	static void SampleAppShowTableEffect31();

	UFUNCTION(BlueprintCallable, meta = (DisplayName = "SampleAppShowTableEffect32", Keywords = "Example"), Category = "Sample")
	static void SampleAppShowTableEffect32();

	UFUNCTION(BlueprintCallable, meta = (DisplayName = "SampleAppShowTableEffect33", Keywords = "Example"), Category = "Sample")
	static void SampleAppShowTableEffect33();

	UFUNCTION(BlueprintCallable, meta = (DisplayName = "SampleAppShowTableEffect34", Keywords = "Example"), Category = "Sample")
	static void SampleAppShowTableEffect34();

	UFUNCTION(BlueprintCallable, meta = (DisplayName = "SampleAppShowTableEffect35", Keywords = "Example"), Category = "Sample")
	static void SampleAppShowTableEffect35();

	UFUNCTION(BlueprintCallable, meta = (DisplayName = "SampleAppShowTableEffect36", Keywords = "Example"), Category = "Sample")
	static void SampleAppShowTableEffect36();

	UFUNCTION(BlueprintCallable, meta = (DisplayName = "SampleAppShowTableEffect37", Keywords = "Example"), Category = "Sample")
	static void SampleAppShowTableEffect37();

	UFUNCTION(BlueprintCallable, meta = (DisplayName = "SampleAppShowTableEffect38", Keywords = "Example"), Category = "Sample")
	static void SampleAppShowTableEffect38();

	UFUNCTION(BlueprintCallable, meta = (DisplayName = "SampleAppShowTableEffect39", Keywords = "Example"), Category = "Sample")
	static void SampleAppShowTableEffect39();
};
