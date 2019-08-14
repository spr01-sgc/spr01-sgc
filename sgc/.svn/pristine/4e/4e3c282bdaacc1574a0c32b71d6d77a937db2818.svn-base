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
 * @hora 11:01:19 AM
 * @empresa SOMA
 * @version 1.0
 *@correo sant.mar.1997@gmail.com
 * @author Jasmin Santana
 */
@Entity
@Table(name = "ct_actividadeco")
public class ActividadEco implements Serializable{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="actividadid")
    private Integer actividadid;
    @NotEmpty
    @Column(name="claveae")
    private String claveae;
    @NotEmpty
    @Column(name="nombre")
    private String nombre;
    //getter and setter

    public Integer getActividadid() {
        return actividadid;
    }

    public void setActividadid(Integer actividadid) {
        this.actividadid = actividadid;
    }

    public String getClaveae() {
        return claveae;
    }

    public void setClaveae(String claveae) {
        this.claveae = claveae;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    @Override
    public String toString() {
        return "ActividadEco{" + "actividadid=" + actividadid + ", claveae=" + claveae + ", nombre=" + nombre + '}';
    }
    
    
}
