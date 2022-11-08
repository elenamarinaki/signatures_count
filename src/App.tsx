import { useState, useEffect } from "react"

import { LeftArrow } from "./components/LeftArrow"
import { Message } from "./components/Message"
import { LiveCircle } from "./components/LiveCircle"

import "./App.css"

import { Count } from "./components/Count"

function App() {
  const [signaturesCount, setSignaturesCount] = useState(null)

  useEffect(() => {
    // fetch(`https://lda.data.parliament.uk/epetitions/627173.json`)
    fetch(`https://petition.parliament.uk/petitions/627173.json`)
      .then((res) => res.json())
      .then((d) => setSignaturesCount(d.data.attributes.signature_count))
      .catch((err) => console.log(err.message))
  }, [signaturesCount])

  // useEffect(() => {
  //   const timer = setTimeout(() => setSignaturesNumber((s) => s + 1), 10)

  //   return () => clearTimeout(timer)
  // })

  return (
    <div className='App'>
      <div className='container'>
        <div className='circle'>
          <LiveCircle />
          <p className='live'>LIVE</p>
        </div>
        <div className='inner_container'>
          <Count n={signaturesCount} className='number' />
          {/* <LeftArrow className='arrow' /> */}
          <Message text={`Signatures`} className='message' />
        </div>
      </div>
    </div>
  )
}

export default App
