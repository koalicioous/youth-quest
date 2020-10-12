import React from 'react'
import '../../styles/scss/heading.scss'

import Registration from '../../img/icons/009-idea.svg'
import Essay from '../../img/icons/002-writing.svg'
import Announcement from '../../img/icons/007-certificate.svg'
import Separator from '../../img/separator-1.svg'

export default function Heading()
{
    return (
        <div className="heading pt-5">
            <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
            <div className="container z-100 mt-5">
                <div className="text-center"> 
                    <div className="headline-title-1 text-quest-light">
                        Youth Quest #1
                    </div>
                    <div className="headline-subtitle-1 text-quest-dark">
                    <span role="img" aria-labelledby="star">⭐</span> The Secret of Japanese Education <span role="img" aria-labelledby="star">⭐</span>
                    </div>
                    <div className="headline-title-2 text-quest-dark mt-3">
                        STUDI BANDING KE TOKYO, OSAKA, DAN KYOTO GRATIS UNTUK KAMU YANG TERPILIH!
                    </div>
                </div>
                <div className="row justify-content-center align-items-center mt-3">
                    <div className="col-md-4 mt-3 flex-grow-1">
                        <div className="card card-body shadow border-1 py-5 d-flex flex-column align-items-center">
                            <img src={Registration} alt="" className="icon"/>
                            <div className="font-weight-bold text-center text-quest-dark mt-3">
                                PENDAFTARAN
                            </div>
                            <div className="headline-subtitle-2 mt-2 text-quest-dark">
                                1 Oktober - 31 Desember 2020
                            </div>
                            <div className="headline-subtitle-2 mt-3 text-quest-dark font-weight-bold px-3 text-center">
                                Unduh Panduan dan Daftarkan Dirimu!
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mt-3 flex-grow-1">
                        <div className="card card-body shadow border-1 py-5 d-flex flex-column align-items-center">
                            <img src={Essay} alt="" className="icon" />
                            <div className="font-weight-bold text-center text-quest-dark mt-3">
                                PENGUMPULAN ESSAY
                            </div>
                            <div className="headline-subtitle-2 mt-2 text-quest-dark">
                                Sekarang - 31 Desember 2020
                            </div>
                            <div className="headline-subtitle-2 mt-3 text-quest-dark font-weight-bold px-3 text-center">
                                Kirimkan essay melalui email
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mt-3">
                        <div className="card card-body shadow border-1 py-5 d-flex flex-column align-items-center">
                            <img src={Announcement} alt="" className="icon" />
                            <div className="font-weight-bold text-center text-quest-dark mt-3">
                                PENGUMUMAN PEMENANG
                            </div>
                            <div className="headline-subtitle-2 mt-2 text-quest-dark">
                                5 Februari 2021
                            </div>
                            <div className="headline-subtitle-2 mt-3 text-quest-dark font-weight-bold px-3 text-center">
                            Lihat Pengumuman Pemenang
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center align-items-center mt-3">
                    <button className="btn btn-warning font-weight-bold px-5 px-4 border-2 mx-2 mt-3">
                        Unduh Buku Panduan
                    </button>
                    <button className="btn btn-danger font-weight-bold px-5 px-4 border-2 mx-2 mt-3">
                        DAFTAR KOMPETISI
                    </button>
                </div>
            </div>
            <img src={Separator} alt="" className="separator-1"/>
        </div>
    )
}