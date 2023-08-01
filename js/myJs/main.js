app.config(function ($routeProvider) {
    $routeProvider
        .when("/1", {
            templateUrl: "Home.html"
        })
        .when("/2", {
            templateUrl: "DanhMuc.html"
        })
        .when("/3", {
            templateUrl: "GioiThieu.html"
        })
        .when("/4", {
            templateUrl: "LienHe.html"
        })
        .when("/5", {
            templateUrl: "HoiDap.html"
        })
        .when("/6", {
            templateUrl: "LoGin.html"
        })
        .when("/7", {
            templateUrl: "DangKi.html"
        })
        .when("/8", {
            templateUrl: "SuaDoiTK.html"
        })
        .when("/home", {
            templateUrl: "SuaDoiTK.html/home"
        })
        .when("/tab", {
            templateUrl: "SuaDoiTK.html/tab"
        })
        .when("/tab1", {
            templateUrl: "SuaDoiTK.html/tab1"
        })
        .when("/9", {
            templateUrl: "quenMK.html"
        })
        .when("/10/:id/:name", {
            templateUrl: "trangThi.html"
        })
        
        .otherwise({
            redirectTo: "/1"
        });
})