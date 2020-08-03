import React, { useEffect, useState } from 'react'
import { fetchUser } from '../api/api'
import { Link } from 'react-router-dom'
import { ROUTES } from '../Navigator/routes'
import LoadingIndicator from '../shared/LoadingIndicator'

export const Home = () => {
    const [user, setUser] = useState(null)

    useEffect(() => {

        const loadUser = async () => {
            try {
                const user = await fetchUser('1')
                setUser(user)
            } catch (e) {

            }
        }

        loadUser()

        return () => {
        }
    }, [])

    if (!user) {
        return <LoadingIndicator/>
    }

    const { firstName, groups } = user

    return (
        <div>
            <h1>{firstName}'s Groups</h1>
            <section>
                <ul>
                    {groups.map(({ id, name }) => (
                        <li key={id}>
                            <Link
                                to={ROUTES.group(id)}
                            >{name}</Link>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    )
}

export default Home