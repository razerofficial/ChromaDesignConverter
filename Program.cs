using System;
using System.IO;

namespace ChromaDesignConverter
{
    class Program
    {
        static bool Replace(ref string line, string search, string replace)
        {
            if (line.Contains(search))
            {
                line = line.Replace(search, replace);
                return true;
            }
            return false;
        }

        static bool SwapStart(ref string line, string search, string replace)
        {
            if (line.StartsWith(search))
            {
                line = replace + line.Substring(search.Length);
                return true;
            }
            return false;
        }

        static bool TrimAfter(ref string line, string search, string replace)
        {
            if (line.Contains(search))
            {
                int index = line.IndexOf(search);
                line = line.Substring(0, index) + replace;
                return true;
            }
            return false;
        }

        static void ProcessHTML5(string filename, StreamWriter sw)
        {
            try
            {
                using (FileStream fs = File.Open(filename, FileMode.Open, FileAccess.Read, FileShare.ReadWrite))
                {
                    using (StreamReader sr = new StreamReader(fs))
                    {
                        string line;
                        do
                        {
                            line = sr.ReadLine();
                            if (line != null)
                            {
                                line = line.TrimStart();
                            }
                            if (line.Trim() == "" ||
                                line.StartsWith("exampleReset()") ||
                                line.StartsWith("handleButtonClick("))
                            {
                                continue;
                            }
                            if (line.Contains(".onclick"))
                            {
                                int index = line.IndexOf(".onclick");
                                line = line.Substring(0, index);
                                line = "void " + char.ToUpper(line[0]) + line.Substring(1) + "()\r\n{";
                            }
                            if (SwapStart(ref line, "var baseLayer", "const char* baseLayer"))
                            {
                                Replace(ref line, "'", "\"");
                                Replace(ref line, "../ChromaCommon/a", "A");
                            }
                            if (SwapStart(ref line, "var layer", "const char* layer"))
                            {
                                Replace(ref line, "'", "\"");
                                Replace(ref line, "../ChromaCommon/a", "A");
                            }
                            if (SwapStart(ref line, "var frameCount", "int frameCount"))
                            {
                            }
                            if (Replace(ref line, "ChromaAnimation.", "ChromaAnimationAPI::"))
                            {
                            }
                            if (Replace(ref line, "ChromaAnimationAPI::openAnimation", "ChromaAnimationAPI::GetAnimation"))
                            {
                                TrimAfter(ref line, ",", ");");
                            }
                            if (Replace(ref line, "ChromaAnimationAPI::closeAnimation(", "ChromaAnimationAPI::CloseAnimationName("))
                            {
                            }
                            if (Replace(ref line, "ChromaAnimationAPI::getFrameCount(", "ChromaAnimationAPI::GetFrameCountName("))
                            {
                            }
                            if (Replace(ref line, "ChromaAnimationAPI::reverseAllFrames(", "ChromaAnimationAPI::ReverseAllFramesName("))
                            {
                            }
                            if (Replace(ref line, "ChromaAnimationAPI::duplicateMirrorFrames(", "ChromaAnimationAPI::DuplicateMirrorFramesName("))
                            {
                            }
                            if (Replace(ref line, "ChromaAnimationAPI::getRGB(", "ChromaAnimationAPI::GetRGB("))
                            {
                                SwapStart(ref line, "var ", "int ");
                            }
                            if (Replace(ref line, "ChromaAnimationAPI::makeBlankFrames(", "ChromaAnimationAPI::MakeBlankFramesName("))
                            {
                                Replace(ref line, "0.1,", "0.1f,");
                            }
                            if (Replace(ref line, "ChromaAnimationAPI::multiplyNonZeroTargetColorLerpAllFrames(", "ChromaAnimationAPI::MultiplyNonZeroTargetColorLerpAllFramesName("))
                            {
                            }
                            if (Replace(ref line, "ChromaAnimationAPI::copyNonZeroAllKeysAllFrames(", "ChromaAnimationAPI::CopyNonZeroAllKeysAllFramesName("))
                            {
                            }
                            if (Replace(ref line, "ChromaAnimationAPI::setChromaCustomFlag(", "ChromaAnimationAPI::SetChromaCustomFlagName("))
                            {
                            }
                            if (Replace(ref line, "ChromaAnimationAPI::setChromaCustomColorAllFrames(", "ChromaAnimationAPI::SetChromaCustomColorAllFramesName("))
                            {
                            }
                            if (Replace(ref line, "ChromaAnimationAPI::overrideFrameDuration(", "ChromaAnimationAPI::OverrideFrameDurationName("))
                            {
                                line = line.Replace("0.033)", "0.033f)");
                            }
                            if (line.StartsWith("displayAndPlayAnimationKeyboard("))
                            {
                                line = "ChromaAnimationAPI::PlayAnimationName(baseLayer, true);\r\n}";
                            }

                            Console.WriteLine("{0}", line);
                            sw.WriteLine(line);
                        }
                        while (line != null);
                    }
                }
            }
            catch (Exception)
            {
                Console.Error.WriteLine("Failed to process file: {0}", filename);
            }
        }
        static void Main(string[] args)
        {
            using (FileStream fs = File.Open("Output.cpp", FileMode.OpenOrCreate, FileAccess.Write, FileShare.ReadWrite))
            {
                using (StreamWriter sw = new StreamWriter(fs))
                {
                    ProcessHTML5("Sample.js", sw);
                }
            }
        }
    }
}
