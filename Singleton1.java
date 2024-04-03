/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package singleton;

/**
 *
 * @author Muhammad Saad
 */
public class Singleton1 {
    private static Singleton1 instance;
    private int value;

    private Singleton1() {
        // Private constructor to prevent instantiation
    }

    public static Singleton1 get() {
        // Singleton getInstance method
        if (instance == null) {
            instance = new Singleton1();
        }
        return instance;
    }

    public static void destruct() {
        // Singleton destruct method
        instance = null;
    }

    // Existing interface methods
    public int getValue() {
        return value;
    }

    public void setValue(int value_) {
        value = value_;
    }
}
