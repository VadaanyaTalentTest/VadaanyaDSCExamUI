function updateMandalOptions() {
    const mandalSelect = document.getElementById('mandal');
    const selectedDistrict = document.getElementById('district').value;
    let options = '';
    if (selectedDistrict === 'Sri Sathya Sai') {
        options = `
            <option id="option" value="">--Select your Mandal--</option>
            <option id="option" value="PUTTAPARTHI">PUTTAPARTHI</option>
            <option id="option" value="BUKKAPATNAM">BUKKAPATNAM</option>
            <option id="option" value="KOTHACHERUVU">KOTHACHERUVU</option>
            <option id="option" value="NALLAMADA">NALLAMADA</option>
            <option id="option" value="DHARMAVARAM">DHARMAVARAM</option>
            <option id="option" value="BATHALAPALLE">BATHALAPALLE</option>
            <option id="option" value="TADIMARRI">TADIMARRI</option>
            <option id="option" value="MUDIGUBBA">MUDIGUBBA</option>
            <option id="option" value="RAMAGIRI">RAMAGIRI</option>
            <option id="option" value="KANAGAPALLI">KANAGAPALLI</option>
            <option id="option" value="CHENNEKOTHAPALLI">CHENNEKOTHAPALLI</option>
            <option id="option" value="TALUPULA">TALUPULA</option>
            <option id="option" value="NAMBULAPULAKUNTA">NAMBULAPULAKUNTA</option>
            <option id="option" value="GANDLAPENTA">GANDLAPENTA</option>
            <option id="option" value="KADIRI">KADIRI</option>
            <option id="option" value="OUBULADEVARACHERUVU">OUBULADEVARACHERUVU</option>
            <option id="option" value="NALLACHERUVU">NALLACHERUVU</option>
            <option id="option" value="TANAKAL">TANAKAL</option>
            <option id="option" value="AMADAGUR">AMADAGUR</option>
            <option id="option" value="RODDAM">RODDAM</option>
            <option id="option" value="MADAKASIRA">MADAKASIRA</option>
            <option id="option" value="AMARAPURAM">AMARAPURAM</option>
            <option id="option" value="GUDIBANDA">GUDIBANDA</option>
            <option id="option" value="ROLLA">ROLLA</option>
            <option id="option" value="AGALI">AGALI</option>
            <option id="option" value="PARIGI">PARIGI</option>
            <option id="option" value="PENUKONDA">PENUKONDA</option>
            <option id="option" value="GORANTLA">GORANTLA</option>
            <option id="option" value="SOMMANDEPALLI">SOMMANDEPALLI</option>
            <option id="option" value="HINDUPUR">HINDUPUR</option>
            <option id="option" value="LEPAKSHI">LEPAKSHI</option>
            <option id="option" value="CHILAMATHUR">CHILAMATHUR</option>
        `;
    } else if (selectedDistrict === 'Ananthapur') {
        options = `
            <option id="option" value="">--Select your Mandal--</option>
            <option id="option" value="DHARMAVARAM">DHARMAVARAM</option>
            <option id="option" value="BATHALAPALLE">BATHALAPALLE</option>
            <option id="option" value="TADIMARRI">TADIMARRI</option>
            <option id="option" value="MUDIGUBBA">MUDIGUBBA</option>
        `;
    }

    mandalSelect.innerHTML = options;
}

function Reset() {
    document.getElementById('student-name').value = '';
    document.getElementById('father-name').value = '';
    document.getElementById('gender').value = '';
    document.getElementById('aadhaar-number').value = '';
    document.getElementById('mobile-number').value = '';
    document.getElementById('caste').value = '';
    document.getElementById('test-score').value = '';
    document.getElementById('district').value = '';
    document.getElementById('mandal').value = '';
    document.getElementById('dob').value = '';
    document.querySelector('input[name="email"]').value = '';
}
document.getElementById('student-form').addEventListener('submit', function(event) {
});
function areFieldsFilled() {
    const fields = [
        'student-name', 'father-name', 'gender', 'aadhaar-number',
        'mobile-number', 'caste', 'district', 'mandal', 'dob', 'email'
    ];
    return fields.every(id => document.getElementById(id).value.trim() !== '');
}

