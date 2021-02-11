function sendEmail(){
    let body = document.getElementById("body").value
    let subject = document.getElementById("subject").value
    window.open('mailto:Ekennyobiasogu@gmail.com?subject='+subject+'&'+'body='+body)
}