function goToBooking() {
  document.getElementById("booking").scrollIntoView();
}

function openLogin() {
  alert("Login feature coming soon");
}

function bookNow() {
  let phone = document.getElementById("phone").value;
  let date = document.getElementById("date").value;

  if (!phone || !date) {
    alert("Enter details");
    return;
  }

  let bookings = JSON.parse(localStorage.getItem("bookings")) || [];

  bookings.push({ phone, date });

  localStorage.setItem("bookings", JSON.stringify(bookings));

  document.getElementById("message").innerText =
    "Booking Confirmed ✅";
}
