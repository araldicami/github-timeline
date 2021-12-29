import { useEffect, useRef } from "react";
import { ContainerSearchUser, WrapperInput } from "./styles";

export const SearchUser = ({ onClickSearch, user, setUser }) => {
  const spanRef = useRef();
  let i = 0;
  const text = "Welcome! Let's see your github timeline!";
  const speed = 50;

  useEffect(() => {
    if (spanRef && spanRef.current) {
      typeWriter();
    }
  }, []);

  function typeWriter() {
    if (i < text.length) {
      spanRef.current.innerHTML += text.charAt(i);
      i++;

      setTimeout(typeWriter, speed);
    }
  }

  return (
    <ContainerSearchUser>
      <span ref={spanRef}></span>
      <label>Username</label>
      <WrapperInput>
        <span>
          <input
            onChange={(e) => setUser(e.target.value)}
            value={user}
            autoFocus
            aria-label="input-username"
            onKeyPress={(event) => {
              if (event.key === "Enter") {
                onClickSearch();
              }
            }}
          />
        </span>

        <button onClick={onClickSearch}>Pesquisar</button>
      </WrapperInput>
    </ContainerSearchUser>
  );
};