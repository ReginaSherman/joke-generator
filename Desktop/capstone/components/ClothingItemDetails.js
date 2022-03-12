import { Spinner } from '@chakra-ui/react'
import React from 'react'
import { useQuery } from 'react-query'
import { useRouter } from 'next/router'

const ClothingItemDetail = () => {
    const router = useRouter()
    const query = useQuery('item', async () => {
        const id = router.query.id
        const res = await fetch(`http://localhost:3000/api/clothing-item/${id}`)
        const data = await res.json()
        console.log('data', data)
        return data.clothingItem
    })
    console.log(query)
    if (query.isLoading) {
        return <Spinner />
    }
    return (
        <>
        <h1>This is item {query.data.name}</h1>
        </>
    )
}

export default ClothingItemDetail