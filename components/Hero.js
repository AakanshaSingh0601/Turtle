import React from 'react'
import styles from "../styles/Home.module.css"
const Hero = () => {

    return (
        <div className={styles.backgroundimg}>
            <div className='flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img'>
                <div className='p-8 text-white z-[89] ml-[-1rem] mt-[-27rem]'>
                    <h2 className='text-5xl'>Welcome to <b>Turtl</b></h2>

                </div>

            </div>
            <div>
                <div className={styles.backgroundimg}></div>
            </div>

        </div>
        
    )
}


export default Hero;



