# font-weight-from-name

> ⚖ Get the font weight number from common names

## Usage

```js
import fontWeight from 'font-weight-from-name'

console.log(fontWeight('semibold')) // > 600
console.log(fontWeight('demi bold')) // > 600
// non-alpha characters are tossed, and capitalization is ignored
console.log(fontWeight('dEMi__ --- bOLD?!😉')) // > 600
```

## Currently supported names/weights

⭐ Remember, capitalization and spacing _doesn't matter_.

Weight | Names
------ | -----
100    | hairline, thin
200    | extralight, ultralight
300    | light
400    | normal, regular
500    | medium
600    | demibold, semibold
700    | bold
800    | extrabold, ultrabold
900    | black, heavy

Did we miss something?  [Create an issue](https://github.com/gsandf/font-weight-from-name/issues/new) and let's get it added.


## Install

With [Yarn](https://yarnpkg.com/en/) _or_ [npm](https://npmjs.org/) installed, run:

```bash
yarn add font-weight-from-name

# ...or, if using `npm`
npm install font-weight-from-name
```

## Acknowledgments

`font-weight-from-name` was inspired by [`dan-gamble/postcss-font-weight-names`](https://github.com/dan-gamble/postcss-font-weight-names)

## License

MIT
