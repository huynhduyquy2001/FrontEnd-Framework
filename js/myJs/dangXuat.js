app.controller("index", function ($scope, $http, $rootScope) {

    $scope.dangXuat = function () {
   
        if ($rootScope.indexStudent == -1) {
            toast({
                title: "Chờ đã",
                message: "Bạn chưa đăng nhập",
                type: "warning",
                duration: 1000
            })
            return;
        }
        $rootScope.indexStudent = -1;
        toast({
            title: "Thành công",
            message: "Đã đăng xuất",
            type: "success",
            duration: 1000
        })
        window.location.href = "index.html#/1";
    }


});