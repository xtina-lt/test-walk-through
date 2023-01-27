import React from 'react'
import {useState} from 'react'

const Form = ({list, setList}) => {
    const [input, setInput] = useState("")

    const handleSubmit = e => {
        e.preventDefault()
        setList([...list, {content : input, complete : false}])
        setInput("")
    }
    return (
        <div>
            <h2>
                Add Item:
            </h2>
            <form onSubmit= {handleSubmit}>
                <input type = "text" value={input} onChange={ e => setInput(e.target.value)}/>
                <input type="submit" value="Do"/>
            </form>
        </div>
    )
}

export default Form