import React from "react";
import styled from "styled-components";

const SidepanelWrapper = styled.div`
  max-width: 20rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: 1px solid gray;

  .menu {
    padding: 30px;

    width: 100%;
  }
  .active {
    color: white;
    background-color: blue;
  }
`;
let videos = [
  "E7wJTI-1dvQ",
  "1uFVr15xDGg",
  "DiyPmMmLySw",
  "s0M6S74wPFo",
  "bPe6mKcpkBI",
  "zkNdHv1iMgY"
];
const Sidepanel = ({ id, setId = () => {} }) => {
  const handleClick = id => {
    setId(id);
  };
  return (
    <SidepanelWrapper>
      {videos.map(val => (
        <>
          <div
            className={val === id ? "active menu" : "menu"}
            onClick={() => handleClick(val)}
          >
            {val}
          </div>
        </>
      ))}
    </SidepanelWrapper>
  );
};

export default Sidepanel;
