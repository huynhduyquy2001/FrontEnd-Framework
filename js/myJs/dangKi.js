app.controller('registerCtrl', function ($scope, $http, $rootScope) {
    
        $scope.dangKi = function () {
            if($rootScope.students.length==0){
                toast({
                        title: "Thất bại",
                        message: "Xin vui lòng đăng kí",
                        type: "warning",
                        duration: 1000
                    });
                    return;
            }
            for (var i = 0; i < $rootScope.students.length; i++) {
                if ($scope.studentR.username == $rootScope.students[i].username) {
                    toast({
                        title: "Thất bại",
                        message: "Tài khoản đã tồn tại",
                        type: "warning",
                        duration: 1000
                    });
                    return;
                }
            }
            if($scope.studentR.password!=$scope.repassword){
                toast({
                        title: "Thất bại",
                        message: "Mật khẩu xác nhận không chính xác",
                        type: "warning",
                        duration: 1000
                    });
                    return;
            }

            $rootScope.students.push(angular.copy($scope.studentR));
            localStorage.setItem('students', JSON.stringify($rootScope.students));
            $scope.studentR = {};
            $scope.repassword = '';
            toast({
                title: "Thành công",
                message: "Đăng kí thàng công",
                type: "success",
                duration: 1000
            });
            window.location.href = "index.html#/6";
        }
    });