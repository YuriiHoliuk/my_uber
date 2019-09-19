import React from 'react';
import './Footer.scss';
import { urls } from './urls';

export const Footer = () => (
  <footer className="footer">
    <div className="content">
      <div className="footer__inner">
        <div className="footer__top offset">
          <div className="footer__main wide-column">
            <img
              src="./images/logo-footer.svg"
              alt="Uber Eats"
              className="offset"
            />
            <div className="offset">
              <select name="language" id="lg">
                <option value="ua">Ukrainian</option>
                <option value="en">English</option>
              </select>
            </div>
            <div className="footer__mobile-apps">
              <a className="footer__mobile-app" href={urls.appStore}>
                <img src="./images/google-play.png" alt="Google play" />
              </a>
              <a className="footer__mobile-app" href={urls.googlePlay}>
                <img src="./images/app-store.png" alt="App store" />
              </a>
            </div>
          </div>

          <div className="footer__top-links">
            <a
              href={urls.about}
              className="footer__link footer__link--intended"
            >
              About UberEats
            </a>
            <a href={urls.about} className="footer__link">
              Read our blog
            </a>
            <a href={urls.about} className="footer__link">
              Sign up to deliver
            </a>
            <a href={urls.about} className="footer__link">
              Add your restaurant
            </a>
          </div>

          <div className="footer__top-links">
            <a
              href={urls.about}
              className="footer__link footer__link--intended"
            >
              Get help
            </a>
            <a href={urls.about} className="footer__link">
              Read FAQs
            </a>
            <a href={urls.about} className="footer__link">
              View all cities
            </a>
          </div>
        </div>

        <div className="footer__bottom">
          <div className="wide-column offset">
            © 2019 Uber Technologies Inc.
          </div>

          <div>
            <div className="footer__bottom-links offset">
              <a
                href={urls.about}
                className="footer__link footer__link--inline"
              >
                Privacy policy
              </a>
              <a
                href={urls.about}
                className="footer__link footer__link--inline"
              >
                Terms of  use
              </a>
              <a
                href={urls.about}
                className="footer__link footer__link--inline"
              >
                Pricing
              </a>
            </div>

            <div className="footer__social">
              <a className="footer__social-link" href={urls.about}>
                <img src="./images/fb.png" alt="facebook" />
              </a>
              <a className="footer__social-link" href={urls.about}>
                <img src="./images/tw.svg" alt="twitter" />
              </a>
              <a className="footer__social-link" href={urls.about}>
                <img src="./images/ig.svg" alt="instagram" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <a href="#page" className="scroll-top">
      <img src="./images/arrow-top.svg" alt="scroll top arrow" />
    </a>
  </footer>
);
