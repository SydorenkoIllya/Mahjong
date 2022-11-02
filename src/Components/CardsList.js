
import primes from '../Functions/primes';
import Cards from "./Cards";
const CardsList = () => {

    

    // useEffect(() => {
    //     setTimeout(() => {
    //         setActive(false)
    //     }, 5000)
    // },[])


    const WrapperCardsStyles = {
        display: 'flex',
        alignContent: 'space-between',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        flexDirection: 'column',
        margin: 'auto', 
        width: 745, 
        height: 461, 
    }


    return (
        <>
            <h1 style={{textAlign: 'center', fontSize: '48px', padding: '28px 0 38px'}}>Mahjong</h1>
            <div style={WrapperCardsStyles}>
                <Cards array={primes}/>
            </div>
        </>
    )
}

export default CardsList;