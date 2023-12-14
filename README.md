
# classFix

Utility designed to facilitate the manipulation and management of class names in React environments.
## Installation

Install classfix with npm

```bash
npm install classfix
```
## Usage Valid

```javascript
import classFix from 'classfix'

function App() {
  return <Component className={classFix(["text-md", "xl:text-md", "2xl:text-xl"])} />
}
```

## Usage Invalid

```javascript
import classFix from 'classfix'

function App() {
  return <Component className={classFix(["class1", "class with space", "class3"])} />
}
```
## Screenshots

![Usage Screenshot](https://i.imgur.com/dOhMtXV.png)

### Using Tailwind CSS IntelliSense
The main use has been with [React](https://react.dev/) and also with [Tailwind](https://tailwindcss.com/).

We recommend the use of the extension [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
![CSS IntelliSense](https://imgur.com/yzg6HqP.jpg)

## License

[MIT](https://choosealicense.com/licenses/mit/)

