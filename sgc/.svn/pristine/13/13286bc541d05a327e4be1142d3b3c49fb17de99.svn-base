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
 * @hora 12:01:48 PM
 * @empresa SOMA
 * @version 1.0
 * @correo sant.mar.1997@gmail.com
 * @author Jasmin Santana
 */
@Entity
@Table(name = "ct_instrumentomonetario")
public class InstrumentoMonetario implements Serializable{
     @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "instmonetarioid")
    private Integer instmonetarioid;
    @NotEmpty
    @Column(name = "clave")
    private String clave;
    @Column(name = "nombre")
    private String nombre;
    //getter and setter

    public Integer getInstmonetarioid() {
        return instmonetarioid;
    }

    public void setInstmonetarioid(Integer instmonetarioid) {
        this.instmonetarioid = instmonetarioid;
    }

    public String getClave() {
        return clave;
    }

    public void setClave(String clave) {
        this.clave = clave;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    @Override
    public String toString() {
        return "InstrumentoMonetario{" + "instmonetarioid=" + instmonetarioid + ", clave=" + clave + ", nombre=" + nombre + '}';
    }
    
    
}
