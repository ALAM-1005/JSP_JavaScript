let form = document.getElementById('reg_form');

form.addEventListener('submit',(event)=>{

  event.preventDefault();

  let first_name = event.target.fname.value;
  let last_name = event.target.lname.value;
  let email= event.target.email.value;
  let pass = event.target.password.value;
  let conf_pass = event.target.confirm_password.value;


  if(first_name== ''){

    alert('Please fill the First name');
    return false
  }

  if(last_name == ''){

    alert('Please fill the Last name');
    return false
  }

  if(email == ''){

    alert('Please fill the valid email');
    return false
  }

  if(pass== ''){

    alert('Please fill the passWord');
    return false
  }

  if(pass.length<6  ){

    alert('Please make sure Your password is more the six character');
    return false
  }

  if(pass.length>10){

    alert('Please make sure Your password is  less than 10 character');
    return false
  }

  if(pass !== conf_pass){

    alert('Passwors is not matching');
    return false
  }

  let user={

    name:first_name+last_name,
    email:email,
    password:pass,
  }


  // here we need to write api to send the data to server
  alert('form is submitted successfully');

  form.reset();
  return true
})