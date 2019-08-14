/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.soma.transmisor.dao.impl;

import com.soma.transmisor.dao.DelitoDao;
import com.soma.transmisor.dao.HibernateDao;
import com.soma.transmisor.model.Delito;
import java.util.List;
import org.hibernate.Criteria;
import org.hibernate.criterion.Restrictions;
import org.springframework.stereotype.Repository;

/**
 *
 * @author Jasmin Santana
 */
@Repository("delitoDao")
public class DelitoDaoImpl extends HibernateDao<Integer, Delito> implements DelitoDao {

    @Override
    public void save(Delito delito) {
        //guarda lo que trae del arreglo
        guardar(delito);
        //mandar a consola
        System.out.print(DelitoDaoImpl.class + "Se ha guardado correctamente el delito" + delito.toString());

    }

    @Override
    public void delete(int delitoid) {
        //Elimina por id del delito 
        Criteria crit = creaCriteria();
        crit.add(Restrictions.eq("delitoid", delitoid));
        Delito deli = (Delito) crit.uniqueResult();
        eliminar(deli);
        System.out.print(DelitoDaoImpl.class + "Se ha eliminado correctamente el delito" + delitoid);
    }

    @Override
    public void update(Delito delito) {
        actualizar(delito);
        System.out.print(DelitoDaoImpl.class + "Se ha actualizado correctamente el delito" + delito.toString());
    }

    @Override
    public Delito buscaId(int delitoid) {
        System.out.println(DelitoDaoImpl.class + "\nBuscando Delito por usuarioId: " + delitoid);
        Delito delito = getPorId(delitoid);
        return delito;
    }

    @Override
    public List<Delito> showDelito() {
        //criterias consultas a la base de datso
        Criteria criteria = creaCriteria();
        //indicar que no traiga datos repetidos
        criteria.setResultTransformer(Criteria.DISTINCT_ROOT_ENTITY);
        //lista los delitos sin repetir algun dato
        List<Delito> lDelito = criteria.list();
        return lDelito;
    }

}
