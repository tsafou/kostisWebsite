/**
 * Created by Tsafou on 04/06/2016.
 */
angular.module('kostisWebsite').controller('mainController', mainController);

mainController.$inject = ['$mdSidenav', '$http', '$timeout', '$interval', '$location', '$anchorScroll', '$document'];

function mainController($mdSidenav, $http, $timeout, $interval, $location, $anchorScroll, $document) {
    var vm = this;

    vm.init = true;
    vm.sidenavIsOpen = false;
    vm.countDown = 3;
    vm.showStart = true;
    vm.startTyping = false;
    vm.initView = false;
    vm.showSkills = false;
    vm.showStartBtn = false;
    var top = 0;
    var duration = 2000; //milliseconds

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

    vm.skills1 = [
        {
            title: "HTML5",
            description: "Blah",
            icon: "fa-html5"
        },
        {
            title: "CSS3",
            description: "CSS is bla",
            icon: "fa-css3"
        }
    ];
    vm.skills2 = [
        {
            title: "Javascript",
            description: "Javascript",
            icon: "fa-css3"
        },
        {
            title: "Database",
            description: "mySQL",
            icon: "fa-database"
        },
        {
            title: "Something",
            description: "else",
            icon: "fa-database"
        }
    ];

    vm.showStart = function () {
        vm.showStartBtn = true;
    };

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

    vm.scrollTo = function (id) {
        // $location.hash(id);
        // $anchorScroll();
        var container = angular.element(document.getElementsByClassName('main-container'));
        var element = angular.element(document.getElementById(id));
        container.scrollToElementAnimated(element, 0, 1500);

    };
    vm.scrollToTop = function () {
        var container = angular.element(document.getElementsByClassName('main-container'));
        container.scrollTopAnimated(top, duration).then(function() {
            console && console.log('You just scrolled to the top!');
        });
    };

    $document.ready(function () {
        vm.startTyping = true;
    });

    vm.skillsInView = function (inview, event) {
        // console.log('in view: ', inview, event.inViewTarget);
        // console.log(inview)
        if (inview) {
            $timeout(function () {
                vm.showSkills = true
            });
        }
        else {
            $timeout(function () {
                vm.showSkills = false;
            });
        }

    }

}