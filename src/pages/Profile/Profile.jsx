import React from 'react'
import './Profile.css'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'

const Profile = ({ onLogout }) => {
  const userEmail = 'user@virtank.com'
  const navigate = useNavigate()

  const handleLogout = () => {
    onLogout?.()
    navigate('/')
  }

  return (
    <div className='profile-page'>
      <div className='profile-card'>
        <img src={assets.profile_icon} alt='User Avatar' className='profile-avatar' />
        <h2 className='profile-name'>User</h2>
        <p className='profile-email'>{userEmail}</p>

        <div className='profile-actions'>
          <a className='profile-action' href='/orders'>Edit Profile</a>
          <a className='profile-action' href='/help-support'>Help & Support</a>
          <button className='logout-button' onClick={handleLogout}>Log out</button>
        </div>
      </div>
    </div>
  )
}

export default Profile


