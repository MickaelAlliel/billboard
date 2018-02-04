var Billboard = {};

function toggleAdd() {
    Billboard.billAddContainer.toggle();
    Billboard.confirmBillBtn.toggle();
    Billboard.discardBillBtn.toggle();

    Billboard.addBillBtn.toggle();
}

function init() {
    Billboard.billAddContainer.toggle();
    Billboard.confirmBillBtn.toggle();
    Billboard.discardBillBtn.toggle();

    Billboard.addBillBtn.on('click', function() {
        addBillHandler();
    });
    Billboard.confirmBillBtn.on('click', function() {
        confirmBillHandler();
    });
    Billboard.discardBillBtn.on('click', function() {
        discardBillHandler();
    });
}

function addBillHandler() {
    toggleAdd();
}

function confirmBillHandler() {
    title = $('#title');
    message = $('#message');
    author = $('#author');

    if (!title.val() || !message.val() || !author.val()) {
        Billboard.flashMessage.html('All fields are required. Please make sure something is not missing and try again.');
        Billboard.flashMessage.addClass('animated shake');
    } else {
        Billboard.billForm.submit();
    }
}

function discardBillHandler() {
    toggleAdd();
}

$(document).ready(function() {
    Billboard.billForm = $('#billForm');
    Billboard.flashMessage = $('#flash-message');
    Billboard.billAddContainer = $('#billAddContainer');
    Billboard.addBillBtn = $('#addBillBtn');
    Billboard.confirmBillBtn = $('#confirmBillBtn');
    Billboard.discardBillBtn = $('#discardBillBtn');

    init();
});