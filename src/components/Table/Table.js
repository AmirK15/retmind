import React, {useEffect, useState} from 'react';
import axios from 'axios'
import './table.scss'

const Table = () => {
    const [shops, setShops] = useState([])

    useEffect(() => {
        axios('http://localhost:8080/shops')
            .then(({data}) => setShops(data))
    }, [])

    return (
        <table className='table'>
            <thead className='table__head'>
            <tr>
                <th>Shops</th>
                <th>JUN</th>
                <th>JUN</th>
                <th>JUN</th>
                <th>JUN</th>
                <th>JUN</th>
                <th>JUN</th>
                <th>JUN</th>
                <th>JUN</th>
                <th>JUN</th>
                <th>JUN</th>
                <th>JUN</th>
                <th>JUN</th>
                <th>JUN</th>
                {/*{shops[0]?.months.map(item => (*/}
                {/*    <th key={item.id}>{item.name}</th>*/}
                {/*))}*/}
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>Store 1</td>
                <td>
                    <input type="number"/>
                </td>
                <td>
                    <input type="number"/>
                </td>
                <td>
                    <input type="number"/>
                </td>
                <td>
                    <input type="number"/>
                </td>
                <td>
                    <input type="number"/>
                </td>
                <td>
                    <input type="number"/>
                </td>
                <td>
                    <input type="number"/>
                </td>
                <td>
                    <input type="number"/>
                </td>
                <td>
                    <input type="number"/>
                </td>
                <td>
                    <input type="number"/>
                </td>
                <td>
                    <input type="number"/>
                </td>
                <td>
                    <input type="number"/>
                </td>
            </tr>
            <tr>
                <td>Store 1</td>
                <td>
                    <input type="number"/>
                </td>
                <td>
                    <input type="number"/>
                </td>
                <td>
                    <input type="number"/>
                </td>
                <td>
                    <input type="number"/>
                </td>
                <td>
                    <input type="number"/>
                </td>
                <td>
                    <input type="number"/>
                </td>
                <td>
                    <input type="number"/>
                </td>
                <td>
                    <input type="number"/>
                </td>
                <td>
                    <input type="number"/>
                </td>
                <td>
                    <input type="number"/>
                </td>
                <td>
                    <input type="number"/>
                </td>
                <td>
                    <input type="number"/>
                </td>
            </tr>
            <tr>
                <td>Store 1</td>
                <td>
                    <input type="number"/>
                </td>
                <td>
                    <input type="number"/>
                </td>
                <td>
                    <input type="number"/>
                </td>
                <td>
                    <input type="number"/>
                </td>
                <td>
                    <input type="number"/>
                </td>
                <td>
                    <input type="number"/>
                </td>
                <td>
                    <input type="number"/>
                </td>
                <td>
                    <input type="number"/>
                </td>
                <td>
                    <input type="number"/>
                </td>
                <td>
                    <input type="number"/>
                </td>
                <td>
                    <input type="number"/>
                </td>
                <td>
                    <input type="number"/>
                </td>
            </tr>
            <tr>
                <td>Store 1</td>
                <td>
                    <input type="number"/>
                </td>
                <td>
                    <input type="number"/>
                </td>
                <td>
                    <input type="number"/>
                </td>
                <td>
                    <input type="number"/>
                </td>
                <td>
                    <input type="number"/>
                </td>
                <td>
                    <input type="number"/>
                </td>
                <td>
                    <input type="number"/>
                </td>
                <td>
                    <input type="number"/>
                </td>
                <td>
                    <input type="number"/>
                </td>
                <td>
                    <input type="number"/>
                </td>
                <td>
                    <input type="number"/>
                </td>
                <td>
                    <input type="number"/>
                </td>
            </tr>
            <tr>
                <td>Store 1</td>
                <td>
                    <input type="number"/>
                </td>
                <td>
                    <input type="number"/>
                </td>
                <td>
                    <input type="number"/>
                </td>
                <td>
                    <input type="number"/>
                </td>
                <td>
                    <input type="number"/>
                </td>
                <td>
                    <input type="number"/>
                </td>
                <td>
                    <input type="number"/>
                </td>
                <td>
                    <input type="number"/>
                </td>
                <td>
                    <input type="number"/>
                </td>
                <td>
                    <input type="number"/>
                </td>
                <td>
                    <input type="number"/>
                </td>
                <td>
                    <input type="number"/>
                </td>
            </tr>
            <tr>
                <td>Store 1</td>
                <td>
                    <input type="number"/>
                </td>
                <td>
                    <input type="number"/>
                </td>
                <td>
                    <input type="number"/>
                </td>
                <td>
                    <input type="number"/>
                </td>
                <td>
                    <input type="number"/>
                </td>
                <td>
                    <input type="number"/>
                </td>
                <td>
                    <input type="number"/>
                </td>
                <td>
                    <input type="number"/>
                </td>
                <td>
                    <input type="number"/>
                </td>
                <td>
                    <input type="number"/>
                </td>
                <td>
                    <input type="number"/>
                </td>
                <td>
                    <input type="number"/>
                </td>
            </tr>
            <tr>
                <td>Store 1</td>
                <td>
                    <input type="number"/>
                </td>
                <td>
                    <input type="number"/>
                </td>
                <td>
                    <input type="number"/>
                </td>
                <td>
                    <input type="number"/>
                </td>
                <td>
                    <input type="number"/>
                </td>
                <td>
                    <input type="number"/>
                </td>
                <td>
                    <input type="number"/>
                </td>
                <td>
                    <input type="number"/>
                </td>
                <td>
                    <input type="number"/>
                </td>
                <td>
                    <input type="number"/>
                </td>
                <td>
                    <input type="number"/>
                </td>
                <td>
                    <input type="number"/>
                </td>
            </tr>
            <tr>
                <td>Store 1</td>
                <td>
                    <input type="number"/>
                </td>
                <td>
                    <input type="number"/>
                </td>
                <td>
                    <input type="number"/>
                </td>
                <td>
                    <input type="number"/>
                </td>
                <td>
                    <input type="number"/>
                </td>
                <td>
                    <input type="number"/>
                </td>
                <td>
                    <input type="number"/>
                </td>
                <td>
                    <input type="number"/>
                </td>
                <td>
                    <input type="number"/>
                </td>
                <td>
                    <input type="number"/>
                </td>
                <td>
                    <input type="number"/>
                </td>
                <td>
                    <input type="number"/>
                </td>
            </tr>
            <tr>
                <td>Store 1</td>
                <td>
                    <input type="number"/>
                </td>
                <td>
                    <input type="number"/>
                </td>
                <td>
                    <input type="number"/>
                </td>
                <td>
                    <input type="number"/>
                </td>
                <td>
                    <input type="number"/>
                </td>
                <td>
                    <input type="number"/>
                </td>
                <td>
                    <input type="number"/>
                </td>
                <td>
                    <input type="number"/>
                </td>
                <td>
                    <input type="number"/>
                </td>
                <td>
                    <input type="number"/>
                </td>
                <td>
                    <input type="number"/>
                </td>
                <td>
                    <input type="number"/>
                </td>
            </tr>
            <tr>
                <td>Store 1</td>
                <td>
                    <input type="number"/>
                </td>
                <td>
                    <input type="number"/>
                </td>
                <td>
                    <input type="number"/>
                </td>
                <td>
                    <input type="number"/>
                </td>
                <td>
                    <input type="number"/>
                </td>
                <td>
                    <input type="number"/>
                </td>
                <td>
                    <input type="number"/>
                </td>
                <td>
                    <input type="number"/>
                </td>
                <td>
                    <input type="number"/>
                </td>
                <td>
                    <input type="number"/>
                </td>
                <td>
                    <input type="number"/>
                </td>
                <td>
                    <input type="number"/>
                </td>
            </tr>
            <tr>
                <td>Store 1</td>
                <td>
                    <input type="number"/>
                </td>
                <td>
                    <input type="number"/>
                </td>
                <td>
                    <input type="number"/>
                </td>
                <td>
                    <input type="number"/>
                </td>
                <td>
                    <input type="number"/>
                </td>
                <td>
                    <input type="number"/>
                </td>
                <td>
                    <input type="number"/>
                </td>
                <td>
                    <input type="number"/>
                </td>
                <td>
                    <input type="number"/>
                </td>
                <td>
                    <input type="number"/>
                </td>
                <td>
                    <input type="number"/>
                </td>
                <td>
                    <input type="number"/>
                </td>
            </tr>
            <tr>
                <td>Store 1</td>
                <td>
                    <input type="number"/>
                </td>
                <td>
                    <input type="number"/>
                </td>
                <td>
                    <input type="number"/>
                </td>
                <td>
                    <input type="number"/>
                </td>
                <td>
                    <input type="number"/>
                </td>
                <td>
                    <input type="number"/>
                </td>
                <td>
                    <input type="number"/>
                </td>
                <td>
                    <input type="number"/>
                </td>
                <td>
                    <input type="number"/>
                </td>
                <td>
                    <input type="number"/>
                </td>
                <td>
                    <input type="number"/>
                </td>
                <td>
                    <input type="number"/>
                </td>
            </tr>
            <tr>
                <td>Store 1</td>
                <td>
                    <input type="number"/>
                </td>
                <td>
                    <input type="number"/>
                </td>
                <td>
                    <input type="number"/>
                </td>
                <td>
                    <input type="number"/>
                </td>
                <td>
                    <input type="number"/>
                </td>
                <td>
                    <input type="number"/>
                </td>
                <td>
                    <input type="number"/>
                </td>
                <td>
                    <input type="number"/>
                </td>
                <td>
                    <input type="number"/>
                </td>
                <td>
                    <input type="number"/>
                </td>
                <td>
                    <input type="number"/>
                </td>
                <td>
                    <input type="number"/>
                </td>
            </tr>
            {/*{shops.map((item, idx) => (*/}
            {/*    <tr key={idx}>*/}
            {/*        <td>{item.store.name}</td>*/}
            {/*        {item.months.map(month => (*/}
            {/*            <td key={month.id}>*/}
            {/*                <input*/}
            {/*                    type="number"*/}
            {/*                    // value={}*/}
            {/*                />*/}
            {/*            </td>*/}
            {/*        ))}*/}
            {/*    </tr>*/}
            {/*))}*/}
            </tbody>
        </table>
    );
};

export default Table;