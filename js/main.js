$(document).ready(function() {
    $('#reiseziel').click(function() {
        $(this).siblings('.inputreiseziel').slideToggle(400);
    });
});
$(document).ready(function() {
    $('#travelers-btn-seaside').click(function() {
        $(this).siblings('#travellers-seaside').slideToggle(200);
    })
})
$(document).ready(function() {
    $('#search-mobile').click(function() {
        $('#formsearch-mobile').slideToggle(400);
    });
    $('.check_radio').click(function() {
        $('.check_radio').removeClass('chechPoin');
        $(this).toggleClass('chechPoin');

    });

});

function updateTravellersData(elem) { //
    // get form id
    var formId = elem.dataset.formId;

    // num adults changed
    if (elem.name.search('adults') > 0) {
        // update num adults in button
        document.getElementById('travelers-adults-val-' + formId).innerHTML = elem.value;
        return;
    }
    // num children changed
    if (elem.name.search('children') > 0) {
        // update num children in button
        document.getElementById('travelers-children-val-' + formId).innerHTML = elem.value;

        if (elem.value > 0) {
            $('#agegroup-1-' + formId).show();
        } else {
            $('#agegroup-1-' + formId).hide();
        }
        if (elem.value > 1) {
            $('#agegroup-2-' + formId).show();
        } else {
            $('#agegroup-2-' + formId).hide();
        }
        if (elem.value > 2) {
            $('#agegroup-3-' + formId).show();
        } else {
            $('#agegroup-3-' + formId).hide();
        }
        if (elem.value > 3) {
            $('#agegroup-4-' + formId).show();
        } else {
            $('#agegroup-4-' + formId).hide();
        }
    }

};
