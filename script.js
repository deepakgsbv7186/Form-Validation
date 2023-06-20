// Boolean value for each input
let isFname = false;
let isLname = false;
let isEmail = false;
let isCountry = false;
let isContact = false;
let isPassword = false;
let isConfirmPassword = false;
let isDOB = false;
let isAddress = false;
let isCity = false;
let isPincode = false;
let isImage = false;
let isDOC = false;

// store values in object
const userInfo = {
  firstName: "",
  lastName: "",
  fullName: "",
  email: "",
  country: "",
  contact: "",
  password: "",
  dob: "",
  gender: "",
  address: "",
  city: "",
  pincode: "",
  profilePic: "",
  document: "",
  backgroundColor: "",
  message: "",
};

// First Name
const fname = document.getElementById("fname");
const fnameMessage = document.getElementById("fnameMessage");
fname.addEventListener("input", () => {
  const fValue = fname.value.trim();
  const regex = /^[A-Za-z]{2,20}$/;

  if (fValue === "") {
    msg(error, fnameMessage, "First name is required.");
    isFname = false;
  } else if (fValue === lname.value) {
    msg(error, fnameMessage, "First name can't be same as last name.");
    isFname = false;
  } else if (!isNaN(fValue[0])) {
    msg(error, fnameMessage, "Only alphabets are allowed.");
    isFname = false;
  } else if (fValue.length < 2) {
    msg(error, fnameMessage, "Minimum two letters required.");
    isFname = false;
  } else if (!/^(?!.*(\w)\1\1)[\w\d]+$/.test(fValue)) {
    msg(
      error,
      fnameMessage,
      "No repeat letters more than 2 times or special characters."
    );
    isFname = false;
  } else if (regex.test(fValue)) {
    msg(success, fnameMessage, "First name is valid.");
    isFname = true;
  } else {
    msg(error, fnameMessage, "No special characters or number please.");
    isFname = false;
  }
  updateFullName();
});

// Last Name
const lname = document.getElementById("lname");
const lnameMessage = document.getElementById("lnameMessage");
lname.addEventListener("input", () => {
  const lValue = lname.value.trim();
  const regex = /^[A-Za-z]{2,20}$/;

  if (lValue === "") {
    lname.setAttribute("maxlength", 20);
    lname.setAttribute("onkeydown", "return /[a-zA-Z.]/.test(event.key)");
    msg(error, lnameMessage, "Last name is required.");
    isLname = false;
  } else if (lValue[0] === ".") {
    msg(success, lnameMessage, "Last name is valid.");
    lname.setAttribute("maxlength", "1");
    isLname = true;
  } else if (lValue === fname.value) {
    msg(error, lnameMessage, "Last name can't be same as first name.");
    isLname = false;
  } else if (!isNaN(lValue)) {
    msg(error, lnameMessage, "Only alphabets are allowed.");
    isLname = false;
  } else if (lValue.length < 3) {
    msg(error, lnameMessage, "Minimum three letters required.");
    isLname = false;
  } else if (!/^(?!.*(\w)\1\1)[\w\d]+$/.test(lValue)) {
    msg(
      error,
      lnameMessage,
      "No repeat letters more than 2 times or special characters."
    );
    isLname = false;
  } else if (regex.test(lValue)) {
    lname.setAttribute("onkeydown", "return /[a-zA-Z]/.test(event.key)");
    msg(success, lnameMessage, "Last name is valid.");
    isLname = true;
  } else {
    msg(error, lnameMessage, "No special characters or number please.");
    isLname = false;
  }
  updateFullName();
});

// Full Name
const fullNameInput = document.getElementById("fullName");
function updateFullName() {
  let fullName = "";
  const f_name =
    fname.value.trim().charAt(0).toUpperCase() +
    fname.value.trim().slice(1).toLowerCase();
  userInfo.firstName = f_name;
  if (lname.value.trim().charAt(0) === ".") {
    fullName = f_name;
  } else {
    const l_name =
      lname.value.trim().charAt(0).toUpperCase() +
      lname.value.trim().slice(1).toLowerCase();
    userInfo.lastName = l_name;
    fullName = `${f_name} ${l_name}`;
  }
  fullNameInput.value = fullName;
  userInfo.fullName = fullName;
}

