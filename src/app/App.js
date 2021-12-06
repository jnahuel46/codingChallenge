import React, { Component } from 'react';

class App extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            description: '',
            image_url: '',
            price: '',
            _id: '',
            products: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.addProducts = this.addProducts.bind(this);
    }

    addProducts(e) {
        if (this.state._id) {
            fetch(`/api/products/${this.state._id}`, {
                method: 'PUT',
                body: JSON.stringify(this.state),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    M.toast({ html: 'Product Updated' });
                    this.setState({
                        name: '',
                        description: '',
                        image_url: '',
                        price: '',
                        _id: ''
                    });
                    this.fetchProducts();
                });
        } else {
            fetch('/api/products', {
                method: 'POST',
                body: JSON.stringify(this.state),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    M.toast({ html: 'Product Stored' });
                    this.setState({
                        name: '',
                        description: '',
                        image_url: '',
                        price: ''
                    });
                    this.fetchProducts();

                })
                .catch(err => console.error(err));
        }
        e.preventDefault();
    }
    componentDidMount() {
        this.fetchProducts();
    }

    fetchProducts() {
        fetch('/api/products')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                this.setState({ products: data });
                console.log(this.state.products);
            });
    }

    deleteProducts(id) {
        if (confirm('Are you sure you want to delete it?')) {
            fetch(`/api/products/${id}`, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    M.toast({ html: 'Product Deleted' });
                    this.fetchProducts();
                });

        }
    }

    editProducts(id) {
        fetch(`/api/products/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                this.setState({
                    name: data.name,
                    description: data.description,
                    image_url: data.image_url,
                    price: data.price,
                    _id: data._id
                })
            });

    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });

    }


    render() {
        return (
            <div>
                {/* NAVIGATION */}
                <nav className="light-blue darken-4">
                    <div className="container">
                        <div className="nav-wrapper">
                            <a href="/" className="brand-logo">Coding Challenge</a>
                        </div>
                    </div>
                </nav>

                <div className="container">
                    <div className="row">
                        <div className="col s3">
                            <div className="card">
                                <div className="card-content">
                                    <form onSubmit={this.addProducts}>
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <input name="name" onChange={this.handleChange} value={this.state.name} type="text" placeholder="Product Name" />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <textarea name="description" onChange={this.handleChange} value={this.state.description} cols="30" rows="10" placeholder="Product Description " className="materialize-textarea"></textarea>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <input name="image_url" onChange={this.handleChange} value={this.state.image_url} type="url" placeholder="Image URL" autoFocus />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <input name="price" onChange={this.handleChange} value={this.state.price} type="number" placeholder="Price" autoFocus />
                                            </div>
                                        </div>
                                        <button type="submit" className="btn light-blue darken-4">
                                            Send
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col s9">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Name</th>
                                        <th>Description</th>
                                        <th>Image</th>
                                        <th>Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.products.map(products => {
                                            return (
                                                <tr key={products._id}>
                                                    <td>{products._id}</td>
                                                    <td>{products.name}</td>
                                                    <td>{products.description}</td>
                                                    <td><img src={products.image_url} width="100" height="100"/></td>
                                                    <td>{products.price}</td>
                                                    <td>
                                                        <button onClick={() => this.deleteProducts(products._id)} className="btn light-blue darken-4" style={{ margin: '4px' }}>
                                                            <i className="material-icons">delete</i>
                                                        </button>
                                                        <button onClick={() => this.editProducts(products._id)} className="btn light-blue darken-4" style={{ margin: '4px' }}>
                                                            <i className="material-icons">edit</i>
                                                        </button>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>

            </div>
        )
    }

}

export default App;