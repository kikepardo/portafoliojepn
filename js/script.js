document.getElementById("contactForm").addEventListener("submit",function(event){
    event.preventDefault();
    const name=document.getElementById("name").Value;
    const email=document.getElementById("email").value;
    const message=document.getElementById("message").value;
    const mailtolink=`mailto:enrique.pardo@ecptexonline.com?subject=Mensaje%20de%20${name}&body=Nombre:%20${name}%0AEmail:%20${email}%0AMensaje:%20${message}`;
    window.location.href=mailtolink;
});