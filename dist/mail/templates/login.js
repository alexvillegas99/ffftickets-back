"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginMail = void 0;
const locale_1 = require("date-fns/locale");
const date_fns_tz_1 = require("date-fns-tz");
const loginMail = (data) => {
    const { name, ip, location, provider } = data;
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
  <title>Nuevo inicio de sesión - FireTickets</title>
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
    
    /* Saludo */
    .greeting {
      font-size: 24px;
      font-weight: 600;
      color: #1b1a46;
      margin-bottom: 16px;
    }
    
    .greeting span {
      color: #8a2be2;
    }
    
    .message {
      color: #4b5563;
      line-height: 1.6;
      margin-bottom: 28px;
      font-size: 16px;
    }
    
    /* Tarjeta de información */
    .info-card {
      background: linear-gradient(135deg, #faf5ff 0%, #f3e8ff 100%);
      border-radius: 20px;
      padding: 24px;
      margin-bottom: 28px;
      border: 1px solid rgba(138, 43, 226, 0.2);
    }
    
    .info-title {
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 18px;
      font-weight: 600;
      color: #1b1a46;
      margin-bottom: 20px;
      padding-bottom: 12px;
      border-bottom: 2px solid rgba(138, 43, 226, 0.3);
    }
    
    .info-title i {
      font-size: 22px;
    }
    
    .info-table {
      width: 100%;
      border-collapse: collapse;
    }
    
    .info-table td {
      padding: 12px 0;
      border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    }
    
    .info-table td:first-child {
      font-weight: 600;
      color: #591f9e;
      width: 40%;
    }
    
    .info-table td:last-child {
      color: #1f2937;
      font-family: monospace;
    }
    
    /* Alerta de seguridad */
    .security-alert {
      background: #fef3c7;
      border-left: 4px solid #f59e0b;
      border-radius: 12px;
      padding: 16px 20px;
      margin-bottom: 28px;
    }
    
    .security-alert p {
      color: #92400e;
      font-size: 14px;
      line-height: 1.5;
      margin: 0;
    }
    
    .security-alert i {
      margin-right: 8px;
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
      margin-bottom: 24px;
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
      
      .greeting {
        font-size: 20px;
      }
      
      .info-table td {
        display: block;
        padding: 8px 0;
      }
      
      .info-table td:first-child {
        width: 100%;
        padding-bottom: 0;
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
      <h1>Nuevo inicio de sesión</h1>
    </div>
    
    <!-- Cuerpo principal -->
    <div class="email-body">
      <!-- Saludo personalizado -->
      <div class="greeting">
        Hola, <span>${name}</span>
      </div>
      
      <div class="message">
        Registramos un nuevo acceso a tu cuenta. Si fuiste tú, no necesitas hacer nada más. 
        Si no reconoces esta actividad, por favor contacta a nuestro soporte de inmediato.
      </div>
      
      <!-- Tarjeta con detalles de acceso -->
      <div class="info-card">
        <div class="info-title">
          📍 Detalles del acceso
        </div>
        <table class="info-table">
          <tr>
            <td>🌐 Dirección IP</td>
            <td><strong>${ip}</strong></td>
          </tr>
          <tr>
            <td>📍 Ubicación aproximada</td>
            <td>${location}</td>
          </tr>
          <tr>
            <td>🏢 Proveedor de internet</td>
            <td>${provider}</td>
          </tr>
          <tr>
            <td>📅 Fecha y hora</td>
            <td>${currentDate}</td>
          </tr>
        </table>
      </div>
      
      <!-- Alerta de seguridad -->
      <div class="security-alert">
        <p>
          🔒 <strong>¿No reconoces este acceso?</strong><br>
          Si no has iniciado sesión en este dispositivo, recomendamos cambiar tu contraseña 
          de inmediato y contactar a nuestro equipo de soporte.
        </p>
      </div>
      
      <!-- Botón de acción -->
      <div style="text-align: center;">
        <a href="https://firetickets.site/perfil/configuracion" class="btn">
          🔐 Cambiar mi contraseña
        </a>
      </div>
      
      <div class="divider"></div>
      
      <div style="font-size: 13px; color: #6b7280; text-align: center; line-height: 1.5;">
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
exports.loginMail = loginMail;
//# sourceMappingURL=login.js.map