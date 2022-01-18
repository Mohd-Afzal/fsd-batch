
// Props Decomposition
function Button({click, text}) {
    
    function buttonClick() {
        console.log("Hey! BUtton Component was clicked!")
        //Define it in a much better way to cater to the business requirement
        click();
    }

    return (
        <>
            <button className="btn btn-success" onClick={buttonClick}> {text} </button>
        </>
    );
}

export default Button;