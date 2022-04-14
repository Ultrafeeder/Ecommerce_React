import { SocialMediaIconsReact } from "social-media-icons-react";

export default function Footer() {
  return (
    <section className="footer">
      <h4 className="foot-title">Janus's Marketplace</h4>
      <p className="foot-details">
        All depictions, references, and likenesses in artwork
        featured/commissioned on/from this website claim no ownership or
        affiliation with existing intellectual properties and are transformative
        in nature, thus constituting fair-use under federal copyright law.
      </p>
      <div>
        <SocialMediaIconsReact
          className="icon"
          borderColor="rgba(0,0,0,0.25)"
          borderWidth="5"
          borderStyle="solid"
          icon="twitter"
          iconColor="rgba(255,255,255,1)"
          backgroundColor="rgba(0,0,0,1)"
          iconSize="5"
          roundness="50%"
          url="https://some-website.com/my-social-media-url"
          size="30"
        />
        <SocialMediaIconsReact
          className="icon"
          borderColor="rgba(0,0,0,0.25)"
          borderWidth="5"
          borderStyle="solid"
          icon="facebook"
          iconColor="rgba(255,255,255,1)"
          backgroundColor="rgba(0,0,0,1)"
          iconSize="5"
          roundness="50%"
          url="https://some-website.com/my-social-media-url"
          size="30"
        />
        <SocialMediaIconsReact
          className="icon"
          borderColor="rgba(0,0,0,0.25)"
          borderWidth="5"
          borderStyle="solid"
          icon="instagram"
          iconColor="rgba(255,255,255,1)"
          backgroundColor="rgba(0,0,0,1)"
          iconSize="5"
          roundness="50%"
          url="https://some-website.com/my-social-media-url"
          size="30"
        />
      </div>
      <span className="foot-details">Copyright @2022</span>
    </section>
  );
}
