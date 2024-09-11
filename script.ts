
function generateResume(): void {

// provide type assertion all input
// profile pic 1
const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement;

const nameElement = document.getElementById('name') as HTMLInputElement;
const emailElement = document.getElementById('email') as HTMLInputElement;
const phoneElement = document.getElementById('phone') as HTMLInputElement;
const educationElement = document.getElementById('education') as HTMLInputElement;
const experienceElement = document.getElementById('experience') as HTMLInputElement;
const skillsElement = document.getElementById('skills') as HTMLInputElement;
const interestElement = document.getElementById('interest') as HTMLInputElement;

// element condition
// profile pic 2
if(profilePictureInput && 
    nameElement && emailElement && 
    phoneElement && educationElement && experienceElement && 
    skillsElement && interestElement){
    // nameelement me jo value hogi name assign ho gi
    const name = nameElement.value;
    const email = emailElement.value;
    const phone = phoneElement.value;
    const education = educationElement.value;
    const experience = experienceElement.value;
    const skills = skillsElement.value;
    const interest = interestElement.value;

 // profile pic 3
 const profilePictureFile = profilePictureInput.files?.[0]
 const profilePictureUrl = profilePictureFile ? URL.createObjectURL(profilePictureFile) : "";

// create resume output //  profile pic 4
const resumeOutput = `
<h2><u><center>Resume </center></u></h2>

${profilePictureUrl ? `<img src="${profilePictureUrl}" alt="profile pic" class="profilePicture">` : ""}

<p contenteditable="true"> <u><strong>Full Name:</u></strong> <span contenteditable="true"> &nbsp; ${name} </span></p>
<p contenteditable="true"> <u><strong>Email:</u></strong> <span contenteditable="true"> &nbsp; ${email} </span></p>
<p contenteditable="true"> <u><strong>Phone No:</u></strong> <span contenteditable="true"> &nbsp; ${phone} </span></p>

<h3><u>Education: </u></h3>
<p contenteditable="true"><span contenteditable="true">
${education}</span></p>

<h3><u>Experience: </u></h3>
<p contenteditable="true"><span contenteditable="true">
${experience}</span></p>

<h3><u>Skills: </u></h3>
<p contenteditable="true"><span contenteditable="true">
${skills}</span></p>

<h3><u>Interest: </u></h3>
<p contenteditable="true"><span contenteditable="true">
${interest}</span></p>
`;

const resumeOutputElement = document.getElementById('resumeOutput')
if(resumeOutputElement){
    resumeOutputElement.innerHTML = resumeOutput;
    makeEditable();
}
}else{
    console.error('one or more elements are missing')
}
};

// editable func
function   makeEditable():void{
    const tagNames:string[]=['p', 'span'];
    tagNames.forEach((tagName)=>{
        // select all element by tag name
        const elements = document.querySelectorAll(tagName);
        elements.forEach((element)=>{ 
        // set content editable true
        (element as HTMLElement).setAttribute("contenteditable","true");
    });

});
}
