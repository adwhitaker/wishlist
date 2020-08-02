import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ROUTES } from '../Navigator/routes'
import { fetchList } from '../api/api'
import LoadingIndicator from '../shared/LoadingIndicator'

export const List = () => {
    const { groupId, listId } = useParams()

    const [list, setList] = useState()

    useEffect(() => {
        const loadList = async () => {
            try {
                const newList = await fetchList(groupId, listId)
                console.log('list', newList)
                setList(newList)
            } catch (e) {

            }
        }

        loadList()

        return () => {
        }
    }, [groupId, listId])

    if (!list) {
        return <LoadingIndicator/>
    }

    const { name, items, groupName } = list


    return (
        <React.Fragment>
            <h1>{name}</h1>
            <Link to={ROUTES.group(groupId)}>Return to {groupName}</Link>
            <section>
                <ul>
                    {items.map(({ id, name }) => (<li key={id}>{name}</li>))
                    }
                </ul>
            </section>
        </React.Fragment>
    )

}

export default List