function sum(a) {
    // Sum was initialized with the value of a[0], and it was adding a[0] again in the for loop
    // An empty array test input would also have caused issues
    var sum = 0;
    for(var i = 0; i < a.length; i++) {
        sum += a[i];
    }
    return sum;
}
