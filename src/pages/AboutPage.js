import React from 'react';
import Tittle from '../components/Title';
import ImageSection from '../components/ImageSection';
import SkillsSection from '../components/SkillsSection';
import ServiceSection from '../components/ServiceSection';
import design from '../img/design.svg';
import gameDev from '../img/game-dev.svg';

export default function AboutPage() {
    return(
        <div className="AboutPage">
            <Tittle title={'À propos'} span={'À propos'} />
            < ImageSection />.
            <Tittle title={'Mes compétences'} span={'Mes compétences'} />
            <div className="skillsContainer">
                <SkillsSection skill={'SMMA'} progress={'80%'} width={'80%'}/> 
                <SkillsSection skill={'Design Web'} progress={'85%'} width={'85%'}/>
                <SkillsSection skill={'Suite Adobe'} progress={'90%'} width={'90%'}/>
                <SkillsSection skill={'Vidéo'} progress={'80%'} width={'80%'}/>
                <SkillsSection skill={'Unity'} progress={'75%'} width={'75%'}/>
                <SkillsSection skill={'JavaScript'} progress={'70%'} width={'70%'}/>
            </div>

            <Tittle title={'Services'} span={'Services'} />
            <div className="services-container">
                <ServiceSection image={design} title={'Web Design'}
                 text={"Besoin d'aide pour concevoir un site Web?"}/>
                <ServiceSection image={gameDev} title={'Game Developpment'}
                text={'Lorem ipsum dolor sit amet consectetur adisipcinng elit'}/>
                {/* <ServiceSection image={design} title={'Blockchain'}
                text={'Everything from smart contracts to staking'}/> */}
            </div>
        </div>
    )
}
