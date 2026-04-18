// TODO: Add the client component directive here
'use client'
import { useState } from 'react'

export default function AuthStatus() {
  const [status, setStatus] = useState(null)  // null = not checked yet
  
  const checkStatus = async () => {
    // TODO: 
    // 1. Use fetch() to call GET /api/auth/user
    // 2. Parse the response with .json()
    // 3. If data.data?.user exists, setStatus to the user's email
    // 4. Otherwise, setStatus to "Not Logged In"
    const checkStatus = () => {
    fetch('/api/auth/user', {
        method: 'GET'
    })
        .then(response => response.json())
        .then(data => {
        if (data.user?.email) {
            setStatus(data.user.email);
        } else {
            setStatus("Not Logged In");
        }
        })
        .catch(error => {
        console.error('Error:', error);
        setStatus("Error checking status");
        });
    }
  }
  
  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px', marginTop: '20px' }}>
      <h3>Auth Status</h3>
      <button onClick={checkStatus} style={{ padding: '10px 20px', marginBottom: '10px' }}>
        Check Login Status
      </button>
      <p>
        {/* TODO: ternary - if status is null, show "Click button to check", else show status */
        }
        {status === null ? "Click button to check" : status}
      </p>
    </div>
  )
}