﻿using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;
using System.IO;
using System.Text;

namespace ChromaDesignConverter
{
    class Converter
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

        public enum Pattern
        {
            ASSIGNMENTS,
            CLOSE_PARENS,
            CLOSE_PARENS_OR_SEMI_COLON,
            DECIMAL,
            DECIMAL_F,
            EQUAL,
            FLOAT,
            FOR,
            WILD_NON_NUMBER,
            OPEN_PARENS,
            OPTIONAL_WHITESPACE,
            WILD_REMAINING,
            SEMI_COLON,
            SPACE,
            VAR,
            VARIABLE_NAME,
        }

        static bool SwapPattern(out int searchIndex, ref string line, Pattern[] input, Pattern[] output)
        {
            searchIndex = 0;
            int patternIndex = 0;
            string varName = null;
            string number = null;
            bool isDecimal = false;
            string assignments = null;
            string closeParensOrSemiColon = null;
            string wildNonNumber = string.Empty;
            while (patternIndex < input.Length)
            {
                Pattern pattern = input[patternIndex];
                if (searchIndex >= line.Length)
                {
                    if (pattern == Pattern.OPTIONAL_WHITESPACE)
                    {
                        ++patternIndex;
                    }
                    break;
                }
                string remaining = line.Substring(searchIndex);
                if (pattern == Pattern.WILD_NON_NUMBER)
                {
                    if (!char.IsNumber(line[searchIndex]))
                    {
                        wildNonNumber += line[searchIndex];
                        ++searchIndex;
                        continue;
                    }
                    else
                    {
                        ++patternIndex; //optional pattern complete
                        continue;
                    }
                }
                else if (pattern == Pattern.OPTIONAL_WHITESPACE)
                {
                    if (char.IsWhiteSpace(line[searchIndex]))
                    {
                        ++searchIndex;
                        continue;
                    }
                    else
                    {
                        ++patternIndex; //optional pattern complete
                        continue;
                    }
                }
                else if (pattern == Pattern.VAR)
                {
                    const string token = "var";
                    if (remaining.StartsWith(token + " "))
                    {
                        searchIndex += token.Length;
                        ++patternIndex; //pattern complete
                        continue;
                    }
                    else
                    {
                        return false; //no match
                    }
                }
                else if (pattern == Pattern.FOR)
                {
                    const string token = "for";
                    if (remaining.StartsWith(token + " "))
                    {
                        searchIndex += token.Length;
                        ++patternIndex; //pattern complete
                        continue;
                    }
                    else
                    {
                        return false; //no match
                    }
                }
                else if (pattern == Pattern.VARIABLE_NAME)
                {
                    if (varName == null)
                    {
                        if (char.IsLetter(line[searchIndex]))
                        {
                            varName = line[searchIndex].ToString();
                            ++searchIndex;
                            continue;
                        }
                        else
                        {
                            return false; //no match
                        }
                    }
                    else
                    {
                        if (char.IsLetterOrDigit(line[searchIndex]))
                        {
                            varName += line[searchIndex].ToString();
                            ++searchIndex;
                            continue;
                        }
                        else
                        {
                            ++patternIndex; //pattern complete
                            continue;
                        }
                    }
                }
                else if (pattern == Pattern.EQUAL)
                {
                    if (line[searchIndex] == '=')
                    {
                        ++searchIndex;
                        ++patternIndex; //pattern complete
                        continue;
                    }
                    else
                    {
                        return false; //no match
                    }
                }
                else if (pattern == Pattern.ASSIGNMENTS)
                {
                    if (remaining.StartsWith("="))
                    {
                        assignments = "=";
                        ++searchIndex;
                        ++patternIndex; //pattern complete
                        continue;
                    }
                    else if (remaining.StartsWith("+="))
                    {
                        assignments = "+=";
                        ++searchIndex;
                        ++patternIndex; //pattern complete
                        continue;
                    }
                    else
                    {
                        return false; //no match
                    }
                }
                else if (pattern == Pattern.SEMI_COLON)
                {
                    if (line[searchIndex] == ';')
                    {
                        ++searchIndex;
                        ++patternIndex; //pattern complete
                        continue;
                    }
                    else
                    {
                        return false; //no match
                    }
                }
                else if (pattern == Pattern.OPEN_PARENS)
                {
                    if (line[searchIndex] == '(')
                    {
                        ++searchIndex;
                        ++patternIndex; //pattern complete
                        continue;
                    }
                    else
                    {
                        return false; //no match
                    }
                }
                else if (pattern == Pattern.CLOSE_PARENS)
                {
                    if (line[searchIndex] == ')')
                    {
                        ++searchIndex;
                        ++patternIndex; //pattern complete
                        continue;
                    }
                    else
                    {
                        return false; //no match
                    }
                }
                else if (pattern == Pattern.CLOSE_PARENS_OR_SEMI_COLON)
                {
                    if (line[searchIndex] == ')' ||
                        line[searchIndex] == ';')
                    {
                        closeParensOrSemiColon = line[searchIndex].ToString();
                        ++searchIndex;
                        ++patternIndex; //pattern complete
                        continue;
                    }
                    else
                    {
                        return false; //no match
                    }
                }
                else if (pattern == Pattern.DECIMAL)
                {
                    if (number == null)
                    {
                        if (char.IsNumber(line[searchIndex]))
                        {
                            number = line[searchIndex].ToString();
                            ++searchIndex;
                            continue;
                        }
                        else
                        {
                            return false; //no match
                        }
                    }
                    else
                    {
                        if (line[searchIndex] == '.')
                        {
                            isDecimal = true;
                        }
                        if (char.IsNumber(line[searchIndex]) ||
                            line[searchIndex] == '.')
                        {
                            number += line[searchIndex].ToString();
                            ++searchIndex;
                            continue;
                        }
                        else
                        {
                            if (isDecimal)
                            {
                                ++patternIndex; //pattern complete
                                continue;
                            }
                            else
                            {
                                return false; // no match
                            }
                        }
                    }
                    
                }
                else
                {
                    return false; //unexpected
                }
            }

            if (patternIndex < input.Length)
            {
                return false; //unmatched
            }

            string newLine = string.Empty;
            patternIndex = 0;
            while (patternIndex < output.Length)
            {
                Pattern pattern = output[patternIndex];
                if (pattern == Pattern.WILD_NON_NUMBER)
                {
                    newLine += wildNonNumber;
                    ++patternIndex;
                }
                else if (pattern == Pattern.FLOAT)
                {
                    newLine += "float";
                    ++patternIndex;
                }
                else if (pattern == Pattern.SPACE)
                {
                    newLine += " ";
                    ++patternIndex;
                }
                else if (pattern == Pattern.OPEN_PARENS)
                {
                    newLine += "(";
                    ++patternIndex;
                }
                else if (pattern == Pattern.CLOSE_PARENS)
                {
                    newLine += ")";
                    ++patternIndex;
                }
                else if (pattern == Pattern.CLOSE_PARENS_OR_SEMI_COLON)
                {
                    if (closeParensOrSemiColon != null)
                    {
                        newLine += closeParensOrSemiColon.ToString();
                    }
                    ++patternIndex;
                }
                else if (pattern == Pattern.FOR)
                {
                    newLine += "for";
                    ++patternIndex;
                }
                else if (pattern == Pattern.VARIABLE_NAME)
                {
                    newLine += varName;
                    ++patternIndex;
                }
                else if (pattern == Pattern.EQUAL)
                {
                    newLine += "=";
                    ++patternIndex;
                }
                else if (pattern == Pattern.ASSIGNMENTS)
                {
                    if (assignments != null)
                    {
                        newLine += assignments;
                    }
                    ++patternIndex;
                }
                else if (pattern == Pattern.DECIMAL)
                {
                    newLine += number;
                    ++patternIndex;
                }
                else if (pattern == Pattern.DECIMAL_F)
                {
                    newLine += "f";
                    ++patternIndex;
                }
                else if (pattern == Pattern.SEMI_COLON)
                {
                    newLine += ";";
                    ++patternIndex;
                }
                else if (pattern == Pattern.WILD_REMAINING)
                {
                    //searchIndex = newLine.Length;

                    newLine += line.Substring(searchIndex);
                    ++patternIndex;
                }
                else
                {
                    return false; //unexpected
                }
            }
            line = newLine;
            return true;
        }

