export const Heading = ({title,views,date}) => {
    return (
        <div>
            <h2>{title}</h2>
            <p><strong>{views} | {date}</strong></p>
            
        </div>
    )
}