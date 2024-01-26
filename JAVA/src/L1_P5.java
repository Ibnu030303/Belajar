import java.util.Scanner;

public class L1_P5 {
    public static void main(String[] args) {

        System.out.println("Ibnu Nurdiyansa ");
        System.out.println("211011400455\n");

        Scanner input = new Scanner(System.in);
        String username, password ;
        int pilihan;
        double jarak, waktu, kecepatan;
        
            System.out.print("Masukkan username: ");
            username = input.nextLine();
    
            if (username.equals("admin")) {
                System.out.print("Masukkan password: ");
                password = input.nextLine();
                if (password.equals("admin123")) {

                    // Program yang pertemuan sebelumnya mencari kecepatan, jarak, dan waktu 

                        System.out.println("Pilih yang ingin di lakukan : ");
                        System.out.println("1. Menghitung Kecepatan");
                        System.out.println("2. Menghitung Jarak");
                        System.out.println("3. Menghitung Waktu");
                        System.out.println("Masukan Pilihan : ");
                        pilihan = input.nextInt();

                        switch (pilihan){
                            case 1:
                                System.out.print("Masukan jarak : ");
                                jarak = input.nextDouble();
                                System.out.print("Masukan waktu : ");
                                waktu = input.nextDouble();

                                kecepatan = jarak / waktu;
                                System.out.println("Kecepatanya adalah : " +kecepatan+ "km/jam");
                                break;
                            case 2:
                                System.out.print("Masukan Kecepatan : ");
                                kecepatan = input.nextDouble();
                                System.out.print("Masukan Waktu : ");
                                waktu = input.nextDouble();

                                jarak = kecepatan * waktu ;
                                System.out.println("Jarak yang di tempuh adalah : " +jarak+ "km");
                                break;
                            case 3:
                                System.out.print("Masukan Jarak : ");
                                jarak = input.nextDouble();
                                System.out.print("Masukan Kecepatan : ");
                                kecepatan = input.nextDouble();

                                waktu = jarak / kecepatan ;
                                System.out.println("Waktu yang di tempuh adalah : " +waktu+ "jam");
                                break;
                            default:
                                System.out.println("Pilihan tidak tersedia");
                                break;
                        }
                    // end program
                    
                } else {
                    System.out.println("password salah");
                }
            } else {
                System.out.println("Username salah!");
            }
    }
}
