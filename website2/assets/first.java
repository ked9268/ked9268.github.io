import java.io.*;
import java.nio.*;
import java.util.*;
public class first {
    public static void main(String[] args) {
                File file = new File("Desktop\\new drive\\website2\\assets");    
                File delete = new File(file.toString() + "\\work.txt");
                List<String> printlist = new ArrayList<String>();
                
                delete.delete();         
                for(int i = 0;i < (file.list().length);i++){
                        String [] current = file.list(); 
                        File traverse = new File(file + "\\" +current[i]);
                        String [] print = traverse.list();
                        for(int f = 0;f < print.length; f++){
                                String output = traverse.toString()+"\\"+ print[f].toString();
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
