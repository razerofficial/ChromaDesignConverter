namespace ChromaDesignConverter
{
    class Program
    {
        static void Main(string[] args)
        {
            const string gameName = "Game";

            Converter.ConvertToCpp("Sample.js", "Output.cpp");
            Converter.ConvertToUE4("Output.cpp", "GameChromaBP.h", "GameChromaBP.cpp", gameName);
        }
    }
}
