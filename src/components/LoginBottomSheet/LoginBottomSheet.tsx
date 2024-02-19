import React from 'react'
import { Modals } from '../../components'
import './login-bottom-sheet.css'

interface LoginBottomSheetProps {
  onLogin: () => void
  onClose: () => void
}

const IconClose = () => {
  return (
    <svg className='modal-icon' xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
      <path d="M19.5469 18.4531C19.6518 18.5576 19.735 18.6818 19.7918 18.8186C19.8485 18.9553 19.8778 19.1019 19.8778 19.25C19.8778 19.3981 19.8485 19.5447 19.7918 19.6814C19.735 19.8182 19.6518 19.9424 19.5469 20.0469C19.3346 20.2564 19.0483 20.3739 18.75 20.3739C18.4517 20.3739 18.1654 20.2564 17.9531 20.0469L12 14.0937L6.04689 20.0469C5.8346 20.2564 5.54831 20.3739 5.25002 20.3739C4.95172 20.3739 4.66544 20.2564 4.45314 20.0469C4.34826 19.9424 4.26504 19.8182 4.20826 19.6814C4.15148 19.5447 4.12225 19.3981 4.12225 19.25C4.12225 19.1019 4.15148 18.9553 4.20826 18.8186C4.26504 18.6818 4.34826 18.5576 4.45314 18.4531L10.4063 12.5L4.45314 6.54687C4.2418 6.33553 4.12306 6.04888 4.12306 5.75C4.12306 5.60201 4.15221 5.45546 4.20885 5.31873C4.26548 5.182 4.34849 5.05777 4.45314 4.95312C4.55779 4.84848 4.68202 4.76547 4.81875 4.70883C4.95548 4.6522 5.10202 4.62305 5.25002 4.62305C5.5489 4.62305 5.83555 4.74178 6.04689 4.95312L12 10.9062L17.9531 4.95312C18.1645 4.74178 18.4511 4.62305 18.75 4.62305C19.0489 4.62305 19.3355 4.74178 19.5469 4.95312C19.7582 5.16447 19.877 5.45111 19.877 5.75C19.877 6.04888 19.7582 6.33553 19.5469 6.54687L13.5938 12.5L19.5469 18.4531Z" fill="white"/>
    </svg>
  )
}

const LoginBottomSheet = ({ onLogin, onClose }: LoginBottomSheetProps) => {
  return (
    <Modals id='modal' className='modal' section='section'>
      <div className='modal-overlay' onClick={onClose}></div>
      <div className='modal-content'>
        <div className='modal-content-container'>
          <div className='modal-content-wrapper'>
            <h4>Please Log In</h4>
            <button className="modal-button-close" onClick={onClose}>
              <IconClose />
            </button>
          </div>
          <p className='modal-text-description'>You must log in first before use comment in this section</p>
          <button className='modal-button-login' onClick={onLogin}>Log In</button>
        </div>
      </div>
    </Modals>
  )
}

export default LoginBottomSheet