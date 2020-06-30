import React from 'react'

export default function Feature({f}) {
    return (
        <div>
            {
                f.map((e,i) => (
                    <p key={i}>-{e}</p>
                ))
            }
        </div>
    )
}
