import { StyleSheet } from "react-native";
import { INPUT_COLOR, PRIMARY_COLOR, SECUNDARY_COLOR } from "../commons/constants";

//Gestionar los estilos
export const styles = StyleSheet.create({
    globalTitle: {
        color: SECUNDARY_COLOR,
        fontSize: 27,
        paddingHorizontal: 30,
        paddingVertical: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        borderWidth: 2,
        borderRightWidth: 3,
        borderLeftWidth: 3


    },
    contentBody: {
        backgroundColor: SECUNDARY_COLOR,
        paddingHorizontal: 35,
        paddingTop: 70,
        marginTop: -40,
        borderWidth: 2,
        borderRightWidth: 3,
        borderLeftWidth: 3,
        






    },
    titleHeaderBody: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
        


    

    },
    textBody: {
        fontSize: 16,
        textAlign: 'center',
        marginTop: -20,
        



    },
    inputText: {
        backgroundColor: INPUT_COLOR,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 100, 
        borderCurve: 'circular',
        borderWidth: 2,
        borderRightWidth: 2,
        borderLeftWidth: 2,

    },
    contentInput: {
        marginTop: 30,
        borderColor: 'black',
        borderRadius: 10,
    gap:20,
    
    

    },
    button: {
        backgroundColor: PRIMARY_COLOR,
        paddingVertical: 15,
        borderRadius: 100,
        marginTop: 50,
        borderWidth: 2,
        borderRightWidth: 2,
        borderLeftWidth: 2,
        margin: 60

        
    },
    buttonText: {
        color: SECUNDARY_COLOR,
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
        borderLeftColor: 'black',

        
    },
    iconPassword: {
        position: 'absolute',
        right: 20,
        zIndex: 1,
        marginTop: 12,
        color: '#246ba0'
    },
    textRedirection: {
        marginTop: 1,
        fontSize: 16,
        color: PRIMARY_COLOR,
        fontWeight: 'bold',
        textAlign: 'center',

        
    },
    contentCard: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 7,
        borderStyle: 'solid',
        borderColor: '#95b0c3',
        borderWidth: 3,
        borderRadius: 15,
        marginBottom: 20,
    
    },
    titleCard: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 15
    },
    imageCard: {
        width: 70,
        height: 70
    },
    iconCard: {
        flex: 100,
        alignItems: 'flex-end'
    },
    contentPrincipal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    contentModal: {
        padding: 50,
        backgroundColor: SECUNDARY_COLOR,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    headModal: {
        flexDirection: 'row',
        borderBottomColor: '#ccc',
        borderBottomWidth: 2,
        padding: 10
    },
    titleModal: {
        fontSize: 18,
        color: '#000',
        fontWeight: 'bold'
    },
    imageModal: {
        width: 200,
        height: 200,
    },
    contentQuantity: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonQuantity: {
        width: 50,
        height: 50,
        borderRadius: 100,
        backgroundColor: PRIMARY_COLOR,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 15
    },
    textButtonQuantity: {
        color: SECUNDARY_COLOR,
        fontSize: 20,
        fontWeight: 'bold'
    },
    textQuantity: {
        fontSize: 20,
        color: '#000',
        textAlign: 'center'
    },
    buttonAddCar: {
        marginTop: 15,
        backgroundColor: PRIMARY_COLOR,
        borderRadius: 5,
        paddingVertical: 10,
        alignItems: 'center'
    },
    textButtonAddCar: {
        color: SECUNDARY_COLOR,
        fontWeight: 'bold'
    },
    messageStock: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#a92424',
        textAlign: 'center'
    },
    contentHeaderHome: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    iconCardHome: {
        flex: 1,
        alignItems: 'flex-end',
        paddingHorizontal: 33
    },
    textIconCard: {
        backgroundColor: SECUNDARY_COLOR,
        borderRadius: 20,
        paddingHorizontal: 5,
        fontSize: 13,
        fontWeight: 'bold'
    },
    headerTable: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    headerInformation: {
        flexDirection: 'row',
    },
    textInformation: {
        fontWeight: 'bold',
        color: '#000'
    },
    textTotalPay: {
        marginTop: 7,
        fontSize: 16,
        fontWeight: 'bold'
    },
    image: {
        width: 250,
        height: 200,
        marginHorizontal: 'auto',
        marginVertical: 50,
    },

    tituloRegistro: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',

    },

    textRegistro :{
        fontSize: 20,
        textAlign: 'center',
        marginTop: 30,

    },


    contentInputRegistro: {
        marginTop: 50,
        borderColor: 'black',
        borderRadius: 10,
    gap:20,

    }

});