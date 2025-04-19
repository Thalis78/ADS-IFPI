public class Q1059 {
  public static void main(String[] args){
      int numero = 1;
      while (true){
          if(numero % 2 == 0){
              System.out.println(numero);
          }if(numero > 100){
              break;
          }
          numero++;
      }
  }
}
