

export default function validation(values){

    const errors = {};

    const email_pattern=/^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;

    if (values.User_first_name===""){
  errors.User_first_name="ce champ est obligatoire";

    }
    if (values.User_last_name===""){
        errors.User_last_name="ce champ est obligatoire";
        
    }
    
    if (values.User_email===""){
        errors. User_email="ce champ est obligatoire";
        
    } else if(!email_pattern.test(values.User_email)){
        errors.User_email="cette adresse email est invalide"
    }

    if(values.message===""){
        errors.message="ce champ est obligatoire"
    }

    return errors;

}
