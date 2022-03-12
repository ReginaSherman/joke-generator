import { Spinner, useRangeSliderContext } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import { useQuery } from 'react-query'

const Users = () => {
    const userQuery = useQuery('users', async () => {
        const res = await fetch('/api/users')
        const data = await res.json()
        return data.users
    })

    if (userQuery.isLoading) {
        return <Spinner />
    }
    return (
        <>
        <h1>Users</h1>
        {userQuery.data.map(user => {
            return (
                <div key={user.id}>
                    <Link href={`/user-detail/${user.id}`}>{user.name}</Link>
                </div>
            )
        })}
        </>
    )
}

export default Users