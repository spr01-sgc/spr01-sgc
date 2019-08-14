/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.soma.transmisor.service.impl;

import com.soma.transmisor.dao.AccionDao;
import com.soma.transmisor.model.Accion;
import com.soma.transmisor.model.EstatusUsuario;
import com.soma.transmisor.service.AccionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 *
 * @author Jasmin Santana
 */
@Service("accionService")
@Transactional
public class AccionServiceImpl implements AccionService{

    @Autowired
    AccionDao accionDao;
    @Override
    public Accion buscaId(int accionid) {
         return accionDao.buscaId(accionid);
        
    }

    
}
