export default function ValidatorLogic(password: string) {
    const passwordChecker: string[] = password.split("");
    let counter: number = 0;

    // console.log(password.length);

    if (passwordChecker.length > 7) {
        passwordChecker.map(character => {
            if (Number(character)) {
                counter++;
            }
        });

        if (counter >= 3) {
            // console.log(counter);
            console.log("Password aceptado");
        } else {
            console.log("Minimo 3 digitos");
        }
    } else {
        console.log("Minimo 8 caracteres");
    }

    return "Procesando...";
}