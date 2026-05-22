import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [vazifa, setVazifa] = useState('')
  const [royxat, setRoyxat] = useState(() => {
    const saqlangan = localStorage.getItem('vazifalar')
    return saqlangan ? JSON.parse(saqlangan) : []
  })

  useEffect(() => {
    localStorage.setItem('vazifalar', JSON.stringify(royxat))
  }, [royxat])

  function qoshish() {
    if (vazifa.trim() === '') return
    setRoyxat([...royxat, vazifa])
    setVazifa('')
  }

  function ochirish(index) {
    setRoyxat(royxat.filter((_, i) => i !== index))
  }

  return (
    <div>
      <input
      value={vazifa}
      onChange={(e) => setVazifa(e.target.value)}
      placeholder="Vazifani yoz"
      />
      <button onClick={qoshish}>Qoshish</button>

      <ul>
        {royxat.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => ochirish(index)}>Ochirish</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
