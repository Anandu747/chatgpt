document.addEventListener('DOMContentLoaded',function () {
    const sidebar = document.getElementById('sidebar');
    const icon = document.getElementById('icon');

    icon.addEventListener("click",function () {
        sidebar.classList.toggle('open');
    });
});


const sendBtn=document.getElementById("sendButton");
const chatBx=document.getElementById("chatContainer");
const inputBx=document.querySelector(".text");
const qtn=document.getElementById("question");
const res=document.getElementById("responce");

sendBtn.addEventListener("click",()=> {
    qtn.innerHTML=inputBx.value;
})






