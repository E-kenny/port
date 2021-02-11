function sendEmail(){
    let body = document.getElementById("body").value
    let name = document.getElementById("name").value
    window.open('mailto:Ekennyobiasogu@gmail.com?subject=name&body=body')
    // sendEmail.send({
    //     Host : "smtp.gmail.com",
    //     Username : "mathewobiasogu@gmail.com",
    //     password : "mathew2468",
    //     To : "ekennyobiasogu@gmail.com",
    //     From : "mathewobiasogu@gmail.com",
    //     Subject : name,
    //     Body : body,
    // }).then(
    //     message => alert("mail sent successfully")
    // );
    alert("what's up")

}