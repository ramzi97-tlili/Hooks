import React from 'react'

function Page  (props)  {
    
    return (
    
    <div>
        <iframe width= "1100" height="600" src={props.src} title="youtube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <div> <a href="./">Back</a></div>
    </div>
    )
}
export default Page