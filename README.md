# last-of-array
Return the last element in an array. Is tested.

## Overview

The module can be used when you need a function that returns the last element of an array

## Installing 

```javascript
npm i last-of-array --save-dev
```

## Usage

Simply require the `last-of-array` module. The export function can be used in any module you desire:

```javascript
const last = require('last-of-array');

last([1,100,1000); // 1
last([['Ahad', 12, 10000], 12, 'Three', true]); // ['Ahad', 12, 10000]

```

## TODO

* add more tests

## Tests

`npm test`

Also supports the `standards` JavaScript library, configure as follows:

```JSON
"standard": {
    "ignore": [
      "/test/test.js",
      "app.js"
    ]
  }
```

```javascript
last([1,2,3,4,5]);                      // ==> returns a number, 5
last([[1,2,3,4,5,'Ahad']);              // ==> returns a string, 'Ahad'
last([[13,2234,32,43,5.2223,1,[2e10]])  // ==> returns only the last element, an array: 2e10
```

## Related Modules

* [is-even-integer](https://github.com/ahadb/is-even-integer)
* [first-of-array](https://github.com/ahadb/first-of-array)

## Contributing

Feel free to file an issue or bug.
