# Cachenow

`cachenow` is a package to easily cache any type of data for a specific time. It works like a `Map` with a specific TTL for each entry.

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

## Todo

* [x] Delete key from cache
* [ ] Add option to save cache in a specific file for development. It's not recommended for production.
  * `new CacheNow(5 * 1000, 'storage.json')`
