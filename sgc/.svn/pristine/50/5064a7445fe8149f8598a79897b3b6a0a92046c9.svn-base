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
 * @hora 10:23:20 AM
 * @empresa SOMA
 * @version 1.0
 *@correo sant.mar.1997@gmail.com
 * @author Jasmin Santana
 */
@Entity
@Table(name = "ct_estatususuario")
public class EstatusUsuario implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "estatususuarioid")
    private Integer estatususuarioid;
    @NotEmpty
    @Column(name = "nombre")
    private String nombre;
    @NotEmpty
    @Column(name = "descripcion")
    private String descripcion;
    //getter and setter

    public Integer getEstatususuarioid() {
        return estatususuarioid;
    }

    public void setEstatususuarioid(Integer estatususuarioid) {
        this.estatususuarioid = estatususuarioid;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    @Override
    public String toString() {
        return "EstatusUsuario{" + "estatususuarioid=" + estatususuarioid + ", nombre=" + nombre + ", descripcion=" + descripcion + '}';
    }
    

}
