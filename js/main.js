function ShowHideDiv() {
    let reasonList = document.getElementById("reasonList");
    let Igen = document.getElementById("Igen");
    Igen.style.display = reasonList.value == "Y" ? "block" : "none";
    let Nem = document.getElementById("Nem");
    Nem.style.display = reasonList.value = "N" ? "block" : "none";
}

function SubForm() {
    $.ajax({
        url: 'https://api.apispreadsheets.com/data/1246/',
        type: 'post',
        data: $("#myForm").serializeArray(),
        success: function () {
            alert("Form Data Submitted :)")
        },
        error: function () {
            alert("There was an error :(")
        }
    });
}