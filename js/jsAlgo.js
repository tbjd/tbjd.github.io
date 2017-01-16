/**
 * Created by brodeurtristan on 17-01-15.
 */
$(document).ready(function () {
    function reverseString(str) {
        return str.split('').reverse().join('');
    }

    function factorialize(num) {
        var fact = 1;
        for (var i = 1; i <= num; i++) {
            fact *= i;
        }
        return fact;
    }

    function palindrome(str) {

        str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

        var string = str.split('').reverse().join('');


        console.log(string);
        if (string === str)
            return true;
        else return false;
    }

    function findLongestWord(str) {
        var arrayOfStr = str.split(' ');
        var nbCharLongestWord = 0;
        for (var i = 0; i < arrayOfStr.length; i++) {
            if (arrayOfStr[i].length > nbCharLongestWord) {
                nbCharLongestWord = arrayOfStr[i].length;
            }
        }

        return nbCharLongestWord;
    }

    function titleCase(str) {
        return str.replace(/\w\S*/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    }

    function largestOfFour(arr) {
        var array = [];
        var bigNb = 0;
        for (var i = 0; i < arr.length; i++) {
            for (var j = 0; j < arr[i].length; j++) {
                if (arr[i][j] > bigNb) {
                    bigNb = arr[i][j];

                }

            }

            array.push(bigNb);
            bigNb = 0;
        }
        return array;
    }

    function confirmEnding(str, target) {
        var longueur = str.length;
        var longueurT = target.length;
        str = str.substr(longueur - longueurT);


        return str === target;
    }

    function repeatStringNumTimes(str, num) {
        var string = '';
        if (num < 0)return string;
        var arrayStr = [];
        for (var i = 0; i < num; i++) {
            arrayStr.push(str);
        }

        return arrayStr.join('');
    }

    function truncateString(str, num) {
        // Clear out that junk in your trunk
        if (str.length > num) {
            if (num <= 3) {
                str = str.slice(0, num);
                str = str + '...';
                return str;
            }
            str = str.slice(0, num - 3);
            str = str + '...';

            return str;
        }
        str = str.slice(0, num);
        return str;
    }

    function chunkArrayInGroups(arr, size) {
        var newT = [];
        var cpt = 0;
        for (var i = size; i <= arr.length; i++) {
            if (i % size === 0) {
                var temp = arr.slice(cpt, i);
                newT.push(temp);
            }
            cpt++;
        }
        if (arr.length % size !== 0) {
            var nbElementRestant = arr.length % size;
            var temp2 = arr.slice(arr.length - nbElementRestant);
            newT.push(temp2);
        }
        return newT;


    }

    function slasher(arr, howMany) {
        arr.splice(0, howMany);
        return arr;
    }

    function mutation(arr) {
        var b = false;
        var count = 0;
        var arr1 = arr[0].toLowerCase();
        var arr2 = arr[1].toLowerCase();
        for (var i = 0; i < arr2.length; i++) {
            if (arr1.indexOf(arr2[i]) > -1) {
                count++;
            }
        }
        if (count == arr2.length) {
            b = true;
        }
        return b;
    }

    function bouncer(arr) {
        // Don't show a false ID to this bouncer.
        return arr.filter(Boolean);
    }

    function destroyer(arr) {
        var elemToDestroy = [];
        for (var i = 1; i < arguments.length; i++) {
            elemToDestroy.push(arguments[i]);
        }

        var survived = arguments[0].filter(function (element, index) {
            var toReturn = true;

            for (var i = 0; i < elemToDestroy.length; i++) {
                if (element === elemToDestroy[i]) {
                    toReturn = false;
                }
            }
            return toReturn;

        });
        return survived;
    }

    function getIndexToIns(arr, num) {
        arr.sort(function (a, b) {
            return a - b;
        });
        var index = 1;
        for (i = 0; i < arr.length; i++) {
            if (arr[i] >= num) {
                num = index - 1;
                return num;
            }
            index++;
        }
        return index - 1;
    }

    function rot13(str) { // LBH QVQ VG!
        str = str.replace(/[a-zA-Z]/g, function (c) {
            return String.fromCharCode((c <= "Z" ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26);
        });
        return str;
    }

    function sumAll(arr) {
        var min = Math.min.apply(null, arr);
        var max = Math.max.apply(null, arr);
        var arr2 = [];
        var re;

        for (var i = min; i <= max; i++) {
            arr2.push(i);
        }

        arr2.reduce(function (a, b) {
            re = a + b;
            return re;
        });
        return re;
    }

    function diffArray(a1, a2) {
        var result = [];
        for (var i = 0; i < a1.length; i++) {
            if (a2.indexOf(a1[i]) === -1) {
                result.push(a1[i]);
            }
        }
        for (i = 0; i < a2.length; i++) {
            if (a1.indexOf(a2[i]) === -1) {
                result.push(a2[i]);
            }
        }
        return result;
    }

    function convertToRoman(num) {
        if (!num)
            return false;
        var digits = String(+num).split(""),
            key = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM",
                "", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC",
                "", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
            roman = "",
            i = 3;
        while (i--)
            roman = (key[+digits.pop() + (i * 10)] || "") + roman;
        return Array(+digits.join("") + 1).join("M") + roman;
    }

    function myReplace(str, before, after) {
        var b = before;
        var a = after;

        if (b[0].toUpperCase() == b[0]) {
            a = a.charAt(0).toUpperCase() + a.slice(1);
        }

        str = str.replace(b, a);
        return str;
    }

    function isVowelRegEx(char) {
        if (char.length == 1) {
            return /[aeiou]/.test(char);
        }
    }

    function translatePigLatin(str) {
        var ar = [];


        for (var i = 0; i < str.length; i++) {
            ar.push(str.substr(i, 1));
        }
        var v = 0;
        while (!isVowelRegEx(ar[v])) {
            v++;
        }

        if (v === 0) {
            ar.push("w");
            ar.push("a");
            ar.push("y");
        }
        else {
            for (var j = 0; j < v; j++) {
                var first = ar[0];
                ar.shift();
                ar.push(first);
            }
            ar.push("a");
            ar.push("y");
        }
        str = ar.join('');
        return str;
    }

    function pairElement(str) {

        var dnaarr = [];
        //var dnatot = [];

        for (var i = 0; i < str.length; i++) {
            var dna = [];
            dna.push(str[i]); //pushing current str[i]
            if (str[i].indexOf('G') === 0) {
                var a = dna.push('C');
            }
            if (str[i].indexOf('C') === 0) {
                var b = dna.push('G');
            }
            if (str[i].indexOf('A') === 0) {
                var c = dna.push('T');
            }
            if (str[i].indexOf('T') === 0) {
                var d = dna.push('A');
            }
            dnaarr.push(dna); //pushing the array dna to the main array dnaarr
        }


        return dnaarr;
    }

    function fearNotLetter(str) {
        var letter;
        var code = str.charCodeAt(0);

        for (var i = 1; i < str.length; i++) {
            ++code;
            if (str.charCodeAt(i) !== code) {
                letter = String.fromCharCode(code);
                return letter;
            }
        }
        return letter;
    }

    function booWho(bool) {
        var b = false;
        // What is the new fad diet for ghost developers? The Boolean.
        if (bool === false || bool === true)
            b = true;
        return b;
    }

    function uniteUnique(arr) {
        var finalArray = [];

        for (var i = 0; i < arguments.length; i++) {
            var arrayArguments = arguments[i];

            for (var j = 0; j < arrayArguments.length; j++) {
                var indexValue = arrayArguments[j];

                if (finalArray.indexOf(indexValue) < 0) {
                    finalArray.push(indexValue);
                }
            }
        }

        return finalArray;
    }

    function convertHTML(str) {


        var temp = str.split('');


        for (var i = 0; i < temp.length; i++) {
            switch (temp[i]) {
                case '<':
                    temp[i] = '&lt;';
                    break;
                case '&':
                    temp[i] = '&amp;';
                    break;
                case '>':
                    temp[i] = '&gt;';
                    break;
                case '"':
                    temp[i] = '&quot;';
                    break;
                case "'":
                    temp[i] = '&apos;';
                    break;
            }
        }

        temp = temp.join('');
        return temp;
    }

    function spinalCase(str) {
        // "It's such a fine line between stupid, and clever."
        // --David St. Hubbins

        var reg = /\s+|_+/g;
        str = str.replace(/([a-z])([A-Z])/g, '$1 $2');


        return str.replace(reg, '-').toLowerCase();
    }

    function sumFibs(num) {

        var prev = 0;
        var cur = 1;
        var res = 0;

        while (cur <= num) {
            if (cur % 2 !== 0) {
                res += cur;

            }
            var add = cur + prev;
            prev = cur;
            cur = add;
        }
        return res;
    }

    function sumPrimes(num) {

        var res = 0;

        function getMaxPrime(m) {
            var ar = [];
            var i;
            var j;
            var prime = [];
            for (i = 2; i <= m; ++i) {
                if (!ar[i]) {
                    prime.push(i);
                    for (j = i << 1; j <= m; j += i) {
                        ar[j] = true;
                    }
                }
            }
            return prime;
        }

        var prime = getMaxPrime(num);
        for (var p = 0; p < prime.length; p++) {
            res += prime[p];
        }

        return res;
    }

    function smallestCommons(arr) {

        arr.sort(function (a, b) {
            return b - a;
        });

        var arNew = [];
        for (var i = arr[0]; i >= arr[1]; i--) {
            arNew.push(i);
        }
        var q = 0;
        var count = 1;
        var k;

        do {
            q = arNew[0] * count * arNew[1];
            for (k = 2; k < arNew.length; k++) {
                if (q % arNew[k] !== 0) {
                    break;
                }
            }
            count++;
        } while (k !== arNew.length);
        return q;

    }

    function findElement(arr, func) {
        return arr.filter(func)[0];

    }

    function dropElements(arr, func) {
        // Drop them elements.

        var taille = arr.length;
        for (var i = 0; i <= taille; i++) {
            if (func(arr[0])) {
                break;

            } else arr.shift();
        }
        return arr;
    }

    function steamrollArray(arr) {
        // I'm a steamroller, baby
        var steamRollerArr = [];

        var f = function (ar) {
            if (!Array.isArray(ar)) {
                steamRollerArr.push(ar);
            } else {
                for (var j in ar) {
                    f(ar[j]);
                }
            }
        };
        arr.forEach(f);
        return steamRollerArr;
    }

    function binaryAgent(str) {

        str = str.split(' ');
        var puissance;
        var dec = 0;
        var sentence = '';

        for (var i = 0; i < str.length; i++) {
            for (var j = 0; j < str[i].length; j++) {
                if (str[i][j] == 1) {
                    puissance = Math.pow(2, +str[i].length - j - 1);
                    dec += puissance;
                }
            }
            sentence += (String.fromCharCode(dec));
            dec = 0;
        }
        return sentence;
    }

    function truthCheck(collection, pre) {
        // Is everyone being true?
        return collection.reduce(function (acc, next) {
            if (next[pre]) {
                return acc;
            }
            else {
                acc = false;
                return acc;
            }
        }, true);
    }

    function addTogether() {

        var verifNum = function (num) {
            if (typeof num !== 'number') {
                return undefined;
            }
            else return num;
        };

        if (arguments.length > 1) {
            var a = verifNum(arguments[0]);
            var b = verifNum(arguments[1]);
            if (a === undefined || b === undefined) {
                return undefined;
            } else return a + b;
        } else {
            var c = arguments[0];

            if (verifNum(c)) {
                return function (arg2) {
                    if (c === undefined || verifNum(arg2) === undefined) {
                        return undefined;
                    } else return c + arg2;
                };
            }
        }


    }

    function telephoneCheck(str) {
        // Good luck!
        var re = /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})$/;


        return re.test(str);

    }

    function sym(args) {
        var a = Array.prototype.slice.call(arguments);

        var diff = function (arg1, arg2) {
            function f(arg1, arg2) {
                return arg1.filter(function (i) {
                    return arg2.indexOf(i) === -1;
                });
            }

            return f(arg1, arg2).concat(f(arg2, arg1)).filter(function (i, idx, arr) {
                return arr.indexOf(i) === idx;
            });
        };
        return a.reduce(diff, []);
    }

    function checkCashRegister(price, cash, cid) {
        var argentArr = [
            {name: 'ONE HUNDRED', val: 100.00},
            {name: 'TWENTY', val: 20.00},
            {name: 'TEN', val: 10.00},
            {name: 'FIVE', val: 5.00},
            {name: 'ONE', val: 1.00},
            {name: 'QUARTER', val: 0.25},
            {name: 'DIME', val: 0.10},
            {name: 'NICKEL', val: 0.05},
            {name: 'PENNY', val: 0.01}
        ];
        var change = cash - price;

        //transform array to object
        var caisse = cid.reduce(function (acc, curr) {
            acc.total += curr[1];
            acc[curr[0]] = curr[1];
            return acc;
        }, {total: 0});

        if (caisse.total === change) {
            return 'Closed';
        }
        if (caisse.total < change) {
            return 'Insufficient Funds';
        }

        //Parcour argent tableau

        var Carray = argentArr.reduce(function (acc, curr) {
            var value = 0;

            while (caisse[curr.name] > 0 && change >= curr.val) {
                change -= curr.val;
                caisse[curr.name] -= curr.val;
                value += curr.val;

                change = Math.round(change * 100) / 100;
            }
            if (value > 0) {
                acc.push([curr.name, value]);
            }
            return acc;
        }, []);

        if (Carray.length < 1 || change > 0) {
            return 'Insufficient Funds';
        }
        return Carray;
    }

    function updateInventory(arr1, arr2) {
        var idx;
        var curInvName = [];
        var newInvName = [];

        arr1.map(function (item1) {
            return arr2.map(function (item2) {
                if (item1[1] === item2[1]) {
                    item1[0] = item1[0] + item2[0];
                }
            });
        });

        arr2.map(function (item) {
            newInvName.push(item[1]);
        });

        arr1.map(function (item) {
            curInvName.push(item[1]);
        });

        newInvName.map(function (item) {
            if (curInvName.indexOf(item) === -1) {
                idx = newInvName.indexOf(item);
                arr1.push(arr2[idx]);
            }
        });

        arr1.sort(function (curI, nexI) {
            return curI[1] > nexI[1] ? 1 : -1;
        });
        return arr1;
    }

    function permAlone(str) {


        var regex = /(.)\1+/g;

        var ar = str.split('');
        var permu = [];
        var temp;

        function swapper(idx1, idx2) {
            temp = ar[idx1];
            ar[idx1] = ar[idx2];
            ar[idx2] = temp;

        }

        function createPermutation(i) {
            if (i === 1) {
                permu.push(ar.join(''));
            } else {
                for (var j = 0; j != i; ++j) {
                    createPermutation(i - 1);
                    swapper(i % 2 ? 0 : j, i - 1);
                }
            }
        }

        createPermutation(ar.length);

        var filtrer = permu.filter(function (s) {
            return !s.match(regex);
        });

        return filtrer.length;
    }

    $('#btnReverseString').click(function () {
        var s = reverseString($('#stringToReverse').text());
        $('#reversedString').html(s);
    });
    $('#btnFacNumber').click(function () {
        var s = factorialize($('#numberToFac').text());
        $('#repFacto').html(s);
    });
    $('#btnPalindrome').click(function () {
        var s = palindrome($('#myPalindrome').text());
        $('#repPalindrome').html(s);
    });
    $('#btnLongestWordString').click(function () {
        var s = findLongestWord($('#myLongString').text());
        $('#repLongString').html(s);
    });
    $('#btnCaseSentence').click(function () {
        var s = titleCase($('#myTitleCaseString').text());
        $('#repTitleCaseString').html(s);
    });
    $('#btnLargestNumArray').click(function () {
        var s = largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
        $('#repLargestNumArray').html(s.toString());
    });
    $('#btnConfirmEnding').click(function () {
        var s = confirmEnding("Bastian", "n");
        $('#repConfirmEnding').html(s.toString());
    });
    $('#btnRepeatString').click(function () {
        var s = repeatStringNumTimes("abc", 3);
        $('#repRepeatString').html(s.toString());
    });
    $('#btnTruncateString').click(function () {
        var s = truncateString("A-tisket a-tasket A green and yellow basket", 11);
        $('#repTruncate').html(s.toString());
    });
    $('#btnMonkey').click(function () {
        var s = chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4);
        $('#repChunk').html(JSON.stringify(s));
    });
    $('#btnSlasherFlick').click(function () {
        var s = slasher([1, 2, "chicken", 3, "potatoes", "cheese", 4], 5);
        $('#repSlasher').html(JSON.stringify(s));
    });
    $('#btnMutations').click(function () {
        var s = mutation(["Mary", "Army"]);
        $('#repMutation').html(JSON.stringify(s));
    });
    $('#btnBounder').click(function () {
        var s = bouncer([7, "ate", "", false, 9]);
        $('#repFalsy').html(JSON.stringify(s));
    });
    $('#btnSeekDestroy').click(function () {
        var s = destroyer(["tree", "hamburger", 53], "tree", 53);
        $('#repSeekDestroy').html(JSON.stringify(s));
    });
    $('#btnBelong').click(function () {
        var s = getIndexToIns([10, 20, 30, 40, 50], 30);
        $('#repWhereBelong').html(JSON.stringify(s));
    });
    $('#btnCipher').click(function () {
        var s = rot13("SERR PBQR PNZC");
        $('#repCipher').html(JSON.stringify(s));
    });
    $('#btnSumNumRange').click(function () {
        var s = sumAll([5, 10]);
        $('#repSumNumRange').html(JSON.stringify(s));
    });
    $('#btnDiffTwoArrays').click(function () {
        var s = diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]);
        $('#repDiffTwoArr').html(JSON.stringify(s));
    });
    $('#btnRoman').click(function () {
        var s = convertToRoman(68);
        $('#repRoman').html(JSON.stringify(s));
    });
    $('#btnSearchReplace').click(function () {
        var s = myReplace("He is Sleeping on the couch", "Sleeping", "sitting");
        $('#repSearchReplace').html(JSON.stringify(s));
    });
    $('#btnPigLatin').click(function () {
        var s = translatePigLatin("glove");
        $('#repPig').html(JSON.stringify(s));
    });
    $('#btnDNA').click(function () {
        var s = pairElement("GCG");
        $('#repDNA').html(JSON.stringify(s));
    });
    $('#btnMissingLetters').click(function () {
        var s = fearNotLetter("abcdefghjklmno");
        $('#repMissingLetters').html(JSON.stringify(s));
    });
    $('#btnBooWho').click(function () {
        var s = booWho(NaN);
        $('#repBooWho').html(JSON.stringify(s));
    });
    $('#btnSortedUnion').click(function () {
        var s = uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
        $('#repSortedUnion').html(JSON.stringify(s));
    });
    $('#btnConvertHtlm').click(function () {
        var s = convertHTML("Dolce & Gabbana");
        $('#repConvertHtlm').html(JSON.stringify(s));
    });
    $('#btnSpinal').click(function () {
        var s = spinalCase('This Is Spinal Tap');
        $('#repSpinal').html(JSON.stringify(s));
    });
    $('#btnSumOdd').click(function () {
        var s = sumFibs(1000);
        $('#repSumFibo').html(JSON.stringify(s));
    });
    $('#btnSumPrime').click(function () {
        var s = sumPrimes(977);
        $('#repSumPrime').html(JSON.stringify(s));
    });
    $('#btnSmallestCommonMultiple').click(function () {
        smallestCommons([1, 13]);
        $('#repSmallestCommonMul').html(JSON.stringify(s));
    });
    $('#btnFindersKeepers').click(function () {
        var s = findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });
        $('#repFinderKeeper').html(JSON.stringify(s));
    });
    $('#btnDropIt').click(function () {
        var s = dropElements([1, 2, 3], function(n) {return n < 3; });
        $('#repDropIt').html(JSON.stringify(s));
    });
    $('#btnSteamroller').click(function () {
        var s = steamrollArray([1, [2], [3, [[4]]]]);
        $('#repSteamRoller').html(JSON.stringify(s));
    });
    $('#btnBinaryAgents').click(function () {
        var s = binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
        $('#repBinaryAgent').html(JSON.stringify(s));
    });
    $('#btnEverythingTrue').click(function () {
        var s = truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age");
        $('#repEverythingTrue').html(JSON.stringify(s));
    });
    $('#btnArgumentsOptional').click(function () {
        var s = addTogether(("http://bit.ly/"));
        $('#repArgumentsOp').html(JSON.stringify(s));
    });
    $('#btnUsPhone').click(function () {
        var s = telephoneCheck("555-555-5555");
        $('#repUsTel').html(JSON.stringify(s));
    });
    $('#btnSymDiff').click(function () {
        var s = sym([1, 2, 5], [2, 3, 5], [3, 4, 5]);
        $('#repSymmetricDiff').html(JSON.stringify(s));
    });
    $('#btnExactChange').click(function () {
        var s = checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
        $('#repExactChange').html(JSON.stringify(s));
    });
    $('#btnNoRepeatsPlease').click(function () {
        var s = permAlone('aab');
        $('#repNoRepeat').html(JSON.stringify(s));
    });


});
