import { setTimeout, clearTimeout } from 'timers';

export const Waiter = (func) => {
    let timer = null;

    function start() {
        const params = Array.prototype.slice.call(arguments);

        clearTimeout(timer);

        timer = setTimeout(function () {
            func.apply(this, params);
        }, 700);
    }

    function stop() {
        clearTimeout(timer);
    }

    return {
        start,
        stop,
    };
};
