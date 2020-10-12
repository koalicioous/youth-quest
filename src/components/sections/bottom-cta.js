import React from 'react'
import '../../styles/scss/bottom-cta.scss'

import Separator from '../../img/separator-5.svg'

export default function Bottom()
{
    return (
        <div className="bottom-cta py-3 bg-quest-dark position-relative" id="contact">  
            <img src={Separator} alt="" className="separator-5" />          
            <div className="container">
                <div className="row justify-content-center align-items-center">
                <div className="col-md-12">
                        <div className="card card-body shadow d-flex flex-wrap align-items-center justify-content-center border-1 bg-orange py-5">
                            <div className="headline-title-2 text-dark text-center px-3 col-md-12 my-3">
                                Kalau kamu masih punya pertanyaan, <br/> jangan ragu untuk hubungi kami, ya!
                            </div>
                            <div className="col-md-6 mt-3">
                                <button className="btn btn-block btn-dark btn-lg font-weight-bold border-2">
                                    Klik di sini!
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="my-3 col-md-12 text-center text-white">
                    <small>Crafted with ❤ for the Youth of Indonesia by Quest for Youth </small>
                </div>
            </div>
        </div>
    )
}