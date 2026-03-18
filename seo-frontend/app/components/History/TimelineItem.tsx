import FadeIn from "../History/ScrollAnimation";
import {ReactNode} from "react";

type TimelineItemdata = {
  title:string,
  year:number,
  
}

type Timeline = {
  item:TimelineItemdata,
  index:number
}

const TimelineItem = ({ item, index }: Timeline) => {
  const isLeft = index % 2 === 0;

  return (
    <FadeIn>
      <div className="relative mb-12 flex flex-col md:flex-row items-center">
        {/* LEFT */}
        <div
          className={`w-full md:w-1/2 ${
            isLeft ? "md:pr-8 md:text-right" : "md:order-2 md:pl-8"
          }`}
        >
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-bold text-lg">{item.title}</h3>
            {/* <img
              src={item.image}
              className="my-3 w-full h-auto rounded"
            /> */}
            <p className="text-sm">{item.year}</p>
          </div>
        </div>

        {/* CENTER DOT */}
        <div className="hidden md:block w-6 h-6 bg-orange-500 rounded-full absolute left-1/2 transform -translate-x-1/2"></div>
      </div>
    </FadeIn>
  );
};

export default TimelineItem;