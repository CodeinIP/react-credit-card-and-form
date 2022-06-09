import axios from "axios";
import React, { useState, useEffect } from "react";

const UseEffect = () => {
  const [loading, setLoading] = useState();
  const [data, setdata] = useState();
  const [error, seterror] = useState();
  const [parameters, setParameters] = useState({
    query: "masai",
    page: 1,
    per_page: 5
  });
  const [text, setText] = useState("");
  useEffect(() => {
    getUsers(parameters);
  }, [parameters]);
  const getUsers = ({ query = "masai", page, perPage }) => {
    console.log(1);
    setLoading(true);
    return axios({
      url: "https://api.github.com/search/users/",
      params: {
        q: query,
        page: page,
        per_page: perPage,
      },
    })
      .then((res) => {
        setdata(res.data.items);
        console.log(res.data.items);
        setLoading(false);
      })
      .catch((err) => {
        seterror(true);
        setLoading(false);
      });
  };
  const handleClick = () => {
    getUsers({ ...parameters, q: text });
  };
  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="username"
      />
      <button onClick={() => handleClick}>Search</button>
      <div>
        <button
          disabled={parameters.page === 1}
          onClick={() =>
            setParameters({ ...parameters, page: parameters.page - 1 })
          }
        >
          prev
        </button>
        <button
          onClick={() =>
            setParameters({ ...parameters, page: parameters.page + 1 })
          }
        >
          next
        </button>
      </div>
      <div>
      {data?.map((item) => (
        <div key={item.id}>
        <img src={item.avatar_url} style={{width:"50px"}} alt={item.login} />
        <h3>{item.login}</h3>
        </div>
      ))}
      </div>
    </div>
  );
};

export default UseEffect;
