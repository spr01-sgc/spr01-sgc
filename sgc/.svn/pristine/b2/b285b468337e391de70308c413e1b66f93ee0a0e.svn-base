/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.soma.transmisor.service.impl;

import com.soma.transmisor.dao.DelitoDao;
import com.soma.transmisor.model.Delito;
import com.soma.transmisor.service.DelitoService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * Compruba la ejecucion de los metdos sehan correctos
 *
 * @author estadias2017-2
 */
@Service("delitoService")
@Transactional
public class DelitoServiceImpl implements DelitoService {

    @Autowired
    DelitoDao delitoDao;
    private boolean estadoMetodo = false;

    @Override
    public boolean update(Delito delito) {
        delitoDao.update(delito);
        return estadoMetodo = true;
    }

    @Override
    public boolean save(Delito delito) {
        delitoDao.save(delito);
        return estadoMetodo = true;
    }

    @Override
    public boolean delete(int delitoid) {
        
        delitoDao.delete(delitoid);
        return estadoMetodo = true;
    }

    @Override
    public Delito buscaId(int delitoid) {
        return  delitoDao.buscaId(delitoid);
    }

    @Override
    public List<Delito> showDelito() {
        return delitoDao.showDelito();
    }

}
