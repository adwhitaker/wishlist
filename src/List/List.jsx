import React, { useEffect, useReducer } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ROUTES } from '../Navigator/routes'
import * as listActions from './listActions'
import { initialListState, listReducer } from './listReducer'
import { addItem, fetchList } from '../api/api'
import LoadingIndicator from '../shared/LoadingIndicator'
import ListItem from './ListItem'
import ListAddItem from './ListAddItem'

const loadList = async (dispatch, groupId, listId) => {
    try {
        const list = await fetchList(groupId, listId)
        dispatch({ type: listActions.LIST_RESPONSE, list })
    } catch (e) {
        dispatch({ type: listActions, errors: [{ message: 'Failed to load list' }] })
    }
}

const onAddItemClick = async (dispatch, groupId, listId, item) => {
    try {
        const list = await addItem(groupId, listId, { name: item })
        dispatch({ type: listActions.LIST_RESPONSE, list })

    } catch (e) {
        dispatch({ type: listActions, errors: [{ message: 'Failed to add item to list' }] })
    }
}

export const List = () => {
    const { groupId, listId } = useParams()
    const [{ list }, dispatch] = useReducer(listReducer, initialListState)

    useEffect(() => {
        loadList(dispatch, groupId, listId)
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
                    {items.map(item => <ListItem key={item.id} {...item}/>)}
                </ul>
            </section>
            <div>
                <ListAddItem
                    onAddItem={newItem => {
                        onAddItemClick(dispatch, groupId, listId, newItem)
                    }}
                />
            </div>
        </React.Fragment>
    )
}

export default List