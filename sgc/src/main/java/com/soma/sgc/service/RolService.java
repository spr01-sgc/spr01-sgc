/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.soma.sgc.service;

import com.soma.sgc.model.RolUsuario;
import java.util.List;

/**
 *
 * @author Jasmin Santana
 */
public interface RolService {
   List<RolUsuario> showRol();
    RolUsuario buscarNombre(int rolid); 
}
