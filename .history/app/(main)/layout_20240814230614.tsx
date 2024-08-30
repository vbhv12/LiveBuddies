const MainLayout = async ({children} : {
    children: React.ReactNode;
}) =>{
    return(
        <div className="h-full">
            <div className="hidden md:flex h-full w-[72px] z-30 ">

            </div>
            {children}
        </div>
    )
}

export default MainLayout