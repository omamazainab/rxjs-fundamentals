import { fromEvent, interval, merge, NEVER } from 'rxjs';
import { setCount, startButton, pauseButton } from './utilities';

const start$ = fromEvent(startButton, 'click');
const pause$ = fromEvent(pauseButton, 'click');
let interval$;


start$.subscribe(()=>{
    interval$ = interval(1000).subscribe(setCount)
})

pause$.subscribe(()=>{
    interval$.unsubscribe()
})