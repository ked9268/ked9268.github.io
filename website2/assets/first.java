import java.io.File;
import java.io.FileNotFoundException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;
public class first {
    public static void main(String[] args) {
                File file = new File("Desktop\\new drive\\website2\\assets");
                File delete = new File(file.toString() + "\\work.txt");
                List<String> printlist = new ArrayList<>();

                delete.delete();
                for(int i = 0;i < (file.list().length);i++){
                        String [] current = file.list();
                        File traverse = new File(file + "\\" +current[i]);
                        String [] print = traverse.list();
                        for (String element : print) {
                                String output = traverse.toString()+"\\"+ element.toString();
                                printlist.add(output);
                        }
                }
                System.out.println(printlist.toString());
                try{
                    PrintWriter record = new PrintWriter(file.toString()+"\\work.txt");
                    for(int i =0;i < (printlist.size());i++){
                        record.println(printlist.get(i));
                    }
                    record.close();
                }
                catch(FileNotFoundException e){

                }

    }
}
