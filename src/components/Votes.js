export const Votes = ({upvotes,downvotes,handleUp,handleDown}) => {
   
    return (
        <div>
            <button onClick={handleUp}>{upvotes}👍🏾</button>
            <button onClick={handleDown}>{downvotes}👎🏾</button>
        </div>
    )
}