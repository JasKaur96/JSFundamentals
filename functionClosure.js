function counter() {
    var count = 0;
    function increaseCounter() {
        return count += 1;
    };
    return increaseCounter;
}

var counter = counter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
console.log(counter()); // 4