import React from 'react'
import CardItem from './CardItem';
import './CasesSection.css';
import '../App.css';
import f2bImg from '../assets/img/f2bImg.PNG';
import ibImg from '../assets/img/ibImg.PNG';
import miImg from '../assets/img/miImg.PNG';
import activeDirectoryImg from '../assets/img/activeDirectoryImg.PNG';

function CasesSection() {
    return (
        <div className="wrapper">
            <section className="cases-section">
                <h2>&#62;Previous cases</h2>
                <CardItem
                    text="Meteorologisk Institutt"
                    path="/cases/meteorologisk-institutt"
                    image={miImg}
                    size="medium"
                />
                <CardItem
                    text="Fail2Ban"
                    path="/cases/fail2ban"
                    image={f2bImg}
                    size="medium"
                />
                <CardItem
                    text="Incremental Backup"
                    path="/cases/incremental-backup"
                    image={ibImg}
                    size="medium"
                />
                <CardItem
                    text="AD Office Structure"
                    path="/cases/ad-structure"
                    image={activeDirectoryImg}
                    size="medium"
                />
                <CardItem
                    text="N/A"
                    path="/cases"
                    size="medium"
                />
                <CardItem
                    text="N/A"
                    path="/cases"
                    size="medium"
                />
                <CardItem
                    text="N/A"
                    path="/cases"
                    size="medium"
                />
                <CardItem
                    text="N/A"
                    path="/cases"
                    size="medium"
                />
            </section>
        </div>
    );
}

export default CasesSection
