import { addDays } from 'date-fns';
import { es } from 'date-fns/locale';
import { format } from 'date-fns-tz';
import { GetNewPasswordDto, LoginMailDto } from '../dto';

export const PasswordUpdate = () => {
  const currentDate = format(new Date(), "dd 'de' MMMM 'de' yyyy  'a las' HH:mm", {
    timeZone: 'America/Guayaquil',
    locale: es,
  });

  return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Contraseña Actualizada - FireTickets</title>
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
    
    /* Mensaje principal */
    .success-message {
      background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);
      border-radius: 20px;
      padding: 28px;
      margin-bottom: 28px;
      text-align: center;
      border: 1px solid rgba(34, 197, 94, 0.3);
    }
    
    .success-message h2 {
      color: #166534;
      font-size: 24px;
      margin-bottom: 12px;
    }
    
    .success-message p {
      color: #15803d;
      line-height: 1.6;
    }
    
    .success-icon {
      width: 64px;
      height: 64px;
      background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 16px;
    }
    
    .success-icon span {
      color: white;
      font-size: 32px;
      font-weight: bold;
    }
    
    /* Tarjeta de información */
    .info-card {
      background: #f9fafb;
      border-radius: 20px;
      padding: 24px;
      margin-bottom: 24px;
      text-align: center;
      border: 1px solid #e5e7eb;
    }
    
    .info-card p {
      color: #4b5563;
      line-height: 1.6;
    }
    
    /* Sección de seguridad */
    .security-section {
      background: #f9fafb;
      border-radius: 20px;
      padding: 20px;
      margin-bottom: 24px;
      border: 1px solid #e5e7eb;
    }
    
    .security-section h3 {
      color: #1b1a46;
      font-size: 16px;
      font-weight: 600;
      margin-bottom: 12px;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    
    .security-section p {
      color: #6b7280;
      font-size: 14px;
      line-height: 1.5;
    }
    
    .tip-list {
      margin-top: 12px;
      padding-left: 20px;
    }
    
    .tip-list li {
      color: #6b7280;
      font-size: 13px;
      margin: 8px 0;
    }
    
    /* Alerta de seguridad */
    .security-alert {
      background: #fef3c7;
      border-left: 4px solid #f59e0b;
      border-radius: 12px;
      padding: 16px 20px;
      margin: 24px 0;
    }
    
    .security-alert p {
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
      margin: 8px 0;
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
      <h1>Contraseña Actualizada</h1>
    </div>
    
    <!-- Cuerpo principal -->
    <div class="email-body">
      <!-- Mensaje de éxito -->
      <div class="success-message">
        <div class="success-icon">
          <span>✓</span>
        </div>
        <h2>¡Contraseña actualizada con éxito!</h2>
        <p>Tu contraseña ha sido modificada correctamente en tu cuenta de FireTickets.</p>
      </div>
      
      <!-- Fecha del cambio -->
      <div class="info-card">
        <p>
          <strong>📅 Fecha del cambio:</strong> ${currentDate}<br>
          <strong>📍 Ubicación:</strong> Desde tu sesión activa
        </p>
      </div>
      
      <!-- Consejos de seguridad -->
      <div class="security-section">
        <h3>🔒 Consejos para mantener tu cuenta segura</h3>
        <ul class="tip-list">
          <li>✓ Usa contraseñas con al menos 8 caracteres, combinando letras, números y símbolos</li>
          <li>✓ No compartas tu contraseña con nadie</li>
          <li>✓ Activa la verificación en dos pasos si está disponible</li>
          <li>✓ Evita usar la misma contraseña en múltiples plataformas</li>
          <li>✓ Cambia tu contraseña periódicamente por seguridad</li>
        </ul>
      </div>
      
      <!-- Alerta de seguridad -->
      <div class="security-alert">
        <p>
          <strong>⚠️ ¿No realizaste este cambio?</strong><br>
          Si no has modificado tu contraseña, contacta a nuestro soporte de inmediato para proteger tu cuenta.
        </p>
      </div>
      
      <!-- Botón de acción -->
      <div style="text-align: center; margin: 24px 0;">
        <a href="https://firetickets.site/perfil/configuracion" class="btn">
          🔐 Ir a configuración
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