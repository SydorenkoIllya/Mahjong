import { useEffect, useState } from "react"
import SingleCard from "./SingleCard"


const Card = ({array}) => {   
    const [count, setCount] = useState([])

    let newArr = array.map((item , index) => {
        return {text: item, id: index, disabled: true, hidden: false}
    })

    const [arr, setArr] = useState(newArr)
    useEffect(() => {
        setTimeout(() => {
            setArr(arr.map(item => ({...item, disabled: false, hidden: true})))
            console.log('effect');
        }, 4000) 
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    console.log(count);
    
    if(count.length === 2) {
        if(count[0] === count[1]) {
            checkingNumbers();
        } else {
            setTimeout(() => {
                checkingNumbers();
            }, 2000)
        }
        
        
        
    }
    const handleClick = (index, text) => {
        if(count.length < 2){
            setCount([...count, text])
            console.log(count);
            setArr(arr.map(item => {
                if(index === item.id){                    
                    return {...item, disabled: true , hidden: false}
                } else {
                    return item;
                }
            }))
        } 
    }

    function checkingNumbers() {
        if(count[0] === count[1]) {
            
                setArr(arr.map(item => {
                    if(item.text === count[0]) {
                        console.log('fits');
                        return {...item, disabled: true, hidden: false, resolved: true}
                    } else if(item.resolved) {
                        return item;
                    } else {
                        return {...item, hidden: true}
                    }
                }))
            
            
        } else {
            console.log('nefits');
            setArr(arr.map(item => {
                if(item.resolved) {
                    return item;
                } else {
                    return {...item, hidden: true, disabled: false}
                }
            }))
        }
        setCount([]);
    }


    return (
        arr.map((item) => {            
        return (
            <SingleCard hidden={item.hidden} handleClick={handleClick} disabled={item.disabled} key={item.id} index={item.id} text={item.text}/>
        )
        })
    )
}

export default Card;

