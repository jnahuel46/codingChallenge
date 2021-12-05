import React, { Component } from 'react';

class App extends Component {
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
                                    <form onSubmit={this.addTask}>
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <input name="name" /*onChange={this.handleChange} value={this.state.name}*/ type="text" placeholder="Product Name" />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <textarea name="description" /*onChange={this.handleChange} value={this.state.description}*/ cols="30" rows="10" placeholder="Product Description " className="materialize-textarea"></textarea>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <input name="image_url" /*onChange={this.handleChange} value={this.state.image_url}*/ type="text" placeholder="Image URL" autoFocus />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <input name="price" /*onChange={this.handleChange} value={this.state.price}*/ type="number" placeholder="Task Title" autoFocus />
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

                        </div>
                    </div>
                </div>

            </div>
        )
    }

}

export default App;