import React, { useRef, useState } from 'react'

export const ListAddItem = ({ onAddItem }) => {
    const [itemName, setItemName] = useState('')

    const inputRef = useRef()


    return (
        <form
            onSubmit={e => e.preventDefault()}
        >
            <div>

                <label htmlFor="add-item">Item Name</label>
                <input
                    type="text"
                    id="add-item"
                    ref={inputRef}
                    value={itemName}
                    onChange={({ target: { value } }) => {
                        setItemName(value)
                    }}
                />
            </div>
            <div>
                <button
                    type="submit"
                    onClick={() => {
                        onAddItem(itemName)
                    }}
                >Add
                </button>
                <button
                    onClick={() => {
                        setItemName("")
                        // trigger AT form reset announcement
                        inputRef.current.focus()
                    }}
                >Reset</button>
            </div>
        </form>
    )
}

export default ListAddItem