import React, { useEffect, useState } from "react";

const Main = () => {
  let [user, setUser] = useState("");
  let [data, setData] = useState([]);
  let [search, setSearch] = useState(false);

  let [ulist, setUlist] = useState([]);
  // `https://api.gtihub.com/users/${user}`

  useEffect(() => {
    let fetchData = () => {
      fetch(`https://api.github.com/users/${user}`).then(res => {
        res.json().then(data => {
          setData([data]);
          console.log(data);
        });
      });
    };

    if (search) {
      fetchData();
    }
    setSearch(false);
    console.log("useEffect");
    console.log(data);
  }, [search]);

  let handleSubmit = e => {
    e.preventDefault();
    console.log("submitted");
    setSearch(true);
  };
  return (
    <section>
      <article>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search User...."
            onChange={e => {
              setUser(e.target.value);
            }}
          ></input>
          {}

          <button>🔍</button>
        </form>

        <section>
          {data.map(value => {
            return;
            <>
              <h1>{value.html_url}</h1>
              <img src={value.avatar_url} width="300px" />
            </>;
          })}
        </section>
      </article>
    </section>
  );
};

export default Main;
