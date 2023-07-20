const form = document.getElementById('form-container');
const inputs = document.querySelectorAll('#form-container input');

const regularExp = {
    fullName: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, //letras y espacios, pueden llevar acentos
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, 
    postal: /^\d{3,5}$/, //de 3 a 5 números
    phone: /^\d{7,10}$/,
    city: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    address: /^[a-zA-ZÀ-ÿ0-9\s]{1,40}$/
}
const campos = {
    fullName: false,
    email: false,
    postal: false,
    phone: false,
    city: false,
    address: false,
}

const validation = (e) => {
    switch(e.target.name) {
        case "email":
            validationInputs(regularExp.email, e.target, "email");
        break;
        case "phone":
            validationInputs(regularExp.phone, e.target, "phone");
        break;
        case "fullName":
            validationInputs(regularExp.fullName, e.target, "fullName");
        break;
        case "address":
            validationInputs(regularExp.address, e.target, "address");
        break;
        case "city":
            validationInputs(regularExp.city, e.target, "city");
        break;
        case "postal":
            validationInputs(regularExp.postal, e.target, "postal");
        break;
    }
}
const validationInputs = (expresion, input, campo) => {
    if(expresion.test(input.value)){
        document.getElementById(`${campo}`).classList.remove('form-inputs-error');
        document.getElementById(`${campo}`).classList.add('form-inputs-succes');
        document.querySelector(`#form__${campo} .formulario__input-error`).classList.remove('formulario__input-error-active');
        campos[campo] = true;
    } else {
        document.getElementById(`${campo}`).classList.add('form-inputs-error')
        document.querySelector(`#form__${campo} .formulario__input-error`).classList.add('formulario__input-error-active');
        document.getElementById(`${campo}`).classList.remove('form-inputs-succes');
        campos[campo] = false;
    }
}

inputs.forEach((input)=>{
    input.addEventListener('keyup', validation),
    input.addEventListener('blur', validation)
})
form.addEventListener('submit', (e)=>{
    e.preventDefault();

    const saveInfo = document.getElementById('save');

    if(campos.email && campos.email && campos.phone && campos.city && campos.postal && campos.address && saveInfo.checked){
        form.reset();
        window.alert('Form sent successfully');  

    } else{
        window.alert('NO Form sent successfully');    
    }

});

