/**
 * Created by Tsafou on 04/06/2016.
 */
angular.module('kostisWebsite').controller('mainController', mainController);

mainController.$inject = ['$scope', '$mdSidenav', '$http', '$timeout', '$interval', '$location', '$anchorScroll', '$document', '$mdMedia', '$mdDialog'];

function mainController($scope, $mdSidenav, $http, $timeout, $interval, $location, $anchorScroll, $document, $mdMedia, $mdDialog) {
    var vm = this;

    vm.contact = false;
    vm.init = true;
    vm.sidenavIsOpen = false;
    vm.countDown = 3;
    vm.showStart = true;
    vm.startTyping = false;
    vm.initView = false;
    vm.showSkills = false;
    vm.showStartBtn = false;
    vm.forceShowArrow = false;
    vm.messageSent = false;
    vm.errorMessage = false;

    $scope.mouseMoved = false;
    $scope.$mdMedia = $mdMedia;
    var top = 0;
    var duration = 2000; //milliseconds

    vm.selectedSocial = -1;

    vm.selectSocial = function (index) {
        if (index == undefined) {
            vm.selectedSocial = -1;
            return;
        }
        vm.selectedSocial = index;
    };

    vm.socials = [
        {
            url: 'https://www.youtube.com/channel/UCe5pmZwhMoydaD8ImXPSKzQ',
            name: 'fa-youtube'
        },
        {
            url: 'http://facebook.com/tsafou',
            name: 'fa-facebook'
        },
        {
            url: 'https://gr.linkedin.com/in/kostistsafaris',
            name: 'fa-linkedin'
        }
    ];
    vm.author = {
        "name": "Kostis Tsafaris",
        "desc": "I am a Web Developer with a background in Physics and Renewable Energy. What drives me forward, is my passion for coding and new technologies. Feel free to navigate through my website and don't forget to visit my social media pages!",
        "avatar": "assets/img/face-outline.png"
    };
    vm.menuItems = [
        {
            "name": "Home",
            "url": "home"
        },
        {
            "name": "Bio",
            "url": "bio"
        },
        {
            "name": "Skills",
            "url": "skills"
        },
        {
            "name": "Contact",
            "url": "contact"
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
        },
        {
            title: "AngularJS",
            description: "Javascript",
            icon: "fa-desktop"
        },
        {
            title: "Photoshop",
            description: "...",
            icon: "fa-picture-o"
        }
    ];
    vm.skills2 = [
        {
            title: "T-SQL",
            description: "mySQL",
            icon: "fa-database"
        },
        {
            title: "PHP",
            description: "PHP",
            icon: "fa-code"
        },
        {
            title: "Javascript",
            description: "Javascript",
            icon: "fa-code"
        },
        // {
        //     title: "CMS",
        //     description: "Wordpress, Joomla",
        //     icon: "fa-desktop"
        // },
        {
            title: "Repo",
            description: "Git Repository",
            icon: "fa-git"
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
        container.scrollToElementAnimated(element, 0, 2000);
        if (id=='contact') {
            vm.contact = true;
        }
    };

    vm.scrollToTop = function () {
        var container = angular.element(document.getElementsByClassName('main-container'));
        container.scrollTopAnimated(top, duration).then(function () {
            // console && console.log('You just scrolled to the top!');
        });
    };

    $document.ready(function () {
        $scope.$apply(function () {
            vm.startTyping = true;
        });
    });

    vm.skillsInView = function (inview, event) {
        // console.log('in view: ', inview, event.inViewTarget);
        // console.log(inview)
        if (inview) {
            $timeout(function () {
                vm.showSkills = true
            }, 500);
        }
        else {
            $timeout(function () {
                vm.showSkills = false;
            });
        }

    };

    /*
     Catch mouse movement and show scroll to top arrow for a short duratio
     */
    // vm.mouseMoved = function () {
    //     $scope.mouseMoved = true;
    //     $timeout(function () {
    //         $scope.mouseMoved = false;
    //     }, 2000);
    // };

    // vm.showSendMessage = function (ev) {
    //     var url = "https://formspree.io/dinos1@hotmail.com";
    //     var method = "POST";
    //     var req = {
    //         method: method,
    //         url: url,
    //         headers: {
    //             'Content-type': 'application/json'
    //         },
    //         data: {form: vm.user}
    //         // data: {message: "hello!"}
    //     };
    //
    //     if (vm.contactForm.$valid) {
    //         $http(req).then(function () {
    //             $timeout(function () {
    //                 vm.messageSent = true;
    //                 vm.user = {};
    //                 vm.contactForm.$setPristine();
    //                 vm.contactForm.$setUntouched();
    //             });
    //
    //             $timeout(function () {
    //                 vm.messageSent = false;
    //             }, 5000);
    //
    //         });
    //     }
    //     else {
    //         // $mdDialog.show(
    //         //     $mdDialog.alert()
    //         //         .parent(angular.element(document.querySelector('#contact-form')))
    //         //         .clickOutsideToClose(true)
    //         //         .title('Sorry!')
    //         //         .textContent('This feature is not yet implemented. Please check back soon!')
    //         //         .ariaLabel('Alert Dialog')
    //         //         .ok('Got it!')
    //         //         .targetEvent(ev)
    //         // );
    //     }
    //
    // };


    vm.sendEmail = function () {
        $http({
            method: 'POST',
            url: 'php/email.php',
            data: $.param(vm.user),  // pass in data as strings
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}  // set the headers so angular passing info as form data (not request payload)
        })
            .then(function successCallback(response) {

                $timeout(function () {
                    vm.errorMessage = false;
                    vm.messageSent = true;
                    vm.user = {};
                    vm.contactForm.$setPristine();
                    vm.contactForm.$setUntouched();
                });

                $timeout(function () {
                    vm.messageSent = false;
                }, 4000);
            }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                vm.errorMessage = true;
            });


    };

}