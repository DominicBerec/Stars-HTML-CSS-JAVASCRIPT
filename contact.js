function addUser(event) {
    // Prevent the default form submission (page reload)
    event.preventDefault();

    // Get form values
    var params = {
        email: document.getElementById("Email").value,
        name: document.getElementById("Name").value,
        message: document.getElementById("Message").value,
        time: new Date().toLocaleString(),
    };

    const serviceID = "service_s8jlt4g";
    const templateID = "template_yghwlru";

    // Send email using emailjs
    emailjs.send(serviceID, templateID, params)
        .then(res => {
            // Clear form fields after successful submission
            document.getElementById("Email").value = "";
            document.getElementById("Message").value = "";
            document.getElementById("Name").value = "";
            console.log(res);
            alert("Your message was sent successfully.");
        })
        .catch(err => console.log(err));
}
