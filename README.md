# Tuna-JSLinq [![Build Status](https://travis-ci.org/Baxterboom/Tuna-JSLinq.svg?branch=master)](https://travis-ci.org/Baxterboom/Tuna-JSLinq)

Linq methods for JavaScript/TypeScript for working with arrays

This simple extension works with array of complex objects as well as simple arrays of strings etc. The whole thing is written in TypeScript but also usable in JavaScript

## Advantages

This extension is lightweight and fast and you can use your Lambda-Expression-Syntax to work with arrays. The methods are mostly identically to .NET methods.

As expressions you can use the normal Function-Syntax:

```javascript
//example: simple array
var array = ["Min", "Max"]

var result = array.Where(function(x){
	return x == "Max";
});

console.log(result, "is", ["Max"]);

```
```javascript
//example: array of objects
var array = [{name:"Min"}, {name:"Max"}];

var result = array.Where(function(x){
	return x.name == "Max";
});

console.log(result, "is", [{name: "Max"}]);
```
```javascript
//with null/undefined check
var array = null;

var result = JSLinq(array).Where(function(x){
	return x == "Max";
});

console.log(result, "is", []);
```

### Conclusion

* Works with multiple Browsers (even IE)
* Angular Support (event directly in Views if using Strings as Expression-Syntax)
* Lightweight
* Fast
* Syntax from .NET
* Build on top of array-prototype and no changes in code are required for usage
* Integrates seamlessly into the project
* TypeScript definitions

## Getting Started

### Install using NPM

```
npm install Tuna-JSLinq
```

### Install using Bower

```
bower install Tuna-JSLinq
```

### Using JavaScript

Include this line in your project

```html
<script type="text/javascript" src="tuna-JSLinq.js"></script>
```

### Using TypeScript

Use

```
import "Tuna-JSLinq";
```

or 

```html
<script type="text/javascript" src="Tuna-JSLinq.js"></script>
```

to import the scripts and optionally (if you are not using npm) install `@types/Tuna-JSLinq` to also get tooling support.

## Usage / Docs / API

[Open this link in browser for Api reference](./docs/interfaces/_iarray_.array.html)

```
## Author
[Baxterboom](https://github.com/Baxterboom, https://bitbucket.org/Baxterboom/))
```