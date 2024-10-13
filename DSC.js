function validateForm() {
      if (document.getElementById('studentname').value === '') {
        alert('Student Name is required');
        return false;
      }
      if (document.getElementById('name').value === '') {
        alert('Father Name is required');
        return false;
      }
      if (!document.querySelector('input[name="gender"]:checked')) {
        alert('Gender is required');
        return false;
      }
      if (document.getElementById('aadhar-number').value === '') {
        alert('Aadhaar Number is required');
        return false;
      }
      if (document.getElementById('phone-number').value === '') {
        alert('Mobile Number is required');
        return false;
      }
      if (document.getElementById('Caste').value === '') {
        alert('Caste is required');
        return false;
      }
      if (!document.querySelector('input[name="district"]:checked')) {
        alert('District is required');
        return false;
      }
      if (document.getElementById('mandal').value === '') {
        alert('Mandal is required');
        return false;
      }
      if (document.querySelector('input[name="dob"]').value === '') {
        alert('Date of Birth is required');
        return false;
      }
      if (document.querySelector('input[name="email"]').value === '') {
        alert('Email Address is required');
        return false;
      }
      if (document.getElementById('password').value === '') {
        alert('Password is required');
        return false;
      }
      if (document.getElementById('confirm-password').value === '') {
        alert('Confirm Password is required');
        return false;
      }
      if (document.querySelector('input[name="pincode"]').value === '') {
        alert('Pin Code is required');
        return false;
      }
      if (!document.querySelector('input[name="check"]:checked')) {
        alert('You must declare that the information is true and correct');
        return false;
      }
      return true;
    }
 function updateMandalOptions() {
      const mandalSelect = document.getElementById('mandal');
      const selectedDistrict = document.querySelector('input[name="district"]:checked').value;
      let options = '';
if (selectedDistrict === 'Sri Sathya Sai') {
        options = `
          <option value="">--Select your Mandal--</option>
          <option value="PUTTAPARTHI">PUTTAPARTHI</option>
          <option value="BUKKAPATNAM">BUKKAPATNAM</option>
          <option value="KOTHACHERUVU">KOTHACHERUVU</option>
          <option value="NALLAMADA">NALLAMADA</option>
          <option value="DHARMAVARAM">DHARMAVARAM</option>
          <option value="BATHALAPALLE">BATHALAPALLE</option>
          <option value="TADIMARRI">TADIMARRI</option>
          <option value="MUDIGUBBA">MUDIGUBBA</option>
          <option value="RAMAGIRI">RAMAGIRI</option>
          <option value="KANAGAPALLI">KANAGAPALLI</option>
          <option value="CHENNEKOTHAPALLI">CHENNEKOTHAPALLI</option>
          <option value="TALUPULA">TALUPULA</option>
          <option value="NAMBULAPULAKUNTA">NAMBULAPULAKUNTA</option>
          <option value="GANDLAPENTA">GANDLAPENTA</option>
          <option value="KADIRI">KADIRI</option>
          <option value="OUBULADEVARACHERUVU">OUBULADEVARACHERUVU</option>
          <option value="NALLACHERUVU">NALLACHERUVU</option>
          <option value="TANAKAL">TANAKAL</option>
          <option value="AMADAGUR">AMADAGUR</option>
          <option value="RODDAM">RODDAM</option>
          <option value="MADAKASIRA">MADAKASIRA</option>
          <option value="AMARAPURAM">AMARAPURAM</option>
          <option value="GUDIBANDA">GUDIBANDA</option>
          <option value="ROLLA">ROLLA</option>
          <option value="AGALI">AGALI</option>
          <option value="PARIGI">PARIGI</option>
          <option value="PENUKONDA">PENUKONDA</option>
          <option value="GORANTLA">GORANTLA</option>
          <option value="SOMMANDEPALLI">SOMMANDEPALLI</option>
          <option value="HINDUPUR">HINDUPUR</option>
          <option value="LEPAKSHI">LEPAKSHI</option>
          <option value="CHILAMATHUR">CHILAMATHUR</option>
        `;
      } else if (selectedDistrict === 'Ananthapur') {
        options = `
          <option value="">--Select your Mandal--</option>
          <option value="DHARMAVARAM">DHARMAVARAM</option>
          <option value="BATHALAPALLE">BATHALAPALLE</option>
          <option value="TADIMARRI">TADIMARRI</option>
          <option value="MUDIGUBBA">MUDIGUBBA</option>
        `;
      }

      mandalSelect.innerHTML = options;
    }
   function sendData() {
      const data = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value
      };

      fetch('https://your-api-endpoint.com', {
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
    }