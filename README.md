# Cachenow

`cachenow` is package to easily cache any data for a specifiy time

## Install

```sh
npm install cachenow
```

## Usage

```javascript
import CacheNow from 'cachenow';

const animalWeights = new CacheNow<number>(40 * 1000);

animalWeights.set('dog', 50); // Key = Value

animalWeights.get('dog') // returns 50

setTimeout(() => {
  animalWeights.get('dog') // returns null
}, 50 * 1000)
```