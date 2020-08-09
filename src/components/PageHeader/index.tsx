import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
const backIcon = require("../../assets/images/icons/back.svg") as string;
const logoImg = require("../../assets/images/logo.svg") as string;
interface PageHeaderProps{
    title: string;
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
    return (
        <header className="page-header">
        <div className="top-bar-container">
            <Link to="/">
                <img src={backIcon} alt="Voltar"/>
            </Link>
            <img src={logoImg} alt="Proffy"/>
        </div>
        <div className="header-content">
            <strong>{props.title}</strong>
            {props.children}
        </div>
    </header>);
}

export default PageHeader;