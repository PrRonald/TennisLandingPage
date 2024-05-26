
export const SplitString = (string) => {
    if (!string) {
        console.error("the variable is " + typeof string)
    }
    else {
        const splitIndex = string.indexOf(' ');

        if (splitIndex !== -1) {
            const phrase1 = string.slice(0, splitIndex);
            const phrase2 = string.slice(splitIndex + 1);
            return [phrase1, phrase2];
        } else {
            // If no space character found, return the whole string as the first phrase and null for the second phrase
            return [string, null];
        }
    }
}
