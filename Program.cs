namespace ChromaDesignConverter
{
    class Program
    {
        static void Main(string[] args)
        {
            const string gameName = "SampleApp";

            Converter.ConvertToCpp("Sample.js", "Output.cpp");
            Converter.ConvertToUWP("Output.cpp", "UWP.cpp");
            Converter.ConvertToXDK("UWP.cpp", "XDK.cpp");
            Converter.ConvertToUnity("Output.cpp", "Unity.cs");
            Converter.ConvertToUE4("Output.cpp", "SampleAppBP.h", "SampleAppBP.cpp", gameName);
        }
    }
}
