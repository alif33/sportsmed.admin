import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const SMDFooter = () => {
    return (
        <div className="_smd_footer bg-black py-2">
            <div className="container-fluid">

               <div className="row">
                <div className="col-md-10 m-auto">
                <div className="row m-0 g-2">
                    <div className="col-md-2">
                        <div className="_footer_logo">
                            <Link href="/">
                                <Image height="112" width="109" src="/images/icon/logo.png" alt="" />
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-5 ms-auto">
                        <ul className="_smd_footer_follow_menu">
                            <li><a href="">Follow Us</a></li>
                            <li><a href=""><img src="/images/icon/fb.png" alt="" /></a></li>
                            <li><a href=""><img src="/images/icon/yo.png" alt="" /></a></li>
                            <li><a href=""><img src="/images/icon/tw.png" alt="" /></a></li>
                            <li><a href=""><img src="/images/icon/in.png" alt="" /></a></li>
                        </ul>
                    </div>
                    <div className="col-md-5">
                        <div className="_smd_news_alerts">
                            <h3>GET NEWSLETTERS & ALERTS</h3>
                            <button>SIGN UP</button>
                        </div>
                    </div>
                </div>
                </div>
               </div>

                <div className="container">
                  <div className="row">
                    <div className="col-md-9 m-auto">
                    <div className="row my-4">
                        <div className="col-md-4">
                            <ul className="_smd_footer_menu">
                                <li>
                                    <Link href="/">
                                        <a>NFL</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/">
                                        <a>NBL</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/">
                                        <a>MLB</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/">
                                        <a>WATCH</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <ul className="_smd_footer_menu">
                                <li>
                                    <Link href="/">
                                        <a>ADVERTISE WITH US</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/">
                                        <a>AFFILITE APPLICATION</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/">
                                        <a>EXPERTPLATFORM</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/">
                                        <a>GIFT CARD</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <ul className="_smd_footer_menu">
                                <li>
                                    <Link href="/">
                                        <a>MOBILE APPS</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/">
                                        <a>
                                            NEWS DESK</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/">
                                        <a>SHOP</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/">
                                        <a> SPORTS BETTING</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    </div>
                  </div>
                </div>
                <div className="container">
                    <div className="row my-1">
                        <div className="col-md-12">
                            <ul className="_smd_footer_menu _smd_footer_nav_menu">
                                <li>
                                    <Link href="/">
                                        <a>Privacy</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/">
                                        <a>Do Not Sell</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/">
                                        <a>Terms</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/">
                                        <a>Accessibility</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/">
                                        <a>Company</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/">
                                        <a>Blog</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/">
                                        <a>Jobs</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/">
                                        <a>Contact</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/">
                                        <a>Help</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/">
                                        <a>Premium</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/">
                                        <a>Login</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="copy-right text-center">
                            <Link href="/">
                                <a> &copy; Copyright 2022 Sportsmedanalytics.com
                                </a></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SMDFooter;