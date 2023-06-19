// Boolean value for each input
let isFname = false;

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
    userInfo.firstName = fValue;
    isFname = true;
  } else {
    msg(error, fnameMessage, "No special characters or number please.");
    isFname = false;
  }
  //   updateFullName();
});

// Validate Function
function validateData() {
  if (!isFname) {
    alert("Please check the first name input.");
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
