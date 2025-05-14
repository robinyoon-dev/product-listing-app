
export default function ProductsLayout({
    children,
}: {
    children: React.ReactNode;
}) {

    return (
        <div className="flex flex-col justify-start w-full items-center p-5 min-h-screen">
            {children}
        </div>
    )

}