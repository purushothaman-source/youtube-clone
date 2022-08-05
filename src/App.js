import { useState } from "react";
import styled from "styled-components";
import Navbar from "./components/navbar/navbar";
import Sidepanel from "./components/sidepanel/sidepanel";

const Container = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
`;
const BodyContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
`;
const MediaContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-grow: 1;

  .media-screen {
    width: 80%;
    height: 80%;
    // background: black;
    iframe {
      width: 100%;
      height: 100%;
    }
  }
`;
function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [id, setId] = useState("E7wJTI-1dvQ");

  return (
    <Container>
      <Navbar setIsOpen={setIsOpen} id={id} />
      <BodyContainer>
        {isOpen && <Sidepanel setId={setId} id={id} />}
        <MediaContainer>
          <div className="media-screen">
            <iframe
              src={`https://www.youtube.com/embed/${id}`}
              frameborder="0"
              allow="autoplay; encrypted-media"
              allowfullscreen
              title="video"
            />
          </div>
        </MediaContainer>
      </BodyContainer>
    </Container>
  );
}

export default App;
