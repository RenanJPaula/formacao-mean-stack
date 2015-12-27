var a;
a = 2;
console.log(a);

function hoistingExp() {
    var a;
    console.log(a);
    a = 3;
    console.log(a);
}

hoistingExp();
