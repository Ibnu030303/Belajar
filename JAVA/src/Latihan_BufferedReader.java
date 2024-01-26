import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.IOException;

public class Latihan_BufferedReader {
    public static void main(String[] args){

		BufferedReader dataIN = new BufferedReader( new InputStreamReader(System.in));
        String nama ="";
        System.out.print("Ketik nama anda : ");

		try{
        nama = dataIN.readLine();
		}

		catch ( IOException e ){
			System.out.println("Ada Kesalahan!");
		}

		System.out.println();
        System.out.println("Hai " + nama + "\nSelamat menjalankan ibadah puasa smile :) ");
    }
}