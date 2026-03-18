import Hero from "../../components/History/Hero"
import FadeIn from "../../components/History/ScrollAnimation"
import TimelineItem from "@/app/components/History/TimelineItem"


const TimeLineData = [
    {
        title:"started", year:2000
    },{title:"Developed", year:2003},{title:"Inspired", year:2005}
]
export default function History(){

    return(
        <>
        <Hero />
        {TimeLineData.map((item, index) => (
        <FadeIn key={item.year}>
          <TimelineItem item={item} index={index} />
        </FadeIn>
      ))}
        </>
    )
}