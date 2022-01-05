import './Button.css';

// const buttonStyle = {
//     backgroundColor: 'red', 
//     color: 'white', 
//     padding: '10px',
//     border: 'dotted'
// };


// Props Decomposition
function Button({text}) {
    return (
        <>
            {/* <button style = {{backgroundColor: backgroundColor, color: color}}> {text} </button> */}
            <button className='btn'> {text} </button>
            {/* <h3> I am a headline! </h3> */}
        </>
    );
}

export default Button;