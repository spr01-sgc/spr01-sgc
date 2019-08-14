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
 *Clase modelo para creación de la tabla giro
 * @author Jasmin Santana
 */
@Entity
@Table(name = "ct_giro")
public class Giro implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "giroid")
    private Integer giroid;
    @NotEmpty
    @Column(name = "nombre")
    private String nombre;

    public Integer getGiroid() {
        return giroid;
    }

    public void setGiroid(Integer giroid) {
        this.giroid = giroid;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    @Override
    public String toString() {
        return "Giro{" + "giroid=" + giroid + ", nombre=" + nombre + '}';
    }
    
}
