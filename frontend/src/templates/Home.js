import React from 'react';

export const Home = () => (
    <div>
        {/* Banner */}
        <section id="banner">
            <div className="inner">
                <div className="logo"><span className="icon fa-diamond"></span></div>
                <h2>Penny</h2>
                <p>Next-Generation Transport Infrastructure, Enabled by Hedera Hashgraph</p>
            </div>
        </section>

        {/* Wrapper */}
        <section id="wrapper">
            {/* One */}
            <section id="one" className="wrapper spotlight style1">
                <div className="inner">
                    <a className="image"><img src="images/road.jpg" alt="" /></a>
                    <div className="content">
                        <h2 className="major">Pay-as-you-Go</h2>
                        <p>Using Hedera Hashgraph, you pay tax on each metre travelled in your vehicle.</p>
                    </div>
                </div>
            </section>

            {/* Two */}
            <section id="two" className="wrapper alt spotlight style2">
                <div className="inner">
                    <a className="image"><img src="images/pennies.jpg" alt="" /></a>
                    <div className="content">
                        <h2 className="major">Micropayments</h2>
                        <p>The Hadera Hashgraph platform allows seamless micropayments.</p>
                    </div>
                </div>
            </section>

            {/* Three */}
            <section id="three" className="wrapper spotlight style3">
                <div className="inner">
                    <a className="image"><img src="images/code.jpg" alt="" /></a>
                    <div className="content">
                        <h2 className="major">100% Transparency</h2>
                        <p>All of the smart contract code is deployed on the public Hedera Hashgraph network.</p>
                    </div>
                </div>
            </section>

            {/* Four */}
            <section id="four" className="wrapper alt style1">
                <div className="inner">
                    <h2 className="major">The Team</h2>
                    <p>This proof-of-concept was created as part of the Hedera Hashgraph Hackathon in London in October 2018.</p>

                    <section className="features">
                        <article>
                            <h3 className="major">Matthew Morrison</h3>
                            <p>Responsible for smart contract and front-end development.
                                <span> </span>
                                <a href="https://github.com/matthewsmorrison">GitHub</a>
                            </p>
                        </article>

                        <article>
                            <h3 className="major">[XX]</h3>
                            <p>[XX]
                                <span> </span>
                                <a href="/">GitHub</a>
                            </p>
                        </article>

                        <article>
                            <h3 className="major">[XX]</h3>
                            <p>[XX]
                                <span> </span>
                                <a href="/">GitHub</a>
                            </p>
                        </article>

                    </section>
                </div>
            </section>
        </section>
    </div>
);
