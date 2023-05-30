import { Observable, of, from, Subject } from "rxjs";
import { map, tap } from "rxjs/operators";
import { BehaviorSubject } from "rxjs";

const obs1 = new Observable((obs) => {
  obs.next("soccer");
  obs.next("baseball");
});
obs1.subscribe((value) => {
  console.log(value);
});

of(1, 2, 3).subscribe(console.log);

from([
  { name: "Bob", salary: 10000 },
  { name: "Rob", salary: 5000 },
  { name: "Nas", salary: 8000 },
])
  .pipe(
    tap((n) => console.log("account owner: ", n.name)),
    map((v) => v.salary)
  )
  .subscribe(console.log);

const array: number[] = [7, 9, 5];
const observable = from(array);
observable.subscribe((value) => {
  console.log(value);
});

const obs$ = new Subject();
obs$.subscribe(console.log);

let count = 0;
let timer = setInterval(() => {
  obs$.next(++count);
}, 1000);

setTimeout(() => {
  clearInterval(timer);
}, 5000);

const obs$2 = new BehaviorSubject({ coupon: "HAPPY" });
const subscription = obs$2.subscribe((v) => {
  console.log("coupon: ", v);
});
obs$2.next({ coupon: "JOY" });
subscription.unsubscribe();

