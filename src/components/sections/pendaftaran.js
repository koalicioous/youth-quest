import React from 'react'
import '../../styles/scss/pendaftaran.scss'

import Separator from '../../img/separator-3.svg'
import Tokyo from '../../img/tokyo-1.webp'
import Kyoto from '../../img/kyoto-1.webp'

export default function Pendaftaran()
{
    return (
        <div className="pendaftaran">
            <img src={Separator} alt="" className="h-100s" />
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-12">
                        <div className="headline-title-1 text-quest-dark text-center mb-5">
                            Pendaftaran
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center align-items-center mt-2">
                    <div className="col-md-4 text-center">
                        <img src={Tokyo} className="image-100 border-dark border-2" alt="" />
                        <div className="headline-title-2 text-quest-dark mt-3">
                            Paket Tokyo
                        </div>
                        <div className="headline-subtitle-1">
                            Biaya Pendaftaran: Rp100.000
                        </div>
                    </div>
                    <div className="col-md-4 text-center">
                        <img src={Kyoto} className="image-100 border-dark border-2" alt="" />
                        <div className="headline-title-2 text-quest-dark mt-3">
                            Paket Kyoto - Osaka
                        </div>
                        <div className="headline-subtitle-1">
                            Biaya Pendaftaran: Rp50.000
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}