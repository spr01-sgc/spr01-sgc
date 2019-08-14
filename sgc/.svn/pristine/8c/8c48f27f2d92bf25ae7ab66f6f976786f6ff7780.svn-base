/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.soma.transmisor.model;

import java.io.Serializable;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import org.hibernate.annotations.ForeignKey;
import org.hibernate.validator.constraints.NotEmpty;

/**
 * @fecha 24/10/2017
 * @hora 11:43:28 AM
 * @empresa SOMA
 * @version 1.0
 *@correo sant.mar.1997@gmail.com
 * @author Jasmin Santana
 */
@Entity
@Table(name = "ct_estado")
public class Estado implements Serializable{
   @Id
   @GeneratedValue(strategy = GenerationType.IDENTITY)
   @Column(name = "estadoid")
    private Integer estadoid;
   @NotEmpty
   @Column(name = "nombre")
    private String nombre;
   //relacion con pais
    @ManyToOne(cascade = CascadeType.ALL)
    @ForeignKey(name = "paisid_fk")
    private Pais pais;
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

    public Pais getPais() {
        return pais;
    }

    public void setPais(Pais pais) {
        this.pais = pais;
    }

    @Override
    public String toString() {
        return "Estado{" + "estadoid=" + estadoid + ", nombre=" + nombre + ", pais=" + pais + '}';
    }
    
}
