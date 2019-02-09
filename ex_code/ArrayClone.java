import java.util.*;

public class ArrayClone{
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int[] A = new int[6];
        int[] AC = new int[6];

        for(int i = 0; i<A.length; i++){
            A[i] = sc.nextInt();
        }

        System.out.println("A 배열 요소 출력 \n");

        for(int i = 0; i<A.length; i++){
            System.out.println(A[i]);
        }

        AC = A.clone();

        System.out.println("복사된 AC 배열 요소 출력 \n");

        for(int i = 0; i<AC.length; i++){
            System.out.println(AC[i]);
        }
        
        sc.close();
        
    }
} 