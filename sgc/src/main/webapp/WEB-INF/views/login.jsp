
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="zxx">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Inicio de Sesión</title>
        <script>
            addEventListener("load", function () {
                setTimeout(hideURLbar, 0);
            }, false);
            function hideURLbar() {
                window.scrollTo(0, 1);
            }
        </script>
        <!-- Bootstrap CSS-->
        <link href="<c:url value='/assets/css/bootstrap.css' />" rel="stylesheet" />
        <!--  Fonts and icons-->
        <link href="http://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css" rel="stylesheet">
    </head>
    <body>
        <div class="container">
            <div class="row">
                <div class="col-md-4 col-md-offset-4">
                    <div class="panel panel-default">
                        <div class="panel-body">
                            <div class="text-center">
                                <h3><i class="glyphicon glyphicon-lock" style="font-size:2em;"></i></h3>
                                <h2 class="text-center">Login</h2>
                                <div class="panel-body">
                                    <form  action="${urlLogin}" method="POST">
                                        <c:if test="${param.error != null}">
                                            <div class="alert alert-danger alert-dismissable" style="text-align: center;">
                                                <strong> ¡Nickname o Contraseña Incorrectos!</strong>
                                            </div>
                                        </c:if>
                                        
                                        <div class="form-group">
                                            <div class="input-group">
                                                <span class="input-group-addon">@</span>
                                                <input id="nick"
                                                       name="nickname"
                                                       autofocus="autofocus"
                                                       class="form-control"
                                                       placeholder="Username"/>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="input-group">
                                                <span class="input-group-addon">
                                                    <i class="glyphicon glyphicon-lock"></i>
                                                </span>
                                                <input id="contrasena"
                                                       name="contrasena"
                                                       class="form-control"
                                                       placeholder="Password"
                                                       type="password"/>
                                            </div>
                                        </div>
                                        <input type="hidden" name="${_csrf.parameterName}"  value="${_csrf.token}" />
                                        <div class="form-group">
                                            <button type="submit" class="btn btn-success btn-block">Login</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            New user? <a href="/" th:href="@{/registration}">Register</a>
                        </div>
                        <div class="col-md-12">
                            Forgot password? <a href="/" th:href="@{/forgot-password}">Reset password</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <script type="text/javascript" th:src="@{/webjars/jquery/3.2.1/jquery.min.js/}"></script>
        <script type="text/javascript" th:src="@{/webjars/bootstrap/3.3.7/js/bootstrap.min.js}"></script>
    </body>
</html>