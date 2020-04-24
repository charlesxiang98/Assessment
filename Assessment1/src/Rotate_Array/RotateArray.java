package Rotate_Array;

public class RotateArray {
		  public void solution(int[] A, int N, int K) {
		    K %= N;
		    reverse(A, 0, N - 1);
		    reverse(A, 0, K - 1);
		    reverse(A, K, N - 1);
			for(int i:A)
		    System.out.print(i+" ");
		  }
		  public void reverse(int[] A, int start, int end) {
		    while (start < end) {
		      int temp = A[start];
		      A[start] = A[end];
		      A[end] = temp;
		      start++;
		      end--;
		    }
		  }
		
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int [] A ={3,8,9,7,6};
		System.out.println("Initial array is:");
		for(int i:A)
		    System.out.print(i+" ");
		int K=3;
		RotateArray ra=new RotateArray();
		System.out.println("\nAfter rotating, the rotated array is:");
		ra.solution(A, 5, K);
		//A=RotateArray.rotate(A, K);
				
	}

}
