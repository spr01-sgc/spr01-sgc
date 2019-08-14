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
import org.hibernate.validator.constraints.NotEmpty;

/**
 * @fecha 24/10/2017
 * @hora 11:52:48 AM
 * @empresa SOMA
 * @version 1.0
 * @correo sant.mar.1997@gmail.com
 * @author Jasmin Santana
 */
@Entity
@Table(name = "ct_monedadivisa")
public class MonedaDivisa implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "monedadivisaid")
    private Integer monedadivisaid;
    @NotEmpty
    @Column(name = "clave")
    private String clave;
    @NotEmpty
    @Column(name = "nombremoneda")
    private String nombremoneda;
    //relacion con pais
    @ManyToOne(cascade = CascadeType.ALL)
    @ForeignKey(name = "paisid_fk")
    private Pais pais;
    //getter and setter

    public Integer getMonedadivisaid() {
        return monedadivisaid;
    }

    public void setMonedadivisaid(Integer monedadivisaid) {
        this.monedadivisaid = monedadivisaid;
    }

    public String getClave() {
        return clave;
    }

    public void setClave(String clave) {
        this.clave = clave;
    }

    public String getNombremoneda() {
        return nombremoneda;
    }

    public void setNombremoneda(String nombremoneda) {
        this.nombremoneda = nombremoneda;
    }

    public Pais getPais() {
        return pais;
    }

    public void setPais(Pais pais) {
        this.pais = pais;
    }

    @Override
    public String toString() {
        return "MonedaDivisa{" + "monedadivisaid=" + monedadivisaid + ", clave=" + clave + ", nombremoneda=" + nombremoneda + ", pais=" + pais + '}';
    }
    
}
