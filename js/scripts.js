const hotelsData = {
  Bali: [
    {
      name: "Ayana Resort and Spa",
      details:
        "Facilities: Private Beach, Spa, Pool, Free Wi-Fi<br />Price: $200 per night<br />Address: Jl. Karang Mas Sejahtera, Bali",
    },
  ],
  Borobudur: [
    {
      name: "Plataran Borobudur Resort",
      details:
        "Facilities: Spa, Pool, Restaurant, Free Wi-Fi<br />Price: $180 per night<br />Address: Tanjungan Village, Magelang",
    },
  ],
  "Raja Ampat": [
    {
      name: "Raja Ampat Dive Lodge",
      details:
        "Facilities: Diving, Spa, Pool, Free Wi-Fi<br />Price: $250 per night<br />Address: Mansuar Island, Raja Ampat",
    },
  ],
  Yogyakarta: [
    {
      name: "Phoenix Hotel",
      details:
        "Facilities: Spa, Pool, Restaurant, Free Wi-Fi<br />Price: $150 per night<br />Address: Jl. Jenderal Sudirman No.9, Yogyakarta",
    },
  ],
  Komodo: [
    {
      name: "Komodo Resort",
      details:
        "Facilities: Diving, Spa, Pool, Free Wi-Fi<br />Price: $220 per night<br />Address: Sebayur Island, Komodo",
    },
  ],
  "Mount Bromo": [
    {
      name: "Bromo Terrace Hotel",
      details:
        "Facilities: Spa, Pool, Restaurant, Free Wi-Fi<br />Price: $140 per night<br />Address: Jalan Raya Bromo, East Java",
    },
  ],
  Jakarta: [
    {
      name: "Hotel Indonesia Kempinski",
      details:
        "Facilities: Spa, Pool, Restaurant, Free Wi-Fi<br />Price: $150 per night<br />Address: Jl. MH Thamrin No.1, Jakarta",
    },
  ],
};

function updateHotelDetails() {
  const destination = document.getElementById("destination").value;
  const hotelSelect = document.getElementById("hotel");
  const hotelDetailsDiv = document.getElementById("hotel-details");
  const hotelInfoDiv = document.getElementById("hotel-info");
  const hotelName = document.getElementById("hotel-name");
  const hotelDetailsText = document.getElementById("hotel-details-text");

  if (destination) {
    hotelSelect.innerHTML = "<option value=''>Select hotel</option>";
    hotelsData[destination].forEach((hotel) => {
      const option = document.createElement("option");
      option.value = hotel.name;
      option.textContent = hotel.name;
      hotelSelect.appendChild(option);
    });
    hotelDetailsDiv.style.display = "block";
    hotelInfoDiv.style.display = "none";
  } else {
    hotelDetailsDiv.style.display = "none";
    hotelInfoDiv.style.display = "none";
  }

  hotelSelect.onchange = function () {
    const selectedHotel = hotelsData[destination].find(
      (hotel) => hotel.name === hotelSelect.value
    );
    if (selectedHotel) {
      hotelName.textContent = selectedHotel.name;
      hotelDetailsText.innerHTML = selectedHotel.details;
      hotelInfoDiv.style.display = "block";
    } else {
      hotelInfoDiv.style.display = "none";
    }
  };
}

// Back to top button functionality
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  const backToTopBtn = document.getElementById("backToTopBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Prevent form submission
document.getElementById("booking-form").onsubmit = function (e) {
  e.preventDefault();
  alert("Booking successful! Check on Email for Detail !");
};

// Function to load booking.html into the modal
$("#bookingModal").on("show.bs.modal", function (e) {
  var url = "booking.html"; // URL of your booking.html
  $("#bookingModalContent").load(url);
});

$(document).ready(function () {
    $(".navbar-toggler").click(function () {
      $(".navbar-collapse").slideToggle();
    });
  });
