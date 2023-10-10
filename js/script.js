

$("button").click(function () {
    let nameVal = $("#name").val();
let mail = $("#mail").val();
let password = $("#password").val();
let age1 = $("#under_18").is(':checked');
let age2 = $("#over_18").is(":checked");
let bio = $("#bio").val();
let hobby1 = $("#development").is(":checked");
let hobby2 = $("#design").is(":checked");
let hobby3 = $("business").is(":checked");

  if (nameVal == "") {
    $(".name-error").html("Please enter name");
  }
  if (mail == "") {
    $(".mail-error").html("Please enter mail");
  }
  if (password == "") {
    $(".password-error").html("Please enter Password");
  }
  if (!age1 && !age2) {
    $(".age-error").html("Please select Age");
  }
  if(bio == ""){
    $(".bio-error").html("Please enter a Bio")
  }
  if(!hobby1 && !hobby2 && !hobby3){
    $(".hobby-error").html("Please select atleast 1 Interest")
  }
});
