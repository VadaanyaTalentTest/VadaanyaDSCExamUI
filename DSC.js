//--Validation for student name field--
function dscsetCustomMessageStudent(input) {
  const value = input.value;
  const regex = /^[A-Za-z\s]{1,32}$/;

  if (input.validity.valueMissing) {
    input.setCustomValidity("Enter Student Name as per Aadhaar");
  } else if (!regex.test(value)) {
    input.value = "";
    input.setCustomValidity("Please enter alphabets only");
  } else {
    input.setCustomValidity("");
  }
}
//--Validation for father name field--
function dscsetCustomMessageFather(input) {
  const value = input.value;
  const regex = /^[A-Za-z\s]{1,32}$/;

  if (input.validity.valueMissing) {
    input.setCustomValidity("Enter Father Name as per Aadhaar");
  } else if (!regex.test(value)) {
    input.value = "";
    input.setCustomValidity("Please enter alphabets only");
  } else {
    input.setCustomValidity("");
  }
}
//--Validation for Aadhaar field--
function dscsetAadhaarMessage(input) {
  if (input.value === "") {
    input.setCustomValidity("Enter Aadhaar Number");
  } else if (input.validity.valueMissing) {
    input.setCustomValidity("Aadhaar Number must be exactly 12 digits");
  } else if (/[^0-9]/.test(input.value)) {
    input.value = "";
    input.setCustomValidity("Please enter numbers only");
  } else if (input.value.length < 12) {
    input.setCustomValidity("Please enter a valid 12 digit number");
  } else {
    input.setCustomValidity("");
  }
}
//--Validation for Mobile field--
function dscsetMobileMessage(input) {
  if (input.value === "") {
    input.setCustomValidity("Enter Mobile Number");
  } else if (input.validity.valueMissing) {
    input.setCustomValidity("Mobile Number must be exactly 10 digits");
  } else if (/[^0-9]/.test(input.value)) {
    input.value = "";
    input.setCustomValidity("Please enter numbers only");
  } else if (input.value.length < 10) {
    input.setCustomValidity("Please enter a valid 10 digit number");
  } else {
    input.setCustomValidity("");
  }
}
//--Validation for Tet field--
function dscsetTetMessage(input) {
  if (/[^0-9]/.test(input.value) || input.value > 150) {
    input.value = "";
    input.setCustomValidity("Please enter a number between 1 and 150");
  } else {
    input.setCustomValidity("");
  }
}
//--Validation for District field--
function dscupdateMandalOptions() {
  const mandalSelect = document.getElementById("dsc-mandal");
  const selectedDistrict = document.getElementById("dsc-district").value;
  let options = "";
  if (selectedDistrict === "SRI SATHYA SAI") {
    options = `
            <option id="option" value="">-- Select your mandal --</option>
<option id="option" value="AGALI">AGALI</option>
<option id="option" value="AMADAGUR">AMADAGUR</option>
<option id="option" value="AMARAPURAM">AMARAPURAM</option>
<option id="option" value="BATHALAPALLI">BATHALAPALLI</option>
<option id="option" value="BUKKAPATNAM">BUKKAPATNAM</option>
<option id="option" value="CHENNEKOTHAPALLI">CHENNEKOTHAPALLI</option>
<option id="option" value="CHILAMATHUR">CHILAMATHUR</option>
<option id="option" value="DHARMAVARAM">DHARMAVARAM</option>
<option id="option" value="GANDLAPENTA">GANDLAPENTA</option>
<option id="option" value="GORANTLA">GORANTLA</option>
<option id="option" value="GUDIBANDA">GUDIBANDA</option>
<option id="option" value="HINDUPUR">HINDUPUR</option>
<option id="option" value="KADIRI">KADIRI</option>
<option id="option" value="KANAGAPALLI">KANAGAPALLI</option>
<option id="option" value="KOTHACHERUVU">KOTHACHERUVU</option>
<option id="option" value="LEPAKSHI">LEPAKSHI</option>
<option id="option" value="MADAKASIRA">MADAKASIRA</option>
<option id="option" value="MUDIGUBBA">MUDIGUBBA</option>
<option id="option" value="NALLACHERUVU">NALLACHERUVU</option>
<option id="option" value="NALLAMADA">NALLAMADA</option>
<option id="option" value="NAMBULAPULAKUNTA">NAMBULAPULAKUNTA</option>
<option id="option" value="OUBULADEVARACHERUVU">OUBULADEVARACHERUVU</option>
<option id="option" value="PARIGI">PARIGI</option>
<option id="option" value="PENUKONDA">PENUKONDA</option>
<option id="option" value="PUTTAPARTHI">PUTTAPARTHI</option>
<option id="option" value="RAMAGIRI">RAMAGIRI</option>
<option id="option" value="ROLLA">ROLLA</option>
<option id="option" value="RODDAM">RODDAM</option>
<option id="option" value="SOMMANDEPALLI">SOMMANDEPALLI</option>
<option id="option" value="TADIMARRI">TADIMARRI</option>
<option id="option" value="TALUPULA">TALUPULA</option>
<option id="option" value="TANAKAL">TANAKAL</option>
<option id="option" value="OTHER">OTHER</option>
        `;
  } else if (selectedDistrict === "ANANTHAPUR") {
    options = `
            <option id="option" value="">-- Select your mandal --</option>
<option id="option" value="ANANTAPUR">ANANTAPUR</option>
<option id="option" value="ATMAKUR">ATMAKUR</option>
<option id="option" value="BELUGUPPA">BELUGUPPA</option>
<option id="option" value="BK SAMUDRAM">BK SAMUDRAM</option>
<option id="option" value="BOMMANAHAL">BOMMANAHAL</option>
<option id="option" value="BRAHMASAMUDRAM">BRAHMASAMUDRAM</option>
<option id="option" value="D.HIREHAL">D.HIREHAL</option>
<option id="option" value="GARLADINNE">GARLADINNE</option>
<option id="option" value="GOOTY">GOOTY</option>
<option id="option" value="GUMMAGATTA">GUMMAGATTA</option>
<option id="option" value="GUNTAKAL">GUNTAKAL</option>
<option id="option" value="KALYANDURG">KALYANDURG</option>
<option id="option" value="KAMBADUR">KAMBADUR</option>
<option id="option" value="KANEKAL">KANEKAL</option>
<option id="option" value="KUDAIR">KUDAIR</option>
<option id="option" value="KUNDURPI">KUNDURPI</option>
<option id="option" value="NARPALA">NARPALA</option>
<option id="option" value="PAMIDI">PAMIDI</option>
<option id="option" value="PEDDAPAPPUR">PEDDAPAPPUR</option>
<option id="option" value="PEDDAVADUGUR">PEDDAVADUGUR</option>
<option id="option" value="PUTLURU">PUTLURU</option>
<option id="option" value="RAPTADU">RAPTADU</option>
<option id="option" value="RAYADURG">RAYADURG</option>
<option id="option" value="SETTURU">SETTURU</option>
<option id="option" value="SINGANAMALA">SINGANAMALA</option>
<option id="option" value="TADIPATRI">TADIPATRI</option>
<option id="option" value="URAVAKONDA">URAVAKONDA</option>
<option id="option" value="VAJRAKARUR">VAJRAKARUR</option>
<option id="option" value="VIDAPANAKAL">VIDAPANAKAL</option>
<option id="option" value="YADIKI">YADIKI</option>
<option id="option" value="YELLANUR">YELLANUR</option>
<option id="option" value="OTHER">OTHER</option>
        `;
  }
  mandalSelect.innerHTML = options;
}
//--Validation for DOB field--
let today = new Date();
today.setDate(today.getDate() - 1);
document.getElementById("dsc-dob").max = today.toISOString().split("T")[0];

