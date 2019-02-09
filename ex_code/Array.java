import java.util.*;

public class Array{
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int[] A = new int[6];

        for(int i = 0; i<A.length; i++){
            A[i] = sc.nextInt();
        }

        System.out.println("결과 출력 \n");

        for(int i = 0; i<A.length; i++){
            System.out.println(A[i]);
        }
        
        sc.close();
        
    }
} 