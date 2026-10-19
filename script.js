document.getElementById("contactForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let country = document.getElementById("country").value;

    let gender = document.querySelector('input[name="gender"]:checked');

    let courses = document.querySelectorAll('input[name="course"]:checked');

    let result = document.getElementById("result");

    if (courses.length === 0) {
        result.style.color = "red";
        result.textContent = "Please select at least one course.";
        return;
    }

    if (!gender) {
        result.style.color = "red";
        result.textContent = "Please select your gender.";
        return;
    }

    result.style.color = "green";

    result.textContent = "Thank you, " + name + "! Your form was submitted successfully.";

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
    console.log("Courses:", Array.from(courses).map(course => course.value));
    console.log("Gender:", gender.value);
    console.log("Country:", country);

});