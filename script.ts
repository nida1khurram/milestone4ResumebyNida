

// Taking elements from HTML
// This selects the HTML elements for the input form, the main resume builder section, and the output container where the resume will be displayed.
const inputField = document.querySelector(".inputField") as HTMLFormElement;
const main = document.querySelector(".resume-builder") as HTMLDivElement;
const outputContainer = document.querySelector(".output_container") as HTMLDivElement;

// Boolean Variable to Track Visibility:
// A flag to check if the input form is currently hidden.
let isHidden = true;


// Function to toggle between input form and resume preview
// This function controls the visibility of the input form and the resume preview.
function hide() {

    // Conditional Statement for Toggling:
    // Checks if the input form is hidden.
    if (isHidden) {

        // Hide the input form and show the resume preview
        // Hides the input form and sets the flag to false.
        main.style.display = "none";
        isHidden = false;

        // Select Profile Picture Input and Get File:
        // Selects the profile picture input, retrieves the file, and initializes a variable for the picture URL.
        const profilePictureInput = inputField.querySelector("#profilePicture") as HTMLInputElement;
        const profilePictureFile = profilePictureInput?.files?.[0];
        let profilePictureURL = "";

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
        outputContainer.innerHTML = `
            <div class="output">
                <div class="heading">
                ${profilePictureURL ? `<img src="${profilePictureURL}" alt="Profile Image" class="profile-pic">` : ""}
                    <h1>${(inputField["name"] as unknown as HTMLInputElement).value}</h1>
                    <h4>${(inputField["title"] as unknown as HTMLInputElement).value}</h4>
                    
                </div>
                <div class="info">
                    <div class="left">
                        <div class="box">
                            <h2>Objective</h2>
                            <p>${(inputField["objective"] as unknown as HTMLTextAreaElement).value}</p>
                        </div>
                        <div class="box">
                            <h2>Skills</h2>
                            <p>
                            ${(inputField["skills"] as unknown as HTMLTextAreaElement).value}</p>
                        </div>
                        <div class="box">
                            <h2>Academic Details</h2>
                            <p>${(inputField["academic_details"] as unknown as HTMLTextAreaElement).value}</p>
                        </div>
                        <div class="box">
                            <h2>Contact</h2>
                            <p>${(inputField["contact"] as unknown as HTMLInputElement).value}</p>
                        </div>
                    </div>
                    <div class="right">
                        <div class="box">
                            <h2>Work Experience</h2>
                            <p>${(inputField["work_experience"] as unknown as HTMLTextAreaElement).value}</p>
                        </div>
                        <div class="box">
                            <h2>Achievements</h2>
                            <p>${(inputField["activities"] as unknown as HTMLTextAreaElement).value}</p>
                        </div>
                        <div class="box">
                            <h2>Activities & Interest</h2>
                            <p>${(inputField["activities"] as unknown as HTMLTextAreaElement).value}</p>
                        </div>
                    </div>
                </div>
            </div>
            <button onclick="print()">Print Resume</button>
        `;

        // Show Input Form and Hide Resume Preview:
        // Reverts back to showing the input form and hiding the resume preview when toggled again.
    } else {
        // Show the input form and hide the resume preview
        main.style.display = "block";
        isHidden = true;

        outputContainer.style.display = "none";
        outputContainer.innerHTML = "";
    }
}
