function handleSubmit() {
    alert("Form Submit");
}
function handlingCheckbox() {
    let checkBox = $('.checkBox');

    checkBox.each(function () {
        $(this).on('click', function () {
            if ($(this).text().trim() === 'General Enquiry') {
                // Add 
                $("#generalEnquiry-svg").addClass('generalEnquiry-svg-block');
                $('.svg-wrapper-generalEnquiry').addClass('svg-wrapper-generalEnquiry-border');

                $('#supportRequest-svg').removeClass('supportRequest-svg-block');
                $('.svg-wrapper-supportRequest').removeClass('svg-wrapper-supportRequest-border');
            } else if ($(this).text().trim() === 'Support Request') {
                $('#supportRequest-svg').addClass('supportRequest-svg-block');
                $('.svg-wrapper-supportRequest').addClass('svg-wrapper-supportRequest-border');

                $("#generalEnquiry-svg").removeClass('generalEnquiry-svg-block');
                $('.svg-wrapper-generalEnquiry').removeClass('svg-wrapper-generalEnquiry-border');
            }
        });
    });
}

handlingCheckbox();