import {useState} from "react"

const Hog = ({hog}) => {

    const[clicked, setClicked] = useState(false)

    const handleClick = () => {
        setClicked(true)
    }
        return (
        <div onClick={handleClick} className=""ui eight wide column>
            <h2>{hog.name}</h2>
            <img src={hog.image} alt={hog.name}/>
            {clicked ? <p>Specialty: {hog.specialty}</p> : null }
            {clicked ? <p>Weight: {hog.weight}</p> : null}
            {clicked ? <p>Greased: {hog.greased ? "Greased" : "Not Greased" }</p> : null} 
            {clicked ? <p>Highest Medal Achieved: {hog ["highest medal achieved"] }</p> : null}    
            </div>
        )
}

export default Hog;                
            
         
    