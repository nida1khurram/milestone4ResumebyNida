// Taking elements from HTML
// This selects the HTML elements for the input form, the main resume builder section, and the output container where the resume will be displayed.
var inputField = document.querySelector(".inputField");
var main = document.querySelector(".resume-builder");
var outputContainer = document.querySelector(".output_container");
// Boolean Variable to Track Visibility:
// A flag to check if the input form is currently hidden.
var isHidden = true;
// Function to toggle between input form and resume preview
// This function controls the visibility of the input form and the resume preview.
function hide() {
    var _a;
    // Conditional Statement for Toggling:
    // Checks if the input form is hidden.
    if (isHidden) {
        // Hide the input form and show the resume preview
        // Hides the input form and sets the flag to false.
        main.style.display = "none";
        isHidden = false;
        // Select Profile Picture Input and Get File:
        // Selects the profile picture input, retrieves the file, and initializes a variable for the picture URL.
        var profilePictureInput = inputField.querySelector("#profilePicture");
        var profilePictureFile = (_a = profilePictureInput === null || profilePictureInput === void 0 ? void 0 : profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureURL = "";
        // Create Object URL for the Picture File:
        // Generates a URL for the uploaded picture file.
        if (profilePictureFile) {
            profilePictureURL = URL.createObjectURL(profilePictureFile);
        }
        // Display Resume Preview:
        // Sets the output container's display to block, making it visible.
        outputContainer.style.display = "block";
        // Insert HTML for Resume Preview:
        // Constructs the HTML structure for the resume preview, filling in the user's inputs and displaying the profile picture if provided.
        outputContainer.innerHTML = "\n            <div class=\"output\">\n                <div class=\"heading\">\n                ".concat(profilePictureURL ? "<img src=\"".concat(profilePictureURL, "\" alt=\"Profile Image\" class=\"profile-pic\">") : "", "\n                    <h1>").concat(inputField["name"].value, "</h1>\n                    <h4>").concat(inputField["title"].value, "</h4>\n                    \n                </div>\n                <div class=\"info\">\n                    <div class=\"left\">\n                        <div class=\"box\">\n                            <h2>Objective</h2>\n                            <p>").concat(inputField["objective"].value, "</p>\n                        </div>\n                        <div class=\"box\">\n                            <h2>Skills</h2>\n                            <p>\n                            ").concat(inputField["skills"].value, "</p>\n                        </div>\n                        <div class=\"box\">\n                            <h2>Academic Details</h2>\n                            <p>").concat(inputField["academic_details"].value, "</p>\n                        </div>\n                        <div class=\"box\">\n                            <h2>Contact</h2>\n                            <p>").concat(inputField["contact"].value, "</p>\n                        </div>\n                    </div>\n                    <div class=\"right\">\n                        <div class=\"box\">\n                            <h2>Work Experience</h2>\n                            <p>").concat(inputField["work_experience"].value, "</p>\n                        </div>\n                        <div class=\"box\">\n                            <h2>Achievements</h2>\n                            <p>").concat(inputField["activities"].value, "</p>\n                        </div>\n                        <div class=\"box\">\n                            <h2>Activities & Interest</h2>\n                            <p>").concat(inputField["activities"].value, "</p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <button onclick=\"print()\">Print Resume</button>\n        ");
        // Show Input Form and Hide Resume Preview:
        // Reverts back to showing the input form and hiding the resume preview when toggled again.
    }
    else {
        // Show the input form and hide the resume preview
        main.style.display = "block";
        isHidden = true;
        outputContainer.style.display = "none";
        outputContainer.innerHTML = "";
    }
}
