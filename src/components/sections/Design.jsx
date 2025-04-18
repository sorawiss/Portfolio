import React from 'react'

import { RevealOnScroll } from '../RevealOnScroll'

import design1 from '../../assets/pic/design1.jpg'
import design2 from '../../assets/pic/design2.jpg'

import {
    Card,
    CardHeader,
    CardBody,
    Typography,
} from "@material-tailwind/react";

function Design() {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center relative "
        >
            <RevealOnScroll>
                <h1 className='text-4xl font-bold mb-8 '>Design Project</h1>

                <div className="card-wrapper flex gap-4 ">
                    <a href="https://www.figma.com/proto/0dV0l8sgdXYMQVfvgozsiO/PostPoint?page-id=0%3A1&node-id=2-5&viewport=1230%2C362%2C0.43&t=UOnaP2cPHiir7URJ-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=167%3A405"
                        className='hover:-translate-y-1 transition-all '
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


                    <a href="https://www.figma.com/design/YIcuwfZuDTsMSbel0LFg00/SideJob?node-id=2-28&t=Fbhp3H7c8wW4Obzl-1"
                        className='hover:-translate-y-1 transition-all '
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
                                    PostPoint Application
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