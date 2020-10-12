import React from 'react'
import '../../styles/scss/story.scss'

export default function Story()
{
    return (
        <div className="story" id="about">
            <div className="container py-5 px-3">
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-6">
                        <div className="headline-title-1 text-white my-3 text-center">
                            Tentang Youth Quest
                        </div>
                    </div>
                    <div className="col-md-6 text-quest-dark">
                    Youth Quest adalah salah satu program dari Quest yang diperuntukkan bagi anak-anak muda Indonesia. Youth Quest memiliki fokus utama memilih pemuda Indonesia yang berusia 16-30 tahun untuk melakukan studi banding ke berbagai institusi pendidikan di Dunia. Studi banding ini sendiri bertujuan untuk menginspirasi dan memotivasi pemuda Indonesia untuk mengembangkan diri dengan berkuliah di luar negeri.
                    <br/><br/>
                    Dengan mengikuti program ini, peserta yang terpilih dapat merasakan exposure terhadap budaya dan sistem pendidikan terbaik di luar negeri. Melalui exposure tersebut, peserta dapat mempelajari nilai-nilai kebudayaan dan pendidikan yang dapat diterapkan dalam kehidupannya.
                    </div>
                </div>
            </div>
        </div>
    )
}