import React from 'react';
import CardItem from '../CardItem/CardItem';
import './ProjectSection.css';
import '../../App.css';
import f2bImg from '../../assets/img/f2bImg.PNG';
import ibImg from '../../assets/img/ibImg.PNG';
import miImg from '../../assets/img/miImg.PNG';

function ProjectSection() {
    return (
        <div className="wrapper">
            <section className="projects-section">
                <h2>&#62;Previous Projects</h2>
                <CardItem
                    text="Meteorologisk Institutt"
                    path="/cases/meteorologisk-institutt"
                    abbreviation="mi"
                    image={miImg}
                />
                <CardItem
                    text="Fail2Ban"
                    path="/cases/fail2ban"
                    abbreviation="f2b"
                    image={f2bImg}
                />
                <CardItem
                    text="Incremental Backup"
                    path="/cases/incremental-backup"
                    abbreviation="ib"
                    image={ibImg}
                />
            </section>
        </div>
    )
}

export default ProjectSection
