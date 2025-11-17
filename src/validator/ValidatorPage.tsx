import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "../App.css";
import ValidatorLogic, {type message} from "./ValidatorLogic.tsx";
import {type SyntheticEvent, useState} from "react";

export default function ValidatorPage() {
    
    const [currentMessage, setCurrentMessage] = useState<message>({
        validation: false,
        outputMessage: ""
    });
    
    function handleSubmit(event: SyntheticEvent<HTMLFormElement>) {
        // Prevent the browser from reloading the page
        event.preventDefault();

        console.log("El valor del event es:", event);
        
        // const form = event;
        const formData = new FormData(event.currentTarget); 
        console.log(formData);
        
        const passwordInput = formData.get("passwordInput");
        console.log(passwordInput);
        
        const outputMessage: message = ValidatorLogic(passwordInput as string);
        
        setCurrentMessage(outputMessage);
        
        return false;
    }
    
    return (
        <>
            <form method={"post"} onSubmit={event => handleSubmit(event)}>
                <Card variant="outlined" className={"container"}>
                    <div>
                        <h4>
                            Password Validator
                        </h4><br/>
                        <div>
                            <TextField id="passwordInput" name="passwordInput" type="text" label="Password" variant="outlined" className={"full-width"} />
                        </div><br/>
                        <div className={"center-align"}>
                            <Button type="submit" variant="contained">Validate</Button>
                        </div><br/>

                        <div className={
                            currentMessage.validation ? "green-label" : "red-label"
                        }>
                            {currentMessage.outputMessage}
                        </div>
                    </div>
                </Card>    
            </form>
        </>
    );
}