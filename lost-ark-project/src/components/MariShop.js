import React, { Component } from 'react';
import './MariShop.css'

export class MariShop extends Component {
    render() {
        return (
        <div>
            <FilterableProductTable />
        </div>
        );
    }
}

class FilterableProductTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText: '',
            crystalPrice: 0
        };

        this.handleFilterChange = this.handleFilterChange.bind(this);
        this.handlePriceChange = this.handlePriceChange.bind(this);
    }

    handleFilterChange(newText) {
        this.setState({
            filterText: newText
        });
    }

    handlePriceChange(newPrice) {
        this.setState({
            crystalPrice: newPrice
        }); 
    }

    render() {
        return(
            <div>
                <InputForm 
                    filterText={this.state.filterText}
                    crystalPrice={this.state.crystalPrice}
                    onFilterChange={this.handleFilterChange}
                    onPriceChange={this.handlePriceChange}
                />
                <ProductTable 
                    itemTable={itemTable} 
                    filterText={this.state.filterText}
                    crystalPrice={this.state.crystalPrice}
                />
            </div>
        );
    }

    

}

class ProductTable extends Component {
    render() {
        const filterText = this.props.filterText
        const crystalPrice = this.props.crystalPrice

        const rows = []

        this.props.itemTable.forEach(item => {
            if (item.name.toLowerCase().includes(filterText.toLowerCase())) {
                rows.push(<ProductRow item={item} crystalPrice={crystalPrice} />)
            }
        });

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
    constructor(props) {
        super(props);
        this.state = {
            price: 0
        }

        this.handlePriceChange = this.handlePriceChange.bind(this);
    }

    handlePriceChange(e) {
        this.setState({
            price: e.target.value
        })
    }

    render() {
        const item = this.props.item
        const mariPrice = MariPrice(item.mariPrice, item.mariQuantity, this.props.crystalPrice)
        const marketPrice = MarketPrice(item.marketQuantity, this.state.price)

        const mariVerdict = <span style={{color: 'green'}}>
                                Buy in mari
                            </span>

        const marketVerdict =   <span style={{color: 'red'}}>
                                    Buy in market
                                </span>

        const verdict = (mariPrice > marketPrice) ? marketVerdict : mariVerdict
        return (
            <tr key={item.name}>
                <td>
                    <form>
                        <input type="number" placeholder='Enter price in market' onChange={this.handlePriceChange} />
                    </form>
                </td>
                <td className='td'>{item.name}</td>
                <td className='td'>Bundle of {item.marketQuantity}</td>
                <td>
                    {verdict}
                </td>
            </tr>
        );
    }
}

class InputForm extends Component {
    constructor(props) {
        super(props);
        this.handleFilterChange = this.handleFilterChange.bind(this);
        this.handlePriceChange = this.handlePriceChange.bind(this);
    }

    handleFilterChange(e) {
        this.props.onFilterChange(e.target.value);
    }

    handlePriceChange(e) {
        this.props.onPriceChange(e.target.value);
    }

    render() {
        return (
            <form>
                <input 
                    className='filter' 
                    type="text" 
                    placeholder='Filter by name...' 
                    onChange={this.handleFilterChange} 
                />
                <input 
                    className='crystal' 
                    type="number" 
                    placeholder='Crystal price' 
                    onChange={this.handlePriceChange} 
                />
            </form>
        );
    }
}

function GoldPerCrystal(cost) {
    return (parseInt(cost) / 95)
}

function MarketPrice(quantity, marketPrice) {
    return (parseInt(marketPrice) / parseInt(quantity))
}

function MariPrice(price, quantity, gold) {
    const gpc = GoldPerCrystal(gold)
    return (parseInt(price) / parseInt(quantity)) * gpc
}

const itemTable = [
    {
        name: "Guardian Stone",
        marketQuantity: 10,
        mariPrice: 800,
        mariQuantity: 240
    },
    {
        name: "Destruction Stone",
        marketQuantity: 10,
        mariPrice: 400,
        mariQuantity: 160
    }
];