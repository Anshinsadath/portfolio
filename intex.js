function sendmail(){
    var params = {
        name: document.getElementById("name").value ,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };
    const serviceID = "service_kztfbhh";
const templateID = "template_lsrs5ya";

emailjs
.send(serviceID,templateID,params)
.then(res => {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("your message sent successfullly")
    })
.catch((err) => console.log(err));
}