// Email
const uEmail = document.getElementById("uEmail");
const uEmailMessage = document.getElementById("uEmailMessage");
uEmail.addEventListener("input", () => {
  const value = uEmail.value.trim();
  const regex = /^[a-z0-9_.]+@[a-z]+\.[a-z]{2,3}(\.[a-z]{2})?$/;

  if (value === "") {
    msg(error, uEmailMessage, "Email is required.");
    uEmail.setAttribute("onkeydown", "return /[a-zA-Z0-9_.@]/.test(event.key)");
    isEmail = false;
  } else {
    if (value.includes("@") && regex.test(value)) {
      uEmail.setAttribute("onkeydown", "return /[a-zA-Z0-9.]/.test(event.key)");
      msg(success, uEmailMessage, `Valid Email.`);
      userInfo.email = value;
      isEmail = true;
    } else if (value.includes("@")) {
      msg(error, uEmailMessage, `Valid is not Email.`);
      uEmail.setAttribute(
        "onkeydown",
        "return /[a-zA-Z0-9._]/.test(event.key)"
      );
      isEmail = false;
    } else {
      msg(
        error,
        uEmailMessage,
        "Email is invalid. Correct Format: example@domain.com or example@domain.xyz.co"
      );
      uEmail.setAttribute(
        "onkeydown",
        "return /[a-zA-Z0-9_.@]/.test(event.key)"
      );
      isEmail = false;
    }
  }
});

// Country
countries = [
  {
    countryName: "India",
    countryCode: "in",
    phoneCode: "+91",
    phoneDigitLength: 10,
  },
  {
    countryName: "Japan",
    countryCode: "jp",
    phoneCode: "+81",
    phoneDigitLength: 10,
  },
  {
    countryName: "Sri Lanka",
    countryCode: "sl",
    phoneCode: "+94",
    phoneDigitLength: 7,
  },
  {
    countryName: "USA",
    countryCode: "us",
    phoneCode: "+1",
    phoneDigitLength: 10,
  },
  {
    countryName: "China",
    countryCode: "ch",
    phoneCode: "+86",
    phoneDigitLength: 13,
  },
];
const uCountry = document.getElementById("uCountry");
const uContactNumber = document.getElementById("uContactNumber");
const prefixSpan = document.getElementById("prefixSpan");
let phonePrefix = "";
uCountry.addEventListener("change", () => {
  const code = uCountry.value;
  selectedCountry = countries.filter((country) => country.countryCode === code);

  const { countryName, phoneCode, phoneDigitLength } = selectedCountry[0];
  if (selectedCountry) {
    uContactNumber.setAttribute("maxlength", phoneDigitLength);
    prefixSpan.value = phoneCode;
    phonePrefix = phoneCode;
    userInfo.country = countryName;
    isCountry = true;
  } else {
    uContactNumber.removeAttribute("maxlength");
    isCountry = false;
  }
});
// Contact Number
uContactNumber.addEventListener("input", () => {
  let contactNumber = uContactNumber.value;
  // const numberWithPrefix = `${phonePrefix} ${contactNumber}`;
  if (contactNumber === "") {
    msg(error, uNumberMessage, "Contact number is required.");
    isContact = false;
  } else if (contactNumber[0] == "0") {
    msg(
      error,
      uNumberMessage,
      "Could not starts with zero, please check again."
    );
    isContact = false;
  } else if (
    contactNumber.length !== parseInt(uContactNumber.getAttribute("maxlength"))
  ) {
    msg(
      error,
      uNumberMessage,
      `Length must be ${uContactNumber.getAttribute("maxlength")} digits.`
    );
    isContact = false;
  } else {
    msg(success, uNumberMessage, "Contact number is valid.");
    userInfo.contact = `${phonePrefix} ${contactNumber}`;
    isContact = true;
  }
});

