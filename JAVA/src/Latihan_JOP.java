import javax.swing.JOptionPane;

public class Latihan_JOP{
	public static void main (String[] args){
		String nama ="";
		nama =JOptionPane.showInputDialog("Ketik nama anda : ");

		String msg = "Hello " + nama +"\nSelamat Hari Raya Idul fitri";

		JOptionPane.showMessageDialog(null, msg);
	}
}