// Set the max date to December 31, 2007
let maxDate = new Date("2006-12-31");
document.getElementById("dsc-dob").max = maxDate.toISOString().split("T")[0];

//--Validation for Email field--
function dscsetEmailMessage(input) {
  const value = input.value;
  const atSymbol = value.includes("@");
  const domain = value.endsWith(".com");

  if (value === "") {
    input.setCustomValidity("Enter a Gmail address");
  } else if (!atSymbol) {
    input.setCustomValidity(
      "Please enter a valid email address like abc@gmail.com"
    );
  } else if (!domain) {
    input.setCustomValidity(
      "Please enter a valid email address ending with .com"
    );
  } else {
    input.setCustomValidity("");
  }
}

//--Validation for Reset btn--
function Reset() {
  document.getElementById("dsc-student-name").value = "";
  document.getElementById("dsc-father-name").value = "";
  document.getElementById("dsc-gender").value = "";
  document.getElementById("dsc-aadhaar-number").value = "";
  document.getElementById("dsc-mobile-number").value = "";
  document.getElementById("dsc-category").value = "";
  document.getElementById("dsc-test-score").value = "";
  document.getElementById("dsc-district").value = "";
  document.getElementById("dsc-mandal").value = "";
  document.getElementById("dsc-dob").value = "";
  document.querySelector('input[name="email"]').value = "";
}
//--Validation for Register btn--
function dscareFieldsFilled() {
  const fields = [
    "dsc-student-name",
    "dsc-father-name",
    "dsc-gender",
    "dsc-aadhaar-number",
    "dsc-mobile-number",
    "dsc-category",
    "dsc-district",
    "dsc-mandal",
    "dsc-dob",
    "dsc-email",
  ];

  return fields.every((id) => {
    const element = document.getElementById(id);
    if (element.tagName === "SELECT") {
      return element.options[element.selectedIndex].value.trim() !== "";
    } else {
      return element.value.trim() !== "";
    }
  });
}
//--form submiting--
function dscsendData() {
  const submitBtn = document.getElementById("dsc-submitBtn");
  const overlay = document.getElementById("dsc-overlay");

  const emailInput = document.getElementById("dsc-email");
  const emailValue = emailInput.value;
  const atSymbol = emailValue.includes("@");
  const domain = emailValue.endsWith(".com");

  if (!dscareFieldsFilled()) {
    alert("Please fill all the required fields.");
    return false;
  }
  if (!document.querySelector('input[name="check"]').checked) {
    return false;
  }
  if (!atSymbol) {
    return false;
  }
  if (!domain) {
    return false;
  }
  // Disable the submit button to prevent multiple clicks
  submitBtn.disabled = true;
  // Show the overlay
  overlay.style.display = "flex";

  const data = {
    studentName: document.getElementById("dsc-student-name").value,
    fatherName: document.getElementById("dsc-father-name").value,
    gender: document.getElementById("dsc-gender").value,
    aadhaarNumber: document.getElementById("dsc-aadhaar-number").value,
    mobileNumber: document.getElementById("dsc-mobile-number").value,
    caste: document.getElementById("dsc-category").value,
    testScore: document.getElementById("dsc-test-score").value,
    district: document.getElementById("dsc-district").value,
    mandal: document.getElementById("dsc-mandal").value,
    dob: document.getElementById("dsc-dob").value,
    email: document.getElementById("dsc-email").value,
  };

  fetch("https://vadaanyadscapi.azurewebsites.net/StudentDetails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (response.status === 409) {
        alert(
          "Applicant with the same Aadhaar number, mobile number, or email already exists."
        );
        submitBtn.disabled = false;
        overlay.style.display = "none"; // Hide the overlay
        throw new Error("User already exists.");
      } else if (response.status === 403) {
        alert(
          "Sorry, we are not accepting further applications as we reached our prescribed limit of 2,000"
        );
        submitBtn.disabled = false;
        overlay.style.display = "none"; // Hide the overlay
        throw new Error("Limit exceeded.");
      } else if (!response.ok) {
        throw new Error("Network response was not ok.");
      }
      return response.json();
    })
    .then((data) => {
      console.log("Success:", data);
      document.getElementById("dsc-registrationForm").style.display = "none";
      const thankYouDialog = document.getElementById("dsc-thankYouDialog");
      thankYouDialog.style.display = "block";
      thankYouDialog.innerHTML = `
                <p><b>Your Application ID is : ${data.applicationNumber}</b></p>
                <p>${thankYouDialog.innerHTML}</p>
                <p>If you didn’t get an email, please contact <b>vadaanyadsc2024@gmail.com</b></p>
            `;
      overlay.style.display = "none"; // Hide the overlay
    })
    .catch((error) => {
      console.error("Error:", error);
      // Re-enable the submit button if there's an error
      submitBtn.disabled = false;
      overlay.style.display = "none"; // Hide the overlay
    });
}

