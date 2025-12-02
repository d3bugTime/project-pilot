import {vulnerablePasswords} from "./vulnerablePasswords.ts";

export interface message {
    validation: boolean;
    outputMessage: string;
}

export default function ValidatorLogic(password: string): message {
    const passwordChecker: string[] = password.split("");
    let counter: number = 0;
    let value: message;
    
    // console.log(password.length);

    if (passwordChecker.length > 7) {
        passwordChecker.map(character => {
            if (Number(character)) {
                counter++;
            }
        });

        if (counter >= 3) {
            // console.log(counter);
            if (!vulnerablePasswords.includes(password)) {
                value = { validation: true, outputMessage: "Password valido" };
            } else {
                value = { validation: false, outputMessage: "Password hackeado" };
            }
            
        } else {
            value = { validation: false, outputMessage: "Minimo 3 digitos" };
        }
    } else {
        value = { validation: false, outputMessage: "Minimo 8 caracteres" };
    }

    return value;
}