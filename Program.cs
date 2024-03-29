﻿namespace ChromaDesignConverter
{
    class Program
    {
        const string GAME_NAME = "SampleGame";
        const int EFFECT_COUNT = 15;
        const bool UPGRADE_KEYBOARD_EXTENDED = true;

        static void Main(string[] args)
        {
            Converter.ConvertToCpp("Sample.js", "Output.cpp", EFFECT_COUNT, UPGRADE_KEYBOARD_EXTENDED);
            Converter.ConvertToUnity("Output.cpp", "Unity.cs", EFFECT_COUNT);
            Converter.ConvertToVB("Unity.cs", "Output.vb", EFFECT_COUNT);
            Converter.ConvertToClickTeamFusion("Output.cpp", "CTF.lua", EFFECT_COUNT);
            Converter.ConvertToGodot("Output.cpp", "Godot.gd", EFFECT_COUNT);
            Converter.ConvertToUWP("Output.cpp", "UWP.cpp", EFFECT_COUNT);
            Converter.ConvertToXDK("UWP.cpp", "XDK.cpp", EFFECT_COUNT);
            Converter.ConvertToUE4("Output.cpp", GAME_NAME+"ChromaBP.h", GAME_NAME+"ChromaBP.cpp", GAME_NAME+"Button.h", GAME_NAME + "Button.cpp", EFFECT_COUNT, GAME_NAME);
            Converter.ConvertToJava("Output.cpp", "Chroma.java");
        }
    }
}
