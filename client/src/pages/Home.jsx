import React from 'react'
import Food from '../components/menuItam/Food'

function Home() {
    return (
        <div>
            <Food id={1}
imgSrc='https://assets.tmecosys.com/image/upload/t_web496x528/img/recipe/ras/Assets/0346a29a89ef229b1a0ff9697184f944/Derivates/cb5051204f4a4525c8b013c16418ae2904e737b7.jpg'
                name='Carbonara'
                ingredients='Pasta, Uova, Guanciale'
                price={15} />
            <Food id={1}
                imgSrc='https://assets.tmecosys.com/image/upload/t_web496x528/img/recipe/ras/Assets/0346a29a89ef229b1a0ff9697184f944/Derivates/cb5051204f4a4525c8b013c16418ae2904e737b7.jpg'
                name='Carbonara'
                ingredients='Pasta, Uova, Guanciale'
                price={15} />
        </div>
    )
}

export default Home