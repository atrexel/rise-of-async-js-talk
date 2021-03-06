const { Observable } = require('rxjs');

Observable.of(1, 2, 3)
  .mergeMap(n => Observable.of(n * 2))
  .subscribe(x => console.log(x));

// 2
// 4
// 6
