interface FunctionalInterface{
	void sumPannu(int argument);
        void greaterNumber();
	
	
}
public class Main {

	public static void main(String[] args) {
		

		FunctionalInterface interfaceInstance = (int x)-> System.out.println(x+5);
		
		for(int i=0;i<11;i++)
		{
			interfaceInstance.sumPannu(i);
		}
		
	 
	}

}