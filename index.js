function sendMail(e) {
  e.preventDefault();
  var params = {
    from_name: document.getElementById("name").value,
    email_id: document.getElementById("email").value,
    message_id: document.getElementById("message").value,
  };
  if (!params.from_name || !params.email_id || !params.message_id) {
    return;
  } else {
    emailjs.send("service_rzxuezc", "template_2cccwrh", params).then(
      function (response) {
        swal({
          title: "Thanks for filling out the form!!",
          text: "I will look over your message and get back to you soon.",
          icon: "success",
          button: "Ok",
        });
        setTimeout(function () {
          window.location.href = "index.html";
        }, 3000);
      },
      function (error) {
        swal({
          title: "Oops!",
          text: "something went wrong",
          icon: "error",
          button: "cancel!",
        });
        setTimeout(function () {
          window.location.href = "index.html";
        }, 3000);
      }
    );
  }
}
