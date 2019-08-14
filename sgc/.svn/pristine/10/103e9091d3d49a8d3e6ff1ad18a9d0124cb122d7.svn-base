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

/**
 * @fecha 24/10/2017
 * @hora 10:25:12 AM
 * @empresa SOMA
 * @version 1.0
 *@correo sant.mar.1997@gmail.com
 * @author Jasmin Santana
 */
@Entity
@Table(name = "ct_accion")
public class Accion implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "accionid")
    private Integer accionid;

    @Column(name = "descripcion")
    private String descripcion;
    //getter and setter

    public Integer getAccionid() {
        return accionid;
    }

    public void setAccionid(Integer accionid) {
        this.accionid = accionid;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    @Override
    public String toString() {
        return "Accion{" + "accionid=" + accionid + ", descripcion=" + descripcion + '}';
    }
    

}
