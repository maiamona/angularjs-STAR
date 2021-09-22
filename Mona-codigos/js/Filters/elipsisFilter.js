angular.module("ngMessages").filter("ellipsis", function () {// onde ocorre a injeção de dependencias - como parametros na function()
    return function (input, size) {
    //    console.log(input);
    // if (size === undefined) {
    //    size = 2; 
    // }
    if (input.length <= size) return input;
    // var output = input.substring(0, size) + "..."
    var output = input.substring(0, (size || 3)) + "..."
    
    return output;
    //    return input;
    };
});