import Nav from "../components/dashboard/DashNav"
import Navbar from "../components/Navbar"

export default function Dashboard(){
    return(
        <>

            <Navbar/>

            <div className="flex md:grid grid-cols-4 md:gap-4">
                <div className="px-2 md:px-6 py-6 min-h-screen bg-slate-100">

                <div className="py-10">
                    <div className="px-2 py-2 ">
                        <Nav/>
                    </div>

                    <div className="px-2 py-2  ">
                        Stats
                    </div>

                    <div className="px-2 py-2 ">
                        Activity
                    </div>

                </div>

                </div>

                <div className="col-span-3 mt-10 ">

                    <div className="border-b border-slate-200 px-6 py-3">
                       <h1 className="text-2xl text-left font-bold py-2">Dashboard</h1>
                        <p className="text-left text-base text-slate-600">Welcome username</p> 
                    </div>

                    <div className="flex flex-wrap md:grid grid-cols-2 mt-10 px-6">
                        <div className="border border-slate-200 m-3 p-3">
                            Box 1
                        </div>

                        <div className="border border-slate-200 m-3 p-3">
                            Box 2
                        </div>
                    </div>
                    
                </div>
            </div>


        </>
    )
}