// Password
const uPassword = document.getElementById("uPassword");
const uPasswordMessage = document.getElementById("uPasswordMessage");
uPassword.addEventListener("input", () => {
  const password = uPassword.value;
  const regEx =
    /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+<>?]).{8,30}/;
  if (password === "") {
    msg(error, uPasswordMessage, "Password is required.");
    isPassword = false;
  } else if (password.length < 8) {
    msg(error, uPasswordMessage, "Minimum 8 characters required.");
    isPassword = false;
  } else if (!regEx.test(password)) {
    msg(
      error,
      uPasswordMessage,
      "At least one special character, number, capital letter is required."
    );
    isPassword = false;
  } else {
    msg(success, uPasswordMessage, "Password is valid.");
    isPassword = true;
  }
});
// Confirm Password
const cPassword = document.getElementById("cPassword");
const cPasswordMessage = document.getElementById("cPasswordMessage");
cPassword.addEventListener("input", () => {
  const password = cPassword.value;
  if (password === "") {
    msg(error, cPasswordMessage, "Confirm password is required.");
    isConfirmPassword = false;
  } else if (password !== uPassword.value) {
    msg(error, cPasswordMessage, "Passwords do not match.");
    isConfirmPassword = false;
  } else {
    msg(success, cPasswordMessage, "Passwords match.");
    userInfo.password = password;
    isConfirmPassword = true;
  }
});
// show or hide password
const showHide = document.getElementById("showHide");
let passwordVisible = false;
showHide.addEventListener("click", () => {
  if (passwordVisible) {
    uPassword.type = "text";
    cPassword.type = "text";
    showHide.value = "Hide Password";
    passwordVisible = false;
  } else {
    uPassword.type = "password";
    cPassword.type = "password";
    showHide.value = "Show Password";
    passwordVisible = true;
  }
});
// showHide.addEventListener("click",isVisible);

// DOB Picker
const dob = document.getElementById("dob");
const dobMessage = document.getElementById("dobMessage");
dob.addEventListener("input", () => {
  const selectedDate = dob.value;
  if (selectedDate === "") {
    msg(error, dobMessage, "DOB is required.");
    isDOB = false;
  } else if (selectedDate >= "1970-01-01" && selectedDate <= "2020-12-31") {
    msg(success, dobMessage, "DOB is valid.");
    userInfo.dob = selectedDate;
    isDOB = true;
  } else {
    msg(error, dobMessage, "Range: 1950-01-01 to 2010-12-31");
    isDOB = false;
  }
});

// Gender
const genderInputs = document.querySelectorAll('input[name="gender"]');
genderInputs.forEach((input) => {
  input.addEventListener("click", () => {
    const genderValue = input.value;
    userInfo.gender = genderValue;
  });
});

// Address
const addressInput = document.getElementById("address");
addressInput.addEventListener("input", () => {
  if (addressInput.value === "") {
    msg(error, addressMessage, "Address is required.");
    isAddress = false;
  } else {
    msg(success, addressMessage, "Valid Address.");
    userInfo.address = addressInput.value;
    isAddress = true;
  }
});

// City
const cities = [
  {
    city: "Delhi",
    cityCode: "dl",
    regEx: /^1100(0[1-9]|[1-8][0-9]|97)$/,
  },
  {
    city: "Mumbai",
    cityCode: "mh",
    regEx: /^4[0-9]{5}$/,
  },
  {
    city: "Jaipur",
    cityCode: "rj",
    regEx: /^3[0-9]{5}$/,
  },
  {
    city: "Kolkata",
    cityCode: "wb",
    regEx: /^7[0-9]{5}$/,
  },
  {
    city: "Bengaluru",
    cityCode: "tn",
    regEx: /^6[0-9]{5}$/,
  },
  {
    city: "Surat",
    cityCode: "gj",
    regEx: /^3[6-9][0-9]{4}$/,
  },
];

