import styles from './LinkContainer.module.css';
import LinkUnit from "../LinkUnit/LinkUnit";

import InstagramLogo from '../../assets/socialmedia/instagram_icon.png'
import GitHubLogo from '../../assets/socialmedia/github_icon.png'
import LinkedInLogo from '../../assets/socialmedia/linkedin_icon.png'
import GmailLogo from '../../assets/socialmedia/gmail_icon.png'

function LinkContainer()
{
    return (
        <nav>
            <LinkUnit image={InstagramLogo} title={"Instagram"} url={"https://www.instagram.com/grummzera/"} />
            <LinkUnit image={GitHubLogo} title={"GitHub"} url={"https://github.com/andreasgrum00"} />
            <LinkUnit image={LinkedInLogo} title={"LinkedIn"} url={"https://www.linkedin.com/in/andreas-grum-438b70214/"} />
            <LinkUnit image={GmailLogo} title={"Gmail"} url={"mailto:andreasgrumichedev@gmail.com"} />
        </nav>
    )
}

export default LinkContainer;
