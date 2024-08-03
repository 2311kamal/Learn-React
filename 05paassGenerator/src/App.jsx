import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [isCharAllowed, setIsCharAllowed] = useState(false);
  const [isNumAllowed, setIsNumAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (isCharAllowed) str = "~`!@#$%^&*(){}[]:;>.<,?/' " + str;
    if (isNumAllowed) str = "1234567890" + str;
    let pass = "";
    for (let i = 0; i < length; i++) {
      let index = Math.floor(Math.random() * str.length);
      pass += str.charAt(index);
    }
    setPassword(pass);
  }, [length, isNumAllowed, isCharAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, isCharAllowed, isNumAllowed, passwordGenerator]);

  return (
    <>
      <div className="flex-col bg-slate-500 rounded-lg ">
        <div className="flex">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button className="bg-lime-600 " onClick={copyPasswordToClipboard}>
            copy
          </button>
        </div>
        <div className="flex py-2">
          <div className="mx-4">
            <input
              type="range"
              min={8}
              max={25}
              value={length}
              onChange={(e) => setLength(e.target.value)}
            />
            <label> Lnegth:{length}</label>
          </div>
          <div className="mx-4">
            <input
              type="checkbox"
              defaultChecked={isNumAllowed}
              id="numInput"
              onChange={() => setIsNumAllowed((prev) => !prev)}
            />
            <label htmlFor="numInput">Numbers</label>
          </div>
          <div className="mx-4">
            <input
              type="checkbox"
              defaultChecked={isCharAllowed}
              id="charInput"
              onChange={() => setIsCharAllowed((prev) => !prev)}
            />
            <label htmlFor="charInput">Special Char</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
