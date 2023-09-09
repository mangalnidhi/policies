"use client";
import { useState } from "react";
import Form from "../components/Form";

const Connect = () => {
  const [showDialog, setShowDialog] = useState(false);

  const showHandler = () => {
    setShowDialog(false);
  };

  return (
    <div>
      <li className="relative ul px-5">
        <span onClick={() => setShowDialog(true)} className="cursor-pointer">
          Connect
        </span>
      </li>
      {showDialog && <Form show={showHandler} />}
    </div>
  );
};

export default Connect;
