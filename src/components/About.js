import React from 'react';
import './About.css';

const About = () => {
    return (
        <>
            <section id="prog-lang">
                <h1>The Triad of Good Web Development</h1>
                <h2 id="title1">CSS</h2>
                <div className="container1">
                    <p>CSS is a stylesheet language used to describe how HTML elements should be presented. It controls styling aspects like colors, fonts, layout, and spacing. By using CSS, you can make your web pages visually appealing. For instance, you can change the color and size of headings or create complex layouts.</p>
                </div>
                <h2 id="title2">JavaScript</h2>
                <div className="container2">
                    <p>JavaScript is a scripting language that enables dynamic and interactive features on web pages. It goes beyond static content. With JavaScript, you can update content in real time, create animations, handle user input, and more. It’s an essential part of modern web development.</p>
                </div>
                <h2 id="title3">HTML</h2>
                <div className="container3">
                    <p>HTML is the standard markup language for creating web pages. It defines the structure and meaning of web content. When you visit a website, the browser reads the HTML and displays the content accordingly. HTML elements, like headings, paragraphs, and links, help organize and format the page.</p>
                </div>
                <img src={`${process.env.PUBLIC_URL}/prog-lang-bg.png`} alt="web development triad" />
            </section>

            <section id="importance">
                <h1>The Importance of Web Development</h1>
                <div className="container4">
                    <div className="talk-bubble tri-right left-top">
                        <div className="talktext">
                            <p>"As a web developer, I find working with HTML, CSS, and JavaScript incredibly enjoyable. These three technologies form the foundation of web development, and they complement each other perfectly."</p>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="container5">
                        <h2>Within Reach</h2>
                        <p>Websites provide information and services around the clock, making them accessible 24/7. Users can access content, shop, or interact with businesses at their convenience.</p>
                    </div>
                    <div className="container6">
                        <h2>Digital Presence</h2>
                        <p>Web development allows businesses, organizations, and individuals to establish an online presence. Having a website enables them to showcase their products, services, or ideas to a global audience. A well-designed website can attract potential customers, clients, or followers, leading to increased visibility and brand recognition.</p>
                    </div>
                    <div className="container7">
                        <h2>User Interaction</h2>
                        <p>JavaScript allows developers to create interactive and dynamic web pages. Users can submit forms, view real-time updates, and engage with content without page reloads. Interactive features enhance user experience, encourage longer site visits, and improve overall engagement.</p>
                    </div>
                    <div className="container8">
                        <h2>E-Commerce and Transactions</h2>
                        <p>Many businesses rely on e-commerce platforms for online sales. Web development enables secure payment gateways, shopping carts, and order processing. JavaScript frameworks like React facilitate building robust e-commerce applications.</p>
                    </div>
                    <div className="container9">
                        <h2>Responsive Design</h2>
                        <p>Web development ensures that websites are responsive across different devices (desktops, tablets, and mobile phones). CSS media queries allow developers to adapt layouts and styles based on screen size, providing a consistent experience for users.</p>
                    </div>
                    <div className="container10">
                        <h2>Community and Collaboration</h2>
                        <p>Web development communities share knowledge, best practices, and solutions. Developers can learn from others, collaborate on open-source projects, and contribute to the field. Collaboration fosters innovation and continuous improvement in web development practices.</p>
                    </div>
                </div>
                <img src={`${process.env.PUBLIC_URL}/web-dev-img.png`} alt="web development triad" />
            </section>
        </>
    );
};

export default About;