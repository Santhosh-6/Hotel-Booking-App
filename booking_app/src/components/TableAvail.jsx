import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../css/tablestyle.css";

function TableAvail({ selectedDate, selectedTime, onSelectTable }) {
  const allTables = [1,2,3,4,5,6,7,8,9,10];

  const [availableTable, setAvailableTable] = useState([]);
  const [selectedTable, setSelectedTable] = useState(null);

  useEffect(() => {
const fetchBookedTables = async () => {
  try {
    const res = await axios.get("http://localhost:7000/bookings", {
      params: { date: selectedDate, time: selectedTime }
    });

    const data = Array.isArray(res.data) ? res.data : []; // 🔒 Safe fallback

    const bookedTables = data.map((b) => b.table);
    const available = allTables.filter((t) => !bookedTables.includes(t));
    setAvailableTable(available);
  } catch (err) {
    console.error("Error fetching bookings:", err);
    setAvailableTable([]);
  }
};

    if (selectedDate && selectedTime) {
      fetchBookedTables();
    }
  }, [selectedDate, selectedTime]);

   const handleClick=(table)=>{
    setSelectedTable(table);
    onSelectTable(table);
   };

  return (
    <div className='table-full'>
      <h4>Available Tables:</h4>
      <div className='single-t'>
        {availableTable.length===0 ? (
            <p>No Tables are Available at this time</p>
        ):(
            availableTable.map((table)=>(
                <button
                key={table} className={`t-btn ${selectedTable===table ? "selected":""}`}
                type='button' onClick={()=>handleClick(table)}
                >Table {table}</button>
            ))
        )}
      </div>
    </div>
  )
}

export default TableAvail
