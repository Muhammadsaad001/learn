/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package FactoryMethod;

/**
 *
 * @author Mukhtiar
 */
public class SquareGeometry extends Geometery{

	@Override
	public Shape createShape() {
		return new Square();
	}

}