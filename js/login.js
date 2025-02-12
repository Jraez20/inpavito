// main.js

document.addEventListener('DOMContentLoaded', () => {
    const appContainer = document.getElementById('login');

    // HTML como cadena de texto
    const htmlContent = `
        <div class="overlay"></div>
        <div class="card-3d-container">
            <div class="card-3d-wrap" id="cardWrap">
                <div class="card-3d-wrapper">
                    <!-- Formulario de Login -->
                    <div class="card-front">
                        <div class="card p-4 shadow-lg" style="width: 100%; max-width: 400px;">
                            <div class="card-body">
                                <img src="img/inpavito.png" alt="Logo" class="logo">
                                <h3 class="text-center mb-4">Iniciar Sesión</h3>
                                <form>
                                    <div class="mb-3">
                                        <label for="email" class="form-label">Correo Electrónico</label>
                                        <input type="email" class="form-control input-3d" id="email" placeholder="Ingrese su correo" required>
                                    </div>
                                    <div class="mb-3">
                                        <label for="password" class="form-label">Contraseña</label>
                                        <div class="input-group">
                                            <input type="password" class="form-control input-3d" id="password" placeholder="Ingrese su contraseña" required>
                                            <span class="input-group-text" id="togglePasswordLogin" style="cursor: pointer;">
                                                <i class="fas fa-eye" id="eyeIconLogin"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <button type="submit" class="btn btn-primary w-100">Acceder</button>
                                </form>
                                <p class="text-center mt-3">
                                    <a href="#" id="showRegister">Crear cuenta</a> |
                                    <a href="#" id="showRecover">Recuperar contraseña</a>
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Formulario para Crear Cuenta -->
                    <div class="card-back" id="registerForm">
                        <div class="card p-4 shadow-lg" style="width: 100%; max-width: 400px;">
                            <div class="card-body">
                                <img src="img/inpavito.png" alt="Logo" class="logo">
                                <h3 class="text-center mb-4">Registrarse</h3>
                                <form>
                                    <div class="mb-3">
                                        <label for="name" class="form-label">Nombre Completo</label>
                                        <input type="text" class="form-control input-3d" id="name" placeholder="Ingrese su nombre" required>
                                    </div>
                                    <div class="mb-3">
                                        <label for="reg-email" class="form-label">Correo Electrónico</label>
                                        <input type="email" class="form-control input-3d" id="reg-email" placeholder="Ingrese su correo" required>
                                    </div>
                                    <div class="mb-3">
                                        <label for="reg-password" class="form-label">Contraseña</label>
                                        <div class="input-group">
                                            <input type="password" class="form-control input-3d" id="reg-password" placeholder="Ingrese su contraseña" required>
                                            <span class="input-group-text" id="togglePasswordRegister" style="cursor: pointer;">
                                                <i class="fas fa-eye" id="eyeIconRegister"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <label for="reg-password-confirm" class="form-label">Confirmar Contraseña</label>
                                        <div class="input-group">
                                            <input type="password" class="form-control input-3d" id="reg-password-confirm" placeholder="Confirme su contraseña" required>
                                            <span class="input-group-text" id="togglePasswordConfirm" style="cursor: pointer;">
                                                <i class="fas fa-eye" id="eyeIconConfirm"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <label for="phone" class="form-label">Número de Teléfono</label>
                                        <input type="tel" class="form-control input-3d" id="phone" placeholder="Ingrese su número de teléfono" required>
                                    </div>
                                    <button type="submit" class="btn btn-success w-100">Registrarse</button>
                                </form>
                                <p class="text-center mt-3"><a href="#" id="showLogin">Ya tengo cuenta</a></p>
                            </div>
                            
                        </div>
                        <br><br><br>
                    </div>

                    <!-- Formulario para Recuperar Contraseña -->
                    <div class="card-back" id="recoverForm">
                        <div class="card p-4 shadow-lg" style="width: 100%; max-width: 400px;">
                            <div class="card-body">
                                <img src="img/inpavito.png" alt="Logo" class="logo">
                                <h3 class="text-center mb-4">Recuperar Contraseña</h3>
                                <form>
                                    <div class="mb-3">
                                        <label for="recover-email" class="form-label">Correo Electrónico</label>
                                        <input type="email" class="form-control input-3d" id="recover-email" placeholder="Ingrese su correo" required>
                                    </div>
                                    <div class="mb-3">
                                        <label for="security-question" class="form-label">Pregunta de Seguridad</label>
                                        <input type="text" class="form-control input-3d" id="security-question" placeholder="Ingrese su respuesta a la pregunta de seguridad" required>
                                    </div>
                                    <button type="submit" class="btn btn-warning w-100">Recuperar</button>
                                </form>
                                <p class="text-center mt-3"><a href="#" id="showLoginRecover">Volver al inicio de sesión</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Inyectar el contenido HTML en el contenedor
    appContainer.innerHTML = htmlContent;
    
    // Agregar funcionalidad JavaScript aquí (ya proporcionada en la respuesta anterior)

  
        // Mostrar/ocultar contraseña en el formulario de Login
        const togglePasswordLogin = document.getElementById('togglePasswordLogin');
        const passwordFieldLogin = document.getElementById('password');
        const eyeIconLogin = document.getElementById('eyeIconLogin');

        togglePasswordLogin.addEventListener('click', function() {
            const type = passwordFieldLogin.type === 'password' ? 'text' : 'password';
            passwordFieldLogin.type = type;
            eyeIconLogin.classList.toggle('fa-eye');
            eyeIconLogin.classList.toggle('fa-eye-slash');
        });

        // Mostrar/ocultar contraseña en el formulario de Registro
        const togglePasswordRegister = document.getElementById('togglePasswordRegister');
        const passwordFieldRegister = document.getElementById('reg-password');
        const eyeIconRegister = document.getElementById('eyeIconRegister');

        togglePasswordRegister.addEventListener('click', function() {
            const type = passwordFieldRegister.type === 'password' ? 'text' : 'password';
            passwordFieldRegister.type = type;
            eyeIconRegister.classList.toggle('fa-eye');
            eyeIconRegister.classList.toggle('fa-eye-slash');
        });

        // Mostrar/ocultar contraseña de confirmación en el formulario de Registro
        const togglePasswordConfirm = document.getElementById('togglePasswordConfirm');
        const passwordFieldConfirm = document.getElementById('reg-password-confirm');
        const eyeIconConfirm = document.getElementById('eyeIconConfirm');

        togglePasswordConfirm.addEventListener('click', function() {
            const type = passwordFieldConfirm.type === 'password' ? 'text' : 'password';
            passwordFieldConfirm.type = type;
            eyeIconConfirm.classList.toggle('fa-eye');
            eyeIconConfirm.classList.toggle('fa-eye-slash');
        });

        // Funcionalidad para cambiar entre formularios
        document.getElementById("showRegister").addEventListener("click", function(event) {
            event.preventDefault();
            document.getElementById("cardWrap").classList.add("flipped");
            document.getElementById("registerForm").style.display = 'block';
            document.getElementById("recoverForm").style.display = 'none';
        });

        document.getElementById("showLogin").addEventListener("click", function(event) {
            event.preventDefault();
            document.getElementById("cardWrap").classList.remove("flipped");
            document.getElementById("registerForm").style.display = 'none';
            document.getElementById("recoverForm").style.display = 'none';
        });

        document.getElementById("showRecover").addEventListener("click", function(event) {
            event.preventDefault();
            document.getElementById("cardWrap").classList.add("flipped");
            document.getElementById("registerForm").style.display = 'none';
            document.getElementById("recoverForm").style.display = 'block';
        });

        document.getElementById("showLoginRecover").addEventListener("click", function(event) {
            event.preventDefault();
            document.getElementById("cardWrap").classList.remove("flipped");
            document.getElementById("registerForm").style.display = 'none';
            document.getElementById("recoverForm").style.display = 'none';
        });
        

        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                shape: {
                    type: 'circle',
                    stroke: {
                        width: 0,
                        color: '#fff'
                    }
                },
                opacity: {
                    value: 0.5,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#ffffff',
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 3,
                    direction: 'none',
                    random: true,
                    straight: false,
                    out_mode: 'out',
                    bounce: false,
                    attract: {
                        enable: false
                    }
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: {
                        enable: true,
                        mode: 'repulse'
                    },
                    onclick: {
                        enable: true,
                        mode: 'push'
                    }
                }
            },
            retina_detect: true
        });
        

});
