import AsyncStorage from "@react-native-async-storage/async-storage";

const key = 'deputados';

const add = async (deputado) => {
    try {
        await AsyncStorage.setItem(key, JSON.stringify(deputado))
    } catch(err) {
        console.log(err);
    }
}

const getAll = async () => {
    try {
        const savedDeputados = await AsyncStorage.getItem(key)
        const currentDeputados = JSON.parse(savedDeputados)
        console.log(currentDeputados)
    }
    catch(err) {
        console.log(err)
    }
}

export {
    add,
    getAll
}