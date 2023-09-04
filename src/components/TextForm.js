import React, { useState } from 'react'

export default function TextForm(props) {
    const aboutReact = `
React: A JavaScript Library for Building User Interfaces

- React is an open-source JavaScript library developed by Facebook.
- It's used for building user interfaces (UIs) in web applications.
- React makes it easier to create interactive and dynamic web apps.
- It follows a component-based architecture for UI development.
- Components are reusable, encapsulated units of UI.
- React uses a virtual representation of the DOM for efficient updates.
- JSX allows writing UI components with HTML-like syntax.
- State and props manage data and communication between components.
- Reactivity ensures UI updates when component state changes.
- Unidirectional data flow simplifies data management.
- Lifecycle methods control component behavior at different stages.
- Hooks enable using state and other React features in functional components.
- React's ecosystem includes libraries like React Router and Redux.
- It's widely adopted for its efficiency, modularity, and developer-friendly features.
`;

    const stripHtmlTags = (htmlString) => {
        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = htmlString;
        return tempDiv.textContent || tempDiv.innerText || "";
    };
    const [text, setText] = useState("");
    const AboutReact = () => {
        //console.log("Uppercase button was clicked");
        let newText = aboutReact;
        setText(stripHtmlTags(aboutReact));
    }
    const HandleUpClick = () => {
        //console.log("Uppercase button was clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase successfully", "success");
    }

    const HandleToDelete = () => {
        let newText = "";
        setText(newText);
        props.showAlert("Text deleted successfully", "danger");
    }

    const HandleLoClick = () => {
        //console.log("Uppercase button was clicked");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase successfully", "success");
    }

    const HandleToCopy = () => {
        var text = document.getElementById("myText");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Tex copied successfully", "success");
    }

    const HandleOnChange = (event) => {
        //console.log("On change");
        setText(event.target.value);
    }

    /* The syntax `/[  ]+/` represents a regular expression in JavaScript. Let's break down the elements of this regular expression:
 
 1. `/`: The forward slashes `/` are used to enclose the regular expression pattern. In JavaScript, it's a common convention to define regular expressions this way.
 
 2. `[ ]`: Inside the square brackets `[ ]`, there is a space. In a regular expression, square brackets are used to define a character set, meaning any character inside the brackets can be a valid match. In this case, the character set consists of a single space character.
 
 3. `+`: The plus symbol `+` is a quantifier that specifies that the preceding character or character set (in this case, the space) should match one or more times. It means it will look for one or more consecutive spaces.
 
 So, when you put it all together:
 
 - `/[  ]+/` matches one or more consecutive space characters in a string. It can be used to split a string wherever there are multiple spaces. For example, if you have the string `"Hello   World"`, this regular expression will match the spaces between "Hello" and "World" and split the string into `["Hello", "World"]`.
 
 - `[ ]` inside the square brackets is used to specify a single character (in this case, a space) as the character set. If you wanted to match any whitespace character (including spaces, tabs, and line breaks), you could use `\s` instead of `[ ]`. For example, `/[\s]+/` would match one or more consecutive whitespace characters. */
    const HandleExtraSpace = (event) => {
        let newText = text.split(/[  ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra space handled successfully", "success");
    }
    return (
        <>
            <div className="container" color={` ${props.mode === "dark" ? "white" : "black"}`}>
                <div className="mb-3">
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <button className="btn btn-primary mb-3" onClick={AboutReact}>About React</button>
                        <h1 style={{ marginRight: '10px' }}>{props.header}</h1>
                    </div>

                    <textarea className="form-control" value={text} style={{ backgroundColor: props.mode === "dark" ? "#03192f" : "white", color: props.mode === "dark" ? "white" : "black" }} onChange={HandleOnChange} id="myText" rows="8" />
                </div>
                <button disabled={text.length === 0} className="btn btn-primary" onClick={HandleUpClick}>Convert to Uppercase </button>
                <button disabled={text.length === 0} className="btn btn-primary ms-2" onClick={HandleLoClick}>Convert to Lowercase</button>
                <button disabled={text.length === 0} className="btn btn-danger ms-2" onClick={HandleToDelete}>Clear text</button>
                <button disabled={text.length === 0} className="btn btn-primary ms-2" onClick={HandleToCopy}>Copy text</button>
                <button disabled={text.length === 0} className="btn btn-primary ms-2" onClick={HandleExtraSpace}>Remove extra space</button>
            </div>
            <div className={`container my-3 ${props.mode === "dark" ? "text-white" : "text-black"}`}>
                <h2>Your text summary</h2>
                <p>
                    {`${text.split(/\s+/).filter((element) => { return element.length != 0 }).length} words and ${text.length} characters`}
                </p>

                <h3>Preview</h3>
                {/* Preformatted text. */}
                <div>
                    <pre>{text}</pre>
                </div>
            </div>
        </>
    )
}
