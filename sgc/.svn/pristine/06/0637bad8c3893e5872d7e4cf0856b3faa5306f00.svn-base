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
 * @hora 11:20:12 AM
 * @empresa SOMA
 * @version 1.0
 *@correo sant.mar.1997@gmail.com
 * @author Jasmin Santana
 */
@Entity
@Table(name = "ct_parentesco")
public class Parentesco  implements Serializable{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "parentescoid")
    private Integer parentescoid;
    @NotEmpty
    @Column(name = "descripcion")
    private String descripcion;
    //getter and setter

    public Integer getParentescoid() {
        return parentescoid;
    }

    public void setParentescoid(Integer parentescoid) {
        this.parentescoid = parentescoid;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    @Override
    public String toString() {
        return "Parentesco{" + "parentescoid=" + parentescoid + ", descripcion=" + descripcion + '}';
    }
    
}
