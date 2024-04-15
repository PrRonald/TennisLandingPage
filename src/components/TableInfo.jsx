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

    return (
        <section className="w-full h-[50vh] grid grid-cols-2 grid-rows-2 place-items-center
                  xl:place-items-start xl:items-center xl:w-1/2 xl:grid-rows-[auto_auto] " >
            {tableInfo.map(table => (
                <div
                    key={table.id}
                    className={`flex flex-col gap-3.5 pr-4  
                    ${table.id % 2 ? "xl:place-self-start xl:self-center" : "xl:place-self-end xl:self-center "}`}>
                    <h1 className="text-2xl font-light text-white xl:text-6xl">
                        {table.numbers}
                    </h1>
                    <h2 className="text-sm font-light text-white xl:text-xl ">
                        {table.title}
                    </h2>
                    <span className="w-[80px] h-[3px] bg-yellow-200  "></span>
                </div>
            ))}
        </section>
    );
}