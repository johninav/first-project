$(() => $("#createButton").click(createUser));

function createUser() {
  
  const user = {
    name: $("input[name=name]")
      .val()
      .trim(),
    email: $("input[name=email]")
      .val()
      .trim(),
    phone: $("input[name=phone]")
      .val()
      .trim(),
  };
  

  const request = $.ajax({
    type: "post",
    contentType: "application/json",
    dataType: "json",
    data: JSON.stringify(user)
  });

  request.done(function(data) {
    console.log("creation done", data);
    document.location.href="/";
  });

  request.fail(function(jqXHR, textStatus, errorThrown) {
    console.log(jqXHR, textStatus, errorThrown);
    alert("Invalid input: \n\nEmail must follow username@server.domain pattern \nPhone number must be 10 digits") 
  });
}

