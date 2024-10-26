//--Validation for student name field--
function setCustomMessageStudent(input) {
    const value = input.value;
    const regex = /^[A-Za-z\s]{1,32}$/;

    if (input.validity.valueMissing) {
        input.setCustomValidity('Enter Student Name as per Aadhaar');
    } else if (!regex.test(value)) {
        input.value='';
        input.setCustomValidity('Please enter alphabets only');

    } else {
        input.setCustomValidity('');
    }
}
//--Validation for father name field--
function setCustomMessageFather(input) {
    const value = input.value;
    const regex = /^[A-Za-z\s]{1,32}$/;

    if (input.validity.valueMissing) {
        input.setCustomValidity('Enter Father Name as per Aadhaar');
    } else if (!regex.test(value)) {
        input.value='';
        input.setCustomValidity('Please enter alphabets only');
    } else {
        input.setCustomValidity('');
    }
}
//--Validation for Aadhaar field--
function setAadhaarMessage(input) {
    if(input.value ===''){
        input.setCustomValidity('Enter Aadhaar Number');
    }
    else if (input.validity.valueMissing) {
        input.setCustomValidity('Aadhaar Number must be exactly 12 digits');
    } else if (/[^0-9]/.test(input.value)) {
        input.value='';
        input.setCustomValidity('Please enter numbers only');
    } else if (input.value.length < 12) {
        input.setCustomValidity('Please enter a valid 12 digit number');
    } else {
        input.setCustomValidity('');
    }
}
//--Validation for Mobile field--
function setMobileMessage(input) {
    if(input.value ===''){
        input.setCustomValidity('Enter Mobile Number');
    }
    else if (input.validity.valueMissing) {
        input.setCustomValidity('Mobile Number must be exactly 10 digits');
    } else if (/[^0-9]/.test(input.value)) {
        input.value='';
        input.setCustomValidity('Please enter numbers only');
    } else if (input.value.length < 10) {
        input.setCustomValidity('Please enter a valid 10 digit number');
    } else {
        input.setCustomValidity('');
    }
}
//--Validation for Tet field--
function setTetMessage(input) {
    if (/[^0-9]/.test(input.value) || input.value > 150) {
        input.value = '';
        input.setCustomValidity('Please enter a number between 1 and 150');
    } else {
        input.setCustomValidity('');
    }
}
//--Validation for District field--
function updateMandalOptions() {
    const mandalSelect = document.getElementById('mandal');
    const selectedDistrict = document.getElementById('district').value;
    let options = '';
    if (selectedDistrict === 'Sri Sathya Sai') {
        options = `
            <option id="option" value="">--Select your Mandal--</option>
<option id="option" value="AGALI">AGALI</option>
<option id="option" value="AMADAGUR">AMADAGUR</option>
<option id="option" value="AMARAPURAM">AMARAPURAM</option>
<option id="option" value="BATHALAPALLE">BATHALAPALLE</option>
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
    } else if (selectedDistrict === 'Ananthapur') {
        options = `
            <option id="option" value="">--SELECT YOUR MANDAL--</option>
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
<option id="option" value="TADPATRI">TADPATRI</option>
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
document.getElementById('dob').max = today.toISOString().split('T')[0];

//--Validation for Email field--
function setEmailMessage(input) {
    const value = input.value;
    //const regex = /^[a-z0-9._%+-]+@gmail\.com$/;
    const atSymbol = value.includes('@');
    const domain = value.endsWith('.com');
    if(input.value ===''){
        input.setCustomValidity('Enter gmail address');
    }
    else if (input.validity.valueMissing) {
        input.setCustomValidity('Please enter a email address');
    } else if (!atSymbol) {
        input.setCustomValidity('Please enter a valid email address like abc@gmail.com');
    } else if (!domain) {
        input.setCustomValidity('Please enter a valid email address ending with .com');
    }
    else {
        input.setCustomValidity('');
    }
}
//--Validation for Reset btn--
function Reset() {
    document.getElementById('student-name').value = '';
    document.getElementById('father-name').value = '';
    document.getElementById('gender').value = '';
    document.getElementById('aadhaar-number').value = '';
    document.getElementById('mobile-number').value = '';
    document.getElementById('category').value = '';
    document.getElementById('test-score').value = '';
    document.getElementById('district').value = '';
    document.getElementById('mandal').value = '';
    document.getElementById('dob').value = '';
    document.querySelector('input[name="email"]').value = '';
}
//--Validation for Register btn--
function areFieldsFilled() {
    const fields = [
        'student-name', 'father-name', 'gender', 'aadhaar-number',
        'mobile-number', 'category', 'district', 'mandal', 'dob', 'email'
    ];

    return fields.every(id => {
        const element = document.getElementById(id);
        if (element.tagName === 'SELECT') {
            return element.options[element.selectedIndex].value.trim() !== '';
        } else {
            return element.value.trim() !== '';
        }
    });
}

document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault();
    sendData();
});

function sendData() {

    if (!areFieldsFilled()) {
        alert('Please fill all the required fields.');
        return false;
    }
    if (!document.querySelector('input[name="check"]').checked) {
        //alert('You must declare that the information is true and correct');
        return false;
    }
    const data = {
        studentName: document.getElementById('student-name').value,
        fatherName: document.getElementById('father-name').value,
        gender: document.getElementById('gender').value,
        aadhaarNumber: document.getElementById('aadhaar-number').value,
        mobileNumber: document.getElementById('mobile-number').value,
        caste: document.getElementById('category').value,
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
        document.getElementById('registrationForm').style.display = 'none';
        document.getElementById('thankYouDialog').style.display = 'block';

        // Navigate to the main page after 5 seconds
        setTimeout(function () {
            window.location.href = 'https://vadaanya.org/'; // Replace with the actual URL of your main page
        }, 5000); // 5000 milliseconds = 5 seconds
    })
        .catch((error) => {
        console.error('Error:', error);
    });
}