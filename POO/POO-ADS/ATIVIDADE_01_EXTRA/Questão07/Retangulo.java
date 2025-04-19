package Questão07;

public class Retangulo {
    double lado01;
    double lado02;

    double calcular_area(){
        return this.lado01 * this.lado02;
    }
    double calcular_perimetro(){
        return (this.lado01*2) + (this.lado02*2);
    }
}
