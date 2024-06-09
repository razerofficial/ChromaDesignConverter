namespace ChromaDesignConverter
{
    class Program
    {
        const string GAME_NAME = "SampleGame";
        const bool UPGRADE_KEYBOARD_EXTENDED = false;

        static void Main(string[] args)
        {
            int effectCount;

            Converter.ConvertToCpp("Sample.js", "Output.cpp", out effectCount, UPGRADE_KEYBOARD_EXTENDED);
            Converter.ConvertToUnity("Output.cpp", "Unity.cs", effectCount);
            Converter.ConvertToVB("Unity.cs", "Output.vb", effectCount);
            Converter.ConvertToClickTeamFusion("Output.cpp", "CTF.lua", effectCount);
            Converter.ConvertToGodot("Output.cpp", "Godot.gd", effectCount);
            Converter.ConvertToUWP("Output.cpp", "UWP.cpp", effectCount);
            Converter.ConvertToXDK("UWP.cpp", "XDK.cpp", effectCount);
            Converter.ConvertToUE4("Output.cpp", GAME_NAME+"ChromaBP.h", GAME_NAME+"ChromaBP.cpp", GAME_NAME+"Button.h", GAME_NAME + "Button.cpp", effectCount, GAME_NAME);
            Converter.ConvertToJava("Output.cpp", "Chroma.java");
        }
    }
}
