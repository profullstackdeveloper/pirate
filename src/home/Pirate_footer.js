import "./home.css";
import React, { Component } from "react";

export default class Pirate_footer extends Component {
  render() {
    return (
      <div className="pirate_footer">
        <div className="fo_nav_1">


          <div className="last_commu">
            <div className="logo_text_part">
              <img src="assets/image/footer_pirate-logo.png" />
              <p>Where To Find us</p>
            </div>

            <div className="footer_com_image">
              <a href="https://twitter.com/PirateWarsNFT">
                <img src="assets/image/last_logo_twitter.png" />
              </a>
              <a href="https://t.me/joinchat/vFdurLoHgpczZGQ0">
                <img src="assets/image/last-logo-tele.png" />
              </a>
              <a href="https://discord.gg/daMS7VdXJh">
                <img src="assets/image/last-logo-discord.png" />
              </a>
            </div>
          </div>
        </div>
        <div>
          <p className="copy_right">
            Copyright © 2021-2022 PirateWars. All rights reserved.
          </p>
        </div>
      </div>
    );
  }
}
