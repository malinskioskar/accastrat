/* eslint-disable */
import mongoose from 'mongoose';

const DB_NAME = 'accastrategy';

const DB_URL = `mongodb://127.0.0.1:27017/${DB_NAME}`;

class Database {
    constructor() {
        this.databaseInstance = null;
        this.productsCollection = null;
    }

    init() {
        return new Promise((resolve, reject) => {
            mongoose.connect(DB_URL, { useNewUrlParser: true })
                .then((client) => {
                    console.log('Connected correctly to MongoDB server.');

                    this.databaseInstance = client.db(DB_NAME);
                    this.productsCollection = this.databaseInstance.collection('products');

                    resolve();
                })
                .catch((error) => {
                    if (error) {
                        reject(error);
                    }
                });
        });
    }

    fetch() {
        console.log('fetch');
        const products = [];
        const productsCursor = this.productsCollection.find({});

        productsCursor.on('data', (product) => {
            console.log('product found!: ', product);
            products.push(product);
        });

        return new Promise((resolve) => {
            productsCursor.on('end', () => {
                console.log('will resolve with products: ', products);
                resolve(products);
            });
        });
    }
}

export default Database;
