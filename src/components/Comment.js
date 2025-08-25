export const Comment = ({comments}) =>{
    return (
        <div>
            {
                comments.map((saying) => (
                    <div>
                    <h3>{saying.user}</h3>
                    <p>{saying.comment}</p>
                    </div>
                ))
            }
        </div>
    )
}