/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    let old_array = numbers;
    let new_array: number[] = [];
    if (old_array.length == 0) return old_array;
    else if (old_array.length == 1) {
        new_array[0] = old_array[0];
        new_array[1] = old_array[0];
        return new_array;
    } else {
        new_array[0] = old_array[0];
        new_array[1] = old_array[old_array.length - 1];

        return new_array;
    }
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    let tripled = numbers.map((num: number): number => num * 3);
    return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    let stringint = numbers.map((num: string): string =>
        Number.isNaN(Number(num)) ? (num = "0") : num,
    );
    let stringint2 = stringint.map((num: string): number => Number(num));
    return stringint2;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    let new_string = amounts.map((amount: string): string =>
        amount.includes("$") ? (amount = amount.substring(1)) : amount,
    );
    let stringint = new_string.map((num: string): string =>
        Number.isNaN(Number(num)) ? (num = "0") : num,
    );
    let stringint2 = stringint.map((num: string): number => Number(num));
    return stringint2;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    let old_string = messages.filter(
        (message: string): boolean => !message.includes("?"),
    );
    let new_string = old_string.map((message: string): string =>
        message.includes("!") ? (message = message.toUpperCase()) : message,
    );
    return new_string;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    let new_words = words.filter((word: string): boolean => word.length < 4);
    let num = new_words.length;
    return num;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    if (colors.length == 0) return true;
    let color_check = colors.filter((color: string): boolean => color != "red");
    color_check = color_check.filter(
        (color: string): boolean => color != "blue",
    );
    color_check = color_check.filter(
        (color: string): boolean => color != "green",
    );
    if (color_check.length == 0) return true;
    return false;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length == 0) return "0=0";
    let total = addends.reduce(
        (currentTotal: number, num: number) => currentTotal + num,
        0,
    );
    let stringTotal = total.toString() + "=";
    let math = addends.join("+");
    let answer = stringTotal + math;

    return answer;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    let values2 = [...values];
    let negativeFirst = 0;
    let arraySlice = [];
    let total = 0;
    let anyNegatives = values.some((value: number): boolean => value < 0);
    if (anyNegatives) {
        negativeFirst = values.findIndex((value: number): boolean => value < 0);
        arraySlice = values.slice(0, negativeFirst);
        total = arraySlice.reduce(
            (currentTotal: number, num: number) => currentTotal + num,
            0,
        );
        values2.splice(negativeFirst + 1, 0, total);
    } else {
        total = values.reduce(
            (currentTotal: number, num: number) => currentTotal + num,
            0,
        );
        values2.splice(values2.length, 0, total);
    }
    return values2;
}
