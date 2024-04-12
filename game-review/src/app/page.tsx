'use client'
// Components
import Header from "./components/Header";
import Reviews from "./components/Reviews";
import AddReviewModal from "./components/AddReviewModal";

import { MouseEventHandler, useState } from "react";

type EventProp = {
  event: MouseEventHandler<HTMLButtonElement>,
}

const foo: MouseEventHandler<HTMLButtonElement> = (e) => {
  console.log(e.target.id)
}

function Home() {
  const [showModal, setShowModal] = useState(false);

  function changeModal(event: EventProp) {
    console.log(event)
    if (event.target.id === null) {
      return
    }
    else if (event.target.id === 'showHideModal') {
      setShowModal(!showModal)
    }
  }
  const foo: MouseEventHandler<HTMLDivElement> = (event) => {
    if ('id' in event.target && event.target.id === null) {
      return
    }
    else if ('id' in event.target && event.target.id === 'showHideModal') {
      setShowModal(!showModal)
    }
  }

  return (
    <>
      <Header onAddReviewClick={(e) => changeModal(e)} />
      <Reviews />
      {showModal && <AddReviewModal onClickOutside={(e) => changeModal(e)} />}
    </>
  );
}


export default Home;
