
// Props Decomposition
function Button({click, text}) {
    // console.log(clickAction);
    function buttonClick() {
        console.log("Hey! BUtton Component was clicked!")
        //Define it in a much better way to cater to the business requirement
        click();
    }

    return (
        <>
            <button onClick={buttonClick} className='btn btn-success'> {text} </button>
        </>
    );
}

export default Button;