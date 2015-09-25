### ls-config
A quick and dirty global config tool for sharing config between external modules  

### Installation
```
npm install ls-config --save
```

### Usage
**NB:** Type definitions are provided for TypeScript 1.6+
```javascript
// TypeScript
import * as cfg from 'ls-config';

// JavaScript
var cfg = require('ls-config');

cfg.config('my-setting', 42); // Returns void

cfg.config('my-setting') // Returns 42
```
  
`ls-config` in any other external module will share this config.
  
### License
MIT