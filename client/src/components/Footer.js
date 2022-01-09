import { observer } from "mobx-react-lite";
import React from "react";
import '../style/footer.css'

const Footer = observer(() => {
  return (
    <footer class="footer" id="footer">
        <div class="container">

            <div class="footer__inner">
                <div class="footer__col  footer__col--first">
                    <div class="footer__logo">ShopIPHONE</div>
                    <div class="footer__text">Today, the status of a person is an important component of the whole society. After all, no matter how we refute the fact that public opinion is important to us, the fact remains. Day after day we try to become better, more successful than others. And this is part of the human being. It was so hundreds of years ago, it is so now and it will always be so. The only difference is how we manage to maintain our image in society.</div>

                    <div class="footer__social">
                        <div class="footer__social-header">
                            <b>29k</b> followers
                        </div>
                        <div class="footer__social-content">
                            Follow Us:
                            <a href="#" target="_blank">
                                <i class="fab fa-facebook"></i>
                            </a>
                            <a href="#" target="_blank">
                                <i class="fab fa-twitter"></i>
                            </a>
                            <a href="#" target="_blank">
                                <i class="fab fa-instagram"></i>
                            </a>
                        </div>
                    </div>

                    <form class="subscribe" action="/" method="post">
                        <input class="subscribe__input" type="email" name="name" placeholder="Your Email..."/>
                        <button class="subscribe__btn" type="submit">Subscribe</button>
                    </form>
                </div>  

                <div class="footer__col  footer__col--second">
                    <div class="footer__title">Servis</div>

                    <div class="blogs">
                        <div class="blogs__item">
                            <div class="blogs__content">
                                <a class="blogs__title" href="#">Current offers of services</a>
                            </div>
                        </div>

                        <div class="blogs__item">
                            <div class="blogs__content">
                                <a class="blogs__title" href="#">Instructions and help</a>
                            </div>
                        </div>

                        <div class="blogs__item">
                            <div class="blogs__content">
                                <a class="blogs__title" href="#">B2B Connect</a>
                            </div>
                        </div>

                        <div class="blogs__item">
                            <div class="blogs__content">
                                <a class="blogs__title" href="#">Service actions with revocation</a>
                            </div>
                        </div>
                        <div class="blogs__item">
                            <div class="blogs__content">
                                <a class="blogs__title" href="#">Hotline service</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="footer__col  footer__col--third">
                    <div class="footer__title">About us</div>

                    <div class="instagram">
                        <a class="instagram__item" href="#" target="_blank">
                            <img />
                        </a>
                        <a class="instagram__item" href="#" target="_blank">
                            <img />
                        </a>
                        <a class="instagram__item" href="#" target="_blank">
                            <img />
                        </a>
                        <a class="instagram__item" href="#" target="_blank">
                            <img />
                        </a>
                        <a class="instagram__item" href="#" target="_blank">
                            <img />
                        </a>
                        <a class="instagram__item" href="#" target="_blank">
                            <img />
                        </a>
                        <a class="instagram__item" href="#" target="_blank">
                            <img />
                        </a>
                        <a class="instagram__item" href="#" target="_blank">
                            <img />
                        </a>
                        <a class="instagram__item" href="#" target="_blank">
                            <img />
                        </a>
                    </div>
                </div>
                

            </div> 

            <div class="copyright">
                © 2022 ShopIPHONE template by <span>EmpireIphone</span>
            </div>

        </div>
    </footer>

  );
});

export default Footer;
