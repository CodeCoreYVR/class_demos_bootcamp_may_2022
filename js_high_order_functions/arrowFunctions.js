function add(a, b) {
    return a + b;
}

const adder = (a, b) => a + b;

console.log(adder(1, 2));

function flip(fn) {
    return function (a, b) {
        return fn(b, a)
    }
}
flip(add)

const flip = fn => {
    return (a, b) => {
        return fn(b, a)
    }
}


function V(x) {
    return function (y) {
        return function (z) {
            return z(x)(y);
        }
    }
}
// step 1
const V = x => {
    return function (y) {
        return function (z) {
            return z(x)(y);
        }
    }
}
// step 2
const V = x => {
    return y => {
        return function (z) {
            return z(x)(y);
        }
    }
}
// step 3
const V = x => {
    return y => {
        return z => {
            return z(x)(y);
        }
    }
}
// step 4
const V = x => {
    return y => {
        return z => z(x)(y);
    }
}
// step 5
const V = x => {
    return y => z => z(x)(y);
}
// step 6
const V = x => y => z => z(x)(y);


