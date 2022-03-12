import { Spinner } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import { useQuery } from 'react-query'

const ClothingItems = () => {
    const itemQuery = useQuery('items', async () => {
        const res = await fetch('/api/clothing-items')
        const data = await res.json()
        return data.clothingItems
    })
    if (itemQuery.isLoading) {
        return <Spinner />
    }
    return (
        <>
        <h1>Items</h1>
        {itemQuery.data.map(item => {
            return (
                <div key={item.id}>
                    <Link href={`/item-detail/${item.id}`}>{item.name}</Link>
                </div>
            )
        })}
        </>
    )
}

export default ClothingItems