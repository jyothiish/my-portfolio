function sendMail() {
    let parms = {
        name: document.getElementById("fname").value,
        email: document.getElementById("ed").value,
        
        message: document.getElementById("es").value, 
        
    };
    emailjs.send("service_kj5pxdp", "template_qpo9rfr", parms)
        .then(function(response) {
            alert("Email Sent!!");
        }, function(error) {
            alert("Failed to send email: " + error);
        });
}



