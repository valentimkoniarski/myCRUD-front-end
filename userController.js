(function() {
    angular.module('simpleCRUD').controller('UserInfoCtrl', [
        '$http',
        UserInfoController
    ])

    function UserInfoController($http) {
        const vm = this;
        const url = 'http://localhost:3003/api/userInfo';

        vm.refresh = function() {
            $http.get(url).then(function(response) {
                vm.userInfo = {};
                vm.userInfos = response.data;
            })
        }

        vm.create = function() {
            $http.post(url, vm.userInfo).then(function(response) {
                vm.refresh();
            })
        }

        vm.delete = function(myDelete) {
            const deleteUrl = `${url}/${myDelete}`
            $http.delete(deleteUrl, vm.userInfo).then(function(response) {
                vm.refresh();
            })
        }

        vm.showTabUpdate = function(userInfo) {
            vm.userInfo = userInfo;
        }

        vm.update = function(userInfo) {
            const updateUrl = `${url}/${vm.userInfo._id}`;
            $http.put(updateUrl, vm.userInfo).then(function(response) {
                vm.refresh();
            })
        }

        vm.refresh();
    }

})()