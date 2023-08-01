app.controller("myCtrl3", function ($scope, $http, $rootScope) { 
    if($rootScope.indexStudent!=-1){
        toast({
            title: "Thông báo",
            message: "Tài khoản của bạn đang hoạt động",
            type: "info",
            duration: 1000
        });
       
        window.location.href = "index.html#/2";
        return;

    }      
    $scope.dangNhap = function () {
        if($rootScope.students.length==0 ||$rootScope.students==null){
            toast({
                    title: "Thất bại",
                    message: "Xin vui lòng đăng kí",
                    type: "warning",
                    duration: 1000
                });
                return;
        }
        var check = false;
        if ($scope.name == null || $scope.name == "") {
            toast({
                title: "Thất bại",
                message: "Tài khoản không được bỏ trống",
                type: "warning",
                duration: 1000
            })
            return;
        }
        if ($scope.pass == null) {
            toast({
                title: "Thất bại",
                message: "Mật khẩu không được bỏ trống",
                type: "warning",
                duration: 1000
            })
            return;
        }
        
        for (var i = 0; i < $scope.students.length; i++) {
            
            if ($scope.name == $rootScope.students[i].username && $scope.pass == $rootScope.students[i].password) {
                check = true;

                $rootScope.indexStudent = i;
                toast({
                    title: "Thông báo",
                    message: "Đăng nhập thành công",
                    type: "success",
                    duration: 1000
                })
                window.location.href = "index.html#/2";
                return;
            }
        }
        if (check == false) {
            toast({
                title: "Chờ đã",
                message: "Sai thông tin tài khoản",
                type: "warning",
                duration: 1000
            })
        }
        ;
    }
    $scope.dangNhapGG =function(){
        toast({
            title: "Chờ đã",
            message: "Tính năng đang phảt triển",
            type: "warning",
            duration: 1000
        })
    }
});