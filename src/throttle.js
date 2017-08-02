export const throttle = (fn, threshold, ctx) => {
    let awaiting = false;
    let timeout;

    return function(...args) {
        ctx = ctx || this;
        if (!awaiting) {
            fn.apply(ctx, args);
            awaiting = true;
            setTimeout(() => awaiting = false, threshold);
        }
    }
}

export default throttle;