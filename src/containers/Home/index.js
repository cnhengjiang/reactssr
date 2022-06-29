import React from "react";
import Header from "./../../components/Header";
import { useSelector, useDispatch } from "react-redux";
const Home = () => {
  const name = useSelector((state) => state.name);
  console.log(name);
  return (
    <div>
      <Header />
      <button onClick={() => alert("xixi")}>hello {name}</button>
    </div>
  );
};
export default Home;
