import React from 'react';

const ItemStatusFilter = () => {
  return (
    <div className="btn-group">
      <button 
        type="button" 
        className="btn btn-info"
      >All</button>
      <button 
        type="button" 
        className="btn btn-default"
      >Active</button>
      <button 
        type="button" 
        className="btn btn-default"
      >Done</button>
    </div>
  )
}

export default ItemStatusFilter;
