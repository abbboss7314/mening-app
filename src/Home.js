import { useEffect, useState } from 'react'

function Home() {
    const [vazifa, setVazifa] = useState('')
    const [royxat, setRoyxat] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5001/vazifalar`)
            .then(response => response.json())
            .then(data => setRoyxat(data))
    }, [])

    function qoshish() {
        if (vazifa.trim() === '') return

        fetch(`http://localhost:5001/vazifalar`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ matn: vazifa })
        })
            .then(response => response.json())
            .then(yangi => {
                setRoyxat([...royxat, yangi])
                setVazifa('')
            })
    }
    function ochirish(id) {
        fetch(`http://localhost:5001/vazifalar/${id}`, {
            method: 'DELETE'
        })
            .then(() => {
                setRoyxat(royxat.filter(v => v.id !== id))
            })
    }


return (
    <div>
        <h1>Vazifalar (Backenddan)</h1>
        <input
            value={vazifa}
            onChange={(e) => setVazifa(e.target.value)}
            placeholder="Vazifani yoz"
        />
        <button onClick={qoshish}>Qoshish</button>

        <ul>
            {royxat.map((item) => (
                <li key={item.id}>
                    {item.matn}
                    <button onClick={() => ochirish(item.id)}>O'chirish</button>
                </li>
            ))}
        </ul>
    </div>
)
}

export default Home