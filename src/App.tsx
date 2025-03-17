import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

//add this for guestID to be sent to the server to save their invite starting front thw strt of the app server so that if theu signup or log in - we show thir invite
// useEffect(() => {
//   if (!localStorage.getItem("guestId")) {
//     localStorage.setItem("guestId", crypto.randomUUID());
//   }
// }, []);


// Example: When user signs up (frontend):
//fetch("/api/auth/signup", {
//   method: "POST",
//   headers: { "Content-Type": "application/json" },
//   body: JSON.stringify({
//     email,
//     password,
//     guestId: localStorage.getItem("guestId")
//   })
// });


// Example: When sending the invitation request:
// const guestId = localStorage.getItem("guestId");

// fetch("/api/invitations", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json"
//   },
//   body: JSON.stringify({
//     template: "...",
//     names: "...",
//     weddingDate: "...",
//     venue: "...",
//     rsvpLink: "...",
//     isPaid: false,
//     guestId // ← include this in every POST as a guest
//   })
// });

export default App