function onInputApplicationNumber() {
  const applicationNumber = document.getElementById("applicationNumber");
  const aadhaarNumber = document.getElementById("aadhaarNumber");
  if (applicationNumber.value.trim() !== "") {
    aadhaarNumber.disabled = true;
    aadhaarNumber.removeAttribute("required");
  } else {
    aadhaarNumber.disabled = false;
    aadhaarNumber.setAttribute("required", "required");
  }
}

function onInputAadhaarNumber() {
  const applicationNumber = document.getElementById("applicationNumber");
  const aadhaarNumber = document.getElementById("aadhaarNumber");
  if (aadhaarNumber.value.trim() !== "") {
    applicationNumber.disabled = true;
    applicationNumber.removeAttribute("required");
  } else {
    applicationNumber.disabled = false;
    applicationNumber.setAttribute("required", "required");
  }
}

function dscShowAlertMessage(elementId, className, message, subMessage) {
  const alert = document.createElement("div");
  alert.className = className;
  alert.role = "alert";
  alert.innerText = message;
  if (subMessage) {
    let temp = document.createElement("span");
    temp.innerHTML = `<br><em>${subMessage}</em>`;
    alert.appendChild(temp);
  }
  document.getElementById(elementId).appendChild(alert);
  setTimeout(() => {
    alert.remove();
  }, 5000);
}

