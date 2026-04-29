import React from 'react'

const Typography = ({ variant = "p", children, effect, className=" " }) => {

    const tagVariant = {
        h1: "h1",
        h2: "h2",
        h3: "h3",
        h4: "h4",
        h5: "h5",
        h6: "h6",
        p: "p",
        small: "small"
    }

    const effectStyle = {
        muted: "text-gray-400"

    }

    const tagStyle = {
        h1: "text-18 md:text-[30px] lg:text-[45px]",
        h2: "text-16 md:text-[26px] lg:text-[40px]",
        h3: "text-14 md:text-[20px] lg:text-[25px]",
        h4: "text-14 md:text-[18px] lg:text-[23px]",
        h5: "text-12 md:text-[16px] lg:text-[18px]",
        h6: "text-12 md:text-[14px] lg:text-[16px] font-bold",
        p: "text-12 md:text-[14px] lg:text-[16px]",
        small: "text-10 md:text-[12px] lg:text-[14px]",
        li: "flex items-center gap-3 text-sm text-gray-700",
        span: "w-3 h-3 rounded-full bg-gray-900 shrink-0 inline-block",

    }

    const Tag = tagVariant[variant] || "p";

    return (
        <Tag className={`${tagStyle[variant]} ${effectStyle[effect]} ${className}`}>
            {children}
            </Tag>
    )
}

export default Typography
