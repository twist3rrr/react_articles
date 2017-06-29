import React from 'react';

export default function FilterForm(props) {
  const handleEmailChange = (e) => {
    props.changeFilterValue(e.target.value);
  };

  return (
    <div className="filter-bar">
      <input type="text" placeholder="email" onChange={handleEmailChange}/>
    </div>
  );
};
