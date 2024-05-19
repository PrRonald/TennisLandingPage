import { space } from "postcss/lib/list";
import { useState } from "react";

export const Plans = () => {
    const plans = [
        {
            id: "1",
            title: "BANQUETS & EVENTS",
            planInfo: "Ever struggle with thinking of fun activities for your kids to do? Things they can participate in that might even foster a shared interest? We have a perfect solution for you: sign them up to play tennis. Tennis has so many more benefits than just getting your kids outside and running around. Obviously, we're pretty big fans ourselves, so we have come up with six reasons why you should introduce your little ones to this sport.",
            img: "img/kidTennis.jpeg"
        },
        {
            id: "2",
            title: "CLASSES FOR ADULTS",
            planInfo: " struggle with thinking of fun activities for your kids to do? Things they can participate in that might even foster a shared interest? We have a perfect solution for you: sign them up to play tennis. Tennis has so many more benefits than just getting your kids outside and running around. Obviously, we're pretty big fans ourselves, so we have come up with six reasons why you should introduce your little ones to this sport.",
            img: "img/adultTennis.jpeg"
        },
        {
            id: "3",
            title: "CLASSES FOR KIDS",
            planInfo: " with thinking of fun activities for your kids to do? Things they can participate in that might even foster a shared interest? We have a perfect solution for you: sign them up to play tennis. Tennis has so many more benefits than just getting your kids outside and running around. Obviously, we're pretty big fans ourselves, so we have come up with six reasons why you should introduce your little ones to this sport.",
            img: "img/kidTennis.jpeg"
        },
    ];

    const [check, setChecked] = useState(plans[0].title);

    const onChange = (event) => {
        // const element = document.querySelector('.mm');
        // element.scrollIntoView()
    
        setChecked(event.target.value)
    }


    return (

        <section className="grid grid-cols-1 grid-rows-[auto_auto_auto] gap-7 px-6 pt-4  " >
            <div className="w-full ">
                <h1 className="w-full text-xl font-medium text-black text-left">
                    DO MORE THAN
                </h1>
                <h2 className="w-full text-xl font-bold text-black text-left ">
                    JUST PLAYING TENNIS``
                </h2>
            </div>
            <div>
                <div className="w-full flex flex-col xl:flex-col scroll-smooth">
                    {plans.map(plan => (
                        <div 
                            key={plan.id}>
                            <label
                                className={` w-1/2  
                                ${((plan.title === check) ? "border-b-2 border-green-500" : "border-none"  )}`}
                                htmlFor={plan.title}>
                                {plan.title}
                                <input
                                    className="w-full text-left appearance-none"
                                    value={plan.title}
                                    type="radio"
                                    id={plan.title}
                                    checked={check === plan.title }
                                    onChange={onChange}
                                />
                            </label>
                            <div className="w-full">
                                <p className={` py-4 
                                ${((plan.title === check) ? "text-justify" : "hidden")}`} >
                                    {plan.planInfo}
                                </p>
                                {(plan.title === check) ? <img src={plan.img} alt="t" />: ""}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}