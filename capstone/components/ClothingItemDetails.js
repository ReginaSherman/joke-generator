import { Spinner } from '@chakra-ui/react'
import React from 'react'
import { useQuery } from 'react-query'
import { useRouter } from 'next/router'
import { Container } from './Container'

const ClothingItemDetail = () => {
    const router = useRouter()
    const query = useQuery('item', async () => {
        const id = router.query.id
        const res = await fetch(`http://localhost:3000/api/clothing-item/${id}`)
        const data = await res.json()
        console.log('data', data)
        return data.item
    })
    console.log(query)
    if (query.isLoading) {
        return <Spinner />
    }
    return (
        <>
            <Container height="100vh" padding='150'>
                This is item {query.clothingItem}
            </Container>
        </>
    )
}

export default ClothingItemDetail