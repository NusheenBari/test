import { log } from "console";

const getPosts = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        cache:"no-store",
    });
    return res.json();
}

const getUsers = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    return res.json();
}



export default async function Posts() {
    const [postbody, users] = await Promise.all([getPosts(), getUsers(),]);
        
    return(
        <>
        {postbody.map((posts: any) => {

            return (
                <>
                    <div>
                        <p className="m-2 text-semibold text-lg hover:text-slate-600">{posts.title}</p>
                        
                    </div>
                    
                </>

                )
        })}

                    
        {users.map((user:any) => {
            return <p className="text-indigo-600">{user.name}</p>
        })}

        </>
    )
}