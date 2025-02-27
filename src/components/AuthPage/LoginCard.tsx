

const LoginCard = () => {
    return (
        <div className="lg:w-[80%] w-[90%] mx-auto my-8">
            <div className="rounded-2xl shadow-2xl bg-gradient-to-br from-slate-300 via-slate-400 to-slate-500 p-8 w-[400px] h-[370px] mx-auto flex flex-col justify-between">
                <h1 className="text-[1.5rem] md:text-[2rem] w-fit mx-auto font-semibold ">Enter the details</h1>
                <div className="">
                    <form action="" method="post" className="login-form">
                        <p className="text-[1.2rem] font-semibold">Email Address:</p>
                        <input type="email" name="email" id="" />
                        <p className="mt-4 text-[1.2rem] font-semibold">Password:</p>
                        <input type="password" name="password" id="" />
                        <br />
                        <input className="cursor-pointer bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 hover:bg-gradient-to-l px-4 py-2 mt-3 rounded-xl text-white text-[1.2rem] font-semibold w-fit" type="submit" value="Login" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginCard