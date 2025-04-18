import React from 'react'

function Skill( {tech} ) {
    return (
        <span
            className="bg-blue-500/10 text-primary py-1 px-3 rounded-full text-sm hover:bg-primary/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
        >
            {tech}
        </span>
    )
}

export default Skill