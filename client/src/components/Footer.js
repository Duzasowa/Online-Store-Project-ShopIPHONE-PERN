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
                    <div class="footer__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>

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
                    <div class="footer__title">Blogs</div>

                    <div class="blogs">
                        <div class="blogs__item">
                            <img class="blogs__img"/>
                            <div class="blogs__content">
                                <a class="blogs__title" href="#">Lorem ipsum dolor sit amet, consectetur adipiscing</a>
                                <div class="blogs__date">Jan 2, 2022</div>
                            </div>
                        </div>

                        <div class="blogs__item">
                            <img class="blogs__img"/>
                            <div class="blogs__content">
                                <a class="blogs__title" href="#">Lorem ipsum dolor</a>
                                <div class="blogs__date">Jan 2, 2022</div>
                            </div>
                        </div>

                        <div class="blogs__item">
                            <img class="blogs__img"/>
                            <div class="blogs__content">
                                <a class="blogs__title" href="#">Lorem ipsum dolor sit amet, consectetur adipiscing</a>
                                <div class="blogs__date">Jan 9, 2016</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="footer__col  footer__col--third">
                    <div class="footer__title">Instagram</div>

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
