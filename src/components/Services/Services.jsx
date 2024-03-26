import { useRef } from "react"
import "./Services.scss"
import { motion} from "framer-motion"

export const Services = () => {

    const variants = {
        initial: {
            x: -500,
            y: 100,
            opacity:0,
        },
        animate: {
            x:0,
            opacity:1,
            y:0,
            transition: {
                stiffness: 15,
                damping: 5,
                staggerChildren: 0.4,
                type: "spring",
                ease: "easeOut"
            }
        },
    }

    return (
        <motion.div className="services" variants={variants} initial="initial" whileInView="animate">
            <motion.div className="textContainer" variants={variants}>
                <p>
                    I Focus on Helping Your Brand Grow<br />
                    and Move Forward
                </p>
                <hr />
            </motion.div>
            <motion.div className="titleContainer" variants={variants}>
            <div className="title">
                    <motion.img whileHover={{opacity: 0.9, transition: { duration: 0.2, ease: "easeOut" },scale: 0.98,}} src="/people.webp" alt="" />
                    <motion.h1>
                        <b>Unique</b> Ideas
                    </motion.h1>
                </div>
                <div className="title">
                    <h1>
                        <b>For Your</b> Business.
                    </h1>
                    <motion.button whileHover={{opacity: 0.9, transition: { duration: 0.2, ease: "easeOut" },scale: 0.98,}}>WHAT WE DO?</motion.button>
                </div>
            </motion.div>
            <motion.div className="listContainer" variants={variants}>
                <motion.div className="box" whileHover={{background:"gray", color: "black",transition: { duration: 0.3 },scale: 0.98,}}>
                    <h2>Branding</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, aspernatur ratione illo, autem eos tenetur culpa doloribus hic deleniti possimus ullam, magni optio quo voluptate amet neque dolore sequi blanditiis!</p>
                    <motion.button whileHover={{transition: { duration: 0.3, ease: "easeOut" },scale: 0.96,}}>Go</motion.button>
                </motion.div>
                <motion.div className="box" whileHover={{background:"gray", color: "black",transition: { duration: 0.3 },scale: 0.98,}}>
                    <h2>Branding</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, aspernatur ratione illo, autem eos tenetur culpa doloribus hic deleniti possimus ullam, magni optio quo voluptate amet neque dolore sequi blanditiis!</p>
                    <motion.button whileHover={{transition: { duration: 0.3, ease: "easeOut" },scale: 0.96,}}>Go</motion.button>
                </motion.div>
                <motion.div className="box" whileHover={{background:"gray", color: "black",transition: { duration: 0.3 },scale: 0.98,}}>
                    <h2>Branding</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, aspernatur ratione illo, autem eos tenetur culpa doloribus hic deleniti possimus ullam, magni optio quo voluptate amet neque dolore sequi blanditiis!</p>
                    <motion.button whileHover={{transition: { duration: 0.3, ease: "easeOut" },scale: 0.96,}}>Go</motion.button>
                </motion.div>
                <motion.div className="box" whileHover={{background:"gray", color: "black",transition: { duration: 0.3 },scale: 0.98,}}>
                    <h2>Branding</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, aspernatur ratione illo, autem eos tenetur culpa doloribus hic deleniti possimus ullam, magni optio quo voluptate amet neque dolore sequi blanditiis!</p>
                    <motion.button whileHover={{transition: { duration: 0.3, ease: "easeOut" },scale: 0.96,}}>Go</motion.button>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}