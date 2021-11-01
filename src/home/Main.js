import "./home.css";
import React, { Component } from "react";

export default class Main extends Component {
  render() {
    return (
      <div>
        <div className="bottom_wheel">
          <a className="pir_starlight_wheel" href="">
            <img
              className="rotating start_pirate_btn"
              src="assets/image/but-play2.png"
            />
            <img
              className="play_honey_wheel"
              src="assets/image/play_honey.png"
            />
          </a>
        </div>
        <div className="pirate_token_set">
          <div>
            <input disabled className="token_input" value={""} type="text" id="" name="" />
            <a>
              <img
                src="assets/image/btn-browser.png"
                className="btn_brow_token"
              />
            </a>
          </div>
          <div className="but_tok_select">
            <a>
              <img src="assets/image/btn-buytoken.png" />
            </a>
            <a>
              <img className="doc_btn_click" src="assets/image/btn-docs.png" />
            </a>
          </div>
        </div>
        <div className="pirate_story">
          <h3 className="text-center stoty_title_1">THE</h3>
          <h1 className="text-center stoty_title_2">STORY</h1>
          <div className="story_content">
            <h3>PIRATE WARS</h3>
            <div className="story_tale" id="style-1">
              <p>
                No friends, no family... All alone in this world, with nothing
                but your bare hands and driven with sheer intense ambition, you
                end up on a pirate’s ship.
              </p>
              <p>
                Living with the burning desire to become someone of importance
                and make your name known, you have to be the fiercest and
                strongest pirate by any means necessary. Working hard and
                struggling to increase your rank on the pirate ship, you get
                close to the crew.
              </p>
              <p>
                Overly respected by the crew and showing too much potential, the
                captain gets envious of your newfound affection and comes up
                with a plan to get rid of you. Derailing in dangerous waters
                infested by sea creatures, the captain persuades the crew to
                sacrifice you for them to escape.
              </p>
              <p>
                You are left alone to die against these new threats but will
                your thirst for revenge be enough to overcome and survive to
                hunt down your former traitorous captain?
              </p>
            </div>
          </div>
        </div>
        <div className="road_map">
          <div className="title_roadmap">
            <h1>
              ROADMAP{" "}
              <img className="logo_ship" src="assets/image/logo-ship.png" />
            </h1>

            <div className="road_total_flow">
              <img src="assets/image/Line_blue_load.png" />
              <div className="right_path">
                <div>
                  <img
                    className="lo_head_match"
                    src="assets/image/logo-head_road_right.png"
                  />
                  <h3 className="road_title_text">Q4-2021</h3>
                </div>
                <div className="road_detail_text">
                  <p>Token Presale</p>
                  <p>List Token - Coingecko</p>
                  <p>List Token - Coinmarketap</p>
                  <p>Pancakeswap LP</p>
                  <p>Launch Game</p>
                  <p>Marketplace & Inventory</p>
                </div>
              </div>
              <div className="left_path">
                <div className="">
                  <img
                    className="lo_head_match_1"
                    src="assets/image/logo-head_road_left.png"
                  />
                  <h3 className="road_title_text_1">Q1-2022</h3>
                </div>
                <div className="road_detail_text_1">
                  <p>PvP arena</p>
                  <p>Staking / NFT Staking</p>
                  <p>Adventure Mode</p>
                  <p>Daily Quests</p>
                  <p>Add More Characters</p>
                </div>
              </div>
              <div className="right_path_2">
                <div>
                  <img
                    className="lo_head_match_2"
                    src="assets/image/logo-head_road_right.png"
                  />
                  <h3 className="road_title_text_2">Q2-2022</h3>
                </div>
                <div className="road_detail_text_2">
                  <p>Land presale</p>
                  <p>Land Introduction</p>
                  <p>Add More Characters</p>
                </div>
              </div>
              <div className="left_path_3">
                <div>
                  <img
                    className="lo_head_match_3"
                    src="assets/image/logo-head_road_left.png"
                  />
                  <h3 className="road_title_text_3">Q3-2022</h3>
                </div>
                <div className="road_detail_text_3">
                  <p>Invasion Mod</p>
                  <p>DEX / Crosschain platforms</p>
                  <p>Raiding</p>
                  <p>Guilds Creation</p>
                </div>
              </div>
              <div className="right_path_4">
                <div>
                  <img
                    className="lo_head_match_4"
                    src="assets/image/logo-head_road_right.png"
                  />
                  <h3 className="road_title_text_4">Q4-2022</h3>
                </div>
                <div className="road_detail_text_4">
                  <p>Guild VS Guild</p>
                  <p>Tournaments</p>
                  <p>Mobile Android, IOS, PC version</p>
                  <p>CEX / DEX Listings</p>
                </div>
              </div>
              <div className="left_path_5">
                <div>
                  <img
                    className="lo_head_match_5"
                    src="assets/image/logo-head_road_left.png"
                  />
                  <h3 className="road_title_text_5">Q1-2023</h3>
                </div>
                <div className="road_detail_text_5">
                  <p>More...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="demo_map">
          <h1>ROADMAP</h1>
          <div className="demo_line">
            <img src="assets/image/Line_blue_load.png" />
          </div>
          <div className="demo_text">
            <ul>
              <img
                className="new_road_right"
                src="assets/image/logo-head_road_right.png"
              />
              <h3>Q4-2021</h3>
              <p>Token Presale</p>
              <p>List Token - Coingecko</p>
              <p>List Token - Coinmarketap</p>
              <p>Pancakeswap LP</p>
              <p>Launch Game</p>
              <p>Marketplace & Inventory</p>
            </ul>
            <ul>
              <img
                className="new_road_right"
                src="assets/image/logo-head_road_right.png"
              />
              <h3>Q1-2022</h3>
              <p>PvP arena</p>
              <p>Staking / NFT Staking</p>
              <p>Adventure Mode</p>
              <p>Daily Quests</p>
              <p>Add More Characters</p>
            </ul>
            <ul>
              <img
                className="new_road_right"
                src="assets/image/logo-head_road_right.png"
              />
              <h3>Q2-2022</h3>
              <p>Land presale</p>
              <p>Land Introduction</p>
              <p>Add More Characters</p>
            </ul>
            <ul>
              <img
                className="new_road_right"
                src="assets/image/logo-head_road_right.png"
              />
              <h3>Q3-2022</h3>
              <p>Invasion Mod</p>
              <p>DEX / Crosschain platforms</p>
              <p>Raiding</p>
              <p>Guilds Creation</p>
            </ul>
            <ul>
              <img
                className="new_road_right"
                src="assets/image/logo-head_road_right.png"
              />
              <h3>Q4-2022</h3>
              <p>Guild VS Guild</p>
              <p>Tournaments</p>
              <p>Mobile Android, IOS, PC version</p>
              <p>CEX / DEX Listings</p>
            </ul>
            <ul>
              <img
                className="new_road_right"
                src="assets/image/logo-head_road_right.png"
              />
              <h3>Q1-2023</h3>
              <p>More...</p>
            </ul>
          </div>
        </div>
        <div className="pirate_tokenomics">
          <h1>
            TOKENOMICS
            <img className="sart_pi_s" src="assets/image/shar_sys.png" />
          </h1>
          <img src="assets/image/token_chart.png" />
        </div>
      </div>
    );
  }
}
