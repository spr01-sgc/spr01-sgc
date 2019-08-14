/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.soma.transmisor.controller;

import com.soma.transmisor.model.Accion;
import com.soma.transmisor.model.BitaAccionesUsuario;
import com.soma.transmisor.model.Usuario;
import com.soma.transmisor.service.AccionService;
import com.soma.transmisor.service.BitaAccionesUsuarioService;
import com.soma.transmisor.service.UsuarioService;
import java.util.Date;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationTrustResolver;
import org.springframework.security.authentication.AuthenticationTrustResolverImpl;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 *
 * @author Jasmin Santana
 */
@Controller
@RequestMapping("/")
public class Bitacora {

    @Autowired
    UsuarioService usuarioService;

    @Autowired
    BitaAccionesUsuarioService bitaAccionesUsuarioService;

    @Autowired
    AccionService accionService;

    /*metodo para insertar a Bitacora Usuario Acciones */
    public String bitacoraAcciones(String metodo, Usuario usuarioid) {
        if (!estaUsuarioAnonimo()) {
            BitaAccionesUsuario bitaAcc = new BitaAccionesUsuario();
            Date fechaHora = new Date();
            //Trae el usuario que ha inciado sesion
            //Usuario usuarioid = usuarioService.busquedaNinckname(usuarioEnSesion());
            //del usuario se trae el id
            //  usuarioid.getUsuarioid();

            /* Usuario estatusUsuarioid = usuarioService.busquedaNinckname(usuarioEnSesion());
        estatusUsuarioid.getEstatusUsuario().getEstatususuarioid();*/
            int accionid = 0;

            //dependiendo el metodo ejecutado se pasa el id de la accion realizada
            if (metodo == "login") {
                accionid = 1;
            } else if (metodo == "agregarDelito") {
                accionid = 2;
            } else if (metodo == "actualizarDelito") {
                accionid = 3;
            } else if (metodo == "eliminarDelito") {
                accionid = 4;
            }
            //se hace el insert a la tabla bitacoraAccionesUsuario
            Accion accion = accionService.buscaId(accionid);
            accion.getAccionid();
            bitaAcc.setUsuario(usuarioid);
            bitaAcc.setFechaHora(fechaHora);
            bitaAcc.setAccion(accion);
            if (bitaAccionesUsuarioService.save(bitaAcc)) {
                return "exito";
            } else {
                return "error";
            }
        }
        return "login";
    }

    /**
     * Este metodo verificara que un usuario este autenticado correctamente
     */
    private boolean estaUsuarioAnonimo() {
        final Authentication autenticacion = SecurityContextHolder.getContext().getAuthentication();

        AuthenticationTrustResolver authenticationTrustResolver = new AuthenticationTrustResolverImpl();
        return authenticationTrustResolver.isAnonymous(autenticacion);
    }
    /**
     * Este metodo traera de la sesion iniciada.
     *
     * @return
     *
     * public String usuarioEnSesion() {
     *
     * Object principal =
     * SecurityContextHolder.getContext().getAuthentication().getPrincipal();
     *
     * String nicknamePrincipal = null;
     *
     * if (principal instanceof UserDetails) { //Es igual al usuario que esta en
     * sesion return nicknamePrincipal = ((UserDetails)
     * principal).getUsername(); } else { //Es igual a usuario anonimo return
     * nicknamePrincipal = principal.toString(); } }
     */

}
