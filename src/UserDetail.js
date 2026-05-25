import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

function UserDetail() {
    const { id } = useParams()
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://dummyjson.com/users/${id}')
        .then(response => response.json())
        .then(data => {
                setUser(data)
                setLoading(false)
            })
        }, [id])

        if (loading) return <h2>Yuklanmoqda...</h2>
        if (!user) return <h2>Foydalanuvchi topilmadi</h2>

        return (
            <div>
                <Link to="/users">← Orqaga </Link>
                <h1>{user.firstName} {user.lastName}</h1>
                <p><strong>Email:</strong>{user.email}</p>
                <p><strong>Telefon:</strong> {user.phone}</p>
                <p><strong>Yosh</strong> {user.age}</p>
                <p><strong>Universitet</strong> {user.univercity}</p>
            </div>
        )
}

export default UserDetail