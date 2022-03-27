import React, { Component } from 'react';
import './MariShop.css'

export class MariShop extends Component {
    render() {
        return (
        <div>
            <ProductTable marketTable={marketTable}/>
        </div>
        );
    }
}


class ProductTable extends Component {
    render() {
        const rows = []
        this.props.marketTable.map((item) => 
            rows.push(<ProductRow item={item} />)
        );
        return (
            <table className='table'>
            <thead>
            <tr>
                <th>Price</th>
                <th>Product</th>
                <th>Quantity</th>
                <th>Verdict</th>
            </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
        );
    }
}

class ProductRow extends Component {
    render() {
        const item = this.props.item
        return (
            <tr key={item}>
                <td>
                    <form>
                        <input type="text" placeholder='Enter price in market'/>
                    </form>
                </td>
                <td className='td'>{item.name}</td>
                <td className='td'>Bundle of {item.quantity}</td>
                <td>
                    <span style={{color: 'green'}}>
                        Buy in mari
                    </span>
                </td>
            </tr>
        );
    }
}

const marketTable = [
    {
        name: "Guardian Stone",
        quantity: "10"
    },
    {
        name: "Destruction Stone",
        quantity: "10"
    }
];