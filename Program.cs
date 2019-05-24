namespace ChromaDesignConverter
{
    class Program
    {
        const string GAME_NAME = "SampleApp";
        const int EFFECT_COUNT = 15;

        static void Main(string[] args)
        {
            Converter.ConvertToCpp("Sample.js", "Output.cpp");
            Converter.ConvertToUWP("Output.cpp", "UWP.cpp");
            Converter.ConvertToXDK("UWP.cpp", "XDK.cpp");
            Converter.ConvertToUnity("Output.cpp", "Unity.cs");
            Converter.ConvertToUE4("Output.cpp", GAME_NAME+"ChromaBP.h", GAME_NAME+"ChromaBP.cpp", GAME_NAME+"Button.h", GAME_NAME + "Button.cpp", EFFECT_COUNT, GAME_NAME);
        }
    }
}
