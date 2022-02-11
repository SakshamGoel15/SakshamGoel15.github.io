import React from "react";
import Modal from "react-modal";
import "./ModalIndex.css";


const customStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    // backgroundColor: "#242631",
    // filter: "blur(5px)",
  },
  content: {
    position: "absolute",
    top: "40px",
    left: "40px",
    right: "40px",
    // innerwidth: "500px",
    bottom: "40px",
    border: "1px solid #fff",
    background: "#fff",
    overflow: "auto",
    WebkitOverflowScrolling: "touch",
    borderRadius: "4px",
    outline: "none",
    // filter: "blur(5px)",
    // padding: '20px'
  },
  Modal: {
    background: "#000",
    maxwidth: "500px",
    width: "100%",
  },

  //   content: {
  //     top: "50%",
  //     left: "50%",
  //     right: "auto",
  //     bottom: "auto",
  //     backgroundColor: "Black",
  //     marginRight: "-50%",
  //     transform: "translate(-50%, -50%)",
  //   },
};

function App(props) {
  console.log(props);
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <div className="acertimediadiv">
        <span className="acertimediaSpan">
          <div className="acertiwrapper">
            <div className="acertiicon certiblog">
              <div className="acertitooltip">Click Me</div>
              <button className="Button" onClick={openModal}>
                Certificate...
              </button>
            </div>
          </div>
        </span>
      </div>
      {/* <div className="Container">
        
      </div> */}

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {/* <div className="ModalWrapper"> */}
        <div className="Icon">
          <div className="Certificate">
            <div
              className="Heading"
              ref={(_subtitle) => (subtitle = _subtitle)}
            ></div>
            <div className="Cross">
              <button className="crossbutton" onClick={closeModal}>
                <i className="fa fa-times"></i>
              </button>
            </div>
          </div>
          <div className="Image">
            <img
              className="ModalImg"
              src={require("../assets/Certification/" + props.img).default}
              alt="camera"
            />
          </div>
        </div>
        {/* </div> */}
      </Modal>
    </div>
  );
}

export default App;
