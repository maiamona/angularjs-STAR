angular.module("ngMessages").directive("uiAlert", function () {
    return{
// template: "<div>uiAlert mona</div>"
templateUrl: "js/View/alert.html",
replace: true,
//restrict: "A"//apenas ao atributo do elemento
// restrict: "E"
restrict: "AE",
scope: {
//    topic: "@title"
title: "@",
// errado: "=message"
// message: "="
},
transclude: true
    };
});