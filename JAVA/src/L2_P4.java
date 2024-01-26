import java.util.Scanner;

import javax.rmi.CORBA.Util;

public class L2_P4 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int pilihan;
        double jarak, waktu, kecepatan;

        System.out.println("Pilih yang ingin di lakukan : ");
        System.out.println("1. Menghitung Kecepatan");
        System.out.println("2. Menghitung Jarak");
        System.out.println("3. Menghitung Waktu");
        System.out.println("Masukan Pilihan : ");
        pilihan = input.nextInt();

        switch (pilihan){
            case 1:
                System.out.println("Masukan jarak : ");
                jarak = input.nextDouble();
                System.out.println("Masukan waktu : ");
                waktu = input.nextDouble();

                kecepatan = jarak / waktu;
                System.out.println("Kecepatanya adalah : " +kecepatan+ "km/jam");
                break;
            case 2:
                System.out.println("Masukan Kecepatan");
                kecepatan = input.nextDouble();
                System.out.println("Masukan Waktu : ");
                waktu = input.nextDouble();

                jarak = kecepatan * waktu ;
                System.out.println("Jarak yang di tempuh adalah : " +jarak+ "km");
                break;
            case 3:
                System.out.println("Masukan Jarak : ");
                jarak = input.nextDouble();
                System.out.println("Masukan Kecepatan : ");
                kecepatan = input.nextDouble();

                waktu = jarak / kecepatan ;
                System.out.println("Waktu yang di tempuh adalah : " +waktu+ "jam");
                break;
            default:
                System.out.println("Pilihan tidak tersedia");
                break;
        }
    }
}
