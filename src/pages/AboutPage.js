import React from 'react';
import Tittle from '../components/Title';
import ImageSection from '../components/ImageSection';
import SkillsSection from '../components/SkillsSection';
import ServiceSection from '../components/ServiceSection';
import design from '../img/avatar.png';

export default function AboutPage() {
    return(
        <div className="AboutPage">
            <Tittle title={'About Me'} span={'About me'} />
            < ImageSection />.
            <Tittle title={'My Skills'} span={'My Skills'} />
            <div className="skillsContainer">
                <SkillsSection skill={'JavaScript'} progress={'60%'} width={'60%'}/> 
                <SkillsSection skill={'Web Design'} progress={'70%'} width={'70%'}/>
                <SkillsSection skill={'Adobe Suite'} progress={'70%'} width={'70%'}/>
                <SkillsSection skill={'Video'} progress={'80%'} width={'80%'}/>
                <SkillsSection skill={'JavaScript'} progress={'40%'} width={'40%'}/>
                <SkillsSection skill={'JavaScript'} progress={'70%'} width={'70%'}/>
                <SkillsSection skill={'JavaScript'} progress={'90%'} width={'90%'}/>
                <SkillsSection skill={'JavaScript'} progress={'50%'} width={'50%'}/>
                <SkillsSection skill={'JavaScript'} progress={'85%'} width={'85%'}/>
                <SkillsSection skill={'JavaScript'} progress={'75%'} width={'75%'}/>
            </div>

            <Tittle title={'Services'} span={'Services'} />
            <div className="services-container">
                <ServiceSection image={design} title={'Web Design'}
                 text={'Lorem ipsum dolor sit amet consectetur adisipcinng elit'}/>
                <ServiceSection image={design} title={'Game Developpment'}
                text={'Lorem ipsum dolor sit amet consectetur adisipcinng elit'}/>
                <ServiceSection image={design} title={'Blockchain'}
                text={'Lorem ipsum dolor sit amet consectetur adisipcinng elit'}/>
            </div>
        </div>
    )
}
