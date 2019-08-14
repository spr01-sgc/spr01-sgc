/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.soma.transmisor.model;

import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import org.hibernate.validator.constraints.NotEmpty;

/**
 * @fecha 24/10/2017
 * @hora 11:48:21 AM
 * @empresa SOMA
 * @version 1.0
 *@correo sant.mar.1997@gmail.com
 * @author Jasmin Santana
 */
@Entity
@Table(name = "ct_pais")
public class Pais implements Serializable{
     @Id 
   @GeneratedValue(strategy = GenerationType.IDENTITY)
   @Column(name = "paisid")
    private Integer estadoid;
   @NotEmpty
   @Column(name = "nombre")
    private String nombre;
 //getter and setter

    public Integer getEstadoid() {
        return estadoid;
    }

    public void setEstadoid(Integer estadoid) {
        this.estadoid = estadoid;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    @Override
    public String toString() {
        return "Pais{" + "estadoid=" + estadoid + ", nombre=" + nombre + '}';
    }
   
   
}
