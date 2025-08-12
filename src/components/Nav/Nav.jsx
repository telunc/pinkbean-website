import React from "react";
import "./Nav.css";

export default class Nav extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <nav
                className="navbar navbar-fixed-top animated fadeInDown"
                id="nav"
                role="navigation"
            >
                <div className="container nav-container relative">
                    <div className="navbar-header">
                        <a
                            className="navbar-brand"
                            datascroll=""
                            href="#"
                        >
                            <b>Pink Bean | MapleStory</b>
                        </a>
                    </div>
                    <a
                        className="btn btn-default btn-invite hidden-xs btn-discord"
                        href="https://discord.com/invite/wBUKQhN"
                    >
                        <b>Join Pink Bean Discord</b>
                    </a>
                </div>
            </nav>
        );
    }
}
