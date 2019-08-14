/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.soma.transmisor.service.impl;

import com.soma.transmisor.dao.GiroDao;
import com.soma.transmisor.model.Giro;
import com.soma.transmisor.service.GiroService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 *
 * @author Jasmin Santana
 */
@Service("giroService")
@Transactional
public class GiroServiceImpl implements GiroService {

    @Autowired
    GiroDao giroDao;
    //indica el estado del metodo
    private boolean estadoMetodo = false;

    @Override
    public boolean update(Giro giro) {
        giroDao.update(giro);
        return estadoMetodo = true;
    }

    @Override
    public boolean save(Giro giro) {
        giroDao.save(giro);
        return estadoMetodo = true;
    }

    @Override
    public boolean delete(int giroid) {
        giroDao.delete(giroid);
        return estadoMetodo = true;
    }

    @Override
    public Giro buscaId(int giroid) {

        return giroDao.buscaId(giroid);
    }

    @Override
    public List<Giro> showGiro() {
        return giroDao.showGiro();
    }

}
