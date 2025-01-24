import React, { useState } from 'react';

const Spreadsheet = () => {
    const [data, setData] = useState(Array(10).fill(Array(10).fill('')));

    const handleCellChange = (rowIndex, colIndex, value) => {
        const updatedData = [...data];
        updatedData[rowIndex][colIndex] = value;
        setData(updatedData);
    };

    return (
        <table border="1">
            <tbody>
                {data.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        {row.map((cell, colIndex) => (
                            <td key={colIndex}>
                                <input
                                    value={cell}
                                    onChange={(e) => handleCellChange(rowIndex, colIndex, e.target.value)}
                                />
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Spreadsheet;
