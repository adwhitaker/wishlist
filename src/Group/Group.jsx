import React, { Fragment, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ROUTES } from '../Navigator/routes'
import GroupLists from './GroupLists'
import { fetchGroup } from '../api/api'
import LoadingIndicator from "../shared/LoadingIndicator"

export const Group = () => {
    const { groupId } = useParams()
    const [group, setGroup] = useState(null)

    useEffect(() => {
        const loadGroup = async () => {
            try {
                const newGroup = await fetchGroup(groupId)
                setGroup(newGroup)
            } catch (e) {

            }
        }

        loadGroup()

        return () => {
        }
    }, [groupId])

    if (!group) {
        return <LoadingIndicator/>
    }

    const { id, name, lists } = group

    return (
        <Fragment>
            <h1>{name}</h1>
            <section>
                <Link to={ROUTES.HOME}>Home</Link>
                <GroupLists
                    groupId={id}
                    lists={lists}
                />
            </section>
        </Fragment>
    )
}

export default Group