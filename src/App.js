import { useEffect, useRef } from "react";
import './webcomponents/modal.js';
import './App.css';
const App = () => {
  const modalRef = useRef(null);
  
  useEffect(() => {
    const modalRefCurrent = modalRef.current;
    if (modalRefCurrent) {
      modalRefCurrent.addEventListener('onClose', modalRefCurrent.hideModal);
    }

    return () => {
      modalRefCurrent.removeEventListener('onClose', modalRefCurrent.hideModal);
    }
  }, []);

  const openModal = () => {
    if (modalRef.current) {
      modalRef.current.showModal();
    }
  }

  const hideModal = () => {
    if (modalRef.current) {
      modalRef.current.hideModal();
    }
  }

  return (
    <>
      <h1> Modal web component </h1>
      <prw-modal ref={modalRef} title="Awesome Modal" onClose={hideModal}>
        <p> Powered by web components.</p>
        <button className="btn" onClick={hideModal}> Close modal </button>
      </prw-modal>
      <button className="btn" onClick={openModal}> Open modal</button>
    </>
  );
}
export default App;
