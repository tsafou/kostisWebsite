/**
 * Created by Tsafou on 09/06/2016.
 */
angular.module('kostisWebsite').directive('showScroll', showScroll);

showScroll.$inject = [];

function showScroll() {
    return function (scope, element, attrs) {

        //angular.element(element).bind("scroll", function () {

        element.bind("scroll", function () {

            var scrollPosition = element[0].scrollTop;

            if (scrollPosition < 100) {
                scope.showArrow = false;
            }
            else {
                scope.showArrow = true;
            }

            scope.$apply();
        });
    };
}