import React from 'react'
import Gallery from 'react-grid-gallery';
import g_1 from '../../images/g-1.jpg';
import g_2 from '../../images/g-2.jpg';
import g_3 from '../../images/g-3.jpg';
import g_4 from '../../images/g-4.jpg';
import g_5 from '../../images/g-5.jpg';
import g_6 from '../../images/g-6.jpg';


const IMAGES =
        [{
                src: g_1,
                thumbnail: g_1,
                // thumbnailWidth: 320,
                thumbnailHeight: 174,
        },
        {
                src: g_2,
                thumbnail: g_2,
                thumbnailHeight: 212,
        },
        {
                src: g_3,
                thumbnail: g_3,
                thumbnailHeight: 212,
        },
        {
                src: g_4,
                thumbnail: g_4,
                thumbnailHeight: 212,
        },
        {
                src: g_5,
                thumbnail: g_5,
                thumbnailHeight: 212
        },
        {
                src: g_6,
                thumbnail: g_6,
                thumbnailHeight: 212
        }
];

function Guru_Gallery() {
        return (
                <div className="container">
                        <div className="container-fluid">
                                <h2 className="text-center mt-5 mb-3">Contact Us</h2>
                        </div>
                        <div className="row">
                                <div className="col 12 text-center">
                                        <Gallery images={IMAGES} />,
                                </div>
                        </div>
                </div>
        )
}

export default Guru_Gallery;
