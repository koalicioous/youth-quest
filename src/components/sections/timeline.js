import React from 'react'
import '../../styles/scss/timeline.scss'
import Horizontal from '../../img/timeline-horizontal.png'
import Vertical from '../../img/timeline-vertical.png'

export default function Timeline()
{
    return (
        <div className="timeline py-5">
            <div className="container d-flex flex-wrap flex-column justify-content-center py-5">
                <div className="row justify-content-center align-items-center pt-5">
                    <div className="col-md-12">
                        <div className="headline-title-1 text-white text-center"> 
                            TIMELINE
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center align-items-center">
                   <img src={Horizontal} className="image-100s d-none d-sm-block z-100" alt="" />
                   <img src={Vertical} className="image-100s d-block d-sm-none z-100" alt="" />
                </div>
            </div>
        </div>
    )
}