        static void ProcessHTML5(string filename, StreamWriter sw, out int effectCount, bool upgradeKeyboardExtended)
        {
            effectCount = 0;

            try
            {
                sw.WriteLine("{0}", "#pragma region Autogenerated");

                Dictionary<string, string> variables = new Dictionary<string, string>();
                using (FileStream fs = File.Open(filename, FileMode.Open, FileAccess.Read, FileShare.ReadWrite))
                {
                    using (StreamReader sr = new StreamReader(fs))
                    {
                        string line;
                        int blockLevel = 0;
                        int nextBlockLevel = blockLevel;
                        bool readingArray = false;
                        string functionName = string.Empty;
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
                                line.StartsWith("exampleReset("))
                            {
                                continue;
                            }
                            if (line.StartsWith("handleButtonClick("))
                            {
                                ++effectCount;

                                line = "// Trigger haptic effect\r\n";
                                string code = string.Format(" ChromaAnimationAPI::CoreSetEventName(L\"{0}\");\r\n",
                                    functionName);
                                code = code.Replace("L\"ShowEffect", "L\"Effect");
                                line += code;
                            }
                            if (upgradeKeyboardExtended && line.Contains("_Keyboard.chroma"))
                            {
                                line = line.Replace("_Keyboard.chroma", "_KeyboardExtended.chroma");
                            }
                            if (readingArray)
                            {
                                string tokenPush = ".push(";
                                if (line.Contains(tokenPush))
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
                                functionName = char.ToUpper(line[0]) + line.Substring(1);
                                line = "void " + char.ToUpper(line[0]) + line.Substring(1) + "()\r\n{";
                            }
                            if (line.EndsWith("});"))
                            {
                                continue;
                            }
                            if (line.StartsWith("let ") && line.Replace(" ", string.Empty).Contains("=["))
                            {
                                line = line.Replace("let ", "const byte ");
                                line = line.Replace("[", "{");
                                line = line.Replace("]", "};");
                                line = line.Replace(" =", "[] =");
                            }
                            if (line.StartsWith("var") && line.EndsWith("';"))
                            {
                                Replace(ref line, "'", "\"");
                            }
                            if (SwapStart(ref line, "var baseLayer", "const char* baseLayer"))
                            {
                                Replace(ref line, "../ChromaCommon/a", "A");
                            }
                            if (SwapStart(ref line, "var layer", "const char* layer"))
                            {
                                Replace(ref line, "../ChromaCommon/a", "A");
                            }
                            if (SwapStart(ref line, "var idleAnimation", "const char* idleAnimation"))
                            {
                                Replace(ref line, "../ChromaCommon/a", "A");
                            }

                            int searchIndex;

                            // case: var varName = 23.0;
                            if (SwapPattern(out searchIndex, ref line, new Pattern[] {
                                Pattern.OPTIONAL_WHITESPACE,
                                Pattern.VAR,
                                Pattern.OPTIONAL_WHITESPACE,
                                Pattern.VARIABLE_NAME,
                                Pattern.OPTIONAL_WHITESPACE,
                                Pattern.EQUAL,
                                Pattern.OPTIONAL_WHITESPACE,
                                Pattern.DECIMAL,
                                Pattern.OPTIONAL_WHITESPACE,
                                Pattern.SEMI_COLON,
                                Pattern.OPTIONAL_WHITESPACE,
                                },
                                new Pattern[] {
                                    Pattern.FLOAT,
                                    Pattern.SPACE,
                                    Pattern.VARIABLE_NAME,
                                    Pattern.SPACE,
                                    Pattern.EQUAL,
                                    Pattern.SPACE,
                                    Pattern.DECIMAL,
                                    Pattern.DECIMAL_F,
                                    Pattern.SEMI_COLON
                                }))
                            {
                            }

                            // case: for(var varName = 2.5;
                            if (SwapPattern(out searchIndex, ref line, new Pattern[] {
                                Pattern.OPTIONAL_WHITESPACE,
                                Pattern.FOR,
                                Pattern.OPTIONAL_WHITESPACE,
                                Pattern.OPEN_PARENS,
                                Pattern.OPTIONAL_WHITESPACE,
                                Pattern.VAR,
                                Pattern.OPTIONAL_WHITESPACE,
                                Pattern.VARIABLE_NAME,
                                Pattern.OPTIONAL_WHITESPACE,
                                Pattern.EQUAL,
                                Pattern.OPTIONAL_WHITESPACE,
                                Pattern.DECIMAL,
                                Pattern.OPTIONAL_WHITESPACE,
                                Pattern.SEMI_COLON,
                                Pattern.OPTIONAL_WHITESPACE,
                                },
                                new Pattern[] {
                                    Pattern.FOR,
                                    Pattern.SPACE,
                                    Pattern.OPEN_PARENS,
                                    Pattern.FLOAT,
                                    Pattern.SPACE,
                                    Pattern.VARIABLE_NAME,
                                    Pattern.SPACE,
                                    Pattern.EQUAL,
                                    Pattern.SPACE,
                                    Pattern.DECIMAL,
                                    Pattern.SEMI_COLON,
                                    Pattern.SPACE,
                                    Pattern.WILD_REMAINING
                                }))
                            {
                            }

                            // case: 123.45;
                            // and
                            // case: 123.45)
                            string subline = line;
                            string cat = string.Empty;
                            string goWith = string.Empty;
                            while (SwapPattern(out searchIndex, ref subline, new Pattern[] {
                                Pattern.WILD_NON_NUMBER,
                                Pattern.DECIMAL,
                                Pattern.OPTIONAL_WHITESPACE,
                                Pattern.CLOSE_PARENS_OR_SEMI_COLON,
                                },
                                new Pattern[] {
                                    Pattern.WILD_NON_NUMBER,
                                    Pattern.DECIMAL,
                                    Pattern.DECIMAL_F,
                                    Pattern.CLOSE_PARENS_OR_SEMI_COLON,
                                    Pattern.WILD_REMAINING
                                }))
                            {
                                cat += subline.Substring(0, searchIndex);
                                subline = subline.Substring(searchIndex);
                                line = cat + subline;
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
                            if (SwapStart(ref line, "var speed ", "float speed "))
                            {
                            }
                            if (SwapStart(ref line, "var radius ", "float radius "))
                            {
                            }
                            if (SwapStart(ref line, "var stroke ", "float stroke "))
                            {
                            }
                            if (SwapStart(ref line, "var angle ", "float angle "))
                            {
                            }
                            if (SwapStart(ref line, "var hp ", "float hp "))
                            {
                            }
                            if (SwapStart(ref line, "for (var ", "for (int "))
                            {
                            }
                            if (SwapStart(ref line, "var ", "int "))
                            {
                            }
                            if (Replace(ref line, "/ 180;", "/ 180.0f;"))
                            {
                            }
                            if (Replace(ref line, "/ 2 ", "/ 2.0f "))
                            {
                            }

                            if (Replace(ref line, "ChromaAnimation.", "ChromaAnimationAPI::"))
                            {
                            }
                            if (Replace(ref line, "ChromaAnimationAPI::openAnimationFromMemory", "ChromaAnimationAPI::OpenAnimationFromMemory"))
                            {
                                TrimAfter(ref line, ", function", ");");
                            }
                            if (Replace(ref line, "ChromaAnimationAPI::openAnimation", "ChromaAnimationAPI::GetAnimation"))
                            {
                                TrimAfter(ref line, ",", ");");
                            }
                            if (Replace(ref line, "ChromaAnimationAPI::closeAnimation(", "ChromaAnimationAPI::CloseAnimationName("))
                            {
                            }
                            if (Replace(ref line, "baseAnimation.getFrameCount();", "ChromaAnimationAPI::GetFrameCountName(baseLayer);"))
                            {
                            }
                            if (Replace(ref line, "layer2Animation.getFrameCount();", "ChromaAnimationAPI::GetFrameCountName(layer2);"))
                            {
                            }
                            if (Replace(ref line, "layer3Animation.getFrameCount();", "ChromaAnimationAPI::GetFrameCountName(layer3);"))
                            {
                            }
                            if (Replace(ref line, "layer4Animation.getFrameCount();", "ChromaAnimationAPI::GetFrameCountName(layer4);"))
                            {
                            }
                            if (Replace(ref line, "layer5Animation.getFrameCount();", "ChromaAnimationAPI::GetFrameCountName(layer5);"))
                            {
                            }
                            if (Replace(ref line, "layer6Animation.getFrameCount();", "ChromaAnimationAPI::GetFrameCountName(layer6);"))
                            {
                            }
                            if (Replace(ref line, "layer7Animation.getFrameCount();", "ChromaAnimationAPI::GetFrameCountName(layer7);"))
                            {
                            }
                            if (Replace(ref line, "layer8Animation.getFrameCount();", "ChromaAnimationAPI::GetFrameCountName(layer8);"))
                            {
                            }
                            if (Replace(ref line, "layer9Animation.getFrameCount();", "ChromaAnimationAPI::GetFrameCountName(layer9);"))
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
                                Replace(ref line, "0.033,", "0.033f,");
                            }
                            if (Replace(ref line, "ChromaAnimationAPI::multiplyNonZeroTargetColorLerpAllFrames(", "ChromaAnimationAPI::MultiplyNonZeroTargetColorLerpAllFramesName("))
                            {
                            }
                            if (Replace(ref line, "ChromaAnimationAPI::copyNonZeroAllKeysAllFrames(", "ChromaAnimationAPI::CopyNonZeroAllKeysAllFramesName("))
                            {
                            }
                            if (Replace(ref line, "ChromaAnimationAPI::copyKeysColorAllFrames(", "ChromaAnimationAPI::CopyKeysColorAllFramesName("))
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
                                line = line.Replace("0.1)", "0.1f)");
                                line = line.Replace("0.033)", "0.033f)");
                            }
                            if (Replace(ref line, "ChromaAnimationAPI::makeBlankFramesRGB(", "ChromaAnimationAPI::MakeBlankFramesRGBName("))
                            {
                                line = line.Replace("0.1,", "0.1f,");
                                line = line.Replace("0.033,", "0.033f,");
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
                            if (Replace(ref line, "ChromaAnimationAPI::fillThresholdColorsMinMaxAllFramesRGB(", "ChromaAnimationAPI::FillThresholdColorsMinMaxAllFramesRGBName("))
                            {
                            }
                            if (Replace(ref line, "ChromaAnimationAPI::subtractThresholdColorsMinMaxAllFramesRGB(", "ChromaAnimationAPI::SubtractThresholdColorsMinMaxAllFramesRGBName("))
                            {
                            }
                            if (Replace(ref line, "ChromaAnimationAPI::multiplyIntensityColorAllFrames(", "ChromaAnimationAPI::MultiplyIntensityColorAllFramesName("))
                            {
                            }
                            if (Replace(ref line, "ChromaAnimationAPI::subtractNonZeroAllKeysAllFramesOffset(", "ChromaAnimationAPI::SubtractNonZeroAllKeysAllFramesOffsetName("))
                            {
                            }
                            if (Replace(ref line, "ChromaAnimationAPI::subtractNonZeroTargetAllKeysAllFrames(", "ChromaAnimationAPI::SubtractNonZeroTargetAllKeysAllFramesName("))
                            {
                            }
                            if (Replace(ref line, "ChromaAnimationAPI::fillZeroColorAllFramesRGB(", "ChromaAnimationAPI::FillZeroColorAllFramesRGBName("))
                            {
                            }
                            if (Replace(ref line, "ChromaAnimationAPI::fillThresholdColorsRGB(", "ChromaAnimationAPI::FillThresholdColorsRGBName("))
                            {
                            }
                            if (Replace(ref line, "ChromaAnimationAPI::multiplyIntensityAllFrames(", "ChromaAnimationAPI::MultiplyIntensityAllFramesName("))
                            {
                                line = line.Replace("0.25)", "0.25f)");
                            }
                            if (Replace(ref line, "ChromaAnimationAPI::multiplyIntensityAllFramesRGB(", "ChromaAnimationAPI::MultiplyIntensityAllFramesRGBName("))
                            {
                            }
                            if (Replace(ref line, "ChromaAnimationAPI::copyZeroTargetAllKeysAllFrames(", "ChromaAnimationAPI::CopyZeroTargetAllKeysAllFramesName("))
                            {
                            }
                            if (Replace(ref line, "ChromaAnimationAPI::fillRandomColorsAllFrames(", "ChromaAnimationAPI::FillRandomColorsAllFramesName("))
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
                            if (Replace(ref line, "ChromaAnimationAPI::copyNonZeroTargetZeroAllKeysAllFrames(", "ChromaAnimationAPI::CopyNonZeroTargetZeroAllKeysAllFramesName("))
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
                            if (Replace(ref line, "ChromaAnimationAPI::fillThresholdColorsAllFramesRGB(", "ChromaAnimationAPI::FillThresholdColorsAllFramesRGBName("))
                            {
                            }
                            if (Replace(ref line, "ChromaAnimationAPI::insertFrame(", "ChromaAnimationAPI::InsertFrameName("))
                            {
                            }
                            if (Replace(ref line, "ChromaAnimationAPI::multiplyIntensityRGB(", "ChromaAnimationAPI::MultiplyIntensityRGBName("))
                            {
                            }
                            if (Replace(ref line, "ChromaAnimationAPI::setKeyColor(", "ChromaAnimationAPI::SetKeyColorName("))
                            {
                            }
                            if (Replace(ref line, "ChromaAnimationAPI::copyRedChannelAllFrames(", "ChromaAnimationAPI::CopyRedChannelAllFramesName("))
                            {
                            }
                            if (Replace(ref line, "ChromaAnimationAPI::copyGreenChannelAllFrames(", "ChromaAnimationAPI::CopyGreenChannelAllFramesName("))
                            {
                            }
                            if (Replace(ref line, "ChromaAnimationAPI::copyBlueChannelAllFrames(", "ChromaAnimationAPI::CopyBlueChannelAllFramesName("))
                            {
                            }
                            if (Replace(ref line, "ChromaAnimationAPI::offsetColorsAllFrames(", "ChromaAnimationAPI::OffsetColorsAllFramesName("))
                            {
                            }
                            if (Replace(ref line, "ChromaAnimationAPI::useIdleAnimation(", "ChromaAnimationAPI::UseIdleAnimation("))
                            {
                            }
                            if (Replace(ref line, "ChromaAnimationAPI::setIdleAnimation(", "ChromaAnimationAPI::SetIdleAnimationName("))
                            {
                            }
                            if (Replace(ref line, "ChromaAnimationAPI::getMaxRow(", "ChromaAnimationAPI::GetMaxRow("))
                            {
                            }
                            if (Replace(ref line, "ChromaAnimationAPI::getMaxColumn(", "ChromaAnimationAPI::GetMaxColumn("))
                            {
                            }
                            if (Replace(ref line, "ChromaAnimationAPI::lerp(", "ChromaAnimationAPI::Lerp("))
                            {
                            }
                            if (Replace(ref line, "ChromaAnimationAPI::offsetColorsWithColorAllFrames(", "ChromaAnimationAPI::OffsetColorsWithColorAllFramesName("))
                            {
                            }
                            if (Replace(ref line, "EChromaSDKDevice1DEnum.", "(int)EChromaSDKDevice1DEnum::"))
                            {
                            }
                            if (Replace(ref line, "EChromaSDKDevice2DEnum.", "(int)EChromaSDKDevice2DEnum::"))
                            {
                            }
                            if (Replace(ref line, "EChromaSDKDeviceEnum.", "(int)EChromaSDKDeviceEnum::"))
                            {
                            }

                            if (Replace(ref line, "Math.abs(", "fabsf("))
                            {
                            }
                            if (Replace(ref line, "Math.min(", "min("))
                            {
                            }
                            if (Replace(ref line, "Math.max(", "max("))
                            {
                            }
                            if (Replace(ref line, "Math.cos(", "cos("))
                            {
                            }
                            if (Replace(ref line, "Math.sin(", "sin("))
                            {
                            }
                            if (Replace(ref line, "Math.floor(", "floor("))
                            {
                            }
                            if (Replace(ref line, "Math.PI", "MATH_PI"))
                            {
                            }
                            if (Replace(ref line, "/frameCount", "/ (float)frameCount"))
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
                                line.StartsWith("displayAndPlayAnimationMousepad(") ||
                                line.StartsWith("displayAndPlayAnimation("))
                            {
                                if (line.EndsWith("false);"))
                                {
                                    line = "ChromaAnimationAPI::PlayAnimationName(baseLayer, false);";
                                }
                                else
                                {
                                    line = "ChromaAnimationAPI::PlayAnimationName(baseLayer, true);";
                                }
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

                            string tokenInt = "int ";
                            if (line.StartsWith(tokenInt))
                            {
                                string varName = line.Substring(tokenInt.Length);
                                for (int i = 0; i < varName.Length; ++i)
                                {
                                    if (char.IsLetter(varName[i]) ||
                                        char.IsNumber(varName[i]))
                                    {
                                        continue;
                                    }
                                    varName = varName.Substring(0, i);
                                    break;
                                }
                                if (variables.ContainsKey(varName))
                                {
                                    line = line.Substring(tokenInt.Length);
                                }
                                else
                                {
                                    variables[varName] = null;
                                }
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
                                if (nextBlockLevel == 0)
                                {
                                    variables.Clear();
                                }
                                line = line.Replace("};", "}");
                            }

                            Indent(line, blockLevel, sw);

                            Console.WriteLine("{0}", line);
                            sw.WriteLine(line);
                            blockLevel = nextBlockLevel;
                        }
                        while (line != null);
                    }
                }

