import React, { useEffect, useState } from "react";
import "./styles.css";

const promise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve({ name: "xxx", email: "xxx@gmail.com" }), 1500);
  });

export default function App() {
  const [user, setUser] = useState([{ name: "", email: "" }]);

  const fetchUser = async () => {
    const res = await promise();
    console.log(res);

    setUser(res);
  };

  useEffect(() => {
    fetchUser();
    console.log("re-render");
  }, []);

  return (
    <li>
      <ul>
        <h3>{user.name}</h3>
        <h3>{user.email}</h3>
      </ul>
    </li>
  );
}
