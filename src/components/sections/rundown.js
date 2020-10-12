import React from 'react'
import '../../styles/scss/rundown.scss'

import UTokyo from '../../img/tokyo-university.webp'
import Shinjuku from '../../img/shinjuku.webp'
import Disneyland from '../../img/disneyland.webp'
import Shibuya from '../../img/shibuya.webp'
import TTower from '../../img/tokyo-tower.webp'

import Umeda from '../../img/umeda.webp'
import Osaka from '../../img/osaka-university.webp'
import UStudio from '../../img/universal-studio.webp'
import OCastle from '../../img/osaka-castle.webp'
import Fushimi from '../../img/fushimi.webp'

import Separator from '../../img/separator-4.svg'

export default function Rundown()
{
    return (
        <div className="rundown bg-quest-light py-5">
            <img src={Separator} alt="" className="separator-5" />
            <div className="container mt-5">
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-12">
                        <div className="headline-title-1 text-white text-center mt-5">
                            Agenda Utama Tokyo
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center align-items-center my-3">
                    <div className="col-md-4 text-center mt-5">
                        <img src={UTokyo} alt="" className="image-100 border-1 border-white scalable" />
                        <div className="headline-subtitle-1 text-quest-dark mt-3 bg-orange border-2 py-2 mx-3">
                            University/School Visit
                        </div>
                    </div>
                    <div className="col-md-4 text-center mt-5">
                        <img src={Shinjuku} alt="" className="image-100 border-1 border-white scalable" />
                        <div className="headline-subtitle-1 text-quest-dark mt-3 bg-orange border-2 py-2 mx-3">
                            Shinjuku
                        </div>
                    </div>
                    <div className="col-md-4 text-center  mt-5">
                        <img src={Disneyland} alt="" className="image-100 border-1 border-white scalable" />
                        <div className="headline-subtitle-1 text-quest-dark mt-3 bg-orange border-2 py-2 mx-3">
                            Disneyland
                        </div>
                    </div>
                    <div className="col-md-4 text-center mt-5">
                        <img src={Shibuya} alt="" className="image-100 border-1 border-white scalable" />
                        <div className="headline-subtitle-1 text-quest-dark mt-3 bg-orange border-2 py-2 mx-3">
                            Shibuya
                        </div>
                    </div>
                    <div className="col-md-4 text-center mt-5">
                        <img src={TTower} alt="" className="image-100 border-1 border-white scalable" />
                        <div className="headline-subtitle-1 text-quest-dark mt-3 bg-orange border-2 py-2 mx-3">
                            Tokyo Tower
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center align-items-center mt-5">
                    <div className="col-md-12">
                        <div className="headline-title-1 text-white text-center">
                            Agenda Utama Osaka - Kyoto
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center align-items-center my-3">
                    <div className="col-md-4 text-center mt-5">
                        <img src={Osaka} alt="" className="image-100 border-1 border-white scalable" />
                        <div className="headline-subtitle-1 text-quest-dark mt-3 bg-light border-2 py-2 mx-3">
                            University/School Visit
                        </div>
                    </div>
                    <div className="col-md-4 text-center mt-5">
                        <img src={Umeda} alt="" className="image-100 border-1 border-white scalable" />
                        <div className="headline-subtitle-1 text-quest-dark mt-3 bg-light border-2 py-2 mx-3">
                            Tennoji - Umeda
                        </div>
                    </div>
                    <div className="col-md-4 text-center  mt-5">
                        <img src={UStudio} alt="" className="image-100 border-1 border-white scalable" />
                        <div className="headline-subtitle-1 text-quest-dark mt-3 bg-light border-2 py-2 mx-3">
                            Universal Studio
                        </div>
                    </div>
                    <div className="col-md-4 text-center mt-5">
                        <img src={OCastle} alt="" className="image-100 border-1 border-white scalable" />
                        <div className="headline-subtitle-1 text-quest-dark mt-3 bg-light border-2 py-2 mx-3">
                            Osaka Castle
                        </div>
                    </div>
                    <div className="col-md-4 text-center mt-5">
                        <img src={Fushimi} alt="" className="image-100 border-1 border-white scalable" />
                        <div className="headline-subtitle-1 text-quest-dark mt-3 bg-light border-2 py-2 mx-3">
                            Fushimi Inari
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}