//--hallticket-form submiting--
async function dscHandleGenerateHallTicket(event) {
  event.preventDefault(); // Prevent the default form submission

  // Get the form data
  const applicationNumber = document.getElementById("applicationNumber").value;
  const aadhaarNumber = document.getElementById("aadhaarNumber").value;
  const dob = document.getElementById("dob").value;

  // Display the form data
  console.log("Entered Application Number:", applicationNumber);
  console.log("Entered Aadhar Number:", aadhaarNumber);
  console.log("Entered Date of Birth:", dob);

  const url = new URL("http://localhost:5225/HallTicket/DSC-2024");
  url.searchParams.append(
    "applicationNumber",
    applicationNumber ? applicationNumber : 0
  );
  url.searchParams.append("aadhaarNumber", aadhaarNumber ? aadhaarNumber : 0);
  url.searchParams.append("dob", dob);

  fetch(url).then((response) => {
    const fileName = response.headers.get("X-File-Name") || "hallticket.pdf";
    if (!response.ok) {
      return response.text().then((text) => {
        dscShowAlertMessage(
          "dsc-alert-message",
          "alert alert-danger",
          "Hall-ticket downloaded failed.",
          `${text}`.replace("Internal server error: ", "")
        );
        throw new Error(text);
      });
    }
    return response
      .blob()
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.style.display = "none";
        a.href = url;
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        dscShowAlertMessage(
          "dsc-alert-message",
          "alert alert-success",
          "Hall-ticket is downloaded successfully."
        );
      })
      .catch((error) => {
        console.error("Error fetching the hall ticket:", error);
        dscShowAlertMessage(
          "dsc-alert-message",
          "alert alert-danger",
          "Hall-ticket downloaded failed. Some error occurred."
        );
      });
  });

  document.getElementById("hallTicketGenerationForm").reset();
}
