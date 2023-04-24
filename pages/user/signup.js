import Link from "next/link"
import { useState } from "react"

const SignUp = (props) => {
  
  const handleSignup = async () => {
    props.isComplete(true)
  }
  
  return (
    <div className="bg-gradient-to-b from-blue-400 via-white to-white">
    <div className="flex justify-center py-16">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Sign Up</h2>
          <form>
          <div className="mb-2">
              <label>Username</label>
              <input type="email" placeholder="johndoe@example.com" className="input input-bordered w-full"/>
            </div>
            <div className="mb-2">
              <label>E-mail</label>
              <input type="email" placeholder="johndoe@example.com" className="input input-bordered w-full"/>
            </div>
            <div className="mb-4">
              <label>Password</label>
              <input type="password" placeholder="password" className="input input-bordered w-full"/>
            </div>
            <div className="mb-4">
              <label>Confirm Password</label>
              <input type="password" placeholder="password" className="input input-bordered w-full"/>
            </div>
            <div className="mb-2">
              <button className="btn border-none w-full bg-gradient-to-br from-blue-200 via-blue-400 to-blue-600" onClick={handleSignup}>Sign Up</button>
            </div>
          </form>
          <div className="card-actions justify-center">
            Have an account? <Link className="link" href="/user/signin">Sign In</Link>
          </div>
        </div>
      </div>
    </div>    
  </div>
  )
}

const Verify = () => {
  return (
    <div className="bg-gradient-to-b from-blue-400 via-white to-white">
    <div className="flex justify-center py-44">
      <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
          <h2 className="card-title">Verify your email address</h2>
          <div className="py-5 text-center">
            <div className="p-4 text-white bg-gradient-to-br from-blue-200 via-blue-400 to-blue-600 rounded-lg shadow-lg inline-block mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z" />
              </svg>
            </div>
            <p>An account activation link has been sent to the email address you provided.</p>
          </div>
        </div>
      </div>
    </div>    
  </div>
  )
}

export default function SignUpPage() {
  const [isComplete, setComplete] = useState(false)
  
  return (
    <>
      {isComplete ? <Verify /> : <SignUp isComplete={(v)=> setComplete(v)}/>}
    </>
  )
}