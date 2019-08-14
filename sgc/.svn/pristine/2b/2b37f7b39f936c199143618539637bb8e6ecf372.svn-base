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

/**
 * @fecha 24/10/2017
 * @hora 11:38:58 AM
 * @empresa SOMA
 * @version 1.0
 *@correo sant.mar.1997@gmail.com
 * @author Jasmin Santana
 */
@Entity
@Table(name = "ct_ciudad")
public class Ciudad implements Serializable{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ciudadid")
    private Integer ciudadid;
    @Column(name="claveciudad")
    private String claveciudad;
    @Column(name = "nombre")
    private String nombre;
    //relacion con Estado
    @ManyToOne(cascade = CascadeType.ALL)
    @ForeignKey(name = "estadoid_fk")
    private Estado estado;
    //getter and setter

    public Integer getCiudadid() {
        return ciudadid;
    }

    public void setCiudadid(Integer ciudadid) {
        this.ciudadid = ciudadid;
    }

    public String getClaveciudad() {
        return claveciudad;
    }

    public void setClaveciudad(String claveciudad) {
        this.claveciudad = claveciudad;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public Estado getEstado() {
        return estado;
    }

    public void setEstado(Estado estado) {
        this.estado = estado;
    }

    @Override
    public String toString() {
        return "Ciudad{" + "ciudadid=" + ciudadid + ", claveciudad=" + claveciudad + ", nombre=" + nombre + ", estado=" + estado + '}';
    }
    
}
