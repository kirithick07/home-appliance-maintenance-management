```javascript
document.addEventListener("DOMContentLoaded", function () {

    /* =========================================
       ANIMATED COUNTERS
    ========================================= */

    const counters = document.querySelectorAll(".counter");

    counters.forEach(function (counter) {

        const target = parseInt(
            counter.getAttribute("data-target")
        );

        let count = 0;

        const speed = 40;

        const updateCounter = function () {

            const increment = Math.ceil(target / 30);

            count += increment;

            if (count >= target) {
                count = target;
            }

            counter.textContent = count;

            if (count < target) {
                setTimeout(updateCounter, speed);
            }
        };

        updateCounter();
    });


    /* =========================================
       MOBILE MENU
    ========================================= */

    const mobileMenu =
        document.querySelector(".mobile-menu");

    const sidebar =
        document.querySelector(".sidebar");

    if (mobileMenu && sidebar) {

        mobileMenu.addEventListener("click", function () {

            sidebar.classList.toggle("mobile-open");

        });
    }


    /* =========================================
       NAVIGATION
    ========================================= */

    const navItems =
        document.querySelectorAll(".nav-item");

    navItems.forEach(function (item) {

        item.addEventListener("click", function () {

            navItems.forEach(function (nav) {
                nav.classList.remove("active");
            });

            item.classList.add("active");

        });

    });


    /* =========================================
       BOOK SERVICE
    ========================================= */

    const bookServiceBtn =
        document.getElementById("bookServiceBtn");

    if (bookServiceBtn) {

        bookServiceBtn.addEventListener(
            "click",
            function () {

                alert(
                    "Welcome to HomeFix Service Booking!"
                );

            }
        );

    }


    /* =========================================
       NOTIFICATION
    ========================================= */

    const notificationBtn =
        document.getElementById("notificationBtn");

    if (notificationBtn) {

        notificationBtn.addEventListener(
            "click",
            function () {

                alert(
                    "You have 2 upcoming appointments."
                );

            }
        );

    }


    /* =========================================
       CALL TECHNICIAN
    ========================================= */

    const callBtn =
        document.querySelector(".call-btn");

    if (callBtn) {

        callBtn.addEventListener(
            "click",
            function () {

                alert(
                    "Calling your technician..."
                );

            }
        );

    }


    /* =========================================
       TRACK SERVICE
    ========================================= */

    const trackButton =
        document.querySelector(".outline-btn");

    if (trackButton) {

        trackButton.addEventListener(
            "click",
            function () {

                alert(
                    "Service tracking will open here."
                );

            }
        );

    }


    /* =========================================
       QUICK ACTIONS
    ========================================= */

    const quickButtons =
        document.querySelectorAll(
            ".quick-actions button"
        );

    quickButtons.forEach(function (button) {

        button.addEventListener(
            "click",
            function () {

                const service =
                    button.textContent.trim();

                alert(
                    service +
                    " service selected."
                );

            }
        );

    });


    /* =========================================
       SUPPORT BUTTON
    ========================================= */

    const supportButton =
        document.querySelector(
            ".support-banner button"
        );

    if (supportButton) {

        supportButton.addEventListener(
            "click",
            function () {

                alert(
                    "HomeFix Customer Support"
                );

            }
        );

    }


    /* =========================================
       APPOINTMENTS
    ========================================= */

    const appointments =
        document.querySelectorAll(
            ".appointment"
        );

    appointments.forEach(function (appointment) {

        appointment.addEventListener(
            "click",
            function () {

                const title =
                    appointment.querySelector(
                        ".appointment-info strong"
                    );

                if (title) {

                    alert(
                        "Appointment: " +
                        title.textContent
                    );

                }

            }
        );

    });


    /* =========================================
       PROFILE
    ========================================= */

    const profile =
        document.querySelector(".profile");

    if (profile) {

        profile.addEventListener(
            "click",
            function () {

                alert(
                    "Profile menu"
                );

            }
        );

    }

});
```
