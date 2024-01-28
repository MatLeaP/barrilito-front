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
    <div>
        <div>
        <Link to="/" className='navIcon'><img src="https://i.pinimg.com/550x/61/a3/61/61a3613ff87ec38432b7607123b87c2d.jpg" alt="" /></Link>
             {allCategories.map(category => (
            <Link key={category.id_category} to={`/products/${category.id_category}`}>
                <button>{category.name}</button>
            </Link>
        ))}
        </div>
       
    </div>
    )
}

export default NavBar
