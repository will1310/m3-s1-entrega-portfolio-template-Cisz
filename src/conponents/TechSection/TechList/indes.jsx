import { TechCard } from "./TechCard"
import { technologies } from "../../../data/technologies"

export const TechList = () => {
    return (
        <>
            {technologies.map(list => (
                <TechCard key={list[0]} list={list}/>,
                <TechCard key={list[1]} list={list}/>,
                <TechCard key={list[2]} list={list}/>,
                <TechCard key={list[3]} list={list}/>
            ))}
            
        </>
    )
}