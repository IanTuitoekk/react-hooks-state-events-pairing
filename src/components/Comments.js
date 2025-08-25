import { Comment } from "./Comment"

export const Comments = ({comments,handleComments,isHidden}) => {
    return (
        <div>
            <button onClick={handleComments}>{isHidden ? "Show" :"Hide"} Comments</button>
            {!isHidden && (
            <div>
               <Comment comments={comments} />
            </div>
            )}
        </div>
    )
}