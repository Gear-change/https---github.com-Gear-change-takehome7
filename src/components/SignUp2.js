import React, { useEffect, useState } from 'react'

const SignUp2 = () => {
  const [formData, setFormData] = useState({
    userFullName: "",
    userDesiredName: "",
    userEmail: "",
    userAddress: "",
    userPhoneNumber: ""
});
useEffect (() => {
    document.title = "New User Signup page";
})
const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData.userFullName)
    console.log(formData.userDesiredName)
    console.log(formData.userEmail)
    console.log(formData.userAddress)
    console.log(formData.userPhoneNumber)
}
return (
<div className='user-sign-up-main'>
    <form onSubmit={handleSubmit}>
        <label htmlFor='userFullName'>Please enter your full name here:</label>
        <input 
            id='userFullName' 
            name='userFullName' 
            type='text' 
            value={formData.userFullName} 
            onChange={(e) => setFormData({
                ...formData, userFullName: e.target.value
                })
            } 
        />
        <label htmlFor='userDesiredName'>Please enter your desired userName here:</label>
        <input
            id='userDesiredName'
            name='userDesiredName'
            type='text'
            value={formData.userDesiredName}
            onChange={(e) => setFormData({
                ...formData, userDesiredName: e.target.value
            })}
        />
        <label htmlFor='userEmailAddress'>Please enter your email address here:</label>
        <input
            id='userEmailAddress'
            name='userEmailAddress'
            type='email'
            value={formData.userEmail}
            onChange={(e) => setFormData({
                ...formData, userEmail: e.target.value
            })}
        />
        <label htmlFor='userAddress'>Please enter your home address here:</label>
        <input
            id='userAddress'
            name='userAddress'
            type='text'
            value={formData.userAddress}
            onChange={(e) => setFormData({
                ...formData, userAddress: e.target.value
            })}
        />
        <label htmlFor='userPhoneNum'>Please enter your phone number here</label>
        <input
            id='userPhoneNum'
            name='userPhoneNum'
            type='tel'
            value={formData.userPhoneNumber}
            onChange={(e) => setFormData({
                ...formData, userPhoneNumber: e.target.value
            })}
        />
        <input type='submit' value='submit' />
    </form>
</div>
)
}

export default SignUp2