import Hog from "./Hog"
import { useState } from "react"


const HogContainer = ({hogs}) => {

    const [greased, setGreased] = useState(false)
    const [sortHogs, setSortHogs] = useState("None")

const filterAndSortHogs = () => {
    const filtered = hogs.filter(hog => {
        if(greased) {
            return hog.greased
        } else {
            return true
        }
    })

        if(sortHogs === "None") {
            return filtered
        } else if (sortHogs === "Name") {
            return filtered.sort((a, b) => {
                if(a.name > b.name) {
                    return 1
                } else {
                    return -1
                }
            })
    } else {           
            return filtered.sort((a, b) => {
                if(a.weight > b.weight) {
                    return 1
                  } else {
                    return -1
                  }
                })
            }
        }
 

    const renderHogs = () => {
       return filterAndSortHogs().map(hog => {
           return ( <Hog key={hog.name} hog={hog}/>)
        })
    }
    const handleClick = () => {
        setGreased(!greased)
    }

    const handleChange = (event) => {
        setSortHogs(event.target.value)
    }

    return (
        <div className="ui grid container">
           <label for="hogs">Sort the Hogs:</label> 
            <button onClick={handleClick}>
                {greased ? "All Hogs" : "Only Greased Hogs"}
            </button>
            <select name="hogs" id="hogs" onChange={handleChange}>
                <option value="all">See All</option>
                <option value="name">Name Only</option>
                <option value="weight">Weight Only</option>
            </select>
            <p>{renderHogs()} </p>
        </div>
    )
}


export default HogContainer;

