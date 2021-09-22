angular.module("ngMessages").run(function ($templateCache) {
    // console.log(new Date());
    $templateCache.put("View/accordion.html", '<div class="ui-accordion-title" ng-click="open()">{{message}}</div><div class="ui-accordion-content" ng-show="isOpened" ng-transclude></div>');
});

angular.module("ngMessages").directive("uiAccordions", function () {
return{
controller: function ($scope, $element, $attrs) {
    // this.helloworld = function () {
    //     console.log("helloworld");
    // };
    var accordions = [];
    this.registerAccordion = function (accordion) {
        // console.log(accordion.$id);
        accordions.push(accordion);
    };
    this.closeAll = function () {
     accordions.forEach(function (accordion) {
        accordion.isOpened = false; 
     });  
    }
}
}
});
angular.module("ngMessages").directive("uiAccordion", function () {
    return{
templateUrl: "View/accordion.html",
transclude: true,
scope:{
    message: "@"
},
require: "^uiAccordions",
link: function (scope, element, attrs, ctrl) {
    // ctrl.helloworld();
    ctrl.registerAccordion(scope);
    scope.open = function () {
        ctrl.closeAll();
        // scope.isOpened=!scope.isOpened;
        scope.isOpened = true;
    };
}
    };
});

