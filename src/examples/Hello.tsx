import {useCallback, useState} from "react";
// import * as React from "react";

interface Props {
    name: string;
    enthusiasmLevel?: number;
}

// export default function Hello({ name, enthusiasmLevel = 1 }: Props) {
//     if (enthusiasmLevel <= 0) {
//        throw new Error("You could be a little more enthusiastic. :D");
//     }
//    
//     return (
//         <>
//             Hello {name + getExclamationMarks(enthusiasmLevel)}
//         </>
//     );
// }
//
// function getExclamationMarks(numChars: number) {
//     return "!".repeat(numChars);
// }

// export default function Hello({ name, enthusiasmLevel = 1 }: Props) {
//     const [ currentEnthusiasm, setCurrentEnthusiasm ] = useState<number>(enthusiasmLevel);
//    
//     const onIncrement = () => setCurrentEnthusiasm((prev) => prev + 1);
//     const onDecrement = () => setCurrentEnthusiasm((prev) => prev - 1);
//
//     if (enthusiasmLevel <= 0) {
//        throw new Error("Be a little more enthusiastic :D");
//     }
//
//     return (
//         <>
//             <div>
//                 Hello {name + getExclamationMarks(currentEnthusiasm)}
//             </div>
//             <div>
//                 <button onClick={onDecrement}>-</button>
//                 <button onClick={onIncrement}>+</button>
//             </div>
//         </>
//     );
// }

export default function Hello({ name, enthusiasmLevel = 1 }: Props) {
    const [ currentEnthusiasm, setCurrentEnthusiasm ] = useState<number>(
        Math.max(1, enthusiasmLevel)
    );
    
    const updateEnthusiasm = useCallback((change: number) => {
        setCurrentEnthusiasm((prev) => Math.max(1, prev + change));
    }, []);
    
    const onIncrement = useCallback(() => {
        updateEnthusiasm(1);
    }, [updateEnthusiasm]);

    const onDecrement = useCallback(() => {
        updateEnthusiasm(-1);
    }, [updateEnthusiasm]);
    
    return (
        <>
            <div>
                Hello {name + getExclamationMarks(currentEnthusiasm)}
            </div>
            <div>
                <button onClick={onDecrement}>-</button>
                <button onClick={onIncrement}>+</button>
            </div>
        </>       
    );
}

// function getExclamationMarks(numChars: number) {
//     return "!".repeat(numChars);
// }

const getExclamationMarks = (numChars: number): string =>
    "!".repeat(Math.max(0, Math.floor(numChars)));