import leoProfanity from "leo-profanity";

export const isClean = (text) => {
    return leoProfanity.check(text);
};
