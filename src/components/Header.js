import React from "react";
import "../css/Header.css";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import KeyboardVoiceRoundedIcon from "@mui/icons-material/KeyboardVoiceRounded";
import VideoCallRoundedIcon from "@mui/icons-material/VideoCallRounded";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";

function Header() {
  return (
    <div className="header">
      <div className="left-nav">
        <span className="menu">
          <MenuRoundedIcon className="ham-menu" />
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.edigitalagency.com.au%2Fwp-content%2Fuploads%2FYoutube-logo-white-png-800x180.png&f=1&nofb=1&ipt=c0a2cf631cd166e07c0151f01b67487f08865ff78e0e46eff6a08beec015197d&ipo=images"
            alt=""
          />
          <span clasName="ph">PH</span>
        </span>
      </div>

      <div className="header__search">
        <input type="text" placeholder="Search" className="search__input" />
        <button className="search__button">
          <SearchRoundedIcon className="search__logo" />
        </button>
        <button className="mic__button">
          <span className="mic">
            <KeyboardVoiceRoundedIcon />
          </span>
        </button>
      </div>

      <div className="right__side">
        <button className="video__button">
          <VideoCallRoundedIcon />
        </button>
        <button className="notification__button">
          <NotificationsNoneRoundedIcon />
        </button>
        <button className="user__button">
          <AccountCircleRoundedIcon />
        </button>
      </div>
    </div>
  );
}

export default Header;
