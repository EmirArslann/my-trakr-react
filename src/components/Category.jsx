import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Category(props) {
  const [categoryName, setCategoryName] = useState('');
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios.get('/categories').then((res) => {
      console.log('res', res.data);
      
      setCategories(res.data);
    });
  }, []);
  const createCategory = () => {
    // const newCategory = {
    //   id: categories.length + 1,
    //   name: categoryName,
    // };
    axios
      .post('/categories', { newCategory:categoryName })
      .then((res) => {
        console.log('res', res);
        setCategories([...categories, {...res.data}]);
      })
      .catch((err) => console.log('err', err));
    // const newCategories = [...categories, newCategory];
    // setCategories(newCategories);
  };
  return (
    <div>
      <label htmlFor='category'>Category:</label>
      <select name='category' onChange={props.handleChange} defaultValue=''>
        <option value=''>Select a category</option>
        {categories.map((category) => (
          <option key={category.id} value={category.name}>
            {category.name}
          </option>
        ))}
      </select>
      <input
        type='text'
        value={categoryName}
        onChange={(e) => setCategoryName(e.target.value)}
      />
      <button type='button' onClick={createCategory}>
        Add category
      </button>
    </div>
  );
}
