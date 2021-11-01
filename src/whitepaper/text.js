import { Component } from "react";
import "./whitepaper.css";
import FlippingPages from "flipping-pages";
import "flipping-pages/FlippingPages.css";
import token_chat from "./assets/img/token_chat.png";
import telegram from "./assets/img/telegram.png";
import discord from "./assets/img/discord.png";
import twitter from "./assets/img/twitter.png";
import t_img from "./assets/img/last_img.png";
import sta_by from "./assets/img/standing_boy.png";
import ship_img from "./assets/img/ship_img.png";
import middle_line from "./assets/img/middle_line.png";
import road_line from "./assets/img/road_line.png";
import road_logo from "./assets/img/road_logo.png";
import road_t_line from "./assets/img/road_t_line.png";
import button_space from "./assets/img/button_space.png";
import HTMLFlipBook from "react-pageflip";

export default class Text extends Component {
  constructor(props) {
    super(props);
    this.totalPages = 15;
    this.state = {
      selected: 0,
    };
    this.handleSelectedChange = this.handleSelectedChange.bind(this);
    this.previous = this.previous.bind(this);
    this.next = this.next.bind(this);
  }

  handleSelectedChange(selected) {
    this.setState({ selected });
  }

  previous() {
    this.setState((state) => ({
      selected: state.selected - 1,
    }));
  }

  next() {
    this.setState((state) => ({
      selected: state.selected + 1,
    }));
  }

