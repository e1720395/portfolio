import React from 'react';
import ContactItem from '../components/ContactItem';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';

export default function ContactPage() {
    return(
        <div className="ContactPage">            
            <div className="map-sect"></div>
            <div className="contact-section">
                
                <ContactItem text1={'514 659 9303'} title={'Phone'}> 
                    <PhoneIcon/>
                </ContactItem>
                <ContactItem icon={<EmailIcon/>} text1={'514 659 9303'} title={'Email'}/>
            </div>
        </div>
    )
}
