import React, { Component } from "react";
import "./App.css";
import Nav from "./components/Nav/Nav.jsx";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { showControl: false };
    }

    render() {
        return (
            <div>
                <Nav />
                <div className="page-content background">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 text-center profile">
                                <div className="row">
                                    <img
                                        src="image/pinkbean.gif"
                                        alt="profile"
                                        className="profile-image"
                                    />
                                    <div className="center-block text-center">
                                        <h1 className="morphext">
                                            A multi-purpose bot for
                                            <br />
                                            <span>MapleStory</span>
                                        </h1>
                                        <a
                                            className="btn btn-default btn-invite"
                                            href="https://discord.com/invite/wBUKQhN"
                                        >
                                            <b>Pink Bean Discord</b>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="feature container">
                    <h1>Awesome Features</h1>
                    <br />
                    <br />
                    <div className="row">
                        <div className="col-md-4">
                            <h3>RSS Subscription</h3>
                            <p>
                                Stay up to date with MapleStory RSS feeds. Pink
                                Bean will sends news notification to subscribed
                                channels. Subscription is channel specific. This
                                means all feeds will be posted at one place!
                            </p>
                        </div>
                        <div className="col-md-4">
                            <h3>Rank</h3>
                            <p>
                                Keep track of your MapleStory progression. Rank
                                commands will display all of your character
                                rankings, including overall ranking, world
                                ranking, job ranking, and more.
                            </p>
                        </div>
                        <div className="col-md-4">
                            <h3>Mob</h3>
                            <p>
                                Display everything about the specified mob,
                                including level, damage, locations, and more.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <h3>Item</h3>
                            <p>
                                Display everything about the specified item,
                                including required level, damage, armor, and
                                more.
                            </p>
                        </div>
                        <div className="col-md-4">
                            <h3>News</h3>
                            <p>
                                Pink Bean keep track of all the MapleStory news.
                                You can send a nicely formatted news embed
                                instead of an url to your friends.
                            </p>
                        </div>
                        <div className="col-md-4">
                            <h3>Customizable Prefix</h3>
                            <p>
                                Pink Bean's prefix is fully customizable. You
                                can use prefix commands to change the default
                                prefix.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <h4>Pink Bean</h4>
                                <p className="footer-detail">
                                    Pink Bean is written in{" "}
                                    <a href="https://nodejs.org/">Node.js</a>.
                                    <br />
                                    <a href="https://discord.js.org/">
                                        Discord.js
                                    </a>{" "}
                                    is the main library.
                                    <br />
                                    Built and maintained by{" "}
                                    <a href="http://telunchen.com/">Andy</a> and
                                    Colin.
                                </p>
                            </div>
                            <div className="col-md-4">
                                <h4>Contact</h4>
                                <p className="footer-detail">
                                    For any comments, concerns, or suggestions,
                                    please join our{" "}
                                    <a href="https://discord.gg/wBUKQhN">
                                        support server
                                    </a>
                                    . Our staff will try our best to help you.
                                </p>
                            </div>
                            <div className="col-md-4">
                                <h4>About</h4>
                                <p className="footer-detail">
                                    Pink Bean is a project I made for fun and
                                    put my free time into making it better.
                                    Please feel free to try it out and give me
                                    your feedback.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
