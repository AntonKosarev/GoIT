var x = prompt("base?", '');
var n = prompt("exponent?", '');


/*Возвращает x в степени n, только для натуральных n*/
var pow = function(x,n) {
    var result = 1;
    var otrResult;
    if (n >= 0) {
        for (var i = 0; i < n; i++) {
            result *= x;
        }
        return result;
    }

    for (var k = 0; k > n; k--) {
        result *= x;
    }
    otrResult = 1 / result;
    return otrResult;
};

console.log( pow(x,n) );

module.imports = pow;