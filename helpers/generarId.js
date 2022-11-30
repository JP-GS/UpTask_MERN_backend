const generarId = () => {

    const random = Math.random().toString(32).substring(2);
    const fecha = Date.now().toString(32);

    return random + fecha;
    console.log(random)
    console.log(fecha)
};

export default generarId;