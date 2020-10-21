const fields = document.querySelectorAll('[required]');

function ValidateField(field) {

  function verifyErrors() {

    let foundError = false;

    for(let error in field.validity) {
      if (error != 'customError' && field.validity[error]) {
        foundError = error;
      }
    }   
    return foundError;
  }

  function customMessage(typeError) {

    const messages = {
      text: {
        valueMissing: "Por favor, preencha este campo."
      },      
      textarea: {
        valueMissing: "Por favor, preencha este campo."
      },
      url: {
        valueMissing: "Url é obrigatória.",
        typeMismatch: "Por favor, preencha uma url válida."
      }
    }

    return messages[field.type][typeError];
  }

  function setCustomMessage(message) {

    if (message) {
      field.setCustomValidity(message);
    } else {
      field.setCustomValidity('');
    }
  }
 
  return function() {

    const error = verifyErrors();

    if(error) {
      const message = customMessage(error);
      setCustomMessage(message);
    } else {
      setCustomMessage();
    }
  }
}

function customValidation(event) {
  const field = event.target; 
  const validation = ValidateField(field); 

  validation();
}

for ( field of fields ) {
  field.addEventListener('invalid', customValidation);
}
