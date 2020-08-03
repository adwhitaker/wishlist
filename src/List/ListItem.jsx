import React from 'react'

export const ListItem = ({ name, purchased }) => {
    const PurchaserDetails = () => <span> (Purchased by {purchased.name})</span>

    return (
        <li>
            <span>
            {name}
            </span>
            {purchased && <PurchaserDetails/>}
        </li>
    )
}

export default ListItem