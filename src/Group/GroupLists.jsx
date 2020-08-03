import React from 'react'
import { ROUTES } from '../Navigator/routes'
import {Link}from 'react-router-dom'


export const GroupLists = ({ groupId, lists }) => {
    return (
        <React.Fragment>
            <section>
                <ul>
                    {lists.map(({ id, name }) =>
                        <li key={id}><Link to={ROUTES.list(groupId, id)}>{name}</Link></li>,
                    )}
                </ul>
            </section>
        </React.Fragment>
    )
}

export default GroupLists