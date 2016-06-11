/**
 * Created by Tsafou on 11/06/2016.
 */

angular.module('kostisWebsite').controller('mapController', mapController);

mapController.$inject = ['$scope', 'uiGmapIsReady', 'uiGmapGoogleMapApi'];

function mapController($scope, uiGmapIsReady, uiGmapGoogleMapApi) {
    var vm = this;

    // Define variables for our Map object
    var areaLat = 40.578412,
        areaLng = 23.021786,
        areaZoom = 6;


    $scope.map = {
        center: {}
    };
    $scope.markers = [];

    uiGmapGoogleMapApi.then(function(maps) {
        $scope.map = {
            center: {
                latitude: 40.578412,
                longitude: 23.021786
            },
            zoom: 5,
            options: {scrollwheel: false}
        };

        $scope.markers = [{
            id: 1,
            latitude: 40.578412,
            longitude: 23.021786
        }];

    });

//     uiGmapIsReady.promise(function (maps) {
//         $scope.map = {
//             center: {
//                 latitude: 40.578412,
//                 longitude: 23.021786
//             },
//             zoom: 8,
//             options: {scrollwheel: false}
//         };
//
//         $scope.markers = [{
//             id: 1,
//             latitude: 40.578412,
//             longitude: 23.021786
//         }];
// console.log(1, maps);
//         $scope.map.draw();
//     });

// $scope.$on('$viewContentLoaded', function () {
//     var mapHeight = 500; // or any other calculated value
//     $("#my-map .angular-google-map-container").height(mapHeight);
// });
}


