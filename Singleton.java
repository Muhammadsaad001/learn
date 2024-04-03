/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package singleton;

/**
 *
 * @author Muhammad Saad
 */
public class Singleton {

    /**
     * @param args the command line arguments
     */
   public static void main(String[] args) {
        Singleton1.get().setValue(42);
        System.out.println("value=" + Singleton1.get().getValue());
        Singleton1.destruct();
    }
    
}
