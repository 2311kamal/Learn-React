import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
function Github() {
    const data = useLoaderData();
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/2311kamal")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setData(data);
  //       });
  //   }, []);

  return (
    <div className="text-center m-5 bg-gray-700 text-white p-4 text-3xl">
      GitHub Followres:{data.followers}
      <img
        src={data.avatar_url}
        alt="GitHub Pic"
        width={200}
        className="rounded-full"
      />
    </div>
  );
}

export default Github;

export const githubLoader = async () => {
  const response = await fetch("https://api.github.com/users/2311kamal");
  return response.json();
};
