import { ProfanityEngine } from "@coffeeandfun/google-profanity-words";

export const isClean = async (text) => {
    const profanity = new ProfanityEngine();
    const hasCurseWords = await profanity.hasCurseWords(text);
    return hasCurseWords;
};