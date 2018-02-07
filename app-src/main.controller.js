/**
 * Created by Tsafou on 04/06/2016.
 */
angular.module('kostisWebsite').controller('mainController', mainController);

mainController.$inject = ['$scope', '$mdSidenav', '$http', '$timeout', '$interval', '$location', '$anchorScroll', '$document', '$mdMedia', '$mdDialog', '$sce'];

function mainController($scope, $mdSidenav, $http, $timeout, $interval, $location, $anchorScroll, $document, $mdMedia, $mdDialog, $sce) {
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
        "desc": "Hello! My name is Kostis Tsafaris and I am a Web Developer. What drives me forward, is my passion for coding and new technologies. Feel free to navigate through my website and don't forget to visit my social media pages. If you want to ask a question or just say 'Hi!', use the contact form at the bottom of the page - I am always happy to respond!",
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
            "name": "Projects",
            "url": "projects"
        },
        {
            "name": "Contact",
            "url": "contact"
        }
    ];

    vm.skills1 = [
        {
            title: "HTML5",
            description: "HTML 5 is a revision of the Hypertext Markup Language (HTML), the standard programming language for describing the contents and appearance of Web pages.",
            icon: "fa-html5"
        },
        {
            title: "CSS3",
            description: "Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language.",
            icon: "fa-css3"
        },
        {
            title: "AngularJS",
            description: "AngularJS is a structural framework for dynamic web apps. It lets you use HTML as your template language and lets you extend HTML's syntax to express your application's components clearly and succinctly. AngularJS's data binding and dependency injection eliminate much of the code you would otherwise have to write. And it all happens within the browser, making it an ideal partner with any server technology.",
            icon: "fa-desktop"
        },
        {
            title: "ZK",
            description: "ZK is a UI framework that enables you to build amazing web and mobile applications without having to learn JavaScript or AJAX.",
            icon: "fa-desktop"
        },
        {
            title: "Photoshop",
            description: "Adobe Photoshop is the predominant photo editing and manipulation software on the market. Its uses range from full featured editing of large batches of photos to creating intricate digital paintings and drawings that mimic those done by hand.",
            icon: "fa-picture-o"
        }
    ];
    vm.skills2 = [
        {
            title: "T-SQL",
            description: "T-SQL (Transact-SQL) is a set of programming extensions from Sybase and Microsoft that add several features to the Structured Query Language (SQL), including transaction control, exception and error handling, row processing and declared variables.",
            icon: "fa-database"
        },
        {
            title: "PHP",
            description: "PHP (recursive acronym for PHP: Hypertext Preprocessor) is a widely-used open source general-purpose scripting language that is especially suited for web development and can be embedded into HTML.",
            icon: "fa-terminal"
        },
        {
            title: "Java",
            description: "Java is a programming language and computing platform first released by Sun Microsystems in 1995. There are lots of applications and websites that will not work unless you have Java installed, and more are created every day. Java is fast, secure, and reliable. From laptops to datacenters, game consoles to scientific supercomputers, cell phones to the Internet, Java is everywhere!",
            icon: "fa-terminal"
        },
        {
            title: "Javascript",
            description: "JavaScript is a programming language that allows you to implement complex things on web pages — every time a web page does more than just sit there and display static information for you to look at — displaying timely content updates, or interactive maps, or animated 2D/3D graphics, or scrolling video jukeboxes, etc. — you can bet that JavaScript is probably involved.",
            icon: "fa-code"
        },
        // {
        //     title: "CMS",
        //     description: "Wordpress, Joomla",
        //     icon: "fa-desktop"
        // },
        {
            title: "Repo",
            description: "Git is a version control system for tracking changes in computer files and coordinating work on those files among multiple people. It is primarily used for source code management in software development, but it can be used to keep track of changes in any set of files. As a distributed revision control system it is aimed at speed, data integrity, and support for distributed, non-linear workflows.",
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
        if (id == 'contact') {
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

    // vm.indexSelected = null;
    // // $sce.trustAsResourceUrl(value)
    // vm.setProject = function (index) {
    //     $scope.currentProjectUrl = $sce.trustAsResourceUrl(vm.projects[index].url);
    //     vm.indexSelected = index;
    // };

    vm.projects = [
        {
            name: 'ioannakostiswedding',
            url: 'http://www.ioannakostiswedding.com'
        },
        {
            name: 'thefleamarketskg',
            url: 'http://www.thefleamarketskg.com'
        },
        {
            name: 'thessalonikistreetfoodfestival',
            url: 'http://www.thessalonikistreetfoodfestival.com'
        }
    ];



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
        if (vm.contactForm.$valid) {
            vm.sendingMail = true;
            $http({
                method: 'POST',
                url: 'php/email.php',
                data: $.param(vm.user),  // pass in data as strings
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}  // set the headers so angular passing info as form data (not request payload)
            })
                .then(function successCallback(response) {
                    vm.sendingMail = false;
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
                    vm.sendingMail = false;
                    vm.errorMessage = true;
                });

        }


    };

}