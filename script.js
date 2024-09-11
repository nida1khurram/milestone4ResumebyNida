function generateResume() {
    var _a;
    // provide type assertion all input
    // profile pic 1
    var profilePictureInput = document.getElementById('profilePicture');
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    var interestElement = document.getElementById('interest');
    // element condition
    // profile pic 2
    if (profilePictureInput &&
        nameElement && emailElement &&
        phoneElement && educationElement && experienceElement &&
        skillsElement && interestElement) {
        // nameelement me jo value hogi name assign ho gi
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        var interest = interestElement.value;
        // profile pic 3
        var profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureUrl = profilePictureFile ? URL.createObjectURL(profilePictureFile) : "";
        // create resume output //  profile pic 4
        var resumeOutput = "\n<h2><u><center>Resume </center></u></h2>\n\n".concat(profilePictureUrl ? "<img src=\"".concat(profilePictureUrl, "\" alt=\"profile pic\" class=\"profilePicture\">") : "", "\n\n<p contenteditable=\"true\"> <u><strong>Full Name:</u></strong> <span contenteditable=\"true\"> &nbsp; ").concat(name_1, " </span></p>\n<p contenteditable=\"true\"> <u><strong>Email:</u></strong> <span contenteditable=\"true\"> &nbsp; ").concat(email, " </span></p>\n<p contenteditable=\"true\"> <u><strong>Phone No:</u></strong> <span contenteditable=\"true\"> &nbsp; ").concat(phone, " </span></p>\n\n<h3><u>Education: </u></h3>\n<p contenteditable=\"true\"><span contenteditable=\"true\">\n").concat(education, "</span></p>\n\n<h3><u>Experience: </u></h3>\n<p contenteditable=\"true\"><span contenteditable=\"true\">\n").concat(experience, "</span></p>\n\n<h3><u>Skills: </u></h3>\n<p contenteditable=\"true\"><span contenteditable=\"true\">\n").concat(skills, "</span></p>\n\n<h3><u>Interest: </u></h3>\n<p contenteditable=\"true\"><span contenteditable=\"true\">\n").concat(interest, "</span></p>\n");
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            makeEditable();
        }
    }
    else {
        console.error('one or more elements are missing');
    }
}
;
// editable func
function makeEditable() {
    var tagNames = ['p', 'span'];
    tagNames.forEach(function (tagName) {
        // select all element by tag name
        var elements = document.querySelectorAll(tagName);
        elements.forEach(function (element) {
            // set content editable true
            element.setAttribute("contenteditable", "true");
        });
    });
}
