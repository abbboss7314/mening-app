import { useState, useEffect } from 'react'
import { data } from 'react-router-dom'
import { Link } from 'react-router-dom'

function Users() {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch(`https://dummyjson.com/users`)
            .then(response => response.json())
            .then(data => {
                setUsers(data.users)
                setLoading(false)
            })
    }, [])

    if (loading) return <h2>Yuklanmoqda...</h2>

    return (
        <div>
            <h1>Foydalanuvchilar</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        <Link to={`/users/${user.id}`}>
                        <strong>{user.firstName} {user.lastName}</strong>
                    </Link> - {user.email }
                    </li>
                ))}
        </ul>
        </div >

    )
}

export default Users