import Link from "next/link"

export default function SignIn() {
  return (
    <div className="bg-gradient-to-b from-blue-400 via-white to-white">
      <div className="flex justify-center py-40">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Sign In</h2>
            <form>
              <div className="mb-2">
                <label>E-mail</label>
                <input type="email" placeholder="johndoe@example.com" className="input input-bordered w-full"/>
              </div>
              <div className="mb-4">
                <label>Password</label>
                <input type="password" placeholder="password" className="input input-bordered w-full"/>
                <label className="label">
                  <span className="label-text-alt"></span>
                  <span className="label-text-alt"><a className="link" href="/user/forgot-pswd">Forgot Password</a></span>
                </label>
              </div>
              <div className="mb-2">
                <button className="btn border-none w-full bg-gradient-to-br from-blue-200 via-blue-400 to-blue-600">Sign In</button>
              </div>
            </form>
            <div className="card-actions justify-center">
              Don&apos;t have an account? <Link className="link" href="/user/signup">Sign Up</Link>
            </div>
          </div>
        </div>
      </div>    
    </div>
  )
}