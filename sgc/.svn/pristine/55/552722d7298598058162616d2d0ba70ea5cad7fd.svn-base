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
 * @hora 10:35:15 AM
 * @empresa SOMA
 * @version 1.0
 *@correo sant.mar.1997@gmail.com
 * @author Jasmin Santana
 */
@Entity
@Table(name = "ct_sexo")
public class Sexo implements Serializable{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "sexoid")
    private Integer sexoid;
    @NotEmpty
    @Column(name="descripcion")
    private String descripcion;
    //getter and setter

    public Integer getSexoid() {
        return sexoid;
    }

    public void setSexoid(Integer sexoid) {
        this.sexoid = sexoid;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    @Override
    public String toString() {
        return "Sexo{" + "sexoid=" + sexoid + ", descripcion=" + descripcion + '}';
    }
    
    
}
