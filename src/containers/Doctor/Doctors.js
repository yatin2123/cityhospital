import React from 'react';
import { Heading } from '../../component/UI/Heading/Heading';
import { DHeadin4 } from '../../component/UI/Heading/Heading';

function Doctors(props) {
    return (
        <main>
            <section id="doctors" className="doctors">
                <div className="container">
                    <div className="section-title">
                        <Heading>Doctors</Heading>
                        <p>Duis sagittis rutrum neque, quis tincidunt arcu pretium ac. Suspendisse sem risus, molestie vitae arcu et,
                            tincidunt viverra erat. Quisque in lectus id nulla viverra sodales in a risus. Aliquam ut sem ex. Duis
                            viverra
                            ipsum lacus, ut pharetra arcu sagittis nec. Phasellus a eleifend elit.</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="member d-flex align-items-start">
                                <div className="pic"><img src="../assets/img/doctors/doctors-1.jpg" className="img-doctor" alt /></div>
                                <div className="member-info">
                                    <DHeadin4>Atha Smith</DHeadin4>
                                    <span>Chief Medical Officer</span>
                                    <p>Duis sagittis rutrum neque, quis tincidunt arcu pretium ac.</p>
                                    <div className="social">
                                        <a href><i className="ri-twitter-fill" /></a>
                                        <a href><i className="ri-facebook-fill" /></a>
                                        <a href><i className="ri-instagram-fill" /></a>
                                        <a href> <i className="ri-linkedin-box-fill" /> </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mt-4 mt-lg-0">
                            <div className="member d-flex align-items-start">
                                <div className="pic"><img src="../assets/img/doctors/doctors-2.jpg" className="img-doctor" alt /></div>
                                <div className="member-info">
                                    <DHeadin4>John White</DHeadin4>
                                    <span>Anesthesiologist</span>
                                    <p>Aenean ac turpis ante. Mauris velit sapien.</p>
                                    <div className="social">
                                        <a href><i className="ri-twitter-fill" /></a>
                                        <a href><i className="ri-facebook-fill" /></a>
                                        <a href><i className="ri-instagram-fill" /></a>
                                        <a href> <i className="ri-linkedin-box-fill" /> </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mt-4">
                            <div className="member d-flex align-items-start">
                                <div className="pic"><img src="../assets/img/doctors/doctors-3.jpg" className="img-doctor" alt /></div>
                                <div className="member-info">
                                    <DHeadin4>Umika Loha</DHeadin4>
                                    <span>Cardiology</span>
                                    <p>Curabitur luctus eleifend odio. Phasellus placerat mi.</p>
                                    <div className="social">
                                        <a href><i className="ri-twitter-fill" /></a>
                                        <a href><i className="ri-facebook-fill" /></a>
                                        <a href><i className="ri-instagram-fill" /></a>
                                        <a href> <i className="ri-linkedin-box-fill" /> </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mt-4">
                            <div className="member d-flex align-items-start">
                                <div className="pic"><img src="../assets/img/doctors/doctors-4.jpg" className="img-doctor" alt /></div>
                                <div className="member-info">
                                    <DHeadin4>Daimy Smith</DHeadin4>
                                    <span>Neurosurgeon</span>
                                    <p>Morbi vulputate, tortor nec pellentesque molestie, eros nisi ornare purus.</p>
                                    <div className="social">
                                        <a href><i className="ri-twitter-fill" /></a>
                                        <a href><i className="ri-facebook-fill" /></a>
                                        <a href><i className="ri-instagram-fill" /></a>
                                        <a href> <i className="ri-linkedin-box-fill" /> </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>

    );
}

export default Doctors;