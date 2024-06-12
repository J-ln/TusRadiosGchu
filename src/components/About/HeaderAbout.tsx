import React from 'react'

const HeaderAbout = () => {
    return (
        <div className='flex flex-col lg:flex-row items-center w-full h-full' >
            <div className="flex justify-center  items-center  w-[95%] md:w-full  h-72 rounded-2xl bg-black header-shadow ">
                <h1 className="text-6xl md:text-6xl lg:text-7xl font-bold  text-right z-20 text-shadow text-[#ccc]">
                    ¿Quienes
                    <br />
                    <span className="font-extralight pt-8 "> somos?</span>
                </h1>
            </div>
            <div className="flex  h-72 lg:h-64 w-fit  md:h-fit justify-center items-center ">
                <div className="w-[90%]  h-full flex items-center justify-center  -z-10 -translate-y-0 lg:translate-y-0 lg:-translate-x-8 rounded-ee-2xl rounded-bl-2xl py-6 lg:py-8 lg:rounded-bl-none lg:rounded-tr-2xl  bg-gray-500 bg-opacity-10  backdrop-filter backdrop-blur-sm  shadow-slate-400 ">
                    <p className="font-light italic text-base/snug text-left tracking-wide px-4 text-shadow-s">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                        scelerisque sapien nec eros tristique, vitae posuere eros fringilla.
                        Donec ac nisl vitae lorem tempor interdum et sed massa. Cras non est
                        iaculis, sagittis nunc sed, euismod tellus. Morbi dictum libero vel
                        dapibus sodales. In purus nibh, consectetur sed condimentum non,
                        faucibus sed enim. Curabitur non gravida sem, ut tristique metus.
                        Nullam non risus tortor. Praesent mollis faucibus magna, vitae
                        tempus lorem consectetur sit amet
                    </p>
                </div>
            </div>
        </div>
    )
}

export default HeaderAbout