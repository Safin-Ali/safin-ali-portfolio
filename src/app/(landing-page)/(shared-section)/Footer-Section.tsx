import React from 'react';
import SocialNav from '@/components/AppBar/Social-Nav';

export default function FooterSection() {

    return (
        <footer className={`flex-full-center flex-col`}>

            {/* footer header */ }
            <div className={`text-center`}>
                <h3 className={`mb-0.5`}>Safin Ali</h3>
                <h5 className={`text-gray-300`}>Web App Developer</h5>
            </div>

            {/* social icon */ }
            <div className={`flex-full-center gap-5 my-2`}>
                <SocialNav size={23} className={`social-icon`}/>
            </div>

            {/* contact number */}
            <div>
                <p>
                    <small className={`mr-1.5`}>
                        <svg style={{display:'inline-block'}} width={25} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 600"><path fill="#006a4e" d="M0 0h1000v600H0z"/><circle cx="450" cy="300" r="200" fill="#f42a41"/></svg>
                        </small>
                    <i>+880 1316987205</i>
                </p>
            </div>

            {/* copyright warning */}

            <div className={`mt-5 mb-0.5`}>
                <small>&#169; {new Date().getFullYear()} <span>Safin Ali.</span> All Rights Reserved.</small>
            </div>

        </footer>
    );
};