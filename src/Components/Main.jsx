import React, { useState } from 'react'
import { CiSearch, CiShoppingCart } from 'react-icons/ci'
import watch from '../assets/watch.jpg'
import laptop from '../assets/laptop.jpg'
import keyboard from '../assets/keyboard.jpg'
import sunGlass from '../assets/glasses.jpeg'
import leatherWatch from '../assets/leatherWatch.jpg'
import mouse from '../assets/mouse.jpg'
import monitor from '../assets/monitor.jpg'
const Main = () => {
    let Products = [
        {
            img: sunGlass,
            title: 'Lentes de sol',
            description: 'Lentes de sol, armazon de plastico',
            price: 40
        },
        {
            img: keyboard,
            title: 'Teclado Logitech',
            description: 'Teclado gamer inalambrico',
            price: 70
        },
        {
            img: watch,
            title: 'Apple Watch',
            description: 'Apple Watch, Segunda Genereción',
            price: 990
        },
        {
            img: mouse,
            title: 'Mouse Negro',
            description: 'Mouse con cable usb',
            price: 30
        },
        {
            img: laptop,
            title: 'Laptop Accer',
            description: 'Procesador I5 de decima generación',
            price: 999
        },
        {
            img: leatherWatch,
            title: 'Reloj de marca',
            description: 'Reloj de la marca tissot',
            price: 880
        },
        {
            img: monitor,
            title: 'Monitor Asus',
            description: '24 pulgadas 75hz de pantalla',
            price: 40
        },
        {
            img: sunGlass,
            title: 'Anteojos de sol',
            description: 'anteojos de la marca Gucci',
            price: 40
        },
        {
            img: mouse,
            title: 'Mouse',
            description: 'mouse inalambrico con 5hs de bateria',
            price: 40
        },
        {
            img: leatherWatch,
            title: 'Reloj',
            description: 'reloj mecanico sobrio',
            price: 40
        },
    ]
    const [filteredProducts, setFilteredProducts] = useState(Products)
    const searchHandler = (e) => {
        const filteredArray = Products.filter((product) => product.title.toLocaleLowerCase().includes(e.target.value))
        if (filteredArray.length != 0) {
            setFilteredProducts(filteredArray);
        }
    }
    return (
        <div className='w-full relative'>
            <div className='sticky top-0 z-10'>
                <div className='header flex justify-between items-center p-4 bg-white'>
                    <h1 className='text-3xl font-bold'>Tienda Online</h1>
                    <div className="search flex justify-between items-center px-5 py-2 bg-gray-100 rounded">
                        <input type="text" placeholder='Search product' className='bg-transparent outline-0'
                            onChange={searchHandler} />
                        <button onClick={() => searchHandler()}><CiSearch /></button>
                    </div>
                </div>
                <div className="categories bg-white w-full flex justify-between space-x-8 px-2 py-10">
                    <div className='bg-black text-white px-5 py-2 rounded-full drop-shadow-xl'>
                        <p>Relojes</p>
                    </div>
                    <div className='bg-white border px-5 py-2 rounded-full drop-shadow-xl'>
                        <p>Laptops</p>
                    </div>
                    <div className='bg-white border px-5 py-2 rounded-full drop-shadow-xl'>
                        <p>Monitores</p>
                    </div>
                    <div className='bg-white border px-4 py-2 rounded-full drop-shadow-xl'>
                        <p>Mouses</p>
                    </div>
                    <div className='bg-white border px-4 py-2 rounded-full drop-shadow-xl'>
                        <p>Anteojos</p>
                    </div>
                    <div className='bg-white border px-4 py-2 rounded-full drop-shadow-xl'>
                        <p>Teclados</p>
                    </div>
                    <div className='bg-white border px-4 py-2 rounded-full drop-shadow-xl'>
                        <p>Cables</p>
                    </div>
                    <div className='bg-white border px-4 py-2 rounded-full drop-shadow-xl'>
                        <p>Auriculares</p>
                    </div>
                    <div className='bg-white border px-4 py-2 rounded-full drop-shadow-xl'>
                        <p>Perifericos</p>
                    </div>
                    <div className='bg-white border px-4 py-2 rounded-full drop-shadow-xl'>
                        <p>Apple</p>
                    </div>
                    <div className='bg-white border px-4 py-2 rounded-full drop-shadow-xl'>
                        <p>Routers</p>
                    </div>
                    <div className='bg-white px-5 py-2 rounded-full drop-shadow-xl'>
                        <p>Placas</p>
                    </div>
                    <div className='bg-white border px-4 py-2 rounded-full drop-shadow-xl'>
                        <p>Procesadores</p>
                    </div>
                    <div className='bg-white border px-4 py-2 rounded-full drop-shadow-xl'>
                        <p>Mouses</p>
                    </div>
                </div>
            </div>
            <div className="products grid grid-cols-2 xl:grid-cols-5 lg:grid-cols-3 gap-9 p-4 z-20">
                {filteredProducts && filteredProducts.map((product, idx) => {
                    return (
                        <div key={idx} className="product h-[300px] bg-white drop-shadow-2xl p-2 border">
                            <img src={product.img} alt="" className='w-full h-[60%] object-cover p-2' />
                            <div className='m-2 bg-gray-100 p-2'>
                                <h1 className='text-xl font-semibold'>{product.title}</h1>
                                <p className='text-sm'>{product.description}</p>
                                <div className='flex justify-between items-center'>
                                    <p className='text-xl font-bold'>${product.price}.00</p>
                                    <CiShoppingCart size={'1.4rem'} />
                                </div>
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default Main