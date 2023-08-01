app.controller("quenMK", function ($scope, $http, $rootScope) {

    $scope.layMK = function () {
        var check1 = false;
        var check2 = false;
        var vTriTamThoi = -1;
        for (var i = 0; i < $rootScope.students.length; i++) {
            if ($scope.nameDK == $rootScope.students[i].username) {
                check1 = true;

            }
            if (check1 == true && $scope.emailDK == $rootScope.students[i].email) {
                check2 = true;

                vTriTamThoi = i;
                break;
            }

        }
        if (check1 == false) {
            toast({
                title: "Thất bại",
                message: "Tài khoản không tồn tại",
                type: "warning",
                duration: 1000
            })
            return;

        }
        if (check2 == false) {
            toast({
                title: "Thất bại",
                message: "Email đăng kí không chính xác",
                type: "warning",
                duration: 1000
            })
            return;
        }
        $scope.mkDK = angular.copy($rootScope.students[vTriTamThoi].password);
        toast({
            title: "Thành công",
            message: "Đã lấy mật khẩu thành công",
            type: "success",
            duration: 1000
        })
    }
});