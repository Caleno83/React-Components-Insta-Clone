// You do not need to change any code in this file
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faSearch } from '@fortawesome/free-brands-svg-icons'
import { faHeart, faCompass, faUser } from '@fortawesome/free-regular-svg-icons'
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <div className="search-bar-wrapper">
      <div className="social" id="one">
        <FontAwesomeIcon icon={faInstagram} />
      </div>
      <div className="line">
      <hr size="25"></hr>
      </div>
      <div className="instagram-letter">
        <h3>𝓘𝓷𝓼𝓽𝓪𝓰𝓻𝓪𝓶</h3>
      </div>
      <form className="search-form">
        <input
          type="text" placeholder="🔍 Search"
        />
      </form>
      <div className="social-wrapper">
        <div className="social">
          <FontAwesomeIcon icon={faCompass} />
        </div>
        <div className="social">
          <FontAwesomeIcon icon={faHeart} />
        </div>
        <div className="social">
          <FontAwesomeIcon icon={faUser} />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
