import { Component } from "react";
import './launch.css';

export default class Description extends Component{
    render(){
        return(
            <div className="launchpad_discription">
                <h3>DESCRIPTION</h3>
                <div className="descrip_content">
                    <p>Welcome to piratewars.io presale!</p>
                    <p>Here are the details for the presale!</p>
                    <p>First and foremost. The presale will be 4 rounds in total and 12% of the token will be purchased in the presale.<br />
                        As mentioned above, the presale will be 4 rounds and each round will be 3% of the total supply and after each round the price of the token will increase.</p>
                    <p>1st round: The first round will be 1.5% of the total supply and the price will start at $0.10 per token.<br />
                        2nd round: The second round will be 3% of the total supply and the price will start at $0.12 per token.<br />
                        3rd round: The third round will be 3% of the total supply and the price will start at $0.14 per token.<br />
                        4th round: The fourth and final round will be 3.5% of the total supply and the price will start at $0.16 per token.</p>
                    <p>Important things that you should know!</p>
                    <p>1)The project is built in the BSC (Binance Smart Chain) network.<br />
                        2) After the presale ends we will create the initial Liquidity pool in the pancakeswap. (follow us in the discord, twitter, telegram to learn more details)<br />
                        3) The game will launch at 25th of November. <br />
                        4) You can find more about our mission and tokenomics <a href="">here</a>.</p>
                </div>
            </div>
        )
    }
}