const cityInput = document.getElementById("city");
cityInput.addEventListener("change", () => {
  const code = cityInput.value;
  selectedCity = cities.filter((city) => city.cityCode === code);
  const { city, regEx } = selectedCity[0];
  if (selectedCity.length > 0) {
    userInfo.city = city;
    isCity = true;

    // Pincode
    const pincodeInput = document.getElementById("pincode");
    const pincodeMessage = document.getElementById("pincodeMessage");
    pincodeInput.addEventListener("input", () => {
      const pincode = pincodeInput.value;
      if (pincode === "") {
        msg(error, pincodeMessage, "Pincode is required.");
        isPincode = false;
      } else {
        if (regEx.test(pincode)) {
          msg(success, pincodeMessage, "Pincode is valid.");
          userInfo.pincode = pincode;
          isPincode = true;
        } else {
          msg(error, pincodeMessage, "Pincode not belong to this area.");
        }
      }
    });
  } else {
    isCity = false;
  }
});

// Profile picture upload
function pictureUpload() {
  let fileInput = document.getElementById("profilePic");
  const profilePicMessage = document.getElementById("profilePicMessage");
  let filePath = fileInput.value;
  let allowedExtensions = /(\.jpg|\.jpeg|\.png)$/i;

  if (!allowedExtensions.exec(filePath)) {
    msg(error, profilePicMessage, "Invalid type");
    fileInput.value = "";
    document.getElementById("picturePreview").innerHTML = "";
    return false;
  } else {
    if (fileInput.files && fileInput.files[0]) {
      let reader = new FileReader();
      reader.onload = function (e) {
        document.getElementById("picturePreview").innerHTML =
          '<img class="showPicture" src="' +
          e.target.result +
          '"alt="' +
          fileInput.value +
          '"/>';
      };
      reader.readAsDataURL(fileInput.files[0]);
      msg(success, profilePicMessage, "Valid Picture.");
      userInfo.profilePic = filePath;
      isImage = true;
    }
  }
}

// Document Upload
function docUpload() {
  let fileInput = document.getElementById("idDoc");
  const idDocMessage = document.getElementById("idDocMessage");
  let filePath = fileInput.value;
  let allowedExtensions = /(\.doc|\.pdf|\.docx)$/i;

  if (!allowedExtensions.exec(filePath)) {
    msg(error, idDocMessage, "Invalid type");
    fileInput.value = "";
    return false;
  } else {
    msg(success, idDocMessage, "Identity Valid.");
    userInfo.document = filePath;
    isDOC = true;
  }
}

// Color Picker
const pickColor = document.getElementById("pickColor");
const body = document.body;
pickColor.addEventListener("input", () => {
  const color = pickColor.value;
  body.style.backgroundColor = color;
  userInfo.backgroundColor = color;
});

// Message
const messageInput = document.getElementById("message");
messageInput.addEventListener("input", () => {
  const message = messageInput.value;
  userInfo.message = message;
});

// Validate Function
function validateData() {
  if (!isFname) {
    alert("Please check the first name input.");
    return false;
  } else if (!isLname) {
    alert("Please check the last name input.");
    return false;
  } else if (!isEmail) {
    alert("Please check the email input.");
    return false;
  } else if (!isCountry) {
    alert("Please check the country input.");
    return false;
  } else if (!isContact) {
    alert("Please check the contact input.");
    return false;
  } else if (!isPassword) {
    alert("Please check the password input.");
    return false;
  } else if (!isConfirmPassword) {
    alert("Please check the confirm password input.");
    return false;
  } else if (!isDOB) {
    alert("Please check the DOB input.");
    return false;
  } else if (!isAddress) {
    alert("Please check the Address.");
    return false;
  } else if (!isCity) {
    alert("Please check the City input.");
    return false;
  } else if (!isPincode) {
    alert("Please check the Pincode input.");
    return false;
  } else if (!isImage) {
    alert("Please check the Profile Picture.");
    return false;
  } else if (!isDOC) {
    alert("Please check the Identity Document.");
    return false;
  } else {
    console.log(userInfo);
    confirm("Form validated and submitted successfully.");
    return false;
  }
}

// Message
const success = true;
const error = false;
const msg = (status, msg_id, msg_content) => {
  msg_id.textContent = msg_content;
  msg_id.classList.toggle("success", status);
  msg_id.classList.toggle("error", !status);
};
