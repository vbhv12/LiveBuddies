export default function MainLayout = async ({children} : {
    children: React.ReactNode;
}) =>{
    return(
        <div className="h-full">
            {children}
        </div>
    )
}