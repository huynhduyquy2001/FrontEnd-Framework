//hiển thị hồ sơ, đăng xuất
app.controller("capNhapHoSo", function ($scope, $http, $rootScope) {
    if ($rootScope.indexStudent == -1) {
        window.location.href = "index.html#/6";
        return;
    }
    //đổ dữ liệu tài khoản lên form lại
    $rootScope.student = angular.copy($rootScope.students[$rootScope.indexStudent]);        
    $scope.suaDoiTk = function () {
        $rootScope.student = angular.copy($rootScope.students[$rootScope.indexStudent]);
    }//đăng xuất
    $scope.dangXuat = function () {
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

//cập nhật thông tin tài khoản từ form
app.controller("capNhatTK", function ($scope, $http, $rootScope) {
    $scope.capNhatTK = function () {
        //đổi thông tin
        $rootScope.students[$rootScope.indexStudent] = angular.copy($rootScope.student);
        //cập nhật lên form
        $rootScope.student = angular.copy($rootScope.students[$rootScope.indexStudent]);
        localStorage.setItem('students', JSON.stringify($rootScope.students));
        toast({
            title: "Thành công",
            message: "Tài khoản đã được cập nhật",
            type: "success",
            duration: 1000
        })

    }

});

//đổi mật khẩu
app.controller("doiMK", function ($scope, $http, $rootScope) {
    $scope.name = angular.copy($rootScope.students[$rootScope.indexStudent].username);
    $scope.doiMatKhau = function () {
        if ($scope.oldPass != $rootScope.students[$rootScope.indexStudent].password) {
            toast({
                title: "Thất bại",
                message: "Mật khẩu không chính xác",
                type: "error",
                duration: 1000
            });
            return;
        }
        if ($scope.newPass1 == $scope.oldPass) {
            toast({
                title: "Thất bại",
                message: "Mật khẩu mới trùng mật khẩu cũ",
                type: "error",
                duration: 1000
            });
            return;
        }
        if ($scope.newPass1 != $scope.newPass2) {
            toast({
                title: "Thất bại",
                message: "Mật khẩu xác nhận không chính xác",
                type: "error",
                duration: 1000
            });
            return;
        }
        $scope.students[$rootScope.indexStudent].password = angular.copy($scope.newPass1);
        localStorage.setItem('students', JSON.stringify($rootScope.students));
        toast({
            title: "Thông báo",
            message: "Mật khẩu đã đổi thành công",
            type: "info",
            duration: 1000
        })
    }

});