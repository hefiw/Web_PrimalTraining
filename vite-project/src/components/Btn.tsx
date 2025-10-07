import React, { type FC } from "react";


interface BtnProps {
    className: string
}

const Btn: FC<BtnProps> = ({ className }) => {
    return <button className={`${className} btn`}>reserve your spot</button>
}

export default Btn;