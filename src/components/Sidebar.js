import React from "react";
import "../css/Sidebar.css";
import HomeIcon from "@mui/icons-material/Home";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import HistoryIcon from "@mui/icons-material/History";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <HomeIcon />
          Home
        </li>
        <li>
          <img
            width="24"
            height="24"
            src="https://img.icons8.com/material-outlined/24/FFFFFF/youtube-shorts.png"
            alt="youtube-shorts"
          />
          Shorts
        </li>
        <li>
          <SubscriptionsIcon className="subs" />
          Subscriptions
        </li>
        <hr />
        <li>
          <h4 className="sub__header you">You</h4>
          <KeyboardArrowRightIcon />
        </li>
        <li>
          <AccountBoxIcon className="subs" />
          Your Channel
        </li>{" "}
        <li>
          <HistoryIcon className="history" />
          History
        </li>{" "}
        <li>
          <SlideshowIcon className="video" />
          Video
        </li>
        <li>
          <AccessTimeIcon className="watch__later" />
          Watch Later
        </li>
        <li>
          <KeyboardArrowDownIcon className="subs" /> Show More
        </li>
        <hr />
        <li>
          <h4 className="sub__header">Subscription</h4>
        </li>
        <li>
          <img
            src="https://yt3.ggpht.com/ytc/APkrFKbMGTVbiAU3667Ssz2b_lLiMaO7x8pLJtY31aCemw=s88-c-k-c0x00ffffff-no-rj"
            alt=""
            className="ch__logo"
          />
          FunForKidsTV
        </li>
        <li>
          <img
            src="https://yt3.ggpht.com/TDprZc4FFpWlQzLJJw-ZCe11GAfWedkr4NiWdOCZEMkUy-rDzkfYh-di81yUjzne3HOaBgxvdrE=s88-c-k-c0x00ffffff-no-rj"
            alt=""
            className="ch__logo"
          />
          Great Leon &nbsp; &nbsp;
        </li>
        <li>
          <img
            src="https://yt3.ggpht.com/IkRoPfDU0A39xXFGSD8Kac4UNZxbhxd5pbnBt-3mGuvQNyNataW-D0L4pQdIi1q5s6qo87o2Ag=s88-c-k-c0x00ffffff-no-rj"
            alt=""
            className="ch__logo"
          />
          DongTV &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;
        </li>
        <li>
          <img
            src="https://yt3.ggpht.com/ytc/APkrFKaC4K_I7apwVuZ10h6kMRSdfTwLbMQagmTx5UvIzg=s88-c-k-c0x00ffffff-no-rj"
            alt=""
            className="ch__logo"
          />
          Nuke's Top 5 &nbsp;
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