                sw.WriteLine("{0}", "#pragma endregion");
                sw.WriteLine("{0}", "/*");

                for (int effect = 1; effect <= effectCount; ++effect)
                {
                    sw.WriteLine("case {0}:", effect);
                    sw.WriteLine("\tShowEffect{0}();", effect);
                    sw.WriteLine("\tShowEffect{0}ChromaLink();", effect);
                    sw.WriteLine("\tShowEffect{0}Headset();", effect);
                    sw.WriteLine("\tShowEffect{0}Keypad();", effect);
                    sw.WriteLine("\tShowEffect{0}Mousepad();", effect);
                    sw.WriteLine("\tShowEffect{0}Mouse();", effect);
                    sw.WriteLine("\tbreak;");
                }

                sw.WriteLine("{0}", "*/");
            }
            catch (Exception)
            {
                Console.Error.WriteLine("Failed to process file: {0}", filename);
            }
        }

        static void ProcessUWP(string filename, StreamWriter sw)
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


                            if (Replace(ref line, "\"Animations", "\"Assets/Animations"))
                            {

                            }

                            if (Replace(ref line, "\"animations", "\"Assets/Animations"))
                            {

                            }

                            if (Replace(ref line, "const char*", "Platform::String^"))
                            {
                            }

                            if (Replace(ref line, "MATH_PI", "M_PI"))
                            {
                            }

                            if (Replace(ref line, "Keyboard::RZKEY::RZKEY_", "ChromaSDK::Keyboard::RZKEY::RZKEY_"))
                            {
                            }

                            /*
                            // key array
                            Platform::Array<int>^ keysArray = ref new Platform::Array<int>(keys, (int)size(keys));
                            */

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

        static void ProcessXDK(string filename, StreamWriter sw)
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

                            if (Replace(ref line, "Platform::String^", "const char*"))
                            {
                            }

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

        static void ProcessVB(string filename, StreamWriter sw)
        {
            try
            {
                int blockLevel = 0;
                bool inComment = false;
                bool inArray = false;
                bool inFor = false;
                bool inIf = false;
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

                            if (Replace(ref line, "#region Autogenerated", "#Region \"Autogenerated\""))
                            {
                            }

                            else if (Replace(ref line, "#endregion", "#End Region"))
                            {
                            }

                            else if (line.StartsWith("void ") &&
                                Replace(ref line, "void ", "Private Function "))
                            {
                                blockLevel = 0;
                            }

                            else if (Replace(ref line, "// ", "REM //"))
                            {
                            }

                            else if (line.StartsWith("for "))
                            {
                                inFor = true;
                                line = "For " + line.Substring("for ".Length);
                                Replace(ref line, "{", string.Empty);
                            }

                            else if (line.StartsWith("if "))
                            {
                                inIf = true;
                                line = "If " + line.Substring("for ".Length) + "Then";
                                Replace(ref line, "{", string.Empty);
                            }

                            else if (line.Trim().StartsWith("{") &&
                                Replace(ref line, "{", string.Empty))
                            {
                                ++blockLevel;
                                if (!inFor && !inArray)
                                {
                                    continue;
                                }
                            }
                            else if (line.Trim().StartsWith("}"))
                            {
                                if (inArray)
                                {
                                    inArray = false;
                                }
                                else if (inFor)
                                {
                                    inFor = false;
                                    Replace(ref line, "}", string.Empty);
                                    line = "Next";
                                }
                                else if (inIf)
                                {
                                    inIf = false;
                                    Replace(ref line, "}", string.Empty);
                                    line = "End If";
                                }
                                else
                                {
                                    Replace(ref line, "}", string.Empty);
                                    --blockLevel;
                                    if (blockLevel == 0)
                                    {
                                        line = line + "Return Nothing" + Environment.NewLine + "End Function";
                                    }
                                }
                            }

                            Replace(ref line, ";", string.Empty);
                            Replace(ref line, "(int)", string.Empty);
                            Replace(ref line, "(float)", "Convert.ToSingle(");
                            Replace(ref line, "//", "REM //");
                            Replace(ref line, "Mathf.", "Math.");
                            Replace(ref line, "%", "Mod");

                            Replace(ref line, @"For (int frameId = 0 frameId < frameCount ++frameId)", "For frameId = 0 To frameCount Step 1");

                            if (line.Trim().StartsWith("string ") &&
                                Replace(ref line, "string ", "Dim "))
                            {
                                Replace(ref line, "= ", "As String = ");
                            }

                            if (line.Trim().StartsWith("int ") &&
                                Replace(ref line, "int ", "Dim "))
                            {
                                Replace(ref line, "= ", "As Integer = ");
                            }

                            if (line.Trim().StartsWith("float ") &&
                                Replace(ref line, "float ", "Dim "))
                            {
                                Replace(ref line, "= ", "As Single = ");
                            }

                            if (line.Trim().StartsWith("byte[] ") &&
                                Replace(ref line, "byte[] ", "Dim "))
                            {
                                Replace(ref line, "= ", "As Byte() = ");
                            }

                            if (line.Trim().StartsWith("int[] ") &&
                                Replace(ref line, "int[] ", "Dim "))
                            {
                                //Replace(ref line, "= ", "As Byte() = ");
                                inArray = true;
                            }

                            if (line.Trim().StartsWith("/*") &&
                                Replace(ref line, "/*", "REM /*"))
                            {
                                inComment = true;
                            }

                            if (inComment)
                            {
                                line = "REM " + line;
                            }

                            if (line.Trim().EndsWith("*/"))
                            {
                                inComment = false;
                            }

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

        static void ProcessUnity(string filename, StreamWriter sw)
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

                            if (Replace(ref line, "(L\"", "(\""))
                            {
                            }

                            if (Replace(ref line, "#pragma region Autogenerated", "#region Autogenerated"))
                            {
                            }

                            if (Replace(ref line, "#pragma endregion", "#endregion"))
                            {
                            }

                            if (line.StartsWith("const byte ") && line.Replace(" ", string.Empty).Contains("[]="))
                            {
                                line = line.Replace("[]", string.Empty);
                                line = line.Replace("const byte ", "byte[] ");
                            }

                            if (Replace(ref line, "const char*", "string"))
                            {
                            }

                            if (Replace(ref line, "MATH_PI", "Mathf.PI"))
                            {
                            }

                            if (Replace(ref line, "cos(", "Mathf.Cos("))
                            {
                            }

                            if (Replace(ref line, "sin(", "Mathf.Sin("))
                            {
                            }

                            if (Replace(ref line, "floor(", "(int)Mathf.Floor("))
                            {
                            }

                            if (Replace(ref line, "fabsf", "Mathf.Abs"))
                            {
                            }

                            if (Replace(ref line, "Keyboard::RZKEY::RZKEY_", "ChromaSDK::Keyboard::RZKEY::RZKEY_"))
                            {
                            }

                            if (Replace(ref line, "ChromaAnimationAPI::", "ChromaAnimationAPI."))
                            {
                            }

                            if (Replace(ref line, "ChromaSDK::Keyboard::RZKEY::", "(int)Keyboard.RZKEY."))
                            {
                            }

                            if (Replace(ref line, "(int)size(keys)", "keys.Length"))
                            {
                            }

                            if (Replace(ref line, ", keys);", ", keys, keys.Length);"))
                            {
                            }

                            if (Replace(ref line, "int keys[] = {", "int[] keys = {"))
                            {
                            }

                            if (Replace(ref line, "keys[] = {", "keys = new int[] {"))
                            {
                            }

                            if (Replace(ref line, "keys.length", "keys.Length"))
                            {
                            }

                            if (Replace(ref line, "Math.random()", "Random.Range(0.0f, 1.0f)"))
                            {
                            }

                            if (Replace(ref line, "EChromaSDKDeviceEnum::DE_", "ChromaAnimationAPI.Device."))
                            {
                            }

                            if (Replace(ref line, "EChromaSDKDevice1DEnum::DE_", "ChromaAnimationAPI.Device1D."))
                            {
                            }

                            if (Replace(ref line, "EChromaSDKDevice2DEnum::DE_", "ChromaAnimationAPI.Device2D."))
                            {
                            }

                            if (Replace(ref line, "(int)ChromaAnimationAPI.Device1D", "ChromaAnimationAPI.Device1D"))
                            {
                            }

                            if (Replace(ref line, "(int)ChromaAnimationAPI.Device2D", "ChromaAnimationAPI.Device2D"))
                            {
                            }

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

        static void ProcessJava(string filename, StreamWriter sw)
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
                            if (line.StartsWith("#"))
                            {
                                continue;
                            }

                            if (Replace(ref line, "const char*", "String"))
                            {
                            }

                            if (Replace(ref line, "MATH_PI", "Math.PI"))
                            {
                            }

                            if (Replace(ref line, "cos(", "Math.Cos("))
                            {
                            }

                            if (Replace(ref line, "cos(", "Math.Sin("))
                            {
                            }

                            if (Replace(ref line, "floor(", "Math.Floor("))
                            {
                            }

                            if (Replace(ref line, "fabsf", "Math.Abs"))
                            {
                            }

                            if (Replace(ref line, "Keyboard::RZKEY::RZKEY_", "ChromaSDK::Keyboard::RZKEY::RZKEY_"))
                            {
                            }

                            if (Replace(ref line, "void ShowEffect", "public static void showEffect"))
                            {
                            }

                            if (Replace(ref line, "\"Animations/", "getAnimationPath()+\""))
                            {
                            }

                            if (Replace(ref line, "ChromaAnimationAPI::", "sChromaAnimationAPI."))
                            {
                                string token = "sChromaAnimationAPI.";
                                int start = line.IndexOf(token);
                                if (start >= 0)
                                {
                                    int index = start + token.Length;
                                    if ((index+1) < line.Length)
                                    {
                                        line = line.Substring(0, start) + token + char.ToLower(line[index]) + line.Substring(index+1);
                                    }
                                }
                            }

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

        static bool ConvertFloatArgumentsRemoveSuffix(ref string line)
        {
            string newLine = string.Empty;
            bool hadCommaOrParents = false;
            bool hadWhiteSpace = false;
            bool isNumber = false;
            foreach (char c in line)
            {
                if (char.IsWhiteSpace(c))
                {
                    hadWhiteSpace = true;
                }
                else if (c == ',' ||
                    c == '(')
                {
                    hadWhiteSpace = false;
                    isNumber = false;
                    hadCommaOrParents = true;
                }
                else if ((hadWhiteSpace || hadCommaOrParents) &&
                    char.IsDigit(c))
                {
                    isNumber = true;
                }
                else if (isNumber &&
                    (c == 'f' ||
                    c == 'F' ||
                    c == '.'))
                {
                    if (c == 'f' ||
                        c == 'F')
                    {
                        continue; //skip
                    }
                }
                else
                {
                    isNumber = false;
                    hadWhiteSpace = false;
                    hadCommaOrParents = false;
                }
                newLine += c;
            }

            line = newLine;
            return true;
        }

        static void WriteTabs(StreamWriter sw, int tabs)
        {
            for (int tab = 0; tab < tabs; ++tab)
            {
                sw.Write("\t");
            }
        }

        static string GetAssignmentFieldName(string assignment)
        {
            string[] parts = assignment.Split(" ".ToCharArray());
            if (parts[0].Trim() == "int")
            {
                if (parts.Length > 1)
                {
                    return parts[1].Trim();
                }
                else
                {
                    return string.Empty;
                }
            }
            else
            {
                if (parts.Length > 2)
                {
                    return parts[2].Trim();
                }
                else
                {
                    return string.Empty;
                }
            }
        }

        static string GetAssignmentFieldValue(string assignment)
        {
            string[] parts = assignment.Split(" ".ToCharArray());
            if (parts[0].Trim() == "int")
            {
                if (parts.Length > 3)
                {
                    return parts[3].Trim();
                }
                else
                {
                    return string.Empty;
                }
            }
            else
            {
                if (parts.Length > 2)
                {
                    return parts[2].Trim();
                }
                else
                {
                    return string.Empty;
                }
            }
        }

        static string GetConditionFieldValue(string condition, int param)
        {
            string[] parts = condition.Split(" ".ToCharArray());
            if (param >= 0 && param < parts.Length)
            {
                return parts[param].Trim();
            }
            else
            {
                return string.Empty;
            }
        }

        static string GetIncrementValue(string assignment)
        {
            if (assignment.Contains("++"))
            {
                return "1";
            }
            if (assignment.Contains("--"))
            {
                return "-1";
            }
            return string.Empty;
        }

        static void ProcessGodot(string filename, StreamWriter sw, int effectCount)
        {
            try
            {
                using (FileStream fs = File.Open(filename, FileMode.Open, FileAccess.Read, FileShare.ReadWrite))
                {
                    using (StreamReader sr = new StreamReader(fs))
                    {
                        string line;
                        int tabs = 0;
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
                            if (line.StartsWith("#"))
                            {
                                continue;
                            }

                            const string TOKEN_FOR = "for (";
                            if (line.Trim().StartsWith(TOKEN_FOR))
                            {
                                string[] parts = line.Trim().Substring(TOKEN_FOR.Length).Split(";".ToCharArray());
                                string fieldName = GetAssignmentFieldName(parts[0].Trim());
                                string fieldVal = GetAssignmentFieldValue(parts[0].Trim());
                                string condition = GetConditionFieldValue(parts[1].Trim(), 2);
                                string increment = GetIncrementValue(parts[2].Trim());
                                WriteTabs(sw, tabs);
                                sw.WriteLine("for {0} in range({1}, {2}, {3}):",
                                    fieldName, fieldVal,
                                    condition,
                                    increment);
                                tabs++;
                                continue;
                            }

                            foreach (char c in line)
                            {
                                if (c == '{')
                                {
                                    ++tabs;
                                }
                                if (c == '}')
                                {
                                    --tabs;
                                }
                            }
                            if (line.Trim() == "{")
                            {
                                continue;
                            }
                            if (line.Trim() == "}")
                            {
                                continue;
                            }

                            if (Replace(ref line, "const char*", "var"))
                            {
                            }

                            if (Replace(ref line, "int ", "var "))
                            {
                            }

                            if (Replace(ref line, "(float)frameCount", "float(frameCount)"))
                            {
                            }

                            if (Replace(ref line, "float ", "var "))
                            {
                            }

                            if (Replace(ref line, "MATH_PI", "PI"))
                            {
                            }

                            if (Replace(ref line, "cos(", "cos("))
                            {
                            }

                            if (Replace(ref line, "sin(", "sin("))
                            {
                            }

                            if (Replace(ref line, "floor(", "floor("))
                            {
                            }

                            if (Replace(ref line, "fabsf", "abs"))
                            {
                            }

                            if (Replace(ref line, "(int)EChromaSDKDeviceEnum::", "EChromaSDKDeviceEnum."))
                            {
                            }

                            if (Replace(ref line, "(int)EChromaSDKDevice1DEnum::", "EChromaSDKDevice1DEnum."))
                            {
                            }

                            if (Replace(ref line, "(int)EChromaSDKDevice2DEnum::", "EChromaSDKDevice2DEnum."))
                            {
                            }

                            if (Replace(ref line, "Keyboard::RZKEY::", "Keyboard.RZKEY."))
                            {
                            }                            

                            if (ConvertFloatArgumentsRemoveSuffix(ref line))
                            {
                            }

                            if (Replace(ref line, "void ShowEffect", "func showEffect"))
                            {
                                line += ":";
                            }

                            if (Replace(ref line, "\"animations/", "\"Animations/"))
                            {
                            }

                            if (Replace(ref line, "ChromaAnimationAPI::", "ChromaAnimationAPI."))
                            {
                            }

                            if (Replace(ref line, ");", ")"))
                            {
                            }

                            if (Replace(ref line, "//", "#"))
                            {
                            }

                            WriteTabs(sw, tabs);
                            sw.WriteLine(line);
                        }
                        while (line != null);

                        for (int effect = 1; effect <= effectCount; ++effect)
                        {
                            sw.WriteLine("func _on_ButtonEffect{0}_button_up():", effect);
                            sw.WriteLine("\tif (IsChromaInitialized()):");
                            sw.WriteLine("\t\tshowEffect{0}()", effect);
                            sw.WriteLine("\t\tshowEffect{0}ChromaLink()", effect);
                            sw.WriteLine("\t\tshowEffect{0}Headset()", effect);
                            sw.WriteLine("\t\tshowEffect{0}Keypad()", effect);
                            sw.WriteLine("\t\tshowEffect{0}Mouse()", effect);
                            sw.WriteLine("\t\tshowEffect{0}Mousepad()", effect);
                        }
                    }
                }
            }
            catch (Exception)
            {
                Console.Error.WriteLine("Failed to process file: {0}", filename);
            }
        }

        static void ProcessUE4Header(string filename, StreamWriter sw, string gameName)
        {
            try
            {
                string classDefinition = @"// Copyright 1998-2014 Epic Games, Inc. All Rights Reserved.

#pragma once

#include ""Engine.h""
#include ""UMG.h""
#include ""__GAME__Button.h""
#include ""__GAME__ChromaBP.generated.h""

UCLASS()
class U__GAME__ChromaBP : public UBlueprintFunctionLibrary
{
	GENERATED_UCLASS_BODY()

    static int min(int a, int b);
	static int max(int a, int b);

    UFUNCTION(BlueprintCallable, meta = (DisplayName = ""__GAME__SetupButtonsEffects"", Keywords = ""Setup an array of button widgets""), Category = ""Sample"")
	static void __GAME__SetupButtonsEffects(const TArray<UButton*>& buttons);

	UFUNCTION(BlueprintCallable, meta = (DisplayName = ""__GAME__SampleStart"", Keywords = ""Init at the start of the application""), Category = ""Sample"")
	static void __GAME__SampleStart();

	UFUNCTION(BlueprintCallable, meta = (DisplayName = ""__GAME__SampleEnd"", Keywords = ""Uninit at the end of the application""), Category = ""Sample"")
	static void __GAME__SampleEnd();";

                Console.WriteLine("{0}", classDefinition.Replace("__GAME__", gameName));
                sw.WriteLine("{0}", classDefinition.Replace("__GAME__", gameName));

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

                            string bpDef = string.Format("\tUFUNCTION(BlueprintCallable, meta = (DisplayName = \"{0}{1}\", Keywords = \"Example\"), Category = \"Sample\")", gameName, funcName);
                            Console.WriteLine("{0}", bpDef);
                            sw.WriteLine("{0}", bpDef);

                            line = string.Format("\tstatic void {0}{1}();", gameName, funcName);

                            Console.WriteLine("{0}", line);
                            sw.WriteLine(line);
                        }
                        while (line != null);
                    }
                }

                string classFooter = @"
private:
	static TArray<U__GAME__Button*> _sSampleButtons;
};";
                Console.WriteLine("{0}", classFooter.Replace("__GAME__", gameName));
                sw.WriteLine("{0}", classFooter.Replace("__GAME__", gameName));
            }
            catch (Exception)
            {
                Console.Error.WriteLine("Failed to process file: {0}", filename);
            }
        }

        static void ProcessUE4ButtonHeader(string filename, StreamWriter sw, string gameName)
        {
            try
            {
                string classDefinition = @"// Copyright 1998-2014 Epic Games, Inc. All Rights Reserved.

#pragma once

#include <mutex>
#include ""__GAME__Button.generated.h""

UCLASS()
class U__GAME__Button : public UObject
{
	GENERATED_UCLASS_BODY()

	UPROPERTY()
	FString Name;

	UFUNCTION(BlueprintCallable, meta = (DisplayName = ""HandleClick"", Keywords = ""Dynamic function to handle button widget clicks""), Category = ""Sample"")
	void HandleClick();

private:
	static std::mutex _sMutex;
};";

                Console.WriteLine("{0}", classDefinition.Replace("__GAME__", gameName));
                sw.WriteLine("{0}", classDefinition.Replace("__GAME__", gameName));
            }
            catch (Exception)
            {
                Console.Error.WriteLine("Failed to process file: {0}", filename);
            }
        }

        static void ProcessUE4ButtonImplementation(string filename, StreamWriter sw, string gameName, int buttonCount)
        {
            try
            {
                string classDefinition = @"// Copyright 1998-2014 Epic Games, Inc. All Rights Reserved.
#include ""__GAME__Button.h"" //___HACK_UE4_VERSION_4_16_OR_GREATER
#include ""UE4ChromaSDKRT.h""
//#include ""__GAME__Button.h"" //___HACK_UE4_VERSION_4_15_OR_LESS
#include ""ChromaSDKPluginBPLibrary.h""
#include ""__GAME__ChromaBP.h""

using namespace std;

mutex U__GAME__Button::_sMutex;

//U__GAME__Button::U__GAME__Button(const class FPostConstructInitializeProperties& PCIP) //___HACK_UE4_VERSION_4_8_OR_LESS
//	: Super(PCIP) //___HACK_UE4_VERSION_4_8_OR_LESS
U__GAME__Button::U__GAME__Button(const FObjectInitializer& ObjectInitializer) //___HACK_UE4_VERSION_4_9_OR_GREATER
: Super(ObjectInitializer) //___HACK_UE4_VERSION_4_9_OR_GREATER
{
}

void U__GAME__Button::HandleClick()
{
#if PLATFORM_WINDOWS || PLATFORM_XBOXONE
    if (!UChromaSDKPluginBPLibrary::IsInitialized())
    {
        UE_LOG(LogTemp, Error, TEXT(""Chroma is not initialized!""));
        return;
    }

    lock_guard<mutex> guard(_sMutex);

__BUTTONS__#endif
}";

                string buttonDefinition = @"    __IF__ (Name.Compare(""Button_Effect__ID__"") == 0)
    {
        U__GAME__ChromaBP::__GAME__ShowEffect__ID__();
        U__GAME__ChromaBP::__GAME__ShowEffect__ID__ChromaLink();
        U__GAME__ChromaBP::__GAME__ShowEffect__ID__Headset();
        U__GAME__ChromaBP::__GAME__ShowEffect__ID__Keypad();
        U__GAME__ChromaBP::__GAME__ShowEffect__ID__Mousepad();
        U__GAME__ChromaBP::__GAME__ShowEffect__ID__Mouse();
    }
";
                StringBuilder sb = new StringBuilder();
                for (int i = 0; i < buttonCount; ++i)
                {
                    string strIf;
                    if (i == 0)
                    {
                        strIf = "if";
                    }
                    else
                    {
                        strIf = "else if";
                    }
                    sb.AppendFormat("{0}", buttonDefinition.Replace("__IF__", strIf).Replace("__ID__", (i+1).ToString()).Replace("__GAME__", gameName));
                    sb.AppendLine();
                }

                string buttons = sb.ToString();

                Console.WriteLine("{0}", classDefinition.Replace("__GAME__", gameName).Replace("__BUTTONS__", buttons));
                sw.WriteLine("{0}", classDefinition.Replace("__GAME__", gameName).Replace("__BUTTONS__", buttons));
            }
            catch
            {
                Console.Error.WriteLine("Failed to process file: {0}", filename);
            }
        }


        static void ConvertIntToLinearColor(ref string line, int parameterCount)
        {
            string[] parts = line.Split(",".ToCharArray());
            if (parts.Length == parameterCount)
            {
                string color = parts[parameterCount - 1];
                string[] parts2 = color.Split(")".ToCharArray());
                if (parts2.Length == 2)
                {
                    string colorParam = parts2[0].Trim();
                    if (colorParam.StartsWith("0x"))
                    {
                        parts[parameterCount - 1] = string.Format(" UChromaSDKPluginBPLibrary::ToLinearColor({0}));", colorParam);
                    }
                    else
                    {
                        int val;
                        if (int.TryParse(colorParam, out val))
                        {
                            parts[parameterCount - 1] = string.Format(" UChromaSDKPluginBPLibrary::ToLinearColor({0}));", val);
                        }
                    }
                }
            }
            line = string.Join(",", parts);
        }

        static void ProcessUE4Implementation(string filename, StreamWriter sw, string gameName)
        {
            try
            {
                string classDefinition = @"// Copyright 1998-2014 Epic Games, Inc. All Rights Reserved.

#include ""__GAME__ChromaBP.h"" //___HACK_UE4_VERSION_4_16_OR_GREATER
#include ""UE4ChromaSDKRT.h""
//#include ""__GAME__ChromaBP.h"" //___HACK_UE4_VERSION_4_15_OR_LESS
#include ""ChromaSDKPluginBPLibrary.h""
#include ""__GAME__Button.h""

//U__GAME__ChromaBP::U__GAME__ChromaBP(const FPostConstructInitializeProperties& PCIP) //___HACK_UE4_VERSION_4_8_OR_LESS
//	: Super(PCIP) //___HACK_UE4_VERSION_4_8_OR_LESS
U__GAME__ChromaBP::U__GAME__ChromaBP(const FObjectInitializer& ObjectInitializer) //___HACK_UE4_VERSION_4_9_OR_GREATER
	: Super(ObjectInitializer) //___HACK_UE4_VERSION_4_9_OR_GREATER
{
}

TArray<U__GAME__Button*> U__GAME__ChromaBP::_sSampleButtons;

int U__GAME__ChromaBP::min(int a, int b)
{
	if (a < b)
	{
		return a;
	}
	else
	{
		return b;
	}
}
int U__GAME__ChromaBP::max(int a, int b)
{
	if (a > b)
	{
		return a;
	}
	else
	{
		return b;
	}
}

void U__GAME__ChromaBP::__GAME__SetupButtonsEffects(const TArray<UButton*>& buttons)
{
	for (int i = 0; i < buttons.Num(); ++i)
	{
		UButton* button = buttons[i];
		if (button)
		{
			U__GAME__Button* dynamicButton;
			dynamicButton = NewObject<U__GAME__Button>();
			dynamicButton->AddToRoot(); //avoid GC collection
			dynamicButton->Name = button->GetName();
			button->OnClicked.AddDynamic(dynamicButton, &U__GAME__Button::HandleClick);
		}
	}
}

void U__GAME__ChromaBP::__GAME__SampleStart()
{
#if PLATFORM_WINDOWS || PLATFORM_XBOXONE
	if (!UChromaSDKPluginBPLibrary::IsInitialized())
	{
		FChromaSDKAppInfoType appInfo;
		appInfo.Title = ""UE4 Chroma Sample Application"";
		appInfo.Description = ""A sample application using Razer Chroma SDK"";
		appInfo.Author_Name = ""Razer"";
		appInfo.Author_Contact = ""https://github.com/razerofficial/UE4_XDK_SampleApp"";

		//appInfo.SupportedDevice = 
		//    0x01 | // Keyboards
		//    0x02 | // Mice
		//    0x04 | // Headset
		//    0x08 | // Mousepads
		//    0x10 | // Keypads
		//    0x20   // ChromaLink devices
		appInfo.SupportedDevice = (0x01 | 0x02 | 0x04 | 0x08 | 0x10 | 0x20);
        //    0x01 | // Utility. (To specifiy this is an utility application)
        //    0x02   // Game. (To specifiy this is a game);
		appInfo.Category = 1;

		int32 result = UChromaSDKPluginBPLibrary::ChromaSDKInitSDK(appInfo);
		switch (result)
		{
		case RZRESULT_DLL_NOT_FOUND:
			UE_LOG(LogTemp, Error, TEXT(""Chroma DLL is not found!""));
			break;
		case RZRESULT_DLL_INVALID_SIGNATURE:
			UE_LOG(LogTemp, Error, TEXT(""Chroma DLL has an invalid signature!""));
			break;
		case RZRESULT_SUCCESS:
			break;
		default:
			UE_LOG(LogTemp, Error, TEXT(""Failed to initialize Chroma!""));
			break;
		}
	}
#endif
}

void U__GAME__ChromaBP::__GAME__SampleEnd()
{
#if PLATFORM_WINDOWS || PLATFORM_XBOXONE
	if (UChromaSDKPluginBPLibrary::IsInitialized())
	{
		UChromaSDKPluginBPLibrary::ChromaSDKUnInit();
	}

	while (_sSampleButtons.Num() > 0)
	{
		U__GAME__Button* dynamicButton = _sSampleButtons[0];
		_sSampleButtons.RemoveAt(0);
		if (dynamicButton && dynamicButton->IsValidLowLevel())
		{
			dynamicButton->RemoveFromRoot();
			dynamicButton->ConditionalBeginDestroy();
		}
	}
#endif
}";
                Console.WriteLine("{0}", classDefinition.Replace("__GAME__", gameName));
                sw.WriteLine("{0}", classDefinition.Replace("__GAME__", gameName));

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
                            if (line.StartsWith("void"))
                            {
                                Console.WriteLine();
                                sw.WriteLine();

                                string tokenVoid = "void ";
                                string tokenParens = "(";
                                string funcName = line.Substring(tokenVoid.Length);
                                funcName = funcName.Substring(0, funcName.IndexOf(tokenParens));

                                line = string.Format("void UGameChromaBP::{0}{1}()", gameName, funcName);
                            }

                            if (line.StartsWith("const byte ") && line.Replace(" ", string.Empty).Contains("[]="))
                            {
                                line = line.Replace("const byte ", "const TArray<uint8> ");
                                line = line.Replace("[]", string.Empty);
                            }

                            if (Replace(ref line, "\"Animations", "\"GameSampleAnimations"))
                            {
                            }

                            if (Replace(ref line, "\"animations", "\"GameSampleAnimations"))
                            {
                            }

                            if (Replace(ref line, "const char*", "FString"))
                            {
                            }

                            if (Replace(ref line, "ChromaAnimationAPI::", "UChromaSDKPluginBPLibrary::"))
                            {
                            }

                            if (Replace(ref line, "UChromaSDKPluginBPLibrary::CoreSetEventName", "UChromaSDKPluginBPLibrary::SetEventName"))
                            {
                            }

                            if (Replace(ref line, "MATH_PI", "PI"))
                            {
                            }

                            if (Replace(ref line, "Keyboard::RZKEY::RZKEY_", "EChromaSDKKeyboardKey::KK_"))
                            {
                            }

                            if (line.Contains("UChromaSDKPluginBPLibrary::GetRGB") ||
                                line.Contains("UChromaSDKPluginBPLibrary::LerpColor"))
                            {
                                string tokenInt = "int ";
                                if (line.StartsWith(tokenInt))
                                {
                                    line = "FLinearColor " + line.Substring(tokenInt.Length);
                                }
                            }

                            if (line == "int color;")
                            {
                                line = "FLinearColor color;";
                            }

                            if (line.Contains("UChromaSDKPluginBPLibrary::FillZeroColorAllFramesName") ||
                                line.Contains("UChromaSDKPluginBPLibrary::FillNonZeroColorAllFramesName"))
                            {
                                ConvertIntToLinearColor(ref line, 2);
                            }

                            if (line.Contains("UChromaSDKPluginBPLibrary::FillNonZeroColorName") ||
                                line.Contains("UChromaSDKPluginBPLibrary::FillThresholdColorsAllFramesName"))
                            {
                                ConvertIntToLinearColor(ref line, 3);
                            }

                            if (line.Contains("UChromaSDKPluginBPLibrary::MakeBlankFramesName") ||
                                line.Contains("UChromaSDKPluginBPLibrary::SetKeysColorAllFramesName"))
                            {
                                ConvertIntToLinearColor(ref line, 4);
                            }

                            if (Replace(ref line, "(int)EChromaSDKDevice1DEnum::", "EChromaSDKDevice1DEnum::"))
                            {
                            }
                            if (Replace(ref line, "(int)EChromaSDKDevice2DEnum::", "EChromaSDKDevice2DEnum::"))
                            {
                            }
                            if (Replace(ref line, "(int)EChromaSDKDeviceEnum::", "EChromaSDKDeviceEnum::"))
                            {
                            }
                            if (Replace(ref line, "int keys[] = {", "{\r\nTArray<TEnumAsByte<EChromaSDKKeyboardKey::Type>> keys;"))
                            {
                            }
                            if (Replace(ref line, "keys[] = {", "{\r\nTArray<TEnumAsByte<EChromaSDKKeyboardKey::Type>> keys;"))
                            {
                            }
                            if (line.StartsWith("EChromaSDKKeyboardKey::KK_") && Replace(ref line, "EChromaSDKKeyboardKey::KK_", "keys.Add(EChromaSDKKeyboardKey::KK_"))
                            {
                                if (Replace(ref line, ",", ");"))
                                {

                                }
                            }

                            if (Replace(ref line, "keys, (int)size(keys), ", "keys,"))
                            {

                            }

                            string className = gameName + "ChromaBP";
                            Console.WriteLine("{0}", line.Replace("GameChromaBP", className));
                            sw.WriteLine(line.Replace("GameChromaBP", className));
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

        public static void ConvertToCpp(string input, string outputFile, out int effectCount, bool upgradeKeyboardExtended)
        {
            if (File.Exists(outputFile))
            {
                File.Delete(outputFile);
            }
            using (FileStream fs = File.Open(outputFile, FileMode.OpenOrCreate, FileAccess.Write, FileShare.ReadWrite))
            {
                using (StreamWriter sw = new StreamWriter(fs))
                {
                    ProcessHTML5(input, sw, out effectCount, upgradeKeyboardExtended);
                }
            }
        }

        public static void ConvertToUWP(string input, string outputFile, int effectCount)
        {
            if (File.Exists(outputFile))
            {
                File.Delete(outputFile);
            }
            using (FileStream fs = File.Open(outputFile, FileMode.OpenOrCreate, FileAccess.Write, FileShare.ReadWrite))
            {
                using (StreamWriter sw = new StreamWriter(fs))
                {
                    ProcessUWP(input, sw);
                }
            }
        }

        public static void ConvertToXDK(string input, string outputFile, int effectCount)
        {
            if (File.Exists(outputFile))
            {
                File.Delete(outputFile);
            }
            using (FileStream fs = File.Open(outputFile, FileMode.OpenOrCreate, FileAccess.Write, FileShare.ReadWrite))
            {
                using (StreamWriter sw = new StreamWriter(fs))
                {
                    ProcessXDK(input, sw);
                }
            }
        }

        public static void ConvertToVB(string input, string outputFile, int effectCount)
        {
            if (File.Exists(outputFile))
            {
                File.Delete(outputFile);
            }
            using (FileStream fs = File.Open(outputFile, FileMode.OpenOrCreate, FileAccess.Write, FileShare.ReadWrite))
            {
                using (StreamWriter sw = new StreamWriter(fs))
                {
                    ProcessVB(input, sw);
                }
            }
        }

        public static void ConvertToUnity(string input, string outputFile, int effectCount)
        {
            if (File.Exists(outputFile))
            {
                File.Delete(outputFile);
            }
            using (FileStream fs = File.Open(outputFile, FileMode.OpenOrCreate, FileAccess.Write, FileShare.ReadWrite))
            {
                using (StreamWriter sw = new StreamWriter(fs))
                {
                    ProcessUnity(input, sw);
                }
            }
        }
        public static void ConvertToUE4(string input, string headerFile, string implementationFile, string buttonHeader, string buttonImplementation, int buttonCount, string gameName)
        {
            if (File.Exists(headerFile))
            {
                File.Delete(headerFile);
            }
            using (FileStream fs = File.Open(headerFile, FileMode.OpenOrCreate, FileAccess.Write, FileShare.ReadWrite))
            {
                using (StreamWriter sw = new StreamWriter(fs))
                {
                    ProcessUE4Header(input, sw, gameName);
                }
            }

            if (File.Exists(implementationFile))
            {
                File.Delete(implementationFile);
            }
            using (FileStream fs = File.Open(implementationFile, FileMode.OpenOrCreate, FileAccess.Write, FileShare.ReadWrite))
            {
                using (StreamWriter sw = new StreamWriter(fs))
                {
                    ProcessUE4Implementation(input, sw, gameName);
                }
            }

            if (File.Exists(buttonHeader))
            {
                File.Delete(buttonHeader);
            }
            using (FileStream fs = File.Open(buttonHeader, FileMode.OpenOrCreate, FileAccess.Write, FileShare.ReadWrite))
            {
                using (StreamWriter sw = new StreamWriter(fs))
                {
                    ProcessUE4ButtonHeader(input, sw, gameName);
                }
            }

            if (File.Exists(buttonImplementation))
            {
                File.Delete(buttonImplementation);
            }
            using (FileStream fs = File.Open(buttonImplementation, FileMode.OpenOrCreate, FileAccess.Write, FileShare.ReadWrite))
            {
                using (StreamWriter sw = new StreamWriter(fs))
                {
                    ProcessUE4ButtonImplementation(input, sw, gameName, buttonCount);
                }
            }
        }

        public static void ConvertToJava(string input, string outputFile)
        {
            if (File.Exists(outputFile))
            {
                File.Delete(outputFile);
            }
            using (FileStream fs = File.Open(outputFile, FileMode.OpenOrCreate, FileAccess.Write, FileShare.ReadWrite))
            {
                using (StreamWriter sw = new StreamWriter(fs))
                {
                    ProcessJava(input, sw);
                }
            }
        }

        public static void ConvertToGodot(string input, string outputFile, int effectCount)
        {
            if (File.Exists(outputFile))
            {
                File.Delete(outputFile);
            }
            using (FileStream fs = File.Open(outputFile, FileMode.OpenOrCreate, FileAccess.Write, FileShare.ReadWrite))
            {
                using (StreamWriter sw = new StreamWriter(fs))
                {
                    ProcessGodot(input, sw, effectCount);
                }
            }
        }

        public static void ConvertToClickTeamFusion(string input, string outputFile, int effectCount)
        {
            if (File.Exists(outputFile))
            {
                File.Delete(outputFile);
            }
            using (FileStream fs = File.Open(outputFile, FileMode.OpenOrCreate, FileAccess.Write, FileShare.ReadWrite))
            {
                using (StreamWriter sw = new StreamWriter(fs))
                {
                    ProcessCTF(input, sw, effectCount);
                }
            }
        }

        static void ProcessCTF(string filename, StreamWriter sw, int effectCount)
        {
            try
            {
                using (FileStream fs = File.Open(filename, FileMode.Open, FileAccess.Read, FileShare.ReadWrite))
                {
                    using (StreamReader sr = new StreamReader(fs))
                    {
                        string line;
                        int tabs = 0;
                        int parens = 0;
                        bool hasIf = false;
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
                            if (line.StartsWith("#"))
                            {
                                continue;
                            }

                            const string TOKEN_FOR = "for (";
                            if (line.Trim().StartsWith(TOKEN_FOR))
                            {
                                string[] parts = line.Trim().Substring(TOKEN_FOR.Length).Split(";".ToCharArray());
                                string fieldName = GetAssignmentFieldName(parts[0].Trim());
                                string fieldVal = GetAssignmentFieldValue(parts[0].Trim());
                                string condition = GetConditionFieldValue(parts[1].Trim(), 2);
                                string increment = GetIncrementValue(parts[2].Trim());
                                WriteTabs(sw, tabs);
                                sw.WriteLine("for {0}={1},{2},{3} do",
                                    fieldName, fieldVal,
                                    condition,
                                    increment);
                                tabs++;
                                continue;
                            }

                            foreach (char c in line)
                            {
                                if (c == '{')
                                {
                                    ++tabs;
                                }
                                if (c == '}')
                                {
                                    --tabs;
                                }
                            }
                            if (line.Trim() == "{")
                            {
                                continue;
                            }
                            if (line.Trim() == "}")
                            {
                                WriteTabs(sw, tabs);
                                sw.WriteLine("end");
                                continue;
                            }

                            if (line.Trim().StartsWith("if"))
                            {
                                hasIf = true;
                                parens = 0;
                            }

                            foreach (char c in line)
                            {
                                if (c == '(')
                                {
                                    ++parens;
                                }
                                if (c == ')')
                                {
                                    --parens;
                                }
                            }

                            if (Replace(ref line, "const char*", string.Empty))
                            {
                            }

                            if (Replace(ref line, "int ", string.Empty))
                            {
                            }

                            if (Replace(ref line, "(float)", string.Empty))
                            {
                            }

                            if (Replace(ref line, "float ", string.Empty))
                            {
                            }

                            if (Replace(ref line, "MATH_PI", "math.pi"))
                            {
                            }

                            if (Replace(ref line, "cos(", "math.cos("))
                            {
                            }

                            if (Replace(ref line, "sin(", "math.sin("))
                            {
                            }

                            if (Replace(ref line, "floor(", "math.floor("))
                            {
                            }

                            if (Replace(ref line, "fabsf", "math.abs"))
                            {
                            }

                            if (Replace(ref line, "Math.random()", "math.random()"))
                            {
                            }

                            if (line.Contains("+="))
                            {
                                string[] parts = line.Trim().Split("+=".ToCharArray());
                                if (parts.Length > 2)
                                {
                                    line = string.Format("{0} = {0} + {1}",
                                        parts[0].Trim(),
                                        parts[2].Trim());
                                }
                            }

                            if (Replace(ref line, "(int)EChromaSDKDeviceEnum::", "EChromaSDKDeviceEnum."))
                            {
                            }

                            if (Replace(ref line, "(int)EChromaSDKDevice1DEnum::", "EChromaSDKDevice1DEnum."))
                            {
                            }

                            if (Replace(ref line, "(int)EChromaSDKDevice2DEnum::", "EChromaSDKDevice2DEnum."))
                            {
                            }

                            if (Replace(ref line, "Keyboard::RZKEY::", "Keyboard.RZKEY."))
                            {
                            }

                            if (ConvertFloatArgumentsRemoveSuffix(ref line))
                            {
                            }

                            if (Replace(ref line, "void ShowEffect", "function ShowEffect"))
                            {
                            }

                            if (Replace(ref line, "\"animations/", "\"Animations/"))
                            {
                            }

                            if (Replace(ref line, "ChromaAnimationAPI::", "ChromaAnimationAPI."))
                            {
                            }

                            if (Replace(ref line, ");", ")"))
                            {
                            }

                            if (Replace(ref line, "//", "--"))
                            {
                            }

                            if (line.Contains("&&"))
                            {
                                line = line.Replace("&&", "and");
                            }

                            if (line.Contains("||"))
                            {
                                line = line.Replace("||", "or");
                            }

                            while (line.Contains("<<"))
                            {
                                const string token = "<<";
                                int indexOp = line.IndexOf(token);
                                string part1 = line.Substring(0, indexOp).Trim();
                                string part2 = line.Substring(indexOp + token.Length).Trim();
                                int indexArg1 = part1.LastIndexOfAny(new char[] { ' ', '('});
                                if (indexArg1 >= 0)
                                {
                                    ++indexArg1; //trim char
                                    string arg1 = part1.Substring(indexArg1).Trim();
                                    string pre1 = part1.Substring(0, indexArg1);
                                    int indexArg2 = part2.IndexOfAny(new char[] { ' ', ')' });
                                    if (indexArg2 > 0)
                                    {
                                        string arg2 = part2.Substring(0, indexArg2).Trim();
                                        string post2 = part2.Substring(arg2.Length);
                                        string newline = pre1 + string.Format("bit.lshift({0},{1})", arg1, arg2) + post2;
                                        line = newline;
                                    }
                                }
                            }

                            if (line.Contains(">>"))
                            {
                                const string token = ">>";
                                int indexOp = line.IndexOf(token);
                                string part1 = line.Substring(0, indexOp).Trim();
                                string part2 = line.Substring(indexOp + token.Length).Trim();
                                int indexArg1 = part1.LastIndexOfAny(new char[] { ' ', '(' });
                                if (indexArg1 >= 0)
                                {
                                    ++indexArg1; //trim char
                                    string arg1 = part1.Substring(indexArg1).Trim();
                                    string pre1 = part1.Substring(0, indexArg1);
                                    int indexArg2 = part2.IndexOfAny(new char[] { ' ', ')' });
                                    if (indexArg2 > 0)
                                    {
                                        string arg2 = part2.Substring(0, indexArg2).Trim();
                                        string post2 = part2.Substring(arg2.Length);
                                        string newline = pre1 + string.Format("bit.lshift({0},{1})", arg1, arg2) + post2;
                                        line = newline;
                                    }
                                }
                            }

                            if (line.Contains("|"))
                            {
                                const string token = "|";
                                int indexOp = line.IndexOf(token);
                                string part1 = line.Substring(0, indexOp).Trim();
                                string part2 = line.Substring(indexOp + token.Length).Trim();
                                int indexArg1 = part1.LastIndexOf("=");
                                if (indexArg1 >= 0)
                                {
                                    ++indexArg1; //trim char
                                    string arg1 = part1.Substring(indexArg1).Trim();
                                    string pre1 = part1.Substring(0, indexArg1);
                                    int indexArg2 = part2.IndexOfAny(new char[] { ' ', ')' });
                                    if (indexArg2 <= 0)
                                    {
                                        indexArg2 = part2.Length - 1;
                                    }

                                    string arg2 = part2.Substring(0, indexArg2).Trim();
                                    string post2 = part2.Substring(arg2.Length);
                                    string newline = pre1.Trim() + " " + string.Format("bit.bor({0},{1})", arg1, arg2) + post2;
                                    line = newline;
                                }
                            }
                            
                            if (line.Contains(";"))
                            {
                                line = line.Replace(";", string.Empty);
                            }

                            if (line.Contains("{"))
                            {
                                line = line.Replace("{", string.Empty);
                            }

                            if (hasIf && parens == 0)
                            {
                                hasIf = false;
                                line += "then";
                            }

                            WriteTabs(sw, tabs);
                            sw.WriteLine(line);
                        }
                        while (line != null);

                        for (int effect = 1; effect <= effectCount; ++effect)
                        {
                            sw.WriteLine("\tif buttonName == \"Button {0}\" then", effect);
                            sw.WriteLine("\t\tShowEffect{0}()", effect);
                            sw.WriteLine("\t\tShowEffect{0}ChromaLink()", effect);
                            sw.WriteLine("\t\tShowEffect{0}Headset()", effect);
                            sw.WriteLine("\t\tShowEffect{0}Keypad()", effect);
                            sw.WriteLine("\t\tShowEffect{0}Mouse()", effect);
                            sw.WriteLine("\t\tShowEffect{0}Mousepad()", effect);
                            sw.WriteLine("\tend");
                        }
                    }
                }
            }
            catch (Exception)
            {
                Console.Error.WriteLine("Failed to process file: {0}", filename);
            }
        }
    }
}
