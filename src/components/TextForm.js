import React, {useState} from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
    const handleUpClick = () =>{
        let newText = text.toUpperCase(text);
        setText(newText);
        props.showAlert('Converted to Uppercase', 'success');
    }
    const handleLowClick = () =>{
        let newText = text.toLowerCase(text);
        setText(newText);
        props.showAlert('Converted to lowerCase', 'success');
    }
    const handleClearClick = () =>{
        let newText = "";
        setText(newText);
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const [text,setText] = useState('');
    // setText("new Text");
    return (
        <>
        <div className="container" style={{color:props.mode === 'dark'? 'white':'#042743'}}>
            <h1 >{props.heading}</h1>
            <div class="mb-3">
                <textarea className="form-control"  value={text} onChange = {handleOnChange} id="MyBox" placeholder="Enter your text here"rows="8" style={{backgroundColor:props.mode === 'light'? 'white':'grey',color:props.mode === 'dark'? 'white':'#042743'}}></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>

        </div>
        <div className="container my-3" style={{color:props.mode === 'dark'? 'white':'#042743'}}>
            <h2>Your Text  Summary</h2>
            <p>{text.split(" ").length-1} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes to Read </p>
            <h3>Preview</h3>
            <p>{text.length >0 ? text:"Enter something in the textbox above to preview here"}</p>

        </div>
        </>
    )
}
TextForm.propTypes = {
    heading:PropTypes.string
};
