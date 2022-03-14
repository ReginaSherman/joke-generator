import { Spinner, Flex, SimpleGrid, Container } from '@chakra-ui/react'
import { useQuery } from 'react-query'
import UserCard from './UserCard'

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
            <Container width='100%' centerContent>
                <Flex mt={40}>
                    <SimpleGrid columns={[2, null, 3]} spacing='30px' >
                        {userQuery.data.map(user => {
                            return (
                                <>
                                    <UserCard user={user} />
                                </>
                            )
                        })}
                    </SimpleGrid>
                </Flex>
            </Container>


        </>
    )
}

export default Users