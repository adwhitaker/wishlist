import React from 'react'
import { Link } from 'react-router-dom'
import { ROUTES } from '../Navigator/routes'


export const GroupLists = ({ groupId, lists }) => {
    console.log('group lists', lists)
    return (
        <React.Fragment>
            <section>
                <ul>
                    {lists.map(({ id, name }) => {
                            const route = ROUTES.list(groupId, id)
                            console.log('route', route)
                            return <li key={id}><Link to={route}>{name}</Link></li>
                        }
                    )}
                </ul>
            </section>
        </React.Fragment>
    )
}

export default GroupLists