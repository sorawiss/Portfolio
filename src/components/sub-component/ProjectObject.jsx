import React from 'react'

import Skill from "../sub-component/Skill";

function Project({ title, description, URL, github, skill }) {
    return (
        <div className="p-6 rounded-xl border border-primary/20 hover:-translate-y-1 hover:border-primary/60 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
            <h3 className="text-xl font-bold mb-2"> {title} </h3>
            <p className="text-gray-400 mb-4">
                {description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
                {skill && skill.map((items, index) => (
                    <Skill key={items} tech={items} />
                ))}
            </div>

            <div className="flex gap-2 items-center">
                <a
                    href={URL}
                    target='_blank'
                    className="text-primary hover:text-primary/40 transition-colors my-4"
                > View Project →
                </a>
                {github && (
                    <a href={github}
                        target='_blank'
                        className="text-primary hover:text-primary/40 transition-colors my-4 "
                    >github</a>
                )}

            </div>
        </div>
    )
}

export default Project