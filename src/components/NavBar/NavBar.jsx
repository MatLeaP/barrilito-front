import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllCategories } from '../../Redux/Actions/Actions';
import "./NavBar.css"

const NavBar = () => {
    const dispatch = useDispatch();
    const allCategories = useSelector((state) => state.allCategories);

    useEffect(() =>{
        dispatch(getAllCategories());
    }, [dispatch]);

    return (
    <div className='nav'>
        <div>
        <Link to="/" className='navIcon'><img src="https://i.pinimg.com/550x/61/a3/61/61a3613ff87ec38432b7607123b87c2d.jpg" alt="" /></Link>
             {allCategories.map(category => (
            <Link key={category.id_category} to={`/products/${category.id_category}`}>
                <button>{category.name}</button>
            </Link>
        ))}
        <Link to='/cart'>
                <button>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4sMhvU39qY3Zc4j9F7O6wsSZxHfm-vqIedQ&usqp=CAU" alt="" className='cartImg' />
                </button>
        </Link>
        </div>
       
    </div>
    )
}

export default NavBar
