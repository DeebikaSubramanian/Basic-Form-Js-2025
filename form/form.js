

const FormElement=document.getElementById("FormId")
FormElement.addEventListener("submit",function(event)
{
    event.preventDefault();
    const UserName=document.getElementById("uName").value;
    const Email=document.getElementById("Email").value;
    
    const password=document.getElementById("pWord").value;
    const confirmPass=document.getElementById("confirmPW").value;
    isValid="true";
   // console.log(UserName,Email,password,confirmPass);

    UserNamePattern=/^[A-Za-z]+ [A-Za-z]+$/;
    console.log(UserNamePattern)
    
   if(UserName=="" )
   {
        document.getElementById("uNameErr").innerText="*Name is required"
        isValid="false"
   }
   else if(!UserNamePattern.test(UserName))
   {
    document.getElementById("uNameErr").innerText="Enter Your Full Name"
    isValid="false"
   }
   else if(UserNamePattern.test(UserName))
   {
    document.getElementById("uNameErr").innerText=""
    isValid="true"
   }

   if(Email=="")
   {
        document.getElementById("emailErr").innerText="*Email Required"
        isValid="false"
   }
   else
   {
        document.getElementById("emailErr").innerText=""
        isValid="true"
   }

   if(password=="")
   {
        document.getElementById("pWordErr").innerText="*Password is required"
        isValid="false"
   }
   else if(password.length<3 || password.length>=10)
   {
        document.getElementById("pWordErr").innerText="*Enter Password between 3 and 10 characters"
        isValid="false"
   }
   else
   {
        document.getElementById("pWordErr").innerText=""
        isValid="true"
   }

   if(confirmPass=="")
   {
        document.getElementById("confirmPWErr").innerText="*Confirm Password is required"
        isValid="false"
   }
    if(confirmPass!=password)
   {
        document.getElementById("confirmPWErr").innerText="Password not match"
        isValid="false"
   }
   else{
    document.getElementById("confirmPWErr").innerText=""
    isValid="true"
   }

   if(isValid=="true")
   {
    alert(`${UserName} Welcome to our Page`)
   }
})