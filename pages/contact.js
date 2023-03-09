import React from 'react'
import Hero from '../components/Hero'

const contact =() =>{
    <div>
        <Hero heading= 'contact' message='Submit the form below for more work' />
        <h1>Let's Work together</h1>
        <form>
            <div>
                <input type="text" placeholder='Name'/>
                <input type="text" placeholder='Email.com'/>            
                </div>
        </form>
    </div>
}

export default contact