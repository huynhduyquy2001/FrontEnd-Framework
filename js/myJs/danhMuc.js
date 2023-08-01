
//danh mục
app.controller("myCtrl2", function ($scope, $rootScope) {
    $scope.danhSach = $rootScope.subjects;
    app.filter('percentage', function ($filter) {
        return function (input, decimals) {
            return $filter('number')(input * 100, decimals) + "%";
        }
    })
        // $scope.products = [];
        // await $http.get("js/Prods2.js").then(function (response) {
        //     $scope.products = response.data;
        // });
        // $scope.products = list;

        /**
        * DỮ LIỆU JSON THUẦN TÚY:
        * - Key và value phải trong ngoặc kép.
        * - Không được chứa nháy đơn trong Object
        * - Không được chứa comment trong file.
         */
        $scope.prod = 'Name';
        $scope.sortBy = function (prod) {
            $scope.prod = prod;
        }
        $scope.begin = 0;

        $scope.pageCount = Math.ceil($scope.danhSach.length / 6);
        
        $rootScope.first = function () {
   
            $scope.begin = 0;
        }

        $rootScope.pre = function () {
            if ($scope.begin > 0) {
               
                $scope.begin -= 6;
            }
        }

        $rootScope.next = function () {
          
            if ($scope.begin < ($scope.pageCount - 1) * 6) {
                $scope.begin += 6;
            }
        }

        $rootScope.last = function () {
          
            $scope.begin = ($scope.pageCount - 1) * 6;
        }

    async function fomat($scope, $http,$rootScope) {
        

    }
});

//danh mục theo ngành
app.controller("myCtrl1", function ($scope,$http, $rootScope) {
    if ($rootScope.indexStudent == -1) {
        toast({
            title: "Chờ đã",
            message: "Bạn Phải đăng nhập",
            type: "info",
            duration: 1000
        });
        window.location.href = "index.html#/6";
        return;
    }
    $scope.danhMuc = [];
    $http.get("db/SubjectsHot.js").then(function (response) {
        $scope.danhMuc = response.data;
    }, function (response) {
        alert("Lỗi");
    });
    $scope.lapTrinh = lapTrinh;
    $scope.giaoDien = giaoDien;
    $scope.webSite = webSite;
});
