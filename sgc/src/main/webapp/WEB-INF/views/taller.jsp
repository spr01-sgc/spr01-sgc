<%-- 
    Document   : taller
    Created on : 8/08/2019, 12:21:41 PM
    Author     : HASANI
--%>

<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>

<%@include file="index.jsp" %>
<script src="<c:url value='/assets/js/pages/taller.js'/>" type="text/javascript"></script>
<br />
<br />
<br />
<div class="container">   
    <div class="panel-group">
        <div class="panel panel-primary">
            <div class="panel-heading">Listado de Talleres</div>
            <div id="contenidoPantalla" class="panel-body">        
                <div class="row">
                    <div class="form-group">
                        <div class="btn btn-group">
                            <button id="agregarT" class="btn btn-info" onclick="btnTaller();" > 
                                <span class="glyphicon glyphicon-plus"></span>Agregar Taller</button>
                        </div>
                        <input type="hidden" name="${_csrf.parameterName}"
                               value="${_csrf.token}" />
                        <input type="text" class="form-control pull-right" style="width:20%" 
                               id="search" onkeyup="busquedaTbl('tableTaller');" placeholder="Busqueda">
                    </div>
                    <!-- Listado de talleres -->
                    <div  class="col-md-12">
                        <div class="table-responsive">
                            <table id="tableTaller" class="table table-striped">
                                <thead>
                                    <tr> 
                                        <th style="display:none">IDTaller</th>
                                        <th>No</th>
                                        <th>Taller</th>
                                        <th>Dirección</th>
                                        <th>Numero-Ex</th>
                                        <th>Actualizar</th>
                                        <th>Eliminar</th>
                                    </tr>
                                </thead>
                                <tbody id="bodytabla">
                                    <c:forEach items="${ltaller}" var="taller" varStatus="count"> 
                                        <tr>                               

                                            <td id="notaller">${count.count}</td>
                                            <td style="display:none" >${taller.idtaller}</td> 
                                            <td>${taller.nombre}</td>
                                            <td>${taller.direccion}</td>
                                            <td>${taller.numeroEx}</td>
                                            <td><button id="mostrarT" onclick="eliminar_actualizar_taller();" class="btn btn-warning">
                                                    <span class="glyphicon glyphicon-pencil"></span> </button></td>
                                            <!-- Eliminar -->
                                            <td><button id="eliminaT" onclick="eliminar_actualizar_taller();"  class="btn btn-danger">
                                                    <span class="glyphicon glyphicon-remove"></span> </button></td>
                                        </tr>
                                    </c:forEach>
                                </tbody>
                            </table>
                        </div>           
                    </div>
                </div><!-- row-->
            </div><!--class body -->
        </div><!-- panel-primary-->
    </div>  <!-- panel-group-->  
</div><!--class container -->


<div class="container">
    <!-- Modal -->
    <div class="modal fade" id="myModal" role="dialog" data-backdrop="static" 
         data-keyboard="false">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h3>Fomulario Para Administrar Talleres</h3>
                </div>
                <div class="modal-body">
                    <!--Formulario para agregar taller -->
                    <form class="form-horizontal"  modelAttribute="user" id="frmTaller">
                        <div class="form-group">
                            <label class="control-label col-sm-2" for="nombreT">Nombre Taller:<b style="color: red" title="Campo Requerido">*</b></label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" id="nombreT" placeholder="Ingrese alias" onchange="verificarTaller();"required>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-sm-2" for="direccionT">Dirección Taller:<b style="color: red" title="Campo Requerido">*</b></label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" id="direccionT" placeholder="Av. Norte" >
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-sm-2" for="numeroEx">Número Exterior:<b style="color: red" title="Campo Requerido">*</b></label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" id="numeroEx" placeholder="125 - A" >
                            </div>
                        </div>
                        <div class="form-group">                                       
                            <div class="col-sm-10">
                                <input type="text"  style="display:none" class="form-control" id="idtaller" >
                            </div>
                        </div>
                    </form> 
                </div><!--modal body-->
                <div class="modal-footer">
                    <div class="form-group">
                        <button id="guardarT" type="button" class="btn btn-success" onclick="agregarTaller();">Guardar</button>
                        <button id="actualizarT" onclick="actualizarTaller();" class="btn btn-primary" >Actualizar</button>
                        <a id="taller" href="<c:url value='/taller'/>"><button type="button" class="btn btn-default" onclick="limpiarForm('frmTaller');">Cerrar</button></a>

                    </div>
                </div><!--modal footer-->
            </div><!--modal6-container-->
        </div><!--modal dialog-->
    </div><!--modalfade-->
</div><!--container-->
</body>
</html>
