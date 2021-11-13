import React from "react";
import "../../styles.css";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";

export const Footer = () => {
    return (
        <footer>
            <div className="footerWave">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#252525" fill-opacity="1" d="M0,320L360,192L720,224L1080,256L1440,160L1440,0L1080,0L720,0L360,0L0,0Z"></path></svg>
            </div>
            <section className="footerContent">
            <div>
                <ul>
                    <li>
                        <InstagramIcon />
                    </li>
                    <li>
                        <FacebookIcon />
                    </li>
                    <li>
                        <WhatsAppIcon />
                    </li>
                    <li>
                        <GitHubIcon />
                    </li>
                    <li>
                        <TwitterIcon />
                    </li>
                </ul>
            </div>
            <div>
                <p>Copyright @ all right reserved.</p>
            </div>
            </section>
        </footer>
    );
};
