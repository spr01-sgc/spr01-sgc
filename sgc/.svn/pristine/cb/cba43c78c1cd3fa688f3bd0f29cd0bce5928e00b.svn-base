/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.soma.transmisor.model;

import java.io.Serializable;
import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import org.hibernate.validator.constraints.NotEmpty;

/**
 * @fecha 24/10/2017
 * @hora 12:10:17 PM
 * @empresa SOMA
 * @version 1.0
 * @correo sant.mar.1997@gmail.com
 * @author Jasmin Santana
 */
@Entity
@Table(name = "ct_valormoneda")
public class ValorMoneda implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "valormonedaid")
    private Integer valormonedaid;
    @Temporal(TemporalType.DATE)
    @Column(name = "fecha")
    private Date fecha;
    @NotEmpty
    @Column(name = "monto")
    private String monto;
    //getter and setter

    public Integer getValormonedaid() {
        return valormonedaid;
    }

    public void setValormonedaid(Integer valormonedaid) {
        this.valormonedaid = valormonedaid;
    }

    public Date getFecha() {
        return fecha;
    }

    public void setFecha(Date fecha) {
        this.fecha = fecha;
    }

    public String getMonto() {
        return monto;
    }

    public void setMonto(String monto) {
        this.monto = monto;
    }

    @Override
    public String toString() {
        return "ValorMoneda{" + "valormonedaid=" + valormonedaid + ", fecha=" + fecha + ", monto=" + monto + '}';
    }
    
}
