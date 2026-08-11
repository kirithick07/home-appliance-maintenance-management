
/* =========================================
   HOMEFIX BOOKING JAVASCRIPT
========================================= */

document.addEventListener("DOMContentLoaded", function () {


    /* =========================================
       ELEMENTS
    ========================================= */

    const bookingForm =
        document.getElementById("bookingForm");

    const serviceType =
        document.getElementById("serviceType");

    const serviceDate =
        document.getElementById("serviceDate");

    const serviceTime =
        document.getElementById("serviceTime");

    const summaryAppliance =
        document.getElementById("summaryAppliance");

    const summaryService =
        document.getElementById("summaryService");

    const summaryDate =
        document.getElementById("summaryDate");

    const summaryTime =
        document.getElementById("summaryTime");

    const price =
        document.getElementById("price");

    const bookingMessage =
        document.getElementById("bookingMessage");

    const successOverlay =
        document.getElementById("successOverlay");

    const successDashboardBtn =
        document.getElementById(
            "successDashboardBtn"
        );

    const bookingId =
        document.getElementById("bookingId");


    /* =========================================
       SET MINIMUM DATE
       PREVENT PAST DATES
    ========================================= */

    const today =
        new Date();

    const year =
        today.getFullYear();

    const month =
        String(
            today.getMonth() + 1
        ).padStart(2, "0");

    const day =
        String(
            today.getDate()
        ).padStart(2, "0");

    const todayString =
        `${year}-${month}-${day}`;

    serviceDate.min =
        todayString;



    /* =========================================
       APPLIANCE SELECTION
    ========================================= */

    const applianceOptions =
        document.querySelectorAll(
            'input[name="appliance"]'
        );


    applianceOptions.forEach(function (option) {

        option.addEventListener(
            "change",
            function () {

                summaryAppliance.textContent =
                    option.value;

            }
        );

    });



    /* =========================================
       SERVICE SELECTION
    ========================================= */

    serviceType.addEventListener(
        "change",
        function () {

            const selected =
                serviceType.options[
                    serviceType.selectedIndex
                ];


            if (!selected.value) {

                summaryService.textContent =
                    "Not selected";

                price.textContent =
                    "0";

                return;

            }


            summaryService.textContent =
                selected.value;


            const servicePrice =
                selected.getAttribute(
                    "data-price"
                );


            price.textContent =
                servicePrice || "0";

        }
    );



    /* =========================================
       DATE
    ========================================= */

    serviceDate.addEventListener(
        "change",
        function () {

            if (!serviceDate.value) {

                summaryDate.textContent =
                    "Not selected";

                return;

            }


            const selectedDate =
                new Date(
                    serviceDate.value +
                    "T00:00:00"
                );


            const formattedDate =
                selectedDate.toLocaleDateString(
                    "en-IN",
                    {
                        day: "2-digit",
                        month: "short",
                        year: "numeric"
                    }
                );


            summaryDate.textContent =
                formattedDate;

        }
    );



    /* =========================================
       TIME
    ========================================= */

    serviceTime.addEventListener(
        "change",
        function () {

            if (!serviceTime.value) {

                summaryTime.textContent =
                    "Not selected";

                return;

            }


            summaryTime.textContent =
                serviceTime.value;

        }
    );



    /* =========================================
       FORM SUBMIT
    ========================================= */

    bookingForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            bookingMessage.textContent =
                "";


            /* Get selected appliance */

            const selectedAppliance =
                document.querySelector(
                    'input[name="appliance"]:checked'
                );


            /* Validation */

            if (!selectedAppliance) {

                bookingMessage.textContent =
                    "Please select an appliance.";

                return;

            }


            if (!serviceType.value) {

                bookingMessage.textContent =
                    "Please select a service type.";

                return;

            }


            if (!serviceDate.value) {

                bookingMessage.textContent =
                    "Please select a service date.";

                return;

            }


            if (!serviceTime.value) {

                bookingMessage.textContent =
                    "Please select a preferred time.";

                return;

            }



            /* PIN validation */

            const pincode =
                document.getElementById(
                    "pincode"
                ).value.trim();


            if (!/^[0-9]{6}$/.test(pincode)) {

                bookingMessage.textContent =
                    "Please enter a valid 6-digit PIN code.";

                return;

            }



            /* =================================
               CREATE BOOKING ID
            ================================= */

            const randomNumber =
                Math.floor(
                    1000 + Math.random() * 9000
                );


            const generatedBookingId =
                "HF" + randomNumber;


            bookingId.textContent =
                "Booking ID: " +
                generatedBookingId;



            /* =================================
               SHOW SUCCESS
            ================================= */

            successOverlay.classList.add(
                "show"
            );


            /* =================================
               SAVE BOOKING
               TEMPORARILY IN LOCAL STORAGE
            ================================= */

            const bookingData = {

                bookingId:
                    generatedBookingId,

                appliance:
                    selectedAppliance.value,

                service:
                    serviceType.value,

                date:
                    serviceDate.value,

                time:
                    serviceTime.value,

                address:
                    document.getElementById(
                        "address"
                    ).value,

                city:
                    document.getElementById(
                        "city"
                    ).value,

                pincode:
                    pincode,

                problem:
                    document.getElementById(
                        "problem"
                    ).value

            };


            localStorage.setItem(
                "homefixBooking",
                JSON.stringify(
                    bookingData
                )
            );

        }
    );



    /* =========================================
       GO TO DASHBOARD
    ========================================= */

    successDashboardBtn.addEventListener(
        "click",
        function () {

            window.location.href =
                "dashboard.html";

        }
    );



    /* =========================================
       APPLIANCE CARD ANIMATION
    ========================================= */

    applianceOptions.forEach(function (option) {

        option.addEventListener(
            "change",
            function () {

                const card =
                    option.nextElementSibling;


                card.animate(
                    [
                        {
                            transform:
                                "scale(0.95)"
                        },

                        {
                            transform:
                                "scale(1.03)"
                        },

                        {
                            transform:
                                "scale(1)"
                        }
                    ],
                    {
                        duration: 350,
                        easing: "ease-out"
                    }
                );

            }
        );

    });


});

