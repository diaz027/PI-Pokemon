const validacion = (data) => {
    const errors = {};

    if(data.name.length < 4){
        errors.name = 'el nombre tiene que tener al menos 4 dijitos'
    } 
    if (!/^[A-Za-z]{1,25}$/i.test(data.name)) {
        errors.name = 'Debe contener solo letras y no exceder los 25 caracteres';
    }

    if(parseInt(data.attack) > 150){
        errors.attack = 'el ataque no puede ser mayor a 150'
    }
    if (!/^\d{1,4}$/.test(data.attack)) {
        errors.attack = 'El ataque debe ser un número de hasta 4 dígitos';
    }

    if(parseInt(data.defense) > 90){
        errors.defense = 'la defensa no puede ser mayor a 90'
    }

    if (!/^\d{1,4}$/.test(data.defense)) {
        errors.defense = 'La defensa debe ser un número de hasta 4 dígitos';
    }

    if (!/^\d{1,4}$/.test(data.height)) {
        errors.height = 'La altura debe ser un número de hasta 4 dígitos';
      }

    if (!/^\d{1,4}$/.test(data.weight)) {
        errors.weight = 'El peso debe ser un número de hasta 4 dígitos';
    }

    if(parseInt(data.hp) > 150){
        errors.hp = 'la vida no puede ser mayor a 150'
    }
    if (!/^\d{1,4}$/.test(data.hp)) {
        errors.hp = 'Los años de vida deben ser un número de hasta 4 dígitos';
    }
    return errors;
};

export default validacion;