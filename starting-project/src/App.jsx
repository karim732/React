import { useState } from "react";
import PostsList from "./components/PostsList";
import MainHeader from "./components/MainHeader";
function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const toggleModalHandler = () => {
    setModalIsVisible((prevState) => !prevState);
  };
  return (
    <>
      <MainHeader onCreatePost={toggleModalHandler} />
      <main>
        <PostsList
          isPosting={modalIsVisible}
          onToggleModal={toggleModalHandler}
        />
      </main>
    </>
  );
}

export default App;
