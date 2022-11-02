const SingleCard = ({item, index, text, disabled, handleClick, hidden}) => {

    

    const CardsStyles = {
        backgroundColor: 'white',
        color: 'black',
        display: 'flex',
        alignItems: 'center', 
        justifyContent: 'center',
        width: 80, 
        height: 104, 
        border: 'solid 1px grey', 
        borderRadius: 8,
        fontWeight: 700,
        fontSize: !hidden ? 24 : 0
    }



    return (
        <button onClick={() => handleClick(index, text)} disabled={disabled} className="active" id={index} style={CardsStyles} value={item}>{text}</button>
    )
} 

export default SingleCard;