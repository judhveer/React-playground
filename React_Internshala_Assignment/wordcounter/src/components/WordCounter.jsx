import React, { useRef, useState } from 'react'

export default function WordCounter() {

    // const [charCount, setCharCount] = useState(0);
    // const [wordCount, setWordCount] = useState(0); 
    const textRef = useRef(null);
    const [text, setText] = useState("");
  
    const counter = () => {
        const textValue = textRef.current.value;
        setText(textValue);
    }

    const clearText = () => {
        setText("");
        textRef.current.value = "";
    }

    const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;;

    return (
    
    <main className='main'>
        <div className='textBox'>
            <textarea 
            ref={textRef} placeholder='Type or paste your text' onChange={counter}></textarea>
        </div>
        <button className='clearButton' onClick={clearText} disabled={text.length === 0}>Clear</button>
        <div className="counter">
            <button className='charButton'>Character: {text.length}</button>
            <button className='wordButton'>Word: {wordCount}</button>
        </div>
    </main>
  )
}
