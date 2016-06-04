/**
 * Created by Tsafou on 04/06/2016.
 */
angular.module('kostisWebsite').controller('mainController', mainController);

mainController.$inject = ['$mdSidenav', '$http', '$timeout', '$interval'];

function mainController($mdSidenav, $http, $timeout, $interval) {
    var vm = this;

    vm.init = true;
    vm.sidenavIsOpen = false;
    vm.countDown = 3;
    vm.showStart = true;

    vm.menuItems = [
        {
            "name": "Home",
            "url": "home"
        },
        {
            "name": "About",
            "url": "about"
        },
        {
            "name": "Skills",
            "url": "skills"
        }
    ];

    vm.startApp = function () {
        vm.showMenuButton = true;
        vm.showStart = false;
        var stop;

        stop = $interval(function () {
            if (vm.countDown > 0) {
                vm.countDown -= 1;
            }
            else {
                $interval.cancel(stop);
                stop = undefined;
                vm.init = false;
            }
        }, 1000);


    };
    vm.openSidebar = function () {
        vm.sidenavIsOpen = true;
        $mdSidenav('left').open();

    };
    vm.closeSidebar = function () {
        vm.sidenavIsOpen = false;
        $mdSidenav('left').close();
    };


}