interface Especificacoes {
    marca: string;
    modelo: string;
    placaDeVideo: string;
    memoria: string;
    processador: string;
    armazenamento: string;
    [extra: string]: string | number | boolean;
}

let computador: Especificacoes = {
    marca: 'Dell',
    modelo: 'Inspiron 15 3000',
    placaDeVideo: 'Intel UHD Graphics 620',
    memoria: '8 GB',
    processador: 'Intel Core i5',
    armazenamento: '256 GB SSD',
    bluetooth: true,
    hdmi: true,
};

console.log(computador);
