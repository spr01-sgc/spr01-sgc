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
 * @fecha 20/10/2017
 * @hora 9:23:12 AM
 * @empresa SOMA
 * @version 1.0
 *@correo sant.mar.1997@gmail.com
 * @author Jasmin Santana
 */
@Entity
@Table(name="ct_delito")
public class Delito implements Serializable{
    @Id @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name = "delitoid")
	private Integer delitoid;
    @NotEmpty
	@Column(name="nombre")
	private String nombre;

    public Integer getDelitoid() {
        return delitoid;
    }

    public void setDelitoid(Integer delitoid) {
        this.delitoid = delitoid;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    @Override
    public String toString() {
        return "Delito{" + "delitoid=" + delitoid + ", nombre=" + nombre + '}';
    }

    
}
