import React,{ useState, useEffect} from "react";
import AuctionForm from "../../components/form/auction";
// import { Link } from 'react-router-dom';
import "./style.css";
import getUser from '../../api/user';
import Noaccess from "../noaccess";


function Auctioneer() {

  const [isAuctioneer, setIsAuctioneer] = useState(false);
  const [isUser, setIsUser] = useState(false);  
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() =>{
    const user = getUser.getCurrentUser();

    if (user) {
      setCurrentUser(user);
      setIsAuctioneer(user.role === "AUCTIONEER");
    }
  }, []);

  return (
    <>
    {(()=>{
      if (isAuctioneer){
        return(
          <div className="auctioneer-page">
        <div className="auctioneer-box">
          <div className="illustration-wrapper">
            <h1>Please Provide Right Information!</h1>
            <p>for the approval for the auction request</p>
          </div>
          <AuctionForm />
        </div>
      </div>
        )
      }else{
        return(
          <div>
          <Noaccess />
          </div>
        )
        
          
      }
    })()}
      
    </>
  );
}

export default Auctioneer;
