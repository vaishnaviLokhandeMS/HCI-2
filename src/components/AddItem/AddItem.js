import React from 'react';
import './AddItem.css';

const AddItem = () => {
    return (
        <div className="add-item">
            <Header />
            <Body />
            <Footer />
        </div>
    );
};

const Header = () => {
    return (
        <header className="add-item-header">
            <h1>Add New Item</h1>
        </header>
    );
};

const Body = () => {
    return (
        <main className="add-item-body">
            <form>
                <div className="form-group">
                    <label htmlFor="itemName">Item Name:</label>
                    <input type="text" id="itemName" name="itemName" required />
                </div>
                <div className="form-group">
                    <label htmlFor="itemDescription">Description:</label>
                    <textarea id="itemDescription" name="itemDescription" required></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="itemPrice">Price:</label>
                    <input type="number" id="itemPrice" name="itemPrice" required />
                </div>
                <button type="submit">Add Item</button>
            </form>
        </main>
    );
};

const Footer = () => {
    return (
        <footer className="add-item-footer">
            <p>&copy; 2024 BrightFuture University. All rights reserved.</p>
        </footer>
    );
};

export default AddItem;
