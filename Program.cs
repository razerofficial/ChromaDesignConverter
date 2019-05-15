namespace ChromaDesignConverter
{
    class Program
    {
        const string GAME_NAME = "SampleApp";

        static void Main(string[] args)
        {
            Converter.ConvertToCpp("Sample.js", "Output.cpp");
            Converter.ConvertToUWP("Output.cpp", "UWP.cpp");
            Converter.ConvertToXDK("UWP.cpp", "XDK.cpp");
            Converter.ConvertToUnity("Output.cpp", "Unity.cs");
            Converter.ConvertToUE4("Output.cpp", GAME_NAME+"ChromaBP.h", GAME_NAME+"ChromaBP.cpp", GAME_NAME);
        }
    }
}
