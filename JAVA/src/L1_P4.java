import java.util.Scanner;

public class L1_P4 {
    public static void main(String[] args) {
        float nilai;
        int pilihan=0;

        Scanner simpan = new Scanner(System.in);

        System.out.println("============");
        System.out.println("Pertemuan 4 ");
        System.out.println("============");

        System.out.println(" Masukan Nilai Akhir kamu : ");
        nilai = simpan.nextFloat();
        System.out.println("=============");

        if (nilai >= 80) {
            System.out.println("Nilai kamu : " +nilai);
            System.out.println("Grade kamu A");
        } else if (nilai >= 70) {
            System.out.println("Nilai kamu : " +nilai);
            System.out.println("Grade kamu B");
        } else if (nilai >= 60) {
            System.out.println("Nilai kamu : " +nilai);
            System.out.println("Grade kamu C");
        } else if (nilai >= 55) {
            System.out.println("Nilai kamu : " +nilai);
            System.out.println("Grade kamu D");
        } else {
            System.out.println("Nilai kamu : " +nilai);
            System.out.println("Grade kamu E");
        }
    }
}
