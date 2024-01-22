import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllCategories } from '../../Redux/Actions/Actions';

const NavBar = () => {
    const dispatch = useDispatch();
    const allCategories = useSelector((state) => state.allCategories);

    useEffect(() =>{
        dispatch(getAllCategories());
    }, [dispatch]);

    return (
    <div>
        {allCategories.map(category => (
            <Link key={category.id_category} to={`/products/${category.id_category}`}>
                <button>{category.name}</button>
            </Link>
        ))}
    </div>
    )
}

export default NavBar
