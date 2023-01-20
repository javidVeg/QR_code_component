import React from 'react'
import QrCode from "../images/image-qr-code.png"

const QR = () => {
    return (
        <>
            <div className=" h-auto p-3 bg-white rounded-lg">
                <img className="rounded-lg w-52" src={QrCode} alt='qr-code-image' />
                <h2 className="w-52 text-15px font-outfit text-Dark-blue px-2 pt-2">Improve your front-end skills by building projects</h2>
                <p className="w-52 text-11px font-outfit  text-Grayish-blue p-3 ">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
            </div>
        </>
    )
}

export default QR