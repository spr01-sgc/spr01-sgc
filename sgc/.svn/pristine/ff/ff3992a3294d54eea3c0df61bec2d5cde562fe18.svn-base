/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.soma.transmisor.dao.impl;

import com.soma.transmisor.dao.AccionDao;
import com.soma.transmisor.dao.HibernateDao;
import com.soma.transmisor.model.Accion;
import org.hibernate.Criteria;
import org.hibernate.criterion.Restrictions;
import org.springframework.stereotype.Repository;

/**
 *
 * @author Jasmin Santana
 */
@Repository("accionDao")
public class AccionDaoImpl  extends HibernateDao<Integer, Accion> implements AccionDao {

    @Override
    public Accion buscaId(int accionid) {
   //BUscar y traer el id
        Criteria crit = creaCriteria();
        crit.add(Restrictions.eq("accionid", accionid));
        Accion accion= (Accion) crit.uniqueResult();
        return accion;
    }

    
}

