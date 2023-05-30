// big O notation for arrays

// Searching O(n) - Linear
// Accessing O(1) - constant
// Insertion O(n) / O(1) for end
// Removal O(n) / O(1) for end

// Push - O(1)
// Pop - O(1)
// shift - O(n)
// unshift - O(n)
// concact - O(n)
// slice - O(n)
// splice - O(n)
// sort - O(n * log n)
// foreach / map / filter / reduce - O(n)


// For In loops vs For loops

var a = []; // Create a new empty array.
a[5] = 5;   // Perfectly legal JavaScript that resizes the array.

for (var i = 0; i < a.length; i++) {
    // Iterate over numeric indexes from 0 to 5, as everyone expects.
    console.log(a[i]);
}

/* Will display:
   undefined
   undefined
   undefined
   undefined
   undefined
   5
*/

var a = [];
a[5] = 5;
for (var x in a) {
    // Shows only the explicitly set index of "5", and ignores 0-4
    console.log(x);
}

/* Will display:
   5
*/