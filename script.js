const form =document.querySelector('#form');
const success = document.querySelector('.w-form-done');
const errorMessage = document.querySelector('.w-form-fail');
// const btnMessage = document.getElementsByClassName('contact-submit-btn');
const btnMessage =document.getElementById('subBtn');
// console.log(form)

if(form){
form.addEventListener("submit", async function(e){
e.preventDefault();
    const formData = new FormData(form);
    console.log(formData, "Form Data");
    const object = Object.fromEntries(formData);
    object.access_key = 'e350bc00-b280-40ea-a796-f4932a3219e2';
    console.log(object, "Json format");
    const json = JSON.stringify(object);
    btnMessage.value = "Please Wait..."

    try{
        const response = await fetch('https://api.web3forms.com/submit', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: json,
        });

        const data = await response.json();
        if(response.ok){
            success.style.display = 'block';
        }else{
            errorMessage.style.display='block';
        }
    }
    catch(error){
        errorMessage.style.display="block"; 

    }
    finally{
        form.reset();

        setTimeout(() => {
             errorMessage.style.display='none';
            success.style.display = 'none';
    btnMessage.value = "Send Message";

            

        }, 3000);
    }

});
}


const teamBlock = document.querySelectorAll('.team-member-block');
// console.log(teamBlock)
if(teamBlock){
teamBlock.forEach((block)=>{
    block.addEventListener('mouseenter', (e)=>{
    const connectBox =e.currentTarget.querySelector('.teams-connect-wrap');
    connectBox.style.bottom= '0px';
   connectBox.transition= cubic-bezier(0.165, 0.84, 0.44, 1);
    
    });
    block.addEventListener('mouseleave', (e)=>{
    const connectBox =e.currentTarget.querySelector('.teams-connect-wrap');
    connectBox.style.bottom= '';
    });
});
}

