import { readFileSync} from 'fs';

export function Palavras(){
    const lista = readFileSync('ArquivoTexto.txt', 'utf-8');
    let listaDePalavras = lista.split(/[ .!?,\s]+/).filter(palavra => palavra !== '');
    return listaDePalavras;
}