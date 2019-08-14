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
 * @hora 11:16:12 AM
 * @empresa SOMA
 * @version 1.0
 *@correo sant.mar.1997@gmail.com
 * @author Jasmin Santana
 */
@Entity
@Table(name = "ct_tipoident")
public class TipoIdentidad implements Serializable{
   @Id
   @GeneratedValue(strategy = GenerationType.IDENTITY)
   @Column(name = "identificacionid")
    private Integer identificacionid;
   @Column(name = "nombre")
    private String nombre;
   //getter and setter

    public Integer getIdentificacionid() {
        return identificacionid;
    }

    public void setIdentificacionid(Integer identificacionid) {
        this.identificacionid = identificacionid;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    @Override
    public String toString() {
        return "TipoIdentidad{" + "identificacionid=" + identificacionid + ", nombre=" + nombre + '}';
    }
   
    
}
