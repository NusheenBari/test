import Link from "next/link"
import Login from "./components/signin/Login"

export default function Home() {
  return (
    <main>
                
      <div>
        <h1 className='text-center text-3xl px-2 py-2 font-bold'>Welcome</h1>


        <div className="text-center mt-10 mb-10">
          <Link href="/login">
              <button className="rounded-sm bg-indigo-600 text-white px-5 py-2">
                  Login
              </button>
          </Link>
        </div>



          <div className="text-sm text-indigo-600 underline flex gap-2 text-center justify-center mb-10">

            <Link href="https://cardsdigify.com/shop">Click here to create your card</Link>
            <Link href="login/resetpassword">Forgot password? Click here</Link>

          </div>
      </div>
    </main>
  )
}
