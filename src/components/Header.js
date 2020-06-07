import React from "react";
import useLocal from "../useLocal";
import { useAppState } from "../AppContext";

function Header() {
  useLocal();
  let [{ toRead, completed }] = useAppState();
  return (
    <header className='App-header'>
      Reading Challenge
      <div>
        We have read {completed.length} books, out of {toRead.length}
      </div>
    </header>
  );
}

export default Header;
