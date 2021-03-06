$(clickHandler);

function clickHandler() {
  $(".deleteButton").click(function() {
    if(confirm("Are you sure?")){
      const uid = $(this).attr("data-uid");
      console.log("delete: ", uid);
      deleteUser(uid); 
      document.location.href="/";
    } else {
      window.location.reload(); 
    }
  });
}


function deleteUser(uid) {
  const request = $.ajax({
    url: `/users/user/${uid}`,
    type: "delete",
    success: function(data) {
      console.log("delete done", data);
    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.log("error happend");
      console.log(jqXHR, textStatus, errorThrown);
    }
  });
}

