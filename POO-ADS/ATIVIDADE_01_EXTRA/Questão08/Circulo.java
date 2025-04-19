package Questão08;

public class Circulo {
    double raio;
    double PI = 3.14;

    double calcular_area(){
        return PI * Math.pow(raio, 2);
    }

    double calcular_perimetro(){
        return 2 * PI * raio;
    }
}
