import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import LoginBottomSheet from '../src/components/LoginBottomSheet/LoginBottomSheet'

const App = () => {
  const [showMe, setShowMe] = useState<boolean>(false)
  const handleShowModal = () => setShowMe(true)
  const handleClose = () => setShowMe(false)
  const handleLogin = () => alert('login')

  return (
    <>
      <h1>testing modal</h1>
      <button onClick={handleShowModal}>show me</button>
      { showMe && <LoginBottomSheet onClose={handleClose} onLogin={handleLogin}/> }
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('app'));