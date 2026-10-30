import React, { useState } from 'react'

const Home = () => {
    console.log('Home renderinig ....')

    return (
        <div>Home</div>
    )
}
// export default React.memo(Home, (prevProps, nextProps) => {

//     return prevProps.user.id === nextProps.user.id
// });

export default React.memo(Home)