import React from 'react'

const Display = ({list, setList}) => {
    // change
    const changeMe = (item) => {
        item.complete = !item.complete
        // false
        // new
        setList([...list])
    }
    // delete
    const deleteMe = item => {
        setList( list.filter(elem => (elem !== item)) )
    }

    // mapping through list
    return (
        <div>
            <h2>
                To Do List:
            </h2>
            <ul>
            {list.map( (item, index) =>
                    <li>
                        <input type = "checkbox" onChange={e => changeMe(item)}/>
                        {/* if ("complete" : true)
                        className="complete" ===> text-decoration: line-through 
                        bootstrap: className="text-decoration-line-through"
                        */}
                        <span className = {(item.complete) ? "complete" : null}>
                            {item.content}
                        </span>
                        <button className='smallBtn' onClick = { e => deleteMe(item)}>
                            Delete
                        </button>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default Display