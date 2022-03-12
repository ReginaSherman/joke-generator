import React from 'react'
import { Spinner } from '@chakra-ui/react'
import { useQuery } from 'react-query'
import { useRouter } from 'next/router'

const UserDetail = () => {
    const router = useRouter()
    const query = useQuery('user', async () => {
        const id = router.query.id
        const res = await fetch(`http://localhost:3000/api/user/${id}`)
        const data = await res.json()
        console.log('data', data)
        return data.user
    })
    console.log(query)
    if (query.isLoading) {
        return <Spinner />
    }
    console.log(query)
    return (
        <>
        
        <h1>This is user {query.data.name}</h1>

        <h2>User items: </h2>
        {query.data.clothingItems.map(item => {
            return (
                item.name
            )
        })}
        </>
    )
}

export default UserDetail