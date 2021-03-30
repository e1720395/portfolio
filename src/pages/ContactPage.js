import React from 'react';
import ContactItem from '../components/ContactItem';
import phone from '../img/phone.svg';
import email from '../img/emailme.svg';
import location from '../img/location.svg';

export default function ContactPage() {
    return(
        <div className="ContactPage">            
            <div className="map-sect">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2800.5744115105526!2d-73.63616148423426!3d45.41792104455084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc9115cbf4f0fa9%3A0x46d4c5da0393fd74!2s278%20Rue%20de%20Cabano%2C%20LaSalle%2C%20QC%20H8R%202M1!5e0!3m2!1sen!2sca!4v1615747133553!5m2!1sen!2sca" width="600" height="450" style={{border:0}} allowfullScreen="" loading="lazy"></iframe>
            </div>
            <div className="contact-section">
                <ContactItem icon={phone} text1={'514 659 9303'} title={'Phone'} /> 
                <ContactItem icon={email} text1={'kuzmenkovalera00@gmail.com'} title={'Email'}/>
                <ContactItem icon={location} text1={'Montréal'} title={'Ville'}/>
            </div>
        </div>
    )
}
