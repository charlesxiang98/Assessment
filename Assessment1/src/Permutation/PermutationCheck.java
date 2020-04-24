package Permutation;
import java.util.HashMap;
import java.util.Map;
public class PermutationCheck {
	  private static final int MAX_NGTH = 100000;

	   int solution(int[] A,int N) {
	    Map<Integer, Boolean> hashMap = new HashMap<Integer, Boolean>();
	    
	    if (N > MAX_NGTH) {
	      return -1;
	    }
	    long actSum = 0;
	    long expSum = N * (N + 1) / 2; // sum(1, 2, .. n) => n(n+1)/2
	    for (int a : A) {
	      actSum = actSum + a;
	      Boolean isThere = hashMap.get(a);
	      if (isThere == null) {
	        hashMap.put(a, true);
	      } else {
	        return 0;
	      }
	    }
	    return actSum == expSum ? 1 : 0;
	  }
	  public static void main(String[] args) {
		  int [] A= {4,1,3,2};
		  PermutationCheck pc=new PermutationCheck();
		  System.out.println("[4,1,3,2] is permutation, "+"because return is "+pc.solution(A,4));
		  int [] B= {4,1,3};
		  PermutationCheck pc1=new PermutationCheck();
		  System.out.println("[4,1,3] is not permutation, "+"because return is "+pc1.solution(B,3));
	  }
	}