function validateCheckbox() {
    const checkbox = document.querySelector('input[name="check"]');
    const registerButton = document.querySelector('button[type="submit"]');
    if (areFieldsFilled()) {
        checkbox.disabled = false;
        registerButton.disabled = !checkbox.checked;
    } else {
        checkbox.disabled = true;
        registerButton.disabled = true;
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const checkBox = document.getElementById('check');

    checkBox.addEventListener('change', function () {
        if (checkBox.checked) {
            validateCheckbox()
        }
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registrationForm');
    const checkBox = document.getElementById('check');
    const registerButton = document.getElementById('submit');

    function areFieldsFilled() {
        const fields = [
            'student-name', 'father-name', 'gender', 'aadhaar-number',
            'mobile-number', 'caste', 'district', 'mandal', 'dob', 'email'
        ];
        return fields.every(id => document.getElementById(id).value.trim() !== '');
    }

    function validateCheckbox() {
        if (areFieldsFilled()) {
            checkBox.disabled = false;
            registerButton.disabled = !checkBox.checked;
        } else {
            checkBox.disabled = true;
            registerButton.disabled = true;
        }
    }

    form.addEventListener('input', validateCheckbox);
    checkBox.addEventListener('change', function () {
        registerButton.disabled = !checkBox.checked;
    });
});

function sendData() {
    if (!document.querySelector('input[name="check"]').checked) {
        //alert('You must declare that the information is true and correct');
        return false;
    }
    areFieldsFilled()
    const data = {
        studentName: document.getElementById('student-name').value,
        fatherName: document.getElementById('father-name').value,
        gender: document.getElementById('gender').value,
        aadhaarNumber: document.getElementById('aadhaar-number').value,
        mobileNumber: document.getElementById('mobile-number').value,
        caste: document.getElementById('caste').value,
        testScore: document.getElementById('test-score').value,
        district: document.getElementById('district').value,
        mandal: document.getElementById('mandal').value,
        dob: document.getElementById('dob').value,
        email: document.getElementById('email').value,
    };

    fetch('https://vadaanyadscapi.azurewebsites.net/StudentDetails', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(data => {
        console.log('Success:', data);
    })
        .catch((error) => {
        console.error('Error:', error);
    });

    alert('You are successfully registered with us Thank you!');
}

document.addEventListener('DOMContentLoaded', () => {
    const checkbox = document.querySelector('input[name="check"]');
    const fields = document.querySelectorAll('input[type="text"], input[type="email"], input[type="date"], select');
    fields.forEach(field => field.addEventListener('input', validateCheckbox));
    checkbox.addEventListener('change', validateCheckbox);
    validateCheckbox(); // Initial check
});
function setCustomMessageStudent(input) {
    const value = input.value;
    const regex = /^[A-Za-z\s]{1,32}$/;

    if (input.validity.valueMissing) {
        input.setCustomValidity('Enter Student Name');
    } else if (!regex.test(value)) {
        input.setCustomValidity('Please enter alphabets only');
    } else {
        input.setCustomValidity('');
    }
}
function setCustomMessageFather(input) {
    const value = input.value;
    const regex = /^[A-Za-z\s]{1,32}$/;

    if (input.validity.valueMissing) {
        input.setCustomValidity('Enter Father Name');
    } else if (!regex.test(value)) {
        input.setCustomValidity('Please enter alphabets only');
    } else {
        input.setCustomValidity('');
    }
}
function setAadhaarMessage(input) {
    if(input.value ===''){
        input.setCustomValidity('Enter Aadhaar Number');
    }
    else if (input.validity.valueMissing) {
        input.setCustomValidity('Aadhaar Number must be exactly 12 digits');
    } else if (/[^0-9]/.test(input.value)) {
        input.setCustomValidity('Please enter numbers only');
    } else if (input.value.length < 12) {
        input.setCustomValidity('Please enter a valid 12 digit number');
    } else {
        input.setCustomValidity('');
    }
}
function setMobileMessage(input) {
    const value = input.value.replace(/\s+/g, ''); // Remove any spaces
    const regex = /^\+91\d{10}$/;
    if(input.value ===''){
        input.setCustomValidity('Enter Mobile Nuumber');
    }
    else if (input.validity.valueMissing) {
        input.setCustomValidity('Enter a valid +91 followed by 10 digits Mobile Number');
    } else if (/[^0-9+]/.test(value)) {
        input.setCustomValidity('Please enter numbers only');
    } else if (!regex.test(value)) {
        if (value.length < 13) {
            input.setCustomValidity('Please enter a valid 10-digit Mobile Number after +91');
        } else if (value.length > 13) {
            input.setCustomValidity('Mobile Number must be exactly 10 digits after +91');
        } else {
            input.setCustomValidity('Please enter a valid format: +91 followed by 10 digits');
        }
    } else {
        input.setCustomValidity('');
    }
}
function setEmailMessage(input) {
    const value = input.value;
    const regex = /^[a-z0-9._%+-]+@gmail\.com$/;
    const atSymbol = value.includes('@');
    const domain = value.endsWith('@gmail.com');
    if(input.value ===''){
        input.setCustomValidity('Enter gmail address');
    }
    else if (input.validity.valueMissing) {
        input.setCustomValidity('Please enter a valid gmail address ending with @gmail.com');
    } else if (!atSymbol) {
        input.setCustomValidity('Please enter a valid email address like abc@gmail.com');
    } else if (!domain) {
        input.setCustomValidity('Please enter a valid gmail address ending with @gmail.com');
    } else if (!regex.test(value)) {
        input.setCustomValidity('Please enter a valid format: abc@gmail.com');
    } else {
        input.setCustomValidity('');
    }
}