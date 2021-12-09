import React, {useState} from 'react'


function TextForm(props) {

    const handleUpClick = () =>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase","success");
    }

    const handleLowClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase","success");
    }
    
    const handleOnChange = (event) =>{
        // console.log(event);
        setText(event.target.value);
    }

    const handleRevClick = () =>{

        function reverseString(str) {
            // // Step 1. Use the split() method to return a new array
            // var splitString = str.split(""); // var splitString = "hello".split("");
            // // ["h", "e", "l", "l", "o"]
         
            // // Step 2. Use the reverse() method to reverse the new created array
            // var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
            // // ["o", "l", "l", "e", "h"]
         
            // // Step 3. Use the join() method to join all elements of the array into a string
            // var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
            // // "olleh"
            
            // //Step 4. Return the reversed string
            // return joinArray; // "olleh"

            //SHORTHAND VERSION
            return str.split("").reverse().join("");
        }
        const newText = reverseString(text);
        setText(newText);
        props.showAlert("Converted to ReverseCase","success");
    }

    const handleAltClick = () =>{

         function AltText(text)
         {
             console.log(text)
            var sp = text.split("");
            for(let i=0;i<sp.length;i+=2)
            {
                    sp[i]=sp[i].toUpperCase();
            }
            console.log(sp);
            return sp.join("");

         }
          let newText = AltText(text);
          setText(newText);
          props.showAlert("Converted to ALternativeCase","success");
    }

    const handleMorseClick = () =>{
        const morseCode = {
            "A": ".-",
            "B": "-...",
            "C": "-.-.",
            "D": "-..",
            "E": ".",
            "F": "..-.",
            "G": "--.",
            "H": "....",
            "I": "..",
            "J": ".---",
            "K": "-.-",
            "L": ".-..",
            "M": "--",
            "N": "-.",
            "O": "---",
            "P": ".--.",
            "Q": "--.-",
            "R": ".-.",
            "S": "...",
            "T": "-",
            "U": "..-",
            "W": ".--",
            "X": "-..-",
            "Y": "-.--",
            "Z": "--.."
         }
         const convertToMorse = (str) => {
            return str.toUpperCase().split("").map(el => {
               return morseCode[el] ? morseCode[el] : el;
            }).join("");
         };
         const newText = convertToMorse(text);
         setText(newText);
         props.showAlert("Morsed  the Text","success");
    }

    const handleClearText = () =>{
        let newText = '';
        setText(newText);
        props.showAlert("Cleared the Text","success");
    }

    const [text, setText] = useState('');

    return (
        <> 
    <div className="container" style={{color: props.mode=== 'dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
     <div className="mb-3">
       <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode=== 'dark'?'grey':'white' , color: props.mode=== 'dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
     </div>
     <button className="btn btn-primary mx-2" onClick={handleUpClick}>Upper Case</button>
     <button className="btn btn-primary mx-2" onClick={handleLowClick}>Lower Case</button>
     <button className="btn btn-primary mx-2" onClick={handleAltClick}>aLtErNaTe cAsE</button>
     <button className="btn btn-primary mx-2" onClick={handleRevClick}>Reverse Case</button>
     <button className="btn btn-primary mx-2" onClick={handleMorseClick}>Morse Code Converter</button>
     <button className="btn btn-primary mx-2" onClick={handleClearText}>Clear Text</button>
     </div>
     <div className="container my-3" style={{color: props.mode=== 'dark'?'white':'#042743'}}>
         <h1>Your Text Summary</h1>
         <p>{text.split(" ").length} Words and  {text.length} Characters</p>
         <p>{text.split(" ").length * 0.08} Minutes Read</p>
         <h3>Preview</h3>
         <p>{text.length>0?text:"Enter Something to Preview"}</p>
     </div>
     </>
    )
}

export default TextForm
