import Link from "next/link"

export default function SignIn() {
  return (
    <div className="bg-gradient-to-b from-blue-400 via-white to-white">
      <div className="flex justify-center py-40">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Reset Password</h2>
            <form>
              <div className="mb-2">
                <label>E-mail</label>
                <input type="email" placeholder="johndoe@example.com" className="input input-bordered w-full"/>
              </div>
              <div className="mb-2">
                <button className="btn border-none w-full bg-gradient-to-br from-blue-200 via-blue-400 to-blue-600">Submit</button>
              </div>
            </form>
            <div className="card-actions justify-center">
              <Link className="link" href="/">Home Page</Link>
            </div>
          </div>
        </div>
      </div>    
    </div>
  )
}