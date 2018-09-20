using System;
using System.Collections;
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

        static void Indent(string line, int blockLevel, StreamWriter sw)
        {
            for (int i = 0; i < blockLevel; ++i)
            {
                if (line.Contains("}"))
                {
                    if (i + 1 == blockLevel)
                    {
                        break;
                    }
                }
                Console.Write(" ");
                sw.Write(" ");
            }
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
                        int blockLevel = 0;
                        int nextBlockLevel = blockLevel;
                        bool readingArray = false;
                        do
                        {
                            line = sr.ReadLine();
                            if (line == null ||
                                line == "\0")
                            {
                                break;
                            }
                            line = line.TrimStart();
                            if (line.Trim() == "" ||
                                line.StartsWith("exampleReset()") ||
                                line.StartsWith("handleButtonClick("))
                            {
                                continue;
                            }
                            if (readingArray)
                            {
                                string tokenGetRGB = "ChromaAnimation.getRGB";
                                string tokenPush = ".push(";
                                if (line.Contains(tokenGetRGB))
                                {
                                    int index = line.IndexOf(tokenGetRGB);
                                    line = line.Substring(index);
                                    line = line.Replace(");", ",");
                                }
                                else if (line.Contains(tokenPush))
                                {
                                    int index = line.IndexOf(tokenPush);
                                    line = line.Substring(index + tokenPush.Length);
                                    index = line.IndexOf(")");
                                    line = line.Substring(0, index);
                                    if (Replace(ref line, "RZKEY.RZKEY_", "Keyboard::RZKEY::RZKEY_"))
                                    {
                                        line += ",";
                                    }
                                }
                                else
                                {
                                    readingArray = false;
                                    string closeArray = "};";
                                    Indent(closeArray, blockLevel, sw);

                                    Console.WriteLine("{0}", closeArray);
                                    sw.WriteLine(closeArray);
                                    --nextBlockLevel;
                                    blockLevel = nextBlockLevel;
                                }
                            }
                            if (line.Contains(".onclick"))
                            {
                                if (blockLevel > 0)
                                {
                                    continue;
                                }
                                int index = line.IndexOf(".onclick");
                                line = line.Substring(0, index);
                                line = "void " + char.ToUpper(line[0]) + line.Substring(1) + "()\r\n{";
                            }
                            if (line.EndsWith("});"))
                            {
                                continue;
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
                            if (SwapStart(ref line, "var color", "int color"))
                            {
                            }
                            if (SwapStart(ref line, "var t ", "float t "))
                            {
                            }
                            if (SwapStart(ref line, "for (var ", "for (int "))
                            {
                            }
                            if (SwapStart(ref line, "var ", "int "))
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
                            if (Replace(ref line, "ChromaAnimationAPI::makeBlankFramesRGB(", "ChromaAnimationAPI::MakeBlankFramesRGBName("))
                            {
                                line = line.Replace("0.1,", "0.1f,");
                            }
                            if (Replace(ref line, "ChromaAnimationAPI::fadeStartFrames(", "ChromaAnimationAPI::FadeStartFramesName("))
                            {
                            }
                            if (Replace(ref line, "ChromaAnimationAPI::fadeEndFrames(", "ChromaAnimationAPI::FadeEndFramesName("))
                            {
                            }
                            if (Replace(ref line, "ChromaAnimationAPI::multiplyTargetColorLerpAllFrames(", "ChromaAnimationAPI::MultiplyTargetColorLerpAllFramesName("))
                            {
                            }
                            if (Replace(ref line, "ChromaAnimationAPI::trimStartFrames(", "ChromaAnimationAPI::TrimStartFramesName("))
                            {
                            }
                            if (Replace(ref line, "ChromaAnimationAPI::trimEndFrames(", "ChromaAnimationAPI::TrimEndFramesName("))
                            {
                            }
                            if (Replace(ref line, "ChromaAnimationAPI::duplicateFrames(", "ChromaAnimationAPI::DuplicateFramesName("))
                            {
                            }
                            if (Replace(ref line, "ChromaAnimationAPI::reduceFrames(", "ChromaAnimationAPI::ReduceFramesName("))
                            {
                            }
                            if (Replace(ref line, "ChromaAnimationAPI::insertDelay(", "ChromaAnimationAPI::InsertDelayName("))
                            {
                            }
                            if (Replace(ref line, "ChromaAnimationAPI::fillZeroColorAllFrames(", "ChromaAnimationAPI::FillZeroColorAllFramesName("))
                            {
                            }
                            if (Replace(ref line, "ChromaAnimationAPI::fillThresholdColorsAllFrames(", "ChromaAnimationAPI::FillThresholdColorsAllFramesName("))
                            {
                            }
                            if (Replace(ref line, "ChromaAnimationAPI::multiplyIntensityColorAllFrames(", "ChromaAnimationAPI::MultiplyIntensityColorAllFramesName("))
                            {
                            }
                            if (Replace(ref line, "ChromaAnimationAPI::subtractNonZeroAllKeysAllFramesOffset(", "ChromaAnimationAPI::SubtractNonZeroAllKeysAllFramesOffsetName("))
                            {
                            }
                            if (Replace(ref line, "ChromaAnimationAPI::fillZeroColorAllFramesRGB(", "ChromaAnimationAPI::FillZeroColorAllFramesRGBName("))
                            {
                            }
                            if (Replace(ref line, "ChromaAnimationAPI::multiplyIntensityAllFrames(", "ChromaAnimationAPI::MultiplyIntensityAllFramesName("))
                            {
                            }
                            if (Replace(ref line, "ChromaAnimationAPI::multiplyIntensityAllFramesRGB(", "ChromaAnimationAPI::MultiplyIntensityAllFramesRGBName("))
                            {
                            }
                            if (Replace(ref line, "ChromaAnimationAPI::addNonZeroAllKeysAllFrames(", "ChromaAnimationAPI::AddNonZeroAllKeysAllFramesName("))
                            {
                            }
                            if (Replace(ref line, "ChromaAnimationAPI::multiplyIntensityColor(", "ChromaAnimationAPI::MultiplyIntensityColorName("))
                            {
                            }
                            if (Replace(ref line, "ChromaAnimationAPI::setKeysColor(", "ChromaAnimationAPI::SetKeysColorName("))
                            {
                            }
                            if (Replace(ref line, "ChromaAnimationAPI::setKeysColorAllFrames(", "ChromaAnimationAPI::SetKeysColorAllFramesName("))
                            {
                            }
                            if (Replace(ref line, "ChromaAnimationAPI::lerpColor(", "ChromaAnimationAPI::LerpColor("))
                            {
                            }
                            if (Replace(ref line, "ChromaAnimationAPI::duplicateFirstFrame(", "ChromaAnimationAPI::DuplicateFirstFrameName("))
                            {
                            }
                            if (Replace(ref line, "ChromaAnimationAPI::fillNonZeroColor(", "ChromaAnimationAPI::FillNonZeroColorName("))
                            {
                            }
                            if (Replace(ref line, "ChromaAnimationAPI::fillNonZeroColorAllFrames(", "ChromaAnimationAPI::FillNonZeroColorAllFramesName("))
                            {
                            }
                            if (Replace(ref line, "ChromaAnimationAPI::fillNonZeroColorAllFramesRGB(", "ChromaAnimationAPI::FillNonZeroColorAllFramesRGBName("))
                            {
                            }
                            if (Replace(ref line, "ChromaAnimationAPI::subtractNonZeroAllKeysAllFrames(", "ChromaAnimationAPI::SubtractNonZeroAllKeysAllFramesName("))
                            {
                            }
                            if (Replace(ref line, "ChromaAnimationAPI::copyNonZeroAllKeysAllFramesOffset(", "ChromaAnimationAPI::CopyNonZeroAllKeysAllFramesOffsetName("))
                            {
                            }
                            if (Replace(ref line, "ChromaAnimationAPI::multiplyColorLerpAllFrames(", "ChromaAnimationAPI::MultiplyColorLerpAllFramesName("))
                            {
                            }
                            if (Replace(ref line, "ChromaAnimationAPI::appendAllFrames(", "ChromaAnimationAPI::AppendAllFramesName("))
                            {
                            }
                            if (Replace(ref line, "ChromaAnimationAPI::copyNonZeroTargetAllKeysAllFrames(", "ChromaAnimationAPI::CopyNonZeroTargetAllKeysAllFramesName("))
                            {
                            }
                            if (Replace(ref line, "ChromaAnimationAPI::invertColorsAllFrames(", "ChromaAnimationAPI::InvertColorsAllFramesName("))
                            {
                            }
                            if (Replace(ref line, "ChromaAnimationAPI::offsetNonZeroColorsAllFrames(", "ChromaAnimationAPI::OffsetNonZeroColorsAllFramesName("))
                            {
                            }
                            if (Replace(ref line, "ChromaAnimationAPI::addNonZeroTargetAllKeysAllFrames(", "ChromaAnimationAPI::AddNonZeroTargetAllKeysAllFramesName("))
                            {
                            }
                            if (Replace(ref line, "ChromaAnimationAPI::copyAnimation(", "ChromaAnimationAPI::CopyAnimationName("))
                            {
                            }
                            if (Replace(ref line, "ChromaAnimationAPI::fillThresholdRGBColorsAllFramesRGB(", "ChromaAnimationAPI::FillThresholdRGBColorsAllFramesRGBName("))
                            {
                            }
                            if (Replace(ref line, "ChromaAnimationAPI::multiplyIntensity(", "ChromaAnimationAPI::MultiplyIntensityName("))
                            {
                            }
                            if (Replace(ref line, "ChromaAnimationAPI::addNonZeroAllKeysAllFramesOffset(", "ChromaAnimationAPI::AddNonZeroAllKeysAllFramesOffsetName("))
                            {
                            }
                            if (Replace(ref line, "ChromaAnimationAPI::copyNonZeroTargetAllKeysAllFramesOffset(", "ChromaAnimationAPI::CopyNonZeroTargetAllKeysAllFramesOffsetName("))
                            {
                            }
                            if (Replace(ref line, "ChromaAnimationAPI::fillZeroColor(", "ChromaAnimationAPI::FillZeroColorName("))
                            {
                            }
                            if (Replace(ref line, "ChromaAnimationAPI::setKeysColorAllFramesRGB(", "ChromaAnimationAPI::SetKeysColorAllFramesRGBName("))
                            {
                            }
                            if (Replace(ref line, "ChromaAnimationAPI::fillRandomColorsBlackAndWhiteAllFrames(", "ChromaAnimationAPI::FillRandomColorsBlackAndWhiteAllFramesName("))
                            {
                            }
                            if (Replace(ref line, "Math.abs(", "fabsf("))
                            {
                            }
                            if (Replace(ref line, "Math.cos(", "cos("))
                            {
                            }
                            if (Replace(ref line, "Math.floor(", "floor("))
                            {
                            }
                            if (Replace(ref line, "Math.PI", "MATH_PI"))
                            {
                            }
                            if (Replace(ref line, "/ frameCount", "/ (float)frameCount"))
                            {
                            }
                            if (line.StartsWith("displayAndPlayAnimationChromaLink(") ||
                                line.StartsWith("displayAndPlayAnimationHeadset(") ||
                                line.StartsWith("displayAndPlayAnimationKeyboard(") ||
                                line.StartsWith("displayAndPlayAnimationKeypad(") ||
                                line.StartsWith("displayAndPlayAnimationMouse(") ||
                                line.StartsWith("displayAndPlayAnimationMousepad("))
                            {
                                line = "ChromaAnimationAPI::PlayAnimationName(baseLayer, true);";
                            }

                            if (line.Contains("SetKeysColorName") ||
                                line.Contains("SetKeysColorAllFramesName"))
                            {
                                string[] parts = line.Split(",".ToCharArray());
                                ArrayList list = new ArrayList(parts);
                                if (list.Count > 2)
                                {
                                    string varName = ((string)list[list.Count - 2]).Trim();
                                    list.Insert(list.Count - 1, string.Format("(int)size({0})", varName));
                                }
                                string nextLine = string.Join(", ", list.ToArray());
                                line = nextLine;
                            }

                            if (line.Contains("SetKeysColorAllFramesRGBName"))
                            {
                                string[] parts = line.Split(",".ToCharArray());
                                ArrayList list = new ArrayList(parts);
                                if (list.Count > 2)
                                {
                                    string varName = ((string)list[1]).Trim();
                                    list.Insert(2, string.Format("(int)size({0})", varName));
                                }
                                string nextLine = string.Join(", ", list.ToArray());
                                line = nextLine;
                            }

                            if (Replace(ref line, " = [];", "[] = {"))
                            {
                                readingArray = true;
                            }

                            if (line.Contains("{"))
                            {
                                ++nextBlockLevel;
                            }
                            if (line.Contains("}"))
                            {
                                --nextBlockLevel;
                            }

                            Indent(line, blockLevel, sw);
                            
                            Console.WriteLine("{0}", line);
                            sw.WriteLine(line);
                            blockLevel = nextBlockLevel;
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
        static void ProcessUE4Header(string filename, StreamWriter sw)
        {
            try
            {
                string classDefinition = @"// Copyright 1998-2014 Epic Games, Inc. All Rights Reserved.

#pragma once

#include ""Engine.h""
#include ""GameChromaBP.generated.h""

UCLASS()
class UGameChromaBP : public UBlueprintFunctionLibrary
{
	GENERATED_UCLASS_BODY()";
                Console.WriteLine("{0}", classDefinition);
                sw.WriteLine("{0}", classDefinition);

                using (FileStream fs = File.Open(filename, FileMode.Open, FileAccess.Read, FileShare.ReadWrite))
                {
                    using (StreamReader sr = new StreamReader(fs))
                    {
                        string line;
                        do
                        {
                            line = sr.ReadLine();
                            if (line == null ||
                                line == "\0")
                            {
                                break;
                            }
                            line = line.Trim();
                            if (line == "")
                            {
                                continue;
                            }
                            if (!line.StartsWith("void"))
                            {
                                continue;
                            }

                            Console.WriteLine();
                            sw.WriteLine();

                            string tokenVoid = "void ";
                            string tokenParens = "(";
                            string funcName = line.Substring(tokenVoid.Length);
                            funcName = funcName.Substring(0, funcName.IndexOf(tokenParens));

                            string bpDef = string.Format("\tUFUNCTION(BlueprintCallable, meta = (DisplayName = \"{0}\", Keywords = \"Example\"), Category = \"Sample\")", funcName);
                            Console.WriteLine("{0}", bpDef);
                            sw.WriteLine("{0}", bpDef);

                            line = string.Format("\tstatic void {0}();", funcName);

                            Console.WriteLine("{0}", line);
                            sw.WriteLine(line);
                        }
                        while (line != null);
                    }
                }

                string classFooter= @"};";
                Console.WriteLine("{0}", classFooter);
                sw.WriteLine("{0}", classFooter);
            }
            catch (Exception)
            {
                Console.Error.WriteLine("Failed to process file: {0}", filename);
            }
        }
        static void ProcessUE4Implementation(string filename, StreamWriter sw)
        {
            try
            {
                using (FileStream fs = File.Open(filename, FileMode.Open, FileAccess.Read, FileShare.ReadWrite))
                {
                    using (StreamReader sr = new StreamReader(fs))
                    {
                        string line;
                        int blockLevel = 0;
                        int nextBlockLevel = blockLevel;
                        do
                        {
                            line = sr.ReadLine();
                            if (line == null ||
                                line == "\0")
                            {
                                break;
                            }
                            line = line.TrimStart();
                            if (line.Trim() == "")
                            {
                                continue;
                            }

                            Console.WriteLine("{0}", line);
                            sw.WriteLine(line);
                            blockLevel = nextBlockLevel;
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
        static void ConvertToCpp(string input, string outputFile)
        {
            if (File.Exists(outputFile))
            {
                File.Delete(outputFile);
            }
            using (FileStream fs = File.Open(outputFile, FileMode.OpenOrCreate, FileAccess.Write, FileShare.ReadWrite))
            {
                using (StreamWriter sw = new StreamWriter(fs))
                {
                    ProcessHTML5(input, sw);
                }
            }
        }
        static void ConvertToUE4(string input, string headerFile, string implementationFile)
        {
            if (File.Exists(headerFile))
            {
                File.Delete(headerFile);
            }
            using (FileStream fs = File.Open(headerFile, FileMode.OpenOrCreate, FileAccess.Write, FileShare.ReadWrite))
            {
                using (StreamWriter sw = new StreamWriter(fs))
                {
                    ProcessUE4Header(input, sw);
                }
            }

            /*
            if (File.Exists(implementationFile))
            {
                File.Delete(implementationFile);
            }
            using (FileStream fs = File.Open(implementationFile, FileMode.OpenOrCreate, FileAccess.Write, FileShare.ReadWrite))
            {
                using (StreamWriter sw = new StreamWriter(fs))
                {
                    ProcessUE4Implementation(input, sw);
                }
            }
            */
        }
        static void Main(string[] args)
        {
            //ConvertToCpp("Sample.js", "Output.cpp");
            ConvertToUE4("Output.cpp", "GameChromaBP.h", "GameChromaBP.cpp");
        }
    }
}