  render() {
    return (
      <div>
        <div className="white_text">
          <h3>WHITEPAPER</h3>
          <div className="w_paper_details">
            <FlippingPages
              className="App-pages"
              direction="horizontal"
              selected={this.state.selected}
              onSelectedChange={this.handleSelectedChange}
              /* touch-action attribute is required by pointer events
                        polyfill */
              touch-action="none"
            >
              <div className="App-page App-page_green">
                <div className="left_side">
                  <div className="page_num">1</div>
                  <div className="line_center">
                    <img src={middle_line} />
                  </div>
                  <h2 className="m_t_60">WHITEPAPER</h2>
                  <h1 className="m_t_80">PIRATE WARS</h1>
                  <p>
                    YOUR CRYPTO <br />
                    NFT PIRATE GAME
                  </p>
                </div>
                <div className="right_side">
                  <div className="page_num">2</div>
                  <h2 className="m_t_60">TABLE CONTENT</h2>
                  <div className="table_content_area">
                    <p>Introductioin------------------------------------3</p>
                    <p>Tokenomics--------------------------------------5</p>
                    <p>Roadmap-----------------------------------------7</p>
                    <p>Our Mission------------------------------------10</p>
                    <p>Gameplay---------------------------------------11</p>
                    <p>Ranks--------------------------------------------12</p>
                    <p>Security audits---------------------------------13</p>
                    <p>Where to find us------------------------------14</p>
                    <p>Thank you, Pirate!----------------------------15</p>
                  </div>
                </div>
              </div>
              <div className="App-page">
                <div className="left_side">
                  <div className="page_num">3</div>
                  <div className="line_center">
                    <img src={middle_line} />
                  </div>
                  <h2>INTRODUCTION</h2>
                  <div className="into_content">
                    <p>
                      Pirate Wars is a crypto NFT game that focuses on the best
                      user pirate theme experience. Players(you) will have the
                      opportunity to hire their own pirates and fight the sea
                      monsters and earn their loot in that way.
                    </p>
                    <p>
                      Pirate Wars will give many features in the near future to
                      it's users. It will be competitive yet attractive for
                      anyone to join and become the best captain!
                    </p>
                    <p>
                      Some features of it will be PvP, guilds, Tournaments,
                      adventures, lands to name a few.
                    </p>
                    <p>
                      PirateWars.io strive to bring all the features and combine
                      them all together to give a full gaming experience that
                      will keep you busy, yet profitable!
                    </p>
                    <p>
                      The game runs on the BSC (Binance Smart Chain) network. As
                      a result your transactions costs will be low.
                    </p>
                  </div>
                </div>
                <div className="right_side">
                  <div className="page_num">4</div>
                  <div className="content_next_into">
                    <p>
                      Last but not least your battling/fighting rounds won't
                      cost you ANY fees. Our main priority is to play the game
                      without having to pay fees each time!
                    </p>
                    <img className="fort_by" src={sta_by}></img>
                  </div>
                </div>
              </div>
              <div className="App-page">
                <div className="left_side">
                  <div className="page_num">5</div>
                  <div className="line_center">
                    <img src={middle_line} />
                  </div>
                  <h2>TOKENOMICS</h2>
                  <div className="into_content">
                    <img className="to_ch_img" src={token_chat} />
                    <p>
                      Seed Round : Teams initial payment. The team will receive
                      1% of the total amount of tokens as their payment.
                      <br /> Public and private Presale: There will be four (4)
                      rounds of the presale. Please note the presale total
                      percentage (%) is 12%
                      <br />
                    </p>
                  </div>
                </div>
                <div className="right_side">
                  <div className="page_num">6</div>
                  <div className="into_content">
                    <p className="percent_token">
                      1st round: 3% of the tokens at $0.10
                      <br />
                      2nd round: 3% of the tokens at $0.12
                      <br />
                      3rd round: 3% of the tokens at $0.14
                      <br />
                      4th round: 3% of the tokens at $0.16
                    </p>
                    <p>
                      When a round ends, we will immediately start the next
                      round with the price as mentioned above.
                    </p>
                    <p>
                      Liquidity: 25% of the tokens will be used for the
                      Liquidity pools.
                    </p>
                    <p>
                      Game Incentives: 30% of the tokens will be used for the
                      “Pool” that will reward users.
                    </p>
                    <p>
                      Development: 17% of the tokens will be used for further
                      expansion of the team. Also a % of this will be used for
                      future investors, CEX, etc.
                    </p>
                    <p>
                      Locked tokens: 5% teams payment that will unlock 1% every
                      2 months (for a total of 10 months)
                    </p>
                    <p>
                      Staking-Farming pools: 10% of the tokens will be used for
                      the staking.
                    </p>
                  </div>
                </div>
              </div>
              <div className="App-page">
                <div className="left_side">
                  <div className="road_line">
                    <img src={road_line} />
                  </div>
                  <div className="road_logo_f">
                    <img src={road_logo} />
                  </div>
                  <div className="road_logo_s">
                    <img src={road_logo} />
                  </div>
                  <div className="page_num">7</div>
                  <div className="line_center">
                    <img src={middle_line} />
                  </div>
                  <h2>ROADMAP</h2>
                  <div className="road_content">
                    <h2>Q4-2021</h2>
                    <p>Token Presale</p>
                    <p>List Token – coingecko</p>
                    <p>List Token – coinmarketcap</p>
                    <p>Pancakeswap LP</p>
                    <p>LaunchGame</p>
                    <p>Marketplace & Inventory</p>
                  </div>
                  <div className="road_content">
                    <h2>Q1- 2022</h2>
                    <p>PvP arena</p>
                    <p>Staking / NFT Staking</p>
                    <p>Adventure Mode</p>
                    <p>Daily Quests</p>
                    <p>Add more characters</p>
                  </div>
                </div>
                <div className="right_side  m_t_80">
                  <div className="road_line_2">
                    <img src={road_line} />
                  </div>
                  <div className="road_logo_f_2">
                    <img src={road_logo} />
                  </div>
                  <div className="road_logo_s_2">
                    <img src={road_logo} />
                  </div>
                  <div className="road_logo_t_2">
                    <img src={road_logo} />
                  </div>
                  <div className="page_num">8</div>
                  <div className="road_content">
                    <h2>Q2-2022</h2>
                    <p>Land Presale</p>
                    <p>Land Introduction</p>
                    <p>Add More Characters</p>
                  </div>
                  <div className="road_content">
                    <h2>Q3-2022</h2>
                    <p>Invasion mod</p>
                    <p>DEX/ Crosschain platform</p>
                    <p>Raiding</p>
                    <p>Guilds Creation</p>
                  </div>
                  <div className="road_content">
                    <h2>Q4- 2022</h2>
                    <p>Guild VS Guild</p>
                    <p>Tournaments</p>
                  </div>
                </div>
              </div>
              <div className="App-page">
                <div className="line_center">
                  <img src={middle_line} />
                </div>
                <div className="left_side m_t_80">
                  <div className="road_line_3">
                    <img src={road_t_line} />
                  </div>
                  <div className="road_logo_f_3">
                    <img src={road_logo} />
                  </div>
                  <div className="page_num">9</div>
                  <div className="road_content">
                    <p>Android, IOS, PC Version</p>
                    <p>CEX/DEX Listings</p>
                  </div>
                  <div className="road_content">
                    <h2>Q1-2023</h2>
                    <p>To be announced</p>
                  </div>
                </div>
                <div className="left_side">
                  <div className="page_num">10</div>
                  <h2>OUR MISSION</h2>
                  <div className="into_content">
                    <p>
                      From day 1, our mission is to create a stable NFT crypto
                      game that will last for a very long time.
                    </p>
                    <p>Our main priorities are:</p>
                    <p>An autonomous pool that can remain stable.</p>
                    <p>A profitable game for everyone.</p>
                    <p>
                      A competitive game that will require skills, strategy and
                      luck to win your enemy!
                    </p>
                    <p>Create a stable economy.</p>
                    <p>Create a game that everyone (including us) will like.</p>
                    <p>
                      We want to have a feature rich game, and we won't stop
                      until we deliver.
                    </p>
                  </div>
                </div>
              </div>
              <div className="App-page">
                <div className="left_side">
                  <div className="page_num">11</div>
                  <div className="line_center">
                    <img src={middle_line} />
                  </div>
                  <h2>GAMEPLAY</h2>
                  <div className="into_content">
                    <p>In phase 1 the game mechanics will be simple.</p>
                    <p>
                      The first thing you have to do is to hire your own pirate,
                      please note that every character will be different in
                      terms of skill and rarity. Don't worry if you were unlucky
                      and got a Rank 1 character though, you can always use the
                      Lucky Charm and improve the rank of your pirate.
                    </p>
                    <p>
                      A pirate will always need a weapon, so you will have to
                      buy a weapon either from the marketplace or create one by
                      yourself.
                    </p>
                    <p>
                      Characters and weapons will have different elements that
                      will give you bonuses against the monster that you fight.
                    </p>
                    <p>
                      In the fighting part of the game you have four (4)
                      different options.
                    </p>
                  </div>
                </div>
                <div className="right_side">
                  <div className="page_num">12</div>
                  <div className="into_content">
                    <p>
                      You can either, Attack, Defend, Heal, or use your Skill.
                    </p>
                    <p>
                      Every rank (as explained down below) have different
                      skills. You can only use your skill once per fight.
                    </p>
                    <p>
                      Each fight will last 40 rounds. If you haven't killed the
                      monster or the monster haven't killed you,the character
                      (or monster) with most health will win the fight.
                    </p>
                    <img className="ship_img" src={ship_img}></img>
                  </div>
                </div>
              </div>
              <div className="App-page">
                <div className="left_side">
                  <div className="page_num">13</div>
                  <div className="line_center">
                    <img src={middle_line} />
                  </div>
                  <h2>RANKS</h2>
                  <div className="into_content">
                    <p>
                      You will have the chance to hire one of the five ranks
                      each time.
                    </p>
                    <p>Cook (will be more of a support type)</p>
                    <p>Cabin boy (strong dps)</p>
                    <p>Gunner (range dps)</p>
                    <p>Quartermaster (secondary tank / dps)</p>
                    <p>Captain (tank)</p>
                    <p>
                      Please note that the ranks of any character can go up to
                      5*. That means even a simple cook can go to maximum rank
                      if you're lucky!
                    </p>
                    <p>Each rank will increase your stats.</p>
                  </div>
                </div>
                <div className="left_side">
                  <div className="page_num">14</div>
                  <h2>SECURITY AUDITS</h2>
                  <p>To be updated</p>
                </div>
              </div>
              <div className="App-page">
                <div className="left_side">
                  <div className="page_num">15</div>
                  <div className="line_center">
                    <img src={middle_line} />
                  </div>
                  <h2>Where to find us</h2>
                  <div>
                    <img className="last_logo" src={discord} />
                    <img className="last_logo" src={telegram} />
                    <img className="last_logo" src={twitter} />
                  </div>
                  <h2 className="thanks_pirate">Thank you, Pirate!</h2>
                  <img src={t_img}></img>
                </div>
              </div>
            </FlippingPages>
            <button
              className="left_arrow"
              onClick={this.previous}
              disabled={!this.state.selected}
            ></button>
            <img className="btn_space" src={button_space} />
            <button
              className="right_arrow"
              onClick={this.next}
              disabled={this.state.selected + 1 === this.totalPages}
            ></button>
          </div>
        </div>
        <div className="white_text_mobile">
          <h3>WHITEPAPER</h3>
          <div className="w_paper_details">
            <FlippingPages
              className="App-pages"
              direction="horizontal"
              selected={this.state.selected}
              onSelectedChange={this.handleSelectedChange}
              /* touch-action attribute is required by pointer events
                    polyfill */
              touch-action="none"
            >
              <div className="App-page">
                <div className="page_num">1</div>
                <h2 className="p_t_60">WHITEPAPER</h2>
                <h1 className="m_t_80">PIRATE WARS</h1>
                <p>
                  YOUR CRYPTO <br />
                  NFT PIRATE GAME
                </p>
              </div>
              <div className="App-page">
                <div className="page_num">2</div>
                <h2 className="p_t_60">TABLE CONTENT</h2>
                <div className="table_content_area">
                  <p>Introductioin------------------------------------3</p>
                  <p>Tokenomics--------------------------------------5</p>
                  <p>Roadmap-----------------------------------------7</p>
                  <p>Our Mission------------------------------------10</p>
                  <p>Gameplay---------------------------------------11</p>
                  <p>Ranks--------------------------------------------12</p>
                  <p>Security audits---------------------------------13</p>
                  <p>Where to find us------------------------------14</p>
                  <p>Thank you, Pirate!----------------------------15</p>
                </div>
              </div>
              <div className="App-page">
                <div className="page_num">3</div>
                <h2>INTRODUCTION</h2>
                <div className="into_content">
                  <p>
                    Pirate Wars is a crypto NFT game that focuses on the best
                    user pirate theme experience. Players(you) will have the
                    opportunity to hire their own pirates and fight the sea
                    monsters and earn their loot in that way.
                  </p>
                  <p>
                    Pirate Wars will give many features in the near future to
                    it's users. It will be competitive yet attractive for anyone
                    to join and become the best captain!
                  </p>
                  <p>
                    Some features of it will be PvP, guilds, Tournaments,
                    adventures, lands to name a few.
                  </p>
                  <p>
                    PirateWars.io strive to bring all the features and combine
                    them all together to give a full gaming experience that will
                    keep you busy, yet profitable!
                  </p>
                </div>
              </div>
              <div className="App-page">
                <div className="page_num">4</div>
                <div className="content_next_into">
                  <p>
                    The game runs on the BSC (Binance Smart Chain) network. As a
                    result your transactions costs will be low.
                  </p>
                  <p>
                    Last but not least your battling/fighting rounds won't cost
                    you ANY fees. Our main priority is to play the game without
                    having to pay fees each time!
                  </p>
                  <img className="fort_by" src={sta_by}></img>
                </div>
              </div>
              <div className="App-page">
                <div className="page_num">5</div>
                <h2>TOKENOMICS</h2>
                <div className="into_content">
                  <img className="to_ch_img" src={token_chat} />
                  <p>
                    Seed Round : Teams initial payment. The team will receive 1%
                    of the total amount of tokens as their payment.
                    <br /> Public and private Presale: There will be four (4)
                    rounds of the presale. Please note the presale total
                    percentage (%) is 12%
                    <br />
                  </p>
                  <p className="percent_token">
                    1st round: 3% of the tokens at $0.10
                    <br />
                    2nd round: 3% of the tokens at $0.12
                    <br />
                    3rd round: 3% of the tokens at $0.14
                    <br />
                    4th round: 3% of the tokens at $0.16
                  </p>
                </div>
              </div>
              <div className="App-page p_t_60">
                <div className="page_num">6</div>
                <div className="into_content">
                  <p>
                    When a round ends, we will immediately start the next round
                    with the price as mentioned above.
                  </p>
                  <p>
                    Liquidity: 25% of the tokens will be used for the Liquidity
                    pools.
                  </p>
                  <p>
                    Game Incentives: 30% of the tokens will be used for the
                    “Pool” that will reward users.
                  </p>
                  <p>
                    Development: 17% of the tokens will be used for further
                    expansion of the team. Also a % of this will be used for
                    future investors, CEX, etc.
                  </p>
                  <p>
                    Locked tokens: 5% teams payment that will unlock 1% every 2
                    months (for a total of 10 months)
                  </p>
                  <p>
                    Staking-Farming pools: 10% of the tokens will be used for
                    the staking.
                  </p>
                </div>
              </div>
              <div className="App-page">
                <div className="road_line">
                  <img src={road_line} />
                </div>
                <div className="road_logo_f">
                  <img src={road_logo} />
                </div>
                <div className="road_logo_s">
                  <img src={road_logo} />
                </div>
                <div className="page_num">7</div>
                <h2>ROADMAP</h2>
                <div className="road_content">
                  <h2>Q4-2021</h2>
                  <p>Token Presale</p>
                  <p>List Token – coingecko</p>
                  <p>List Token – coinmarketcap</p>
                  <p>Pancakeswap LP</p>
                  <p>LaunchGame</p>
                  <p>Marketplace & Inventory</p>
                </div>
                <div className="road_content">
                  <h2>Q1- 2022</h2>
                  <p>PvP arena</p>
                  <p>Staking / NFT Staking</p>
                  <p>Adventure Mode</p>
                  <p>Daily Quests</p>
                  <p>Add more characters</p>
                </div>
              </div>
              <div className="App-page p_t_60">
                <div className="road_line_2">
                  <img src={road_line} />
                </div>
                <div className="road_logo_f_2">
                  <img src={road_logo} />
                </div>
                <div className="road_logo_s_2">
                  <img src={road_logo} />
                </div>
                <div className="road_logo_t_2">
                  <img src={road_logo} />
                </div>
                <div className="page_num">8</div>
                <div className="road_content">
                  <h2>Q2-2022</h2>
                  <p>Land Presale</p>
                  <p>Land Introduction</p>
                  <p>Add More Characters</p>
                </div>
                <div className="road_content">
                  <h2>Q3-2022</h2>
                  <p>Invasion mod</p>
                  <p>DEX/ Crosschain platform</p>
                  <p>Raiding</p>
                  <p>Guilds Creation</p>
                </div>
                <div className="road_content">
                  <h2>Q4- 2022</h2>
                  <p>Guild VS Guild</p>
                  <p>Tournaments</p>
                </div>
              </div>
              <div className="App-page p_t_60">
                <div className="road_line_3">
                  <img src={road_t_line} />
                </div>
                <div className="road_logo_f_3">
                  <img src={road_logo} />
                </div>
                <div className="page_num">9</div>
                <div className="road_content">
                  <p>Android, IOS, PC Version</p>
                  <p>CEX/DEX Listings</p>
                </div>
                <div className="road_content">
                  <h2>Q1-2023</h2>
                  <p>To be announced</p>
                </div>
              </div>
              <div className="App-page">
                <div className="page_num">10</div>
                <h2>OUR MISSION</h2>
                <div className="into_content">
                  <p>
                    From day 1, our mission is to create a stable NFT crypto
                    game that will last for a very long time.
                  </p>
                  <p>Our main priorities are:</p>
                  <p>An autonomous pool that can remain stable.</p>
                  <p>A profitable game for everyone.</p>
                  <p>
                    A competitive game that will require skills, strategy and
                    luck to win your enemy!
                  </p>
                  <p>Create a stable economy.</p>
                  <p>Create a game that everyone (including us) will like.</p>
                  <p>
                    We want to have a feature rich game, and we won't stop until
                    we deliver.
                  </p>
                </div>
              </div>
              <div className="App-page">
                <div className="page_num">11</div>
                <h2>GAMEPLAY</h2>
                <div className="into_content">
                  <p>In phase 1 the game mechanics will be simple.</p>
                  <p>
                    The first thing you have to do is to hire your own pirate,
                    please note that every character will be different in terms
                    of skill and rarity. Don't worry if you were unlucky and got
                    a Rank 1 character though, you can always use the Lucky
                    Charm and improve the rank of your pirate.
                  </p>
                  <p>
                    A pirate will always need a weapon, so you will have to buy
                    a weapon either from the marketplace or create one by
                    yourself.
                  </p>
                  <p>
                    Characters and weapons will have different elements that
                    will give you bonuses against the monster that you fight.
                  </p>
                  <p>
                    In the fighting part of the game you have four (4) different
                    options.
                  </p>
                </div>
              </div>
              <div className="App-page p_t_60">
                <div className="page_num">12</div>
                <div className="into_content">
                  <p>
                    You can either, Attack, Defend, Heal, or use your Skill.
                  </p>
                  <p>
                    Every rank (as explained down below) have different skills.
                    You can only use your skill once per fight.
                  </p>
                  <p>
                    Each fight will last 40 rounds. If you haven't killed the
                    monster or the monster haven't killed you,the character (or
                    monster) with most health will win the fight.
                  </p>
                  <img className="ship_img" src={ship_img}></img>
                </div>
              </div>
              <div className="App-page">
                <div className="page_num">13</div>
                <h2>RANKS</h2>
                <div className="into_content">
                  <p>
                    You will have the chance to hire one of the five ranks each
                    time.
                  </p>
                  <p>Cook (will be more of a support type)</p>
                  <p>Cabin boy (strong dps)</p>
                  <p>Gunner (range dps)</p>
                  <p>Quartermaster (secondary tank / dps)</p>
                  <p>Captain (tank)</p>
                  <p>
                    Please note that the ranks of any character can go up to 5*.
                    That means even a simple cook can go to maximum rank if
                    you're lucky!
                  </p>
                  <p>Each rank will increase your stats.</p>
                </div>
              </div>
              <div className="App-page">
                <div className="page_num">14</div>
                <h2>SECURITY AUDITS</h2>
                <p>To be updated</p>
              </div>
              <div className="App-page p_t_60">
                <div className="page_num">15</div>
                <h2>Where to find us</h2>
                <div>
                  <img className="last_logo" src={discord} />
                  <img className="last_logo" src={telegram} />
                  <img className="last_logo" src={twitter} />
                </div>
                <h2 className="thanks_pirate">Thank you, Pirate!</h2>
                <img className="last_pa_white_img" src={t_img}></img>
              </div>
            </FlippingPages>
            <button
              className="left_arrow"
              onClick={this.previous}
              disabled={!this.state.selected}
            ></button>
            <img className="btn_space" src={button_space} />
            <button
              className="right_arrow"
              onClick={this.next}
              disabled={this.state.selected + 1 === this.totalPages}
            ></button>
          </div>
        </div>
      </div>
    );
  }
}
