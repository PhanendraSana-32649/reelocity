function goToBooking(){
  document.getElementById("booking").scrollIntoView();
}

function openLogin(){
  document.getElementById("loginModal").style.display="block";
}

function login(){
  let user = document.getElementById("loginUser").value;

  if(!user){
    alert("Enter details");
    return;
  }

  localStorage.setItem("user", user);
  alert("Logged in");
  document.getElementById("loginModal").style.display="none";
}

function bookNow(){
  let user = localStorage.getItem("user");

  if(!user){
    alert("Login first");
    return;
  }

  let plan = document.getElementById("plan").value;
  let phone = document.getElementById("phone").value;
  let date = document.getElementById("date").value;

  if(!phone || !date){
    alert("Fill details");
    return;
  }

  let bookings = JSON.parse(localStorage.getItem("bookings")) || [];

  bookings.push({user,plan,phone,date});

  localStorage.setItem("bookings", JSON.stringify(bookings));

  document.getElementById("msg").innerText =
    "Booking Confirmed 🎬";
}
