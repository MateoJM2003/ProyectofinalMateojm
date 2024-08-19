import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { TitleComponent } from '../../components/TitleComponent';
import { BodyComponent } from '../../components/BodyComponent';
import { CardProduct } from './components/CardProduct';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { PRIMARY_COLOR, SECUNDARY_COLOR } from '../../commons/constants';
import { styles } from '../../theme/appTheme';
import { ModalCar } from './components/ModalCar';
import { TouchableOpacity } from 'react-native-gesture-handler';








//interface - producto
export interface Product {
    id: number;
    name: string;
    price: number;
    stock: number;
    pathImage: string;
}

//interface - arreglo del carrito de compras
export interface Car {
    id: number;
    name: string;
    price: number;
    totalQuantity: number;
}

export const HomeScreen = () => {
    //arreglo de productos
    const products: Product[] = [
        { id: 1, name: 'Pupos nike JR.', price: 90.50, stock: 5, pathImage: 'https://guayaquilpupos.com/wp-content/uploads/2023/09/WhatsApp-Image-2023-09-19-at-10.21.30-PM-1.jpeg' },
        { id: 2, name: 'Micros nike JR', price: 70.00, stock: 5, pathImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq8kUukve27GyMKt_93_tC9fT-75ruor9oRA&s' },
        { id: 3, name: 'Balon de futbol', price: 50.00, stock: 6, pathImage: 'https://www.megamaxi.com/wp-content/uploads/2024/08/items2Figm2F1000x10002F197639062537-1.jpg' },
        { id: 4, name: 'Balon de basket', price: 45.80, stock: 7, pathImage: 'https://www.aki.com.ec/wp-content/uploads/2024/01/840101181600-updtimgs-01-2024-3.jpg' },
        { id: 5, name: 'Bicicleta', price: 75.24, stock: 3, pathImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkMkC9IZy4uPG70bdeZBRBB8oraKGBJx_VRA&s' },
        { id: 6, name: 'Guantes de box', price: 35.00, stock: 6, pathImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0H3inln5dmnxb_hf_ZTqQGuUM7Llu5Bn63A&s' },
        { id: 7, name: 'Bicicleta estatica', price: 120.80, stock: 7, pathImage: 'https://novicompu.vtexassets.com/arquivos/ids/168583/1DSM186.jpg?v=638331815236800000' },
        { id: 8, name: 'Barra multifuncional', price: 35.60, stock: 3, pathImage: 'https://sdmed.cl/wp-content/uploads/2017/10/6-10-600x600.jpg' },
    ];

    
    //hook useState: manipular el estado del arreglo de productos
    const [productsState, setProductsState] = useState(products);

    //hook useSate: manipulas el estado del arreglo del carrito de compras
    const [car, setCar] = useState<Car[]>([]);

    //hook useState: manipular la visualización del modal
    const [showModal, setShowModal] = useState<boolean>(false);

    //función para actualizar el stock de productos
    const changeStockProduct = (idProduct: number, quantity: number) => {
        //generar un nuevo arreglo con las actualizaciones del stock
        const updateStock = productsState.map(product => product.id === idProduct
            ? { ...product, stock: product.stock - quantity }
            : product);
        //Actualizar el productsState
        setProductsState(updateStock);
        //llamar la función para agregar al carrito
        addProduct(idProduct, quantity);
    }

    //función para agregar los productos al carrito
    const addProduct = (idProduct: number, quantity: number) => {
        //Buscar el producto que se agregará en el carrito
        const product = productsState.find(product => product.id === idProduct);
        //Controlar si el producto no ha sido encontrado
        if (!product) {
            return;
        }
        //Si el producto ha sido encontrado - generar nuevo objeto producto
        const newProductCar: Car = {
            id: product.id,
            name: product.name,
            price: product.price,
            totalQuantity: quantity
        }
        //Agregar en el arreglo del carrito
        setCar([...car, newProductCar]);
        //console.log(car);
    }



    return (
        <View>
            <View style={styles.contentHeaderHome}>
                <TitleComponent title='Productos' />
                <View style={styles.iconCardHome}>
                    <Text style={styles.textIconCard}>{car.length}</Text>
                    
                    <TouchableOpacity
                        onPress={() => {
                            if (car.length > 0) {
                                setShowModal(!showModal);
                            }
                        }}
                        disabled={car.length === 0}
                    >
                        <Icon
                            name='shopping-cart'
                            size={33}
                            color={SECUNDARY_COLOR}
                        />
                    </TouchableOpacity>

                </View>
            </View>
            <BodyComponent>
                <FlatList
                    data={productsState}
                    renderItem={({ item }) => <CardProduct product={item} changeStockProduct={changeStockProduct} />}
                    keyExtractor={item => item.id.toString()} />
            </BodyComponent>
            <ModalCar isVisible={showModal} car={car} setShowModal={() => setShowModal(!showModal)} />
        </View>
    )
}