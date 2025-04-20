import React from 'react'

import { RevealOnScroll } from '../RevealOnScroll'

import design1 from '../../assets/pic/design1.jpg'
import design2 from '../../assets/pic/design2.jpg'
import design3 from '../../assets/pic/design3.jpg'

import {
    Card,
    CardHeader,
    CardBody,
    Typography,
} from "@material-tailwind/react";

function Design() {
    return (
        <section
            id="design"
            className="min-h-screen flex items-center justify-center relative mb-[18rem]"
        >
            <RevealOnScroll>
                <div className="desing-wrapper flex flex-col items-center justify-center gap-8 ">

                    <h1 className='text-4xl font-bold '>Design Project</h1>

                    <div className="card-wrapper grid grid-cols-1 md:grid-cols-2 gap-6 ">
                        <a href="https://www.figma.com/proto/0dV0l8sgdXYMQVfvgozsiO/PostPoint?page-id=0%3A1&node-id=2-5&viewport=1230%2C362%2C0.43&t=UOnaP2cPHiir7URJ-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=167%3A405"
                            className='hover:-translate-y-1 transition-all '
                            target='_blank'
                        >
                            <Card
                                shadow={false}
                                className="relative grid h-[40rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center"
                            >
                                <CardHeader
                                    floated={false}
                                    shadow={false}
                                    color="transparent"
                                    className={`absolute inset-0 m-0 h-full w-full rounded-none bg-cover bg-center`}
                                    style={{ backgroundImage: `url(${design1})` }}
                                >
                                    <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
                                </CardHeader>
                                <CardBody className="relative py-14 px-6 md:px-12">
                                    <Typography
                                        variant="h2"
                                        color="white"
                                        className="mb-6 font-medium leading-[1.5]"
                                    >
                                        SideJob Application
                                    </Typography>
                                </CardBody>
                            </Card>
                        </a>


                        <a href="https://www.figma.com/proto/t0tCBSvqU1hkuPkaxO2tka/MaiBood?page-id=0%3A1&node-id=3-5437&p=f&viewport=332%2C458%2C0.38&t=h5zMgd2cwHMcYP2e-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=3%3A5437"
                            className='hover:-translate-y-1 transition-all '
                            target='_blank'
                        >
                            <Card
                                shadow={false}
                                className="relative grid h-[40rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center"
                            >
                                <CardHeader
                                    floated={false}
                                    shadow={false}
                                    color="transparent"
                                    className="absolute inset-0 m-0 h-full w-full rounded-none bg-cover bg-center"
                                    style={{ backgroundImage: `url(${design2})` }}
                                >
                                    <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
                                </CardHeader>
                                <CardBody className="relative py-14 px-6 md:px-12">
                                    <Typography
                                        variant="h2"
                                        color="white"
                                        className="mb-6 font-medium leading-[1.5]"
                                    >
                                        MaiBood Application
                                    </Typography>
                                </CardBody>
                            </Card>
                        </a>
                    </div>


                    <a href="https://www.figma.com/proto/MHSL3q3z2wP2ddHzB3RjY0/IVFClinic?page-id=0%3A1&node-id=4-3&viewport=-931%2C974%2C0.75&t=rGNm3vG83wzaJrLD-1&scaling=scale-down&content-scaling=fixed"
                        className='hover:-translate-y-1 transition-all w-full '
                        target='_blank'
                    >
                        <Card
                            shadow={false}
                            className="relative grid h-[25rem] w-full items-end justify-center overflow-hidden text-center"
                        >
                            <CardHeader
                                floated={false}
                                shadow={false}
                                color="transparent"
                                className="absolute inset-0 m-0 h-full w-full rounded-none bg-cover bg-center"
                                style={{ backgroundImage: `url(${design3})` }}
                            >
                                <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
                            </CardHeader>
                            <CardBody className="relative py-14 px-6 md:px-12">
                                <Typography
                                    variant="h2"
                                    color="white"
                                    className="mb-6 font-medium leading-[1.5]"
                                >
                                    Delignt Clinic
                                </Typography>
                            </CardBody>
                        </Card>
                    </a>
                </div>
            </RevealOnScroll>

        </section >
    )
}

export default Design