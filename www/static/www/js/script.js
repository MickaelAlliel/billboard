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
    Billboard.billForm.submit();
}

function discardBillHandler() {
    toggleAdd();
}

$(document).ready(function() {
    Billboard.billForm = $('#billForm');
    Billboard.billAddContainer = $('#billAddContainer');
    Billboard.addBillBtn = $('#addBillBtn');
    Billboard.confirmBillBtn = $('#confirmBillBtn');
    Billboard.discardBillBtn = $('#discardBillBtn');

    init();
});