namespace ChromaDesignConverter
{
    class Program
    {
        static void Main(string[] args)
        {
            const string gameName = "Game";

            Converter.ConvertToCpp("Sample.js", "Output.cpp");
            Converter.ConvertToUWP("Output.cpp", "UWP.cpp");
            Converter.ConvertToUnity("Output.cpp", "Unity.cs");
            Converter.ConvertToUE4("Output.cpp", "GameChromaBP.h", "GameChromaBP.cpp", gameName);
        }
    }
}
