!function (a) {
    a(document).ready(function () {
        var b = function () {
            var b = !1;
            return {
                open: function () {
                    var c = this;
                    a(".wrapper").addClass("nav-open"),
                        a(".header").addClass("nav-open"),
                        b = !0,
                        a(".wrapper").on("click", function () {
                            c.close()
                        })
                },
                close: function () {
                    a(".wrapper").removeClass("nav-open"),
                        a(".header").removeClass("nav-open"),
                        b = !1,
                        a(".wrapper").off("click")
                },
                mobileNavToggle: function (a) {
                    a.stopPropagation(),
                        b ? this.close() : this.open()
                }
            }
        }();
        a(".hamburger").stop().click(function (a) {
            b.mobileNavToggle(a)
        }),
            a(".closeModal").click(function () {
                b.close()
            }),
            function () {
                var b, c = 0;
                a(window).scroll(function () {
                    var d = a(this).scrollTop();
                    d > c ? (b = d - 50,
                        d > 100 && a(".header").finish().slideUp(300)) : b > d && a(".header").finish().slideDown(300),
                        c = d
                })
            }(),
            function () {
                a(".navItem").click(function () {
                    var b = a(this).data("section");
                    a("html, body").animate({
                        scrollTop: a("#" + b).offset().top
                    })
                }),
                    a(".logo").click(function () {
                        a("html, body").animate({
                            scrollTop: 0
                        })
                    }),
                    a(".mobile .navItem").click(function () {
                        b.close()
                    })
            }(),
            function () {
                a(".workSection .hamburger, .workSection .close").click(function () {
                    a(this).parent(".workSection").toggleClass("showing-more")
                })
            }()
    })
}(window.jQuery);
