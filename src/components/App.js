import { useState } from "react";
import video from "../data/video.js";
import { Comments } from "./Comments.js";
import { Heading } from "./Heading.js";
import { Votes } from "./Votes.js";

function App() {
  console.log("Here's your data:", video);
  const [upVote, setUpVote] = useState(9210);
  const [downVote, setDownVote] = useState(185);
  const [isHidden, setHidden] = useState(false);

  function handleUp() {
    setUpVote((upvote) => upvote + 1);
  }
  function handleDown() {
    setDownVote((downVote) => downVote + 1);
  }

  function handleComments() {
    setHidden((prevIsHidden) => !prevIsHidden);
  }

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <Heading title={video.title} views={video.views} date={video.createdAt} />
      <Votes
        upvotes={upVote}
        downvotes={downVote}
        handleUp={handleUp}
        handleDown={handleDown}
      />
      <Comments
        comments={video.comments}
       handleComments={handleComments}
        isHidden={isHidden}
      />
    </div>
  );
}

export default App;
