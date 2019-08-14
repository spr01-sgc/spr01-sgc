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
 * @hora 12:15:37 PM
 * @empresa SOMA
 * @version 1.0
 * @correo sant.mar.1997@gmail.com
 * @author Jasmin Santana
 */
@Entity
@Table(name = "ct_tiposervicio")
public class TipoServicio implements Serializable{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "tiposervicioid")
    private Integer valormonedaid;
    @Column(name = "clave")
    private String clave;
    @Column(name = "descripcion")
    private String descripcion;
    //getter and setter

    public Integer getValormonedaid() {
        return valormonedaid;
    }

    public void setValormonedaid(Integer valormonedaid) {
        this.valormonedaid = valormonedaid;
    }

    public String getClave() {
        return clave;
    }

    public void setClave(String clave) {
        this.clave = clave;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    @Override
    public String toString() {
        return "TipoServicio{" + "valormonedaid=" + valormonedaid + ", clave=" + clave + ", descripcion=" + descripcion + '}';
    }
    
}
