function isPalindrome(string='') {
    let normalizedStr = '';
    for (let char of string) {
        char = char.toLowerCase();
        if ((char >= 'a' && char <= 'z') || (char >= '0' && char <= '9')) {
            normalizedStr += char;
        }
    }
    let reversedStr = normalizedStr.split('').reverse().join('');
    return normalizedStr === reversedStr;
}

console.log(isPalindrome("A man, a plan, a canal, Panama"));