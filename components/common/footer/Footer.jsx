import React from 'react';
import Link from 'next/link';
// import { useTranslation } from "next-i18next";
import Newsletter from './Newsletter';
import Copyrights from './Copyrights';
import DecorativePill from '../DecorativePill';
import socialLinks from '../../../data/social';
import Contact from '../Contact';
import { addresses, emails, telephones } from '../../../data/contact';
import projects from '../../../data/projects';

export default function Footer() {
    // const { t } = useTranslation("common");

    const filteredProjects = projects.filter(project => project.isProduct === true);

    return (
        <footer>
            <img className="footer-curve" src="/vectors/footer_curve.svg"/>
            <div className="footer-content">
                <div className="mt-5">
                    <DecorativePill/>
                    <h1 className="mb-4">Learn More About Us!</h1>
                </div>
                <Contact title="Oreus Inc." address={addresses[0]} tel={telephones[0]} email={emails[0]}/>
                <Newsletter className="pb-4"/>
                <div className="row mt-5 ">
                    <div className="col-12 col-lg-3">
                        <strong>Products</strong>
                        <ul>
                            {filteredProjects.map((project) => <li key={project.title}>
                                <a href={project.url} target="_blank" rel="noreferrer">{project.title}</a>
                            </li>)}
                        </ul>
                    </div>
                    <div className="col-12 col-lg-3">
                        <strong>Company</strong>
                        <ul>
                            <li><a href="https://oreus.ca/about" target="_blank" rel="noreferrer">About Us</a></li>
                            <li>Get Support</li>
                            <li>Media &amp; Press</li>
                            {/* <li>Security Policy</li>
                            <li>Work at Oreus</li> */}
                        </ul>
                    </div>
                    {/* <div className="col-12 col-lg-3">
                        <strong>Development</strong>
                        <ul>
                            <li>Tutorials</li>
                            <li>API Statuses</li>
                        </ul>
                    </div> */}
                    <div className="col-12 col-lg-3">
                        <strong>Social</strong>
                        <ul>
                            {socialLinks.map((socialLink) => <li key={socialLink.name}>
                                <a
                                    href={socialLink.url}
                                    target="_blank"
                                    rel="noreferrer">
                                    {socialLink.name}
                                </a>
                            </li>)}
                        </ul>
                    </div>
                </div>
                <Copyrights/>
            </div>
        </footer>
    )
}