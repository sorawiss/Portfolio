import React from 'react'

import Skill from "../sub-component/Skill";

function Project({ title, description, URL, github }) {
    return (
        <div className="p-6 rounded-xl border border-primary/10 hover:-translate-y-1 hover:border-primary/70 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
            <h3 className="text-xl font-bold mb-2"> {title} </h3>
            <p className="text-gray-400 mb-4">
                {description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Node.js", "ExpressJS", "Supabase", "Tailwind", "Render"].map((tech, key) => (
                    <Skill key={key} tech={tech} />
                ))}
            </div>

            <div className="flex gap-2 items-center">
                <a
                    href={URL}
                    className="text-primary hover:text-primary/40 transition-colors my-4"
                > View Project →
                </a>
                {github && (
                    <a href={github}
                        className="text-primary hover:text-primary/40 transition-colors my-4 "
                    >github</a>
                )}

            </div>
        </div>
    )
}

export default Project