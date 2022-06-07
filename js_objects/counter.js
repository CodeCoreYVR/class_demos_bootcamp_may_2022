const counter = {
    // this
    currentCount: 0,
    step: 1,
    set(defaultValue) {
        this.currentCount = defaultValue
    },
    inc() {
        this.currentCount += this.step
        return this
    },
    dec() {
        this.currentCount -= this.step
        return this
    },
    now() {
        console.log(this.currentCount)
    },
    setStep(num) {
        this.step = num;
    }
}

// counter.set(100);

// counter.now();

// counter.inc();

// counter.now();

// counter.dec();
// counter.now();

counter.setStep(20);
counter.inc();
counter.now();


counter.inc().inc().dec().dec().now();
