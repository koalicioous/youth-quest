import React from 'react'
import '../../styles/scss/story.scss'

import Image from '../../img/image-1.webp'
import Separator from '../../img/separator-2.svg'

export default function Story2()
{
    return (
        <div className="story py-5 position-relative">
            <div className="container">
                <div className="dropdown-divider py-5 opacity-5"></div>
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-6 text-center py-5">
                        <img src={Image} alt="" className="image-100 border-2 shadow border-white" />
                    </div>
                    <div className="col-md-6 py-5 px-3">
                        <div className="headline-title-1 text-white my-3 text-center">
                            Youth Quest #1
                        </div>
                        <div className="text-quest-dark">
                        Youth Quest #1 memilih destinasi studi banding ke Jepang, utamanya Tokyo, Osaka dan Kyoto. Youth Quest akan membiayai penuh perjalanan studi banding ini untuk 8 orang terbaik. 4 dari 8 orang terpilih akan diberangkatkan menuju Tokyo, sedangkan 4 orang lainnya akan berangkat ke Osaka-Kyoto.
                        <br/><br/>
                        Untuk menjadi pemuda terpilih, peserta harus mengikuti lomba penulisan essay yang ketentuannya dapat dilihat pada Panduan Youth Quest #1 yang disertakan pada halaman ini.
                        </div>
                    </div>
                </div>
            </div>
            <img src={Separator} alt="" className="separator-2 position-absolute"/>
        </div>
    )
}