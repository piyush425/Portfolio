import React from "react";
import styled from "styled-components";

const FooterSection = styled.div`
  background-image: url(https://raw.githubusercontent.com/piyush425/portfoliosvg/f3f0537988ab4301d2c007a2ba250d9e652f4d0d/footer.svg);
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 250px;
  position: relative;

  span {
    position: absolute;
    bottom: 4rem;
    color: #fff;

    a {
      text-decoration: underline;
    }
  }
`;
function Footer() {
  return (
    <FooterSection>
      <div className="Container">
        <span>
          Coded with 💙 by{" "}
          <a
            href="https://github.com/piyush425"
            target="_blank"
            rel="noopener noreferrer"
          >
            @piyush
          </a>{" "}
        </span>
      </div>
    </FooterSection>
  );
}

export default Footer;
