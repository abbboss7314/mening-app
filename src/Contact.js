import { useState } from 'react'
import App from './App'

function Contact() {
    const [ism, setIsm] = useState('')
    const [ xabar, setXabar] = useState('')
    const [yuborildi, setYuborildi] = useState(false)

    function yuborish() {
        if (ism.trim() === '' || xabar.trim() === '') return
        setYuborildi(true)
        setIsm('')
        setXabar('')
    }

    return (
        <div>
            <h1>Bog'lanish</h1>
            <input
            value={ism}
            onChange={(e) => setIsm(e.target.value)}
            placeholder="Ismingiz"
            />
            <br /><br />
            <textarea
            value={xabar}
            onChange={(e) => setXabar(e.target.value)}
            placeholder="Xabar yozing"
            rows="4"
            />
            <br />
            <button onClick={yuborish}>Yuborish</button>

            {yuborildi && <p>✅ Xabar yuborildi! Raxmat.</p>}
        </div>
    )
}

export default Contact