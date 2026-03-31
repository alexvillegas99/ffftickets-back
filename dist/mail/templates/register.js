"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterTemplate = void 0;
const locale_1 = require("date-fns/locale");
const date_fns_tz_1 = require("date-fns-tz");
const RegisterTemplate = (data) => {
    const { name, email } = data;
    const currentDate = (0, date_fns_tz_1.format)(new Date(), "dd 'de' MMMM 'de' yyyy  'a las' HH:mm", {
        timeZone: 'America/Guayaquil',
        locale: locale_1.es,
    });
    return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Bienvenido a FireTickets</title>
  <style>
    /* Reset y estilos base */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: 'Segoe UI', 'Raleway', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      background: linear-gradient(135deg, #f8f9fc 0%, #eef2f8 100%);
      margin: 0;
      padding: 20px;
    }
    
    /* Contenedor principal */
    .email-container {
      max-width: 600px;
      margin: 0 auto;
      background: #ffffff;
      border-radius: 24px;
      overflow: hidden;
      box-shadow: 0 20px 35px -12px rgba(0, 0, 0, 0.1);
    }
    
    /* Header con gradiente */
    .email-header {
      background: linear-gradient(135deg, #8a2be2 0%, #591f9e 100%);
      padding: 32px 24px;
      text-align: center;
    }
    
    .logo {
      max-width: 140px;
      height: auto;
      margin-bottom: 16px;
    }
    
    .email-header h1 {
      color: white;
      font-size: 28px;
      font-weight: 700;
      margin: 0;
      letter-spacing: -0.5px;
    }
    
    /* Cuerpo del correo */
    .email-body {
      padding: 32px 28px;
    }
    
    /* Mensaje de bienvenida */
    .welcome-card {
      background: linear-gradient(135deg, #faf5ff 0%, #f3e8ff 100%);
      border-radius: 20px;
      padding: 28px;
      margin-bottom: 28px;
      text-align: center;
      border: 1px solid rgba(138, 43, 226, 0.2);
    }
    
    .welcome-card h2 {
      color: #1b1a46;
      font-size: 24px;
      margin-bottom: 12px;
    }
    
    .welcome-card p {
      color: #4b5563;
      line-height: 1.6;
      margin-bottom: 8px;
    }
    
    /* Sección de información */
    .info-section {
      background: #f9fafb;
      border-radius: 20px;
      padding: 20px;
      margin-bottom: 24px;
      border: 1px solid #e5e7eb;
    }
    
    .info-section h3 {
      color: #1b1a46;
      font-size: 16px;
      font-weight: 600;
      margin-bottom: 16px;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    
    .info-row {
      display: flex;
      justify-content: space-between;
      padding: 10px 0;
      border-bottom: 1px solid #e5e7eb;
    }
    
    .info-row:last-child {
      border-bottom: none;
    }
    
    .info-label {
      font-weight: 600;
      color: #591f9e;
    }
    
    .info-value {
      color: #1f2937;
    }
    
    /* Tarjetas de métodos de acceso */
    .methods-grid {
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
      margin: 20px 0;
    }
    
    .method-card {
      flex: 1;
      min-width: 120px;
      background: #f9fafb;
      border-radius: 16px;
      padding: 16px;
      text-align: center;
      border: 1px solid #e5e7eb;
      transition: all 0.2s ease;
    }
    
    .method-card:hover {
      border-color: #8a2be2;
      transform: translateY(-2px);
    }
    
    .method-icon {
      width: 48px;
      height: 48px;
      margin: 0 auto 12px;
      background: linear-gradient(135deg, #8a2be2 0%, #591f9e 100%);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .method-icon span {
      color: white;
      font-size: 20px;
      font-weight: bold;
    }
    
    .method-name {
      font-weight: 600;
      color: #1b1a46;
      margin-bottom: 4px;
    }
    
    .method-desc {
      font-size: 11px;
      color: #9ca3af;
    }
    
    /* Alerta de contraseña */
    .password-alert {
      background: #fef3c7;
      border-left: 4px solid #f59e0b;
      border-radius: 12px;
      padding: 16px 20px;
      margin: 24px 0;
    }
    
    .password-alert p {
      color: #92400e;
      font-size: 13px;
      line-height: 1.5;
    }
    
    /* Botón de acción */
    .btn {
      display: inline-block;
      background: linear-gradient(95deg, #8a2be2 0%, #591f9e 100%);
      color: white;
      text-decoration: none;
      padding: 12px 28px;
      border-radius: 40px;
      font-weight: 600;
      font-size: 16px;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
      text-align: center;
    }
    
    .btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 20px -8px rgba(138, 43, 226, 0.4);
    }
    
    /* Separador */
    .divider {
      height: 2px;
      background: linear-gradient(90deg, #8a2be2, #e9d5ff, #8a2be2);
      margin: 24px 0;
    }
    
    /* Footer */
    .email-footer {
      background: #f9fafb;
      padding: 24px 28px;
      text-align: center;
      border-top: 1px solid #e5e7eb;
    }
    
    .footer-links {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 16px;
      margin-bottom: 20px;
    }
    
    .footer-links a {
      color: #6b7280;
      text-decoration: none;
      font-size: 12px;
      font-weight: 500;
      transition: color 0.2s;
    }
    
    .footer-links a:hover {
      color: #8a2be2;
    }
    
    .footer-contact {
      color: #9ca3af;
      font-size: 12px;
      line-height: 1.5;
      margin-bottom: 16px;
    }
    
    .footer-contact a {
      color: #8a2be2;
      text-decoration: none;
    }
    
    .copyright {
      color: #9ca3af;
      font-size: 11px;
      margin-top: 16px;
      padding-top: 16px;
      border-top: 1px solid #e5e7eb;
    }
    
    /* Responsive */
    @media (max-width: 550px) {
      body {
        padding: 10px;
      }
      
      .email-body {
        padding: 24px 20px;
      }
      
      .methods-grid {
        flex-direction: column;
      }
      
      .method-card {
        width: 100%;
      }
      
      .info-row {
        flex-direction: column;
        gap: 4px;
      }
      
      .footer-links {
        gap: 12px;
      }
    }
  </style>
</head>
<body>
  <div class="email-container">
    <!-- Header con gradiente y logo -->
    <div class="email-header">
      <img src="https://corpfourier.s3.us-east-2.amazonaws.com/fff/icono2.png" 
           alt="FireTickets" 
           class="logo"
           style="width: 120px; height: auto;">
      <h1>¡Bienvenido a FireTickets!</h1>
    </div>
    
    <!-- Cuerpo principal -->
    <div class="email-body">
      <!-- Mensaje de bienvenida -->
      <div class="welcome-card">
        <h2>✨ ¡Hola, ${name}! ✨</h2>
        <p>Tu cuenta en FireTickets se ha creado exitosamente.</p>
        <p style="margin-top: 8px;">Con tu cuenta podrás comprar entradas a los mejores eventos del país.</p>
      </div>
      
      <!-- Datos de la cuenta -->
      <div class="info-section">
        <h3>📋 Datos de tu cuenta</h3>
        <div class="info-row">
          <span class="info-label">Nombre completo:</span>
          <span class="info-value">${name}</span>
        </div>
        <div class="info-row">
          <span class="info-label">Correo electrónico:</span>
          <span class="info-value">${email}</span>
        </div>
       
        <div class="info-row">
          <span class="info-label">Fecha de registro:</span>
          <span class="info-value">${currentDate}</span>
        </div>
      </div>
      
      <!-- Métodos de acceso -->
      <div class="info-section">
        <h3>🔐 Métodos de acceso</h3>
        <p style="color: #6b7280; font-size: 14px; margin-bottom: 16px;">Puedes acceder a tu cuenta mediante:</p>
        <div class="methods-grid">
          <div class="method-card">
            <div class="method-icon">
              <span>📧</span>
            </div>
            <div class="method-name">Email y contraseña</div>
            <div class="method-desc">Acceso tradicional</div>
          </div>
          <div class="method-card">
            <div class="method-icon">
              <span>G</span>
            </div>
            <div class="method-name">Google</div>
            <div class="method-desc">Inicio rápido</div>
          </div>
         
        </div>
      </div>
      
      <!-- Alerta de contraseña -->
      <div class="password-alert">
        <p>
          <strong>🔑 Información de tu contraseña</strong><br>
          Tu contraseña actual es tu número de <strong>cédula/RUC</strong>. 
          Te recomendamos cambiarla en la sección de configuración de tu perfil por seguridad.
        </p>
      </div>
      
      <!-- Botón de acción -->
      <div style="text-align: center; margin: 24px 0;">
        <a href="https://firetickets.site/login" class="btn">
          🎫 Iniciar sesión ahora
        </a>
      </div>
      
      <div class="divider"></div>
      
      <div style="font-size: 12px; color: #9ca3af; text-align: center; line-height: 1.5;">
        <p>Este es un correo automático de FireTickets. Por favor no respondas a este mensaje.</p>
        <p style="margin-top: 8px;">Si tienes preguntas, contáctanos a través de nuestra página web.</p>
      </div>
    </div>
    
    <!-- Footer -->
    <div class="email-footer">
      <div class="footer-links">
        <a href="https://firetickets.site/terminos-y-condiciones">Términos y condiciones</a>
        <span style="color: #d1d5db;">|</span>
        <a href="https://firetickets.site/nosotros">Nosotros</a>
        <span style="color: #d1d5db;">|</span>
        <a href="https://firetickets.site/preguntas-frecuentes">Preguntas frecuentes</a>
        <span style="color: #d1d5db;">|</span>
        <a href="https://firetickets.site/contacto">Contacto</a>
      </div>
      
      <div class="footer-contact">
        ¿Necesitas ayuda? Escríbenos a 
        <a href="mailto:info@firetickets.site">info@firetickets.site</a>
      </div>
      
      <div class="copyright">
        © 2024 FireTickets. Todos los derechos reservados.
      </div>
    </div>
  </div>
</body>
</html>`;
};
exports.RegisterTemplate = RegisterTemplate;
//# sourceMappingURL=register.js.map