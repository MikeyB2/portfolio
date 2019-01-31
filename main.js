
$(document).ready(function () {
    let b = function () {
        let b = !1;
        return {
            open: function () {
                let c = this;
                $(".wrapper").addClass("nav-open"),
                    $(".header").addClass("nav-open"),
                    b = !0,
                    $(".wrapper").on("click", function () {
                        c.close()
                    })
            },
            close: function () {
                $(".wrapper").removeClass("nav-open"),
                    $(".header").removeClass("nav-open"),
                    b = !1,
                    $(".wrapper").off("click")
            },
            mobileNavToggle: function (a) {
                $.stopPropagation(),
                    b ? this.close() : this.open()
            }
        }
    }();
    $(".hamburger").stop().click(function (a) {
        b.mobileNavToggle(a)
    }),
        $(".closeModal").click(function () {
            b.close()
        }),
        function () {
            let b, c = 0;
            $(window).scroll(function () {
                let d = $(this).scrollTop();
                d > c ? (b = d - 50,
                    d > 100 && $(".header").finish().slideUp(300)) : b > d && $(".header").finish().slideDown(300),
                    c = d
            })
        }(),
        function () {
            $(".workSection .hamburger, .workSection .close").click(function () {
                $(this).parent(".workSection").toggleClass("showing-more")
            })
        }(),
        function () {
            $(".workSectionExample .goToDetails").click(function () {
                $(this).parent(".middle").parent(".macBookPro, .iphone").parent(".workSectionExample").parent(".workSection").toggleClass("showing-more");
            })
        }()
})
