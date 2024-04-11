export const TableInfo = () => {
    
    const tableInfo = [
        {
            id: "1",
            numbers: "12",
            title: "TENNIS COURTS"
        },
        {
            id: "2",
            numbers: "999+",
            title: "CLUB MEMBERS"
        },
        {
            id: "3",
            numbers: "45",
            title: "TOURNAMENTS"
        },        
        {
            id: "4",
            numbers: "3000+",
            title: "VISITOR YEARLY"
        },
    ]
    
    return( 
        <section className="w-full h-[294px] grid grid-cols-2 grid-rows-2 place-items-center
                bg-green-500 gap- " >
            {tableInfo.map(table =>(
                <div  
                    key={table.id}
                    className="flex flex-col gap-3.5" >
                    <h1 className="text-2xl font-light text-white">
                        {table.numbers}
                    </h1>
                    <h2 className="text-sm font-light text-white">
                        {table.title}
                    </h2>
                    <span className="w-[80px] h-[3px] bg-yellow-200  "></span>
                </div>
            ))}
        </section>
     );
}