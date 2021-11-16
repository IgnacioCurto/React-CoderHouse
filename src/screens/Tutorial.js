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
                <section className="steps__right">
                    <div className="steps__right--container" >
                        <div className="steps__info">
                            <h2 className="steps__title">Have you ever wondered <span> how </span>a PC is built?</h2>
                            <p>There really isn't much to it, but the thought of building a functioning computer might seem a bit overwhelming...</p>
                            <p>First, you should consider what type of system will suit your needs, do you want a build for playing videogames, rendering, editing, or even streaming? The options are endless  </p>
                        </div>
                        <img src={'https://ik.imagekit.io/kkfreeqob0t/React_Coder/set-gaming-pc_WLHGdgFcpa.png?updatedAt=1636580651064'} width="700rem" data-aos="fade-left"></img>
                        
                    </div>
                </section>

                <div className="arrow__container">
                    <a href="#cpu" class="arrow right"></a>
                </div>

                <section className="steps__left" id="cpu">
                    <div className="steps__left--container" data-aos="fade-right">
                    <Link to={`/type/CPUs`}><img src={'https://ik.imagekit.io/kkfreeqob0t/React_Coder/cpu_ei8TkmEQSIx.png?updatedAt=1636580165968'} width="580rem"></img></Link>
                        <div className="steps__info">
                        <h3 className="steps__num">1.</h3>
                            <h2 className="steps__title">Let's talk about the <span> CPU </span></h2>
                            <h3 className="steps__subtitle">Or Central Proccessing Unit, if you want to get fancy.</h3>
                            <p>It's one of (if not) the most important parts of a computer, is the electronic circuitry that executes instructions that are given by you, the user. </p>
                        </div>
                        
                    </div>
                </section>
                <section className="steps__right">
                    <div className="steps__right--container" data-aos="fade-left">
                        <div className="steps__info">
                        <h3 className="steps__num">2.</h3>
                            <h2 className="steps__title">The <span> body </span>of our system</h2>
                            <h3 className="steps__subtitle">So... what's that weird sheet of metal?</h3>
                            <p>That complicated bundle of circuitry is called a motherboard, it's the entire nervous system and body combined, the CPU controls every movement and it's where all our hardware is going to be plugged into</p>
                        </div>
                        <Link to={`/type/motherboards`}><img src={'https://ik.imagekit.io/kkfreeqob0t/React_Coder/motherboard_5G-t_uM7bz.png?updatedAt=1636580164413'}></img></Link>
                        
                    </div>
                </section>
                <section className="steps__left">
                    <div className="steps__left--container" data-aos="fade-right">
                    <Link to={`/type/GPUs`}><img src={'https://ik.imagekit.io/kkfreeqob0t/React_Coder/gpu_GlSU6EA7qGs.png?updatedAt=1636580164302'} width="600rem"></img></Link>
                        <div className="steps__info">
                        <h3 className="steps__num">3.</h3>
                            <h2 className="steps__title">The computer <span> inside </span>a computer</h2>
                            <h3 className="steps__subtitle">And what about that helicopter looking thing?</h3>
                            <p>That is graphics card (also called a video card, display card, graphics adapter, or display adapter), it displays the information</p>
                        </div>
                        
                    </div>
                </section>
                <section className="steps__right">
                    <div className="steps__right--container" data-aos="fade-left">
                        <div className="steps__info">
                        <h3 className="steps__num">4.</h3>
                            <h2 className="steps__title">The <span> Random-Access Memory </span> sticks</h2>
                            <h3 className="steps__subtitle">Or RAM, for short. </h3>
                            <p>A random-access memory device allows data items to be read or written in almost the same amount of time irrespective of the physical location of data inside the memory, in contrast with other direct-access data storage media (such as hard disks, CD-RWs, DVD-RWs and the older magnetic tapes and drum memory), where the time required to read and write data items varies significantly depending on their physical locations on the recording medium, due to mechanical limitations such as media rotation speeds and arm movement.</p>
                        </div>
                        <Link to={`/type/RAMs`}><img src={'https://ik.imagekit.io/kkfreeqob0t/React_Coder/ram_qNzFnBoT-A.png?updatedAt=1636580164356'} width="600rem"></img></Link>
                        
                    </div>
                </section>
                <section className="steps__left">
                    <div className="steps__left--container" data-aos="fade-right">
                    <Link to={`/type/PSUs`}><img src={'https://ik.imagekit.io/kkfreeqob0t/React_Coder/psu_EF5IomvIC.png?updatedAt=1636580164737'} width="600rem"></img></Link>
                        <div className="steps__info">
                        <h3 className="steps__num">5.</h3>
                            <h2 className="steps__title">How do I <span> power </span>this thing?</h2>
                            <h3 className="steps__subtitle">You're gonna need a bigger boat.</h3>
                            <p>The desktop computer power supply converts the alternating current (AC) from a wall socket of mains electricity to a low-voltage direct current (DC) to operate the motherboard, processor and peripheral devices.</p>
                        </div>
                        
                    </div>
                </section>
                <section className="steps__right">
                    <div className="steps__right--container" data-aos="fade-left">
                        <div className="steps__info">
                        <h3 className="steps__num">6.</h3>
                            <h2 className="steps__title">Where all your files are <span> stored </span></h2>
                            <h3 className="steps__subtitle">Storage Units. </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sodales tincidunt eros, sed egestas purus. Ut finibus nec diam eget interdum. Ut sit amet nibh fermentum, pulvinar tellus ut, tincidunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sodales tincidunt eros, sed egestas purus. Ut finibus nec diam eget interdum. Ut sit amet nibh fermentum, pulvinar tellus ut, tincidunt.</p>
                        </div>
                        <Link to={`/type/storage`}><img src={'https://ik.imagekit.io/kkfreeqob0t/React_Coder/ultra-3d-sata-iii-ssd-left.png.thumb.1280.1280_caG8I7fmM.png?updatedAt=1636811294950'} width="600rem"></img></Link>
                        
                    </div>
                </section>
                <section className="steps__left">
                    <div className="steps__left--container" data-aos="fade-right">
                    <Link to={`/type/coolers`}><img src={'https://ik.imagekit.io/kkfreeqob0t/React_Coder/H81acf1f065d74bfab0a7e35b61e091cdI_TAd37rffF.png?updatedAt=1636811296650'} width="600rem"></img></Link>
                        <div className="steps__info">
                        <h3 className="steps__num">7.</h3>
                            <h2 className="steps__title">Keep it <span> cool </span></h2>
                            <h3 className="steps__subtitle">(Pun intended)</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sodales tincidunt eros, sed egestas purus. Ut finibus nec diam eget interdum. Ut sit amet nibh fermentum, pulvinar tellus ut, tincidunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sodales tincidunt eros, sed egestas purus. Ut finibus nec diam eget interdum. Ut sit amet nibh fermentum, pulvinar tellus ut, tincidunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sodales tincidunt eros, sed egestas purus. Ut finibus nec diam eget interdum. Ut sit amet nibh fermentum, pulvinar tellus ut, tincidunt.</p>
                        </div>
                        
                    </div>
                </section>
                <section className="steps__right">
                    <div className="steps__right--container" data-aos="fade-left">
                        <div className="steps__info">
                        <h3 className="steps__num">8.</h3>
                            <h2 className="steps__title">Where <span> can I put </span>this? </h2>
                            <h3 className="steps__subtitle">The final step. </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sodales tincidunt eros, sed egestas purus. Ut finibus nec diam eget interdum. Ut sit amet nibh fermentum, pulvinar tellus ut, tincidunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sodales tincidunt eros, sed egestas purus. Ut finibus nec diam eget interdum. Ut sit amet nibh fermentum, pulvinar tellus ut, tincidunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sodales tincidunt eros, sed egestas purus. Ut finibus nec diam eget interdum. Ut sit amet nibh fermentum, pulvinar tellus ut, tincidunt.</p>
                        </div>
                        <Link to={`/type/cases`}><img src={'https://ik.imagekit.io/kkfreeqob0t/React_Coder/rgb-black-glass_7NmleewxS.png?updatedAt=1636813022737'} width="600rem"></img></Link>
                        
                    </div>
                </section>
            </main>
        </>
    )
}
