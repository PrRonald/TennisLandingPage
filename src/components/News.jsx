import { SlCalender } from "react-icons/sl";
import { Link } from "react-router-dom";

export const News = () => {

    const games = [
        {
            id: "1",
            title: "Round of 16",
            date: "NOVEMBER 13 @ 9:00 AM - 3:00 PM"
        },
        {
            id: "2",
            title: "Round of 14",
            date: "DECEMBER 13 @ 9:00 AM - 3:00 PM"
        },
        {
            id: "3",
            title: "Round of 15",
            date: "FEBRUARY 13 @ 9:00 AM - 3:00 PM"
        },]

    const news = [
        {
            id: "1",
            title: "Top Female Tennis Players of Our Time",
            date: "OCT 19, 2019",
            news: "Serena Williams: A true legend, Serena Williams has dominated the tennis world for decades.  With 23 Grand Slam singles titles, she is one of the most successful players in history. Her powerful serve, athleticism, and mental toughness set her apart."
        },
        {
            id: "2",
            title: "Wimbledon Men is Fourth Round Recap",
            date: "OCT 19, 2016",
            news: "Serena Williams: A true legend, Serena Williams has dominated the tennis world for decades.  With 23 Grand Slam singles titles, she is one of the most successful players in history. Her powerful serve, athleticism, and mental toughness set her apart."
        }
    ]

    return (
        <section className="w-full h-auto xl:h-[90vh] grid grid-rows-[auto_auto_auto] gap-14
         bg-gray-300 xl:gap-0 px-6 py-3 xl:grid-rows-[20%_80%] xl:items-center " >
                <h1 className="w-full text-xl xl:text-5xl font-semibold 
                text-black text-left  ">
                    LATEST NEWS
                </h1>
            <div className="w-full grid grid-rows-2 xl:grid-cols-[65%_35%] xl:grid-rows-1
                 xl:place-items-center gap-14 xl:gap-0">
                <div className="flex flex-col gap-14 xl:flex-row  ">
                    {news.map(news => (
                        <div className="w-full flex flex-col gap-4  "
                            key={news.id}>
                            <span className="w-14  h-1 bg-green-500" ></span>
                            <div className="w-full flex flex-col justify-start gap-2 ">
                                <h2 className="w-full text-sm font-medium text-black text-left ">
                                    {news.title}
                                </h2>
                                <h3 className="w-full text-xs font-normal text-gray-400 text-left ">
                                    {news.date}
                                </h3>
                            </div>
                            <p className="w-full text-sm font-normal text-black text-justify  ">
                                {news.news}
                            </p>
                        </div>
                    ))}
                </div>
                <div className="h-auto flex flex-col items-start bg-white
                             px-6 pt-7 pb-4 gap-10 xl:w-[406px] xl:h-[370px] ">
                    {games.map(game => (
                        <div className="w-full h-[89px] flex flex-col place-items-start
                    border-b border-gray-300 gap-3 "
                            key={game.id}>
                            <h1 className="text-base font-normal text-black ">
                                {game.title}
                            </h1>
                            <div className="w-full  flex flex-row gap-2 " >
                                <SlCalender className="text-xs font-normal text-gray-400" />
                                <h2 className="text-xs font-normal text-gray-400">
                                    {game.date}
                                </h2>
                            </div>
                        </div>
                    ))}
                    <Link className="text-xs font-semibold text-green-700 " >
                        VIEW ALL EVENTS
                    </Link>
                </div>
            </div>
        </section>
    );
}