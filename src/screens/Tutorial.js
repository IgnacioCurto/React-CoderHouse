import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import AOS from 'aos';
import "aos/dist/aos.css";
import "../styles.css"

export const Tutorial = ({tutorial}) => {
    useEffect(() => {
        AOS.init({
            duration : 2000
        });
    }, []);
    return (
        <>
            
            <main >
                {/* ================= INTRO =================*/}
                <section className="steps__right">
                    <div className="steps__right--container" >
                        <div className="steps__info">
                            <h2 className="steps__title">Have you ever wondered <span> how </span>a PC is built?</h2>
                            <h3 className="steps__subtitle">We'll explain it to you in 8 simple steps.</h3>
                            <p>There really isn't much to it, but the thought of building a functioning computer might seem a bit overwhelming...</p>
                            <p>First, you should consider what type of system will <span> suit your needs</span>, do you want a build for playing videogames, rendering, editing, or even streaming? The options are endless, and so is the hardware available.</p>
                            <p>The second factor is <span>budget</span>, how much are you willing to spend on your build will determine it's performance and overall quality. Keep in mind that (if taken good care of) every component can last you for many years, so you should look at it from an investing perspective.</p>
                            <p>So, what are you going to need?</p>
                        </div>
                        <img src={'https://ik.imagekit.io/kkfreeqob0t/React_Coder/set-gaming-pc_WLHGdgFcpa.png?updatedAt=1636580651064'} width="700rem" data-aos="fade-left"></img>
                        
                    </div>
                </section>

                <div className="arrow__container">
                    <a href="#cpu" class="arrow right"></a>
                </div>

                {/* ================= CPU =================*/}
                <section className="steps__left" id="cpu">
                    <div className="steps__left--container" data-aos="fade-right">
                    <Link to={`/type/CPUs`}><img src={'https://ik.imagekit.io/kkfreeqob0t/React_Coder/cpu_ei8TkmEQSIx.png?updatedAt=1636580165968'} width="580rem"></img></Link>
                        <div className="steps__info">
                        <h3 className="steps__num">1.</h3>
                            <h2 className="steps__title">Let's talk about the <span> CPU </span></h2>
                            <h3 className="steps__subtitle">Or Central Proccessing Unit, if you want to get fancy.</h3>
                            <p>It's one of (if not) the most important parts of a computer, is the electronic circuitry that <span>executes instructions</span> that are given by you, the user.</p>
                            <p>This little guy will give orders to every component on your build, it's quality depends on it's speed at executing tasks, so if you want a fast and responsive system you'll need to dedicate a considerable portion of your budget into a good CPU.</p>
                        </div>
                        
                    </div>
                </section>
                {/* ================= MOTHERBOARD =================*/}
                <section className="steps__right">
                    <div className="steps__right--container" data-aos="fade-left">
                        <div className="steps__info">
                        <h3 className="steps__num">2.</h3>
                            <h2 className="steps__title">The <span> body </span>of our system</h2>
                            <h3 className="steps__subtitle">So... what's that weird sheet of metal?</h3>
                            <p>That complicated bundle of circuitry is called a motherboard, it's the entire <span>nervous system and body combined</span>, the CPU controls every movement and it's where all our hardware is going to be plugged into.</p>
                            <p>This is a component that doesen't require many fancy features to get a good result out of, it will depend on your ideal build but you should usually check for RAM slots and compatible pins, that's it. You can save a considerable amount of your budget here, many gaming and high-end motherboards have features like overclocking capabilities that a casual user won't even use, so it's a good idea to go for a reliable motherboard and save some bucks.</p>
                        </div>
                        <Link to={`/type/motherboards`}><img src={'https://ik.imagekit.io/kkfreeqob0t/React_Coder/motherboard_5G-t_uM7bz.png?updatedAt=1636580164413'}></img></Link>
                        
                    </div>
                </section>
                {/* ================= GRPAHICS CARD =================*/}
                <section className="steps__left">
                    <div className="steps__left--container" data-aos="fade-right">
                    <Link to={`/type/GPUs`}><img src={'https://ik.imagekit.io/kkfreeqob0t/React_Coder/gpu_GlSU6EA7qGs.png?updatedAt=1636580164302'} width="600rem"></img></Link>
                        <div className="steps__info">
                        <h3 className="steps__num">3.</h3>
                            <h2 className="steps__title">The computer <span> inside </span>a computer</h2>
                            <h3 className="steps__subtitle">And what about that helicopter looking thing?</h3>
                            <p>That is graphics card, it <span>displays the information </span>on your screen, basically what you see at all times. Some CPUs come with 'integrated graphics' which means that they can do these on their own, but aren't capable to display higher requirements like videogames or rendering.</p>
                            <p>That's where the GPUs come in, they're capable of rendering very detailed graphics in <span> real time</span>, they're mainly used in gaming builds to support good resolution quality and performance, or even processing high-demand renders.</p>
                            <p>This will unfortunately be your most expensive component if you choose to get one, they come equipped with many components like a mini processor and even RAM, which is why they re so pricey.</p>
                        </div>
                        
                    </div>
                </section>
                {/* ================= RAM =================*/}
                <section className="steps__right">
                    <div className="steps__right--container" data-aos="fade-left">
                        <div className="steps__info">
                        <h3 className="steps__num">4.</h3>
                            <h2 className="steps__title">The <span> Random-Access Memory </span> sticks</h2>
                            <h3 className="steps__subtitle">Or RAM, for short. </h3>
                            <p>Simply put, RAM is designed to provide <span>fast read and write access</span> to storage devices. Your computer uses RAM to load data because it runs data much faster than it does directly from a hard drive. Without it, doing just about anything on any system would be much, much slower, or make them can’t even run at all.</p>
                            <p>Metaphorically, you can think of RAM as an office desk. Desktops are used to quickly access important documents, writing tools, and other items that you need to work at that time. If you don't have a desk, you can store everything in drawers and filing cabinets, which means that it takes longer time to complete your daily tasks, because you have to constantly enter these storage compartments to get what you need and then spend extra time returning it.</p>
                            <p><span>How much RAM do you need?</span> Just like a CPU and a hard drive, the amount of memory your computer requires depends on what you use for your computer, or what you plan to use for. For example, if you are buying a heavy-duty gaming computer, you will need enough memory to support a smooth gaming experience. On the other hand, if you use a computer for light Internet browsing, no video streaming, games, memory-intensive applications, etc., you can choose a smaller memory</p>
                        </div>
                        <Link to={`/type/RAMs`}><img src={'https://ik.imagekit.io/kkfreeqob0t/React_Coder/ram_qNzFnBoT-A.png?updatedAt=1636580164356'} width="600rem"></img></Link>
                        
                    </div>
                </section>
                {/* ================= POWER SUPPLY =================*/}
                <section className="steps__left">
                    <div className="steps__left--container" data-aos="fade-right">
                    <Link to={`/type/PSUs`}><img src={'https://ik.imagekit.io/kkfreeqob0t/React_Coder/psu_EF5IomvIC.png?updatedAt=1636580164737'} width="600rem"></img></Link>
                        <div className="steps__info">
                        <h3 className="steps__num">5.</h3>
                            <h2 className="steps__title">How do I <span> power </span>this thing?</h2>
                            <h3 className="steps__subtitle">You're gonna need a bigger boat.</h3>
                            <p>The power supply <span>distributes the power</span> to all the individual components within the PC, without it your PC would not run. A poor quality power supply can greatly reduce the lifespan of your components, cause instability and even fail when overloaded. A high quality PSU will provide a more stable, more reliable system that will also produce less noise and heat. The higher quality power supplies will also operate more efficiently, reducing your electricity bill and helping the environment. Remember not all power supplies are made equal.</p>
                            <p>What do power supply efficiency ratings and certifications mean? If a supply loses less than 20% of the total power consumed, then it is considered ‘efficient’.  Look for the ‘<span>80Plus</span>’ sticker on modern PSUs:</p>
                            <p>
                                <span>-</span> 80 PLUS <span>Bronze</span>: 81%+ efficient <br></br>
                                <span>-</span> 80 PLUS <span>Silver</span>: 85%+ efficient <br></br>
                                <span>-</span> 80 PLUS <span>Gold</span>: 88%+ efficient <br></br>
                                <span>-</span> 80 PLUS <span>Platinum</span>: 90%+ efficient <br></br>
                            </p>
                        </div>
                        
                    </div>
                </section>
                {/* ================= STORAGE =================*/}
                <section className="steps__right">
                    <div className="steps__right--container" data-aos="fade-left">
                        <div className="steps__info">
                        <h3 className="steps__num">6.</h3>
                            <h2 className="steps__title">Where all your files are <span> stored </span></h2>
                            <h3 className="steps__subtitle">Storage Units. </h3>
                            <p>Your computer needs storage because the processor needs a place to perform its magic, it's where <span>all your computer files are going to be stored into</span>, where your OS will boot from and every other software you have downloaded. On a modern computer, storage comes in the form of SSD (Solid State Drive), but the old school storage option was HDD (Hard Disc Drive). Which should you buy?</p>
                            <p>First and foremost, SSDs are much,<span> much</span> faster than hard drives. With today’s fast processors, RAM memory and other components, the hard drive has become the major weakness in a modern computer. Every time you load applications, games, or start up the operating system, the hard drive is the bottleneck that slows down operations.</p>
                            <p>On the other hand, the benefits of a hard disk drives are that they are a proven technology, and are frequently <span>less expensive</span> than a solid state drives for the same amount of storage. Currently, HDDs are also available with more storage space than SSDs.</p>
                        </div>
                        <Link to={`/type/storage`}><img src={'https://ik.imagekit.io/kkfreeqob0t/React_Coder/ultra-3d-sata-iii-ssd-left.png.thumb.1280.1280_caG8I7fmM.png?updatedAt=1636811294950'} width="600rem"></img></Link>
                        
                    </div>
                </section>
                {/* ================= COOLERS =================*/}
                <section className="steps__left">
                    <div className="steps__left--container" data-aos="fade-right">
                    <Link to={`/type/coolers`}><img src={'https://ik.imagekit.io/kkfreeqob0t/React_Coder/H81acf1f065d74bfab0a7e35b61e091cdI_TAd37rffF.png?updatedAt=1636811296650'} width="600rem"></img></Link>
                        <div className="steps__info">
                        <h3 className="steps__num">7.</h3>
                            <h2 className="steps__title">Keep your <span> cool </span></h2>
                            <h3 className="steps__subtitle">The flashy lights.</h3>
                            <p>All these components take up a lot of power and so they generate <span> a lot of heat</span>. So in order to prevent this, we use cooling systems to cycle air in-out of our PC to keep a nice and fresh airflow, preventing our hardware from overheating.</p>
                            <p>The CPU is the component that causes the most amount of heat, it's constantly active and executes such a large amount of calculations per second that we need a dedicated cooler to keep it fresh. These can be a normal fan with a radiator to dissipate the heat, or an AIO (All In One) unit with liquid cooling. The last option is the fancier and so the more expensive, but it involves a complex pump and radiator system to cycle the water through the pipes and keep the CPU nice and cool.</p>
                            <p>And then we need our case fans to cycle the air through our components, we need <span>intake</span> and <span>exhaust</span> coolers to get fresh air into our system and to push hot air out. The amount totally depends on your build and it's power consumption, but the sweet spot for most systems is around 2-3 intake and 1-2 exhaust fans.</p>
                        </div>
                        
                    </div>
                </section>
                {/* ================= CASE =================*/}
                <section className="steps__right">
                    <div className="steps__right--container" data-aos="fade-left">
                        <div className="steps__info">
                        <h3 className="steps__num">8.</h3>
                            <h2 className="steps__title">Where <span> can I put </span>this? </h2>
                            <h3 className="steps__subtitle">The final step. </h3>
                            <p>You'll need a case where you can finally fit and arrange all these components. They come in all shapes and sizes, but are mainly clasified in <span> mini</span>, <span>mid</span> and <span>full 'towers'</span>, wich are already meassured to store a certain amount of components inside.</p>
                            <p>This final step is definitely up to your own personal preference, wether you'd like a big flashy spaceship or a slick minimal box, you should always keep in mind it's cooling capabilties. A big open case with good airflow will always have cooler temperatures than a small compact one, but you can always compensate with good cooling systems.  </p>
                            <p>And that's about it!<span>  :)</span></p>
                        </div>
                        <Link to={`/type/cases`}><img src={'https://ik.imagekit.io/kkfreeqob0t/React_Coder/rgb-black-glass_7NmleewxS.png?updatedAt=1636813022737'} width="600rem"></img></Link>
                        
                    </div>
                </section>
            </main>
        </>
    )
}
