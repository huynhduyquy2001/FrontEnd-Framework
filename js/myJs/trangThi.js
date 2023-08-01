//trang thi trắc nghiệm

app.controller("trangThi", function ($scope, $http, $rootScope, $routeParams) {

    
    $scope.mark = 0;
    $rootScope.haha = 0;
    $rootScope.stt = 0;
    $rootScope.sttt = 0;
    $rootScope.dsCauHoi = [];
    $rootScope.dapAn = [];
    $rootScope.stt2 = 0;
    $rootScope.m = 45;
    $rootScope.s = 59;
    $rootScope.timeout = null;
    $rootScope.monHoc = $routeParams.name;
    $rootScope.check=false;
    $rootScope.check2=false;
    $rootScope.check3=false;
    $rootScope.check4=false;
    //tải dữ liệu
    $http.get("db/Quizs/" + $routeParams.id + ".js").then(function (response) {
        $rootScope.dsCauHoi = response.data;
        $rootScope.cauHoi = $rootScope.dsCauHoi[$rootScope.stt];

    }, function (response) {
        alert("Lỗi");
    });
    //kết thúc sớm
    $rootScope.ketThuc = function () {
        clearTimeout($rootScope.timeout);
        $rootScope.stt = 0;
        document.getElementById("kq").innerText = "Số điểm bạn đã đạt được: " + $scope.mark;
        $rootScope.check3 = !$rootScope.check3;
        // $('#kq').append("<br><button class='btn btn-info'  ng-click='start2()'>Kiểm tra lại</button>");  

    }
    //bắt đầu thi
    $rootScope.start = function () {
        $rootScope.sttt = 1;
        if ($rootScope.stt == 0 && $rootScope.haha == 0) {
            $rootScope.check = !$rootScope.check;
            $rootScope.haha = 1;
           

        }
        if ($rootScope.s == 0) {
            $rootScope.m = $rootScope.m - 1;
            $rootScope.s = 60;
        }
        if ($rootScope.m <= -1) {
            $rootScope.ketThuc();
            clearTimeout($rootScopetimeout);
            return;
        }
        $rootScope.timeout = setTimeout(function () {
            $rootScope.s = $rootScope.s - 1;
            document.getElementById("m").innerText = $rootScope.m;
            if ($rootScope.s < 10) {
                document.getElementById("s").innerText = "0" + $rootScope.s;
            } else {
                document.getElementById("s").innerText = $rootScope.s;
            }
            $rootScope.start();
        }, 1000);
    }
    //làm lại

    $rootScope.start2 = function () {
        
        location.reload();
    }
    $scope.next = function () {
        $rootScope.stt = $rootScope.stt + 1;
        if ($scope.stt >= $rootScope.dsCauHoi.length) {
            toast({
                title: "Chờ đã",
                message: "Bạn đang ở câu cuối cùng",
                type: "info",
                duration: 1000
            });
            $rootScope.ketThuc();
            return;
        }

        $rootScope.cauHoi = angular.copy($rootScope.dsCauHoi[$scope.stt]);
    }
    $scope.pre = function () {
        if ($scope.stt == 0) {
            toast({
                title: "Chờ đã",
                message: "Bạn đang ở câu đầu tiên",
                type: "info",
                duration: 1000
            });
            return;
        }
        $scope.stt = $scope.stt - 1;
        $rootScope.cauHoi = angular.copy($rootScope.dsCauHoi[$scope.stt]);
    }
    $scope.first = function () {
        $scope.stt = 0;
        $rootScope.cauHoi = angular.copy($rootScope.dsCauHoi[$scope.stt]);
    }
    $scope.last = function () {
        $scope.stt = $rootScope.dsCauHoi.length - 1;
        $rootScope.cauHoi = angular.copy($rootScope.dsCauHoi[$scope.stt]);
    }
    //xem đáp án
    $scope.xemDA = function () {
        //điều kiện xem đáp án
        if ($scope.mark < 10) {
            toast({
                title: "Chờ đã",
                message: "Bạn phải đạt từ 10 điểm để xem đáp án những câu đã làm, Số điểm đạt được: " + $scope.mark,
                type: "warning",
                duration: 3000
            })
            return;
        }
        $rootScope.check4 = !$rootScope.check4;
    }
    //trả lời câu hỏi
    $scope.xemKQ = function () {
        var ans = $('input[name=cauTL]:checked').val();
        if (ans == null) {
            toast({
                title: "Chờ đã",
                message: "Bạn phải chọn đáp án",
                type: "warning",
                duration: 1000
            })
            return;
        }
        if ($scope.cauHoi.AnswerId == ans) {
            toast({
                title: "Thông báo",
                message: "Bạn đã chọn đúng đáp án",
                type: "info",
                duration: 1000
            });
            //hiện kq đúng
            document.getElementById($scope.cauHoi.AnswerId).checked = true;
            var html2= '<span><img src="Images/notWrong.png" style="width: 17px;height: 17px; margin-bottom: 3px;" alt=""></span>';
            document.getElementById($scope.cauHoi.AnswerId).insertAdjacentHTML('afterend', html2);
            $scope.mark = $scope.mark + $scope.cauHoi.Marks;
        }
        else if ($scope.cauHoi.AnswerId != ans) {
            toast({
                title: "Rất tiếc",
                message: "Bạn đã chọn sai đáp án",
                type: "warning",
                duration: 1000
            })
            //hiện kq đúng
            var html2= '<span><img src="Images/notWrong.png" style="width: 17px;height: 17px; margin-bottom: 3px;" alt=""></span>';
            document.getElementById($scope.cauHoi.AnswerId).insertAdjacentHTML('afterend', html2);

            //hiện kq sai
            document.getElementById(ans).checked = true;
            var html= '<span><img src="Images/wrong.png" style="width: 20px;height: 20px; margin-bottom: 3px;" alt=""></span>';
            document.getElementById(ans).insertAdjacentHTML('afterend', html);
            $rootScope.stt2 = $rootScope.stt2 + 1;

        }
        $scope.next();
    }

});