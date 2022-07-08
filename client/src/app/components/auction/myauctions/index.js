import React, { useEffect, useState } from "react";
import user from "../../../api/user";
import auction from "../../../api/auction";

const Myauctions = () => {
  const [data, setData] = useState([]);
  // const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const cuser = user.getCurrentUser();

    // if (cuser) {
    //   setCurrentUser(cuser);
    // }

    auction
      .getAuctionBySeller(cuser._id)
      .then((res) => {
        const data = res.data.currentauctionData;
        setData(data);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return <div>Myauctions</div>;
};

export default Myauctions;
