package AtvExtraQUESTAO06;

public class Retangulo {
    private double base;
    private double altura;

    public Retangulo(double base, double altura) {
        this.base = base;
        this.altura = altura;
    }

    public double calcularArea() {
        return base * altura;
    }

    public double calcularPerimetro() {
        return (2 * base) + (2 * altura);
    }

    public boolean ehQuadrado() {
        return base == altura;
    }

    public static void main(String[] args) {
        Retangulo retangulo = new Retangulo(2, 2);

        if (retangulo.ehQuadrado()) {
            System.out.println("Esse retângulo também é um quadrado.");
        } else {
            System.out.println("Esse retângulo não é um quadrado.");
        }
    }
}
