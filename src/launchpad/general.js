import { Component } from "react";
import "./launch.css";
import Faq from "react-faq-component";

const data = {
  rows: [
    {
      title: "1. I invested, now what?",
      content:
        "First of all, thank you for your trust. After the investment you will be able to see the tokens in your metamask wallet, or the wallet you used.<br><br> After the presale ends you will be able to sell, or spend your tokens to hire your pirates and craft your weapons to fight the sea creatures!<br><br> The choice is yours, pirate!<br><br> ",
    },
    {
      title: "2. What's the minimum and maximum I can invest?",
      content:
        "The minimum investment (softcap) is 0.2 BNB tokens.<br><br> The maximum investment is 3 BNB's Please note that you can invest only once per round!<br><br>",
    },
    {
      title: "3. What if a round ends from day one (1)?",
      content:
        "We don't want to keep you waiting, therefore once the round ends, we will immediately begin the next round and will inform you via discord, telegram, and/or twitter. So make sure to follow us, and be updated.<br><br>",
    },
    {
      title: "4. All of the 4 rounds ended, what now?",
      content:
        "Well, If you didn't had a chance to buy during presale, don't worry, you'll be able to buy from pancakeswap once we create the Liquidity Pool. <br><br>Again, more info about the dates in our social media platforms.<br><br>",
    },
    {
      title: "5. Can I use the tokens from the presale to play the game?",
      content:
        "Yes, of course. You can buy and use the tokens anytime you want.<br><br>",
    },
    {
      title: "6. What's the purpose of this presale.",
      content:
        "Well, the main purpose is to raise capital, (that's why early investors buy cheaper). That capital will be used for the liquidity pool, expanding the team, and improving the quality of the game.<br><br> Our purpose is to provide value to our users. So capital is needed to do all the things that mentioned above. We want to deliver the best crypto-nft game that we can, and early investors will be rewarded with buying our token cheaper (before we even launch in the market).<br><br>",
    },
    {
      title: "7. What the initial price will be after the presale.",
      content:
        "To be fully transparent with you, the initial price in the pancakeswap will start at $0.20 per token.<br><br>",
    },
    {
      title: "8. Why I should invest to your project?",
      content:
        "Great question. You should invest for many reasons in our project but let me name just a few of them.<br><br> Our main goal from day 1 is to build an autonomous gaming pool that will reward our users for the long run, and not just for days. We are not a pump & dump scheme. We literally don't care about the short term gains.<br><br> Our focus is on the long run. You know what they say. If they pay fast, they die fast. So with that being said, we are doing our best to create a fair and profitable game, yet attractive to you. We want you to have fun playing our game while you earn loot, and be with us from the beginning.<br><br> Another reason, is that we promise to deliver. We want to build a game with many features. We won't stick to just phase 1. We want to complete the whole game and built what we have in mind.As me (the Founder &CEO) writing this answer to you now, I promise you to deliver everything that I have prepared for the future!<br><br> We are a team that works really hard to provide the best to you! Last but not least, we are here to listen to the community and literally care for any of you. We are not deaf or blind and we definitely know that even we make mistakes some times. So, we will be open to any suggestions in the near future (after launch).<br><br> We put our faith and trust in the community, as the community put their faith and trust to us.<br><br>",
    },
    {
      title: "9. Why launch the game at this date?",
      content:
        "Well, the game is currently under construction, I can't reveal many things about the game as of now but I will share everything in the social media about the progress.<br><br> The date (25th of November) was set because we believe we will be ready that day for the launch. Please note that development takes time, and we must test the game before launching it.<br><br>",
    },
    {
      title: "10. Why you don't show your face and the team?",
      content:
        "We are planning to do this before this year ends. <br><br>We will update you very soon about this. At this point our focus is in the development. <br><br>After development we will update the whitepaper and the website with our team.<br><br>",
    },
    {
      title: "11. Are you sure about the launch date?",
      content:
        "Yes, I'm sure that the game will be ready by that date.<br><br> If any delays happen we will inform you in our social media channels. Worst case scenario is 30th of November but we don't want this to happen.<br><br> We put all of our effort to launch the game. We are strict with our timelines.",
    },
  ],
};
export default class General extends Component {
  render() {
    return (
      <div className="general_faq">
        <h3>GENERAL QUESTIONS</h3>
        <div className="general_content">
          <Faq
            data={data}
            styles={{
              titleTextColor: "white",
              rowTitleColor: "#E8DDDD",
              rowContentColor: "white",
            }}
          />
        </div>
      </div>
    );
  }
}
