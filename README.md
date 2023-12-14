
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


## License

[MIT](https://choosealicense.com/licenses/mit/)

